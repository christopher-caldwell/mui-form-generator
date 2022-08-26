import { useContext } from 'react'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Typography,
  GridProps,
  CheckboxProps,
  TypographyProps
} from '@mui/material'
import { Controller, useWatch } from 'react-hook-form'

import { FormInputProps } from './shared'
import { MuiFormContext } from '@/providers'

export const FormInputMultiCheckbox = function <TData>({
  name,
  label,
  options,
  gridProps,
  globalCheckboxProps,
  globalGridProps,
  rules,
  helperText,
  subtitleProps = { variant: 'caption', sx: { color: ({ palette }) => palette.text.secondary } },
  titleProps = { variant: 'h6' }
}: Props<TData>) {
  const { control, setValue, getValues } = useContext(MuiFormContext)

  const selectedItems = getValues(name) as string[]
  useWatch({ control })
  const handleSelect = (value: string) => {
    const isPresent = selectedItems.indexOf(value)
    if (isPresent !== -1) {
      // Removing a check
      const remaining = selectedItems.filter(item => item !== value)
      //@ts-ignore
      setValue(name, remaining)
    } else {
      // Adding a check
      const newValues = [...selectedItems, value]
      //@ts-ignore
      setValue(name, newValues)
    }
  }

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
        render={() => (
          <>
            {options.map(({ label, value: checkboxValue, gridProps, checkboxProps }) => {
              // The `checkboxValue` can be omitted, if so use the label as the value
              const thisCheckboxValue = checkboxValue || label
              return (
                <Grid {...(gridProps || globalGridProps)} container item key={label + checkboxValue}>
                  <FormControl key={label}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...(checkboxProps || globalCheckboxProps)}
                          // TODO: Consider disabled
                          checked={selectedItems.includes(thisCheckboxValue)}
                          onChange={() => handleSelect(thisCheckboxValue)}
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

export type FormInputMultiCheckboxProps = {
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
type Props<TData> = FormInputProps<TData> & FormInputMultiCheckboxProps
