import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { AuthFields } from '@/ui/field-elements/AuthFields'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { AdminNavigation } from '@/ui/admin-navigation/AdminNavigation'
import { Button } from '@/ui/field-elements/Button'
import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'

export const UserEdit: FC = () => {
  const { handleSubmit, register, formState, setValue, control } =
    useForm<IUserEditInput>({
      mode: 'onChange',
    })
  const { isLoading, onSubmit } = useUserEdit(setValue)

  return (
    <Meta title="Edit user">
      <AdminNavigation />
      <Heading title="Edit user" />
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        {isLoading ? (
          <SkeletonLoader count={2} height={48} className="mb-4" />
        ) : (
          <>
            <AuthFields register={register} formState={formState} />
            <Controller
              control={control}
              name="isAdmin"
              render={({ field }) => (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    field.onChange(!field.value)
                  }}
                  className="block text-link mb-7"
                >
                  {field.value ? 'Change to regular user' : 'Change to Admin'}
                </button>
              )}
            ></Controller>

            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  )
}
