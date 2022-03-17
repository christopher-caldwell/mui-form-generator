/// <reference types="react" />
import { FormInputProps, FormInputSelectProps, FormInputTextProps, FormInputRadioProps, FormInputCheckboxProps, FormInputCustomOverrideProps, FormInputSwitchProps, FormInputManyOptionSingleChoiceProps, FormInputMultiCheckboxProps } from '..';
export declare const FormInput: <TData>({ type, config }: Config<TData>) => JSX.Element;
declare type InputControl<TData> = {
    control: FormInputProps<TData>;
};
declare type SelectConfig<TData> = {
    type: 'select';
    config: InputControl<TData> & FormInputSelectProps;
};
declare type TextConfig<TData> = {
    type: 'text';
    config: InputControl<TData> & FormInputTextProps;
};
declare type RadioConfig<TData> = {
    type: 'radio';
    config: InputControl<TData> & FormInputRadioProps;
};
declare type CheckboxConfig<TData> = {
    type: 'checkbox';
    config: InputControl<TData> & FormInputCheckboxProps;
};
declare type CustomOverrideConfig<TData> = {
    type: 'custom';
    config: {
        control: FormInputCustomOverrideProps<TData>;
    };
};
declare type SwitchConfig<TData> = {
    type: 'switch';
    config: InputControl<TData> & FormInputSwitchProps;
};
declare type MultiCheckboxConfig<TData> = {
    type: 'multiCheckbox';
    config: InputControl<TData> & FormInputMultiCheckboxProps;
};
declare type ManyOptionSingleChoiceConfig<TData> = {
    type: 'manyOptionsSingleChoice';
    config: InputControl<TData> & FormInputManyOptionSingleChoiceProps;
};
export declare type Config<TData> = TextConfig<TData> | SelectConfig<TData> | RadioConfig<TData> | CheckboxConfig<TData> | CustomOverrideConfig<TData> | SwitchConfig<TData> | ManyOptionSingleChoiceConfig<TData> | MultiCheckboxConfig<TData>;
export {};
