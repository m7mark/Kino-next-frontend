import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import { UploadField } from '@/ui/field-elements/UploadField/UploadField'

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
import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'
import { useMovieEdit } from './useMovieEdit'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
  ssr: false,
})

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
  const { isLoading: isActrorsLoading, data: actors } = useAdminActors()
  const { isLoading: isGenresLoading, data: genres } = useAdminGenres()

  return (
    <Meta title="Edit movie">
      <AdminNavigation />
      <Heading title="Edit movie" />
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? (
          <SkeletonLoader count={2} height={48} className="mb-4" />
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
              <Field
                {...register('parameters.country', {
                  required: 'Country is required',
                })}
                placeholder="Country"
                error={errors.parameters?.country}
                style={{ width: '31%' }}
              />
              <Field
                {...register('parameters.duration', {
                  required: 'Duration is required',
                })}
                placeholder="Duration"
                error={errors.parameters?.duration}
                style={{ width: '31%' }}
              />
              <Field
                {...register('parameters.year', {
                  required: 'Year is required',
                })}
                placeholder="Year"
                error={errors.parameters?.year}
                style={{ width: '31%' }}
              />
              <Controller
                control={control}
                name="genres"
                render={({ field, fieldState: { error } }) => (
                  <DynamicSelect
                    options={genres || []}
                    field={field}
                    isLoading={isGenresLoading}
                    isMulti={true}
                    error={error}
                    placeholder="Genres"
                  />
                )}
                rules={{
                  required: 'Please select at least one genre',
                }}
              />

              <Controller
                control={control}
                name="actors"
                render={({ field, fieldState: { error } }) => (
                  <DynamicSelect
                    options={actors || []}
                    field={field}
                    isLoading={isActrorsLoading}
                    isMulti={true}
                    error={error}
                    placeholder="Actors"
                  />
                )}
                rules={{
                  required: 'Please select at least one actor',
                }}
              />

              <Controller
                control={control}
                name="poster"
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder="movies"
                    placeholder="Poster"
                  />
                )}
                rules={{
                  required: 'Poster is required',
                }}
              />

              <Controller
                control={control}
                name="bigPoster"
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder="movies"
                    placeholder="Big poster"
                  />
                )}
                rules={{
                  required: 'Big poster is required',
                }}
              />

              <Controller
                control={control}
                name="videoUrl"
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder="movies"
                    placeholder="Video"
                    isNoImage
                    style={{ marginTop: -25 }}
                  />
                )}
                rules={
                  {
                    // required: 'Video is required',
                  }
                }
              />
            </div>
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  )
}
