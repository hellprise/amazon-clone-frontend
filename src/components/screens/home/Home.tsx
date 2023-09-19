import { useEffect, useState } from 'react'

import { Layout } from '@/ui/layout/Layout'
import { Meta } from '@/ui/meta/Meta'
import { CatalogPagination } from '@/ui/product/catalog/CatalogPagination'

import { TypePaginationProducts } from '@/types/product.interface'

export const Home = ({ products, count }: TypePaginationProducts) => {
	// const [isLoading, setIsLoading] = useState<boolean>(false)

	// useEffect(() => {
	// 	if (products.length === 0) {
	// 		setIsLoading(true)
	// 	} else {
	// 		setIsLoading(false)
	// 	}
	// }, [products])

	return (
		<Meta title='Home'>
			<Layout>
				{/* Carousel */}

				<CatalogPagination data={{ products, count }} title='Hot deals 🔥' />
			</Layout>
		</Meta>
	)
}
