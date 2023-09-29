import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import { TypesWithClassName } from '@/components/types'

import styles from './Checkbox.module.scss'

export interface ICheckboxProps {
	isChecked: boolean
	onClick: () => void
}

type TypeCheckbox = FC<PropsWithChildren<TypesWithClassName<ICheckboxProps>>>

export const Checkbox: TypeCheckbox = ({ isChecked, onClick, className, children }) => {
	return (
		<button className={clsx(styles.checkbox, className)} onClick={onClick}>
			<span
				className={clsx({
					[styles.active]: isChecked
				})}
			></span>

			<span>{children}</span>
		</button>
	)
}
