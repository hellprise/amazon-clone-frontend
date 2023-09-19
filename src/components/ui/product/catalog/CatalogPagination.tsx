import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { Button } from '@/ui/button/Button'
import { Heading } from '@/ui/heading/Heading'
import { Loader } from '@/ui/loader/Loader'

import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'

import { TypePaginationProducts } from '@/types/product.interface'

import { SortDropdown } from '../SortDropdown'
import { ProductCard } from '../product-card/ProductCard'

interface ICatalogPaginationProps {
	data: TypePaginationProducts
	title: string
}

const PER_PAGE = 4

export const CatalogPagination: FC<ICatalogPaginationProps> = ({ data, title }) => {
	const [page, setPage] = useState<number>(1)
	const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: PER_PAGE,
				sort: sortType
			}),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

	const handlePage = () => setPage(prevPage => prevPage + 1)

	if (isLoading) return <Loader />

	return (
		<section className='mt-8 flex flex-col'>
			<Heading tag='h2' className='mb-5 !text-left'>
				{title}
			</Heading>

			<SortDropdown sortType={sortType} setSortType={setSortType} />

			{response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-8'>
						{response.products.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					<section className='self mt-14 flex gap-3 self-center'>
						{Array.from({ length: response.count / PER_PAGE }, (_, index) => {
							const pageNumber = index + 1

							return (
								<Button size='s' key={index} variant={pageNumber === page ? 'orange' : 'light'} onClick={handlePage}>
									{pageNumber}
								</Button>
							)
						})}
					</section>
				</>
			) : (
				<p>There are no products</p>
			)}
		</section>
	)
}
