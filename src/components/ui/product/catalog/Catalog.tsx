import { FC } from 'react'

import { Heading } from '@/ui/heading/Heading'
import { Loader } from '@/ui/loader/Loader'

import { TypeProducts } from '@/types/product.interface'

import { ProductCard } from '../product-card/ProductCard'

interface ICatalogProps extends TypeProducts {
	isLoading?: boolean
	title: string
}

export const Catalog: FC<ICatalogProps> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />

	return (
		<section className='mt-8 flex flex-col'>
			<Heading tag='h2' className='mb-5 !text-left'>
				{title}
			</Heading>

			{products.length ? (
				<>
					<div className='grid grid-cols-4 gap-8'>
						{products.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</>
			) : (
				<p>There are no products</p>
			)}
		</section>
	)
}
