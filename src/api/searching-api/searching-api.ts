import BaseApiProvider from '@api/base-api';
import type { SearchParamsT, Search2ResponseT, Search3ResponseT } from './searching-api.d';

class SearchingApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Returns albums, artists and songs matching the given search criteria.
	 * Supports paging through the result.
	 */
	search2 = async (queryParams: SearchParamsT) => {
		const result = await this.api.request<Search2ResponseT>('/search2', {
			traceId: 'subsonic-api/search-2',
			params: { queryParams }
		});

		return this.api.handleResponse<Search2ResponseT>(result);
	};

	/**
	 * Returns albums, artists and songs matching the given search criteria.
	 * Supports paging through the result.
	 * Music is organized according to ID3 tags.
	 */
	search3 = async (queryParams: SearchParamsT) => {
		const result = await this.api.request<Search3ResponseT>('/search3', {
			traceId: 'subsonic-api/search-3',
			params: { queryParams }
		});

		return this.api.handleResponse<Search3ResponseT>(result);
	};
}

export default SearchingApi;
