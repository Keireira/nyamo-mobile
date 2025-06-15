import type { SubsonicResponseT } from '@api/api.d';
import type { Lyrics, StructuredLyrics } from '@api/subsonic-api.d';

///==========\\
// GET STREAM \\
export type StreamParamsT = {
	/**
	 * A string which uniquely identifies the file to stream. Obtained by calls to getMusicDirectory.
	 */
	id: string;

	/**
	 * If specified, the server will attempt to limit the bitrate to this value,
	 * in kilobits per second. If set to zero, no limit is imposed.
	 */
	maxBitRate?: number;

	/**
	 * Specifies the preferred target format (e.g., "mp3" or "flv") in case there are multiple
	 * applicable transcodings. Starting with 1.9.0 you can use the special value "raw" to disable transcoding.
	 */
	format?: 'raw' | string;

	/**
	 * By default only applicable to video streaming. If specified, start streaming at the given offset (in seconds)
	 * into the media. The Transcode Offet extension enables the parameter to music too.
	 */
	timeOffset?: string;

	/**
	 * [VIDEO] Only applicable to video streaming. Requested video size specified as WxH, for instance “640x480”.
	 */
	size?: string;

	/**
	 * If set to “true”, the Content-Length HTTP header will be set to an estimated value for transcoded or downsampled media.
	 * Default: false
	 */
	estimateContentLength?: boolean;

	/**
	 * [VIDEO] Only applicable to video streaming. Servers can optimize videos for streaming by
	 * converting them to MP4. If a conversion exists for the video in question, then setting this
	 * parameter to “true” will cause the converted video to be returned instead of the original.
	 * Default: false
	 */
	converted?: boolean;
};
export type StreamResponseT = Blob | SubsonicResponseT<void>;

///============\\
// GET DOWNLOAD \\
export type DownloadParamsT = {
	/**
	 * A string which uniquely identifies the file to stream.
	 * Obtained by calls to getMusicDirectory.
	 */
	id: string;
};
export type DownloadResponseT = Blob | SubsonicResponseT<void>;

///============\\
// GET COVER ART \\
export type GetCoverArtParamsT = {
	/**
	 * The coverArt ID. Returned by most entities likes Child or AlbumID3
	 */
	id: string;

	/**
	 * If specified, scale image to this size.
	 *
	 * EXAMPLES: 256, 512, 1024, 2048, 4096
	 */
	size?: string | number;
};
export type GetCoverArtResponseT = Blob | SubsonicResponseT<void>;

///==========\\
// GET LYRICS \\
export type GetLyricsParamsT = {
	/**
	 * The artist name.
	 */
	artist?: string;

	/**
	 * The song title.
	 */
	title?: string;
};
export type GetLyricsResponseT = SubsonicResponseT<{
	lyrics: Lyrics;
}>;

///==========\\
// GET AVATAR \\
export type GetAvatarParamsT = {
	/**
	 * The user in question.
	 */
	username: string;
};
export type GetAvatarResponseT = Blob | SubsonicResponseT<void>;

///=======\\
// GET HLS \\
export type HlsParamsT = {
	/**
	 * A string which uniquely identifies the media file to stream.
	 */
	id: string;

	/**
	 * If specified, the server will attempt to limit the bitrate to this value, in kilobits per second.
	 * If this parameter is specified more than once, the server will create a variant playlist,
	 * suitable for adaptive bitrate streaming. The playlist will support streaming at all the specified bitrates.
	 * The server will automatically choose video dimensions that are suitable for the given bitrates.
	 *
	 * Since 1.9.0 you may explicitly request a certain width (480) and height (360) like so: bitRate=1000@480x360
	 */
	bitRate?: number;

	/**
	 * The ID of the audio track to use. SeegetVideoInfo for how to get the list of available audio tracks for a video.
	 */
	audioTrack?: number;
};
export type HlsResponseT = Blob | SubsonicResponseT<void>;

///=====================\\
// GET LYRICS BY SONG ID \\
export type GetLyricsBySongIdParamsT = {
	/*
	 * The track ID.
	 */
	id: string;
};
export type GetLyricsBySongIdResponseT = SubsonicResponseT<{
	lyricsList: StructuredLyrics[];
}>;

///============\\
// GET CAPTIONS \\
export type GetCaptionsParamsT = {
	/**
	 * The ID of the video.
	 */
	id: string;

	/**
	 * Preferred captions format (“srt” or “vtt”).
	 */
	format?: 'srt' | 'vtt';
};
export type GetCaptionsResponseT = Blob | SubsonicResponseT<void>;
