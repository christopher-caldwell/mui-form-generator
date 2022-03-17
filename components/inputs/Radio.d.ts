import { RadioProps, RadioGroupProps } from '@mui/material';
import { FormInputProps, SelectOption } from './shared';
export declare const FormInputRadio: <TData>({ name, label, rules, options, radioGroupProps, globalRadioProps, helperText, gridProps }: Props<TData>) => JSX.Element;
/** Configuration specific to the RadioInput */
export declare type FormInputRadioProps = {
    options: (SelectOption & {
        /** Props that will be given to this specific Radio component. These will override the `globalRadioProps` if provided. */
        radioProps?: RadioProps;
    })[];
    radioGroupProps?: RadioGroupProps;
    /** Props that will be given to every Radio component */
    globalRadioProps?: RadioProps;
    helperText?: string;
};
declare type Props<TData> = FormInputProps<TData> & FormInputRadioProps;
export {};
