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
import { Grid } from '@mui/material';
import { FormInput } from '../components';
export var MuiForm = function (_a) {
    var inputs = _a.inputs, _b = _a.gridSpacing, gridSpacing = _b === void 0 ? 1 : _b;
    return (_jsx(Grid, __assign({ container: true, spacing: gridSpacing }, { children: inputs.map(function (input) { return (_jsx(FormInput, __assign({}, input), input.config.control.name)); }) }), void 0));
};
//# sourceMappingURL=MuiForm.js.map