import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type {
	StreamParamsT,
	DownloadParamsT,
	GetCoverArtParamsT,
	GetLyricsParamsT,
	GetAvatarParamsT,
	HlsParamsT,
	GetLyricsBySongIdParamsT,
	GetCaptionsParamsT
} from '@api/retrieval-api';
import type { Store } from 'effector';

const createRetrievalApiModel = ($api: Store<SubsonicApi>) => {
	// stream
	const fireStream = createEvent<StreamParamsT>();
	const streamFx = attach({
		source: $api,
		effect: (api, params: StreamParamsT) => api.retrievalApi.stream(params)
	});
	sample({ clock: fireStream, target: streamFx });

	// download
	const fireDownload = createEvent<DownloadParamsT>();
	const downloadFx = attach({
		source: $api,
		effect: (api, params: DownloadParamsT) => api.retrievalApi.download(params)
	});
	sample({ clock: fireDownload, target: downloadFx });

	// getCoverArt
	const fireGetCoverArt = createEvent<GetCoverArtParamsT>();
	const getCoverArtFx = attach({
		source: $api,
		effect: (api, params: GetCoverArtParamsT) => api.retrievalApi.getCoverArt(params)
	});
	sample({ clock: fireGetCoverArt, target: getCoverArtFx });

	// getLyrics
	const fireGetLyrics = createEvent<GetLyricsParamsT>();
	const getLyricsFx = attach({
		source: $api,
		effect: (api, params: GetLyricsParamsT) => api.retrievalApi.getLyrics(params)
	});
	sample({ clock: fireGetLyrics, target: getLyricsFx });

	// getAvatar
	const fireGetAvatar = createEvent<GetAvatarParamsT>();
	const getAvatarFx = attach({
		source: $api,
		effect: (api, params: GetAvatarParamsT) => api.retrievalApi.getAvatar(params)
	});
	sample({ clock: fireGetAvatar, target: getAvatarFx });

	// hls
	const fireHls = createEvent<HlsParamsT>();
	const hlsFx = attach({
		source: $api,
		effect: (api, params: HlsParamsT) => api.retrievalApi.hls(params)
	});
	sample({ clock: fireHls, target: hlsFx });

	// getCaptions
	const fireGetCaptions = createEvent<GetCaptionsParamsT>();
	const getCaptionsFx = attach({
		source: $api,
		effect: (api, params: GetCaptionsParamsT) => api.retrievalApi.getCaptions(params)
	});
	sample({ clock: fireGetCaptions, target: getCaptionsFx });

	// getLyricsBySongId
	const fireGetLyricsBySongId = createEvent<GetLyricsBySongIdParamsT>();
	const getLyricsBySongIdFx = attach({
		source: $api,
		effect: (api, params: GetLyricsBySongIdParamsT) => api.retrievalApi.getLyricsBySongId(params)
	});
	sample({ clock: fireGetLyricsBySongId, target: getLyricsBySongIdFx });

	return {
		events: {
			fireStream,
			fireDownload,
			fireGetCoverArt,
			fireGetLyrics,
			fireGetAvatar,
			fireHls,
			fireGetCaptions,
			fireGetLyricsBySongId
		},
		effects: {
			streamFx,
			downloadFx,
			getCoverArtFx,
			getLyricsFx,
			getAvatarFx,
			hlsFx,
			getCaptionsFx,
			getLyricsBySongIdFx
		},
		pendings: {
			stream: streamFx.pending,
			download: downloadFx.pending,
			getCoverArt: getCoverArtFx.pending,
			getLyrics: getLyricsFx.pending,
			getAvatar: getAvatarFx.pending,
			hls: hlsFx.pending,
			getCaptions: getCaptionsFx.pending,
			getLyricsBySongId: getLyricsBySongIdFx.pending
		}
	};
};

export default createRetrievalApiModel;
