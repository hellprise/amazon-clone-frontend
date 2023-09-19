import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

import { IconName } from '@/ui/icon/Icon.interface'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	LabelIcon?: IconType
	changeTypeIcon?: IconName
	error?: string
	onIconClick?: () => void
}
