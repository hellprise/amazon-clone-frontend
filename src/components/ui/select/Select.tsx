import clsx from 'clsx'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import styles from './Select.module.scss'
import { ISelect, ISelectItem } from './select.interface'

export function Select<K>({ data, value, title, onChange }: ISelect<K>) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => setIsOpen(prev => !prev)

	const toggleSelectItem = (item: ISelectItem<K>) => {
		onChange(item)
		setIsOpen(false)
	}

	return (
		<section className={styles.select}>
			<button onClick={toggleOpen}>
				{title && <b>{title}</b>}

				{value?.label || 'Default'}

				<BsChevronDown className='text-lg' />
			</button>

			{isOpen && (
				<ul>
					{data.map(item => (
						<li
							key={item.key?.toString()}
							className={clsx({
								[styles.active]: item.key === value?.key
							})}
						>
							<button onClick={() => toggleSelectItem(item)} disabled={item.key === value?.key}>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	)
}
