import clsx from 'clsx'
import { FC } from 'react'
import { BsCart, BsCartCheckFill } from 'react-icons/bs'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

export const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()

	const { items } = useCart()

	const existingElement = items.find(item => item.product.id === product.id)

	return (
		<button
			className={clsx('text-[26px] transition-colors duration-300', {
				'text-primary': existingElement,
				'text-secondary': !existingElement
			})}
			onClick={() =>
				existingElement
					? removeFromCart({ id: existingElement.id })
					: addToCart({
							product,
							quantity: 1,
							price: product.price
					  })
			}
		>
			{existingElement ? <BsCartCheckFill /> : <BsCart />}
		</button>
	)
}
