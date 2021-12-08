import { UseFormSetValue, Path } from 'react-hook-form'
import { GridProps } from '@mui/material'

export interface FormInputProps<TData> {
  name: Path<TData>
  label: string
  setValue?: UseFormSetValue<TData>
  gridProps?: GridProps
}

export interface SelectOption {
  label: string
  value: string
}
