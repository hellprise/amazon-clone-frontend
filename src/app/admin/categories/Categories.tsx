'use client'

import { AdminList } from '@/ui/admin/admin-list/AdminList'
import { Heading } from '@/ui/heading/Heading'

import { useAdminCategories } from '@/hooks/admin/useAdminCategories'

export const Categories = () => {
	const { products, isLoading, deleteProduct } = useAdminCategories()

	return (
		<>
			<Heading className='mb-9 mt-10'>Categories</Heading>

			<AdminList isLoading={isLoading} listItems={products} removeHandler={deleteProduct} />
		</>
	)
}
