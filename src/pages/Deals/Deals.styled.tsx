import styled from 'styled-components'

export const DealsContainer = styled.div`
	padding: 50px 80px;
	display: flex;
	flex-direction: column;
	@media (max-width: 1000px) {
		padding: 30px 40px;
	}
	@media (max-width: 400px) {
		padding: 10px 15px;
	}
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
	@media (max-width: 800px) {
		grid-template-columns: repeat(auto-fit, minmax(330px, 650px));
	}
	@media (max-width: 400px) {
		grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
	}
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
	@media (max-width: 600px) {
		font-size: 16px;
	}
`

export const Options = styled.div`
	margin-top: -20px;
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	justify-content: start;
	@media (max-width: 600px) {
		gap: 10px;
		margin-top: -10px;
	}
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
	@media (max-width: 600px) {
		margin-right: 0px;
		font-size: 10px;
		font-weight: 500;
		gap: 0px;
		max-width: 100px;
		min-width: 50px;
		line-height: 4px;
	}
`
