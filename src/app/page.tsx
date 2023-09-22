import { Metadata } from 'next'

import { ProductService } from '@/services/product/product.service'

import { Home } from '@/app/Home'

export const metadata: Metadata = {
	description: 'Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime.'
}

export const revalidate = 60

export async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 4,
		ratings: ''
	})

	return data
}

export default async function HomeLayout() {
	const { products, count } = await getProducts()

	return <Home products={products} count={count} />
}
