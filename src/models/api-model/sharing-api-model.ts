import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type { SetShareParamsT, DeleteShareParamsT } from '@api/sharing-api';

const createSharingApiModel = ($api: Store<SubsonicApi>) => {
	// getShares
	const fireGetShares = createEvent<void>();
	const getSharesFx = attach({
		source: $api,
		effect: (api) => api.sharingApi.getShares()
	});
	sample({ clock: fireGetShares, target: getSharesFx });

	// createShare
	const fireCreateShare = createEvent<SetShareParamsT>();
	const createShareFx = attach({
		source: $api,
		effect: (api, params: SetShareParamsT) => api.sharingApi.createShare(params)
	});
	sample({ clock: fireCreateShare, target: createShareFx });

	// updateShare
	const fireUpdateShare = createEvent<SetShareParamsT>();
	const updateShareFx = attach({
		source: $api,
		effect: (api, params: SetShareParamsT) => api.sharingApi.updateShare(params)
	});
	sample({ clock: fireUpdateShare, target: updateShareFx });

	// deleteShare
	const fireDeleteShare = createEvent<DeleteShareParamsT>();
	const deleteShareFx = attach({
		source: $api,
		effect: (api, params: DeleteShareParamsT) => api.sharingApi.deleteShare(params)
	});
	sample({ clock: fireDeleteShare, target: deleteShareFx });

	return {
		events: {
			fireGetShares,
			fireCreateShare,
			fireUpdateShare,
			fireDeleteShare
		},
		effects: {
			getSharesFx,
			createShareFx,
			updateShareFx,
			deleteShareFx
		},
		pendings: {
			getShares: getSharesFx.pending,
			createShare: createShareFx.pending,
			updateShare: updateShareFx.pending,
			deleteShare: deleteShareFx.pending
		}
	};
};

export default createSharingApiModel;
