import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	height: calc(100vh - 72px);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	flex-direction: column;
	background-image: url('images/bg.png') !important ;
	background-size: cover;
	background-position: center;
	width: 100vw;
	overflow: hidden;
	margin: 0;
	position: relative;
	padding: 0;
	&:before {
		content: '';
		background-color: #172234;
		position: absolute;
		opacity: 0.6;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`

export const Title = styled.h1`
	margin-top: -100px;
	text-align: center;
	font-family: 'Merriweather', serif;
	font-size: 64px;
	font-weight: 700;
	line-height: 80px;
	z-index: 2;
	@media (max-width: 800px) {
		font-size: 46px;
		line-height: 52px;
	}
	@media (max-width: 600px) {
		font-size: 36px;
		line-height: 46px;
	}
	@media (max-width: 400px) {
		font-size: 30px;
		line-height: 38px;
	}
`

export const Text = styled.h1`
	text-align: center;
	font-family: 'Lato', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 300;
	line-height: 32px;
	letter-spacing: -0.48px;
	margin-top: -30px;
	z-index: 2;
	max-width: 822px;
	@media (max-width: 800px) {
		font-size: 18px;
		line-height: 26px;
	}
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 24px;
		margin-top: -20px;
	}
	@media (max-width: 500px) {
		font-size: 16px;
		line-height: 24px;
		margin-top: -10px;
	}
`
export const Button = styled(Link)`
	border-radius: 8px;
	margin-top: 20px;
	font-family: 'Merriweather', serif;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 34px;
	border: 1px solid #fff;
	text-decoration: none;
	cursor: pointer;
	color: #fff;
	z-index: 2;
	padding: 10px 24px 10px 24px;
	transition: background-color 0.2s ease;
	&:hover {
		background-color: #ffffff6a;
	}
`
