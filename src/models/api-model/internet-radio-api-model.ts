import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type { CreateIRSParamsT, UpdateIRSParamsT, DeleteIRSParamsT } from '@api/internet-radio-api';

const createInternetRadioApiModel = ($api: Store<SubsonicApi>) => {
	// getIRS
	const fireGetIRS = createEvent<void>();
	const getIRSFx = attach({
		source: $api,
		effect: (api) => api.internetRadioApi.getIRS()
	});
	sample({ clock: fireGetIRS, target: getIRSFx });

	// createIRS
	const fireCreateIRS = createEvent<CreateIRSParamsT>();
	const createIRSFx = attach({
		source: $api,
		effect: (api, params: CreateIRSParamsT) => api.internetRadioApi.createIRS(params)
	});
	sample({ clock: fireCreateIRS, target: createIRSFx });

	// updateIRS
	const fireUpdateIRS = createEvent<UpdateIRSParamsT>();
	const updateIRSFx = attach({
		source: $api,
		effect: (api, params: UpdateIRSParamsT) => api.internetRadioApi.updateIRS(params)
	});
	sample({ clock: fireUpdateIRS, target: updateIRSFx });

	// deleteIRS
	const fireDeleteIRS = createEvent<DeleteIRSParamsT>();
	const deleteIRSFx = attach({
		source: $api,
		effect: (api, params: DeleteIRSParamsT) => api.internetRadioApi.deleteIRS(params)
	});
	sample({ clock: fireDeleteIRS, target: deleteIRSFx });

	return {
		events: {
			fireGetIRS,
			fireCreateIRS,
			fireUpdateIRS,
			fireDeleteIRS
		},
		effects: {
			getIRSFx,
			createIRSFx,
			updateIRSFx,
			deleteIRSFx
		},
		pendings: {
			getIRS: getIRSFx.pending,
			createIRS: createIRSFx.pending,
			updateIRS: updateIRSFx.pending,
			deleteIRS: deleteIRSFx.pending
		}
	};
};

export default createInternetRadioApiModel;
