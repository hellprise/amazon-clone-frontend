import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EnumProductSort } from '@/services/product/product.types'

import { IFiltersActionsPayload, IFiltersInitialState } from './filters.types'

const initialState: IFiltersInitialState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumProductSort.NEWEST,
		searchTerm: '',
		ratings: '',
		page: 1,
		perPage: 20
	}
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
			const { key, value } = action.payload

			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		}
	}
})
