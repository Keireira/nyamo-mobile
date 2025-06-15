import { attach, createEvent, sample } from 'effector';
import SubsonicApi from '@api';

import type { Store } from 'effector';
import type { GetChatMessagesParamsT, AddChatMessageParamsT } from '@api/chat-api';

const createChatApiModel = ($api: Store<SubsonicApi>) => {
	// getChatMessages
	const fireGetChatMessages = createEvent<GetChatMessagesParamsT>();
	const getChatMessagesFx = attach({
		source: $api,
		effect: (api, params: GetChatMessagesParamsT) => api.chatApi.getChatMessages(params)
	});
	sample({ clock: fireGetChatMessages, target: getChatMessagesFx });

	// addChatMessage
	const fireAddChatMessage = createEvent<AddChatMessageParamsT>();
	const addChatMessageFx = attach({
		source: $api,
		effect: (api, params: AddChatMessageParamsT) => api.chatApi.addChatMessage(params)
	});
	sample({ clock: fireAddChatMessage, target: addChatMessageFx });

	return {
		events: {
			fireGetChatMessages,
			fireAddChatMessage
		},
		effects: {
			getChatMessagesFx,
			addChatMessageFx
		},
		pendings: {
			getChatMessages: getChatMessagesFx.pending,
			addChatMessage: addChatMessageFx.pending
		}
	};
};

export default createChatApiModel;
