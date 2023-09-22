import { IPagination } from '@/types/pagination.interface'

// зробити такий файл для кожного сервісу та винести все, що потрібно

export const PRODUCTS = 'products'

export type typeProductData = {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

type SortData = {
	sort?: EnumProductSort | string
	searchTerm?: string
	ratings: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
}

export type TypeProductDataFilters = SortData & IPagination

export enum EnumProductSort {
	HIGH_PRICE = 'hight-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
