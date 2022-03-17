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
import { TextField, MenuItem, Grid } from '@mui/material';
import { MuiFormContext } from '../../providers';
export var FormInputSelect = function (_a) {
    var _b;
    var name = _a.name, label = _a.label, rules = _a.rules, options = _a.options, inputProps = _a.inputProps, _c = _a.gridProps, gridProps = _c === void 0 ? { xs: 12 } : _c;
    var control = useContext(MuiFormContext).control;
    var OptionsDisplay = ((_b = inputProps === null || inputProps === void 0 ? void 0 : inputProps.SelectProps) === null || _b === void 0 ? void 0 : _b.native)
        ? options.map(function (_a) {
            var value = _a.value, label = _a.label;
            return (_jsx("option", __assign({ value: value }, { children: label }), value));
        })
        : options.map(function (_a) {
            var value = _a.value, label = _a.label;
            return (_jsx(MenuItem, __assign({ value: value }, { children: label }), value));
        });
    return (_jsx(Grid, __assign({ item: true }, gridProps, { children: _jsx(Controller, { rules: rules, name: name, control: control, render: function (_a) {
                var _b = _a.field, onChange = _b.onChange, _c = _b.value, value = _c === void 0 ? '' : _c, onBlur = _b.onBlur, error = _a.fieldState.error;
                return (_jsx(TextField, __assign({}, inputProps, { select: true, fullWidth: true, onChange: onChange, value: value, label: label, error: !!error, helperText: error ? error.message || ' ' : (inputProps === null || inputProps === void 0 ? void 0 : inputProps.helperText) || ' ', onBlur: function (e) {
                        var _a;
                        (_a = inputProps === null || inputProps === void 0 ? void 0 : inputProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(inputProps, e);
                        onBlur();
                    } }, { children: OptionsDisplay }), void 0));
            } }, void 0) }), void 0));
};
//# sourceMappingURL=Select.js.map