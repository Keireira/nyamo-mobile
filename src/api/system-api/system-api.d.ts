import type { SubsonicResponseT } from '@api/api.d';
import type { License, OpenSubsonicExtension, TokenInfo } from '@api/subsonic-api.d';

///===========\\
// PING SERVER \\
export type GetPingResponseT = SubsonicResponseT<void>;

///===========\\
// GET LICENSE \\
export type GetLicenseResponseT = SubsonicResponseT<{
	license: License;
}>;

///=======================================\\
// GET ENABLED OS EXTENSIONS ON THE SERVER \\
export type GetOpenSubsonicExtensionsResponseT = SubsonicResponseT<{
	openSubsonicExtensions: OpenSubsonicExtension[];
}>;

///==============\\
// GET TOKEN INFO \\
export type GetTokenInfoResponseT = SubsonicResponseT<TokenInfo>;
