import { IPagination } from '@/types/pagination.interface'

export const PRODUCTS = 'products'

export type typeProductData = {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

type SortData = {
	sort?: EnumProductSort
	searchTerm?: string
}

export type TypeProductDataFilters = SortData & IPagination

export enum EnumProductSort {
	HIGH_PRICE = 'hight-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}