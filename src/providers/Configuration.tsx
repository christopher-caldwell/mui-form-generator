import { createContext } from 'react'
import { UseFormReturn, useForm, UnpackNestedValue, DeepPartial } from 'react-hook-form'

export const MuiFormContext = createContext<MuiFormProviderContext<any>>({} as MuiFormProviderContext<any>)
export const MuiFormProvider = function <TData>({ children, defaultValues }: Props<TData>) {
  const useFormResult = useForm<TData>({
    defaultValues
  })

  return <MuiFormContext.Provider value={useFormResult}>{children}</MuiFormContext.Provider>
}

type Props<TData> = {
  defaultValues: UnpackNestedValue<DeepPartial<TData>>
  children: JSX.Element
}

type MuiFormProviderContext<TData> = UseFormReturn<TData>
