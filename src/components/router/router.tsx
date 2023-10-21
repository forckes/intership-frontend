import { createBrowserRouter } from 'react-router-dom'
import Header from '../Header/Header'
import { ErrorView } from '../ErrorView/ErrorView'
import Home from '../../pages/Home'
import Auth from '../../pages/Auth'
import Deals from '../../pages/Deals'

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
				element: <Deals />
			},
			{
				path: 'auth',
				element: <Auth />
			}
		]
	}
])
