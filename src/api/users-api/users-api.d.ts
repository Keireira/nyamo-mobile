import type { SubsonicResponseT } from '@api/api.d';
import type { User, Users } from '@api/subsonic-api.d';

///========\\
// GET USER \\
export type GetUserParamsT = {
	/**
	 * The name of the user to retrieve.
	 * You can only retrieve your own user unless you have admin privileges.
	 */
	username?: string;
};
export type GetUserResponseT = SubsonicResponseT<{
	user: User;
}>;

///=========\\
// GET USERS \\
export type GetUsersResponseT = SubsonicResponseT<{
	users: Users;
}>;

///=========\\
// CREATE USER \\
export type CreateUserParamsT = {
	/**
	 * The name of the new user.
	 */
	username: string;

	/**
	 * The password of the new user, either in clear text of hex-encoded (see above).
	 */
	password: string;

	/**
	 * The email address of the new user.
	 */
	email: string;

	/**
	 * Whether the user is authenicated in LDAP.
	 * DEFAULT: false
	 */
	ldapAuthenticated?: boolean;

	/**
	 * Whether the user is administrator.
	 * DEFAULT: false
	 */
	adminRole?: boolean;

	/**
	 * Whether the user is allowed to change personal settings and password.
	 * DEFAULT: true
	 */
	settingsRole?: boolean;

	/**
	 * Whether the user is allowed to play files.
	 * DEFAULT: true
	 */
	streamRole?: boolean;

	/**
	 * Whether the user is allowed to play files in jukebox mode.
	 * DEFAULT: false
	 */
	jukeboxRole?: boolean;

	/**
	 * Whether the user is allowed to download files.
	 * DEFAULT: false
	 */
	downloadRole?: boolean;

	/**
	 * Whether the user is allowed to upload files.
	 * DEFAULT: false
	 */
	uploadRole?: boolean;

	/**
	 * Whether the user is allowed to create and delete playlists.
	 * Since 1.8.0, changing this role has no effect.
	 * DEFAULT: false
	 */
	playlistRole?: boolean;

	/**
	 * Whether the user is allowed to change cover art and tags.
	 * DEFAULT: false
	 */
	coverArtRole?: boolean;

	/**
	 * Whether the user is allowed to create and edit comments and ratings.
	 * DEFAULT: false
	 */
	commentRole?: boolean;

	/**
	 * Whether the user is allowed to administrate Podcasts.
	 * DEFAULT: false
	 */
	podcastRole?: boolean;

	/**
	 * Whether the user is allowed to share files with anyone.
	 * DEFAULT: false
	 */
	shareRole?: boolean;

	/**
	 * Whether the user is allowed to start video conversions.
	 * DEFAULT: false
	 */
	videoConversionRole?: boolean;

	/**
	 * IDs of the music folders the user is allowed access to.
	 * Include the parameter once for each folder.
	 *
	 * DEFAULT: All folders
	 */
	musicFolderId?: (string | number)[];
};
export type CreateUserResponseT = SubsonicResponseT<void>;

///===========\\
// UPDATE USER \\
export type UpdateUserParamsT = {
	/**
	 * The name of the user.
	 */
	username: string;

	/**
	 * The password of the user, either in clear text of hex-encoded (see above).
	 */
	password?: string;

	/**
	 * The email address of the user.
	 */
	email?: string;

	/**
	 * Whether the user is authenicated in LDAP.
	 */
	ldapAuthenticated?: boolean;

	/**
	 * Whether the user is administrator.
	 */
	adminRole?: boolean;

	/**
	 * Whether the user is allowed to change personal settings and password.
	 */
	settingsRole?: boolean;

	/**
	 * Whether the user is allowed to play files.
	 */
	streamRole?: boolean;

	/**
	 * Whether the user is allowed to play files in jukebox mode.
	 */
	jukeboxRole?: boolean;

	/**
	 * Whether the user is allowed to download files.
	 */
	downloadRole?: boolean;

	/**
	 * Whether the user is allowed to upload files.
	 */
	uploadRole?: boolean;

	/**
	 * Whether the user is allowed to change cover art and tags.
	 */
	coverArtRole?: boolean;

	/**
	 * Whether the user is allowed to create and edit comments and ratings.
	 */
	commentRole?: boolean;

	/**
	 * Whether the user is allowed to administrate Podcasts.
	 */
	podcastRole?: boolean;

	/**
	 * Whether the user is allowed to share files with anyone.
	 */
	shareRole?: boolean;

	/**
	 * Whether the user is allowed to start video conversions.
	 * DEFAULT: false
	 */
	videoConversionRole?: boolean;

	/**
	 * IDs of the music folders the user is allowed access to.
	 * Include the parameter once for each folder.
	 */
	musicFolderId?: (string | number)[];

	/**
	 * The maximum bit rate (in Kbps) for the user.
	 * Audio streams of higher bit rates are automatically downsampled to this bit rate.
	 * Legal values: 0 (no limit), 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320.
	 */
	maxBitRate?: number;
};
export type UpdateUserResponseT = SubsonicResponseT<void>;

///===========\\
// DELETE USER \\
export type DeleteUserParamsT = {
	/**
	 * The name of the user to delete.
	 */
	username: string;
};
export type DeleteUserResponseT = SubsonicResponseT<void>;

///===========\\
// CHANGE PASSWORD \\
export type ChangePasswordParamsT = {
	/**
	 * The name of the user which should change its password.
	 */
	username: string;

	/**
	 * The new password of the new user, either in clear text of hex-encoded (see above).
	 */
	password: string;
};
export type ChangePasswordResponseT = SubsonicResponseT<void>;
