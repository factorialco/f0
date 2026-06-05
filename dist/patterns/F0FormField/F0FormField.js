import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { useId as N } from "react";
import { InputMessages as I } from "../../components/F0InputField/components/InputMessages.js";
import { renderFieldInput as S } from "../F0Form/fields/renderFieldInput.js";
import { isFieldRequired as j } from "../F0Form/fields/schema.js";
function q({
  field: e,
  value: m,
  onChange: c,
  onBlur: d,
  error: s,
  errorMessage: i,
  status: t,
  loading: p,
  required: u,
  disabled: r,
  hideLabel: F,
  initialFiles: f
}) {
  const x = N(), a = u ?? (e.validation ? j(e.validation) : !1), h = !F && e.type !== "checkbox" && e.type !== "custom", y = {
    value: m,
    onChange: c,
    onBlur: d ?? (() => {
    }),
    name: e.id,
    ref: () => {
    }
  }, g = {
    error: s || t?.type === "error" ? {
      type: "custom",
      message: i ?? t?.message
    } : void 0,
    isValidating: !!p
  }, n = s ? { type: "error", message: i } : t, v = r !== void 0 ? { ...e, disabled: r } : e, b = e.type === "file" ? f : void 0;
  return /* @__PURE__ */ l("div", { className: "space-y-2", id: x, children: [
    h && /* @__PURE__ */ l(
      "label",
      {
        htmlFor: e.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [
          e.label,
          a && /* @__PURE__ */ o("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
        ]
      }
    ),
    S({
      field: v,
      formField: y,
      fieldState: g,
      isSubmitting: !1,
      isRequired: a,
      values: {},
      initialFiles: b,
      fieldStatus: n
    }),
    e.helpText && /* @__PURE__ */ o("p", { className: "text-base text-f1-foreground-secondary", children: e.helpText }),
    /* @__PURE__ */ o(I, { status: n })
  ] });
}
q.displayName = "F0FormField";
export {
  q as F0FormField
};
