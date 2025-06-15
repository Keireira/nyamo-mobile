import SubsonicApi from '@api';
import { attach, createEvent, sample } from 'effector';

import type {
	GetUserParamsT,
	CreateUserParamsT,
	UpdateUserParamsT,
	DeleteUserParamsT,
	ChangePasswordParamsT
} from '@api/users-api';
import type { Store } from 'effector';

const createUsersApiModel = ($api: Store<SubsonicApi>) => {
	// getUser
	const fireGetUser = createEvent<GetUserParamsT>();
	const getUserFx = attach({
		source: $api,
		effect: (api, params: GetUserParamsT) => api.usersApi.getUser(params)
	});
	sample({ clock: fireGetUser, target: getUserFx });

	// getUsers
	const fireGetUsers = createEvent<void>();
	const getUsersFx = attach({
		source: $api,
		effect: (api) => api.usersApi.getUsers()
	});
	sample({ clock: fireGetUsers, target: getUsersFx });

	// createUser
	const fireCreateUser = createEvent<CreateUserParamsT>();
	const createUserFx = attach({
		source: $api,
		effect: (api, params: CreateUserParamsT) => api.usersApi.createUser(params)
	});
	sample({ clock: fireCreateUser, target: createUserFx });

	// updateUser
	const fireUpdateUser = createEvent<UpdateUserParamsT>();
	const updateUserFx = attach({
		source: $api,
		effect: (api, params: UpdateUserParamsT) => api.usersApi.updateUser(params)
	});
	sample({ clock: fireUpdateUser, target: updateUserFx });

	// deleteUser
	const fireDeleteUser = createEvent<DeleteUserParamsT>();
	const deleteUserFx = attach({
		source: $api,
		effect: (api, params: DeleteUserParamsT) => api.usersApi.deleteUser(params)
	});
	sample({ clock: fireDeleteUser, target: deleteUserFx });

	// changePassword
	const fireChangePassword = createEvent<ChangePasswordParamsT>();
	const changePasswordFx = attach({
		source: $api,
		effect: (api, params: ChangePasswordParamsT) => api.usersApi.changePassword(params)
	});
	sample({ clock: fireChangePassword, target: changePasswordFx });

	return {
		events: {
			fireGetUser,
			fireGetUsers,
			fireCreateUser,
			fireUpdateUser,
			fireDeleteUser,
			fireChangePassword
		},
		effects: {
			getUserFx,
			getUsersFx,
			createUserFx,
			updateUserFx,
			deleteUserFx,
			changePasswordFx
		},
		pendings: {
			getUser: getUserFx.pending,
			getUsers: getUsersFx.pending,
			createUser: createUserFx.pending,
			updateUser: updateUserFx.pending,
			deleteUser: deleteUserFx.pending,
			changePassword: changePasswordFx.pending
		}
	};
};

export default createUsersApiModel;
