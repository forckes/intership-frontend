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

const Header: FC = () => {
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
				<div>
					<LogInButton to='login'>Log In</LogInButton>
					<SignUpButton to='register'>Sign Up</SignUpButton>
				</div>
			</HeaderContainer>
			<div>
				<Outlet />
			</div>
		</>
	)
}
export default Header
