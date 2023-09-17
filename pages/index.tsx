import { NextPage } from 'next'

import { TypePaginationProducts } from '@/types/product.interface'

import { Home } from '@/screens/home/Home'

const Homepage: NextPage<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Home
			products={
				products || [
					{
						name: 'dfsd',
						category: {
							name: 'dfdf',
							slug: '/'
						},
						createdAt: 'dfdf',
						description: ';;;',
						id: 1,
						images: ['', ''],
						price: 192,
						reviews: [],
						slug: '/'
					},
					{
						name: 'dfsd',
						category: {
							name: 'dfdf',
							slug: '/'
						},
						createdAt: 'dfdf',
						description: ';;;',
						id: 1,
						images: ['', ''],
						price: 192,
						reviews: [],
						slug: '/'
					},
					{
						name: 'dfsd',
						category: {
							name: 'dfdf',
							slug: '/'
						},
						createdAt: 'dfdf',
						description: ';;;',
						id: 1,
						images: ['', ''],
						price: 192,
						reviews: [],
						slug: '/'
					},
					{
						name: 'dfsd',
						category: {
							name: 'dfdf',
							slug: '/'
						},
						createdAt: 'dfdf',
						description: ';;;',
						id: 1,
						images: ['', ''],
						price: 192,
						reviews: [],
						slug: '/'
					}
				]
			}
			length={length}
		/>
	)
}

export default Homepage

// export const getStaticProps = async () => {
// 	const data = await fetch(`${process.env.API_URL}/products`, {
// 		method: 'GET',
// 		headers: getContentType()
// 	})
// 	// const { data } = await ProductService.getAll({
// 	// 	page: 1,
// 	// 	perPage: 4
// 	// })

// 	const products = await data.json()

// 	return {
// 		props: products,
// 		length: products.length
// 	}
// }

// export const getStaticProps: GetStaticProps<TypePaginationProducts> = async () => {
// 	const { data } = await ProductService.getAll({
// 		page: 1,
// 		perPage: 4
// 	})

// 	return {
// 		props: data
// 	}
// }
