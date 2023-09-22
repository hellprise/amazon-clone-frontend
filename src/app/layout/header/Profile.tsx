import Image from 'next/image'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'

import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'

export const Profile = () => {
	const { profile } = useProfile()

	const { isShow, ref, setIsShow } = useOutside(false)

	const handleIsShow = () => setIsShow(!isShow)

	if (!profile) return null

	return (
		<section className='relative' ref={ref}>
			<button onClick={handleIsShow} className='flex items-center gap-1'>
				<div className='rounded-full border border-primary p-px'>
					<Image className='rounded-full' src={profile.avatarPath} alt={profile.name} width={44} height={44} />
				</div>

				<BsChevronDown className='text-xs text-white' />
			</button>

			{isShow && (
				<div className='absolute right-0 top-[calc(100%_+_0.5rem)] z-[3] w-40'>
					{/* <p className='text-sm font-semibold'>{profile.name}</p>

					<p className='text-xs'>{profile.email}</p> */}

					<Link
						className='block w-full rounded-md bg-white px-4 py-2 shadow transition-colors duration-300 hover:text-primary'
						href='/my-orders'
					>
						My orders
					</Link>
				</div>
			)}
		</section>
	)
}
