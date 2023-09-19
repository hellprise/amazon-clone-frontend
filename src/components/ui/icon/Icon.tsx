import clsx from 'clsx'
import { FC } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

import { IIconProps } from './Icon.interface'

export const Icon: FC<IIconProps> = ({ icon = 'close', className, ...props }) => {
	let IconComponent: FC<IIconProps> | null = null

	switch (icon) {
		case 'close':
			IconComponent = GrClose
			break

		case 'eye':
			IconComponent = BsEye
			break

		case 'eye-slash':
			IconComponent = BsEyeSlash
			break

		default:
			break
	}

	if (IconComponent) {
		return <IconComponent className={clsx('transition-all duration-300', className)} {...props} />
	}

	return null
}
