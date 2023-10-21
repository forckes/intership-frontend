import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from './useAuth'
import { UserService } from '../services/user.service'
import { useTypedSelector } from './useTypedSelector'
import { getProfileSuccess } from '../store/profile.slice'

export const useProfile = () => {
	const dispatch = useDispatch()
	const { user } = useAuth()

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const response = await UserService.getProfile()
				const profileData = response.data
				dispatch(getProfileSuccess(profileData))
			} catch (error) {
				// Handle error
			}
		}

		if (user) {
			fetchUserProfile()
		}
	}, [dispatch, user])

	const profile = useTypedSelector(state => state.profile.data)

	return { profile }
}
