import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Button } from '@/ui/button/Button'

// import { PaymentService } from '@/services/payment.service'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { convertPrice } from '@/utils/convert-price'

import styles from './Cart.module.scss'
import { CartItem } from './cart-item/CartItem'

export const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	const handleIsShow = () => setIsShow(!isShow)

	// const { reset } = useActions()

	// const { push } = useRouter()

	// const { mutate } = useMutation(
	// 	['create order and payment'],
	// 	() =>
	// 		OrderService.place({
	// 			items: items.map(item => ({
	// 				price: item.price,
	// 				productId: item.product.id,
	// 				quantity: item.quantity
	// 			}))
	// 		}),
	// 	{
	// 		onSuccess: ({ data }) => {
	// 			reset()
	// 			push(data.confirmation.confirmation_url)
	// 		}
	// 	}
	// )

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

			{isShow && (
				<div className={styles.cartWrapper}>
					<section className='mb-5 text-lg font-normal'>My Cart</section>

					<section className={styles.cart}>
						{items.length ? (
							items.map(item => <CartItem key={item.product.id} item={item} />)
						) : (
							<div className='font-light'>Cart is empty!</div>
						)}
					</section>

					<section className={styles.footer}>
						<div>Total:</div>

						<div>{convertPrice(total)}</div>
					</section>

					{!!items.length && (
						<section className='mb-5 mt-7 text-center'>
							<Link href='/checkout'>
								<Button variant='light' size='s' className='btn'>
									Place order
								</Button>
							</Link>
						</section>
					)}
				</div>
			)}
		</section>
	)
}
