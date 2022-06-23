import { FC } from 'react'

import { Layout } from '@/components/layout/Layout'

import { IHome } from './home.interface'

export const Home: FC<IHome> = () => {
  return (
    <>
      <Layout>
        <div>Center</div>
      </Layout>
    </>
  )
}
