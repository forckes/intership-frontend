import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
`

export const ImageContainer = styled.div`
	max-width: 100vw;
	flex: 0 1 50%;
`
export const ImageComp = styled.img`
	min-height: calc(100vh - 72px);
	max-width: calc(100vw - 100%);
`

export const FormContainer = styled.div`
	flex: 0 1 50%;
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
`

export const Title = styled.h1`
	color: #172234;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: 34px;
	font-family: 'Merriweather', serif;
`

export const SignUpButton = styled.button`
	padding: 11px 40px 11px 40px;
	width: 100%;
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
	margin-top: 40px;
	&:hover {
		border: 1px solid #ab7c2a;
		background-color: #ab7c2a;
	}
`

export const DontHaveAccount = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	justify-content: center;
	font-family: 'Lato', sans-serif;
`

export const RegisterLink = styled(Link)`
	color: #b29f7e;
	text-decoration: none;
	&:hover {
		color: #ab7c2a;
	}
`
export const Error = styled.div`
	color: #ff0000;
	font-size: 16px;
	font-weight: 700;
	margin-top: -12px;
	font-family: 'Lato', sans-serif;
	margin-bottom: 10px;
`
