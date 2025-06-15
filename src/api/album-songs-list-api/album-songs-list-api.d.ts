import type { SubsonicResponseT } from '@api/api.d';
import type { AlbumList, AlbumListID3, Songs, NowPlaying, Starred, StarredID3 } from '@api/subsonic-api.d';

///============================\\
// GET LIST OF REQUESTED ALBUMS \\
export type GetAlbumListParamsT =
	| {
			type:
				| 'newest'
				| 'recent'
				| 'random'
				| 'alphabeticalByName'
				| 'alphabeticalByArtist'
				| 'frequent'
				| 'starred'
				| 'highest';
			/**
			 * The number of albums to return. Max 500.
			 * DEFAULT: 10
			 */
			size?: number;

			/**
			 * The list offset. Useful if you for example want to page through the list of newest albums.
			 * DEFAULT: 0
			 */
			offset?: number;
			fromYear?: number;
			toYear?: number;
			fromGenre?: string;
			musicFolderId?: number;
	  }
	| {
			type: 'byYear';
			size?: number;
			offset?: number;
			musicFolderId?: number;

			/**
			 * The first year in the range. If fromYear > toYear a reverse chronological list is returned.
			 */
			fromYear: number;

			/**
			 * The last year in the range.
			 */
			toYear: number;
	  }
	| {
			type: 'byGenre';
			size?: number;
			offset?: number;
			musicFolderId?: number;

			/**
			 * The name of the genre, e.g., "Rock".
			 */
			fromGenre: string;
	  };

export type GetAlbumListResponseT = SubsonicResponseT<{
	albumList: AlbumList;
}>;

///==============================\\
// GET LIST OF REQUESTED ALBUMS 2 \\
export type GetAlbumList2ResponseT = SubsonicResponseT<{
	albumList2: AlbumListID3;
}>;

///================\\
// GET RANDOM SONGS \\
export type GetRandomSongsParamsT = {
	/**
	 * The maximum number of songs to return. Max 500.
	 * DEFAULT: 10
	 */
	size?: number;

	/**
	 * Only returns songs belonging to this genre.
	 **/
	genre?: string;

	/**
	 * Only return songs published after or in this year.
	 **/
	fromYear?: number;

	/**
	 * Only return songs published before or in this year.
	 **/
	toYear?: number;

	/**
	 * Only return songs in the music folder with the given ID. See getMusicFolders
	 **/
	musicFolderId?: number;
};
export type GetRandomSongsResponseT = SubsonicResponseT<{
	randomSongs: Songs;
}>;

///===========================\\
// GET SONGS BY PROVIDED GENRE \\
export type GetSongsByGenreParamsT = {
	/**
	 * The genre, as returned by getGenres.
	 **/
	genre: string;

	/**
	 * The maximum number of songs to return. Max 500.
	 * DEFAULT: 10
	 */
	count?: number;

	/**
	 * The offset. Useful if you want to page through the songs in a genre.
	 **/
	offset?: number;

	/**
	 * Only return albums in the music folder with the given ID. See getMusicFolders
	 **/
	musicFolderId?: number;
};
export type GetSongsByGenreResponseT = SubsonicResponseT<{
	songsByGenre: Songs;
}>;

///==================\\
// GET WHAT NOW PLAYS \\
export type GetNowPlayingResponseT = SubsonicResponseT<{
	nowPlaying: NowPlaying;
}>;

///===================================\\
// GET LIST OF STARRED (FAVS) ENTITIES \\
export type GetStarredParamsT = {
	/**
	 * Only return results from the music folder with the given ID. See getMusicFolders
	 **/
	musicFolderId?: number;
};
export type GetStarredResponseT = SubsonicResponseT<{
	starred: Starred;
}>;

///=====================================\\
// GET LIST OF STARRED (FAVS) ENTITIES 2 \\
export type GetStarred2ResponseT = SubsonicResponseT<{
	starred2: StarredID3;
}>;
