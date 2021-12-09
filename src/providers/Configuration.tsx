import { createContext } from 'react'
import { UseFormReturn, useForm, UseFormProps } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MuiFormContext = createContext<MuiFormProviderContext<any>>({} as MuiFormProviderContext<any>)
export const MuiFormProvider = function <TData>({ children, props }: Props<TData>) {
  const useFormResult = useForm<TData>(props)

  return <MuiFormContext.Provider value={useFormResult}>{children}</MuiFormContext.Provider>
}

type Props<TData> = {
  props: UseFormProps<TData>
  children: JSX.Element
}

type MuiFormProviderContext<TData> = UseFormReturn<TData>
