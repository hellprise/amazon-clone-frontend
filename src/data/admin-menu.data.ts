import { getAdminUrl } from '@/config/url.config'

import { IMenuItem } from '../app/layout/sidebar/menu.interface'

export const ADMIN_MENU: IMenuItem[] = [
	{
		id: 1,
		label: 'Dashboard',
		href: getAdminUrl()
	},
	{
		id: 2,
		label: 'Products',
		href: getAdminUrl('/products')
	},
	{
		id: 3,
		label: 'Categories',
		href: getAdminUrl('/categories')
	},
	{
		id: 4,
		label: 'Orders',
		href: getAdminUrl('/orders')
	},
	{
		id: 5,
		label: 'Reviews',
		href: getAdminUrl('/reviews')
	}
]
