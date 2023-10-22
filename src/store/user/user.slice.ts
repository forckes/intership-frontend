import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from './user.interface'
import { checkAuth, login, logout, register } from './user.actions'
import { getStoreLocal } from '../../utils/local-storage'

const initialState: IInitialState = {
	user: getStoreLocal('user'),
	isLoading: false,
	error: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
				state.error = login.rejected.type
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.user = action.payload.user
			})
	}
})
