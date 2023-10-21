import { instance } from '../api/api.interceptor'
import { IFullUser, IUser } from '../types/user.interface'

const USERS = 'user'

type TypeData = {
	name?: string
	email: string
	password?: string
	avatarPath?: string
	phone?: string
}

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},
	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},
	async toggleFavorite(dealId: string | number) {
		return instance<IFullUser>({
			url: `${USERS}/profile/favorites/${dealId}`,
			method: 'PATCH'
		})
	}
}
