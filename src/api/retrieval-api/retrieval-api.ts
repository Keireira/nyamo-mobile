import BaseApiProvider from '@api/base-api';

import type {
	StreamParamsT,
	StreamResponseT,
	DownloadParamsT,
	DownloadResponseT,
	GetCoverArtParamsT,
	GetCoverArtResponseT,
	GetLyricsParamsT,
	GetLyricsResponseT,
	GetAvatarParamsT,
	GetAvatarResponseT,
	HlsParamsT,
	HlsResponseT,
	GetLyricsBySongIdParamsT,
	GetLyricsBySongIdResponseT,
	GetCaptionsParamsT,
	GetCaptionsResponseT
} from './retrieval-api.d';

class RetrievalApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Streams a given media file.
	 */
	stream = async (queryParams: StreamParamsT) => {
		const result = await this.api.request<StreamResponseT>('/stream', {
			traceId: 'subsonic-api/stream',
			params: { queryParams },
			blobResponse: true
		});

		return this.api.handleBlobResponse<StreamResponseT>(result);
	};

	/**
	 * Downloads a given media file.
	 *
	 * Similar to stream, but this method returns the original media data without transcoding or downsampling.
	 * Accepts ids for Songs, Albums, Artists and Playlists
	 */
	download = async (queryParams: DownloadParamsT) => {
		const result = await this.api.request<DownloadResponseT>('/download', {
			traceId: 'subsonic-api/download',
			params: { queryParams },
			blobResponse: true
		});

		return this.api.handleBlobResponse<DownloadResponseT>(result);
	};

	/**
	 * Returns a cover art image.
	 */
	getCoverArt = async (queryParams: GetCoverArtParamsT) => {
		const result = await this.api.request<GetCoverArtResponseT>('/getCoverArt', {
			traceId: 'subsonic-api/getCoverArt',
			params: { queryParams },
			blobResponse: true
		});

		return this.api.handleBlobResponse<GetCoverArtResponseT>(result);
	};

	/**
	 * Searches for and returns lyrics for a given song.
	 * This method works with embedded lyrics and external files.
	 */
	getLyrics = async (queryParams: GetLyricsParamsT) => {
		const result = await this.api.request<GetLyricsResponseT>('/getLyrics', {
			traceId: 'subsonic-api/getLyrics',
			params: { queryParams }
		});

		return this.api.handleResponse<GetLyricsResponseT>(result);
	};

	/**
	 * Returns the avatar (personal image) for a user.
	 *
	 * If Gravatar is enabled and the user has an email, returns a redirect to their Gravatar.
	 * Or else returns a placeholder
	 */
	getAvatar = async (queryParams: GetAvatarParamsT) => {
		const result = await this.api.request<GetAvatarResponseT>('/getAvatar', {
			traceId: 'subsonic-api/getAvatar',
			params: { queryParams },
			blobResponse: true
		});

		return this.api.handleBlobResponse<GetAvatarResponseT>(result);
	};

	/**
	 * [WILL NOT BE IMPLEMENTED IN NAVIDROME]
	 *
	 * Creates an HLS (HTTP Live Streaming) playlist used for streaming video or audio.
	 *
	 * HLS is a streaming protocol implemented by Apple and works by breaking the overall stream
	 * into a sequence of small HTTP-based file downloads. It’s supported by iOS and newer versions of Android.
	 * This method also supports adaptive bitrate streaming, see the bitRate parameter.
	 */
	hls = async (queryParams: HlsParamsT) => {
		const result = await this.api.request<HlsResponseT>('/hls.m3u8', {
			traceId: 'subsonic-api/hls',
			params: { queryParams }
		});

		// content type “application/vnd.apple.mpegurl” on success
		return this.api.handleBlobResponse<HlsResponseT>(result);
	};

	/**
	 * [WILL NOT BE IMPLEMENTED IN NAVIDROME]
	 *
	 * Returns captions (subtitles) for a video.
	 * Use getVideoInfo to get a list of available captions.
	 */
	getCaptions = async (queryParams: GetCaptionsParamsT) => {
		const result = await this.api.request<GetCaptionsResponseT>('/getCaptions', {
			traceId: 'subsonic-api/get-captions',
			params: { queryParams }
		});

		return this.api.handleBlobResponse<GetCaptionsResponseT>(result);
	};

	/**
	 * [OS EXTENSION]
	 *
	 * Retrieves all structured lyrics from the server for a given song.
	 * The lyrics can come from embedded tags (SYLT/USLT), LRC file/text file, or any other external source.
	 *
	 * OS extension name: 'songLyrics'
	 */
	getLyricsBySongId = async (queryParams: GetLyricsBySongIdParamsT) => {
		const result = await this.api.request<GetLyricsBySongIdResponseT>('/getLyricsBySongId', {
			traceId: 'subsonic-api/get-lyrics-by-song-id',
			params: { queryParams }
		});

		return this.api.handleResponse<GetLyricsBySongIdResponseT>(result);
	};
}

export default RetrievalApi;
