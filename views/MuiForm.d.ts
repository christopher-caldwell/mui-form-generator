/// <reference types="react" />
import { GridProps } from '@mui/material';
import { Config } from '../components';
export declare const MuiForm: <TData>({ inputs, gridSpacing }: Props<TData>) => JSX.Element;
export interface Props<TData> {
    gridSpacing?: GridProps['spacing'];
    inputs: Config<TData>[];
}
