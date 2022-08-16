import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

import { IFieldProps } from '../field-elements/form.interface'

export interface IOptionsSelect {
  value: string
  label: string
}
export interface ISelect extends IFieldProps {
  options: Options<IOptionsSelect>
  isMulti?: boolean
  field: ControllerRenderProps<any, any>
  isLoading?: boolean
}
