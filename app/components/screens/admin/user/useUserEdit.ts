import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { UserService } from '@/services/user.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

import { IUserEditInput } from './user-edit.interface'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
  const { push, query } = useRouter()
  const userId = String(query.id)

  const { isLoading } = useQuery(
    ['user', userId],
    () => UserService.getById(userId),
    {
      onSuccess: ({ data }) => {
        setValue('email', data.email)
        setValue('isAdmin', data.isAdmin)
      },
      onError: (error) => {
        toastError(error, 'Get user')
      },
      enabled: !!query.id,
    }
  )

  const { mutateAsync } = useMutation(
    'update user',
    (data: IUserEditInput) => UserService.update(userId, data),
    {
      onError: (error) => {
        toastError(error, 'Update user')
      },
      onSuccess: () => {
        toast.success('Successful update user')
        push(getAdminUrl('users'))
      },
    }
  )
  const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
    await mutateAsync(data)
  }
  return { onSubmit, isLoading }
}
