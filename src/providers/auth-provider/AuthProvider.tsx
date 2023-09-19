import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ Component: { isOnlyUser }, children }) => {
	const { pathname } = useRouter()

	const { user } = useAuth()
	const { checkAuth, logout } = useActions()

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		// const refreshToken = Cookies.get('refreshToken')
		const refreshToken = getRefreshToken()

		if (!refreshToken && user) logout()
	}, [pathname])

	// якщо сторінка потребує авторизації - обертаємо її в компонент CheckRole, а якщо ні - рендеримо без цієї обгортки
	return isOnlyUser ? <DynamicCheckRole Component={{ isOnlyUser }} children={children} /> : <>{children}</>
}

export default AuthProvider
