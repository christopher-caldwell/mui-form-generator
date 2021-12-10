import {
  FormInputProps,
  FormInputSelect,
  FormInputSelectProps,
  FormInputText,
  FormInputTextProps,
  FormInputRadio,
  FormInputRadioProps,
  FormInputCheckbox,
  FormInputCheckboxProps,
  FormInputCustomOverride,
  FormInputCustomOverrideProps,
  FormInputSwitch,
  FormInputSwitchProps,
  FormInputManyOptionSingleChoice,
  FormInputManyOptionSingleChoiceProps,
  FormInputMultiCheckbox,
  FormInputMultiCheckboxProps
} from '@/components'

export const FormInput = function <TData>({ type, config }: Config<TData>) {
  switch (type) {
    case 'select': {
      const { control, ...restProps } = config as unknown as SelectConfig<TData>['config']
      return <FormInputSelect {...control} {...restProps} />
    }
    case 'text': {
      const { control, ...restProps } = config as unknown as TextConfig<TData>['config']
      return <FormInputText {...control} {...restProps} />
    }
    case 'radio': {
      const { control, ...restProps } = config as unknown as RadioConfig<TData>['config']
      return <FormInputRadio {...control} {...restProps} />
    }
    case 'checkbox': {
      const { control, ...restProps } = config as unknown as CheckboxConfig<TData>['config']
      return <FormInputCheckbox {...control} {...restProps} />
    }
    case 'custom': {
      const { control, ...restProps } = config as unknown as CustomOverrideConfig<TData>['config']
      return <FormInputCustomOverride {...restProps} {...control} />
    }
    case 'switch': {
      const { control, ...restProps } = config as unknown as SwitchConfig<TData>['config']
      return <FormInputSwitch {...control} {...restProps} />
    }
    case 'manyOptionsSingleChoice': {
      const { control, ...restProps } = config as unknown as ManyOptionSingleChoiceConfig<TData>['config']
      return <FormInputManyOptionSingleChoice {...control} {...restProps} />
    }
    case 'multiCheckbox': {
      const { control, ...restProps } = config as unknown as MultiCheckboxConfig<TData>['config']
      return <FormInputMultiCheckbox {...control} {...restProps} />
    }
    default:
      throw new Error(
        `Unsupported input type: ${type} given. Expected one of: 'text', 'select', 'radio', 'custom', 'switch', 'checkbox', 'manyOptionsSingleChoice`
      )
  }
}
type InputControl<TData> = {
  control: FormInputProps<TData>
}
type SelectConfig<TData> = {
  type: 'select'
  config: InputControl<TData> & FormInputSelectProps
}
type TextConfig<TData> = {
  type: 'text'
  config: InputControl<TData> & FormInputTextProps
}

type RadioConfig<TData> = {
  type: 'radio'
  config: InputControl<TData> & FormInputRadioProps
}

type CheckboxConfig<TData> = {
  type: 'checkbox'
  config: InputControl<TData> & FormInputCheckboxProps
}

type CustomOverrideConfig<TData> = {
  type: 'custom'
  config: {
    control: FormInputCustomOverrideProps<TData>
  }
}

type SwitchConfig<TData> = {
  type: 'switch'
  config: InputControl<TData> & FormInputSwitchProps
}

type MultiCheckboxConfig<TData> = {
  type: 'multiCheckbox'
  config: InputControl<TData> & FormInputMultiCheckboxProps
}

type ManyOptionSingleChoiceConfig<TData> = {
  type: 'manyOptionsSingleChoice'
  config: InputControl<TData> & FormInputManyOptionSingleChoiceProps
}

export type Config<TData> =
  | TextConfig<TData>
  | SelectConfig<TData>
  | RadioConfig<TData>
  | CheckboxConfig<TData>
  | CustomOverrideConfig<TData>
  | SwitchConfig<TData>
  | ManyOptionSingleChoiceConfig<TData>
  | MultiCheckboxConfig<TData>
