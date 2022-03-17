import { TextFieldProps } from '@mui/material';
import { FormInputProps, SelectOption } from './shared';
export declare const FormInputSelect: <TData>({ name, label, rules, options, inputProps, gridProps }: Props<TData>) => JSX.Element;
export declare type FormInputSelectProps = {
    options: SelectOption[];
    inputProps?: TextFieldProps;
};
declare type Props<TData> = FormInputProps<TData> & FormInputSelectProps;
export {};
