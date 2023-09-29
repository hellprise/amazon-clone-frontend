import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiCategory, BiHelpCircle } from 'react-icons/bi'
import { BsPercent } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'

import { CategoryService } from '@/services/category.service'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { Loader } from '../loader/Loader'

const Sidebar = () => {
	const { data, isLoading } = useQuery(['get categories'], () => CategoryService.getAll(), {
		select: ({ data }) => data
	})

	const { asPath } = useRouter()

	const { user } = useAuth()

	const { logout } = useActions()

	return (
		<aside className='flex h-full min-h-[calc(100vh-86px)] flex-col justify-between bg-secondary p-5 pl-0'>
			<section className='flex flex-col'>
				{isLoading ? (
					<Loader />
				) : data ? (
					<ul className='relative pl-5'>
						{data.map(category => (
							<li key={category.id}>
								<Link
									className={clsx(
										'group flex items-center gap-3 rounded-lg bg-transparent px-4 py-2 transition-all duration-300 hover:bg-black',
										{
											'text-primary': asPath === `/category/${category.slug}`,
											'text-white': asPath !== `/category/${category.slug}`
										}
									)}
									href={`/category/${category.slug}`}
								>
									<div className='invisible absolute -left-[10px] h-0.5 w-6 rotate-90 rounded-tl-lg rounded-tr-lg bg-primary opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

									<BiCategory className='invisible text-2xl opacity-0 transition-all duration-300 group-hover:visible group-hover:text-primary group-hover:opacity-100' />

									<span className='transition-all duration-300 group-hover:font-medium group-hover:text-primary'>
										{category.name}
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
