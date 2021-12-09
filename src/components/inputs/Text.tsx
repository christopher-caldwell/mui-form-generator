import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { TextField, TextFieldProps, Grid } from '@mui/material'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputText = function <TData>({ name, label, textFieldProps, gridProps = { xs: 12 } }: Props<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <Grid item {...gridProps}>
      <Controller<TData>
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            {...textFieldProps}
            // Making the helper text a constant prevents layout shift when messages appear
            helperText={error ? error.message : textFieldProps?.helperText || ' '}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
          />
        )}
      />
    </Grid>
  )
}

export type FormInputTextProps = {
  textFieldProps?: TextFieldProps
}
type Props<TData> = FormInputProps<TData> & FormInputTextProps
