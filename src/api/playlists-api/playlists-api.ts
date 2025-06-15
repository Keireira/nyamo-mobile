import BaseApiProvider from '@api/base-api';
import type {
	GetPlaylistsParamsT,
	GetPlaylistsResponseT,
	GetPlaylistParamsT,
	GetPlaylistResponseT,
	CreatePlaylistParamsT,
	CreatePlaylistResponseT,
	UpdatePlaylistParamsT,
	UpdatePlaylistResponseT,
	DeletePlaylistParamsT,
	DeletePlaylistResponseT
} from './playlists-api.d';

class PlaylistsApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns all playlists a user is allowed to play.
	 *
	 * Navidrome ignores the username parameter.
	 */
	getPlaylists = async (queryParams: GetPlaylistsParamsT) => {
		const result = await this.api.request<GetPlaylistsResponseT>('/getPlaylists', {
			traceId: 'subsonic-api/get-playlists',
			params: { queryParams }
		});

		return this.api.handleResponse<GetPlaylistsResponseT>(result);
	};

	/**
	 * Returns a listing of files in a saved playlist.
	 */
	getPlaylist = async (queryParams: GetPlaylistParamsT) => {
		const result = await this.api.request<GetPlaylistResponseT>('/getPlaylist', {
			traceId: 'subsonic-api/get-playlist',
			params: { queryParams }
		});

		return this.api.handleResponse<GetPlaylistResponseT>(result);
	};

	/**
	 * Creates a playlist.
	 */
	createPlaylist = async (queryParams: CreatePlaylistParamsT) => {
		const result = await this.api.request<CreatePlaylistResponseT>('/createPlaylist', {
			traceId: 'subsonic-api/create-playlist',
			params: { queryParams }
		});

		return this.api.handleResponse<CreatePlaylistResponseT>(result);
	};

	/**
	 * Updates a playlist.
	 * Only the owner of a playlist is allowed to update it.
	 */
	updatePlaylist = async (queryParams: UpdatePlaylistParamsT) => {
		const result = await this.api.request<UpdatePlaylistResponseT>('/updatePlaylist', {
			traceId: 'subsonic-api/update-playlist',
			params: { queryParams }
		});

		return this.api.handleResponse<UpdatePlaylistResponseT>(result);
	};

	/**
	 * Deletes a saved playlist.
	 */
	deletePlaylist = async (queryParams: DeletePlaylistParamsT) => {
		const result = await this.api.request<DeletePlaylistResponseT>('/deletePlaylist', {
			traceId: 'subsonic-api/delete-playlist',
			params: { queryParams }
		});

		return this.api.handleResponse<DeletePlaylistResponseT>(result);
	};
}

export default PlaylistsApi;
