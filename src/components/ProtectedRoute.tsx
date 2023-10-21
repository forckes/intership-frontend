import { FC, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

interface Props {
	children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
	const navigate = useNavigate()
	const { user } = useAuth()

	useEffect(() => {
		if (user) {
			navigate('/login', { replace: true })
		}
	}, [user, navigate])

	return <>{user ? children : null}</>
}

export default ProtectedRoute
