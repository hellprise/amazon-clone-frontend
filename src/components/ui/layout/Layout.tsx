import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

const DynamicSidebar = dynamic(() => import('./Sidebar'), {
	ssr: false
})

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<section className='grid grid-cols-[1fr_4fr]'>
				<DynamicSidebar />

				<main className='px-3 lg:px-5'>{children}</main>
			</section>
			<Footer />
		</>
	)
}
