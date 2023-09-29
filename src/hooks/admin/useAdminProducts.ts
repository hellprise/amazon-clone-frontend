import { useMutation, useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { ProductService } from '@/services/product/product.service'

import { formatDate } from '@/utils/format-date'

export const useAdminProducts = () => {
	const { data, isFetching, refetch } = useQuery(['get products'], () => ProductService.getAll(), {
		select: ({ products }) =>
			products.map((product): IListItem => {
				return {
					id: product.id,
					viewUrl: `/product/${product.slug}`,
					editUrl: getAdminUrl(`/products/edit/${product.id}`),
					items: [product.name, product.category.name, formatDate(product.createdAt)]
				}
			})
	})

	const { mutate } = useMutation(['delete product'], (id: number) => ProductService.deleteProduct(id), {
		onSuccess: () => refetch()
	})

	return { products: data, isLoading: isFetching, deleteProduct: mutate }
}
