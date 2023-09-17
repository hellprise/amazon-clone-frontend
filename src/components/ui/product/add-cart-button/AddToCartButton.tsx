import { FC } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

import { IProduct } from '@/types/product.interface'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

export const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()

	const { items } = useCart()

	const currentElement = items.find(item => item.product.id === product.id)

	return (
		<div>
			<button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
						  })
				}
			>
				{currentElement ? <BsFillCartCheckFill /> : <AiOutlineShoppingCart />}
			</button>
		</div>
	)
}
