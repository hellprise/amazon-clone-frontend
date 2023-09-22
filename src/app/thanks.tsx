import { Metadata } from 'next'

import { Heading } from '@/ui/heading/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Thanks for your order!',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<>
			<Heading>Thanks for your order!</Heading>
		</>
	)
}
