'use client'

import { FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

import { ProductRating } from '@/ui/product/product-rating/ProductRating'

import { IProduct } from '@/types/product.interface'

interface IProductReviewsCount {
	product: IProduct
}

export const ProductReviewsCount: FC<IProductReviewsCount> = ({ product }) => {
	const reviewsLength = product.reviews.length

	if (!reviewsLength) return null

	return (
		<section>
			<ProductRating product={product} />

			<div>
				<Link
					className='cursor-pointer text-sm font-semibold opacity-50'
					to='reviews'
					smooth={true}
					offset={-50}
					duration={1000}
				>
					{reviewsLength} reviews {(<FiChevronRight className='inline-block' />) as any}
				</Link>
			</div>
		</section>
	)
}
