'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

interface IProductGallery {
	images: string[]
}

export const ProductGallery: FC<IProductGallery> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<section>
			<Image
				className='overflow-hidden rounded-lg'
				src={images[activeIndex]}
				alt='product gallery main image'
				width={500}
				height={500}
				priority
				draggable={false}
			/>

			<div className='mt-6' style={{ width: 500, overflowX: 'auto', whiteSpace: 'nowrap' }}>
				{images.map((image, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={clsx(
							'mr-5 inline-block overflow-hidden rounded-lg border-b-2 transition-all duration-300 last:mr-0 hover:shadow-md',
							{
								'border-primary shadow-md': activeIndex === index,
								'border-transparent': activeIndex !== index
							}
						)}
					>
						<Image key={index} src={image} width={100} height={100} draggable={false} alt='product gallery slide' />
					</button>
				))}
			</div>
		</section>
	)
}
