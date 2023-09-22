import { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

import { ChangeQuantityType } from '@/store/cart/cart.types'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

export const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { items } = useCart()

	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	const handleQuantity = (type: ChangeQuantityType) => changeQuantity({ id: item.id, type })

	const remove = (id: number) => removeFromCart({ id })

	return (
		<section className='mt-3'>
			<div className='flex items-center gap-3'>
				<button onClick={() => handleQuantity('minus')} disabled={quantity === 1}>
					<FiMinus className='text-xl' />
				</button>

				<input className='w-10 bg-black text-center' value={quantity} readOnly disabled />

				<button onClick={() => handleQuantity('plus')}>
					<FiPlus className='text-xl' />
				</button>

				<button onClick={() => remove(item.id)}>
					<FiTrash className='ml-3 text-xl text-primary' />
				</button>
			</div>
		</section>
	)
}
