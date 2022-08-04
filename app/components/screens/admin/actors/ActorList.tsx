import { FC } from 'react'

import { AdminNavigation } from '@/ui/admin-navigation/AdminNavigation'
import { AdminHeader } from '@/ui/admin-table/AdminHeader/AdminHeader'
import { AdminTable } from '@/ui/admin-table/AdminTable/AdminTable'
import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { useActors } from './useActors'

export const ActorList: FC = () => {
  const { handleSearch, deleteAsync, searchTerm, isLoading, data } = useActors()
  return (
    <Meta title="Actors">
      <AdminNavigation />
      <Heading title="Actors" />
      <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
      <AdminTable
        isLoading={isLoading}
        removeHandler={deleteAsync}
        headerItems={['Name', 'Count movies']}
        tableItems={data || []}
      />
    </Meta>
  )
}
