import styled from 'styled-components'

export const DealsContainer = styled.div`
	padding: 50px 80px;
	display: flex;
	flex-direction: column;
`

export const Title = styled.h1`
	color: #b29f7e;
	font-family: 'Merriweather', serif;
	font-size: 32px;
	font-weight: 700;
	line-height: 34px;
`

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(630px, 1fr));
	gap: 20px;
`

export const Deal = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	color: #fff;
`

export const Image = styled.img``

export const Info = styled.div`
	padding: 15px;
	position: absolute;
	bottom: 0;
	left: 0;
`

export const DealTitle = styled.h3`
	font-family: 'Merriweather', serif;
	font-size: 22px;
	font-weight: 500;
	line-height: 34px;
`

export const Options = styled.div`
	margin-top: -20px;
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	justify-content: start;
`
export const Option = styled.div`
	font-family: 'Lato', sans-serif;
	font-size: 18px;
	font-weight: 700;
	line-height: 22px;
	display: flex;
	margin-right: 80px;
	justify-content: start;
	max-width: 170px;
	min-width: 156px;
	&:not(:first-child) {
		gap: 10px;
	}
`
