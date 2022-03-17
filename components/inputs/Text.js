var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';
import { MuiFormContext } from '../../providers';
export var FormInputText = function (_a) {
    var name = _a.name, rules = _a.rules, label = _a.label, textFieldProps = _a.textFieldProps, _b = _a.gridProps, gridProps = _b === void 0 ? { xs: 12 } : _b;
    var control = useContext(MuiFormContext).control;
    return (_jsx(Grid, __assign({ item: true }, gridProps, { children: _jsx(Controller, { name: name, control: control, rules: rules, render: function (_a) {
                var _b = _a.field, onChange = _b.onChange, _c = _b.value, value = _c === void 0 ? '' : _c, onBlur = _b.onBlur, error = _a.fieldState.error;
                return (_jsx(TextField, __assign({}, textFieldProps, { 
                    // Making the helper text a constant prevents layout shift when messages appear
                    helperText: error ? error.message || ' ' : (textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.helperText) || ' ', error: !!error, onChange: onChange, value: value, fullWidth: true, label: label, onBlur: function (e) {
                        var _a;
                        (_a = textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(textFieldProps, e);
                        onBlur();
                    } }), void 0));
            } }, void 0) }), void 0));
};
//# sourceMappingURL=Text.js.map