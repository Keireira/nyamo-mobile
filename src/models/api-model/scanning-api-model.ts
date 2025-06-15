import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type { StartScanParamsT } from '@api/scanning-api';

const createScanningApiModel = ($api: Store<SubsonicApi>) => {
	// getScanStatus
	const fireGetScanStatus = createEvent<void>();
	const getScanStatusFx = attach({
		source: $api,
		effect: (api) => api.scanningApi.getScanStatus()
	});
	sample({ clock: fireGetScanStatus, target: getScanStatusFx });

	// startScan
	const fireStartScan = createEvent<StartScanParamsT>();
	const startScanFx = attach({
		source: $api,
		effect: (api, params: StartScanParamsT) => api.scanningApi.startScan(params)
	});
	sample({ clock: fireStartScan, target: startScanFx });

	return {
		events: {
			fireGetScanStatus,
			fireStartScan
		},
		effects: {
			getScanStatusFx,
			startScanFx
		},
		pendings: {
			getScanStatus: getScanStatusFx.pending,
			startScan: startScanFx.pending
		}
	};
};

export default createScanningApiModel;
