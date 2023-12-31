import { FC, useEffect, useState } from 'react'
import {
	Content,
	Deal,
	DealTitle,
	DealsContainer,
	Image,
	Info,
	Option,
	Options,
	Title
} from './Deals.styled'
import { IDeal } from '../../types/deal.interface'
import { DealsService } from '../../services/deals.service'

const Deals: FC = () => {
	const [deals, setDeals] = useState<IDeal[]>([])

	useEffect(() => {
		const fetchDeals = async () => {
			try {
				const response = await DealsService.getAll()
				setDeals(response.data)
			} catch (error) {
				console.error('Error fetching deals:', error)
			}
		}

		fetchDeals()
	}, [])

	return (
		<DealsContainer>
			<Title>Open Deals</Title>
			<Content>
				{deals.map(deal => (
					<Deal key={deal.id}>
						<Image src={deal.images[0]} alt='Deal' />
						<Info>
							<DealTitle>{deal.title}</DealTitle>
							<Options>
								{deal.options.map(option => (
									<Option key={option.id}>
										<div>{option.label}</div>
										<div>{option.value}</div>
									</Option>
								))}
							</Options>
						</Info>
					</Deal>
				))}
			</Content>
		</DealsContainer>
	)
}

export default Deals
