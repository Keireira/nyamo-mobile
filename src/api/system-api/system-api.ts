import BaseApiProvider from '@api/base-api';
import type {
	GetPingResponseT,
	GetLicenseResponseT,
	GetOpenSubsonicExtensionsResponseT,
	GetTokenInfoResponseT
} from './system-api.d';

class SystemApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Test connectivity with the server.
	 */
	ping = async () => {
		const result = await this.api.request<GetPingResponseT>('/ping', {
			traceId: 'subsonic-api/ping'
		});

		return this.api.handleResponse<GetPingResponseT>(result);
	};

	/**
	 * Get details about the software license.
	 *
	 * Navidrome always returns true
	 */
	getLicense = async () => {
		const result = await this.api.request<GetLicenseResponseT>('/getLicense', {
			traceId: 'subsonic-api/get-license'
		});

		return this.api.handleResponse<GetLicenseResponseT>(result);
	};

	/**
	 * [OS EXTENSION]
	 * List the OpenSubsonic extensions supported by this server.
	 */
	getOpenSubsonicExtensions = async () => {
		const result = await this.api.request<GetOpenSubsonicExtensionsResponseT>('/getOpenSubsonicExtensions', {
			traceId: 'subsonic-api/get-open-subsonic-extensions'
		});

		return this.api.handleResponse<GetOpenSubsonicExtensionsResponseT>(result);
	};

	/**
	 * [OS EXTENSION]
	 * Returns data about an API key.
	 *
	 * OS extension name: 'apiKeyAuthentication'
	 */
	tokenInfo = async () => {
		const result = await this.api.request<GetTokenInfoResponseT>('/tokenInfo', {
			traceId: 'subsonic-api/token-info'
		});

		return this.api.handleResponse<GetTokenInfoResponseT>(result);
	};
}

export default SystemApi;
