import type { SubsonicResponseT } from '@api/api.d';

export type StarParamsT =
	| {
			/*
			 * The ID of the file (song) or folder (album/artist) to star/unstar.
			 * Multiple parameters allowed.
			 */
			id: string;
	  }
	| {
			/*
			 * The ID of an album to star/unstar. Use this rather than [id] if the client accesses the media collection
			 * according to ID3 tags rather than file structure. Multiple parameters allowed.
			 */
			albumId: string;
	  }
	| {
			/*
			 * The ID of an artist to star/unstar. Use this rather than id if the client accesses the media collection
			 * according to ID3 tags rather than file structure. Multiple parameters allowed.
			 */
			artistId: string;
	  };

export type SetRatingParamsT = {
	/*
	 * A string which uniquely identifies the file (song) or folder (album/artist) to rate.
	 */
	id: string;

	/*
	 * The rating between 1 and 5 (inclusive), or 0 to remove the rating.
	 */
	rating: number;
};

///========\\
// SCROBBLE \\
export type ScrobbleParamsT = {
	/*
	 * A string which uniquely identifies the file to scrobble. (songId)
	 */
	id: string;

	/*
	 * The time (in milliseconds since 1 Jan 1970) at which the song was listened to. (Date.now())
	 */
	time?: number;

	/*
	 * Whether this is a "submission" or a "now playing" notification.
	 * submission: true increases the play count, submission: false does not but showing it is playing rn
	 * DEFAULT: true
	 */
	submission?: boolean;
};

export type AnnotationResponseT = SubsonicResponseT<void>;
