import { GetStaticProps, NextPage } from 'next'

import { ProductService } from '@/services/product/product.service'

import { TypePaginationProducts } from '@/types/product.interface'

import { Home } from '@/screens/home/Home'

const Homepage: NextPage<TypePaginationProducts> = ({ products, count }) => {
	return <Home products={products} count={count} />
}

export default Homepage

export const getStaticProps: GetStaticProps<TypePaginationProducts> = async () => {
	const { products, count } = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: {
			products,
			count
		}
	}
}
