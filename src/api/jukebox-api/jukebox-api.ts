import BaseApiProvider from '@api/base-api';
import type { ControlJukeboxParamsT, ControlJukeboxResponseT } from './jukebox-api.d';

class JukeboxApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Controls the jukebox, i.e., playback directly on the server’s audio hardware.
	 *
	 * Note: The user must be authorized to control the jukebox
	 * (see Settings > Users > User is allowed to play files in jukebox mode).
	 */
	controlJukebox = async (queryParams: ControlJukeboxParamsT) => {
		const result = await this.api.request<ControlJukeboxResponseT>('/jukeboxControl', {
			traceId: 'subsonic-api/control-jukebox',
			params: { queryParams }
		});

		return this.api.handleResponse<ControlJukeboxResponseT>(result);
	};
}

export default JukeboxApi;
