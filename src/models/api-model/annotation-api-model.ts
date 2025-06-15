import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type { StarParamsT, SetRatingParamsT, ScrobbleParamsT } from '@api/annotation-api';

const createAnnotationApiModel = ($api: Store<SubsonicApi>) => {
	// star
	const fireStar = createEvent<StarParamsT>();
	const starFx = attach({
		source: $api,
		effect: (api, params: StarParamsT) => api.annotationApi.star(params)
	});
	sample({ clock: fireStar, target: starFx });

	// unstar
	const fireUnstar = createEvent<StarParamsT>();
	const unstarFx = attach({
		source: $api,
		effect: (api, params: StarParamsT) => api.annotationApi.unstar(params)
	});
	sample({ clock: fireUnstar, target: unstarFx });

	// setRating
	const fireSetRating = createEvent<SetRatingParamsT>();
	const setRatingFx = attach({
		source: $api,
		effect: (api, params: SetRatingParamsT) => api.annotationApi.setRating(params)
	});
	sample({ clock: fireSetRating, target: setRatingFx });

	// scrobble
	const fireScrobble = createEvent<ScrobbleParamsT>();
	const scrobbleFx = attach({
		source: $api,
		effect: (api, params: ScrobbleParamsT) => api.annotationApi.scrobble(params)
	});
	sample({ clock: fireScrobble, target: scrobbleFx });

	return {
		events: {
			fireStar,
			fireUnstar,
			fireSetRating,
			fireScrobble
		},
		effects: {
			starFx,
			unstarFx,
			setRatingFx,
			scrobbleFx
		},
		pendings: {
			star: starFx.pending,
			unstar: unstarFx.pending,
			setRating: setRatingFx.pending,
			scrobble: scrobbleFx.pending
		}
	};
};

export default createAnnotationApiModel;
