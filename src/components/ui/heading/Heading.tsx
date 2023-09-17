import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { IHeadingProps } from './Heading.interface'
import { TypesWithClassName } from '@/components/types'

type IHeadingAllProps = IHeadingProps & TypesWithClassName

export const Heading: FC<PropsWithChildren<IHeadingAllProps>> = ({
	className,
	children,
	tag = 'h1'
}) => {
	const Tag = tag

	return (
		<Tag
			className={clsx('text-center font-semibold text-secondary', className, {
				'text-3xl md:text-5xl': tag === 'h1',
				'text-2xl md:text-3xl': tag === 'h2',
				'text-xl md:text-2xl': tag === 'h3',
				'text-lg md:text-xl': tag === 'h4',
				'text-base': tag === 'h5',
				'text-sm': tag === 'h6'
			})}
		>
			{children}
		</Tag>
	)
}
