import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { mergeTitle } from '@/utils/merge-title'

import { ISeo } from './Meta.interface'

export const Meta: FC<PropsWithChildren<ISeo>> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{mergeTitle({ title })}</title>
				{description ? (
					<>
						<meta itemProp='description' name='description' content={description} />
						<meta itemProp='image' name='image' content={image || '/favicon.ico'} />
						<link rel='canonical' href={currentUrl} />
						<meta name='og:locale' content='en' />
						<meta name='og:title' content={mergeTitle({ title })} />
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
