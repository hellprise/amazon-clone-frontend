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
			<main className='grid grid-cols-[18%_82%]'>
				<DynamicSidebar />
				{children}
			</main>
			<Footer />
		</>
	)
}
