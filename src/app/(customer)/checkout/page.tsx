import { Metadata } from 'next'

import { ProductService } from '@/services/product/product.service'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Checkout } from './Checkout'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE
}

export const revalidate = 60

export async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 20,
		ratings: ''
	})

	return data
}

export default async function CheckoutPage() {
	const data = await getProducts()
	return <Checkout products={data.products} />
}
