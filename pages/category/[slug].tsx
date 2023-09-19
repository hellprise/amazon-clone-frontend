import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '@/ui/layout/Layout'
import { Meta } from '@/ui/meta/Meta'
import { Catalog } from '@/ui/product/catalog/Catalog'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product/product.service'

import { ICategory } from '@/types/category.interface'
import { IProduct } from '@/types/product.interface'

interface ICategoryPageProps {
	products: IProduct[]
	category: ICategory
}

const CategoryPage: NextPage<ICategoryPageProps> = ({ category, products }) => {
	return (
		<Meta title={category.name}>
			<Layout>
				<Catalog products={products || []} title={category.name} />
			</Layout>
		</Meta>
	)
}

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => ({
		params: { slug: category.slug }
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: products } = await ProductService.getByCategory(params?.slug as string)

	const { data: category } = await CategoryService.getBySlug(params?.slug as string)

	// return { props: { products, category }, revalidate: 60 }
	return { props: { products, category } }
}
