import { IReview } from '@/types/review.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

const REVIEWS = 'reviews'

type typeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async getAverageByProduct(productId: string | number) {
		return axiosClassic<{ rating: number }>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: typeData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
