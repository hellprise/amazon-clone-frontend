import { useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { OrderService } from '@/services/order.service'

import { convertPrice } from '@/utils/convert-price'
import { formatDate } from '@/utils/format-date'

export const useAdminOrders = () => {
	const { data, isFetching } = useQuery(['get orders'], () => OrderService.getAll(), {
		select: ({ data }) =>
			data.map((order): IListItem => {
				return {
					id: order.id,
					editUrl: getAdminUrl(`/orders/edit/${order.id}`),
					items: [`# ${order.id}`, formatDate(order.createdAt), convertPrice(order.total), order.status]
				}
			})
	})

	return { products: data, isLoading: isFetching }
}
