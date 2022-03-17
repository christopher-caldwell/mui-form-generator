/// <reference types="react" />
import { GridProps, CheckboxProps, TypographyProps } from '@mui/material';
import { FormInputProps } from './shared';
export declare const FormInputMultiCheckbox: <TData>({ name, label, options, gridProps, globalCheckboxProps, globalGridProps, rules, helperText, subtitleProps, titleProps }: Props<TData>) => JSX.Element;
export declare type FormInputMultiCheckboxProps = {
    options: {
        label: string;
        /** If provided, this will be the value set to the `name` key. If left out, the `label` will be used. */
        value?: string;
        gridProps?: GridProps;
        checkboxProps?: CheckboxProps;
    }[];
    /** Checkbox props given to each option, if the specific `checkboxProps` is omitted from the indiviual option */
    globalCheckboxProps?: CheckboxProps;
    /** Grid props given to each option, if the specific `gridProps` is omitted from the indiviual option */
    globalGridProps?: GridProps;
    helperText?: string;
    titleProps?: TypographyProps;
    subtitleProps?: TypographyProps;
};
declare type Props<TData> = FormInputProps<TData> & FormInputMultiCheckboxProps;
export {};
