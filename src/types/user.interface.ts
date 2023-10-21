import { IDeal } from './deal.interface'

export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IFullUser extends IUser {
	favorites: IDeal[]
}
