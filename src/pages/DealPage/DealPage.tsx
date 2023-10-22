import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DealsService } from '../../services/deals.service'
import { IDeal } from '../../types/deal.interface'
import {
	ContentContainer,
	DealContainer,
	Description,
	Image,
	ImageContainer,
	InfoContainer,
	Option,
	OptionContainer,
	Title
} from './DealPage.styled'

const DealPage = () => {
	const { dealId } = useParams()
	const [deal, setDeal] = useState<IDeal | undefined>(undefined)
	useEffect(() => {
		const fetchDeal = async () => {
			try {
				const response = await DealsService.getById(dealId)
				const fetchedDeal = response.data
				setDeal(fetchedDeal)
			} catch (error) {
				console.error(error)
			}
		}
		fetchDeal()
	}, [dealId])

	return (
		<DealContainer>
			<ImageContainer>
				<Image src={deal?.images[0]} alt='Deal' />
			</ImageContainer>
			<ContentContainer>
				<Title>{deal?.title}</Title>
				<InfoContainer>
					<Description>{deal?.description}</Description>
					<OptionContainer>
						{deal?.options.map(option => (
							<Option key={option.id}>
								<div>{option.label}</div>
								<div>{option.value}</div>
							</Option>
						))}
					</OptionContainer>
				</InfoContainer>
			</ContentContainer>
		</DealContainer>
	)
}

export default DealPage
