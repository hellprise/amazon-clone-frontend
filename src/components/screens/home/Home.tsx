import { useEffect, useState } from 'react'

import { Meta } from '@/ui/meta/Meta'
import { ProductList } from '@/ui/product/product-list/ProductList'

import { TypePaginationProducts } from '@/types/product.interface'

export const Home = ({ products, length }: TypePaginationProducts) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		if (products.length === 0) {
			setIsLoading(true)
		} else {
			setIsLoading(false)
		}
	}, [products])

	return (
		<Meta title='Home'>
			{/* Carousel */}

			<ProductList products={products || []} isLoading={isLoading} title='Hot deals 🔥' />
		</Meta>
	)
}
