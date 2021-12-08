import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { TextField, MenuItem, Grid } from '@mui/material'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputSelect = function <TData>({ name, label, options, gridProps = { xs: 12 } }: Props<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <Grid item {...gridProps}>
      <Controller<TData>
        render={({ field: { onChange, value } }) => (
          <TextField select fullWidth onChange={onChange} value={value} label={label}>
            {options.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        )}
        control={control}
        name={name}
      />
    </Grid>
  )
}

export interface SelectOption {
  label: string
  value: string
}
type Props<TData> = FormInputProps<TData> & {
  options: SelectOption[]
}
