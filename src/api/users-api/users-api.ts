import BaseApiProvider from '@api/base-api';
import type {
	GetUserParamsT,
	GetUserResponseT,
	GetUsersResponseT,
	CreateUserParamsT,
	CreateUserResponseT,
	UpdateUserParamsT,
	UpdateUserResponseT,
	DeleteUserParamsT,
	DeleteUserResponseT,
	ChangePasswordParamsT,
	ChangePasswordResponseT
} from './users-api.d';

class UsersApi {
	private api: BaseApiProvider;

	constructor(apiProvider: BaseApiProvider) {
		this.api = apiProvider;
	}

	/**
	 * Navidrome ignores username parameter, and returns the user identified in the authentication.
	 * Roles reflect actual server capabilities and user permissions.
	 *
	 * For example:
	 * - downloadRole depends on download being enabled,
	 * - jukeboxRole depends on jukebox being enabled, etc.
	 *
	 * Note that some features like ratings and favorites are always available to all users regardless of roles
	 */
	getUser = async (queryParams: GetUserParamsT) => {
		const result = await this.api.request<GetUserResponseT>('/getUser', {
			traceId: 'subsonic-api/get-user',
			params: { queryParams }
		});

		return this.api.handleResponse<GetUserResponseT>(result);
	};

	/**
	 * Navidrome returns only the user identified in the authentication
	 *
	 * Get details about all users, including which authorization roles and folder access they have.
	 * Only users with admin privileges are allowed to call this method.
	 */
	getUsers = async () => {
		const result = await this.api.request<GetUsersResponseT>('/getUsers', {
			traceId: 'subsonic-api/get-users'
		});

		return this.api.handleResponse<GetUsersResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Creates a new user on the server, using the following parameters:
	 */
	createUser = async (queryParams: CreateUserParamsT) => {
		const result = await this.api.request<CreateUserResponseT>('/createUser', {
			traceId: 'subsonic-api/create-user',
			params: { queryParams }
		});

		return this.api.handleResponse<CreateUserResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Modifies an existing user on the server.
	 */
	updateUser = async (queryParams: UpdateUserParamsT) => {
		const result = await this.api.request<UpdateUserResponseT>('/updateUser', {
			traceId: 'subsonic-api/update-user',
			params: { queryParams }
		});

		return this.api.handleResponse<UpdateUserResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Deletes a user from the server.
	 */
	deleteUser = async (queryParams: DeleteUserParamsT) => {
		const result = await this.api.request<DeleteUserResponseT>('/deleteUser', {
			traceId: 'subsonic-api/delete-user',
			params: { queryParams }
		});

		return this.api.handleResponse<DeleteUserResponseT>(result);
	};

	/**
	 * [NOT IMPLEMENTED (YET?) IN NAVIDROME]
	 *
	 * Changes the password of the current user.
	 */
	changePassword = async (queryParams: ChangePasswordParamsT) => {
		const result = await this.api.request<ChangePasswordResponseT>('/changePassword', {
			traceId: 'subsonic-api/change-password',
			params: { queryParams }
		});

		return this.api.handleResponse<ChangePasswordResponseT>(result);
	};
}

export default UsersApi;
