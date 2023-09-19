import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

export const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		Math.round(product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length) || 0
	)

	// const { data: rating } = useQuery(
	// 	['get product rating', product.id],
	// 	() => ReviewService.getAverageByProduct(product.id),
	// 	{
	// 		select: ({ data }) => data.rating
	// 	}
	// )

	return (
		<section className='mt-2 flex items-center gap-1'>
			{!!product.reviews.length && (
				<Rating
					readonly
					initialValue={rating}
					SVGstyle={{ display: 'inline-block' }}
					size={26}
					allowFraction
					transition
				/>
			)}

			<p className='mr-1 font-medium leading-none text-primary'>{rating}</p>

			<span className='leading-none'>({product.reviews.length} reviews)</span>
		</section>
	)
}
