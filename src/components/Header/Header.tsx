import { FC } from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { HeaderContainer, LogIn, NavContainer, SignUp } from './Header.styled'
import { Link } from 'react-router-dom'

const Logo = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 32px;
	font-weight: 300;
	font-family: 'Merriweather', serif;
`
const Nav = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 18px;
	display: flex;
	align-items: center;
	font-weight: 300;
	font-family: 'Merriweather', serif;
	transition: color 0.1s ease;
	&:hover {
		color: #ab7c2a;
	}
`

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
					<LogIn>Log In</LogIn>
					<SignUp>Sign Up</SignUp>
				</div>
			</HeaderContainer>
			<div>
				<Outlet />
			</div>
		</>
	)
}
export default Header
