import { jsx as i, jsxs as x } from "react/jsx-runtime";
import { Root as I } from "../node_modules/.pnpm/@radix-ui_react-slot@1.2.3_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.js";
import * as m from "react";
import { FormProvider as g, useFormContext as f, Controller as b } from "../node_modules/.pnpm/react-hook-form@7.54.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.js";
import { F0Icon as C } from "../components/F0Icon/index.js";
import v from "../icons/app/AlertCircle.js";
import "../icons/app/Menu.js";
import { useI18n as y } from "../lib/providers/i18n/i18n-provider.js";
import { cn as a } from "../lib/utils.js";
import { Label as N } from "./label.js";
const z = g, l = m.createContext(
  {}
), A = ({
  ...e
}) => {
  const { formState: r } = f();
  return /* @__PURE__ */ i(l.Provider, { value: { name: e.name }, children: /* @__PURE__ */ i(
    b,
    {
      ...e,
      disabled: e.disabled ?? r.isSubmitting
    }
  ) });
}, d = () => {
  const e = m.useContext(l), r = m.useContext(F), { getFieldState: o, formState: t } = f(), n = o(e.name, t);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = r;
  return {
    id: s,
    name: e.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...n
  };
}, F = m.createContext(
  {}
), w = m.forwardRef(({ className: e, ...r }, o) => {
  const t = m.useId();
  return /* @__PURE__ */ i(F.Provider, { value: { id: t }, children: /* @__PURE__ */ i("div", { ref: o, className: a("space-y-2", e), ...r }) });
});
w.displayName = "FormItem";
const h = m.forwardRef(({ className: e, ...r }, o) => {
  const { error: t, formItemId: n } = d();
  return /* @__PURE__ */ i(
    N,
    {
      ref: o,
      className: a(t && "text-f1-foreground-critical", e),
      htmlFor: n,
      ...r
    }
  );
});
h.displayName = "FormLabel";
const R = m.forwardRef(({ ...e }, r) => {
  const { error: o, formItemId: t, formDescriptionId: n, formMessageId: s } = d();
  return /* @__PURE__ */ i(
    I,
    {
      ref: r,
      id: t,
      "aria-describedby": o ? `${n} ${s}` : `${n}`,
      "aria-invalid": !!o,
      ...e
    }
  );
});
R.displayName = "FormControl";
const S = m.forwardRef(({ className: e, ...r }, o) => {
  const { formDescriptionId: t } = d();
  return /* @__PURE__ */ i(
    "p",
    {
      ref: o,
      id: t,
      className: a("text-base text-f1-foreground-secondary", e),
      ...r
    }
  );
});
S.displayName = "FormDescription";
const $ = m.forwardRef(
  ({ className: e, children: r, fallback: o, ...t }, n) => {
    const { error: s, formMessageId: u } = d(), { forms: p } = y(), c = s ? s.message ?? o ?? p.validation.invalidType : r;
    return c ? /* @__PURE__ */ x(
      "div",
      {
        ref: n,
        id: u,
        className: a("flex gap-1", e),
        ...t,
        children: [
          /* @__PURE__ */ i(C, { icon: v, color: "critical" }),
          /* @__PURE__ */ i("span", { className: "text-base font-medium text-f1-foreground-critical", children: c })
        ]
      }
    ) : null;
  }
);
$.displayName = "FormMessage";
export {
  z as Form,
  R as FormControl,
  S as FormDescription,
  A as FormField,
  w as FormItem,
  h as FormLabel,
  $ as FormMessage,
  d as useFormField
};
