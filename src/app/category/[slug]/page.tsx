import { Metadata } from 'next'

import { Catalog } from '@/ui/product/catalog/Catalog'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product/product.service'

import { ICategory } from '@/types/category.interface'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import { IProduct } from '@/types/product.interface'

export async function generateMetadata({ params }: IPageSlugParam): Promise<Metadata> {
	const { category, products } = await getData(params)

	return {
		title: category.name,
		description: `Random description about ${category.name}`,
		openGraph: {
			images: products[0]?.images || [],
			type: 'website',
			description: `Random description about ${category.name}`
		}
	}
}

export async function generateStaticParams() {
	const categories = await CategoryService.getAll()

	return categories.data.map(category => ({
		slug: category.slug
	}))

	// const paths = categories.data.map(category => {
	// 	return { params: { slug: category.slug } }
	// })

	// return paths
}

export async function getData(params: TypeParamSlug) {
	const { data: products } = await ProductService.getByCategory(params.slug as string)

	const { data: category } = await CategoryService.getBySlug(params.slug as string)

	return { products, category }
}

export default async function CategoryPage({ params }: IPageSlugParam) {
	const { products, category } = await getData(params)

	return <Catalog products={products || []} title={category.name} />
}
