import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type {
	GetAlbumListParamsT,
	GetRandomSongsParamsT,
	GetSongsByGenreParamsT,
	GetStarredParamsT
} from '@api/album-songs-list-api';

const createListsApiModel = ($api: Store<SubsonicApi>) => {
	// getAlbumList
	const fireGetAlbumList = createEvent<GetAlbumListParamsT>();
	const getAlbumListFx = attach({
		source: $api,
		effect: (api, params: GetAlbumListParamsT) => api.albumSongsListApi.getAlbumList(params)
	});
	sample({ clock: fireGetAlbumList, target: getAlbumListFx });

	// getAlbumList2
	const fireGetAlbumList2 = createEvent<GetAlbumListParamsT>();
	const getAlbumList2Fx = attach({
		source: $api,
		effect: (api, params: GetAlbumListParamsT) => api.albumSongsListApi.getAlbumList2(params)
	});
	sample({ clock: fireGetAlbumList2, target: getAlbumList2Fx });

	// getRandomSongs
	const fireGetRandomSongs = createEvent<GetRandomSongsParamsT>();
	const getRandomSongsFx = attach({
		source: $api,
		effect: (api, params: GetRandomSongsParamsT) => api.albumSongsListApi.getRandomSongs(params)
	});
	sample({ clock: fireGetRandomSongs, target: getRandomSongsFx });

	// getSongsByGenre
	const fireGetSongsByGenre = createEvent<GetSongsByGenreParamsT>();
	const getSongsByGenreFx = attach({
		source: $api,
		effect: (api, params: GetSongsByGenreParamsT) => api.albumSongsListApi.getSongsByGenre(params)
	});
	sample({ clock: fireGetSongsByGenre, target: getSongsByGenreFx });

	// getNowPlaying
	const fireGetNowPlaying = createEvent<void>();
	const getNowPlayingFx = attach({
		source: $api,
		effect: (api) => api.albumSongsListApi.getNowPlaying()
	});
	sample({ clock: fireGetNowPlaying, target: getNowPlayingFx });

	// getStarred
	const fireGetStarred = createEvent<GetStarredParamsT>();
	const getStarredFx = attach({
		source: $api,
		effect: (api, params: GetStarredParamsT) => api.albumSongsListApi.getStarred(params)
	});
	sample({ clock: fireGetStarred, target: getStarredFx });

	// getStarred2
	const fireGetStarred2 = createEvent<GetStarredParamsT>();
	const getStarred2Fx = attach({
		source: $api,
		effect: (api, params: GetStarredParamsT) => api.albumSongsListApi.getStarred2(params)
	});
	sample({ clock: fireGetStarred2, target: getStarred2Fx });

	return {
		events: {
			fireGetAlbumList,
			fireGetAlbumList2,
			fireGetRandomSongs,
			fireGetSongsByGenre,
			fireGetNowPlaying,
			fireGetStarred,
			fireGetStarred2
		},
		effects: {
			getAlbumListFx,
			getAlbumList2Fx,
			getRandomSongsFx,
			getSongsByGenreFx,
			getNowPlayingFx,
			getStarredFx,
			getStarred2Fx
		},
		pendings: {
			getAlbumList: getAlbumListFx.pending,
			getAlbumList2: getAlbumList2Fx.pending,
			getRandomSongs: getRandomSongsFx.pending,
			getSongsByGenre: getSongsByGenreFx.pending,
			getNowPlaying: getNowPlayingFx.pending,
			getStarred: getStarredFx.pending,
			getStarred2: getStarred2Fx.pending
		}
	};
};

export default createListsApiModel;
