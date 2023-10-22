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
	Hello,
	LogOutButtonText,
	NavHome,
	AuthButtons
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
					<NavHome to='/'>Home</NavHome>
					<Nav to='/deals'>Deals</Nav>
				</NavContainer>
				{profile ? (
					<AsideButtons>
						<Hello>Hi, {profile.name}!</Hello>
						<Link to='/profile'>
							<AvatarProfile src={profile.avatarPath} alt='Profile Avatar' />
						</Link>
						<LogOutButton onClick={logoutFunction}>
							<LogOutButtonText> Log Out</LogOutButtonText>
							<BiLogIn size={26} />
						</LogOutButton>
					</AsideButtons>
				) : (
					<AuthButtons>
						<LogInButton to='login'>Log In</LogInButton>
						<SignUpButton to='register'>Sign Up</SignUpButton>
					</AuthButtons>
				)}
			</HeaderContainer>
			<div>
				<Outlet />
			</div>
		</>
	)
}
export default Header
