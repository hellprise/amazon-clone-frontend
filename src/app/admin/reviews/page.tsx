import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Reviews } from './Reviews'

export const metadata: Metadata = {
	title: 'Admin products',
	...NO_INDEX_PAGE
}

export default function AdminProductsPage() {
	return <Reviews />
}
