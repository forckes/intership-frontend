import styled from 'styled-components'

export const Title = styled.h1`
	font-size: 50px;
	font-weight: 900;
`

export const DealContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px 100px;
	gap: 50px;
`
export const ImageContainer = styled.div`
	flex: 0 1 50%;
`
export const Image = styled.img`
	width: 800px;
	height: 600px;
`

export const ContentContainer = styled.div`
	display: flex;
	flex: 0 1 50%;
	flex-direction: column;
	align-items: start;
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const Description = styled.div`
	font-family: 'Lato', sans-serif;
	line-height: 24px;
	font-size: 20px;
`

export const OptionContainer = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 10px;
`

export const Option = styled.div`
	font-family: 'Lato', sans-serif;
	display: flex;
	font-size: 20px;
	gap: 10px;
	font-weight: 700;
`
