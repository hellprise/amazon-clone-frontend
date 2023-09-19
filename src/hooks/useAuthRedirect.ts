import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from './useAuth'

export const useAuthRedirect = () => {
	const { replace } = useRouter()

	const { user } = useAuth()

	useEffect(() => {
		if (user) replace('/')
	}, [user])
}
