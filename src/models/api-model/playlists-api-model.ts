import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type {
	GetPlaylistsParamsT,
	GetPlaylistParamsT,
	CreatePlaylistParamsT,
	UpdatePlaylistParamsT,
	DeletePlaylistParamsT
} from '@api/playlists-api';
import type { Store } from 'effector';

const createSystemApiModel = ($api: Store<SubsonicApi>) => {
	// getPlaylists
	const fireGetPlaylists = createEvent<GetPlaylistsParamsT>();
	const getPlaylistsFx = attach({
		source: $api,
		effect: (api, params: GetPlaylistsParamsT) => api.playlistsApi.getPlaylists(params)
	});
	sample({ clock: fireGetPlaylists, target: getPlaylistsFx });

	// getPlaylist
	const fireGetPlaylist = createEvent<GetPlaylistParamsT>();
	const getPlaylistFx = attach({
		source: $api,
		effect: (api, params: GetPlaylistParamsT) => api.playlistsApi.getPlaylist(params)
	});
	sample({ clock: fireGetPlaylist, target: getPlaylistFx });

	// createPlaylist
	const fireCreatePlaylist = createEvent<CreatePlaylistParamsT>();
	const createPlaylistFx = attach({
		source: $api,
		effect: (api, params: CreatePlaylistParamsT) => api.playlistsApi.createPlaylist(params)
	});
	sample({ clock: fireCreatePlaylist, target: createPlaylistFx });

	// updatePlaylist
	const fireUpdatePlaylist = createEvent<UpdatePlaylistParamsT>();
	const updatePlaylistFx = attach({
		source: $api,
		effect: (api, params: UpdatePlaylistParamsT) => api.playlistsApi.updatePlaylist(params)
	});
	sample({ clock: fireUpdatePlaylist, target: updatePlaylistFx });

	// deletePlaylist
	const fireDeletePlaylist = createEvent<DeletePlaylistParamsT>();
	const deletePlaylistFx = attach({
		source: $api,
		effect: (api, params: DeletePlaylistParamsT) => api.playlistsApi.deletePlaylist(params)
	});
	sample({ clock: fireDeletePlaylist, target: deletePlaylistFx });

	return {
		events: {
			fireGetPlaylists,
			fireGetPlaylist,
			fireCreatePlaylist,
			fireUpdatePlaylist,
			fireDeletePlaylist
		},
		effects: {
			getPlaylistsFx,
			getPlaylistFx,
			createPlaylistFx,
			updatePlaylistFx,
			deletePlaylistFx
		},
		pendings: {
			getPlaylists: getPlaylistsFx.pending,
			getPlaylist: getPlaylistFx.pending,
			createPlaylist: createPlaylistFx.pending,
			updatePlaylist: updatePlaylistFx.pending,
			deletePlaylist: deletePlaylistFx.pending
		}
	};
};

export default createSystemApiModel;
