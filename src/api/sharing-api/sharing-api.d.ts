import type { SubsonicResponseT } from '@api/api.d';
import type { Shares } from '@api/subsonic-api.d';

export type SetShareParamsT = {
	/**
	 * ID of a song, album or video to share.
	 * Use one id parameter for each entry to share.
	 */
	id: string;

	/**
	 * A user-defined description that will be displayed to people visiting the shared media.
	 */
	description?: string;

	/**
	 * The time at which the share expires.
	 * Given as milliseconds since 1970.
	 */
	expires?: number;
};

///==========\\
// GET SHARES \\
export type GetSharesResponseT = SubsonicResponseT<{
	shares: Shares;
}>;

///============\\
// CREATE SHARE \\
export type CreateShareResponseT = SubsonicResponseT<{
	shares: Shares;
}>;

///============\\
// UPDATE SHARE \\
export type UpdateShareResponseT = SubsonicResponseT<void>;

///============\\
// DELETE SHARE \\
export type DeleteShareParamsT = {
	/**
	 * ID of the share to delete.
	 */
	id: string;
};
export type DeleteShareResponseT = SubsonicResponseT<void>;
