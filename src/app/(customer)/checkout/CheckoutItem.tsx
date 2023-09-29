import Image from 'next/image'
import React, { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convert-price'

import styles from './Checkout.module.scss'

export const CheckoutItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<section className={styles.item}>
			<Image src={product.images[0]} alt={product.name} width={100} height={100} />

			<div className={styles.row}>
				<section className={styles.information}>
					<h3>{product.name}</h3>

					<p>{product.category.name}</p>
				</section>

				<p className={styles.price}>{convertPrice(product.price)}</p>
			</div>
		</section>
	)
}
