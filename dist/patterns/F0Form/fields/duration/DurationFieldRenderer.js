import { jsx as b } from "react/jsx-runtime";
import { F0DurationInput as d } from "../../../../components/F0DurationInput/index.js";
function y({
  field: e,
  formField: a,
  error: r,
  status: n,
  id: i,
  "aria-describedby": t,
  "aria-invalid": s
}) {
  const u = typeof a.value == "number" && Number.isFinite(a.value) ? a.value : 0, o = n ?? (r ? { type: "error" } : void 0);
  return /* @__PURE__ */ b(
    d,
    {
      id: i,
      "aria-describedby": t,
      "aria-invalid": s,
      label: e.label,
      hideLabel: !0,
      value: u,
      onChange: (l) => a.onChange(l),
      onBlur: a.onBlur,
      units: e.units,
      fields: e.fields,
      status: o,
      disabled: e.disabled,
      readonly: e.readonly,
      size: e.size
    }
  );
}
export {
  y as DurationFieldRenderer
};
