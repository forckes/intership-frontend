import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { profileApi } from '../services/profile.service'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import { userSlice } from './user/user.slice'
import { profileSlice } from './profile.slice'

const combinedReducers = combineReducers({
	user: userSlice.reducer,
	profile: profileSlice.reducer,
	[profileApi.reducerPath]: profileApi.reducer
})

const persistConfig = {
	key: 'internship',
	storage,
	blacklist: ['user', 'profile', profileApi.reducerPath]
}

let mainReducer = persistReducer(persistConfig, combinedReducers)

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(profileApi.middleware)
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>
