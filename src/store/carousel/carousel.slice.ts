import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICarouselInitialState } from './carousel.types'

const initialState: ICarouselInitialState = {
	selectedItemIndex: 0
}

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide: (state, action: PayloadAction<{ carouselLength: number }>) => {
			if (state.selectedItemIndex !== action.payload.carouselLength - 1) state.selectedItemIndex += 1
			else state.selectedItemIndex = 0
		},
		prevSlide: (state, action: PayloadAction<{ carouselLength: number }>) => {
			if (state.selectedItemIndex > 0) state.selectedItemIndex -= 1
			else state.selectedItemIndex = action.payload.carouselLength - 1
		},
		selectIndex: (state, action: PayloadAction<number>) => {
			state.selectedItemIndex = action.payload
		}
	}
})
