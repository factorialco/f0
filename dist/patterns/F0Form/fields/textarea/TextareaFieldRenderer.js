import { jsx as o } from "react/jsx-runtime";
import { FORM_SIZE as n } from "../../constants.js";
import { F0TextAreaInput as m } from "../../../../components/F0TextAreaInput/F0TextAreaInput.js";
function p({
  field: e,
  formField: a,
  error: r,
  loading: t,
  status: l
}) {
  return /* @__PURE__ */ o(
    m,
    {
      ...a,
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      rows: e.rows,
      maxLength: e.maxLength,
      maxHeight: e.maxHeight,
      value: a.value != null ? String(a.value) : "",
      size: n,
      hideLabel: !0,
      error: r,
      status: l,
      loading: t
    }
  );
}
export {
  p as TextareaFieldRenderer
};
