import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import {
	HeaderContainer,
	LogInButton,
	NavContainer,
	SignUpButton,
	Logo,
	Nav,
	LogOutButton,
	AsideButtons,
	AvatarProfile,
	Hello
} from './Header.styled'
import { useProfile } from '../../hooks/useProfile'
import { useActions } from '../../hooks/useActions'
import { BiLogIn } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header: FC = () => {
	const { profile } = useProfile()
	const { logout } = useActions()
	const logoutFunction = () => {
		logout()
		window.location.reload()
	}
	console.log(profile)
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
					<AsideButtons>
						<Hello>Hi, {profile.name}!</Hello>
						<Link to='/profile'>
							<AvatarProfile src={profile.avatarPath} alt='Profile Avatar' />
						</Link>
						<LogOutButton onClick={logoutFunction}>
							Log Out
							<BiLogIn size={22} />
						</LogOutButton>
					</AsideButtons>
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
