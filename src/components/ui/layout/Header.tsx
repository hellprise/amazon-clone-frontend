import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsChevronDown, BsSearch } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'

import { useCart } from '@/hooks/useCart'

import { Cart } from './cart/Cart'

export const Header = () => {
	const { items } = useCart()

	const count = items.length

	return (
		// <header className='flex items-center justify-between border-b-2 border-b-bg/20 bg-secondary px-10 py-4'>
		<header className='grid grid-cols-[1.03fr_3fr_1.2fr] items-center border-b-2 border-b-bg/20 bg-secondary px-10 py-4'>
			<Link href='/'>
				{/* <Image src='/images/amazon-logo.png' width={160} height={60} alt='amazon clone website logotype' /> */}
				<Image src='/amazon-logo.png' width={160} height={60} alt='amazon clone website logotype' />
			</Link>

			<section className='flex w-[66%] items-center rounded-xl rounded-br-lg rounded-tr-lg border border-bg/20'>
				<input
					className='w-11/12 bg-secondary pl-4 text-white focus:outline-none focus:ring-0'
					type='text'
					placeholder='Search...'
				/>

				<div className='flex w-[62%] items-center justify-end border-l border-l-bg/20'>
					<button className='flex items-center gap-2 pr-4'>
						<span className='text-white'>All Categories</span>

						<BsChevronDown className='text-xs text-white' />
					</button>

					<button className='rounded-br-lg rounded-tr-lg bg-primary p-3'>
						<BsSearch className='text-xl text-white' />
					</button>
				</div>
			</section>

			<section className='flex items-center justify-end gap-8'>
				<Link href='/favorites'>
					<AiOutlineHeart className='text-2xl text-white' />
				</Link>

				<Cart />

				<button>
					<IoNotificationsOutline className='text-2xl text-white' />
				</button>

				<button className='flex items-center gap-1'>
					<div className='rounded-full border border-primary p-px'>
						<img className='h-12 w-12 rounded-full' src='https://picsum.photos/200' alt='avatar' />
					</div>

					<BsChevronDown className='text-xs text-white' />
				</button>
			</section>
		</header>
	)
}
