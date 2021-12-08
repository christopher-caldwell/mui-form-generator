import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Grid } from '@mui/material'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputText = function <TData>({ name, label, gridProps = { xs: 12 } }: FormInputProps<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <Grid item {...gridProps}>
      <Controller<TData>
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            helperText={error ? error.message : null}
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
