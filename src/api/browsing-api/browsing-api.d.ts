import type { SubsonicResponseT } from '@api/api.d';
import type {
	MusicFolder,
	Indexes,
	Child,
	Directory,
	Genres,
	Videos,
	ArtistsID3,
	ArtistWithAlbumsID3,
	VideoInfo,
	ArtistInfo,
	SimilarSongs,
	SimilarSongsID3,
	ArtistInfoID3,
	TopSongs,
	AlbumID3WithSongs
} from '@api/subsonic-api.d';

///=================\\
// GET MUSIC FOLDERS \\
export type GetMusicFoldersResponseT = SubsonicResponseT<{
	musicFolders: {
		musicFolder: MusicFolder[];
	};
}>;

///===========\\
// GET INDEXES \\
export type GetIndexesParamsT = {
	/** If specified, only return artists in the music folder with the given ID. See GetMusicFoldersResponseT. */
	musicFolderId?: number;

	/** If specified, only return a result if the artist collection has changed since the given time (in milliseconds since 1 Jan 1970). */
	ifModifiedSince?: number;
};
export type GetIndexesResponseT = SubsonicResponseT<{
	indexes: Indexes;
}>;

///===================\\
// GET MUSIC DIRECTORY \\
export type GetMusicDirectoryParamsT = {
	/** A string which uniquely identifies the music folder. Obtained by calls to getIndexes or getMusicDirectory. */
	/** indexes.index.artist[n].id */
	id: string;
};
export type GetMusicDirectoryResponseT = SubsonicResponseT<{
	directory: Directory;
}>;

///==========\\
// GET GENRES \\
export type GetGenresResponseT = SubsonicResponseT<{
	genres: Genres;
}>;

///===========\\
// GET ARTISTS \\
export type GetArtistsParamsT = {
	/** If specified, only return artists in the music folder with the given ID. See getMusicFolders. */
	musicFolderId?: number;
};
export type GetArtistsResponseT = SubsonicResponseT<{
	artists: ArtistsID3;
}>;

///================\\
// GET ARTIST BY ID \\
export type GetArtistParamsT = {
	/** The artist ID. */
	id: string;
};
export type GetArtistResponseT = SubsonicResponseT<{
	artist: ArtistWithAlbumsID3;
}>;

///===============\\
// GET ALBUM BY ID \\
export type GetAlbumParamsT = {
	/** The album ID. */
	id: string;
};
export type GetAlbumResponseT = SubsonicResponseT<{
	album: AlbumID3WithSongs;
}>;

///==============\\
// GET SONG BY ID \\
export type GetSongParamsT = {
	/** The song ID. */
	id: string;
};
export type GetSongResponseT = SubsonicResponseT<{
	song: Child;
}>;

///======================\\
// GET LIST OF ALL VIDEOS \\
export type GetVideosResponseT = SubsonicResponseT<{
	videos: Videos;
}>;

///==========================\\
// GET INFO ABOUT VIDEO BY ID \\
export type GetVideoInfoParamsT = {
	/** The video ID. */
	id: string;
};
export type GetVideoInfoResponseT = SubsonicResponseT<{
	videoInfo: VideoInfo;
}>;

///=======================================\\
// GET INFO ABOUT ARTIST BY ID VIA LAST.FM \\
export type GetArtistInfoParamsT = {
	/** The artist, album or song ID. */
	id: string;
	/** Max number of similar artists to return. */
	count?: number; // Default 20
	/** Whether to return artists that are not present in the media library. */
	includeNotPresent?: boolean; // Default false
};
export type GetArtistInfoResponseT = SubsonicResponseT<{
	artistInfo: ArtistInfo;
}>;
export type GetArtistInfo2ResponseT = SubsonicResponseT<{
	artistInfo2: ArtistInfoID3;
}>;

///======================================\\
// GET INFO ABOUT ALBUM BY ID VIA LAST.FM \\
export type GetAlbumInfoParamsT = {
	/** The album ID or song ID. */
	id: string;
};
export type GetAlbumInfoResponseT = SubsonicResponseT<{
	albumInfo: AlbumInfo;
}>;
export type GetAlbumInfo2ResponseT = SubsonicResponseT<{
	/**
	 * Uses the same method as getAlbumInfo (GetAlbumInfo), so this is the same response basically
	 * @see https://github.com/navidrome/navidrome/blob/4359adc042e36096767f4336a7a237d103ad28ab/server/subsonic/api.go#L100
	 */
	albumInfo: AlbumInfo;
}>;

///===================================\\
// GET SIMILAR SONGS BY ID VIA LAST.FM \\
export type GetSimilarSongsParamsT = {
	/** The artist, album or song ID. */
	id: string;

	/** Max number of songs to return. */
	count?: number; // Default 50
};
export type GetSimilarSongsResponseT = SubsonicResponseT<{
	similarSongs: SimilarSongs;
}>;
export type GetSimilarSongs2ResponseT = SubsonicResponseT<{
	/**
	 * Fires the same method inside of API method (api.GetSimilarSongs(r))
	 * @see https://github.com/navidrome/navidrome/blob/4359adc042e36096767f4336a7a237d103ad28ab/server/subsonic/browsing.go#L359
	 */
	similarSongs2: SimilarSongsID3;
}>;

///===============================\\
// GET TOP SONGS BY ID VIA LAST.FM \\
export type GetTopSongsParamsT = {
	/** The artist name. */
	artist: string;

	/** Max number of songs to return. */
	count?: number; // Default 50
};
export type GetTopSongsResponseT = SubsonicResponseT<{
	topSongs: TopSongs;
}>;
