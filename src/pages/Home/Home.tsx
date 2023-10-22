import { FC } from 'react'
import { Button, Container, Text, Title } from './Home.styled'

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
