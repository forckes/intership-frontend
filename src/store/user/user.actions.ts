import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, ILogin, IRegister } from './user.interface'
import AuthService from '../../services/auth/auth.service'
import { removeFromStorage } from '../../services/auth/auth.helper'
import { errorCatch } from '../../api/api.helper'

export const register = createAsyncThunk<IAuthResponse, IRegister>(
	'auth/register',
	async (data: IRegister, thunkApi) => {
		try {
			const response = await AuthService.main('register', data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, ILogin>(
	'auth/login',
	async (data: ILogin, thunkApi) => {
		try {
			const response = await AuthService.main('login', data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk<void>('auth/logout', async () => {
	removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
