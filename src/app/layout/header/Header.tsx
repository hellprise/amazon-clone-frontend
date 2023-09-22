'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

import { ADMIN_PANEL_URL } from '@/config/url.config'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import { Profile } from './Profile'
import { Search } from './Search'
import { Cart } from './cart/Cart'

export const Header = () => {
	const { isAdminPanel } = useIsAdminPanel()

	const { user } = useAuth()

	return (
		<header className='grid grid-cols-[1.03fr_3fr_1.2fr] items-center border-b-2 border-b-bg/20 bg-secondary px-10 py-4'>
			<Link href='/'>
				{isAdminPanel ? (
					<h1 className='text-3xl font-semibold capitalize text-white'>Admin panel</h1>
				) : (
					<Image src='/amazon-logo.png' width={160} height={60} alt='amazon clone website logotype' />
				)}
			</Link>

			<Search />

			<section className='flex items-center justify-end gap-8'>
				{user?.isAdmin && !isAdminPanel && (
					<Link href={ADMIN_PANEL_URL}>
						<MdOutlineAdminPanelSettings className='text-2xl text-white' />
					</Link>
				)}

				<Link href='/favorites'>
					<AiOutlineHeart className='text-2xl text-white' />
				</Link>

				<Cart />

				<button>
					<IoNotificationsOutline className='text-2xl text-white' />
				</button>

				<Profile />
			</section>
		</header>
	)
}
