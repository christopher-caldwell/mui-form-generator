import { TextFieldProps } from '@mui/material';
import { FormInputProps } from './shared';
export declare const FormInputText: <TData>({ name, rules, label, textFieldProps, gridProps }: Props<TData>) => JSX.Element;
export declare type FormInputTextProps = {
    textFieldProps?: TextFieldProps;
};
declare type Props<TData> = FormInputProps<TData> & FormInputTextProps;
export {};
