import { FC } from 'react'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { FavoriteItem } from './FavoriteItem'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

export const Favorites: FC = () => {
  const { favoritesMovies, isLoading } = useFavorites()

  return (
    <Meta title="Favorites">
      <Heading title="Favorites" />
      <section className={styles.favorites}>
        {isLoading ? (
          <SkeletonLoader
            count={3}
            className={styles.skeletonLoader}
            containerClassName={styles.containerLoader}
          />
        ) : (
          favoritesMovies?.map((movie) => (
            <FavoriteItem key={movie._id} movie={movie} />
          ))
        )}
      </section>
    </Meta>
  )
}
