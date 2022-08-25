import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movies.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './SearchLists.module.scss'

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link key={movie._id} href={getMovieUrl(movie.slug)}>
            <a href="">
              <Image
                src={movie.poster}
                alt={movie.title}
                width={50}
                height={50}
                objectFit="cover"
                objectPosition="top"
                draggable={false}
              />
              <span>{movie.title}</span>
            </a>
          </Link>
        ))
      ) : (
        <div className="text-white py-4 text-center">Movies not foud</div>
      )}
    </div>
  )
}
