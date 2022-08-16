import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)
  const { push } = useRouter()
  const queryData = useQuery(
    ['genre list', debouncedSearch],
    () => GenreService.getAll(debouncedSearch),
    {
      select: ({ data }) =>
        data.map(
          (genre): ITableItem => ({
            _id: genre._id,
            editUrl: getAdminUrl(`genre/edit/${genre._id}`),
            items: [genre.name, genre.slug],
          })
        ),
      onError: (error) => {
        toastError(error, 'Genre list')
      },
    }
  )
  const { mutateAsync: deleteAsync } = useMutation(
    'delete genre',
    (genreId: string) => GenreService.delete(genreId),
    {
      onError: (error) => {
        toastError(error, 'Delete genre')
      },
      onSuccess: () => {
        toast.success('Delete genre success')
        queryData.refetch()
      },
    }
  )

  const { mutateAsync: createAsync } = useMutation(
    'create genre',
    () => GenreService.create(),
    {
      onError: (error) => {
        toastError(error, 'Create genre')
      },
      onSuccess: ({ data: _id }) => {
        toast.success('Success create genre')
        push(`genre/edit/${_id}`)
      },
    }
  )
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return useMemo(
    () => ({
      handleSearch,
      ...queryData,
      searchTerm,
      deleteAsync,
      createAsync,
    }),
    [queryData, searchTerm, deleteAsync, createAsync]
  )
}
