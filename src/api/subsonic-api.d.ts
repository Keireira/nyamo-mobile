type EXPLICIT_STATUS = 'explicit' | 'clean' | '' | 1 | 2 | 4;
type ACTUAL_MEDIA_TYPE = 'song' | 'album' | 'artist';
type GENERIC_MEDIA_TYPE = 'music' | 'podcast' | 'audiobook' | 'video';
type CONTRIBUTOR_ROLE =
	| 'invalid'
	| 'artist'
	| 'albumartist'
	| 'composer'
	| 'conductor'
	| 'lyricist'
	| 'arranger'
	| 'producer'
	| 'director'
	| 'engineer'
	| 'mixer'
	| 'remixer'
	| 'djmixer'
	| 'performer';
type PODCAST_STATUS = 'new' | 'downloading' | 'completed' | 'error' | 'deleted' | 'skipped';

/**
 * An album from ID3 tags.
 * https://opensubsonic.netlify.app/docs/responses/albumid3/
 */
export type AlbumID3 = {
	/** The id of the album */
	id: string;

	/** The album name. */
	name: string;

	/** The album version name (Remastered, Anniversary Box Set, …) */
	version?: string;

	/** Artist name. */
	artist?: string;

	/** The id of the artist */
	artistId?: string;

	/** A covertArt id. */
	coverArt?: string;

	/** Number of songs */
	songCount: number;

	/** Total duration of the album in seconds */
	duration: number;

	/** Number of play of the album */
	playCount?: number;

	/** Date the album was added. [ISO 8601] */
	created: Date;

	/** Date the album was starred. [ISO 8601] */
	starred?: Date;

	/** The album year */
	year?: number;

	/** The album genre */
	genre?: string;

	/** Date the album was last played. [ISO 8601] */
	played?: string;

	/** The user rating of the album. [1-5] */
	userRating?: number;

	/** The labels producing the album. */
	recordLabels?: RecordLabel[];

	/** The album MusicBrainzID. */
	musicBrainzId?: string;

	/** The list of all genres of the album. */
	genres?: ItemGenre[];

	/**
	 * The list of all album artists of the album.
	 * (Note: Only the required ArtistID3 fields should be returned by default)
	 */
	artists?: ArtistID3[];

	/** The single value display artist. */
	displayArtist?: string;

	/** The types of this album release. (Album, Compilation, EP, Remix ...) */
	releaseTypes?: string[];

	/** The list of all moods of the album. */
	moods?: string[];

	/** The album sort name. */
	sortName?: string;

	/** Date the album was originally released. */
	originalReleaseDate?: ItemDate;

	/**
	 * Date the specific edition of the album was released.
	 * Note: for files using ID3 tags, releaseDate should generally be read from the TDRL tag.
	 * Servers that use a different source for this field should document the behavior.
	 */
	releaseDate?: ItemDate;

	/** True if the album is a compilation. */
	isCompilation?: boolean;

	/** Returns “explicit” if at least one song is explicit, “clean” if no song is explicit and at least one is “clean” else “”. */
	explicitStatus?: EXPLICIT_STATUS;

	/** The list of all disc titles of the album. */
	discTitles?: DiscTitle[];
};

/**
 * An extension of AlbumID3 with song Child entries.
 * https://opensubsonic.netlify.app/docs/responses/albumid3withsongs/
 */
export type AlbumID3WithSongs = AlbumID3 & {
	song?: Child[];
};

/**
 * Album list.
 * https://opensubsonic.netlify.app/docs/responses/albumlist/
 */
export type AlbumList = {
	/** Artist albums */
	album?: Child[];
};

/**
 * [ID3] Album list with ID3 tags.
 * https://opensubsonic.netlify.app/docs/responses/albumlist2/
 */
export type AlbumListID3 = {
	/** Artist albums */
	album?: AlbumID3[];
};

/**
 * A genre returned in list of genres for an item.
 * https://opensubsonic.netlify.app/docs/responses/itemgenre/
 */
export type ItemGenre = {
	/** Genre name */
	name: string;
};

/**
 * A disc title for an album.
 * https://opensubsonic.netlify.app/docs/responses/disctitle/
 */
export type DiscTitle = {
	/** The disc number. */
	disc: number;

	/** The name of the disc. */
	title: string;
};

/**
 * A date for a media item that may be just a year, or year-month, or full date.
 * https://opensubsonic.netlify.app/docs/responses/itemdate/
 */
export type ItemDate = {
	/** The year */
	year?: number;

	/** The month (1-12). */
	month?: number;

	/** The day (1-31) */
	day?: number;
};

/**
 * A record label for an album.
 * https://opensubsonic.netlify.app/docs/responses/recordlabel/
 */
export type RecordLabel = {
	/** The record label name. */
	name: string;
};

/**
 * Album info.
 * https://opensubsonic.netlify.app/docs/responses/albuminfo/
 */
export type AlbumInfo = {
	/** Album notes */
	notes?: string;

	/** Album musicBrainzId */
	musicBrainzId?: string;

	/** Album lastFmUrl */
	lastFmUrl?: string;

	/** Album smallImageUrl */
	smallImageUrl?: string;

	/** Album mediumImageUrl */
	mediumImageUrl?: string;

	/** Album largeImageUrl */
	largeImageUrl?: string;
};

/**
 * Artist details.
 * https://opensubsonic.netlify.app/docs/responses/artist/
 */
export type Artist = {
	/** Artist id */
	id: string;

	/** Artist name */
	name: string;

	/** Artist image url */
	artistImageUrl?: string;

	/** Artist starred date [ISO 8601] */
	starred?: string;

	/** Artist rating [1-5] */
	userRating?: number;

	/** Artist average rating [1.0-5.0] */
	averageRating?: number;
};

/**
 * An artist from ID3 tags.
 * https://opensubsonic.netlify.app/docs/responses/artistid3/
 */
export type ArtistID3 = {
	/** The ID of the artist. */
	id: string;

	/** The artist name. */
	name: string;

	/** A covertArt id. */
	coverArt?: string;

	/** An url to an external image source. */
	artistImageUrl?: string;

	/** Artist album count. */
	albumCount: number;

	/** Date the artist was starred. [ISO 8601] */
	starred?: string;

	/** The artist MusicBrainzID. */
	musicBrainzId?: string;

	/** The artist sort name. */
	sortName?: string;

	/**
	 * The list of all roles this artist has in the library.
	 *
	 * @see https://github.com/navidrome/navidrome/blob/873905bdf6e3b25afcc8abf2f55ec96e0e8b5f38/model/participants.go#L13
	 */
	roles?: CONTRIBUTOR_ROLE[];
};

/**
 * Artist info.
 * https://opensubsonic.netlify.app/docs/responses/artistinfo/
 */
export type ArtistInfoBase = {
	/** Artist biography */
	biography?: string;

	/** Artist musicBrainzId */
	musicBrainzId?: string;

	/** Artist lastFmUrl */
	lastFmUrl?: string;

	/** Artist smallImageUrl */
	smallImageUrl?: string;

	/** Artist mediumImageUrl */
	mediumImageUrl?: string;

	/** Artist largeImageUrl */
	largeImageUrl?: string;
};
export type ArtistInfo = ArtistInfoBase & {
	/** Similar artists */
	similarArtist?: Artist[];
};
export type ArtistInfoID3 = ArtistInfoBase & {
	/** [ID3] Similar artists */
	similarArtist?: ArtistID3[];
};

/**
 * A list of indexed Artists.
 * https://opensubsonic.netlify.app/docs/responses/artistsid3/
 */
export type ArtistsID3 = {
	/** List of ignored articles space separated */
	ignoredArticles: string;

	/** Last time the index was modified in milliseconds after January 1, 1970 UTC */
	lastModified: number;

	/** Index list */
	index?: IndexID3[];
};

/**
 * An extension of ArtistID3 with AlbumID3.
 * https://opensubsonic.netlify.app/docs/responses/artistwithalbumsid3/
 */
export type ArtistWithAlbumsID3 = ArtistID3 & {
	album?: AlbumID3[];
};

/**
 * SimilarSongs list.
 * https://opensubsonic.netlify.app/docs/responses/similarsongs/
 */
export type SimilarSongs = {
	song?: Child[];
};

/**
 * [ID3] SimilarSongs2 list.
 * https://opensubsonic.netlify.app/docs/responses/similarsongs2/
 */
export type SimilarSongsID3 = {
	song?: Child[];
};

/**
 * TopSongs list.
 * https://opensubsonic.netlify.app/docs/responses/topsongs/
 */
export type TopSongs = {
	song?: Child[];
};

/**
 * Songs list.
 * https://opensubsonic.netlify.app/docs/responses/songs/
 */
export type Songs = {
	/** List of songs */
	song?: Child[];
};

/**
 * Bookmark.
 * https://opensubsonic.netlify.app/docs/responses/bookmark/
 */
export type Bookmark = {
	/** Bookmark position in seconds */
	position: number;

	/** Username */
	username: string;

	/** Bookmark comment */
	comment?: string;

	/** Bookmark creation date [ISO 8601] */
	created: string;

	/** Bookmark last updated date [ISO 8601] */
	changed: string;

	/** The bookmark file */
	entry: Child;
};

/**
 * Bookmarks list.
 * https://opensubsonic.netlify.app/docs/responses/bookmarks/
 */
export type Bookmarks = {
	bookmark?: Bookmark[];
};

/**
 * A chatMessage.
 * https://opensubsonic.netlify.app/docs/responses/chatmessage/
 */
export type ChatMessage = {
	/** Username */
	username: string;

	/** Time in millis since Jan 1 1970 */
	time: number;

	/** The message */
	message: string;
};

/**
 * Chat messages list.
 * https://opensubsonic.netlify.app/docs/responses/chatmessages/
 */
export type ChatMessages = {
	/** List of chatMessage */
	chatMessage?: ChatMessage[];
};

/**
 * A media.
 * https://opensubsonic.netlify.app/docs/responses/child/
 */
export type Child = {
	/** The id of the media */
	id: string;

	/** The id of the parent (folder/album) */
	parent?: string;

	/** The media is a directory or not */
	isDir: boolean;

	/** The media name. */
	title: string;

	/** The album name. */
	album?: string;

	/** The artist name. */
	artist?: string;

	/** The track number. */
	track?: number;

	/** The media year. */
	year?: number;

	/** The media genre */
	genre?: string;

	/** A covertArt id. */
	coverArt?: string;

	/** A file size of the media. */
	size?: number;

	/** The mimeType of the media. */
	contentType?: string;

	/** The file suffix of the media. */
	suffix?: string;

	/** The transcoded mediaType if transcoding should happen. */
	transcodedContentType?: string;

	/** The file suffix of the transcoded media. */
	transcodedSuffix?: string;

	/** The duration of the media in seconds. */
	duration?: number;

	/** The bitrate of the media. */
	bitRate?: number;

	/** The bit depth of the media. */
	bitDepth?: number;

	/** The sampling rate of the media. */
	samplingRate?: number;

	/** The number of channels of the media. */
	channelCount?: number;

	/** The full path of the media. */
	path?: string;

	/** Media is a video or not */
	isVideo?: boolean;

	/** The user rating of the media [1-5] */
	userRating?: number;

	/** The average rating of the media [1.0-5.0] */
	averageRating?: number;

	/** The play count. */
	playCount?: number;

	/** The disc number. */
	discNumber?: number;

	/** Date the media was created. [ISO 8601] */
	created?: string;

	/** Date the media was starred. [ISO 8601] */
	starred?: string;

	/** The corresponding album id */
	albumId?: string;

	/** The corresponding artist id */
	artistId?: string;

	/** The generic type of media [music/podcast/audiobook/video] */
	type?: GENERIC_MEDIA_TYPE;

	/**
	 * The actual media type [song/album/artist]
	 * Note: If you support musicBrainzId you must support this field to ensure clients knows what the ID refers to.
	 */
	mediaType?: ACTUAL_MEDIA_TYPE;

	/** The bookmark position in seconds */
	bookmarkPosition?: number;

	/** The video original Width */
	originalWidth?: number;

	/** The video original Height */
	originalHeight?: number;

	/** Date the album was last played. [ISO 8601] */
	played?: string;

	/** The BPM of the song. */
	bpm?: number;

	/** The comment tag of the song. */
	comment?: string;

	/** The song sort name. */
	sortName?: string;

	/** The track MusicBrainzID. */
	musicBrainzId?: string;

	/** The track ISRC(s). */
	isrc?: string[];

	/** The list of all genres of the song. */
	genres?: ItemGenre[];

	/**
	 * The list of all song artists of the song.
	 * (Note: Only the required ArtistID3 fields should be returned by default)
	 */
	artists?: ArtistID3[];

	/** The single value display artist. */
	displayArtist?: string;

	/**
	 * The list of all album artists of the song.
	 * (Note: Only the required ArtistID3 fields should be returned by default)
	 */
	albumArtists?: ArtistID3[];

	/** The single value display album artist. */
	displayAlbumArtist?: string;

	/** The list of all contributor artists of the song. */
	contributors?: Contributor[];

	/** The single value display composer. */
	displayComposer?: string;

	/** The list of all moods of the song. */
	moods?: string[];

	/** The replaygain data of the song. */
	replayGain?: ReplayGain;

	/**
	 * For songs extracted from tags “ITUNESADVISORY”: 1 = explicit; 2 = clean
	 *
	 * MP4 “rtng”: 1 or 4 = explicit; 2 = clean.
	 * See albumID3 for albums
	 */
	explicitStatus?: EXPLICIT_STATUS;
};

/**
 * A contributor artist for a song or an album.
 * https://opensubsonic.netlify.app/docs/responses/contributor/
 */
export type Contributor = {
	/** The role of the contributor. */
	role: CONTRIBUTOR_ROLE;

	/**
	 * The subRole for roles that may require it.
	 * Ex: The instrument for the performer role (TMCL/performer tags).
	 * Note: For consistency between different tag formats, the TIPL sub roles should be directly exposed in the role field.
	 */
	subRole?: string;

	/**
	 * The artist taking on the role.
	 * (Note: Only the required ArtistID3 fields should be returned by default)
	 */
	artist?: ArtistID3;
};

/**
 * The replay gain data of a song.
 * https://opensubsonic.netlify.app/docs/responses/replaygain/
 */
export type ReplayGain = {
	/** The track replay gain value. (In Db) */
	trackGain: number;

	/** The album replay gain value. (In Db) */
	albumGain: number;

	/** The track peak value. (Must be positive) */
	trackPeak: number;

	/** The album peak value. (Must be positive) */
	albumPeak: number;

	/**
	 * The base gain value. (In Db)
	 * (Ogg Opus Output Gain for example)
	 */
	baseGain: number;

	/**
	 * An optional fallback gain that clients should apply when the corresponding gain value is missing.
	 * (Can be computed from the tracks or exposed as an user setting.)
	 */
	fallbackGain: number;
};

/**
 * Directory
 * https://opensubsonic.netlify.app/docs/responses/directory/
 */
export type Directory = {
	/** The id */
	id: string;

	/** Parent item */
	parent?: string;

	/** The directory name */
	name: string;

	/** Starred date [ISO 8601] */
	starred?: string;

	/** The user rating [1-5] */
	userRating?: number;

	/** The average rating [1.0-5.0] */
	averageRating?: number;

	/** The play count */
	playCount?: number;

	/** The directory content */
	child?: Child[];
};

/**
 * A genre.
 * https://opensubsonic.netlify.app/docs/responses/genre/
 */
export type Genre = {
	/** Genre name */
	value: string;

	/** Genre song count */
	songCount: number;

	/** Genre album count */
	albumCount: number;
};

/**
 * Genres list.
 * https://opensubsonic.netlify.app/docs/responses/genres/
 */
export type Genres = {
	/** List of genre */
	genre?: Genre[];
};

/**
 * An indexed artist list.
 * https://opensubsonic.netlify.app/docs/responses/index_/
 */
export type Index = {
	/** Index name */
	name: string;

	/** Artist list */
	artist?: Artist[];
};

/**
 * An indexed artist list by ID3 tags.
 * https://opensubsonic.netlify.app/docs/responses/indexid3/
 */
export type IndexID3 = {
	/** Index name */
	name: string;

	/** Artist list */
	artist?: ArtistID3[];
};

/**
 * Indexes.
 * https://opensubsonic.netlify.app/docs/responses/indexes/
 */
export type Indexes = {
	/** Ignored articles */
	ignoredArticles: string;

	/** Last time the index was modified in milliseconds after January 1, 1970 UTC */
	lastModified: number;

	/** Shortcut */
	shortcut?: Artist[];

	/** Array of children */
	child?: Child[];

	/** Indexed artists */
	index?: Index[];
};

/**
 * An internetRadioStation.
 * https://opensubsonic.netlify.app/docs/responses/internetradiostation/
 */
export type InternetRadioStation = {
	/** The id */
	id: string;

	/** The name */
	name: string;

	/** The radio url */
	streamUrl: string;

	/** The home page URL (Example: http://www.hbr1.com/) */
	homePageUrl?: string;
};

/**
 * List of internet radio stations.
 * https://opensubsonic.netlify.app/docs/responses/internetradiostations/
 */
export type InternetRadioStations = {
	internetRadioStation?: InternetRadioStation[];
};

/**
 * Jukebox status.
 * https://opensubsonic.netlify.app/docs/responses/jukeboxstatus/
 */
export type JukeboxStatus = {
	/** The current index of the song being played */
	currentIndex: number;

	/** Whether the queue is currently playing */
	playing: boolean;

	/** Volume, in a range of [0.0, 1.0] */
	gain: number;

	/** The current position of the track in seconds */
	position?: number;
};

/**
 * Jukebox playlist.
 * https://opensubsonic.netlify.app/docs/responses/jukeboxplaylist/
 */
export type JukeboxPlaylist = JukeboxStatus & {
	/** The songs currently enqueued in the jukebox */
	entry?: Child[];
};

/**
 * Lyrics.
 * https://opensubsonic.netlify.app/docs/responses/lyrics/
 */
export type Lyrics = {
	/** The lyrics */
	value?: string;

	/** The artist name */
	artist?: string;

	/** The song title */
	title?: string;
};

/**
 * Structured lyrics.
 * https://opensubsonic.netlify.app/docs/responses/structuredlyrics/
 */
export type StructuredLyrics = {
	/**
	 * The lyrics language (ideally ISO 639).
	 * If the language is unknown (e.g. lrc file),
	 * the server must return und (ISO standard) or xxx (common value for taggers)
	 */
	lang: string;

	/** True if the lyrics are synced, false otherwise */
	synced: boolean;

	/** The actual lyrics. Ordered by start time (synced) or appearance order (unsynced) */
	line: Line[];

	/** The artist name to display. This could be the localized name, or any other value */
	displayArtist?: string;

	/** The title to display. This could be the song title (localized), or any other value */
	displayTitle?: string;

	/**
	 * The offset to apply to all lyrics, in milliseconds.
	 * Positive means lyrics appear sooner, negative means later.
	 * If not included, the offset must be assumed to be 0
	 */
	offset?: number;
};

/**
 * One line of a song lyric.
 * https://opensubsonic.netlify.app/docs/responses/line/
 */
export type Line = {
	/** The actual text of this line */
	value: string;

	/**
	 * The start time of the lyrics, relative to the start time of the track, in milliseconds.
	 * If this is not part of synced lyrics, start must be omitted
	 */
	start?: number;
};

/**
 * A music folder.
 * https://opensubsonic.netlify.app/docs/responses/musicfolder/
 */
export type MusicFolder = {
	/** The id */
	id: number;

	/** The folder name */
	name?: string;
};

/**
 * A playlist.
 * https://opensubsonic.netlify.app/docs/responses/playlist/
 */
export type Playlist = {
	/** Id of the playlist */
	id: string;

	/** Name of the playlist */
	name: string;

	/** A commnet */
	comment?: string;

	/** Owner of the playlist */
	owner?: string;

	/** Is the playlist public */
	public?: boolean;

	/** Number of songs in the playlist */
	songCount: number;

	/** Duration of the playlist in seconds */
	duration: number;

	/** Creation date [ISO 8601] */
	created: string;

	/** Last change date [ISO 8601] */
	changed: string;

	/** Cover Art ID */
	coverArt?: string;

	/** A list of allowed usernames */
	allowedUser?: string[];
};

/**
 * Playlist with songs.
 * https://opensubsonic.netlify.app/docs/responses/playlistwithsongs/
 */
export type PlaylistWithSongs = Playlist & {
	entry?: Child[];
};

/**
 * List of playlists.
 * https://opensubsonic.netlify.app/docs/responses/playlists/
 */
export type Playlists = {
	/** A list of playlist */
	playlist?: Playlist[];
};

/**
 * A podcast channel.
 * https://opensubsonic.netlify.app/docs/responses/podcastchannel/
 */
export type PodcastChannel = {
	/** The channel ID */
	id: string;

	/** Podcast channel URL */
	url: string;

	/** The channel title */
	title?: string;

	/** The channel description */
	description?: string;

	/** ID used for retrieving cover art */
	coverArt?: string;

	/** URL for original image of podcast channel */
	originalImageUrl?: string;

	/** Channel status */
	status: PODCAST_STATUS;

	/** An error message */
	errorMessage?: string;

	/** Podcast episodes with this channel */
	episode?: PodcastEpisode[];
};

/**
 * A podcast episode.
 * https://opensubsonic.netlify.app/docs/responses/podcastepisode/
 */
export type PodcastEpisode = Child & {
	/** ID used for streaming podcast */
	streamId?: string;

	/** ID of the podcast channel */
	channelId: string;

	/** Episode description */
	description?: string;

	/** Podcast status */
	status: PODCAST_STATUS;

	/** Date the episode was published [ISO 8601] */
	publishDate?: string;
};

/**
 * List of newest podcasts.
 * https://opensubsonic.netlify.app/docs/responses/newestpodcasts/
 */
export type NewestPodcasts = {
	episode?: PodcastEpisode[];
};

/**
 * List of podcasts.
 * https://opensubsonic.netlify.app/docs/responses/podcasts/
 */
export type Podcasts = {
	/** Podcast channel(s) */
	channel?: PodcastChannel[];
};

/**
 * A share.
 * https://opensubsonic.netlify.app/docs/responses/share/
 */
export type Share = {
	/** The share Id */
	id: string;

	/** The share url */
	url: string;

	/** A description */
	description?: string;

	/** The username */
	username: string;

	/** Creation date [ISO 8601] */
	created: string;

	/** Share expiration [ISO 8601] */
	expires?: string;

	/** Last visit [ISO 8601] */
	lastVisited?: string;

	/** Visit count */
	visitCount: number;

	/** A list of share */
	entry?: Child[];
};

/**
 * List of shares.
 * https://opensubsonic.netlify.app/docs/responses/shares/
 */
export type Shares = {
	share?: Share[];
};

/**
 * A user.
 * https://opensubsonic.netlify.app/docs/responses/user/
 */
export type User = {
	/** Username */
	username: string;

	/** Whether scrobling is enabled for the user */
	scrobblingEnabled: boolean;

	/** The maximum bit rate for the user */
	maxBitRate?: number;

	/** Whether the user is an admin */
	adminRole: boolean;

	/** Whether the user is can edit settings */
	settingsRole: boolean;

	/** Whether the user can download */
	downloadRole: boolean;

	/** Whether the user can upload */
	uploadRole: boolean;

	/** Whether the user can create playlists */
	playlistRole: boolean;

	/** Whether the user can get cover art */
	coverArtRole: boolean;

	/** Whether the user can create comments */
	commentRole: boolean;

	/** Whether the user can create/refresh podcasts */
	podcastRole: boolean;

	/** Whether the user can stream */
	streamRole: boolean;

	/** Whether the user can control the jukebox */
	jukeboxRole: boolean;

	/** Whether the user can create a stream */
	shareRole: boolean;

	/** Whether the user can convert videos */
	videoConversionRole: boolean;

	/** Last time the avatar was changed [ISO 8601] */
	avatarLastChanged?: Date;

	/** Folder ID(s) */
	folder?: number[];

	/** User email */
	email?: string;
};

/**
 * List of users.
 * https://opensubsonic.netlify.app/docs/responses/users/
 */
export type Users = {
	user?: User[];
};

/**
 * Scan status information.
 * https://opensubsonic.netlify.app/docs/responses/scanstatus/
 */
export type ScanStatus = {
	/** The status of the scan */
	scanning: boolean;

	/** Scanned item count */
	count?: number;
};

/**
 * Search result 2
 * https://opensubsonic.netlify.app/docs/responses/searchresult2/
 */
export type SearchResult2 = {
	artist?: Artist[];
	album?: Child[];
	song?: Child[];
};

/**
 * Search result 3
 * https://opensubsonic.netlify.app/docs/responses/searchresult3/
 */
export type SearchResult3 = {
	artist?: ArtistID3[];
	album?: AlbumID3[];
	song?: Child[];
};

/**
 * Information about an API key.
 * https://opensubsonic.netlify.app/docs/responses/tokeninfo/
 */
export type TokenInfo = {
	tokenInfo: {
		/** Username associated with token */
		username: string;
	};
};

/**
 * A supported OpenSubsonic API extension.
 * https://opensubsonic.netlify.app/docs/responses/opensubsonicextension/
 */
export type OpenSubsonicExtension = {
	/** The name of the extension. */
	name: string;

	/** The list of supported versions of the this extension. */
	versions: number[];
};

/**
 * Information about a license.
 * https://opensubsonic.netlify.app/docs/responses/license/
 */
export type License = {
	/** The status of the license */
	valid: boolean;

	/** User email */
	email?: string;

	/** End of license date. [ISO 8601] */
	licenseExpires?: string;

	/** End of trial date. [ISO 8601] */
	trialExpires?: string;
};

/**
 * NowPlayingEntry
 *
 * Errata: In the original spec, current is required to be an int.
 * However, as child ids are strings, this is updated to note that the id should be a string to be consistent.
 *
 * https://opensubsonic.netlify.app/docs/responses/playqueue/
 */
export type PlayQueue = {
	/** ID of currently playing track */
	current?: string;

	/** Position in milliseconds of currently playing track */
	position?: number;

	/** The user this queue belongs to */
	username: string;

	/** Date modified [ISO 8601] */
	changed: Date;

	/** Name of client app */
	changedBy: string;

	/** The list of songs in the queue */
	entry?: Child[];
};

/**
 * NowPlayingEntry
 * https://opensubsonic.netlify.app/docs/responses/nowplayingentry/
 */
export type NowPlayingEntry = Child & {
	/** The username */
	username: string;

	/** Last update */
	minutesAgo: number;

	/**
	 * Fake, if navidrome (just i + 1)
	 * https://github.com/navidrome/navidrome/blob/4359adc042e36096767f4336a7a237d103ad28ab/server/subsonic/album_lists.go#L182
	 */
	playerId: number;

	/** Player name */
	playerName?: string;
};

/**
 * NowPlaying
 * https://opensubsonic.netlify.app/docs/responses/nowplaying/
 */
export type NowPlaying = {
	/** A list of NowPlayingEntry */
	entry?: NowPlayingEntry[];
};

/**
 * List of starred entities
 * https://opensubsonic.netlify.app/docs/responses/starred/
 */
export type Starred = {
	/** Starred artists */
	artist?: Artist[];

	/** Starred albums */
	album?: Child[];

	/** Starred songs */
	song?: Child[];
};

/**
 * [ID3] List of starred entities with ID3 tags
 * https://opensubsonic.netlify.app/docs/responses/starred2/
 */
export type StarredID3 = {
	/** Starred artists */
	artist?: ArtistID3[];

	/** Starred albums */
	album?: AlbumID3[];

	/** Starred songs */
	song?: Child[];
};

/**
 * Not found in the documentation.
 */
export type AudioTrack = {
	id: string;
	name?: string;
	languageCode?: string;
};

/**
 * Not found in the documentation.
 */
export type VideoConversion = {
	audioTrackId?: number;
	bitRate?: number;
	id: string;
};

/**
 * Not found in the documentation.
 */
export type Captions = {
	id: string;
	name?: string;
};

/**
 * Not found in the documentation.
 */
export type VideoInfo = {
	id: string;
	audioTrack?: AudioTrack[];
	captions?: Captions[];
	conversion?: VideoConversion[];
};

/**
 * Not found in the documentation.
 */
export type Videos = {
	video?: Child[];
};
