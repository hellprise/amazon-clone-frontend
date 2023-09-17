import clsx from 'clsx'
import { forwardRef } from 'react'

import { IField } from './Field.interface'

export const Field = forwardRef<HTMLInputElement, IField>(
	({ label, error, style, className, Icon, type = 'text', ...props }, ref) => {
		return (
			<section className={clsx()} style={style}>
				<label htmlFor='field'>
					<p className='mb-1 flex items-center gap-x-2'>
						{Icon && <Icon className='h-5 w-5' />}

						<span className='font-medium'>{label}</span>
					</p>

					<input
						className={clsx(
							'w-full rounded-md border border-secondary px-5 py-3 transition-colors duration-300',
							'hover:border-bg hover:opacity-80 focus:border-primary focus:outline-none',
							className,
							{}
						)}
						ref={ref}
						type={type}
						{...props}
					/>
				</label>

				<span
					className={clsx(
						'mt-2 block text-left text-sm font-semibold text-red-400 transition-opacity duration-200',
						{
							'opacity-100': !!error,
							'opacity-0': !error
						}
					)}
				>
					{error}
				</span>
			</section>
		)
	}
)

Field.displayName = 'Field'
