import { useContext } from 'react'
// import DateFnsUtils from '@date-io/date-fns'
import { Grid, GridProps } from '@mui/material'
import { Path, Controller, ControllerRenderProps, ControllerFieldState, UseFormStateReturn } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputCustomOverride = function <TData>({
  name,
  children,
  rules,
  gridProps = { xs: 12 }
}: FormInputCustomOverrideProps<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <Grid item {...gridProps}>
      <Controller<TData> rules={rules} name={name} control={control} render={children} />
    </Grid>
  )
}

export interface CustomOverrideRenderArgs<TData> {
  field: ControllerRenderProps<TData, Path<TData>>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<TData>
}
export interface FormInputCustomOverrideProps<TData> {
  children: (options: CustomOverrideRenderArgs<TData>) => JSX.Element
  name: FormInputProps<TData>['name']
  rules?: FormInputProps<TData>['rules']
  gridProps?: GridProps
}
