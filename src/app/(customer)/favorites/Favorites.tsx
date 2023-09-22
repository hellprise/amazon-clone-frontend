'use client'

import { Catalog } from '@/ui/product/catalog/Catalog'

import { useProfile } from '@/hooks/useProfile'

export const Favorites = () => {
	const { profile } = useProfile()

	return (
		<>
			<Catalog products={profile?.favorites || []} title='Favorites' />
		</>
	)
}
