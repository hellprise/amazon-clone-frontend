import { Layout } from '@/ui/layout/Layout'
import { Meta } from '@/ui/meta/Meta'
import { Catalog } from '@/ui/product/catalog/Catalog'

import { useProfile } from '@/hooks/useProfile'

export const Favorites = () => {
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}
