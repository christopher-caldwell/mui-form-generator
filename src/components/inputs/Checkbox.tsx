import { useContext } from 'react'
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  Grid,
  FormControlProps,
  CheckboxProps
} from '@mui/material'
import { Controller } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputCheckbox = function <TData>({
  name,
  label,
  formControlProps,
  checkboxProps,
  gridProps = { xs: 12 }
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)

  return (
    <Grid item {...gridProps}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl {...formControlProps} error={!!error}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    {...checkboxProps}
                    checked={value}
                    onChange={onChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={label}
              />
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
}
type Props<TData> = FormInputProps<TData> & FormInputCheckboxProps
