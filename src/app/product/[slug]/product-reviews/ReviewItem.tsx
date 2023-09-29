import Image from 'next/image'
import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IReview } from '@/types/review.interface'

export const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<section className='rounded-lg bg-white p-6 shadow-md'>
			<div className='mb-2 flex items-center gap-x-3'>
				<Image src={review.user.avatarPath} width={40} height={40} className='rounded-full' alt={review.user.name} />

				<h6>{review.user.name}</h6>
			</div>

			<Rating
				initialValue={review.rating}
				size={20}
				SVGstyle={{ display: 'inline-block' }}
				readonly
				allowFraction
				transition
			/>

			<p className='mt-4 text-sm leading-relaxed'>{review.text}</p>
		</section>
	)
}
