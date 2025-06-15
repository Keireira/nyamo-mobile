import BaseApiProvider from '@api/base-api';
import type { StarParamsT, SetRatingParamsT, ScrobbleParamsT, AnnotationResponseT } from './annotation-api.d';

class AnnotationApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Attaches a star to a song, album or artist.
	 */
	star = async (queryParams: StarParamsT) => {
		const result = await this.api.request<AnnotationResponseT>('/star', {
			traceId: 'subsonic-api/star',
			params: { queryParams }
		});

		return this.api.handleResponse<AnnotationResponseT>(result);
	};

	/**
	 * Removes a star to a song, album or artist.
	 */
	unstar = async (queryParams: StarParamsT) => {
		const result = await this.api.request<AnnotationResponseT>('/unstar', {
			traceId: 'subsonic-api/unstar',
			params: { queryParams }
		});

		return this.api.handleResponse<AnnotationResponseT>(result);
	};

	/**
	 * Sets the rating for a music file.
	 */
	setRating = async (queryParams: SetRatingParamsT) => {
		const result = await this.api.request<AnnotationResponseT>('/setRating', {
			traceId: 'subsonic-api/setRating',
			params: { queryParams }
		});

		return this.api.handleResponse<AnnotationResponseT>(result);
	};

	/**
	 * \\ FIRE IT WHEN SONG PLAYS //
	 *  ===========================
	 *
	 * Registers the local playback of one or more media files. Typically used when playing media that is cached on the client.
	 * This operation includes the following:
	 *
	 * - “Scrobbles” the media files on last.fm if the user has configured his/her last.fm credentials on the server.
	 * - Updates the play count and last played timestamp for the media files. (Since 1.11.0)
	 * - Makes the media files appear in the “Now playing” page in the web app, and appear in the list of songs returned by getNowPlaying (Since 1.11.0)
	 * - Since 1.8.0 you may specify multiple id (and optionally time) parameters to scrobble multiple files.
	 */
	scrobble = async (queryParams: ScrobbleParamsT) => {
		const result = await this.api.request<AnnotationResponseT>('/scrobble', {
			traceId: 'subsonic-api/scrobble',
			params: { queryParams }
		});

		return this.api.handleResponse<AnnotationResponseT>(result);
	};
}

export default AnnotationApi;
