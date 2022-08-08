import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { AdminNavigation } from '@/ui/admin-navigation/AdminNavigation'
import { Button } from '@/ui/field-elements/Button'
import { Field } from '@/ui/field-elements/Field'
import { SlugField } from '@/ui/field-elements/SlugField/SlugField'
import formStyles from '@/ui/field-elements/admin-form.module.scss'
import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/text/generateSlug'

import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'

const DynamicTextEditor = dynamic(
  () => import('@/ui/field-elements/TextEditor'),
  { ssr: false }
)

export const MovieEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IMovieEditInput>({
    mode: 'onChange',
  })
  const { isLoading, onSubmit } = useMovieEdit(setValue)

  return (
    <Meta title="Edit movie">
      <AdminNavigation />
      <Heading title="Edit movie" />
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <div className={formStyles.fields}>
              <Field
                {...register('title', { required: 'Title is required' })}
                placeholder="Title"
                error={errors.title}
              />
              <div>
                <SlugField
                  register={register}
                  error={errors.slug}
                  generate={() =>
                    setValue('slug', generateSlug(getValues('title')))
                  }
                />
              </div>
              {/* <Controller
              control={control}
              name="description"
              defaultValue=""
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <DynamicTextEditor
                  onChange={onChange}
                  value={value}
                  error={error}
                  placeholder="Description"
                />
              )}
              rules={{
                validate: {
                  required: (v) =>
                    (v && stripHtml(v).result.length > 0) ||
                    'Description is required',
                },
              }}
            /> */}
            </div>
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  )
}
