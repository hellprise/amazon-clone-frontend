'use client'

import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

import { ADMIN_PANEL_URL } from '@/config/url.config'

import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { Auth } from '@/app/(customer)/auth/Auth'
import NotFound from '@/app/not-found'
import { protectedRoutes } from './protected-routes.data'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()

	const router = useRouter()

	const { user } = useAuth()

	const { checkAuth, logout } = useActions()

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = getRefreshToken()

		if (!refreshToken && user) logout()
	}, [pathname])

	const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route))

	const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

	if (!isProtectedRoute && !isAdminRoute) return <>{children}</>

	if (user?.isAdmin) return <>{children}</>
	if (user && isProtectedRoute) return <>{children}</>

	if (user && isAdminRoute) return <NotFound />

	if (pathname !== '/auth') return <Auth />

	return null
}

export default AuthProvider
