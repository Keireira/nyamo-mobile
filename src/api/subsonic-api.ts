import BaseApiProvider from '@api/base-api';

import SystemApi from '@api/system-api';
import BrowsingApi from '@api/browsing-api';
import AlbumSongsListApi from '@api/album-songs-list-api';
import SearchingApi from '@api/searching-api';
import PlaylistsApi from '@api/playlists-api';
import RetrievalApi from '@api/retrieval-api';
import AnnotationApi from '@api/annotation-api';
import BookmarksApi from '@api/bookmarks-api';
import SharingApi from '@api/sharing-api';
import ScanningApi from '@api/scanning-api';
import UsersApi from '@api/users-api';
import InternetRadioApi from '@api/internet-radio-api';
import PodcastsApi from '@api/podcasts-api';
import JukeboxApi from '@api/jukebox-api';
import ChatApi from '@api/chat-api';

class SubsonicApi extends BaseApiProvider {
	systemApi: SystemApi;
	browsingApi: BrowsingApi;
	albumSongsListApi: AlbumSongsListApi;
	searchingApi: SearchingApi;
	playlistsApi: PlaylistsApi;
	retrievalApi: RetrievalApi;
	annotationApi: AnnotationApi;
	bookmarksApi: BookmarksApi;
	sharingApi: SharingApi;
	scanningApi: ScanningApi;
	usersApi: UsersApi;
	internetRadioApi: InternetRadioApi;
	podcastsApi: PodcastsApi;
	jukeboxApi: JukeboxApi;
	chatApi: ChatApi;

	constructor() {
		super();

		this.systemApi = new SystemApi(this);
		this.browsingApi = new BrowsingApi(this);
		this.albumSongsListApi = new AlbumSongsListApi(this);
		this.searchingApi = new SearchingApi(this);
		this.playlistsApi = new PlaylistsApi(this);
		this.retrievalApi = new RetrievalApi(this);
		this.annotationApi = new AnnotationApi(this);
		this.bookmarksApi = new BookmarksApi(this);
		this.sharingApi = new SharingApi(this);
		this.scanningApi = new ScanningApi(this);
		this.usersApi = new UsersApi(this);
		this.internetRadioApi = new InternetRadioApi(this);
		this.podcastsApi = new PodcastsApi(this);
		this.jukeboxApi = new JukeboxApi(this);
		this.chatApi = new ChatApi(this);
	}
}

export default SubsonicApi;
