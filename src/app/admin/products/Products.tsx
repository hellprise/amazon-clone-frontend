'use client'

import { AdminList } from '@/ui/admin/admin-list/AdminList'
import { Heading } from '@/ui/heading/Heading'

import { useAdminProducts } from '@/hooks/admin/useAdminProducts'

export const Products = () => {
	const { products, isLoading, deleteProduct } = useAdminProducts()

	return (
		<>
			<Heading className='mb-9 mt-10'>Products</Heading>

			<AdminList isLoading={isLoading} listItems={products} removeHandler={deleteProduct} />
		</>
	)
}
