import type { SubsonicResponseT } from '@api/api.d';
import type { Playlists, PlaylistWithSongs } from '@api/subsonic-api.d';

///=============\\
// GET PLAYLISTS \\
export type GetPlaylistsParamsT = {
	/**
	 * If specified, return playlists for this user rather than for the authenticated user.
	 * The authenticated user must have admin role if this parameter is used.
	 */
	username?: string;
};
export type GetPlaylistsResponseT = SubsonicResponseT<{
	playlists: Playlists;
}>;

///============\\
// GET PLAYLIST \\
export type GetPlaylistParamsT = {
	/**
	 * ID of the playlist to return, as obtained by getPlaylists.
	 */
	id: string;
};
export type GetPlaylistResponseT = SubsonicResponseT<{
	playlist: PlaylistWithSongs;
}>;

///===============\\
// CREATE PLAYLIST \\
export type CreatePlaylistParamsT = {
	/**
	 * The human-readable name of the playlist.
	 */
	name: string;

	/**
	 * ID of a song in the playlist. Use one songId parameter for each song in the playlist.
	 */
	songId?: string;
};
export type CreatePlaylistResponseT = SubsonicResponseT<{
	playlist: PlaylistWithSongs;
}>;

///===============\\
// UPDATE PLAYLIST \\
export type UpdatePlaylistParamsT = {
	/**
	 * The playlist ID.
	 */
	playlistId: string;

	/**
	 * The human-readable name of the playlist.
	 */
	name?: string;

	/**
	 * The playlist comment.
	 */
	comment?: string;

	/**
	 * true if the playlist should be visible to all users, false otherwise.
	 */
	public?: boolean;

	/**
	 * Add this song with this ID to the playlist. Multiple parameters allowed.
	 */
	songIdToAdd?: string;

	/**
	 * Remove the song at this position in the playlist. Multiple parameters allowed.
	 */
	songIndexToRemove?: number[];
};

export type UpdatePlaylistResponseT = SubsonicResponseT<void>;

///===============\\
// DELETE PLAYLIST \\
export type DeletePlaylistParamsT = {
	/**
	 * ID of the playlist to delete, as obtained by getPlaylists.
	 */
	id: string;
};

export type DeletePlaylistResponseT = SubsonicResponseT<void>;
