import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { TypeProductDataFilters } from '@/services/product/product.types'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const { replace } = useRouter()

	const { updateQueryParam } = useActions()

	const { isFilterUpdated, queryParams } = useTypedSelector(({ filters }) => filters)

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({ key: key as keyof TypeProductDataFilters, value })
		})
	}, [])

	const updateUrl = (key: keyof TypeProductDataFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) newParams.set(key, String(value))
		else newParams.delete(key)

		replace(`${pathname}?${newParams.toString().replace(/%7C/g, '|')}`)

		updateQueryParam({ key, value })
	}

	return { isFilterUpdated, queryParams, updateUrl }
}
