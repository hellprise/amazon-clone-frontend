import { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Providers } from '@/providers/Providers'

import '@/assets/styles/globals.scss'

import { getSiteUrl } from '@/config/url.config'

import { SITE_NAME } from '@/constants/seo.constants'

import { Header } from '@/app/layout/header/Header'
import Sidebar from '@/app/layout/sidebar/Sidebar'

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

const Golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: 'normal',
	variable: '--font-golos'
})

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<html className={Golos.variable} lang='en'>
				<body>
					<Providers>
						<div className='bg-secondary'>
							<Header />
							<section className='grid grid-cols-[.8fr_4fr]'>
								<Sidebar />

								<main className='rounded-bl-lg rounded-tl-lg bg-bg px-3 lg:px-5'>{children}</main>
							</section>
						</div>
					</Providers>

					<section id='modal'></section>
				</body>
			</html>
		</>
	)
}
