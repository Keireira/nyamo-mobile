import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type { ControlJukeboxParamsT } from '@api/jukebox-api';

const createJukeboxApiModel = ($api: Store<SubsonicApi>) => {
	// controlJukebox
	const fireControlJukebox = createEvent<ControlJukeboxParamsT>();
	const controlJukeboxFx = attach({
		source: $api,
		effect: (api, params: ControlJukeboxParamsT) => api.jukeboxApi.controlJukebox(params)
	});
	sample({ clock: fireControlJukebox, target: controlJukeboxFx });

	return {
		events: {
			fireControlJukebox
		},
		effects: {
			controlJukeboxFx
		},
		pendings: {
			controlJukebox: controlJukeboxFx.pending
		}
	};
};

export default createJukeboxApiModel;
