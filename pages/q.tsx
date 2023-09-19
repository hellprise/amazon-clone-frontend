import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { Layout } from '@/ui/layout/Layout'
import { Meta } from '@/ui/meta/Meta'
import { Catalog } from '@/ui/product/catalog/Catalog'

import { ProductService } from '@/services/product/product.service'

const SearchPage = () => {
	const { query } = useRouter()

	const { data } = useQuery(['search products', query.term], () =>
		ProductService.getAll({ searchTerm: query.term as string })
	)

	return (
		<Meta title='Search'>
			<Layout>
				<Catalog products={data?.products || []} title={`Search by "${query.term || ''}"`} />
			</Layout>
		</Meta>
	)
}

export default SearchPage
