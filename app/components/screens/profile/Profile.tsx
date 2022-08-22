import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { AuthFields } from '@/ui/field-elements/AuthFields'
import { Button } from '@/ui/field-elements/Button'
import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import styles from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import { useProfile } from './useProfile'

export const Profile: FC = () => {
  const { handleSubmit, register, formState, setValue } =
    useForm<IProfileInput>({
      mode: 'onChange',
    })

  const { isLoading, onSubmit } = useProfile(setValue)

  return (
    <Meta title="Profile">
      <Heading title="Profile" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? (
          <SkeletonLoader count={2} />
        ) : (
          <AuthFields register={register} formState={formState} />
        )}
        <Button>Update</Button>
      </form>
    </Meta>
  )
}
