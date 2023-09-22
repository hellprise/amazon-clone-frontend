import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { Providers } from '@/providers/Providers'

import '@/assets/styles/globals.scss'

import { getSiteUrl } from '@/config/url.config'

import { Header } from '@/app/layout/header/Header'
import Sidebar from '@/app/layout/sidebar/Sidebar'
import { SITE_NAME } from '@/constants/seo.constants'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.ico'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		locale: 'en_US',
		siteName: SITE_NAME,
		emails: ['info@amazon.com']
	}
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<html lang='en'>
				<body>
					<Providers>
						<div className='bg-secondary'>
							<Header />
							<section className='grid grid-cols-[.8fr_4fr]'>
								<Sidebar />

								<main className='rounded-bl-lg rounded-tl-lg bg-bg px-3 lg:px-5'>{children}</main>
							</section>
							{/* <Footer /> */}
						</div>
					</Providers>

					<section id='modal'></section>
				</body>
			</html>

			{/* <Header />
			<section className='grid grid-cols-[1fr_4fr]'>
				<DynamicSidebar />

				<main className='px-3 lg:px-5'>{children}</main>
			</section>
			<Footer /> */}
		</>
	)
}
