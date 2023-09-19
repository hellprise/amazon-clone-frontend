import { createAsyncThunk } from '@reduxjs/toolkit'

import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { errorCatch } from '@/api/api.helper'

import { IAuthResponse, IEmailPassword } from './user.interface'

// login & register combined
export const auth = createAsyncThunk<IAuthResponse, { type: 'login' | 'register'; data: IEmailPassword }>(
	'auth',
	async ({ type, data }, thunkApi) => {
		try {
			const response = await AuthService.main(type, data)

			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// register
// export const register = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/register', async (data, thunkApi) => {
// 	console.log('data_register', data)
// 	try {
// 		const response = await AuthService.main('register', data)

// 		return response
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error)
// 	}
// })

// // login
// export const login = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/login', async (data, thunkApi) => {
// 	console.log('data_login', data)
// 	try {
// 		const response = await AuthService.main('login', data)

// 		return response
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error)
// 	}
// })

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

// check auth
export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
	try {
		const response = await AuthService.getNewTokens()

		return response.data
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			thunkApi.dispatch(logout())
		}

		return thunkApi.rejectWithValue(error)
	}
})
