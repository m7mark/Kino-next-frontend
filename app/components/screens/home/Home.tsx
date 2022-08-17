import { FC } from 'react'

import Slider from '@/components/ui/slider/Slider'

import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { IHome } from './home.interface'

export const Home: FC<IHome> = ({ slides }) => {
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
      </Meta>
    </>
  )
}
