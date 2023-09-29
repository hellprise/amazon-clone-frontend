import { ISelectItem } from '@/ui/select/select.interface'

import { EnumProductSort } from '@/services/product/product.types'

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
	{
		key: EnumProductSort.HIGH_PRICE,
		label: 'High Price'
	},
	{
		key: EnumProductSort.LOW_PRICE,
		label: 'Low Price'
	},
	{
		key: EnumProductSort.NEWEST,
		label: 'Newest'
	},
	{
		key: EnumProductSort.OLDEST,
		label: 'Oldest'
	}
]