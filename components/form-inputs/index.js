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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { FormInputSelect, FormInputText, FormInputRadio, FormInputCheckbox, FormInputCustomOverride, FormInputSwitch, FormInputManyOptionSingleChoice, FormInputMultiCheckbox } from '..';
export var FormInput = function (_a) {
    var type = _a.type, config = _a.config;
    switch (type) {
        case 'select': {
            var _b = config, control = _b.control, restProps = __rest(_b, ["control"]);
            return _jsx(FormInputSelect, __assign({}, control, restProps), void 0);
        }
        case 'text': {
            var _c = config, control = _c.control, restProps = __rest(_c, ["control"]);
            return _jsx(FormInputText, __assign({}, control, restProps), void 0);
        }
        case 'radio': {
            var _d = config, control = _d.control, restProps = __rest(_d, ["control"]);
            return _jsx(FormInputRadio, __assign({}, control, restProps), void 0);
        }
        case 'checkbox': {
            var _e = config, control = _e.control, restProps = __rest(_e, ["control"]);
            return _jsx(FormInputCheckbox, __assign({}, control, restProps), void 0);
        }
        case 'custom': {
            var _f = config, control = _f.control, restProps = __rest(_f, ["control"]);
            return _jsx(FormInputCustomOverride, __assign({}, restProps, control), void 0);
        }
        case 'switch': {
            var _g = config, control = _g.control, restProps = __rest(_g, ["control"]);
            return _jsx(FormInputSwitch, __assign({}, control, restProps), void 0);
        }
        case 'manyOptionsSingleChoice': {
            var _h = config, control = _h.control, restProps = __rest(_h, ["control"]);
            return _jsx(FormInputManyOptionSingleChoice, __assign({}, control, restProps), void 0);
        }
        case 'multiCheckbox': {
            var _j = config, control = _j.control, restProps = __rest(_j, ["control"]);
            return _jsx(FormInputMultiCheckbox, __assign({}, control, restProps), void 0);
        }
        default:
            throw new Error("Unsupported input type: " + type + " given. Expected one of: 'text', 'select', 'radio', 'custom', 'switch', 'checkbox', 'manyOptionsSingleChoice");
    }
};
//# sourceMappingURL=index.js.map