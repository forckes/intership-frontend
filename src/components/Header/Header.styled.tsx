import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
	background-color: #172234;
	display: flex;
	padding: 18px 80px 18px 80px;
	align-items: center;
	justify-content: space-between;
`

export const NavContainer = styled.div`
	background-color: #172234;
	display: flex;
	align-items: center;
	gap: 50px;
	margin-left: 200px;
`

export const LogInButton = styled(Link)`
	padding: 11px 40px 11px 40px;
	border: 1px solid #b29f7e;
	border-radius: 4px;
	color: #b29f7e;
	background-color: transparent;
	font-family: 'Merriweather', serif;
	font-size: 16px;
	cursor: pointer;
	text-decoration: none;
	margin-right: 10px;

	font-weight: 700;
	line-height: 22px;
	transition: all 0.2s ease;

	&:hover {
		border: 1px solid #ab7c2a;
		color: #ab7c2a;
	}
`
export const SignUpButton = styled(Link)`
	padding: 11px 40px 11px 40px;
	color: #fff;
	border-radius: 4px;
	border: 1px solid #b29f7e;
	background-color: #b29f7e;
	font-family: 'Merriweather', serif;
	font-size: 16px;
	cursor: pointer;
	margin-right: 10px;
	font-weight: 700;
	line-height: 22px;
	transition: all 0.2s ease;
	text-decoration: none;
	&:hover {
		border: 1px solid #ab7c2a;
		background-color: #ab7c2a;
	}
`
export const Logo = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 32px;
	font-weight: 300;
	font-family: 'Merriweather', serif;
`
export const Nav = styled(Link)`
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
