import { createSlice } from '@reduxjs/toolkit'

const initialState: ICarouselInitialState = {
	items: []
}

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		// addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
		// 	const isExistsSize = state.items.some(
		// 		item => item.size === action.payload.size
		// 	)
		// 	if (isExistsSize) {
		// 		state.items.push({
		// 			...action.payload,
		// 			id: state.items.length + 1
		// 		})
		// 	}
		// },
	}
})
