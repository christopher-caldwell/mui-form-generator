/// <reference types="react" />
import { SwitchProps, FormGroupProps, FormControlLabelProps } from '@mui/material';
import { FormInputProps } from './shared';
export declare const FormInputSwitch: <TData>({ name, label, rules, switchProps, formGroupProps, formControlLabelProps, helperText, gridProps }: Props<TData>) => JSX.Element;
/** Configuration specific to the RadioInput */
export declare type FormInputSwitchProps = {
    switchProps?: SwitchProps;
    formGroupProps?: FormGroupProps;
    formControlLabelProps?: FormControlLabelProps;
    helperText?: string;
};
declare type Props<TData> = FormInputProps<TData> & FormInputSwitchProps;
export {};
