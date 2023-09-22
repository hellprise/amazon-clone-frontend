import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Heading } from '@/ui/heading/Heading'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convert-price'

import { AddToCartButton } from '../add-cart-button/AddToCartButton'
import { FavoriteButton } from '../favorite-button/FavoriteButton'
import { ProductRating } from '../product-rating/ProductRating'

export const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<section className='animate-scaleIn'>
			<div className='mb-5 rounded-3xl bg-white p-4 pb-12'>
				<section className='mb-3 flex items-center justify-end gap-3'>
					<AddToCartButton product={product} />
					<FavoriteButton productId={product.id} />
				</section>

				<Link className='relative block h-[280px] w-full' href={`/product/${product.slug}`}>
					{/* <section className='relative h-[260px] w-full'> */}
					<Image className='object-contain' src={product.images[0]} alt={product.name} fill />
					{/* </section> */}
				</Link>
			</div>

			<Link href={`/product/${product.slug}`}>
				<Heading className='!text-left !text-secondary/70' tag='h4'>
					{product.name}
				</Heading>
			</Link>

			<Link className='text-sm font-medium text-aqua' href={`/category/${product?.category?.slug}`}>
				{product?.category?.name}
			</Link>

			<ProductRating product={product} isText />

			<p className='mt-2 text-2xl font-semibold text-secondary/80'>{convertPrice(product.price)}</p>
		</section>
	)
}
