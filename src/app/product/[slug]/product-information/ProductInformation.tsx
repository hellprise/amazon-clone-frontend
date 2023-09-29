import Link from 'next/link'
import { FC } from 'react'
import { FaLock } from 'react-icons/fa'

import { FavoriteButton } from '@/ui/product/favorite-button/FavoriteButton'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convert-price'

import { AddToCartInline } from './AddToCartInline'

interface IProductInformation {
	product: IProduct
}

export const ProductInformation: FC<IProductInformation> = ({ product }) => {
	return (
		<section className='relative h-max rounded-lg bg-white p-6 shadow-md'>
			<h3 className='text-3xl font-semibold'>{convertPrice(product.price)}</h3>

			<div className='mt-2'>
				$6.88 shipping{' '}
				<Link href='/' className='ml-2 font-medium text-aqua'>
					Details
				</Link>
			</div>

			<span className='mt-1 block text-sm opacity-50'>Sales taxes may apple at checkout</span>

			<h6 className='mt-4 text-sm'>
				<span className='mr-1 opacity-50'>Delivery</span> Thursday, June 10
			</h6>

			<AddToCartInline product={product} />

			<p>
				<FaLock className='mr-2' /> Secure transaction
			</p>

			<div className='absolute right-6 top-6'>
				<FavoriteButton productId={product.id} />
			</div>
		</section>
	)
}
