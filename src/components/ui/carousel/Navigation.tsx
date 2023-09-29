import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { useActions } from '@/hooks/useActions'

import styles from './Carousel.module.scss'
import { carouselItems } from '@/data/carousel.data'

export const Navigation = () => {
	const { nextSlide, prevSlide } = useActions()

	const length = { carouselLength: carouselItems.length }

	return (
		<section className={styles.nav}>
			<button onClick={() => prevSlide(length)}>
				<AiOutlineLeft />
			</button>

			<button onClick={() => nextSlide(length)}>
				<AiOutlineRight />
			</button>
		</section>
	)
}
