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
import { createContext } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var MuiFormContext = createContext({});
export var MuiFormProvider = function (_a) {
    var children = _a.children, props = _a.props;
    var useFormResult = useForm(props);
    return _jsx(MuiFormContext.Provider, __assign({ value: useFormResult }, { children: children }), void 0);
};
//# sourceMappingURL=Configuration.js.map