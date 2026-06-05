import { jsx as a, jsxs as y } from "react/jsx-runtime";
import { useMemo as c, useRef as E, useEffect as L } from "react";
import { useFormContext as Z } from "../../../node_modules/.pnpm/react-hook-form@7.54.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.js";
import { CardSelectableContainer as B } from "../../../components/CardSelectable/index.js";
import { useI18n as O } from "../../../lib/providers/i18n/i18n-provider.js";
import { FormField as P, FormItem as G, FormMessage as _ } from "../../../ui/form.js";
import { useF0FormContext as z, generateAnchorId as D } from "../context.js";
import { unwrapZodSchema as H, isZodType as J } from "../f0Schema.js";
import { CardSelectDepsContext as K } from "../fields/cardSelect/CardSelectDepsContext.js";
import { FieldRenderer as x } from "../fields/FieldRenderer.js";
import { evaluateRenderIf as Q, evaluateDisabled as U } from "../fields/utils.js";
import { RowRenderer as V } from "./RowRenderer.js";
import { F0Alert as W } from "../../../components/F0Alert/F0Alert.js";
function N(u) {
  const n = H(u);
  return J(n, "ZodLiteral") && n._def.value === !0;
}
function fe({
  fields: u,
  dependentFields: n,
  cardSelectDependentFields: v,
  sectionId: l
}) {
  const d = Z(), { formName: b } = z(), { watch: R, setValue: g } = d, { isSubmitting: S } = d.formState, i = R(), o = c(
    () => u.filter(
      (e) => !e.renderIf || Q(e.renderIf, i)
    ),
    [u, i]
  ), m = c(
    () => Object.fromEntries(
      o.map((e) => [
        e.id,
        U(e.disabled, i) || S
      ])
    ),
    [o, S, i]
  ), w = E({});
  L(() => {
    const e = w.current, t = d.formState.defaultValues ?? {};
    for (const r of o) {
      if (!(r.id in e))
        continue;
      const s = e[r.id], p = m[r.id] ?? !1;
      if (!s && p && r.resetOnDisable) {
        const h = t[r.id] ?? !1;
        g(r.id, h, { shouldValidate: !1 });
      }
    }
    w.current = { ...m };
  }, [m, o, d, g]);
  const F = c(
    () => o.map((e) => ({
      value: e.id,
      title: e.label,
      description: e.helpText,
      disabled: m[e.id] ?? !1,
      required: !!(e.validation && N(e.validation)),
      moreInfoLink: e.moreInfoLink,
      selectedContent: n?.has(e.id) ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-4", children: n.get(e.id).map((t) => {
        if ("type" in t && t.type === "row")
          return /* @__PURE__ */ a(
            V,
            {
              row: t,
              sectionId: l
            },
            t.fields.map((s) => s.id).join("-")
          );
        const r = t;
        if (r.type === "cardSelect" && v?.has(r.id)) {
          const s = v.get(r.id), p = /* @__PURE__ */ new Map();
          for (const [h, q] of s)
            p.set(
              h,
              /* @__PURE__ */ a("div", { className: "flex flex-col gap-4", children: q.map(
                (f) => "type" in f && f.type === "row" ? /* @__PURE__ */ a(
                  V,
                  {
                    row: f,
                    sectionId: l
                  },
                  f.fields.map((A) => A.id).join("-")
                ) : /* @__PURE__ */ a(
                  x,
                  {
                    field: f,
                    sectionId: l
                  },
                  f.id
                )
              ) }, h)
            );
          return /* @__PURE__ */ a(K.Provider, { value: p, children: /* @__PURE__ */ a(x, { field: r, sectionId: l }) }, r.id);
        }
        return /* @__PURE__ */ a(x, { field: r, sectionId: l }, r.id);
      }) }) : void 0
    })),
    [
      o,
      m,
      n,
      v,
      l
    ]
  ), M = c(
    () => o.filter((e) => i[e.id]).map((e) => e.id),
    [o, i]
  );
  if (o.length === 0)
    return null;
  const j = (e) => {
    for (const t of o) {
      const r = e.includes(t.id), s = !!i[t.id];
      r !== s && g(t.id, r, {
        shouldValidate: !0,
        shouldDirty: !0
      });
    }
  }, T = c(() => {
    const e = [];
    for (const t of o) {
      if (!t.alert) continue;
      const r = typeof t.alert == "function" ? t.alert({ fieldValue: i[t.id], values: i }) : t.alert;
      r && e.push({ fieldId: t.id, props: r });
    }
    return e;
  }, [o, i]), { forms: k } = O(), I = o.filter((e) => e.validation && N(e.validation)).map((e) => {
    const t = d.formState.errors[e.id];
    return t ? { fieldId: e.id, label: e.label, message: t.message } : null;
  }).filter(
    (e) => e !== null
  ), C = c(
    () => o.map((e) => ({
      fieldId: e.id,
      anchorId: D(b, l, e.id)
    })),
    [o, b, l]
  );
  return /* @__PURE__ */ y("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ y(
      "div",
      {
        id: C[0]?.anchorId,
        className: "flex scroll-mt-4 flex-col gap-4",
        children: [
          C.slice(1).map(({ fieldId: e, anchorId: t }) => /* @__PURE__ */ a("span", { id: t, className: "hidden" }, e)),
          /* @__PURE__ */ a(
            B,
            {
              multiple: !0,
              isToggle: !0,
              grouped: !0,
              items: F,
              value: M,
              onChange: j
            }
          ),
          T.map(({ fieldId: e, props: t }) => /* @__PURE__ */ a(W, { ...t, variant: t.variant ?? "info" }, e))
        ]
      }
    ),
    I.length > 0 && /* @__PURE__ */ a("div", { className: "flex flex-col gap-1", children: I.map((e) => /* @__PURE__ */ a(
      P,
      {
        control: d.control,
        name: e.fieldId,
        render: () => /* @__PURE__ */ a(G, { children: /* @__PURE__ */ a(_, { fallback: k.validation.required }) })
      },
      e.fieldId
    )) })
  ] });
}
export {
  fe as SwitchGroupRenderer
};
