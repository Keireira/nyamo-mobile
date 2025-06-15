import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';

const createSystemApiModel = ($api: Store<SubsonicApi>) => {
	// ping
	const firePing = createEvent<void>();
	const getMyselfFx = attach({
		source: $api,
		effect: (api) => api.systemApi.ping()
	});
	sample({ clock: firePing, target: getMyselfFx });

	// getLicense
	const fireGetLicense = createEvent<void>();
	const getLicenseFx = attach({
		source: $api,
		effect: (api) => api.systemApi.getLicense()
	});
	sample({ clock: fireGetLicense, target: getLicenseFx });

	// getOpenSubsonicExtensions
	const fireGetOpenSubsonicExtensions = createEvent<void>();
	const getOpenSubsonicExtensionsFx = attach({
		source: $api,
		effect: (api) => api.systemApi.getOpenSubsonicExtensions()
	});
	sample({ clock: fireGetOpenSubsonicExtensions, target: getOpenSubsonicExtensionsFx });

	// tokenInfo
	const fireTokenInfo = createEvent<void>();
	const tokenInfoFx = attach({
		source: $api,
		effect: (api) => api.systemApi.tokenInfo()
	});
	sample({ clock: fireTokenInfo, target: tokenInfoFx });

	return {
		events: {
			firePing,
			fireGetLicense,
			fireGetOpenSubsonicExtensions,
			fireTokenInfo
		},
		effects: {
			getMyselfFx,
			getLicenseFx,
			getOpenSubsonicExtensionsFx,
			tokenInfoFx
		},
		pendings: {
			ping: getMyselfFx.pending,
			license: getLicenseFx.pending,
			osExtensions: getOpenSubsonicExtensionsFx.pending,
			tokenInfo: tokenInfoFx.pending
		}
	};
};

export default createSystemApiModel;
