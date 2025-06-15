import type { SubsonicResponseT } from '@api/api.d';
import type { Bookmarks, PlayQueue } from '@api/subsonic-api.d';

///=================\\
// GET ALL BOOKMARKS \\
export type GetBookmarksResponseT = SubsonicResponseT<{
	bookmarks: Bookmarks;
}>;

///===============\\
// CREATE BOOKMARK \\
export type CreateBookmarkParamsT = {
	/*
	 * ID of the media file to bookmark. If a bookmark already exists for this file it will be overwritten.
	 */
	id: string;

	/*
	 * The position (in milliseconds) within the media file.
	 */
	position: number;

	/*
	 * A user-defined comment.
	 */
	comment?: string;
};
export type CreateBookmarkResponseT = SubsonicResponseT<void>;

///===============\\
// DELETE BOOKMARK \\
export type DeleteBookmarkParamsT = {
	/*
	 * ID of the media file for which to delete the bookmark. Other users’ bookmarks are not affected.
	 */
	id: string;
};
export type DeleteBookmarkResponseT = SubsonicResponseT<void>;

///==============\\
// GET PLAY QUEUE \\
export type GetPlayQueueResponseT = SubsonicResponseT<{
	playQueue: PlayQueue;
}>;

///===============\\
// SAVE PLAY QUEUE \\
export type SavePlayQueueParamsT = {
	/*
	 * ID of a song in the play queue. Use one id parameter for each song in the play queue.
	 */
	id?: string;

	/*
	 * The ID of the current playing song.
	 */
	current?: string;

	/*
	 * The position in milliseconds within the currently playing song.
	 */
	position?: number;
};

export type SavePlayQueueResponseT = SubsonicResponseT<void>;
