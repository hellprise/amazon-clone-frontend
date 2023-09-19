import Image from 'next/image'
import { FC } from 'react'

import { ICartItem } from '@/types/cart.interface'

import { convertPrice } from '@/utils/convert-price'

import styles from '../Cart.module.scss'
import { CartActions } from './cart-actions/CartActions'

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<section className={styles.item}>
			<Image src={item.product.images[0]} width={100} height={100} alt={item.product.name} />

			<div>
				<div className={styles.name}>{item.product.name}</div>

				<div className={styles.price}>{convertPrice(item.product.price)}</div>

				<CartActions item={item} />
			</div>
		</section>
	)
}
