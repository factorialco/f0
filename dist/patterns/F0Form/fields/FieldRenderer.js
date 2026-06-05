import { jsx as o, jsxs as y, Fragment as w } from "react/jsx-runtime";
import { useRef as L, useEffect as V } from "react";
import { useFormContext as D } from "../../../node_modules/.pnpm/react-hook-form@7.54.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.js";
import { useI18n as S } from "../../../lib/providers/i18n/i18n-provider.js";
import { FormField as f, FormItem as R, FormControl as T, FormDescription as j, FormMessage as A } from "../../../ui/form.js";
import { InputMessages as M } from "../../../components/F0InputField/components/InputMessages.js";
import { useF0FormContext as _, generateAnchorId as q } from "../context.js";
import { renderFieldInput as I } from "./renderFieldInput.js";
import { isFieldRequired as B } from "./schema.js";
import { evaluateDisabled as E, evaluateRenderIf as O } from "./utils.js";
import { F0Alert as $ } from "../../../components/F0Alert/F0Alert.js";
import { F0Link as P } from "../../../components/F0Link/F0Link.js";
function z(t) {
  return t != null && typeof t == "object" && "_type" in t && t._type === "select-config";
}
function G({
  field: t,
  formField: r,
  fieldState: e,
  isSubmitting: n,
  isRequired: a,
  values: m,
  isFormLoading: c,
  renderCustomField: u
}) {
  if (t.customFieldName && t.type !== "custom") {
    if (!u)
      throw new Error(
        `Field "${t.id}" has customFieldName "${t.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      );
    const s = u({
      id: t.id,
      label: t.label,
      placeholder: t.placeholder,
      value: r.value,
      onChange: r.onChange,
      onBlur: r.onBlur,
      error: void 0,
      isValidating: e.isValidating,
      disabled: typeof t.disabled == "boolean" ? t.disabled : void 0,
      required: a,
      customFieldName: t.customFieldName,
      config: void 0,
      fieldType: t.type
    });
    if (z(s)) {
      const i = { ...t, ...s, type: "select" };
      return I({
        field: i,
        formField: r,
        fieldState: e,
        fieldStatus: t.status,
        isSubmitting: n,
        isRequired: a,
        values: m,
        isFormLoading: c
      });
    }
    return /* @__PURE__ */ o(w, { children: s });
  }
  return I({
    field: t,
    formField: r,
    fieldState: e,
    fieldStatus: t.status,
    isSubmitting: n,
    isRequired: a,
    values: m,
    isFormLoading: c
  });
}
function rt({ field: t, sectionId: r }) {
  const e = D(), n = e.watch(), { isSubmitting: a } = e.formState, {
    formName: m,
    isLoading: c,
    renderCustomField: u,
    submitConfig: s
  } = _(), { forms: i } = S(), b = s?.type === "autosubmit", x = b ? !1 : a, l = E(t.disabled, n), g = L(l);
  V(() => {
    const d = g.current;
    if (g.current = l, !d && l && t.resetOnDisable) {
      const p = e.formState.defaultValues?.[t.id];
      e.setValue(t.id, p, { shouldValidate: !1 });
    }
  }, [l, t.resetOnDisable, t.id, e]);
  const N = !t.renderIf || O(t.renderIf, n), k = t.type !== "checkbox" && t.type !== "custom" && !(t.type === "cardSelect" && t.hideLabel), v = t.type !== "custom", h = t.validation && B(t.validation, t.type), C = q(m, r, t.id);
  return N ? /* @__PURE__ */ o(
    f,
    {
      control: e.control,
      name: t.id,
      ...b ? { disabled: !1 } : {},
      render: ({ field: d, fieldState: p }) => /* @__PURE__ */ y(R, { id: C, className: "scroll-mt-4", children: [
        k && /* @__PURE__ */ y(
          "label",
          {
            htmlFor: t.id,
            className: "text-base font-medium leading-normal text-f1-foreground-secondary",
            children: [
              t.label,
              h && /* @__PURE__ */ o("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ o(T, { children: G({
          field: t,
          formField: d,
          fieldState: p,
          isSubmitting: x,
          isRequired: h,
          values: n,
          isFormLoading: c,
          renderCustomField: u
        }) }),
        t.helpText && /* @__PURE__ */ o(j, { children: t.helpText }),
        "moreInfoLink" in t && t.moreInfoLink && /* @__PURE__ */ o(
          P,
          {
            href: t.moreInfoLink.href,
            target: "_blank",
            variant: "link",
            children: t.moreInfoLink.label ?? i.moreInformation
          }
        ),
        (() => {
          if (!t.alert) return null;
          const F = typeof t.alert == "function" ? t.alert({ fieldValue: d.value, values: n }) : t.alert;
          return F ? /* @__PURE__ */ o($, { ...F, variant: F.variant ?? "info" }) : null;
        })(),
        v && !p.error && /* @__PURE__ */ o(M, { status: t.status }),
        v && /* @__PURE__ */ o(
          A,
          {
            fallback: h ? i.validation.required : i.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ o(
    f,
    {
      control: e.control,
      name: t.id,
      ...b ? { disabled: !1 } : {},
      render: () => /* @__PURE__ */ o("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
export {
  rt as FieldRenderer
};
