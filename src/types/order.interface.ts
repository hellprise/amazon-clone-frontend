import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export type TypeOrderData = {
	status?: EnumOrderStatus
	items: {
		productId: number
		quantity: number
		price: number
	}[]
}

export interface IOrder {
	id: number
	createdAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
	total: number
}

export interface IConfirmation {
	confirmation: {
		confirmation_url: string
	}
}
