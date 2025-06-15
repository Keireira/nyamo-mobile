import BaseApiProvider from '@api/base-api';
import type {
	GetIRSResponseT,
	CreateIRSParamsT,
	CreateIRSResponseT,
	UpdateIRSParamsT,
	UpdateIRSResponseT,
	DeleteIRSParamsT,
	DeleteIRSResponseT
} from './internet-radio-api.d';

class InternetRadioApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns all internet radio stations. Takes no extra parameters.
	 */
	getIRS = async () => {
		const result = await this.api.request<GetIRSResponseT>('/getInternetRadioStations', {
			traceId: 'subsonic-api/get-internet-radio-stations'
		});

		return this.api.handleResponse<GetIRSResponseT>(result);
	};

	/**
	 * Adds a new internet radio station.
	 * Only users with admin privileges are allowed to call this method.
	 */
	createIRS = async (queryParams: CreateIRSParamsT) => {
		const result = await this.api.request<CreateIRSResponseT>('/createInternetRadioStation', {
			traceId: 'subsonic-api/create-internet-radio-station',
			params: { queryParams }
		});

		return this.api.handleResponse<CreateIRSResponseT>(result);
	};

	/**
	 * Updates an existing internet radio station.
	 * Only users with admin privileges are allowed to call this method.
	 */
	updateIRS = async (queryParams: UpdateIRSParamsT) => {
		const result = await this.api.request<UpdateIRSResponseT>('/updateInternetRadioStation', {
			traceId: 'subsonic-api/update-internet-radio-station',
			params: { queryParams }
		});

		return this.api.handleResponse<UpdateIRSResponseT>(result);
	};

	/**
	 * Deletes an existing internet radio station.
	 * Only users with admin privileges are allowed to call this method.
	 */
	deleteIRS = async (queryParams: DeleteIRSParamsT) => {
		const result = await this.api.request<DeleteIRSResponseT>('/deleteInternetRadioStation', {
			traceId: 'subsonic-api/delete-internet-radio-station',
			params: { queryParams }
		});

		return this.api.handleResponse<DeleteIRSResponseT>(result);
	};
}

export default InternetRadioApi;
