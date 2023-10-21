import { IOption } from './option.interface'

export interface IDeal {
	id: number
	images: string[]
	title: string
	description: string

	options: IOption[]
}
