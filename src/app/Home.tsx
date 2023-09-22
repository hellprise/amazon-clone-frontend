import { Catalog } from '@/ui/product/catalog/Catalog'

import { TypePaginationProducts } from '@/types/product.interface'

export const Home = ({ products, count }: TypePaginationProducts) => {
	return (
		<>
			{/* Carousel */}

			<Catalog products={products} title='Hot deals 🔥' />
		</>
	)
}
