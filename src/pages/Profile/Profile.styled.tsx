import styled from 'styled-components'

export const ProfileContainer = styled.div`
	display: flex;
	font-family: 'Lato', sans-serif;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 70px;
	padding: 10px;
	border-radius: 24px;
	@media (max-width: 500px) {
		margin-top: 20px;
	}
`

export const Avatar = styled.img`
	border-radius: 100%;
	@media (max-width: 500px) {
		width: 250px;
		height: 250px;
	}
`

export const AccountInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Name = styled.div`
	font-size: 32px;
	margin-top: 10px;
	font-weight: 500;
	@media (max-width: 500px) {
		font-size: 28px;
	}
`

export const Title = styled.span`
	font-size: 28px;
	font-weight: 700;
	margin-top: 20px;
	@media (max-width: 500px) {
		font-size: 24px;
	}
`

export const Info = styled.div`
	font-size: 28px;
	margin-top: 15px;
	font-weight: 700;
	@media (max-width: 500px) {
		font-size: 24px;
	}
`
export const InfoLabel = styled.span`
	font-size: 28px;
	font-weight: 400;
	@media (max-width: 500px) {
		font-size: 24px;
	}
`
