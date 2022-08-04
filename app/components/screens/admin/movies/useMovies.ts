import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useMovies = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)
  const queryData = useQuery(
    ['movie list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: ({ data }) =>
        data.map(
          (movie): ITableItem => ({
            _id: movie._id,
            editUrl: getAdminUrl(`movie/edit/${movie._id}`),
            items: [
              movie.title,
              getGenresList(movie.genres),
              String(movie.rating),
            ],
          })
        ),
      onError: (error) => {
        toastError(error, 'Movie list')
      },
    }
  )
  const { mutateAsync: deleteAsync } = useMutation(
    ['delete movie', debouncedSearch],
    (movieId: string) => MovieService.deleteMovie(movieId),
    {
      onError: (error) => {
        toastError(error, 'Delete movie')
      },
      onSuccess: () => {
        toastr.success('Delete movie', 'Success delete movie')
        queryData.refetch()
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
    }),
    [queryData, searchTerm, deleteAsync]
  )
}
