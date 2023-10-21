import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDeal } from '../types/deal.interface'

export interface Profile {
	id: number
	name: string
	avatarPath: string
	phone: string
	email: string
	favorites: IDeal[]
}

interface ProfileState {
	data: Profile | null
	loading: boolean
	error: string | null
}

const initialState: ProfileState = {
	data: null,
	loading: false,
	error: null
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		getProfileStart: state => {
			state.loading = true
			state.error = null
		},
		getProfileSuccess: (state, action: PayloadAction<Profile>) => {
			state.loading = false
			state.data = action.payload
		},
		getProfileFailure: (state, action: PayloadAction<string>) => {
			state.loading = false
			state.error = action.payload
		}
	}
})

export const { getProfileStart, getProfileSuccess, getProfileFailure } =
	profileSlice.actions
