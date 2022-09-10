import { FC } from 'react'
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'

import { IAuthInput } from '@/components/screens/auth/auth.interface'

import { validEmail } from '@/shared/regex'

import { Field } from './Field'

interface IAuthFields<T extends FieldValues> {
  register: UseFormRegister<any>
  formState: FormState<T>
  isPasswordRequired?: boolean
}
export const AuthFields: FC<IAuthFields<IAuthInput>> = ({
  register,
  formState: { errors },
  isPasswordRequired = false,
}) => {
  return (
    <>
      <Field
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Email is incorrect',
          },
        })}
        placeholder="E-mail"
        error={errors.email}
      />
      <Field
        {...register(
          'password',
          isPasswordRequired
            ? {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Min length should be 6 symbols',
                },
              }
            : {}
        )}
        placeholder="Password"
        type="password"
        error={errors.password}
      />
    </>
  )
}
