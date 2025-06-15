import type { SubsonicResponseT } from '@api/api.d';
import type { Podcasts, PodcastEpisode, NewestPodcasts } from '@api/subsonic-api.d';

///============\\
// GET PODCASTS \\
export type GetPodcastsParamsT = {
	/**
	 * The ID of the Podcast channel to return.
	 */
	id?: string;

	/**
	 * Whether to include Podcast episodes in the returned result.
	 * DEFAULT: true
	 */
	includeEpisodes?: boolean;
};
export type GetPodcastsResponseT = SubsonicResponseT<{
	podcasts: Podcasts;
}>;

///===================\\
// GET PODCAST EPISODE \\
export type GetPodcastEpisodeParamsT = {
	/**
	 * The podcast episode ID
	 */
	id: string;
};
export type GetPodcastEpisodeResponseT = SubsonicResponseT<{
	podcastEpisode: PodcastEpisode;
}>;

///===================\\
// GET NEWEST PODCASTS \\
export type GetNewestPodcastsParamsT = {
	/**
	 * The maximum number of episodes to return.
	 * DEFAULT: 20
	 */
	count?: number;
};
export type GetNewestPodcastsResponseT = SubsonicResponseT<{
	newestPodcasts: NewestPodcasts;
}>;

///================\\
// REFRESH PODCASTS \\
export type RefreshPodcastsResponseT = SubsonicResponseT<void>;

///======================\\
// CREATE PODCAST CHANNEL \\
export type CreatePodcastChannelParamsT = {
	/**
	 * The URL of the Podcast to add.
	 */
	url: string;
};
export type CreatePodcastChannelResponseT = SubsonicResponseT<void>;

///======================\\
// DELETE PODCAST CHANNEL \\
export type DeletePodcastChannelParamsT = {
	/**
	 * The ID of the Podcast channel to delete.
	 */
	id: string;
};
export type DeletePodcastChannelResponseT = SubsonicResponseT<void>;

///======================\\
// DELETE PODCAST EPISODE \\
export type DeletePodcastEpisodeParamsT = {
	/**
	 * The ID of the Podcast's episode to delete.
	 */
	id: string;
};
export type DeletePodcastEpisodeResponseT = SubsonicResponseT<void>;

///======================================\\
// DOWNLOAD PODCAST EPISODE AT THE SERVER \\
export type DownloadPodcastEpisodeParamsT = {
	/**
	 * The ID of the Podcast episode to download.
	 */
	id: string;
};
export type DownloadPodcastEpisodeResponseT = SubsonicResponseT<void>;
