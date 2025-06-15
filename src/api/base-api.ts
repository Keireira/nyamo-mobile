import * as Crypto from 'expo-crypto';
import { mergeDeepRight } from 'ramda';
import { getHttpClient } from '@lib/http-client';

import type { HttpClientT } from '@lib/http-client';
import type { SubsonicResponseT } from '@api/api.d';

export type InitConfig = {
	username: string;
	password: string;
	serverUrl: string;
};

abstract class BaseApiProvider {
	private username: string = '';
	private password: string = '';
	private salt: string = '';
	private token: string = '';
	private version: string = '1.16.1';
	private clientName: string = 'Nyamo Music';
	private clientVersion: string = '1.0.0';
	private format: 'xml' | 'json' = 'json';
	private serverUrl: string = '';
	private httpClient: ReturnType<typeof getHttpClient>;

	constructor() {
		const httpClient = getHttpClient({
			getDefaultHeaders: () => {
				return {
					'Content-Type': 'application/json'
				};
			}
		});

		this.httpClient = httpClient;
	}

	private get config() {
		return {
			u: this.username,
			t: this.token,
			s: this.salt,
			v: this.version,
			c: `${this.clientName} (${this.clientVersion})`,
			f: this.format
		};
	}

	private get isValid() {
		return Boolean(this.username && this.token && this.salt);
	}

	private generateSalt = async () => {
		const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charsetLength = charset.length;

		const randomBytes = await Crypto.getRandomBytesAsync(16);

		const salt = Array.from(randomBytes)
			.map((byte) => charset[byte % charsetLength])
			.join('');

		return salt;
	};

	private generateToken = async () => {
		if (!this.password || !this.salt) {
			throw new Error('Password and salt must be set');
		}

		const token = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, `${this.password}${this.salt}`);

		return token;
	};

	handleResponse<T extends SubsonicResponseT>(result: T): T {
		if (result['subsonic-response'].status === 'failed') {
			throw new Error(result['subsonic-response'].error?.message);
		}

		return result as T;
	}

	handleBlobResponse<T extends SubsonicResponseT | Blob>(result: T): T {
		if (result instanceof Blob) {
			return result as T;
		}

		if (result['subsonic-response'].status === 'failed') {
			throw new Error(result['subsonic-response'].error?.message);
		}

		return result as T;
	}

	setAuthParams = async ({ username, password, serverUrl }: InitConfig) => {
		this.serverUrl = serverUrl.replace(/\/$/, ''); // Remove trailing slash
		this.username = username;
		this.password = password;
		this.salt = await this.generateSalt();
		this.token = await this.generateToken();
		this.password = ''; // Clear password after generating token
	};

	clearAuthParams = () => {
		this.serverUrl = '';
		this.username = '';
		this.password = '';
		this.salt = '';
		this.token = '';
	};

	request<T>(...args: Parameters<HttpClientT<unknown>>): Promise<T> {
		if (!this.httpClient) {
			throw new Error('HTTPClient not specified, unable to make a request');
		}

		if (!this.isValid) {
			throw new Error('Invalid credentials, unable to make a request');
		}

		if (!args[0]) {
			throw new Error('URL is not specified, unable to make a request');
		}

		const [url, opts] = args;

		if (opts?.params) {
			opts.params.queryParams = opts.params.queryParams || {};
		}

		const apiUrl = url.startsWith('http') || url.startsWith('://') ? url : `${this.serverUrl}/rest${url}`;
		const customOpts = mergeDeepRight(
			{
				traceId: opts?.traceId || apiUrl,
				params: { queryParams: this.config }
			},
			opts || {}
		);

		return this.httpClient(apiUrl, customOpts);
	}
}

export default BaseApiProvider;
