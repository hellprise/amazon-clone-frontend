import { Carousel } from '@/ui/carousel/Carousel'
import { Catalog } from '@/ui/product/catalog/Catalog'

import { TypePaginationProducts } from '@/types/product.interface'

import { carouselItems } from '@/data/carousel.data'

export const Home = ({ products, count }: TypePaginationProducts) => {
	return (
		<>
			<Carousel items={carouselItems} className='mt-6' />

			<Catalog products={products} title='Hot deals 🔥' />
		</>
	)
}
