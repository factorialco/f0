import { jsx as i, jsxs as _ } from "react/jsx-runtime";
import X, { useMemo as x, useRef as B, useEffect as E, useCallback as Y } from "react";
import { useForm as U } from "../../../node_modules/.pnpm/react-hook-form@7.54.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.js";
import { useI18n as L } from "../../../lib/providers/i18n/i18n-provider.js";
import { cn as G } from "../../../lib/utils.js";
import { SectionHeader as I } from "../../SectionHeader/index.js";
import { Form as ee } from "../../../ui/form.js";
import { createConditionalResolver as te } from "../conditionalResolver.js";
import { FIELD_GAP as re } from "../constants.js";
import { F0FormContext as oe } from "../context.js";
import { CardSelectDepsContext as ie } from "../fields/cardSelect/CardSelectDepsContext.js";
import { FieldRenderer as N } from "../fields/FieldRenderer.js";
import { groupContiguousSwitches as se, buildCardSelectContentMap as ne } from "../groupingUtils.js";
import { useSchemaDefinition as le } from "../useSchemaDefinition.js";
import { createZodErrorMap as ce } from "../zodErrorMap.js";
import { RowRenderer as ae } from "./RowRenderer.js";
import { SwitchGroupRenderer as de } from "./SwitchGroupRenderer.js";
import { F0Button as P } from "../../../components/F0Button/F0Button.js";
const ue = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function fe(b) {
  const n = {};
  function u(l, a) {
    for (const [f, c] of Object.entries(l)) {
      if (f === "root") continue;
      const p = a ? `${a}.${f}` : f;
      if (c && typeof c == "object" && !Array.isArray(c)) {
        const m = c;
        "message" in m && typeof m.message == "string" ? n[p] = m.message : u(m, p);
      }
    }
  }
  return u(b, ""), n;
}
function Oe({
  formName: b,
  sectionId: n,
  schema: u,
  sectionConfig: l,
  defaultValues: a,
  onSubmit: f,
  submitConfig: c,
  errorTriggerMode: p,
  className: m,
  initialFiles: g,
  isLoadingInitialFiles: j,
  formRef: h,
  renderCustomField: k,
  useUpload: R,
  isLoading: d
}) {
  const F = L(), $ = le(u), A = c?.label ?? "Submit", C = c?.icon ?? void 0, W = c?.showSubmitWhenDirty ?? !1, z = c?.hideSubmitButton ?? !1, M = x(() => ce(F), [F]), H = ue[p], T = x(
    () => te(u, { errorMap: M }),
    [u, M]
  ), e = U({
    resolver: T,
    mode: H,
    defaultValues: a
  }), V = B(d);
  E(() => {
    V.current && !d && a && e.reset(a), V.current = d;
  }, [d, a, e]);
  const O = e.formState.errors.root, { isSubmitting: S, isDirty: Z } = e.formState, y = Object.keys(e.formState.errors).filter((t) => t !== "root").length > 0, v = B(null), w = Y(
    async (t) => {
      const r = { ...t };
      for (const s of Object.keys(r))
        r[s] === null && (r[s] = void 0);
      const o = await f(r);
      o.success ? e.reset(t) : (o.errors && Object.entries(o.errors).forEach(([s, D]) => {
        e.setError(s, { message: D });
      }), o.rootMessage && e.setError("root", { message: o.rootMessage }));
    },
    [f, e]
  );
  E(() => {
    if (h) {
      const t = {
        submit: () => new Promise((r, o) => {
          e.handleSubmit(
            async (s) => {
              await w(s), r();
            },
            () => {
              o(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => e.reset(),
        isDirty: () => e.formState.isDirty,
        getValues: () => e.getValues(),
        setValue: (r, o, s) => {
          e.setValue(
            r,
            o,
            {
              shouldValidate: s?.shouldValidate ?? !0,
              shouldDirty: s?.shouldDirty ?? !0
            }
          );
        },
        setValues: (r, o) => {
          for (const [s, D] of Object.entries(r))
            e.setValue(
              s,
              D,
              {
                shouldValidate: !1,
                shouldDirty: o?.shouldDirty ?? !0
              }
            );
          o?.shouldValidate !== !1 && e.trigger();
        },
        trigger: async (r) => r ? e.trigger(r) : e.trigger(),
        getErrors: () => fe(e.formState.errors),
        getFieldNames: () => Object.keys(e.getValues()),
        actionBar: {
          wiggle: () => {
          }
        },
        _setStateCallback: (r) => {
          v.current = r;
        }
      };
      h.current = t;
    }
    return () => {
      h && (h.current = null);
    };
  }, [h, e, w]), E(() => {
    v.current && v.current({ isSubmitting: S, hasErrors: y });
  }, [S, y]);
  const q = se($), J = x(
    () => ({
      formName: b,
      initialFiles: g,
      isLoadingInitialFiles: j,
      renderCustomField: k,
      isLoading: d,
      useUpload: R
    }),
    [
      b,
      g,
      j,
      k,
      d,
      R
    ]
  ), K = l?.title ?? n, Q = l?.description;
  return /* @__PURE__ */ i(oe.Provider, { value: J, children: /* @__PURE__ */ i(ee, { ...e, children: /* @__PURE__ */ _(
    "form",
    {
      onSubmit: e.handleSubmit(w),
      className: G("flex flex-col", m),
      children: [
        /* @__PURE__ */ _(
          "div",
          {
            className: G(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ i(I, { title: K, description: Q ?? "" }),
              l?.action && /* @__PURE__ */ i(
                P,
                {
                  label: l.action.label,
                  icon: l.action.icon,
                  onClick: l.action.onClick,
                  href: l.action.href,
                  variant: "outline",
                  size: "md"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: `flex flex-col ${re}`, children: q.map((t, r) => {
          switch (t.type) {
            case "switchGroup":
              return /* @__PURE__ */ i(
                de,
                {
                  fields: t.fields,
                  dependentFields: t.dependentFields,
                  cardSelectDependentFields: t.cardSelectDependentFields,
                  sectionId: n
                },
                `switch-group-${r}`
              );
            case "field": {
              const o = t.cardSelectDependentFields ? /* @__PURE__ */ i(
                ie.Provider,
                {
                  value: ne(
                    t.cardSelectDependentFields,
                    n
                  ),
                  children: /* @__PURE__ */ i(
                    N,
                    {
                      field: t.item.field,
                      sectionId: n
                    }
                  )
                }
              ) : /* @__PURE__ */ i(
                N,
                {
                  field: t.item.field,
                  sectionId: n
                }
              );
              return /* @__PURE__ */ i(X.Fragment, { children: o }, t.item.field.id);
            }
            case "row":
              return /* @__PURE__ */ i(
                ae,
                {
                  row: t.item,
                  sectionId: n
                },
                `row-${t.index}`
              );
            default:
              return null;
          }
        }) }),
        O && /* @__PURE__ */ i("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: O.message }),
        !z && (!W || Z) && /* @__PURE__ */ i("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ i(
          P,
          {
            type: "submit",
            label: A,
            icon: C,
            loading: S,
            disabled: y || d
          }
        ) })
      ]
    }
  ) }) });
}
export {
  Oe as F0FormSection
};
