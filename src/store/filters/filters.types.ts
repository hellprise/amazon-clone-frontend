import { TypeProductDataFilters } from '@/services/product/product.types'

export interface IFiltersInitialState {
	isFilterUpdated: boolean
	queryParams: TypeProductDataFilters
}

export interface IFiltersActionsPayload {
	key: keyof TypeProductDataFilters
	value: string
}
