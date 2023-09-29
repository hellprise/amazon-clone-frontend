import type { FC } from 'react'

import { Range } from '@/ui/range/Range'

import { useFilters } from '../../useFilters'
import { FilterWrapper } from '../FilterWrapper'

export const PriceGroup: FC = () => {
	const { queryParams, updateUrl } = useFilters()

	return (
		<FilterWrapper title='Price from/to'>
			<Range
				max={2000}
				fromInitialValue={queryParams.minPrice}
				toInitialValue={queryParams.maxPrice}
				onChangeFromValue={value => updateUrl('minPrice', value)}
				onChangeToValue={value => updateUrl('maxPrice', value)}
			/>
		</FilterWrapper>
	)
}
