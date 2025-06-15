import type { SubsonicResponseT } from '@api/api.d';
import type { SearchResult2, SearchResult3 } from '@api/subsonic-api.d';

///========\\
// SEARCHES \\
export type SearchParamsT = {
	/**
	 * Search query.
	 */
	query: string;

	/**
	 * Maximum number of artists to return.
	 * Default 20
	 */
	artistCount?: number;

	/**
	 * Search result offset for artists. Used for paging.
	 * Default 0
	 */
	artistOffset?: number;

	/**
	 * Maximum number of albums to return. Default 20
	 */
	albumCount?: number;

	/**
	 * Search result offset for albums. Used for paging.
	 * Default 0
	 */
	albumOffset?: number;

	/**
	 * Maximum number of songs to return.
	 * Default 20
	 */
	songCount?: number;

	/**
	 * Search result offset for songs. Used for paging.
	 * Default 0
	 */
	songOffset?: number;

	/**
	 * Only return results from the music folder with the given ID. See getMusicFolders.
	 */
	musicFolderId?: number;
};
export type Search2ResponseT = SubsonicResponseT<{
	searchResult2: SearchResult2;
}>;
export type Search3ResponseT = SubsonicResponseT<{
	searchResult3: SearchResult3;
}>;
