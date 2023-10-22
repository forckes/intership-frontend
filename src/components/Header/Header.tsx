import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import {
	HeaderContainer,
	LogInButton,
	NavContainer,
	SignUpButton,
	Logo,
	Nav
} from './Header.styled'
import { useProfile } from '../../hooks/useProfile'
import { useActions } from '../../hooks/useActions'

const Header: FC = () => {
	const { profile } = useProfile()
	const { logout } = useActions()
	const logoutFunction = () => {
		logout()
		window.location.reload()
	}
	return (
		<>
			<HeaderContainer>
				<div>
					<Logo to='/'>TRULY</Logo>
				</div>
				<NavContainer>
					<Nav to='/'>Home</Nav>
					<Nav to='/deals'>Deals</Nav>
				</NavContainer>
				{profile ? (
					<>
						<button onClick={logoutFunction}>LogOut</button>
						<img src={profile.avatarPath} alt='' />
					</>
				) : (
					<div>
						<LogInButton to='login'>Log In</LogInButton>
						<SignUpButton to='register'>Sign Up</SignUpButton>
					</div>
				)}
			</HeaderContainer>
			<div>
				<Outlet />
			</div>
		</>
	)
}
export default Header
