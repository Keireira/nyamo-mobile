import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type { Store } from 'effector';
import type { CreateBookmarkParamsT, DeleteBookmarkParamsT, SavePlayQueueParamsT } from '@api/bookmarks-api';

const createBookmarksApiModel = ($api: Store<SubsonicApi>) => {
	// getBookmarks
	const fireGetBookmarks = createEvent<void>();
	const getBookmarksFx = attach({
		source: $api,
		effect: (api) => api.bookmarksApi.getBookmarks()
	});
	sample({ clock: fireGetBookmarks, target: getBookmarksFx });

	// createBookmark
	const fireCreateBookmark = createEvent<CreateBookmarkParamsT>();
	const createBookmarkFx = attach({
		source: $api,
		effect: (api, params: CreateBookmarkParamsT) => api.bookmarksApi.createBookmark(params)
	});
	sample({ clock: fireCreateBookmark, target: createBookmarkFx });

	// deleteBookmark
	const fireDeleteBookmark = createEvent<DeleteBookmarkParamsT>();
	const deleteBookmarkFx = attach({
		source: $api,
		effect: (api, params: DeleteBookmarkParamsT) => api.bookmarksApi.deleteBookmark(params)
	});
	sample({ clock: fireDeleteBookmark, target: deleteBookmarkFx });

	// getPlayQueue
	const fireGetPlayQueue = createEvent<void>();
	const getPlayQueueFx = attach({
		source: $api,
		effect: (api) => api.bookmarksApi.getPlayQueue()
	});
	sample({ clock: fireGetPlayQueue, target: getPlayQueueFx });

	// savePlayQueue
	const fireSavePlayQueue = createEvent<SavePlayQueueParamsT>();
	const savePlayQueueFx = attach({
		source: $api,
		effect: (api, params: SavePlayQueueParamsT) => api.bookmarksApi.savePlayQueue(params)
	});
	sample({ clock: fireSavePlayQueue, target: savePlayQueueFx });

	return {
		events: {
			fireGetBookmarks,
			fireCreateBookmark,
			fireDeleteBookmark,
			fireGetPlayQueue,
			fireSavePlayQueue
		},
		effects: {
			getBookmarksFx,
			createBookmarkFx,
			deleteBookmarkFx,
			getPlayQueueFx,
			savePlayQueueFx
		},
		pendings: {
			getBookmarks: getBookmarksFx.pending,
			createBookmark: createBookmarkFx.pending,
			deleteBookmark: deleteBookmarkFx.pending,
			getPlayQueue: getPlayQueueFx.pending,
			savePlayQueue: savePlayQueueFx.pending
		}
	};
};

export default createBookmarksApiModel;
