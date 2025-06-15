import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type { SearchParamsT } from '@api/searching-api';

const createSearchingApiModel = ($api: Store<SubsonicApi>) => {
	// search2
	const fireSearch2 = createEvent<SearchParamsT>();
	const search2Fx = attach({
		source: $api,
		effect: (api, params: SearchParamsT) => api.searchingApi.search2(params)
	});
	sample({ clock: fireSearch2, target: search2Fx });

	// search3
	const fireSearch3 = createEvent<SearchParamsT>();
	const search3Fx = attach({
		source: $api,
		effect: (api, params: SearchParamsT) => api.searchingApi.search3(params)
	});
	sample({ clock: fireSearch3, target: search3Fx });

	return {
		events: {
			fireSearch2,
			fireSearch3
		},
		effects: {
			search2Fx,
			search3Fx
		},
		pendings: {
			search2: search2Fx.pending,
			search3: search3Fx.pending
		}
	};
};

export default createSearchingApiModel;
