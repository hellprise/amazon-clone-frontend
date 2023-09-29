'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { Button } from '@/ui/button/Button'
import { Heading } from '@/ui/heading/Heading'
import { ProductCard } from '@/ui/product/catalog/product-card/ProductCard'

import { OrderService } from '@/services/order.service'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convert-price'

import styles from './Checkout.module.scss'
import { CheckoutItem } from './CheckoutItem'

export const Checkout: FC<{ products: IProduct[] }> = ({ products }) => {
	const { items, total } = useCart()

	const { reset } = useActions()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					productId: item.id,
					quantity: item.quantity
				}))
			}),
		{
			onSuccess: ({ data }) => {
				reset()
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<>
			{items.length ? (
				<section className={styles.checkout}>
					<div>
						<Heading className='mb-6'>Checkout</Heading>

						<section className={styles.list}>
							{items.map(item => (
								<CheckoutItem key={item.id} product={item.product} />
							))}
						</section>

						<section className={styles.footer}>
							<div className={styles.total}>
								<p>Total Cost</p>

								<h3>{convertPrice(total)}</h3>
							</div>

							<Button onClick={() => mutate()} variant='light' size='l' className='mb-2 mt-5'>
								Place order
							</Button>
						</section>
					</div>

					<div>
						<Heading className='mb-6 text-2xl'>Recommended for you</Heading>

						<section className={styles.recommend}>
							{products
								.filter(product => !items.map(item => item.product.id).includes(product.id))
								.slice(0, 2)
								.map(product => (
									<ProductCard key={product.id} product={product} />
								))}
						</section>
					</div>
				</section>
			) : (
				<p>Fill your cart first</p>
			)}
		</>
	)
}
