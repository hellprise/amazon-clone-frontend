import clsx from 'clsx'
import { forwardRef } from 'react'

import { Icon } from '@/ui/icon/Icon'

import { IField } from './Field.interface'

export const Field = forwardRef<HTMLInputElement, IField>(
	({ label, error, style, className, LabelIcon, changeTypeIcon, onIconClick, type = 'text', ...props }, ref) => {
		return (
			<section className={clsx()} style={style}>
				<label className='relative' htmlFor='field'>
					<p className='mb-1 flex items-center gap-x-2'>
						{LabelIcon && <LabelIcon className='text-xl text-secondary' />}

						<span className='font-medium'>{label}</span>
					</p>

					<input
						className={clsx(
							'peer w-full cursor-pointer rounded-md border-2 border-secondary py-3 pl-5 pr-10 transition-colors duration-300',
							'hover:border-bg hover:opacity-80 focus:border-primary focus:outline-none',
							className,
							{}
						)}
						ref={ref}
						type={type}
						{...props}
					/>

					{changeTypeIcon && (
						<Icon
							onClick={onIconClick}
							icon={changeTypeIcon}
							className='absolute right-3 top-[43px] text-2xl text-secondary peer-hover:text-bg peer-focus:text-primary'
						/>
					)}
				</label>

				<span
					className={clsx('mt-2 block text-left text-sm font-semibold text-red-400 transition-opacity duration-200', {
						'opacity-100': !!error,
						'opacity-0': !error
					})}
				>
					{error}
				</span>
			</section>
		)
	}
)

Field.displayName = 'Field'
