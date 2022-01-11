import { useContext } from 'react'
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  Grid,
  FormControlProps,
  CheckboxProps,
  FormHelperText
} from '@mui/material'
import { Controller } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputCheckbox = function <TData>({
  name,
  label,
  rules,
  formControlProps,
  checkboxProps,
  helperText,
  gridProps = { xs: 12 }
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)

  return (
    <Grid item {...gridProps}>
      <Controller<TData>
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value = false }, fieldState: { error } }) => (
          <FormControl {...formControlProps} error={!!error}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    {...checkboxProps}
                    checked={value as boolean}
                    onChange={onChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={label}
              />
              <FormHelperText>{error ? error.message || ' ' : helperText || ' '}</FormHelperText>
            </FormGroup>
          </FormControl>
        )}
      />
    </Grid>
  )
}

export type FormInputCheckboxProps = {
  formControlProps?: FormControlProps
  checkboxProps?: CheckboxProps
  helperText?: string
}
type Props<TData> = FormInputProps<TData> & FormInputCheckboxProps
