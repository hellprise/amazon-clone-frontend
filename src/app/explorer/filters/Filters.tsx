import { CategoryGroup } from './category-group/CategoryGroup'
import { PriceGroup } from './price-group/PriceGroup'
import { RatingsGroup } from './rating-group/RatingGroup'

export const Filters = () => {
	return (
		<section className='flex flex-col gap-5'>
			<PriceGroup />
			<CategoryGroup />
			<RatingsGroup />
		</section>
	)
}
