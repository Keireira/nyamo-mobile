import BaseApiProvider from '@api/base-api';
import type {
	GetBookmarksResponseT,
	CreateBookmarkParamsT,
	CreateBookmarkResponseT,
	DeleteBookmarkParamsT,
	DeleteBookmarkResponseT,
	GetPlayQueueResponseT,
	SavePlayQueueParamsT,
	SavePlayQueueResponseT
} from './bookmarks-api.d';

/**
 * Bookmark is a position within a certain media file
 * Bookmarks are personal and not visible to other users;
 */
class BookmarksApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns all bookmarks for this user.
	 */
	getBookmarks = async () => {
		const result = await this.api.request<GetBookmarksResponseT>('/getBookmarks', {
			traceId: 'subsonic-api/get-bookmarks'
		});

		return this.api.handleResponse<GetBookmarksResponseT>(result);
	};

	/**
	 * Creates or updates a bookmark (a position within a media file).
	 */
	createBookmark = async (queryParams: CreateBookmarkParamsT) => {
		const result = await this.api.request<CreateBookmarkResponseT>('/createBookmark', {
			traceId: 'subsonic-api/create-bookmark',
			params: { queryParams }
		});

		return this.api.handleResponse<CreateBookmarkResponseT>(result);
	};

	/**
	 * Deletes a bookmark (a position within a media file).
	 */
	deleteBookmark = async (queryParams: DeleteBookmarkParamsT) => {
		const result = await this.api.request<DeleteBookmarkResponseT>('/deleteBookmark', {
			traceId: 'subsonic-api/delete-bookmark',
			params: { queryParams }
		});

		return this.api.handleResponse<DeleteBookmarkResponseT>(result);
	};

	/**
	 * Returns the state of the play queue for this user (as set by savePlayQueue).
	 *
	 * This includes the tracks
	 *  - in the play queue
	 *  - the currently playing track
	 *  - the position within this track
	 *
	 * Typically used to allow a user to move between different clients/apps while retaining the same play queue
	 * (for instance when listening to an audio book).
	 */
	getPlayQueue = async () => {
		const result = await this.api.request<GetPlayQueueResponseT>('/getPlayQueue', {
			traceId: 'subsonic-api/get-play-queue'
		});

		return this.api.handleResponse<GetPlayQueueResponseT>(result);
	};

	/**
	 * Saves the state of the play queue for this user.
	 *
	 * This includes the tracks
	 *  - in the play queue
	 *  - the currently playing track,
	 *  - the position within this track
	 *
	 * Typically used to allow a user to move between different clients/apps while retaining the same play queue
	 * (for instance when listening to an audio book).
	 */
	savePlayQueue = async (queryParams: SavePlayQueueParamsT) => {
		const result = await this.api.request<SavePlayQueueResponseT>('/savePlayQueue', {
			traceId: 'subsonic-api/save-play-queue',
			params: { queryParams }
		});

		return this.api.handleResponse<SavePlayQueueResponseT>(result);
	};
}

export default BookmarksApi;
