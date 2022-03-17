/// <reference types="react" />
import { GridProps } from '@mui/material';
import { Path, ControllerRenderProps, ControllerFieldState, UseFormStateReturn } from 'react-hook-form';
import { FormInputProps } from './shared';
export declare const FormInputCustomOverride: <TData>({ name, children, rules, gridProps }: FormInputCustomOverrideProps<TData>) => JSX.Element;
export interface CustomOverrideRenderArgs<TData> {
    field: ControllerRenderProps<TData, Path<TData>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TData>;
}
export interface FormInputCustomOverrideProps<TData> {
    children: (options: CustomOverrideRenderArgs<TData>) => JSX.Element;
    name: FormInputProps<TData>['name'];
    rules?: FormInputProps<TData>['rules'];
    gridProps?: GridProps;
}
