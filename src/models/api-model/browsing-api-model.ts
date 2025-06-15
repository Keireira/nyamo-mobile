import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type {
	GetIndexesParamsT,
	GetMusicDirectoryParamsT,
	GetArtistsParamsT,
	GetArtistParamsT,
	GetAlbumParamsT,
	GetSongParamsT,
	GetVideoInfoParamsT,
	GetArtistInfoParamsT,
	GetAlbumInfoParamsT,
	GetSimilarSongsParamsT,
	GetTopSongsParamsT
} from '@api/browsing-api';
import type { Store } from 'effector';

const createBrowsingApiModel = ($api: Store<SubsonicApi>) => {
	// getMusicFolders
	const fireGetMusicFolders = createEvent<void>();
	const getMusicFoldersFx = attach({
		source: $api,
		effect: (api) => api.browsingApi.getMusicFolders()
	});
	sample({ clock: fireGetMusicFolders, target: getMusicFoldersFx });

	// getIndexes
	const fireGetIndexes = createEvent<GetIndexesParamsT>();
	const getIndexesFx = attach({
		source: $api,
		effect: (api, params: GetIndexesParamsT) => api.browsingApi.getIndexes(params)
	});
	sample({ clock: fireGetIndexes, target: getIndexesFx });

	// getMusicDirectory
	const fireGetMusicDirectory = createEvent<GetMusicDirectoryParamsT>();
	const getMusicDirectoryFx = attach({
		source: $api,
		effect: (api, params: GetMusicDirectoryParamsT) => api.browsingApi.getMusicDirectory(params)
	});
	sample({ clock: fireGetMusicDirectory, target: getMusicDirectoryFx });

	// getGenres
	const fireGetGenres = createEvent<void>();
	const getGenresFx = attach({
		source: $api,
		effect: (api) => api.browsingApi.getGenres()
	});
	sample({ clock: fireGetGenres, target: getGenresFx });

	// getArtists
	const fireGetArtists = createEvent<GetArtistsParamsT>();
	const getArtistsFx = attach({
		source: $api,
		effect: (api, params: GetArtistsParamsT) => api.browsingApi.getArtists(params)
	});
	sample({ clock: fireGetArtists, target: getArtistsFx });

	// getArtist
	const fireGetArtist = createEvent<GetArtistParamsT>();
	const getArtistFx = attach({
		source: $api,
		effect: (api, params: GetArtistParamsT) => api.browsingApi.getArtist(params)
	});
	sample({ clock: fireGetArtist, target: getArtistFx });

	// getAlbum
	const fireGetAlbum = createEvent<GetAlbumParamsT>();
	const getAlbumFx = attach({
		source: $api,
		effect: (api, params: GetAlbumParamsT) => api.browsingApi.getAlbum(params)
	});
	sample({ clock: fireGetAlbum, target: getAlbumFx });

	// getSong
	const fireGetSong = createEvent<GetSongParamsT>();
	const getSongFx = attach({
		source: $api,
		effect: (api, params: GetSongParamsT) => api.browsingApi.getSong(params)
	});
	sample({ clock: fireGetSong, target: getSongFx });

	// getVideos
	const fireGetVideos = createEvent<void>();
	const getVideosFx = attach({
		source: $api,
		effect: (api) => api.browsingApi.getVideos()
	});
	sample({ clock: fireGetVideos, target: getVideosFx });

	// getVideoInfo
	const fireGetVideoInfo = createEvent<GetVideoInfoParamsT>();
	const getVideoInfoFx = attach({
		source: $api,
		effect: (api, params: GetVideoInfoParamsT) => api.browsingApi.getVideoInfo(params)
	});
	sample({ clock: fireGetVideoInfo, target: getVideoInfoFx });

	// getArtistInfo
	const fireGetArtistInfo = createEvent<GetArtistInfoParamsT>();
	const getArtistInfoFx = attach({
		source: $api,
		effect: (api, params: GetArtistInfoParamsT) => api.browsingApi.getArtistInfo(params)
	});
	sample({ clock: fireGetArtistInfo, target: getArtistInfoFx });

	// getArtistInfo2
	const fireGetArtistInfo2 = createEvent<GetArtistInfoParamsT>();
	const getArtistInfo2Fx = attach({
		source: $api,
		effect: (api, params: GetArtistInfoParamsT) => api.browsingApi.getArtistInfo2(params)
	});
	sample({ clock: fireGetArtistInfo2, target: getArtistInfo2Fx });

	// getAlbumInfo
	const fireGetAlbumInfo = createEvent<GetAlbumInfoParamsT>();
	const getAlbumInfoFx = attach({
		source: $api,
		effect: (api, params: GetAlbumInfoParamsT) => api.browsingApi.getAlbumInfo(params)
	});
	sample({ clock: fireGetAlbumInfo, target: getAlbumInfoFx });

	// getAlbumInfo2
	const fireGetAlbumInfo2 = createEvent<GetAlbumInfoParamsT>();
	const getAlbumInfo2Fx = attach({
		source: $api,
		effect: (api, params: GetAlbumInfoParamsT) => api.browsingApi.getAlbumInfo2(params)
	});
	sample({ clock: fireGetAlbumInfo2, target: getAlbumInfo2Fx });

	// getSimilarSongs
	const fireGetSimilarSongs = createEvent<GetSimilarSongsParamsT>();
	const getSimilarSongsFx = attach({
		source: $api,
		effect: (api, params: GetSimilarSongsParamsT) => api.browsingApi.getSimilarSongs(params)
	});
	sample({ clock: fireGetSimilarSongs, target: getSimilarSongsFx });

	// getSimilarSongs2
	const fireGetSimilarSongs2 = createEvent<GetSimilarSongsParamsT>();
	const getSimilarSongs2Fx = attach({
		source: $api,
		effect: (api, params: GetSimilarSongsParamsT) => api.browsingApi.getSimilarSongs2(params)
	});
	sample({ clock: fireGetSimilarSongs2, target: getSimilarSongs2Fx });

	// getTopSongs
	const fireGetTopSongs = createEvent<GetTopSongsParamsT>();
	const getTopSongsFx = attach({
		source: $api,
		effect: (api, params: GetTopSongsParamsT) => api.browsingApi.getTopSongs(params)
	});
	sample({ clock: fireGetTopSongs, target: getTopSongsFx });

	return {
		events: {
			fireGetMusicFolders,
			fireGetIndexes,
			fireGetMusicDirectory,
			fireGetGenres,
			fireGetArtists,
			fireGetArtist,
			fireGetAlbum,
			fireGetSong,
			fireGetVideos,
			fireGetVideoInfo,
			fireGetArtistInfo,
			fireGetArtistInfo2,
			fireGetAlbumInfo,
			fireGetAlbumInfo2,
			fireGetSimilarSongs,
			fireGetSimilarSongs2,
			fireGetTopSongs
		},
		effects: {
			getMusicFoldersFx,
			getIndexesFx,
			getMusicDirectoryFx,
			getGenresFx,
			getArtistsFx,
			getArtistFx,
			getAlbumFx,
			getSongFx,
			getVideosFx,
			getArtistInfoFx,
			getArtistInfo2Fx,
			getAlbumInfoFx,
			getAlbumInfo2Fx,
			getSimilarSongsFx,
			getSimilarSongs2Fx,
			getTopSongsFx
		},
		pendings: {
			musicFolders: getMusicFoldersFx.pending,
			indexes: getIndexesFx.pending,
			musicDirectory: getMusicDirectoryFx.pending,
			genres: getGenresFx.pending,
			artists: getArtistsFx.pending,
			artist: getArtistFx.pending,
			album: getAlbumFx.pending,
			song: getSongFx.pending,
			videos: getVideosFx.pending,
			videoInfo: getVideoInfoFx.pending,
			artistInfo: getArtistInfoFx.pending,
			artistInfo2: getArtistInfo2Fx.pending,
			albumInfo: getAlbumInfoFx.pending,
			albumInfo2: getAlbumInfo2Fx.pending,
			similarSongs: getSimilarSongsFx.pending,
			similarSongs2: getSimilarSongs2Fx.pending,
			topSongs: getTopSongsFx.pending
		}
	};
};

export default createBrowsingApiModel;
