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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { FormGroup, FormControlLabel, FormControl, Checkbox, Grid, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import { MuiFormContext } from '../../providers';
export var FormInputCheckbox = function (_a) {
    var name = _a.name, label = _a.label, rules = _a.rules, formControlProps = _a.formControlProps, checkboxProps = _a.checkboxProps, helperText = _a.helperText, _b = _a.gridProps, gridProps = _b === void 0 ? { xs: 12 } : _b;
    var control = useContext(MuiFormContext).control;
    return (_jsx(Grid, __assign({ item: true }, gridProps, { children: _jsx(Controller, { name: name, control: control, rules: rules, render: function (_a) {
                var _b = _a.field, onChange = _b.onChange, _c = _b.value, value = _c === void 0 ? false : _c, error = _a.fieldState.error;
                return (_jsx(FormControl, __assign({}, formControlProps, { error: !!error }, { children: _jsxs(FormGroup, { children: [_jsx(FormControlLabel, { control: _jsx(Checkbox, __assign({}, checkboxProps, { checked: value, onChange: onChange, inputProps: { 'aria-label': 'controlled' } }), void 0), label: label }, void 0), _jsx(FormHelperText, { children: error ? error.message || ' ' : helperText || ' ' }, void 0)] }, void 0) }), void 0));
            } }, void 0) }), void 0));
};
//# sourceMappingURL=Checkbox.js.map