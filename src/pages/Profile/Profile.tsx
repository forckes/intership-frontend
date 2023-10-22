'use client'
import { FC } from 'react'
import { useProfile } from '../../hooks/useProfile'
import {
	AccountInfo,
	Avatar,
	Info,
	InfoLabel,
	Name,
	ProfileContainer,
	Title
} from './Profile.styled'

const Profile: FC = () => {
	const { profile } = useProfile()

	return (
		<ProfileContainer>
			<div>
				<Avatar
					src={profile ? profile?.avatarPath : ''}
					width={300}
					height={300}
					alt='Avatar'
				/>
			</div>
			<AccountInfo>
				<Name>
					Hi, <b>{profile?.name}!</b>{' '}
				</Name>

				<Title>Account info</Title>

				<Info>
					<InfoLabel>Email:</InfoLabel> {profile?.email}
				</Info>
				<Info>
					<InfoLabel>Phone:</InfoLabel> {profile?.phone}
				</Info>
			</AccountInfo>
		</ProfileContainer>
	)
}

export default Profile
