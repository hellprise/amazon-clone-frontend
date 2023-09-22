import clsx from 'clsx'
import { FC } from 'react'

import { IButtonProps } from './Button.interface'

export const Button: FC<IButtonProps> = (
	{ children, className, onClick, variant = 'light', size = 'm' },
	{ ...props }
) => {
	return (
		<button
			onClick={onClick}
			className={clsx('btn', className, {
				'btn-light': variant === 'light',
				'btn-orange': variant === 'orange',
				'btn-google': variant === 'google',
				'btn-sm': size === 's',
				'btn-md': size === 'm',
				'btn-lg': size === 'l',
				'btn-xl': size === 'xl',
				'btn-full': size === 'full'
			})}
			{...props}
		>
			{children}
		</button>
	)
}
