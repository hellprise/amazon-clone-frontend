'use client'

import { AdminList } from '@/ui/admin/admin-list/AdminList'
import { Heading } from '@/ui/heading/Heading'

import { useAdminReviews } from '@/hooks/admin/useAdminReviews'

export const Reviews = () => {
	const { products, isLoading } = useAdminReviews()

	return (
		<>
			<Heading className='mb-9 mt-10'>Reviews</Heading>

			<AdminList isLoading={isLoading} listItems={products} />
		</>
	)
}
