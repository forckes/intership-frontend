import { IUser } from '../../types/user.interface'

export interface IUserState {
	email: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
	error: any
}

export interface ILogin {
	email: string
	password: string
}
export interface IRegister {
	name: string
	phone: string
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
