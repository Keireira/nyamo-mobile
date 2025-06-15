import { ERROR_CODES } from './errors';

// Basic response | Start
type BasicSubsonicErrorResponseT = {
	error: {
		code: keyof typeof ERROR_CODES;
		message: string;
	};
};

type BasicSubsonicResponseT = {
	openSubsonic: boolean; // true
	serverVersion: string; // 0.56.1 (fa2cf362)
	type: string; // 'navidrome'
	version: string; // '1.16.1'
};

type SubsonicSuccessResponseT<S = unknown> = {
	'subsonic-response': BasicSubsonicResponseT & {
		status: 'ok';
	} & S;
};

type SubsonicErrorResponseT<F = unknown> = {
	'subsonic-response': BasicSubsonicResponseT & {
		status: 'failed';
	} & BasicSubsonicErrorResponseT &
		F;
};

export type SubsonicResponseT<S = unknown, F = unknown> = SubsonicSuccessResponseT<S> | SubsonicErrorResponseT<F>;
// Basic response | End
