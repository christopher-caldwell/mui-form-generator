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
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Grid } from '@mui/material';
import { Controller } from 'react-hook-form';
import { MuiFormContext } from '../../providers';
export var FormInputRadio = function (_a) {
    var name = _a.name, label = _a.label, rules = _a.rules, options = _a.options, radioGroupProps = _a.radioGroupProps, globalRadioProps = _a.globalRadioProps, helperText = _a.helperText, _b = _a.gridProps, gridProps = _b === void 0 ? { xs: 12 } : _b;
    var control = useContext(MuiFormContext).control;
    return (_jsx(Grid, __assign({ item: true }, gridProps, { children: _jsx(Controller, { name: name, rules: rules, control: control, render: function (_a) {
                var _b = _a.field, onChange = _b.onChange, _c = _b.value, value = _c === void 0 ? '' : _c, error = _a.fieldState.error;
                return (_jsxs(FormControl, __assign({ component: 'fieldset', error: !!error }, { children: [_jsx(FormLabel, __assign({ component: 'legend' }, { children: label }), void 0), _jsx(RadioGroup, __assign({}, radioGroupProps, { value: value, onChange: onChange }, { children: options.map(function (option) { return (_jsx(FormControlLabel, __assign({}, option, { control: _jsx(Radio, __assign({}, globalRadioProps, option.radioProps), void 0) }), option.label)); }) }), void 0), _jsx(FormHelperText, { children: error ? error.message || ' ' : helperText || ' ' }, void 0)] }), void 0));
            } }, void 0) }), void 0));
};
//# sourceMappingURL=Radio.js.map