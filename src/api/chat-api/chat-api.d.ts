import type { SubsonicResponseT } from '@api/api.d';
import type { ChatMessages } from '@api/subsonic-api.d';

///=================\\
// GET CHAT MESSAGES \\
export type GetChatMessagesParamsT = {
	/** Only return messages newer than this time (in millis since Jan 1 1970). */
	since?: number;
};
export type GetChatMessagesResponseT = SubsonicResponseT<{
	chatMessages: ChatMessages;
}>;

///================\\
// ADD CHAT MESSAGE \\
export type AddChatMessageParamsT = {
	/** The chat message. */
	message: string;
};
export type AddChatMessageResponseT = SubsonicResponseT<void>;
