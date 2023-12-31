import {
	IAuthResponse,
	ILogin,
	IRegister
} from '../../store/user/user.interface'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'
import { axiosClassic } from '../../api/api.interceptor'
import { REFRESH_TOKEN } from '../../constants/token.constants'

export const AuthService = {
	async main(type: 'login' | 'register', data: ILogin | IRegister) {
		try {
			const response = await axiosClassic<IAuthResponse>({
				url: `/auth/${type}`,
				method: 'POST',
				data
			})
			if (response.data.accessToken) {
				saveToStorage(response.data)
			}
			return response.data
		} catch (error: any) {
			throw new Error(error)
		}
	},
	async getNewTokens() {
		try {
			const refreshToken = Cookies.get(REFRESH_TOKEN)
			const response = await axiosClassic.post<IAuthResponse>(
				'/auth/login/access-token',
				{ refreshToken }
			)
			if (response.data.accessToken) {
				saveToStorage(response.data)
			}
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	}
}

export default AuthService
