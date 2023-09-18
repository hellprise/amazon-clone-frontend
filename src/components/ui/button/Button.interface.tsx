import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonVariant = 'light' | 'orange' | 'google'

type ButtonSize = 's' | 'm' | 'l' | 'xl' | 'full'

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
}
