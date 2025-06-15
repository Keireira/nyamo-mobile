import BaseApiProvider from '@api/base-api';
import type {
	GetChatMessagesParamsT,
	GetChatMessagesResponseT,
	AddChatMessageParamsT,
	AddChatMessageResponseT
} from './chat-api.d';

class ChatApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * [WILL NOT BE IMPLEMENTED IN NAVIDROME]
	 *
	 * Returns the current visible (non-expired) chat messages.
	 */
	getChatMessages = async (queryParams: GetChatMessagesParamsT) => {
		const result = await this.api.request<GetChatMessagesResponseT>('/getChatMessages', {
			traceId: 'subsonic-api/get-chat-messages',
			params: { queryParams }
		});

		return this.api.handleResponse<GetChatMessagesResponseT>(result);
	};

	/**
	 * [WILL NOT BE IMPLEMENTED IN NAVIDROME]
	 *
	 * Adds a message to the chat log.
	 */
	addChatMessage = async (queryParams: AddChatMessageParamsT) => {
		const result = await this.api.request<AddChatMessageResponseT>('/addChatMessage', {
			traceId: 'subsonic-api/add-chat-message',
			params: { queryParams }
		});

		return this.api.handleResponse<AddChatMessageResponseT>(result);
	};
}

export default ChatApi;
