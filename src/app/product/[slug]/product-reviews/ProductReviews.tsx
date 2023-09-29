import { FC, useState } from 'react'

import { Heading } from '@/ui/heading/Heading'
import { Modal } from '@/ui/modal/Modal'

import { useAuth } from '@/hooks/useAuth'

import { IReview } from '@/types/review.interface'

import { ReviewItem } from './ReviewItem'
import { LeaveReviewForm } from './LeaveReviewForm'

interface IProductReviews {
	reviews: IReview[]
	productId: number
}

export const ProductReviews: FC<IProductReviews> = ({ reviews, productId }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const { user } = useAuth()

	if (!reviews.length) return null

	return (
		<section id='reviews' className='mt-20'>
			<div className='mb-9'>
				<Heading className='mb-3'>Reviews:</Heading>

				{user && (
					<button className='text-aqua mb-4' onClick={() => setIsModalOpen(true)}>
						Leave a review
					</button>
				)}

				{user && (
					<Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
						<LeaveReviewForm productId={productId} />
					</Modal>
				)}

				<div className='grid-cols-2 grid gap-10'>
					{reviews.map(review => (
						<ReviewItem key={review.id} review={review} />
					))}
				</div>
			</div>
		</section>
	)
}
