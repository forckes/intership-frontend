import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
	background-color: #172234;
	display: flex;
	padding: 18px 80px 18px 80px;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1440px) {
		padding: 18px 40px 18px 40px;
	}
	@media (max-width: 1200px) {
		padding: 18px 20px 18px 20px;
	}
	@media (max-width: 700px) {
		padding: 18px 10px 18px 10px;
	}
`

export const NavContainer = styled.div`
	background-color: #172234;
	display: flex;
	align-items: center;
	gap: 50px;
	margin-left: 200px;
	@media (max-width: 1200px) {
		margin-left: 0px;
	}
`

export const AuthButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 500px) {
		justify-content: center;
	}
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
	@media (max-width: 700px) {
		padding: 9px 25px 9px 25px;
		font-size: 14px;
	}
	@media (max-width: 500px) {
		padding: 7px 15px 7px 15px;
		font-size: 12px;
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
	@media (max-width: 700px) {
		padding: 9px 25px 9px 25px;
		font-size: 14px;
	}
	@media (max-width: 500px) {
		padding: 7px 15px 7px 15px;
		font-size: 12px;
	}
`
export const Logo = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 32px;
	font-weight: 300;
	font-family: 'Merriweather', serif;
	@media (max-width: 700px) {
		font-size: 26px;
	}
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
	@media (max-width: 400px) {
		margin-left: 15px;
	}
`
export const NavHome = styled(Link)`
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
	@media (max-width: 700px) {
		display: none;
	}
`

export const LogOutButton = styled.button`
	color: #fff;
	padding: 8px 30px 8px 30px;
	border-radius: 4px;
	border: 1px solid #b29f7e;
	background-color: #b29f7e;
	font-family: 'Merriweather', serif;
	font-size: 16px;
	cursor: pointer;
	font-weight: 700;
	line-height: 22px;
	transition: all 0.2s ease;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		border: 1px solid #ab7c2a;
		background-color: #ab7c2a;
	}
	@media (max-width: 700px) {
		padding: 12px 16px 12px 8px;
	}
`
export const LogOutButtonText = styled.div`
	@media (max-width: 700px) {
		display: none;
	}
`

export const AsideButtons = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`

export const AvatarProfile = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100px;
	padding: 4px;
	border: 2px solid #b29f7e;
	&:hover {
		border: 2px solid #ab7c2a;
	}
`

export const Hello = styled.span`
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	@media (max-width: 1200px) {
		display: none;
	}
`
