import { FC } from 'react'

import { Select } from '@/ui/select/Select'

import { EnumProductSort } from '@/services/product/product.types'

import { useFilters } from '../useFilters'

import { SORT_SELECT_DATA } from '@/data/sort-select.data'

export const SortDropdown: FC = () => {
	const { queryParams, updateUrl } = useFilters()

	return (
		<section className='z-10 text-right'>
			<Select<EnumProductSort>
				data={SORT_SELECT_DATA}
				onChange={value => updateUrl('sort', value.key.toString())}
				value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
				title='Sort by:'
			/>
		</section>
	)
}
