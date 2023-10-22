import { createBrowserRouter } from 'react-router-dom'
import Header from '../Header/Header'
import { ErrorView } from '../ErrorView/ErrorView'
import Home from '../../pages/Home/Home'
import Deals from '../../pages/Deals/Deals'
import Register from '../../pages/Register/Register'
import LogIn from '../../pages/LogIn/LogIn'
import ProtectedRoute from '../ProtectedRoute'
import Profile from '../../pages/Profile/Profile'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		errorElement: <ErrorView />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'deals',
				element: (
					<ProtectedRoute>
						<Deals />
					</ProtectedRoute>
				)
			},
			{
				path: 'profile',
				element: (
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				)
			},
			{
				path: 'login',
				element: <LogIn />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	}
])
