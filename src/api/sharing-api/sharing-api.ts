import BaseApiProvider from '@api/base-api';
import type {
	GetSharesResponseT,
	SetShareParamsT,
	CreateShareResponseT,
	UpdateShareResponseT,
	DeleteShareParamsT,
	DeleteShareResponseT
} from './sharing-api.d';

class SharingApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns information about shared media this user is allowed to manage. Takes no extra parameters.
	 */
	getShares = async () => {
		const result = await this.api.request<GetSharesResponseT>('/getShares', {
			traceId: 'subsonic-api/get-shares'
		});

		return this.api.handleResponse<GetSharesResponseT>(result);
	};

	/**
	 * Creates a public URL that can be used by anyone to stream music or video from the server.
	 * The URL is short and suitable for posting on Facebook, Twitter etc.
	 *
	 * Note: The user must be authorized to share (see Settings > Users > User is allowed to share files with anyone).
	 */
	createShare = async (queryParams: SetShareParamsT) => {
		const result = await this.api.request<CreateShareResponseT>('/createShare', {
			traceId: 'subsonic-api/create-share',
			params: { queryParams }
		});

		return this.api.handleResponse<CreateShareResponseT>(result);
	};

	/**
	 * Updates the description and/or expiration date for an existing share.
	 */
	updateShare = async (queryParams: SetShareParamsT) => {
		const result = await this.api.request<UpdateShareResponseT>('/updateShare', {
			traceId: 'subsonic-api/update-share',
			params: { queryParams }
		});

		return this.api.handleResponse<UpdateShareResponseT>(result);
	};

	/**
	 * Deletes an existing share.
	 */
	deleteShare = async (queryParams: DeleteShareParamsT) => {
		const result = await this.api.request<DeleteShareResponseT>('/deleteShare', {
			traceId: 'subsonic-api/delete-share',
			params: { queryParams }
		});

		return this.api.handleResponse<DeleteShareResponseT>(result);
	};
}

export default SharingApi;
