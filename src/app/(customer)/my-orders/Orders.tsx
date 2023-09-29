'use client'

import { useQuery } from '@tanstack/react-query'

import { Heading } from '@/ui/heading/Heading'

import { OrderService } from '@/services/order.service'

import { convertPrice } from '@/utils/convert-price'
import { formatDate } from '@/utils/format-date'

export const Orders = () => {
	const { data: orders } = useQuery(['my orders'], () => OrderService.getByUserId(), {
		select: ({ data }) => data
	})

	return (
		<>
			<Heading>My orders</Heading>

			{orders?.length ? (
				<section className='flex flex-col gap-5'>
					{orders?.map(order => (
						<div className='flex gap-7 rounded-xl bg-white p-7 text-white shadow' key={order.id}>
							<span>#{order.id}</span>
							<span>{order.status}</span>
							<span>{formatDate(order.createdAt)}</span>

							<section>
								{order.items.map(item => (
									<div key={item.id}>
										{item.product.name} - {item.quantity} - {item.price}
									</div>
								))}
							</section>

							<span>{convertPrice(order.total)}</span>
						</div>
					))}
				</section>
			) : (
				<section className='flex items-center justify-center text-white'>
					<p>You have no orders yet.</p>
				</section>
			)}
		</>
	)
}
