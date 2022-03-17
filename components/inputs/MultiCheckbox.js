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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, Grid, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { MuiFormContext } from '../../providers';
export var FormInputMultiCheckbox = function (_a) {
    var name = _a.name, label = _a.label, options = _a.options, gridProps = _a.gridProps, globalCheckboxProps = _a.globalCheckboxProps, globalGridProps = _a.globalGridProps, rules = _a.rules, helperText = _a.helperText, _b = _a.subtitleProps, subtitleProps = _b === void 0 ? { variant: 'caption', sx: { color: function (_a) {
                var palette = _a.palette;
                return palette.text.secondary;
            } } } : _b, _c = _a.titleProps, titleProps = _c === void 0 ? { variant: 'h6' } : _c;
    // if (!setValue) throw new Error('when using Multi Checkbox, you must provide `setValue`.')
    var _d = useContext(MuiFormContext), control = _d.control, setValue = _d.setValue;
    var _e = useState([]), selectedItems = _e[0], setSelectedItems = _e[1];
    var handleSelect = function (value) {
        var isPresent = selectedItems.indexOf(value);
        if (isPresent !== -1) {
            var remaining = selectedItems.filter(function (item) { return item !== value; });
            setSelectedItems(remaining);
        }
        else {
            setSelectedItems(function (prevItems) { return __spreadArray(__spreadArray([], prevItems, true), [value], false); });
        }
    };
    useEffect(function () {
        //@ts-ignore
        setValue(name, selectedItems);
    }, [selectedItems, name, setValue]);
    return (_jsxs(Grid, __assign({}, gridProps, { item: true, container: true, sx: { paddingBottom: function (_a) {
                var spacing = _a.spacing;
                return spacing(2);
            } } }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12 }, { children: [_jsx(Typography, __assign({}, titleProps, { children: label }), void 0), _jsx(Typography, __assign({}, subtitleProps, { children: helperText }), void 0)] }), void 0), _jsx(Controller, { name: name, control: control, rules: rules, render: function () { return (_jsx(_Fragment, { children: options.map(function (_a) {
                        var label = _a.label, checkboxValue = _a.value, gridProps = _a.gridProps, checkboxProps = _a.checkboxProps;
                        // The `checkboxLabel` can be omitted, if so use the label as the value
                        var thisCheckboxValue = checkboxValue || label;
                        return (_createElement(Grid, __assign({}, (gridProps || globalGridProps), { container: true, item: true, key: label + checkboxValue }),
                            _jsx(FormControl, { children: _jsx(FormControlLabel, { control: _jsx(Checkbox, __assign({}, (checkboxProps || globalCheckboxProps), { 
                                        // TODO: Consider disabled
                                        checked: selectedItems.includes(thisCheckboxValue), onChange: function () { return handleSelect(thisCheckboxValue); } }), void 0), label: label }, void 0) }, label)));
                    }) }, void 0)); } }, void 0)] }), void 0));
};
//# sourceMappingURL=MultiCheckbox.js.map