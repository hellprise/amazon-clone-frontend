import { FC } from 'react'

import styles from './AdminList.module.scss'
import { AdminActions } from './admin-actions/AdminActions'
import { IAdminListItem } from './admin-list.interface'

export const AdminListItem: FC<IAdminListItem> = ({ listItem, removeHandler }) => {
	return (
		<section className={styles.item}>
			{listItem.items.map(item => (
				<span key={item}>{item}</span>
			))}

			<AdminActions removeHandler={removeHandler} editUrl={listItem.editUrl} viewUrl={listItem.viewUrl} />
		</section>
	)
}
