import { useQuery } from 'react-query'

import { IOptionsSelect } from '@/ui/select/select.interface'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

export const useAdminGenres = () => {
  const queryData = useQuery('List of genres', () => GenreService.getAll(), {
    select: ({ data }) =>
      data.map(
        (genre): IOptionsSelect => ({
          label: genre.name,
          value: genre._id,
        })
      ),
    onError: (error) => {
      toastError(error, 'Genres array')
    },
  })
  return queryData
}
