import { FC } from 'react'

import { FavouriteMovies } from './FavouriteMovies/FavouriteMovies'
import { PopularMovies } from './PopularMovies'

export const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovies />
      <FavouriteMovies />
    </div>
  )
}
