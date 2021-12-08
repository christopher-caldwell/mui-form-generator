import { FC, useContext } from 'react'
import { MuiForm, Config, MuiFormContext } from '@caldwell619/mui-form-generator'
import { Button } from '@mui/material'
import { UseFormReturn } from 'react-hook-form'
import { diff } from 'deep-object-diff'

export const defaultValues: SomeObject = {
  one: 'Rex',
  two: 'Cody',
  three: 'Wolffe'
}

const inputs: Config<SomeObject>[] = [
  {
    type: 'text',
    config: {
      control: {
        name: 'one',
        label: 'One'
      }
    }
  },
  {
    type: 'text',
    config: {
      control: {
        name: 'two',
        label: 'Two'
      }
    }
  }
]

export const Form: FC = () => {
  const { handleSubmit } = useContext<UseFormReturn<SomeObject>>(MuiFormContext)
  const onSubmit = (data: SomeObject) => {
    // Here you can do a diff to get what was updated - or whatever you wish to do.
    const patchDiff = diff(defaultValues, data)
    console.log('the difference between default and the inputs is:', patchDiff)
  }
  return (
    <form>
      <MuiForm inputs={inputs} gridSpacing={5} />
      <Button variant='outlined' onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </form>
  )
}

export interface SomeObject {
  one: string
  two: string
  three: string
}
