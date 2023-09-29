'use client'

import { AdminList } from '@/ui/admin/admin-list/AdminList'
import { Heading } from '@/ui/heading/Heading'

import { useAdminOrders } from '@/hooks/admin/useAdminOrders'

export const Orders = () => {
	const { products, isLoading } = useAdminOrders()

	return (
		<>
			<Heading className='mb-9 mt-10'>Orders</Heading>

			<AdminList isLoading={isLoading} listItems={products} />
		</>
	)
}
