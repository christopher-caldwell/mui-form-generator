import { FormControlProps, CheckboxProps } from '@mui/material';
import { FormInputProps } from './shared';
export declare const FormInputCheckbox: <TData>({ name, label, rules, formControlProps, checkboxProps, helperText, gridProps }: Props<TData>) => JSX.Element;
export declare type FormInputCheckboxProps = {
    formControlProps?: FormControlProps;
    checkboxProps?: CheckboxProps;
    helperText?: string;
};
declare type Props<TData> = FormInputProps<TData> & FormInputCheckboxProps;
export {};
