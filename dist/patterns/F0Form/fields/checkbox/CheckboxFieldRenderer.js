import { jsx as r } from "react/jsx-runtime";
import { unwrapZodSchema as t, isZodType as a } from "../../f0Schema.js";
import { F0Checkbox as i } from "../../../../components/F0Checkbox/F0Checkbox.js";
function u(e) {
  const o = t(e);
  return a(o, "ZodLiteral") && o._def.value === !0;
}
function h({
  field: e,
  formField: o
}) {
  const n = e.validation && u(e.validation);
  return /* @__PURE__ */ r(
    i,
    {
      ...o,
      title: e.label,
      disabled: e.disabled,
      required: n,
      checked: !!o.value,
      onCheckedChange: o.onChange
    }
  );
}
export {
  h as CheckboxFieldRenderer
};
