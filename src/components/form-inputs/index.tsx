import { TextFieldProps } from '@mui/material'

import { FormInputProps, FormInputSelect, FormInputText } from '@/components'

export const FormInput = function <TData>({ type, config }: Config<TData>) {
  switch (type) {
    case 'select': {
      const { options, control } = config as unknown as SelectConfig<TData>['config']
      return <FormInputSelect {...control} options={options} />
    }
    case 'text': {
      const { control } = config as unknown as TextConfig<TData>['config']
      return <FormInputText {...control} />
    }
    default:
      throw new Error(`Unsupported input type: ${type} given. Expected one of: 'text', 'select'`)
  }
}

interface SelectOption {
  label: string
  value: string
}
type SelectConfig<TData> = {
  type: 'select'
  config: {
    options: SelectOption[]
    inputProps?: TextFieldProps
    control: FormInputProps<TData>
  }
}
type TextConfig<TData> = {
  type: 'text'
  config: {
    inputProps?: TextFieldProps
    control: FormInputProps<TData>
  }
}

export type Config<TData> = TextConfig<TData> | SelectConfig<TData>
