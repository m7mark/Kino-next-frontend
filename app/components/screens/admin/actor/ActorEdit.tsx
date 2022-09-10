import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { AdminNavigation } from '@/ui/admin-navigation/AdminNavigation'
import { Button } from '@/ui/field-elements/Button'
import { Field } from '@/ui/field-elements/Field'
import { SlugField } from '@/ui/field-elements/SlugField/SlugField'
import { UploadField } from '@/ui/field-elements/UploadField/UploadField'
import formStyles from '@/ui/field-elements/admin-form.module.scss'
import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/text/generateSlug'

import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'

export const ActorEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IActorEditInput>({
    mode: 'onChange',
  })
  const { isLoading, onSubmit } = useActorEdit(setValue)

  return (
    <Meta title="Edit actor">
      <AdminNavigation />
      <Heading title="Edit actor" />
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? (
          <SkeletonLoader count={2} height={48} className="mb-4" />
        ) : (
          <>
            <div className={formStyles.fields}>
              <Field
                {...register('name', { required: 'Name is required' })}
                placeholder="Name"
                error={errors.name}
              />
              <SlugField
                register={register}
                error={errors.slug}
                generate={() =>
                  setValue('slug', generateSlug(getValues('name')))
                }
              />

              <Controller
                control={control}
                name="photo"
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder="actors"
                    placeholder="Photo"
                  />
                )}
                rules={{
                  required: 'Photo is required',
                }}
              />
            </div>
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  )
}
