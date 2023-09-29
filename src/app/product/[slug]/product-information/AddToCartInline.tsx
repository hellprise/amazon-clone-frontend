import { FC } from 'react'

import { Button } from '@/ui/button/Button'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

interface IAddToCartInline {
	product: IProduct
}

export const AddToCartInline: FC<IAddToCartInline> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(item => item.product.id === product.id)

	return (
		<Button
			variant='orange'
			onClick={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({
							product: product,
							price: product.price,
							quantity: 1
					  })
			}
		>
			{currentElement ? 'Remove from cart' : 'Add to cart'}
		</Button>
	)
}
