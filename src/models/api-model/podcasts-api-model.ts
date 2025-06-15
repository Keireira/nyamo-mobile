import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type {
	GetPodcastsParamsT,
	GetPodcastEpisodeParamsT,
	GetNewestPodcastsParamsT,
	CreatePodcastChannelParamsT,
	DeletePodcastChannelParamsT,
	DeletePodcastEpisodeParamsT,
	DownloadPodcastEpisodeParamsT
} from '@api/podcasts-api';
import type { Store } from 'effector';

const createPodcastsApiModel = ($api: Store<SubsonicApi>) => {
	// getPodcasts
	const fireGetPodcasts = createEvent<GetPodcastsParamsT>();
	const getPodcastsFx = attach({
		source: $api,
		effect: (api, params: GetPodcastsParamsT) => api.podcastsApi.getPodcasts(params)
	});
	sample({ clock: fireGetPodcasts, target: getPodcastsFx });

	// getPodcastEpisode
	const fireGetPodcastEpisode = createEvent<GetPodcastEpisodeParamsT>();
	const getPodcastEpisodeFx = attach({
		source: $api,
		effect: (api, params: GetPodcastEpisodeParamsT) => api.podcastsApi.getPodcastEpisode(params)
	});
	sample({ clock: fireGetPodcastEpisode, target: getPodcastEpisodeFx });

	// getNewestPodcasts
	const fireGetNewestPodcasts = createEvent<GetNewestPodcastsParamsT>();
	const getNewestPodcastsFx = attach({
		source: $api,
		effect: (api, params: GetNewestPodcastsParamsT) => api.podcastsApi.getNewestPodcasts(params)
	});
	sample({ clock: fireGetNewestPodcasts, target: getNewestPodcastsFx });

	// refreshPodcasts
	const fireRefreshPodcasts = createEvent<void>();
	const refreshPodcastsFx = attach({
		source: $api,
		effect: (api) => api.podcastsApi.refreshPodcasts()
	});
	sample({ clock: fireRefreshPodcasts, target: refreshPodcastsFx });

	// createPodcastChannel
	const fireCreatePodcastChannel = createEvent<CreatePodcastChannelParamsT>();
	const createPodcastChannelFx = attach({
		source: $api,
		effect: (api, params: CreatePodcastChannelParamsT) => api.podcastsApi.createPodcastChannel(params)
	});
	sample({ clock: fireCreatePodcastChannel, target: createPodcastChannelFx });

	// deletePodcastChannel
	const fireDeletePodcastChannel = createEvent<DeletePodcastChannelParamsT>();
	const deletePodcastChannelFx = attach({
		source: $api,
		effect: (api, params: DeletePodcastChannelParamsT) => api.podcastsApi.deletePodcastChannel(params)
	});
	sample({ clock: fireDeletePodcastChannel, target: deletePodcastChannelFx });

	// deletePodcastEpisode
	const fireDeletePodcastEpisode = createEvent<DeletePodcastEpisodeParamsT>();
	const deletePodcastEpisodeFx = attach({
		source: $api,
		effect: (api, params: DeletePodcastEpisodeParamsT) => api.podcastsApi.deletePodcastEpisode(params)
	});
	sample({ clock: fireDeletePodcastEpisode, target: deletePodcastEpisodeFx });

	// downloadPodcastEpisode
	const fireDownloadPodcastEpisode = createEvent<DownloadPodcastEpisodeParamsT>();
	const downloadPodcastEpisodeFx = attach({
		source: $api,
		effect: (api, params: DownloadPodcastEpisodeParamsT) => api.podcastsApi.downloadPodcastEpisode(params)
	});
	sample({ clock: fireDownloadPodcastEpisode, target: downloadPodcastEpisodeFx });

	return {
		events: {
			fireGetPodcasts,
			fireGetPodcastEpisode,
			fireGetNewestPodcasts,
			fireRefreshPodcasts,
			fireCreatePodcastChannel,
			fireDeletePodcastChannel,
			fireDeletePodcastEpisode,
			fireDownloadPodcastEpisode
		},
		effects: {
			getPodcastsFx,
			getPodcastEpisodeFx,
			getNewestPodcastsFx,
			refreshPodcastsFx,
			createPodcastChannelFx,
			deletePodcastChannelFx,
			deletePodcastEpisodeFx,
			downloadPodcastEpisodeFx
		},
		pendings: {
			getPodcasts: getPodcastsFx.pending,
			getPodcastEpisode: getPodcastEpisodeFx.pending,
			getNewestPodcasts: getNewestPodcastsFx.pending,
			refreshPodcasts: refreshPodcastsFx.pending,
			createPodcastChannel: createPodcastChannelFx.pending,
			deletePodcastChannel: deletePodcastChannelFx.pending,
			deletePodcastEpisode: deletePodcastEpisodeFx.pending,
			downloadPodcastEpisode: downloadPodcastEpisodeFx.pending
		}
	};
};

export default createPodcastsApiModel;
