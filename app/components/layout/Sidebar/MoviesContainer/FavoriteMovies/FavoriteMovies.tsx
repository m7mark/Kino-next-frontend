import { FC } from 'react'

import { useFavorites } from '@/components/screens/favorites/useFavorites'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import { MovieList } from '../MovieList'

import { NotAuthFavorite } from './NotAuthFavorite'

const FavoriteMovies: FC = () => {
  const { favoritesMovies, isLoading } = useFavorites()
  const { user } = useAuth()

  if (!user) return <NotAuthFavorite />

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MovieList
      link="/favorites"
      title="Favorites Movies"
      movies={favoritesMovies?.slice(0, 3) || []}
    />
  )
}

export default FavoriteMovies
