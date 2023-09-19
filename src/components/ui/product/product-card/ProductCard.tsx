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
		<section className='animate-scaleIn'>
			<div className='mb-5 rounded-3xl bg-white p-4 pb-12'>
				<section className='mb-3 flex items-center justify-end gap-3'>
					<AddToCartButton product={product} />
					<DynamicFavoriteButton productId={product.id} />
				</section>

				<Link className='relative h-[280px] w-full block' href={`/product/${product.slug}`}>
				{/* <section className='relative h-[260px] w-full'> */}
					<Image className='object-contain' src={product.images[0]} alt={product.name} fill />
				{/* </section> */}
				</Link>
			</div>

			<Link href={`/product/${product.slug}`}>
				<Heading className='!text-left !text-secondary/70' tag='h4'>{product.name}</Heading>
			</Link>

			<Link className='text-aqua font-medium text-sm' href={`/category/${product?.category?.slug}`}>
				{product?.category?.name}
			</Link>

			<ProductRating product={product} />

			<p className='text-secondary/80 text-2xl font-semibold mt-2'>{convertPrice(product.price)}</p>
		</section>
	)
}
