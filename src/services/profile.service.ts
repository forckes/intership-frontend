import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api' }),
	endpoints: builder => ({
		getProfile: builder.query({
			query: () => 'profile'
		})
	})
})

export const { useGetProfileQuery } = profileApi
