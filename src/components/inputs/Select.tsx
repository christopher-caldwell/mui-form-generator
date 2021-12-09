import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { TextField, MenuItem, Grid, TextFieldProps } from '@mui/material'

import { MuiFormContext } from '@/providers'
import { FormInputProps, SelectOption } from './shared'

export const FormInputSelect = function <TData>({
  name,
  label,
  rules,
  options,
  inputProps,
  gridProps = { xs: 12 }
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <Grid item {...gridProps}>
      <Controller<TData>
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            {...inputProps}
            select
            fullWidth
            onChange={onChange}
            value={value}
            label={label}
            error={!!error}
            helperText={error ? error.message || ' ' : inputProps?.helperText || ' '}
          >
            {options.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Grid>
  )
}

export type FormInputSelectProps = {
  options: SelectOption[]
  inputProps?: TextFieldProps
}
type Props<TData> = FormInputProps<TData> & FormInputSelectProps
