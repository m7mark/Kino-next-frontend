import { FC } from 'react'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { Menu } from '../Menu'

import { usePopularGenres } from './usePopularGenres'

export const GenreMenu: FC = () => {
  const { isLoading, data } = usePopularGenres()
  return isLoading ? (
    <div className="mx-11 mb-4">
      <SkeletonLoader count={2} className="h-7 mb-6" />
    </div>
  ) : (
    <Menu
      menu={{
        title: 'Popular Genres',
        items: data || [],
      }}
    />
  )
}
