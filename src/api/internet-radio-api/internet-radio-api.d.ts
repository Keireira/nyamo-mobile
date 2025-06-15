import type { SubsonicResponseT } from '@api/api.d';
import type { InternetRadioStations } from '@api/subsonic-api.d';

///===========================\\
// GET INTERNET RADIO STATIONS \\
export type GetIRSResponseT = SubsonicResponseT<{
	internetRadioStations: InternetRadioStations;
}>;

///=============================\\
// CREATE INTERNET RADIO STATION \\
export type CreateIRSParamsT = {
	/** The stream URL for the station. */
	streamUrl: string;

	/** The user-defined name for the station. */
	name: string;

	/** The home page URL for the station. */
	homePageUrl?: string;
};
export type CreateIRSResponseT = SubsonicResponseT<void>;

///=============================\\
// UPDATE INTERNET RADIO STATION \\
export type UpdateIRSParamsT = CreateIRSParamsT & {
	/** The ID of the station. */
	id: string;
};
export type UpdateIRSResponseT = SubsonicResponseT<void>;

///=============================\\
// DELETE INTERNET RADIO STATION \\
export type DeleteIRSParamsT = {
	/** The ID for the station. */
	id: string;
};
export type DeleteIRSResponseT = SubsonicResponseT<void>;
