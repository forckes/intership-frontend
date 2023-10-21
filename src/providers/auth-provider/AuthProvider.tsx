import { FC, useEffect, PropsWithChildren } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { getAccessToken } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'
import { REFRESH_TOKEN } from '../../constants/token.constants'
import { protectedRoutes } from './protected-routes.data'
import NotFound from '../../../app/not-found'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()

	const pathname = usePathname()
	const router = useRouter()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(REFRESH_TOKEN)
		if (!refreshToken && user) logout()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)

	// if (!isProtectedRoute && !isAdminRoute) return <>{children}</>
	if (user?.isAdmin) return <>{children}</>
	if (user && isProtectedRoute) return <>{children}</>
	// if (user && isAdminRoute) return <NotFound />

	pathname !== '/auth' && router.replace('/auth')
	return null
}

export default AuthProvider
