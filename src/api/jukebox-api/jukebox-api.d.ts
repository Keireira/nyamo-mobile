import type { SubsonicResponseT } from '@api/api.d';
import type { JukeboxStatus, JukeboxPlaylist } from '@api/subsonic-api.d';

///===============\\
// CONTROL JUKEBOX \\
export type ControlJukeboxParamsT =
	| {
			/** The operation to perform. */
			action: 'get' | 'status' | 'start' | 'stop' | 'clear' | 'shuffle';
	  }
	| {
			action: 'skip' | 'remove';

			/**
			 * Zero-based index of the song to skip to or remove.
			 */
			index: number;
	  }
	| {
			action: 'skip';

			/**
			 * Start playing this many seconds into the track.
			 */
			offset: number;
	  }
	| {
			action: 'add' | 'set';

			/**
			 * ID of song to add to the jukebox playlist.
			 * Use multiple id parameters to add many songs in the same request.
			 * (set is similar to a clear followed by a add, but will not change the currently playing track.)
			 */
			id: string;
	  }
	| {
			action: 'setGain';

			/**
			 * Control the playback volume. A float value between 0.0 and 1.0.
			 */
			gain: number;
	  };

export type ControlJukeboxResponseT = SubsonicResponseT<
	| {
			/** for all actions but get */
			jukeboxStatus: JukeboxStatus;
	  }
	| {
			/** for get action */
			jukeboxPlaylist: JukeboxPlaylist;
	  }
>;
