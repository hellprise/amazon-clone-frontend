export interface ISelectItem<K = string> {
	key: K
	label: string
}

export interface ISelect<K = string> {
	data: ISelectItem<K>[]
	onChange: (item: ISelectItem<K>) => void
	value?: ISelectItem<K>
	title?: string
}
