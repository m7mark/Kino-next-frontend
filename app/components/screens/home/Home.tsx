import { FC } from 'react'

import Gallery from '@/ui/gallery/Gallery'
import { SubHeading } from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { IHome } from './home.interface'

export const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
  return (
    <>
      <Meta
        title="Watch movies online"
        description="Kino app - watch movies online"
      >
        <Heading
          title="Watch movies online"
          className="text-gray-300 mb-8 text-xl"
        ></Heading>
        {slides.length && <Slider slides={slides} />}

        <div className="my-10">
          <SubHeading title="Trending now" />
          {trendingMovies.length && <Gallery items={trendingMovies} />}
        </div>

        <div className="my-10">
          <SubHeading title="Best actors" />
          {slides.length && <Gallery items={actors} />}
        </div>
      </Meta>
    </>
  )
}
