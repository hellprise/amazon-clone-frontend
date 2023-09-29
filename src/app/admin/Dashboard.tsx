'use client'

import { useQuery } from '@tanstack/react-query'

import { Heading } from '@/ui/heading/Heading'
import { Loader } from '@/ui/loader/Loader'

import { StatisticsService } from '@/services/statistics.service'

import { convertPrice } from '@/utils/convert-price'

import styles from './Dashboard.module.scss'

export const Dashboard = () => {
	const { data, isFetching } = useQuery(['statistics'], () => StatisticsService.getMain(), {
		select: ({ data }) => data
	})

	return (
		<>
			<Heading className='mb-10'>Dashboard</Heading>

			{isFetching ? (
				<Loader />
			) : data?.length ? (
				<section className={styles.wrapper}>
					{data.map((item, index) => (
						<div className={styles.item} key={item.name}>
							<section>
								<h4 className='text-lg font-medium'>{item.name}</h4>

								<p>{index === data.length - 1 ? convertPrice(item.value || 0) : item.value}</p>
							</section>
						</div>
					))}
				</section>
			) : (
				<p>Statistics not loaded</p>
			)}
		</>
	)
}
