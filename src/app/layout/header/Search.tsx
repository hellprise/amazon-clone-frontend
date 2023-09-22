import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const { push } = useRouter()

	return (
		<section className='grid w-1/2 grid-cols-[1fr_0.1fr] items-center rounded-xl rounded-br-lg rounded-tr-lg border border-bg/20'>
			<input
				className='bg-secondary px-4 text-white focus:outline-none focus:ring-0'
				type='text'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder='Search...'
			/>

			<button
				onClick={() => push(`/explorer?searchTerm=${searchTerm}`)}
				className='rounded-br-lg rounded-tr-lg bg-primary p-3'
			>
				<BsSearch className='text-xl text-white' />
			</button>
		</section>
	)
}
