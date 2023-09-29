import { useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'


import { ReviewService } from '@/services/review.service'


export const useAdminReviews = () => {
	const { data, isFetching } = useQuery(['get reviews'], () => ReviewService.getAll(), {
		select: ({ data }) =>
			data.map((review): IListItem => {
				return {
					id: review.id,
					items: [Array.from({ length: review.rating }, () => '⭐').join(' '), review.user.name]
					// items: [Array.from({ length: review.rating }).map(() => '⭐').join('')]
				}
			})
	})

	return { products: data, isLoading: isFetching }
}
