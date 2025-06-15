import BaseApiProvider from '@api/base-api';
import type {
	GetPodcastsParamsT,
	GetPodcastsResponseT,
	GetPodcastEpisodeParamsT,
	GetPodcastEpisodeResponseT,
	GetNewestPodcastsParamsT,
	GetNewestPodcastsResponseT,
	RefreshPodcastsResponseT,
	CreatePodcastChannelParamsT,
	CreatePodcastChannelResponseT,
	DeletePodcastChannelParamsT,
	DeletePodcastChannelResponseT,
	DeletePodcastEpisodeParamsT,
	DeletePodcastEpisodeResponseT,
	DownloadPodcastEpisodeParamsT,
	DownloadPodcastEpisodeResponseT
} from './podcasts-api.d';

class PodcastsApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Returns all Podcast channels the server subscribes to, and (optionally) their episodes.
	 * This method can also be used to return details for only one channel - refer to the id parameter.
	 *
	 * A typical use case for this method would be to first retrieve all channels without episodes,
	 * and then retrieve all episodes for the single channel the user selects.
	 */
	getPodcasts = async (queryParams: GetPodcastsParamsT) => {
		const result = await this.api.request<GetPodcastsResponseT>('/getPodcasts', {
			traceId: 'subsonic-api/get-podcasts',
			params: { queryParams }
		});

		return this.api.handleResponse<GetPodcastsResponseT>(result);
	};

	/**
	 * [OS EXTENSION] [NOT IMPLEMENTED IN NAVIDROME AT ALL]
	 * Returns details for a podcast episode.
	 *
	 * OS extension name: 'getPodcastEpisode'
	 */
	getPodcastEpisode = async (queryParams: GetPodcastEpisodeParamsT) => {
		const result = await this.api.request<GetPodcastEpisodeResponseT>('/getPodcastEpisode', {
			traceId: 'subsonic-api/get-podcast-episode',
			params: { queryParams }
		});

		return this.api.handleResponse<GetPodcastEpisodeResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Returns the most recently published Podcast episodes.
	 */
	getNewestPodcasts = async (queryParams: GetNewestPodcastsParamsT) => {
		const result = await this.api.request<GetNewestPodcastsResponseT>('/getNewestPodcasts', {
			traceId: 'subsonic-api/get-newest-podcasts',
			params: { queryParams }
		});

		return this.api.handleResponse<GetNewestPodcastsResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Requests the server to check for new Podcast episodes.
	 *
	 * Note: The user must be authorized for Podcast administration
	 * (see Settings > Users > User is allowed to administrate Podcasts).
	 */
	refreshPodcasts = async () => {
		const result = await this.api.request<RefreshPodcastsResponseT>('/refreshPodcasts', {
			traceId: 'subsonic-api/refresh-podcasts'
		});

		return this.api.handleResponse<RefreshPodcastsResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Adds a new Podcast channel.
	 *
	 * Note: The user must be authorized for Podcast administration
	 * (see Settings > Users > User is allowed to administrate Podcasts).
	 */
	createPodcastChannel = async (queryParams: CreatePodcastChannelParamsT) => {
		const result = await this.api.request<CreatePodcastChannelResponseT>('/createPodcastChannel', {
			traceId: 'subsonic-api/create-podcast-channel',
			params: { queryParams }
		});

		return this.api.handleResponse<CreatePodcastChannelResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Deletes a Podcast channel.
	 *
	 * Note: The user must be authorized for Podcast administration
	 * (see Settings > Users > User is allowed to administrate Podcasts).
	 */
	deletePodcastChannel = async (queryParams: DeletePodcastChannelParamsT) => {
		const result = await this.api.request<DeletePodcastChannelResponseT>('/deletePodcastChannel', {
			traceId: 'subsonic-api/delete-podcast-channel',
			params: { queryParams }
		});

		return this.api.handleResponse<DeletePodcastChannelResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Deletes a Podcast episode.
	 *
	 * Note: The user must be authorized for Podcast administration
	 * (see Settings > Users > User is allowed to administrate Podcasts).
	 */
	deletePodcastEpisode = async (queryParams: DeletePodcastEpisodeParamsT) => {
		const result = await this.api.request<DeletePodcastEpisodeResponseT>('/deletePodcastEpisode', {
			traceId: 'subsonic-api/delete-podcast-episode',
			params: { queryParams }
		});

		return this.api.handleResponse<DeletePodcastEpisodeResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Request the server to start downloading a given Podcast episode.
	 *
	 * Note: The user must be authorized for Podcast administration
	 * (see Settings > Users > User is allowed to administrate Podcasts).
	 */
	downloadPodcastEpisode = async (queryParams: DownloadPodcastEpisodeParamsT) => {
		const result = await this.api.request<DownloadPodcastEpisodeResponseT>('/downloadPodcastEpisode', {
			traceId: 'subsonic-api/download-podcast-episode',
			params: { queryParams }
		});

		return this.api.handleResponse<DownloadPodcastEpisodeResponseT>(result);
	};
}

export default PodcastsApi;
