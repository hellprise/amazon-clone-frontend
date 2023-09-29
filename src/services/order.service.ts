import { IConfirmation, IOrder, TypeOrderData } from '@/types/order.interface'

import { instance } from '@/api/api.interceptor'

const ORDERS = 'orders'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	},

	getByUserId() {
		return instance<IOrder[]>({
			url: `${ORDERS}/by-user`,
			method: 'GET'
		})
	},

	async place(data: TypeOrderData) {
		return instance<IConfirmation>({
			url: ORDERS,
			method: 'POST',
			data
		})
	}
}
