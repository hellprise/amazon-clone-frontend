import { useMutation, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { UserService } from '@/services/user.service'

import { useProfile } from '@/hooks/useProfile'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(['toggle favorite'], () => UserService.toggleFavorite(productId), {
		onSuccess() {
			// оновлюємо дані профілю після успішного додавання/видалення улюбленого товару
			queryClient.invalidateQueries(['get profile'])
		}
	})

	if (!profile) return null

	const isExists = profile.favorites.some(favorite => favorite.id === productId)

	return (
		<button
			className={clsx('text-[26px] transition-colors duration-300', {
				'text-primary': isExists,
				'text-secondary': !isExists
			})}
			onClick={() => mutate()}
		>
			{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
		</button>
	)
}

export default FavoriteButton
