import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthFields } from '@/ui/field-elements/AuthFields'
import { Button } from '@/ui/field-elements/Button'
import { Heading } from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import { Meta } from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

export const Auth: FC = () => {
  useAuthRedirect()
  const { isLoading } = useAuth()
  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({ mode: 'onChange' })

  const login = (data: any) => {
    console.table(data)
  }
  const register = () => {}

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') login(data)
    else if (type === 'register') register()
    reset()
  }

  return (
    <Meta title="Auth">
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Auth" className="mb-6" />
          <AuthFields
            register={registerInput}
            formState={formState}
            isPasswordRequired
          />
          <div className={styles.buttons}>
            <Button
              type="submit"
              disabled={isLoading}
              onClick={() => setType('login')}
            >
              Login
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              onClick={() => setType('register')}
            >
              Register
            </Button>
          </div>
        </form>
      </section>
    </Meta>
  )
}
