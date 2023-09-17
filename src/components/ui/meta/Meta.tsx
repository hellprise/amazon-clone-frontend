import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { ISeo } from './Meta.interface'

const TitleMerge = ({ title }: { title: string }) => `${title} | Amazon Clone`

export const Meta: FC<PropsWithChildren<ISeo>> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{TitleMerge({ title })}</title>
				{description ? (
					<>
						<meta itemProp='description' name='description' content={description} />
						<meta itemProp='image' name='image' content={image || '/favicon.svg'} />
						<link rel='canonical' href={currentUrl} />
						<meta name='og:locale' content='en' />
						<meta name='og:title' content={TitleMerge({ title })} />
						<meta name='og:url' content={currentUrl} />
						<meta name='og:image' content={image || ''} />
						<meta name='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>

			{children}
		</>
	)
}
