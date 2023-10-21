import React, { FC } from 'react'
import { Container, Text, Title } from './Home.styled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled(Link)`
	border-radius: 8px;
	font-family: 'Merriweather', serif;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 34px;
	border: 1px solid #fff;
	text-decoration: none;
	cursor: pointer;
	color: #fff;
`

const Home: FC = () => {
	return (
		<Container>
			<Title>The chemical negatively charged</Title>
			<Text>
				Numerous calculations predict, and experiments confirm, that the force
				field
				<br /> reflects the beam, while the mass defect is not formed. The
				chemical compound is <br /> negatively charged. Twhile the mass defect
				is
			</Text>
			<Button to='/deals'>Get Started</Button>
		</Container>
	)
}

export default Home
