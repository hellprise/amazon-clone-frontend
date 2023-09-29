import { Checkbox } from '@/ui/checkbox/Checkbox'
import { Loader } from '@/ui/loader/Loader'

import { useCategories } from '@/hooks/queries/useCategories'

import { useFilters } from '../../useFilters'
import { FilterWrapper } from '../FilterWrapper'

export const CategoryGroup = () => {
	const { queryParams, updateUrl } = useFilters()

	const { data, isLoading } = useCategories()

	return (
		<FilterWrapper title='Category'>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				data.map(category => {
					const isChecked = queryParams.categoryId === category.id.toString()

					return (
						<Checkbox
							key={category.id}
							isChecked={isChecked}
							onClick={() => updateUrl('categoryId', isChecked ? '' : category.id.toString())}
							className='mb-2 text-sm'
						>
							{category.name}
						</Checkbox>
					)
				})
			) : (
				<p className='py-10 text-center font-medium text-red-400'>Categories not found</p>
			)}
		</FilterWrapper>
	)
}
