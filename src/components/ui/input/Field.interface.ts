import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	Icon?: IconType
	error?: string
}
