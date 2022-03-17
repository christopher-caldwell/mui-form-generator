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
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from 'react';
import { Checkbox, FormControl, FormControlLabel, Grid, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { MuiFormContext } from '../../providers';
export var FormInputManyOptionSingleChoice = function (_a) {
    var name = _a.name, label = _a.label, rules = _a.rules, options = _a.options, _b = _a.gridProps, gridProps = _b === void 0 ? { xs: 12 } : _b, _c = _a.globalGridProps, globalGridProps = _c === void 0 ? { xs: 12 } : _c, globalCheckboxProps = _a.globalCheckboxProps, helperText = _a.helperText, _d = _a.subtitleProps, subtitleProps = _d === void 0 ? { variant: 'caption', sx: { color: function (_a) {
                var palette = _a.palette;
                return palette.text.secondary;
            } } } : _d, _e = _a.titleProps, titleProps = _e === void 0 ? { variant: 'h6' } : _e;
    var control = useContext(MuiFormContext).control;
    return (_jsxs(Grid, __assign({}, gridProps, { item: true, container: true, sx: { paddingBottom: function (_a) {
                var spacing = _a.spacing;
                return spacing(2);
            } } }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12 }, { children: [_jsx(Typography, __assign({}, titleProps, { children: label }), void 0), _jsx(Typography, __assign({}, subtitleProps, { children: helperText }), void 0)] }), void 0), _jsx(Controller, { name: name, control: control, rules: rules, render: function (_a) {
                    var _b = _a.field, valueFromFormControl = _b.value, onChange = _b.onChange;
                    return (_jsx(_Fragment, { children: options.map(function (_a) {
                            var label = _a.label, checkboxValue = _a.value, gridProps = _a.gridProps, checkboxProps = _a.checkboxProps;
                            // The `checkboxLabel` can be omitted, if so use the label as the value
                            var thisCheckboxValue = checkboxValue || label;
                            return (_createElement(Grid, __assign({}, (gridProps || globalGridProps), { container: true, item: true, key: label + checkboxValue }),
                                _jsx(FormControl, { children: _jsx(FormControlLabel, { control: _jsx(Checkbox, __assign({}, (checkboxProps || globalCheckboxProps), { disabled: !!valueFromFormControl && thisCheckboxValue !== valueFromFormControl, checked: thisCheckboxValue === valueFromFormControl, onChange: function (_a) {
                                                var checked = _a.target.checked;
                                                return onChange(checked ? checkboxValue || label : undefined);
                                            } }), void 0), label: label }, void 0) }, label)));
                        }) }, void 0));
                } }, void 0)] }), void 0));
};
//# sourceMappingURL=ManyOptionSingleChoice.js.map