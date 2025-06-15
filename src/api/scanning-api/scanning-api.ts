import BaseApiProvider from '@api/base-api';
import type { GetScanStatusResponseT, StartScanParamsT } from './scanning-api.d';

class ScanningApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns the current status for media library scanning. Takes no extra parameters.
	 * Also returns the extra fields lastScan and folderCount
	 */
	getScanStatus = async () => {
		const result = await this.api.request<GetScanStatusResponseT>('/getScanStatus', {
			traceId: 'subsonic-api/get-scan-status'
		});

		return this.api.handleResponse<GetScanStatusResponseT>(result);
	};

	/**
	 * Accepts an extra fullScan boolean param, to force a full scan
	 */
	startScan = async (queryParams: StartScanParamsT) => {
		const result = await this.api.request<GetScanStatusResponseT>('/startScan', {
			traceId: 'subsonic-api/start-scan',
			params: { queryParams }
		});

		return this.api.handleResponse<GetScanStatusResponseT>(result);
	};
}

export default ScanningApi;
