/// <reference types="react" />
import { UseFormReturn, UseFormProps } from 'react-hook-form';
export declare const MuiFormContext: import("react").Context<MuiFormProviderContext<any>>;
export declare const MuiFormProvider: <TData>({ children, props }: Props<TData>) => JSX.Element;
declare type Props<TData> = {
    props: UseFormProps<TData>;
    children: JSX.Element;
};
declare type MuiFormProviderContext<TData> = UseFormReturn<TData>;
export {};
