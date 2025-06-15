import BaseApiProvider from '@api/base-api';
import type {
	GetAlbumListParamsT,
	GetAlbumListResponseT,
	GetAlbumList2ResponseT,
	GetRandomSongsParamsT,
	GetRandomSongsResponseT,
	GetSongsByGenreParamsT,
	GetSongsByGenreResponseT,
	GetNowPlayingResponseT,
	GetStarredParamsT,
	GetStarredResponseT,
	GetStarred2ResponseT
} from './album-songs-list-api.d';

class AlbumSongsListApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns a list of random, newest, highest rated etc. albums.
	 * Similar to the album lists on the home page of the Subsonic web interface.
	 */
	getAlbumList = async (queryParams: GetAlbumListParamsT) => {
		const result = await this.api.request<GetAlbumListResponseT>('/getAlbumList', {
			traceId: 'subsonic-api/get-album-list',
			needFullResponse: true,
			params: { queryParams }
		});

		// const totalCount = result.headers.get('x-total-count');

		return this.api.handleResponse<GetAlbumListResponseT>(result);
	};

	/**
	 * [ID3]
	 * Similar to getAlbumList, but organizes music according to ID3 tags.
	 */
	getAlbumList2 = async (queryParams: GetAlbumListParamsT) => {
		const result = await this.api.request<GetAlbumList2ResponseT>('/getAlbumList2', {
			traceId: 'subsonic-api/get-album-list-2',
			needFullResponse: true,
			params: { queryParams }
		});

		// const totalCount = result.headers.get('x-total-count');

		return this.api.handleResponse<GetAlbumList2ResponseT>(result);
	};

	/**
	 * Returns random songs matching the given criteria.
	 */
	getRandomSongs = async (queryParams: GetRandomSongsParamsT) => {
		const result = await this.api.request<GetRandomSongsResponseT>('/getRandomSongs', {
			traceId: 'subsonic-api/get-random-songs',
			params: { queryParams }
		});

		return this.api.handleResponse<GetRandomSongsResponseT>(result);
	};

	/**
	 * Returns songs in a given genre.
	 */
	getSongsByGenre = async (queryParams: GetSongsByGenreParamsT) => {
		const result = await this.api.request<GetSongsByGenreResponseT>('/getSongsByGenre', {
			traceId: 'subsonic-api/get-songs-by-genre',
			params: { queryParams }
		});

		return this.api.handleResponse<GetSongsByGenreResponseT>(result);
	};

	/**
	 * Returns what is currently being played by all users. Takes no extra parameters.
	 */
	getNowPlaying = async () => {
		const result = await this.api.request<GetNowPlayingResponseT>('/getNowPlaying', {
			traceId: 'subsonic-api/get-now-playing'
		});

		return this.api.handleResponse<GetNowPlayingResponseT>(result);
	};

	/**
	 * Returns starred songs, albums and artists.
	 */
	getStarred = async (queryParams: GetStarredParamsT) => {
		const result = await this.api.request<GetStarredResponseT>('/getStarred', {
			traceId: 'subsonic-api/get-starred',
			params: { queryParams }
		});

		return this.api.handleResponse<GetStarredResponseT>(result);
	};

	/**
	 * [ID3]
	 * Similar to getStarred, but organizes music according to ID3 tags.
	 */
	getStarred2 = async (queryParams: GetStarredParamsT) => {
		const result = await this.api.request<GetStarred2ResponseT>('/getStarred2', {
			traceId: 'subsonic-api/get-starred-2',
			params: { queryParams }
		});

		return this.api.handleResponse<GetStarred2ResponseT>(result);
	};
}

export default AlbumSongsListApi;
