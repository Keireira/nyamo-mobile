import SubsonicApi from '@api';
import { combine } from 'effector';

import createAnnotationApiModel from './annotation-api-model';
import createBookmarksApiModel from './bookmarks-api-model';
import createBrowsingApiModel from './browsing-api-model';
import createChatApiModel from './chat-api-model';
import createInternetRadioApiModel from './internet-radio-api-model';
import createJukeboxApiModel from './jukebox-api-model';
import createListsApiModel from './lists-api-model';
import createPlaylistsApiModel from './playlists-api-model';
import createPodcastsApiModel from './podcasts-api-model';
import createRetrievalApiModel from './retrieval-api-model';
import createScanningApiModel from './scanning-api-model';
import createSearchingApiModel from './searching-api-model';
import createSharingApiModel from './sharing-api-model';
import createSystemApiModel from './system-api-model';
import createUsersApiModel from './users-api-model';

import type { Store } from 'effector';

const createApiModel = ($api: Store<SubsonicApi>) => {
	const annotationApiModel = createAnnotationApiModel($api);
	const bookmarksApiModel = createBookmarksApiModel($api);
	const browsingApiModel = createBrowsingApiModel($api);
	const chatApiModel = createChatApiModel($api);
	const internetRadioApiModel = createInternetRadioApiModel($api);
	const jukeboxApiModel = createJukeboxApiModel($api);
	const listsApiModel = createListsApiModel($api);
	const playlistsApiModel = createPlaylistsApiModel($api);
	const podcastsApiModel = createPodcastsApiModel($api);
	const retrievalApiModel = createRetrievalApiModel($api);
	const scanningApiModel = createScanningApiModel($api);
	const searchingApiModel = createSearchingApiModel($api);
	const sharingApiModel = createSharingApiModel($api);
	const systemApiModel = createSystemApiModel($api);
	const usersApiModel = createUsersApiModel($api);

	const $loadings = combine({
		...annotationApiModel.pendings,
		...bookmarksApiModel.pendings,
		...browsingApiModel.pendings,
		...chatApiModel.pendings,
		...internetRadioApiModel.pendings,
		...jukeboxApiModel.pendings,
		...listsApiModel.pendings,
		...playlistsApiModel.pendings,
		...podcastsApiModel.pendings,
		...retrievalApiModel.pendings,
		...scanningApiModel.pendings,
		...searchingApiModel.pendings,
		...sharingApiModel.pendings,
		...systemApiModel.pendings,
		...usersApiModel.pendings
	});

	const events = {
		...annotationApiModel.events,
		...bookmarksApiModel.events,
		...browsingApiModel.events,
		...chatApiModel.events,
		...internetRadioApiModel.events,
		...jukeboxApiModel.events,
		...listsApiModel.events,
		...playlistsApiModel.events,
		...podcastsApiModel.events,
		...retrievalApiModel.events,
		...scanningApiModel.events,
		...searchingApiModel.events,
		...sharingApiModel.events,
		...systemApiModel.events,
		...usersApiModel.events
	};

	const effects = {
		...annotationApiModel.effects,
		...bookmarksApiModel.effects,
		...browsingApiModel.effects,
		...chatApiModel.effects,
		...internetRadioApiModel.effects,
		...jukeboxApiModel.effects,
		...listsApiModel.effects,
		...playlistsApiModel.effects,
		...podcastsApiModel.effects,
		...retrievalApiModel.effects,
		...scanningApiModel.effects,
		...searchingApiModel.effects,
		...sharingApiModel.effects,
		...systemApiModel.effects,
		...usersApiModel.effects
	};

	return {
		$api,
		$loadings,
		events,
		effects
	};
};

export default createApiModel;
