import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'

import { Button } from '@/ui/button/Button'
import { Heading } from '@/ui/heading/Heading'
import { Loader } from '@/ui/loader/Loader'

import { ReviewService } from '@/services/review.service'

import { IReviewFields } from './review-fields.interface'

interface ILeaveReviewForm {
	productId: number
}

export const LeaveReviewForm: FC<ILeaveReviewForm> = ({ productId }) => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm<IReviewFields>({ mode: 'onChange' })

	const queryClient = useQueryClient() // if product is updated, reviews should be updated too

	const { mutate, isSuccess, isLoading } = useMutation(
		['leave review'],
		(data: IReviewFields) => ReviewService.leave(productId, data),
		{
			onSuccess: () => {
				queryClient.refetchQueries(['get product', productId])
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewFields> = data => {
		mutate(data)

		reset()
	}

	if (isSuccess) return <p>✅ Review successfully published!</p>

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Heading className='mb-4 text-center'>Leave a review</Heading>
			
			{isLoading ? (
				<Loader />
			) : (
				<section>
					<Controller
						control={control}
						name='rating'
						render={({ field: { onChange, value } }) => (
							<Rating
								onClick={onChange}
								initialValue={value}
								SVGstyle={{ display: 'inline-block' }}
								size={20}
								transition
							/>
						)}
						rules={{ required: 'Rating is required' }}
					/>

					<textarea
						{...formRegister('text', {
							required: 'Text is required'
						})}
						placeholder='Your message here...'
						className='mt-4 block min-h-[110px] w-full resize-none rounded-md border border-gray-50 bg-white p-3 text-sm'
					/>

					{Object.entries(errors) && (
						<ul className='mt-3 animate-opacity list-disc pl-4 text-sm text-red-500'>
							{Object.entries(errors).map(([_, error], index) => (
								<li key={index}>{error?.message}</li>
							))}
						</ul>
					)}

					<Button className='mb-2 mt-8' variant='orange' type='submit'>
						Submit
					</Button>
				</section>
			)}
		</form>
	)
}
