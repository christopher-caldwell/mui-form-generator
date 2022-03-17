/// <reference types="react" />
import { TypographyProps, CheckboxProps, GridProps } from '@mui/material';
import { FormInputProps } from './shared';
export declare const FormInputManyOptionSingleChoice: <TData>({ name, label, rules, options, gridProps, globalGridProps, globalCheckboxProps, helperText, subtitleProps, titleProps }: Props<TData>) => JSX.Element;
export declare type FormInputManyOptionSingleChoiceProps = {
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
declare type Props<TData> = FormInputProps<TData> & FormInputManyOptionSingleChoiceProps;
export {};
