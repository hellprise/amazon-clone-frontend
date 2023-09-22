'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { BiCategory, BiHelpCircle } from 'react-icons/bi'
import { BsPercent } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'

import { useCategories } from '@/hooks/queries/useCategories'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import { convertToMenuItems } from '@/utils/convert-to-menu-items'

import { Loader } from '../../../components/ui/loader/Loader'

import { ADMIN_MENU } from './admin-menu.data'

const Sidebar = () => {
	const { data, isLoading } = useCategories()

	const { user } = useAuth()
	const { logout } = useActions()

	const { isAdminPanel, pathname } = useIsAdminPanel()

	return (
		<aside className='z-[4] flex h-full min-h-[calc(100vh-86px)] flex-col justify-between bg-secondary p-5 pl-0'>
			<section className='flex flex-col'>
				{isLoading ? (
					<Loader />
				) : data ? (
					<ul className='relative pl-5'>
						{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(item => (
							<li key={item.id}>
								<Link
									className={clsx(
										'group flex items-center gap-3 rounded-lg bg-transparent px-4 py-2 transition-all duration-300 hover:bg-black',
										{
											'text-primary': pathname === `/category/${item.href}`,
											'text-white': pathname !== `/category/${item.href}`
										}
									)}
									href={`/category/${item.href}`}
								>
									<div className='invisible absolute -left-[10px] h-0.5 w-6 rotate-90 rounded-tl-lg rounded-tr-lg bg-primary opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

									<BiCategory className='invisible text-2xl opacity-0 transition-all duration-300 group-hover:visible group-hover:text-primary group-hover:opacity-100' />

									<span className='transition-all duration-300 group-hover:font-medium group-hover:text-primary'>
										{item.label}
									</span>
								</Link>
							</li>
						))}
					</ul>
				) : (
					<div>Categories not found</div>
				)}

				<div className='my-16 flex flex-col gap-5 pl-9 text-lg font-medium text-white'>
					<Link className='group flex w-fit items-center gap-3' href={'/'}>
						<BsPercent className='text-2xl transition-colors duration-300 group-hover:text-primary' />

						<span className='transition-colors duration-300 group-hover:text-primary'>Sell on Amazon</span>
					</Link>

					<Link className='group flex w-fit items-center gap-3' href={'/'}>
						<BiHelpCircle className='text-2xl transition-colors duration-300 group-hover:text-primary' />

						<span className='transition-colors duration-300 group-hover:text-primary'>Help</span>
					</Link>
				</div>
			</section>

			{!!user && (
				<button
					className='group flex items-center gap-3 pl-9 text-left text-lg font-medium text-white'
					onClick={() => logout()}
				>
					<MdLogout className='text-2xl transition-colors duration-300 group-hover:text-primary' />

					<span className='transition-colors duration-300 group-hover:text-primary'>Logout</span>
				</button>
			)}
		</aside>
	)
}

export default Sidebar
