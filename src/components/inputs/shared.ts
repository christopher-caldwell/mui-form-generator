import { Path, RegisterOptions } from 'react-hook-form'
import { GridProps } from '@mui/material'

export interface FormInputProps<TData> {
  name: Path<TData>
  label: string
  rules?: Omit<RegisterOptions<TData>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  gridProps?: GridProps
}

export interface SelectOption {
  label: string
  value: string
}
