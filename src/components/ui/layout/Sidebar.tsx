import Link from 'next/link'
import { BiCategory } from 'react-icons/bi'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Sidebar = () => {
	const { user } = useAuth()

	const { logout } = useActions()

	return (
		<section className='bg-secondary p-5 pl-0'>
			<div className='relative pl-5'>
				<Link
					className='group flex items-center gap-3 rounded-lg bg-transparent px-4 py-2 text-white transition-all duration-300 hover:bg-black hover:font-medium hover:text-primary'
					href={'/'}
				>
					<div className='invisible absolute -left-[10px] h-0.5 w-6 rotate-90 rounded-tl-lg rounded-tr-lg bg-primary opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

					<BiCategory className='invisible text-2xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

					<span>Categories</span>
				</Link>

				<Link
					className='group flex items-center gap-3 rounded-lg bg-transparent px-4 py-2 text-white transition-all duration-300 hover:bg-black hover:font-medium hover:text-primary'
					href={'/'}
				>
					<div className='invisible absolute -left-[10px] h-0.5 w-6 rotate-90 rounded-tl-lg rounded-tr-lg bg-primary opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

					<BiCategory className='invisible text-2xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

					<span>Echo and Alexa</span>
				</Link>

				<Link
					className='group flex items-center gap-3 rounded-lg bg-transparent px-4 py-2 text-white transition-all duration-300 hover:bg-black hover:font-medium hover:text-primary'
					href={'/'}
				>
					<div className='invisible absolute -left-[10px] h-0.5 w-6 rotate-90 rounded-tl-lg rounded-tr-lg bg-primary opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

					<BiCategory className='invisible text-2xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100' />

					<span>Kindle</span>
				</Link>
			</div>

			<div>
				<Link href={'/'}>About</Link>
				<Link href={'/'}>Contact</Link>
			</div>

			{!!user && <button onClick={() => logout()}>Logout</button>}
		</section>
	)
}

export default Sidebar
