import { FC } from 'react'

import { Heading } from '@/ui/heading/Heading'
import { ProductCard } from '@/ui/product/catalog/product-card/ProductCard'

import { IProduct } from '@/types/product.interface'

interface ISimilarProducts {
	similarProducts: IProduct[]
}

export const SimilarProducts: FC<ISimilarProducts> = ({ similarProducts }) => {
	return (
		<section className='mt-20'>
			<Heading className='mb-7'>Similar products:</Heading>

			{similarProducts.length ? (
				<div className='grid grid-cols-4 gap-10'>
					{similarProducts.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			) : (
				<p className='text-center text-lg font-medium text-black'>There are no products</p>
			)}
		</section>
	)
}
