'use client'

import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { Heading } from '@/ui/heading/Heading'

import { ProductService } from '@/services/product/product.service'

import { IProduct } from '@/types/product.interface'

import { ProductGallery } from './ProductGallery'
import { ProductReviewsCount } from './ProductReviewsCount'
import { SimilarProducts } from './SimilarProducts'
import { ProductInformation } from './product-information/ProductInformation'
import { ProductReviews } from './product-reviews/ProductReviews'

interface IProductProps {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

export const Product: FC<IProductProps> = ({ initialProduct, similarProducts, slug = '' }) => {
	const { data: product } = useQuery(['get product', initialProduct.id], () => ProductService.getBySlug(slug), {
		initialData: initialProduct,
		enabled: !!slug // if slug is undefined, don't fetch
	})

	return (
		<>
			<Heading className='mb-1 mt-10'>{product.name}</Heading>

			<ProductReviewsCount product={product} />

			<div className='mt-6 grid grid-cols-3 gap-12'>
				<ProductGallery images={product.images} />

				<span className='font-light opacity-80'>
					<p className='mb-1 font-semibold'>Description</p>

					{product.description}
				</span>

				<ProductInformation product={product} />
			</div>

			<SimilarProducts similarProducts={similarProducts} />

			<ProductReviews productId={product.id} reviews={product.reviews} />
		</>
	)
}
