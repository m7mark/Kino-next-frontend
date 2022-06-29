import { FC } from 'react'

import { Menu } from '../Menu'

import { usePopularGenres } from './usePopularGenres'

export const GenreMenu: FC = () => {
  const { isLoading, data } = usePopularGenres()
  return isLoading ? (
    <div className="mx-11 mb-4">Loading...</div>
  ) : (
    <Menu
      menu={{
        title: 'Popular Genres',
        items: data || [],
      }}
    />
  )
}
