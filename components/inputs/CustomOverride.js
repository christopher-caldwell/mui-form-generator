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
// import DateFnsUtils from '@date-io/date-fns'
import { Grid } from '@mui/material';
import { Controller } from 'react-hook-form';
import { MuiFormContext } from '../../providers';
export var FormInputCustomOverride = function (_a) {
    var name = _a.name, children = _a.children, rules = _a.rules, _b = _a.gridProps, gridProps = _b === void 0 ? { xs: 12 } : _b;
    var control = useContext(MuiFormContext).control;
    return (_jsx(Grid, __assign({ item: true }, gridProps, { children: _jsx(Controller, { rules: rules, name: name, control: control, render: children }, void 0) }), void 0));
};
//# sourceMappingURL=CustomOverride.js.map