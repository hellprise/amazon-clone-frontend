import Link from 'next/link'

import { Heading } from '@/ui/heading/Heading'

export default function NotFound() {
	return (
		<>
			<Heading>404</Heading>

			<p>Could not find this page.</p>

			<p>
				View{' '}
				<Link className='text-primary' href='/explorer'>
					All products
				</Link>
			</p>
		</>
	)
}
