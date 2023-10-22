import { instance } from '../api/api.interceptor'
import { IDeal } from '../types/deal.interface'

const DEALS = 'deal'

export const DealsService = {
	async getAll() {
		return instance<IDeal[]>({
			url: DEALS,
			method: 'GET'
		})
	},

	async getById(dealId: string | undefined) {
		return instance<IDeal>({
			url: `${DEALS}/${dealId}`,
			method: 'GET'
		})
	}
}
