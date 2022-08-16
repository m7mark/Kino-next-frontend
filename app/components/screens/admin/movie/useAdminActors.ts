import { useQuery } from 'react-query'

import { IOptionsSelect } from '@/components/ui/select/select.interface'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

export const useAdminActors = () => {
  const queryData = useQuery('List of actors', () => ActorService.getAll(), {
    select: ({ data }) =>
      data.map(
        (actor): IOptionsSelect => ({
          label: actor.name,
          value: actor._id,
        })
      ),
    onError: (error) => {
      toastError(error, 'Actors array')
    },
  })
  return queryData
}
