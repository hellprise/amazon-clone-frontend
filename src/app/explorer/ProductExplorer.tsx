'use client'

import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { FC, useState } from 'react'

import { Button } from '@/ui/button/Button'
import { Heading } from '@/ui/heading/Heading'
import { Catalog } from '@/ui/product/catalog/Catalog'

import { ProductService } from '@/services/product/product.service'

import { TypePaginationProducts } from '@/types/product.interface'

import styles from './ProductExplorer.module.scss'
import { Filters } from './filters/Filters'
import { Pagination } from './pagination/Pagination'
import { SortDropdown } from './sort/sortDropdown'
import { useFilters } from './useFilters'

interface IProductExplorerProps {
	initialProducts: TypePaginationProducts
}

export const ProductExplorer: FC<IProductExplorerProps> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const { isFilterUpdated, queryParams, updateUrl } = useFilters()

	const { data, isFetching } = useQuery(['products explorer', queryParams], () => ProductService.getAll(queryParams), {
		initialData: initialProducts,
		enabled: isFilterUpdated
	})

	const toggleFilterOpen = () => setIsFilterOpen(prev => !prev)

	return (
		<>
			<section className='mb-7 flex items-center justify-between'>
				<Heading>{queryParams.searchTerm ? `Search by query "${queryParams.searchTerm}"` : 'Explorer'}</Heading>

				<SortDropdown />
			</section>

			<Button variant='light' onClick={toggleFilterOpen} className='mb-7'>
				{isFilterOpen ? 'Close' : 'Open'} filters
			</Button>

			<section
				className={clsx(styles.explorer, {
					[styles.filterOpened]: isFilterOpen
				})}
			>
				<aside>
					<Filters />
				</aside>

				<section className='flex flex-col'>
					<Catalog products={data.products} isLoading={isFetching} />

					<Pagination
						changePage={page => updateUrl('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={Math.ceil(data.count / +queryParams.perPage)}
					/>
				</section>
			</section>
		</>
	)
}
