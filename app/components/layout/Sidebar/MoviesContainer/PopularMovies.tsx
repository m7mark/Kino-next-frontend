import { FC } from 'react'
import { useQuery } from 'react-query'

import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

import { MovieServise } from '@/services/movie.service'

import { MovieList } from './MovieList'

export const PopularMovies: FC = () => {
  const { isLoading, data: popularMovies } = useQuery(
    'Popular movies in sidebar',
    () => MovieServise.getMostPopularMovies()
  )
  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="mb-4 h-28" />
    </div>
  ) : (
    <MovieList
      link="/trending"
      title="Popular Movies"
      movies={popularMovies || []}
    />
  )
}
