'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'

import { TypesWithClassName } from '@/components/types'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { CSSTransition } from '../CSSTransition'
import { Button } from '../button/Button'

import styles from './Carousel.module.scss'
import { Navigation } from './Navigation'
import { ICarouselItem } from './carousel.interface'

interface ICarouselProps {
	items: ICarouselItem[]
	autoplay?: boolean
}

export const Carousel: FC<TypesWithClassName<ICarouselProps>> = ({ items, autoplay, className }) => {
	const { selectedItemIndex } = useTypedSelector(({ carousel }) => carousel)

	const selectedItem = items[selectedItemIndex]

	return (
		<section className={clsx('relative', className)}>
			<Navigation />

			<TransitionGroup className='relative h-56'>
				<CSSTransition
					key={selectedItem.id}
					timeout={500}
					classNames={{
						enter: styles['item-enter'],
						enterActive: styles['item-enter-active'],
						exit: styles['item-exit'],
						exitActive: styles['item-exit-active']
					}}
					unmountOnExit
					mountOnEnter
				>
					{/* @ts-ignore */}
					<section
						className={styles.item}
						style={
							selectedItem.image
								? {
										backgroundImage: `url(${selectedItem.image})`
								  }
								: {}
						}
					>
						<h2>{selectedItem.title}</h2>
						<p>{selectedItem.description}</p>

						{selectedItem.link ? (
							<Link href={selectedItem.link}>
								<Button variant='light'>Read more</Button>
							</Link>
						) : (
							<Link href='/explorer'>
								<Button variant='light'>Browse products</Button>
							</Link>
						)}
					</section>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}
