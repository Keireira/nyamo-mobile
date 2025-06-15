import type { SubsonicResponseT } from '@api/api.d';
import type { ScanStatus } from '@api/subsonic-api.d';

///==========\\
// START SCAN \\
export type StartScanParamsT = {
	/**
	 * If 'true', a full scan will be performed
	 * If 'false', a partial scan will be performed.
	 */
	fullScan?: boolean;
};
export type GetScanStatusResponseT = SubsonicResponseT<{
	scanStatus: ScanStatus;
}>;
