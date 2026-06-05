import { jsx as t, Fragment as m } from "react/jsx-runtime";
import { useOptionalF0FormContext as u } from "../../context.js";
function F({
  field: e,
  formField: o,
  error: s,
  isValidating: a,
  required: d
}) {
  const r = u()?.renderCustomField, n = {
    id: e.id,
    label: e.label,
    placeholder: e.placeholder,
    value: o.value,
    onChange: o.onChange,
    onBlur: o.onBlur,
    error: s,
    isValidating: a,
    disabled: e.disabled,
    required: d,
    config: e.fieldConfig
  };
  if (e.customFieldName) {
    if (!r)
      throw new Error(
        `Custom field "${e.id}" has customFieldName "${e.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      );
    return /* @__PURE__ */ t(m, { children: r({
      ...n,
      customFieldName: e.customFieldName,
      fieldType: "custom"
    }) });
  }
  if (!e.render)
    throw new Error(
      `Custom field "${e.id}" has neither a render function nor a customFieldName.`
    );
  return /* @__PURE__ */ t(m, { children: e.render(n) });
}
export {
  F as CustomFieldRenderer
};
