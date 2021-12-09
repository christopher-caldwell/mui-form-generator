import { useContext } from 'react'
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Grid,
  SwitchProps,
  FormGroupProps,
  FormControlLabelProps
} from '@mui/material'
import { Controller } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputSwitch = function <TData>({
  name,
  label,
  switchProps,
  formGroupProps,
  formControlLabelProps,
  gridProps = { xs: 12 }
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)

  return (
    <Grid item {...gridProps}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormGroup {...formGroupProps}>
            <FormControlLabel
              {...formControlLabelProps}
              control={
                <Switch
                  {...switchProps}
                  checked={value}
                  onChange={onChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={label}
            />
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
}
type Props<TData> = FormInputProps<TData> & FormInputSwitchProps
