import { GridProps, Grid } from '@mui/material'

import { FormInput, Config } from '@/components'

export const MuiForm = function <TData>({ inputs, gridSpacing = 1 }: Props<TData>) {
  return (
    <Grid container spacing={gridSpacing}>
      {inputs.map(input => (
        <FormInput {...input} />
      ))}
    </Grid>
  )
}

export interface Props<TData> {
  gridSpacing?: GridProps['spacing']
  inputs: Config<TData>[]
}
