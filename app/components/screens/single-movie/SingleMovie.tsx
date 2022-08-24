import dynamic from 'next/dynamic'
import { FC } from 'react'

import { Banner } from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'
import { SubHeading } from '@/ui/heading/SubHeading'

import { IMovie } from '@/shared/types/movies.types'

import { Meta } from '@/utils/meta/Meta'

import Content from './Content/Content'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicVideoPlayer = dynamic(
  () => import('@/ui/video-player/VideoPlayer'),
  {
    ssr: false,
  }
)

const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
  ssr: false,
})

export const SingleMovie: FC<{
  movie: IMovie
  similarMovies: IGalleryItem[]
}> = ({ movie, similarMovies }) => {
  useUpdateCountOpened(movie.slug)
  return (
    <Meta title={movie.title} description={`Watch ${movie.title}`}>
      <Banner
        imagePath={movie.bigPoster}
        Detail={() => <Content movie={movie} />}
      />
      <DynamicVideoPlayer videoSource={movie.videoUrl} slug={movie.slug} />

      <div className="mt-12">
        <SubHeading title="Similar" />
        <Gallery items={similarMovies} />
      </div>

      <DynamicRateMovie slug={movie.slug} _id={movie._id} />
    </Meta>
  )
}
