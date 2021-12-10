import { useContext } from 'react'
import {
  TypographyProps,
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  Grid,
  GridProps,
  Typography
} from '@mui/material'
import { Controller } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

export const FormInputManyOptionSingleChoice = function <TData>({
  name,
  label,
  rules,
  options,
  gridProps = { xs: 12 },
  globalGridProps = { xs: 12 },
  globalCheckboxProps,
  helperText,
  subtitleProps = { variant: 'caption', sx: { color: ({ palette }) => palette.text.secondary } },
  titleProps = { variant: 'h6' }
}: Props<TData>) {
  const { control } = useContext(MuiFormContext)
  return (
    <Grid {...gridProps} item container sx={{ paddingBottom: ({ spacing }) => spacing(2) }}>
      <Grid item xs={12}>
        <Typography {...titleProps}>{label}</Typography>
        <Typography {...subtitleProps}>{helperText}</Typography>
      </Grid>
      <Controller<TData>
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value: valueFromFormControl, onChange } }) => (
          <>
            {options.map(({ label, value: checkboxValue, gridProps, checkboxProps }) => {
              // The `checkboxLabel` can be omitted, if so use the label as the value
              const thisCheckboxValue = checkboxValue || label
              return (
                <Grid {...(gridProps || globalGridProps)} container item key={label + checkboxValue}>
                  <FormControl key={label}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...(checkboxProps || globalCheckboxProps)}
                          disabled={!!valueFromFormControl && thisCheckboxValue !== valueFromFormControl}
                          checked={thisCheckboxValue === valueFromFormControl}
                          onChange={({ target: { checked } }) => onChange(checked ? checkboxValue || label : undefined)}
                        />
                      }
                      label={label}
                    />
                  </FormControl>
                </Grid>
              )
            })}
          </>
        )}
      />
    </Grid>
  )
}

export type FormInputManyOptionSingleChoiceProps = {
  options: {
    label: string
    /** If provided, this will be the value set to the `name` key. If left out, the `label` will be used. */
    value?: string
    gridProps?: GridProps
    checkboxProps?: CheckboxProps
  }[]
  /** Checkbox props given to each option, if the specific `checkboxProps` is omitted from the indiviual option */
  globalCheckboxProps?: CheckboxProps
  /** Grid props given to each option, if the specific `gridProps` is omitted from the indiviual option */
  globalGridProps?: GridProps
  helperText?: string
  titleProps?: TypographyProps
  subtitleProps?: TypographyProps
}
type Props<TData> = FormInputProps<TData> & FormInputManyOptionSingleChoiceProps
