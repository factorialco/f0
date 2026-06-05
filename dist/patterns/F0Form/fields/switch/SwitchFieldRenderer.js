import { jsx as n } from "react/jsx-runtime";
import { Switch as i } from "../../../../experimental/Forms/Fields/Switch/index.js";
import { unwrapZodSchema as o, isZodType as a } from "../../f0Schema.js";
function u(e) {
  const r = o(e);
  return a(r, "ZodLiteral") && r._def.value === !0;
}
function h({
  field: e,
  formField: r
}) {
  const t = e.validation && u(e.validation);
  return /* @__PURE__ */ n(
    i,
    {
      ...r,
      title: e.label,
      disabled: e.disabled,
      required: t,
      checked: !!r.value,
      onCheckedChange: r.onChange,
      hideLabel: !0
    }
  );
}
export {
  h as SwitchFieldRenderer
};
