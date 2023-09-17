import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Heading } from '@/ui/heading/Heading'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convert-price'

import { AddToCartButton } from '../add-cart-button/AddToCartButton'
import { ProductRating } from '../product-rating/ProductRating'

const DynamicFavoriteButton = dynamic(() => import('../favorite-button/FavoriteButton'), {
	ssr: false
})

export const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<section>
			<div className='mb-5 rounded-xl bg-white p-5 pb-10'>
				<div className='mb-8 flex items-center justify-between'>
					<AddToCartButton product={product} />
					<DynamicFavoriteButton id={product.id} />
				</div>

				<Link href={`/product/${product.slug}`}>
					<Image src={product.images[0]} alt={product.name} width={200} height={200} />
				</Link>
			</div>

			<Link href={`/product/${product.slug}`}>
				<Heading tag='h4'>{product.name}</Heading>
			</Link>

			<Link className='text-aqua' href={`/category/${product.category.slug}`}>
				{product.category.name}
			</Link>

			<ProductRating product={product} />

			<p className='text-gray-500'>{convertPrice(product.price)}</p>
		</section>
	)
}
