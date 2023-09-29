import { FC } from 'react'

import { Button } from '@/ui/button/Button'

interface IPaginationProps {
	numberPages: number
	changePage: (page: string) => void
	currentPage: number | string
}

export const Pagination: FC<IPaginationProps> = ({ changePage, currentPage, numberPages }) => {
	return (
		<section className='mt-16 flex gap-3 self-center'>
			{Array.from({ length: numberPages > 1 ? numberPages : 1 }).map((_, index) => {
				const pageNumber = (index + 1).toString()

				return (
					<Button
						key={pageNumber}
						size='s'
						variant={currentPage === pageNumber ? 'orange' : 'light'}
						onClick={() => changePage(pageNumber)}
						disabled={currentPage === pageNumber}
					>
						{pageNumber}
					</Button>
				)
			})}
		</section>
	)
}
