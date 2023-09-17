import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { TypesWithClassName } from '../../types'

export const Wrapper: FC<PropsWithChildren & TypesWithClassName> = ({ className, children }) => {
	return (
		<section
			className={clsx('container flex flex-col items-center px-3 min-[1440px]:px-0', className)}
		>
			{children}
		</section>
	)
}
