import { FC, PropsWithChildren } from 'react'

interface IFilterWrapperProps {
	title: string
}

export const FilterWrapper: FC<PropsWithChildren<IFilterWrapperProps>> = ({ title, children }) => {
	return (
		<section>
			<h3 className='mb-3'>{title}</h3>

			<div>{children}</div>
		</section>
	)
}
