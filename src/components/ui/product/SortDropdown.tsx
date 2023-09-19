import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { EnumProductSort } from '@/services/product/product.types'

interface ISortDropdownProps {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

export const SortDropdown: FC<ISortDropdownProps> = ({ sortType, setSortType }) => {
	const handleSortType = (e: ChangeEvent<HTMLSelectElement>) => setSortType(e.target.value as EnumProductSort)

	return (
		<select
			value={sortType}
			onChange={handleSortType}
			className='mb-3 cursor-pointer appearance-none self-end rounded-md border-2 border-transparent bg-secondary/5 p-2 text-secondary outline-none transition-all duration-300 focus:border-secondary'
			id='sort-dropdown'
		>
			{(Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>).map(key => (
				<option key={key} value={EnumProductSort[key]}>
					{EnumProductSort[key]}
				</option>
			))}
		</select>
	)
}
