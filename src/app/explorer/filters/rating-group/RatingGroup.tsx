import type { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import { Checkbox } from '@/ui/checkbox/Checkbox'

import { useFilters } from '../../useFilters'
import { FilterWrapper } from '../FilterWrapper'

import { updateRatingsQuery } from './update-ratings-query'
import { RATING_VARIANTS } from '@/data/rating-variants.data'

export const RatingsGroup: FC = () => {
	const { queryParams, updateUrl } = useFilters()

	return (
		<FilterWrapper title='Available rating for the product'>
			{RATING_VARIANTS.map(rating => (
				<Checkbox
					isChecked={queryParams.ratings?.includes(rating.toString())}
					onClick={() => updateUrl('ratings', updateRatingsQuery(queryParams.ratings, rating.toString()))}
					className='mb-2 text-sm'
					key={rating}
				>
					<Rating readonly initialValue={rating} SVGstyle={{ display: 'inline-block' }} size={20} transition />
				</Checkbox>
			))}
		</FilterWrapper>
	)
}
