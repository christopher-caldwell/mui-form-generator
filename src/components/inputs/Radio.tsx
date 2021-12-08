import { useContext } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioProps,
  RadioGroupProps,
  Grid
} from '@mui/material'
import { Controller } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps, SelectOption } from './shared'

export const FormInputRadio = function <TData>({
  name,
  label,
  options,
  radioGroupProps,
  globalRadioProps,
  gridProps = { xs: 12 }
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)

  return (
    <Grid item {...gridProps}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl component='fieldset' error={!!error}>
            <FormLabel component='legend'>{label}</FormLabel>
            <RadioGroup {...radioGroupProps} value={value} onChange={onChange}>
              {options.map(option => (
                <FormControlLabel
                  key={option.label}
                  {...option}
                  control={<Radio {...globalRadioProps} {...option.radioProps} />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      />
    </Grid>
  )
}

/** Configuration specific to the RadioInput */
export type FormInputRadioProps = {
  options: (SelectOption & {
    /** Props that will be given to this specific Radio component. These will override the `globalRadioProps` if provided. */
    radioProps?: RadioProps
  })[]
  radioGroupProps?: RadioGroupProps
  /** Props that will be given to every Radio component */
  globalRadioProps?: RadioProps
}
type Props<TData> = FormInputProps<TData> & FormInputRadioProps
