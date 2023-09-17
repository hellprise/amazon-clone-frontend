import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsChevronDown, BsSearch } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'

import { Heading } from '../heading/Heading'

export const Header = () => {
	return (
		<header className='flex items-center justify-between border-b-2 border-b-bg/20 bg-secondary px-10 py-4'>
			<Heading className='!text-white' tag='h2'>
				Amazon
			</Heading>

			<section className='flex items-center rounded-xl border border-bg/20'>
				<input
					className='bg-secondary px-4 text-white focus:outline-none focus:ring-0'
					type='text'
					placeholder='Search...'
				/>

				<div className='flex items-center border-l border-l-bg/20'>
					<button className='flex items-center gap-1 px-4'>
						<span className='text-white'>All Categories</span>

						<BsChevronDown className='text-xs text-white' />
					</button>

					<button className='rounded-br-lg rounded-tr-lg bg-primary p-3'>
						<BsSearch className='text-xl text-white' />
					</button>
				</div>
			</section>

			<section className='flex items-center gap-8'>
				<button>
					<AiOutlineHeart className='text-2xl text-white' />
				</button>

				<button className='relative rounded-lg bg-primary p-2'>
					<AiOutlineShoppingCart className='text-2xl' />

					<span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-sm text-secondary'>
						0
					</span>
				</button>

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
