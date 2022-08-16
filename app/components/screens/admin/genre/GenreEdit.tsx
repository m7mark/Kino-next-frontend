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

import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

const DynamicTextEditor = dynamic(
  () => import('@/ui/field-elements/TextEditor'),
  { ssr: false }
)

export const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IGenreEditInput>({
    mode: 'onChange',
  })
  const { isLoading, onSubmit } = useGenreEdit(setValue)

  return (
    <Meta title="Edit genre">
      <AdminNavigation />
      <Heading title="Edit genre" />
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
                style={{ width: '31%' }}
              />
              <div style={{ width: '31%' }}>
                <SlugField
                  register={register}
                  error={errors.slug}
                  generate={() =>
                    setValue('slug', generateSlug(getValues('name')))
                  }
                />
              </div>
              <Field
                {...register('icon', { required: 'Icon is required' })}
                placeholder="Icon"
                error={errors.name}
                style={{ width: '31%' }}
              />
            </div>
            <Controller
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
            />
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  )
}
