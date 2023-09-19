import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { Favorites } from '@/screens/favorites/favorites'

const FavoritesPage: NextPageAuth = () => {
	return <Favorites />
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
