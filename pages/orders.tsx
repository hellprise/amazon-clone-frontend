import { useQuery } from '@tanstack/react-query'

import { Heading } from '@/ui/heading/Heading'
import { Layout } from '@/ui/layout/Layout'
import { Meta } from '@/ui/meta/Meta'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { OrderService } from '@/services/order.service'

import { convertPrice } from '@/utils/convert-price'

const OrdersPage: NextPageAuth = () => {
	const { data: orders } = useQuery(['my orders'], () => OrderService.getAll(), {
		select: ({ data }) => data
	})

	const getDate = (date: string) =>
		new Date(date).toLocaleDateString('uk-UA', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})

	return (
		<Meta title='My orders'>
			<Layout>
				<Heading>My orders</Heading>

				{orders?.length ? (
					<section className='flex flex-col gap-5'>
						{orders?.map(order => (
							<div className='flex gap-7 rounded-xl bg-white p-7 text-white shadow' key={order.id}>
								<span>#{order.id}</span>
								<span>{order.status}</span>
								<span>{getDate(order.createdAt)}</span>

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
			</Layout>
		</Meta>
	)
}

OrdersPage.isOnlyUser = true

export default OrdersPage
