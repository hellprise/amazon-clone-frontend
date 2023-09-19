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
			className={clsx('border-2 font-semibold transition-all duration-300', className, {
				'border-white bg-white text-primary hover:border-bg hover:bg-primary hover:text-white': variant === 'light',
				'border-primary bg-primary text-secondary hover:border-secondary hover:bg-secondary hover:text-primary':
					variant === 'orange',
				'border-bg bg-white text-secondary hover:bg-bg': variant === 'google',
				'rounded-xl py-2 text-sm md:px-3': size === 's',
				'rounded-3xl py-2 md:px-5': size === 'm',
				'rounded-2xl md:px-6 md:py-3': size === 'l',
				'rounded-xl py-2 md:px-12': size === 'xl',
				'w-full rounded-lg py-3 md:text-lg': size === 'full'
			})}
			{...props}
		>
			{children}
		</button>
	)
}
