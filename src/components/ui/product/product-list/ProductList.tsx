import { FC } from 'react'

import { Heading } from '@/ui/heading/Heading'
import { Loader } from '@/ui/loader/Loader'

import { TypeProducts } from '@/types/product.interface'

import { ProductCard } from '../product-card/ProductCard'

interface IProductListProps extends TypeProducts {
	isLoading?: boolean
	title: string
}

export const ProductList: FC<IProductListProps> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />
	return (
		<section>
			<Heading>{title}</Heading>

			<div className='grid grid-cols-3 gap-10'>
				{products.length ? (
					products.map(product => <ProductCard key={product.id} product={product} />)
				) : (
					<p>There are no products</p>
				)}
			</div>
		</section>
	)
}
