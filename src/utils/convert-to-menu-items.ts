import { ICategory } from '@/types/category.interface'

import { IMenuItem } from '@/app/layout/sidebar/menu.interface'

export const convertToMenuItems = (routes: ICategory[]): IMenuItem[] =>
	routes.map(route => ({
		label: route.name,
		href: `/category/${route.slug}`
	}))
