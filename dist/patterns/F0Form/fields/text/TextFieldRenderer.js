import { jsx as m } from "react/jsx-runtime";
import i from "../../../../icons/app/Envelope.js";
import c from "../../../../icons/app/Link.js";
import "../../../../icons/app/Menu.js";
import { FORM_SIZE as u } from "../../constants.js";
import { F0TextInput as s } from "../../../../components/F0TextInput/F0TextInput.js";
const b = {
  email: "name@example.com"
}, d = {
  url: c,
  email: i
};
function v({
  field: e,
  formField: r,
  error: o,
  loading: a,
  status: l
}) {
  const t = e.inputType ?? "text", n = e.placeholder ?? b[t] ?? void 0, p = d[t];
  return /* @__PURE__ */ m(
    s,
    {
      ...r,
      label: e.label,
      type: t,
      placeholder: n,
      disabled: e.disabled,
      value: r.value != null ? String(r.value) : "",
      size: u,
      hideLabel: !0,
      error: o,
      status: l,
      loading: a,
      icon: p,
      clearable: e.clearable
    }
  );
}
export {
  v as TextFieldRenderer
};
