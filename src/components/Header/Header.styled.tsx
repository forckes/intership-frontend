import styled from 'styled-components'

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
	margin-left: 100px;
`

export const LogIn = styled.button`
	padding: 11px 40px 11px 40px;
	border: 1px solid #b29f7e;
	border-radius: 4px;
	color: #b29f7e;
	background-color: transparent;
	font-family: 'Merriweather', serif;
	font-size: 16px;
	cursor: pointer;
	margin-right: 10px;
	font-weight: 700;
	line-height: 22px;
	transition: all 0.2s ease;

	&:hover {
		border: 1px solid #ab7c2a;
		color: #ab7c2a;
	}
`
export const SignUp = styled.button`
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
	&:hover {
		border: 1px solid #ab7c2a;
		background-color: #ab7c2a;
	}
`
