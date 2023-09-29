import React, { FC, useEffect } from 'react'

import { useDebounce } from '@/hooks/useDebounce'

import styles from './Range.module.scss'

interface IRangeProps {
	min?: number
	max: number
	fromInitialValue?: string
	toInitialValue?: string
	onChangeFromValue: (value: string) => void
	onChangeToValue: (value: string) => void
}

export const Range: FC<IRangeProps> = ({
	max,
	fromInitialValue,
	toInitialValue,
	onChangeFromValue,
	onChangeToValue,
	min = 0
}) => {
	const [fromValue, setFromValue] = React.useState(fromInitialValue || '')
	const [toValue, setToValue] = React.useState(toInitialValue || '')

	const debouncedFromValue = useDebounce(fromValue, 500)
	const debouncedToValue = useDebounce(toValue, 500)

	useEffect(() => {
		onChangeFromValue(debouncedFromValue)
	}, [debouncedFromValue])

	useEffect(() => {
		onChangeToValue(debouncedToValue)
	}, [debouncedToValue])

	return (
		<section className={styles.range}>
			<input
				min={min}
				max={max}
				type='number'
				placeholder='From'
				value={fromValue}
				onChange={e => setFromValue(e.target.value)}
			/>

			{' - '}

			<input
				min={min}
				max={max}
				type='number'
				placeholder='To'
				value={toValue}
				onChange={e => setToValue(e.target.value)}
			/>
		</section>
	)
}
