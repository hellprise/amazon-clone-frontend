import { IFullUser, IUser } from '@/types/user.interface'

import { instance } from '@/api/api.interceptor'

const USERS = 'users'

type typeData = {
	email: string
	name?: string
	password?: string
	avatarPath?: string
	phone?: string
}

export const UserService = {
	async getProfile() {
		// return fetch('http://localhost:4200/api/users/profile', {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
		// 	}
		// }).then(res => res.json())

		return instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: typeData) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
