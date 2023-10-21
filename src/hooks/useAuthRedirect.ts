import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const navigate = useNavigate()
	useEffect(() => {
		if (user) {
			console.log('auth')
			navigate('/')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])
}
