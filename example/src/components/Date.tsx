import React, { FC } from 'react'
import AdapterDateFns from '@date-io/date-fns'
import { TextField } from '@mui/material'
import { LocalizationProvider, DateTimePicker } from '@mui/lab'
import { CustomOverrideRenderArgs } from '@caldwell619/mui-form-generator'

import { SomeObject } from '../Form'

export const FormInputDate: FC<CustomOverrideRenderArgs<SomeObject>> = ({
  field: { value, onChange },
  fieldState: { error }
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label='Pick a date'
        inputFormat='MM/dd/yyyy'
        value={value}
        onChange={onChange}
        renderInput={params => <TextField fullWidth {...params} error={!!error} />}
      />
    </LocalizationProvider>
  )
}
