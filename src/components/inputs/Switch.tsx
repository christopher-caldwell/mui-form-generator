import { useContext } from 'react'
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Grid,
  SwitchProps,
  FormGroupProps,
  FormControlLabelProps,
  FormHelperText
} from '@mui/material'
import { Controller } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputSwitch = function <TData>({
  name,
  label,
  rules,
  switchProps,
  formGroupProps,
  formControlLabelProps,
  helperText,
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
          <FormGroup {...formGroupProps}>
            <FormControlLabel
              {...formControlLabelProps}
              control={
                <Switch
                  {...switchProps}
                  checked={value as boolean}
                  onChange={onChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={label}
            />
            <FormHelperText>{error ? error.message || ' ' : helperText || ' '}</FormHelperText>
          </FormGroup>
        )}
      />
    </Grid>
  )
}

/** Configuration specific to the RadioInput */
export type FormInputSwitchProps = {
  switchProps?: SwitchProps
  formGroupProps?: FormGroupProps
  formControlLabelProps?: FormControlLabelProps
  helperText?: string
}
type Props<TData> = FormInputProps<TData> & FormInputSwitchProps
