import SubsonicApi from '@api';
import { createGate } from 'effector-react';
import { createFactory } from '@lib/effector';
import { attach, createStore, sample } from 'effector';

import createApiModel from '@models/api-model';

type AppModelProps = {
	api: SubsonicApi;
};

const createAppModel = ({ api }: AppModelProps) => {
	const gate = createGate();
	const $initData = gate.state;

	const $api = createStore(api);

	const initApiFx = attach({
		source: $api,
		effect: (api, initData) => api.setAuthParams(initData)
	});
	sample({ clock: $initData, target: initApiFx });

	const apiModel = createApiModel($api);

	return {
		gate,
		...apiModel
	};
};

const appModel = createFactory(() => {
	return createAppModel({
		api: new SubsonicApi()
	});
});

export default appModel;
