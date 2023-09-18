import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

export const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		Math.round(product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length) || 0
	)

	return (
		<section>
			<span>Review:</span>

			<Rating
				readonly
				initialValue={rating || 0}
				SVGstyle={{ display: 'inline-block' }}
				size={20}
				allowFraction
				transition
			/>

			<p className='text-primary'>{rating}</p>

			<span>({product.reviews.length} reviews)</span>
		</section>
	)
}
