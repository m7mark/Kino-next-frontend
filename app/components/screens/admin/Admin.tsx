import { FC } from 'react'

import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'

import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { Statistics } from './statistics/Statistics'

export const Admin: FC = () => {
  return (
    <Meta title="Admin panel">
      <AdminNavigation />
      <Heading title="Some statistics" />
      <Statistics />
    </Meta>
  )
}
