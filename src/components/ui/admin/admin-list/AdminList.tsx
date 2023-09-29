'use client'

import { FC } from 'react'

import { Loader } from '@/ui/loader/Loader'

import styles from './AdminList.module.scss'
import { AdminListItem } from './AdminListItem'
import { IListItem } from './admin-list.interface'

interface IAdminListProps {
	listItems?: IListItem[]
	isLoading: boolean

	removeHandler?: (id: number) => void
}

export const AdminList: FC<IAdminListProps> = ({ isLoading, removeHandler, listItems = [] }) => {
	return (
		<ul className={styles.admin_list}>
			{isLoading ? (
				<Loader />
			) : listItems.length ? (
				listItems.map(item => (
					<AdminListItem
						listItem={item}
						removeHandler={removeHandler ? () => removeHandler(item.id) : undefined}
						key={item.id}
					/>
				))
			) : (
				<p className={styles.notFound}>No items found</p>
			)}
		</ul>
	)
}
