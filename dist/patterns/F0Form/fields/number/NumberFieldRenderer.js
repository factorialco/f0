import { jsx as t } from "react/jsx-runtime";
import { FORM_SIZE as u } from "../../constants.js";
import { F0NumberInput as o } from "../../../../components/F0NumberInput/F0NumberInput.js";
function p({
  field: e,
  formField: a,
  error: n,
  loading: r,
  status: l
}) {
  return /* @__PURE__ */ t(
    o,
    {
      ...a,
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      step: e.step,
      min: e.min,
      max: e.max,
      maxDecimals: e.maxDecimals,
      units: e.units,
      locale: e.locale ?? "en-US",
      value: a.value != null ? Number(a.value) : void 0,
      onChange: (m) => a.onChange(m),
      size: u,
      hideLabel: !0,
      hint: "",
      error: n,
      status: l,
      loading: r,
      clearable: e.clearable
    }
  );
}
export {
  p as NumberFieldRenderer
};
