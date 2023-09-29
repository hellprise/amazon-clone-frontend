import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Orders } from './Orders'

export const metadata: Metadata = {
	title: 'Admin products',
	...NO_INDEX_PAGE
}

export default function AdminProductsPage() {
	return <Orders />
}
