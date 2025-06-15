import BaseApiProvider from '@api/base-api';
import type {
	GetMusicFoldersResponseT,
	GetIndexesParamsT,
	GetIndexesResponseT,
	GetMusicDirectoryParamsT,
	GetMusicDirectoryResponseT,
	GetGenresResponseT,
	GetArtistsParamsT,
	GetArtistsResponseT,
	GetArtistParamsT,
	GetArtistResponseT,
	GetAlbumParamsT,
	GetAlbumResponseT,
	GetSongParamsT,
	GetSongResponseT,
	GetVideosResponseT,
	GetVideoInfoParamsT,
	GetVideoInfoResponseT,
	GetArtistInfoParamsT,
	GetArtistInfoResponseT,
	GetArtistInfo2ResponseT,
	GetAlbumInfoParamsT,
	GetAlbumInfoResponseT,
	GetAlbumInfo2ResponseT,
	GetSimilarSongsParamsT,
	GetSimilarSongsResponseT,
	GetSimilarSongs2ResponseT,
	GetTopSongsParamsT,
	GetTopSongsResponseT
} from './browsing-api.d';

class BrowsingApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns all configured top-level music folders.
	 * Takes no extra parameters.
	 */
	getMusicFolders = async () => {
		const result = await this.api.request<GetMusicFoldersResponseT>('/getMusicFolders', {
			traceId: 'subsonic-api/get-music-folders'
		});

		return this.api.handleResponse<GetMusicFoldersResponseT>(result);
	};

	/**
	 * Returns an indexed structure of all artists.
	 */
	getIndexes = async (queryParams: GetIndexesParamsT) => {
		const result = await this.api.request<GetIndexesResponseT>('/getIndexes', {
			traceId: 'subsonic-api/get-indexes',
			params: { queryParams }
		});

		return this.api.handleResponse<GetIndexesResponseT>(result);
	};

	/**
	 * Returns a listing of all files in a music directory.
	 * Typically used to get list of albums for an artist, or list of songs for an album.
	 */
	getMusicDirectory = async (queryParams: GetMusicDirectoryParamsT) => {
		const result = await this.api.request<GetMusicDirectoryResponseT>('/getMusicDirectory', {
			traceId: 'subsonic-api/get-music-directory',
			params: { queryParams }
		});

		return this.api.handleResponse<GetMusicDirectoryResponseT>(result);
	};

	/**
	 * Returns all genres.
	 */
	getGenres = async () => {
		const result = await this.api.request<GetGenresResponseT>('/getGenres', {
			traceId: 'subsonic-api/get-genres'
		});

		return this.api.handleResponse<GetGenresResponseT>(result);
	};

	/**
	 * [ID3]
	 * Similar to getIndexes, but organizes music according to ID3 tags.
	 */
	getArtists = async (queryParams: GetArtistsParamsT) => {
		const result = await this.api.request<GetArtistsResponseT>('/getArtists', {
			traceId: 'subsonic-api/get-artists',
			params: { queryParams }
		});

		return this.api.handleResponse<GetArtistsResponseT>(result);
	};

	/**
	 * [ID3]
	 * Returns details for an artist, including a list of albums.
	 * This method organizes music according to ID3 tags.
	 */
	getArtist = async (queryParams: GetArtistParamsT) => {
		const result = await this.api.request<GetArtistResponseT>('/getArtist', {
			traceId: 'subsonic-api/get-artist',
			params: { queryParams }
		});

		return this.api.handleResponse<GetArtistResponseT>(result);
	};

	/**
	 * [ID3]
	 * Returns details for an album, including a list of songs.
	 * This method organizes music according to ID3 tags.
	 */
	getAlbum = async (queryParams: GetAlbumParamsT) => {
		const result = await this.api.request<GetAlbumResponseT>('/getAlbum', {
			traceId: 'subsonic-api/get-album',
			params: { queryParams }
		});

		return this.api.handleResponse<GetAlbumResponseT>(result);
	};

	/**
	 * Returns details for a song.
	 */
	getSong = async (queryParams: GetSongParamsT) => {
		const result = await this.api.request<GetSongResponseT>('/getSong', {
			traceId: 'subsonic-api/get-song',
			params: { queryParams }
		});

		return this.api.handleResponse<GetSongResponseT>(result);
	};

	/**
	 * [WILL NOT BE IMPLEMENTED IN NAVIDROME]
	 *
	 * Returns all video files.
	 */
	getVideos = async () => {
		const result = await this.api.request<GetVideosResponseT>('/getVideos', {
			traceId: 'subsonic-api/get-videos'
		});

		return this.api.handleResponse<GetVideosResponseT>(result);
	};

	/**
	 * [WILL NOT BE IMPLEMENTED IN NAVIDROME]
	 *
	 * Returns details for a video, including information about
	 * available audio tracks, subtitles (captions) and conversions.
	 */
	getVideoInfo = async (queryParams: GetVideoInfoParamsT) => {
		const result = await this.api.request<GetVideoInfoResponseT>('/getVideoInfo', {
			traceId: 'subsonic-api/get-video-info',
			params: { queryParams }
		});

		return this.api.handleResponse<GetVideoInfoResponseT>(result);
	};

	/**
	 * [LAST.FM]
	 * Returns artist info with biography, image URLs and similar artists, using data from last.fm.
	 */
	getArtistInfo = async (queryParams: GetArtistInfoParamsT) => {
		const result = await this.api.request<GetArtistInfoResponseT>('/getArtistInfo', {
			traceId: 'subsonic-api/get-artist-info',
			params: { queryParams }
		});

		return this.api.handleResponse<GetArtistInfoResponseT>(result);
	};

	/**
	 * [LAST.FM] [ID3]
	 * Similar to getArtistInfo, but organizes music according to ID3 tags.
	 */
	getArtistInfo2 = async (queryParams: GetArtistInfoParamsT) => {
		const result = await this.api.request<GetArtistInfo2ResponseT>('/getArtistInfo2', {
			traceId: 'subsonic-api/get-artist-info-2',
			params: { queryParams }
		});

		return this.api.handleResponse<GetArtistInfo2ResponseT>(result);
	};

	/**
	 * [LAST.FM]
	 * Returns album notes, image URLs etc, using data from last.fm.
	 */
	getAlbumInfo = async (queryParams: GetAlbumInfoParamsT) => {
		const result = await this.api.request<GetAlbumInfoResponseT>('/getAlbumInfo', {
			traceId: 'subsonic-api/get-album-info',
			params: { queryParams }
		});

		return this.api.handleResponse<GetAlbumInfoResponseT>(result);
	};

	/**
	 * [LAST.FM] [ID3]
	 * Similar to getAlbumInfo, but organizes music according to ID3 tags.
	 */
	getAlbumInfo2 = async (queryParams: GetAlbumInfoParamsT) => {
		const result = await this.api.request<GetAlbumInfo2ResponseT>('/getAlbumInfo2', {
			traceId: 'subsonic-api/get-album-info-2',
			params: { queryParams }
		});

		return this.api.handleResponse<GetAlbumInfo2ResponseT>(result);
	};

	/**
	 * [LAST.FM]
	 * Returns a random collection of songs from the given artist and similar artists, using data from last.fm.
	 * Typically used for artist radio features.
	 */
	getSimilarSongs = async (queryParams: GetSimilarSongsParamsT) => {
		const result = await this.api.request<GetSimilarSongsResponseT>('/getSimilarSongs', {
			traceId: 'subsonic-api/get-similar-songs',
			params: { queryParams }
		});

		return this.api.handleResponse<GetSimilarSongsResponseT>(result);
	};

	/**
	 * [LAST.FM] [ID3]
	 * Similar to getSimilarSongs, but organizes music according to ID3 tags.
	 */
	getSimilarSongs2 = async (queryParams: GetSimilarSongsParamsT) => {
		const result = await this.api.request<GetSimilarSongs2ResponseT>('/getSimilarSongs2', {
			traceId: 'subsonic-api/get-similar-songs-2',
			params: { queryParams }
		});

		return this.api.handleResponse<GetSimilarSongs2ResponseT>(result);
	};

	/**
	 * [LAST.FM]
	 * Returns top songs for the given artist, using data from last.fm.
	 */
	getTopSongs = async (queryParams: GetTopSongsParamsT) => {
		const result = await this.api.request<GetTopSongsResponseT>('/getTopSongs', {
			traceId: 'subsonic-api/get-top-songs',
			params: { queryParams }
		});

		return this.api.handleResponse<GetTopSongsResponseT>(result);
	};
}

export default BrowsingApi;
