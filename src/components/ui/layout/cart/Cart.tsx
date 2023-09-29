import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Button } from '@/ui/button/Button'

import { OrderService } from '@/services/order.service'

import { useActions } from '@/hooks/useActions'
// import { PaymentService } from '@/services/payment.service'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { convertPrice } from '@/utils/convert-price'

import styles from './Cart.module.scss'
import { CartItem } from './cart-item/CartItem'

export const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	const { reset } = useActions()

	const { push } = useRouter()

	const handleIsShow = () => setIsShow(!isShow)

	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					productId: item.product.id,
					quantity: item.quantity
				}))
			}),
		{
			onSuccess: ({ data }) => push(data.confirmation.confirmation_url).then(() => reset())
		}
	)

	return (
		<section className='relative' ref={ref}>
			<button onClick={handleIsShow} className='relative rounded-lg bg-primary p-2'>
				<AiOutlineShoppingCart className='text-2xl' />

				{!!items.length && (
					<span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-sm text-secondary'>
						{items.length}
					</span>
				)}
			</button>

			<div
				className={clsx(
					'menu absolute -left-[12.5rem] top-[4.2rem] z-20 w-80 rounded-xl bg-secondary px-5 py-3 text-sm text-white',
					{
						menu__open: isShow,
						menu__close: !isShow
					}
				)}
			>
				<section className='mb-5 text-lg font-normal'>My Cart</section>

				<section className={styles.cart}>
					{items.length ? (
						items.map(item => <CartItem key={item.id} item={item} />)
					) : (
						<div className='font-light'>Cart is empty!</div>
					)}
				</section>

				<section className={styles.footer}>
					<div>Total:</div>

					<div>{convertPrice(total)}</div>
				</section>

				<section className='text-center'>
					<Button onClick={() => mutate()} variant='light' size='s' className='btn-link mb-2 mt-5'>
						Place order
					</Button>
				</section>
			</div>
		</section>
	)
}
