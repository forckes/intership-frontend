import styled from 'styled-components'

export const FieldContainer = styled.div`
	display: flex;
	flex-direction: column;
`
export const LabelContainer = styled.label`
	display: flex;
	flex-direction: column;
	align-items: start;
`

export const Label = styled.span`
	color: #000;
	font-family: 'Merriweather', serif;
	font-size: 16px;
	font-weight: 700;
	line-height: 20px;
	margin-bottom: 4px;
`

export const Input = styled.input`
	display: flex;
	width: 350px;
	padding: 16px 20px 14px 20px;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	border: 2px solid #e0e0e0;
	background: #e0e0e0;
	margin-bottom: 20px;
	&::placeholder {
		color: #172234;
		font-family: Lato;
		font-size: 14px;
		font-weight: 400;
		line-height: 22px;
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
