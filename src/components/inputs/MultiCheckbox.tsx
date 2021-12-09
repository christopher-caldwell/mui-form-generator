import { useContext, useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { Controller } from 'react-hook-form'

import { MuiFormContext } from '@/providers'
import { FormInputProps } from './shared'

const options = [
  {
    label: 'Checkbox Option 1',
    value: '1'
  },
  {
    label: 'Checkbox Option 2',
    value: '2'
  }
]

// Incomplete - TODO
export const FormInputMultiCheckbox = function <TData>({ name, label }: FormInputProps<TData>) {
  const { control } = useContext(MuiFormContext)

  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSelect = (value: string) => {
    const isPresent = selectedItems.indexOf(value)
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: string) => item !== value)
      setSelectedItems(remaining)
    } else {
      setSelectedItems(prevItems => [...prevItems, value])
    }
  }

  // useEffect(() => {
  //   setValue?.(name, selectedItems)
  // }, [selectedItems])

  return (
    <FormControl size={'small'} variant={'outlined'}>
      <FormLabel component='legend'>{label}</FormLabel>

      <div>
        {options.map(option => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({}) => {
                    return (
                      <Checkbox
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    )
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          )
        })}
      </div>
    </FormControl>
  )
}
