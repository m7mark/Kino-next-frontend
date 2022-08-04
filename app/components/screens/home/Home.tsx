import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { IHome } from './home.interface'

export const Home: FC<IHome> = () => {
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
      </Meta>
      <button onClick={() => toastr.success('Auth', 'Success')}>Show</button>
    </>
  )
}
