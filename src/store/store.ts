// import { configureStore, combineReducers } from '@reduxjs/toolkit'

// import storage from 'redux-persist/lib/storage'

// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER
// } from 'redux-persist'
// import { userSlice } from './user/user.slice'

// // const isClient = typeof window !== 'undefined'

// // const combinedReducers = combineReducers({})

// // let mainReducer = combinedReducers

// // if (isClient) {
// const persistConfig = {
// 	key: 'internship',
// 	storage
// }

// // mainReducer = persistReducer(persistConfig, combinedReducers)
// // }

// const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: getDefaultMiddleware =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
// 			}
// 		})
// })

// export const persistor = persistStore(store)

// export type TypeRootState = ReturnType<typeof persistedReducer>

import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userSlice } from './user/user.slice'

const persistConfig = {
	key: 'internship',
	storage
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST']
			}
		})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
