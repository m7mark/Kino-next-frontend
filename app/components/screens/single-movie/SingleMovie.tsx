import { FC } from 'react'

import { SubHeading } from '@/components/ui/heading/SubHeading'

import { Banner } from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'

import { IMovie } from '@/shared/types/movies.types'

import { Meta } from '@/utils/meta/Meta'

import Content from './Content/Content'

export const SingleMovie: FC<{
  movie: IMovie
  similarMovies: IGalleryItem[]
}> = ({ movie, similarMovies }) => {
  return (
    <Meta title={movie.title} description={`Watch ${movie.title}`}>
      <Banner
        imagePath={movie.bigPoster}
        Detail={() => <Content movie={movie} />}
      />

      <div className="mt-12">
        <SubHeading title="Similar" />
        <Gallery items={similarMovies} />
      </div>
    </Meta>
  )
}
