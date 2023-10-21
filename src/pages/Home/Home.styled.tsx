import styled from 'styled-components'

export const Container = styled.div`
	height: calc(100vh - 82px);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	flex-direction: column;
	background-image: url('images/bg.png');
	background-size: cover;
	background-position: center;
	width: 100vw;
	overflow: hidden;
	margin: 0;
	position: relative; /* Add position relative to establish a stacking context */
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
`
