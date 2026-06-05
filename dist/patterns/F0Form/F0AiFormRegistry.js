import { jsx as ce } from "react/jsx-runtime";
import { useMemo as X, useRef as D, useState as A, useCallback as V, useEffect as ue, createContext as le, useContext as fe } from "react";
import "../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/string.js";
import { zodToJsonSchema as P } from "../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js";
import { unwrapZodSchema as _, getF0Config as de, inferFieldType as ee } from "./f0Schema.js";
import { object as me, ZodType as te } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
function pe(e) {
  return "_brand" in e && (e._brand === "single" || e._brand === "per-section");
}
function re(e) {
  let m = e;
  for (; m; ) {
    const c = m._def;
    if ("shape" in c && typeof c.shape == "function")
      return { shape: c.shape() };
    if ("schema" in c && c.schema instanceof te) {
      m = c.schema;
      continue;
    }
    if ("innerType" in c && c.innerType instanceof te) {
      m = c.innerType;
      continue;
    }
    break;
  }
  return {};
}
function ae(e) {
  if (!pe(e)) return e;
  const m = e._brand === "per-section" ? Object.fromEntries(
    Object.entries(e.schema).map(
      ([u, a]) => [
        u,
        Object.keys(re(a).shape ?? {})
      ]
    )
  ) : void 0, c = e._brand === "single" ? e.schema : (
    // Per-section: merge all section schemas into one flat z.object.
    // The registry only understands a single F0FormSchema.
    // (section boundaries are preserved in `sections`)
    (() => {
      const u = {};
      for (const [a, f] of Object.entries(
        e.schema
      )) {
        const p = re(f);
        if (p.shape)
          for (const [g, w] of Object.entries(p.shape))
            g in u && console.warn(
              `[toAvailableFormDefinition] Duplicate field "${g}" found in section "${a}". The later section's field will overwrite the earlier one.`
            ), u[g] = w;
      }
      return me(u);
    })()
  ), n = e.onSubmit, F = n ? async (u) => {
    if (e._brand === "single")
      await n({ data: u });
    else {
      const a = e.schema, f = {};
      for (const [g, w] of Object.entries(
        m
      )) {
        const T = {};
        for (const O of w)
          O in u && (T[O] = u[O]);
        f[g] = T;
      }
      const p = Object.keys(a);
      for (const g of p)
        await n({
          sectionId: g,
          data: f[g],
          fullData: f
        });
    }
  } : void 0;
  let d;
  if (e._brand === "per-section" && e.defaultValues) {
    d = {};
    for (const u of Object.values(
      e.defaultValues
    ))
      Object.assign(d, u);
  } else
    d = e.defaultValues;
  let l = d;
  if (e.defaultValuesFn)
    if (e._brand === "per-section") {
      const u = e.defaultValuesFn;
      l = async (a) => {
        const f = await u(a), p = {};
        for (const g of Object.values(f))
          Object.assign(p, g);
        return p;
      };
    } else
      l = e.defaultValuesFn;
  return {
    name: e.name,
    schema: c,
    defaultValues: l,
    defaultValuesParamsSchema: e.defaultValuesParamsSchema,
    sections: e.sections,
    onSubmit: F,
    description: e.description,
    module: e.module,
    steps: e.steps,
    submitConfig: e.submitConfig,
    errorTriggerMode: e.errorTriggerMode
  };
}
function ve(e) {
  return ae(e);
}
function se(e, m = {}) {
  if (typeof e == "function") {
    const c = e(m);
    return c && typeof c.then == "function" ? {} : c;
  }
  return e ?? {};
}
function ne(e, m = {}, c) {
  let n = { ...m };
  const F = { ...m }, d = /* @__PURE__ */ new Set();
  return { ref: {
    current: {
      submit: async () => {
        const a = e.safeParse(n);
        if (!a.success)
          throw new Error(a.error.issues.map((f) => f.message).join(", "));
        await c?.(a.data);
      },
      reset: () => {
        n = { ...F }, d.clear();
      },
      isDirty: () => JSON.stringify(n) !== JSON.stringify(F),
      getValues: () => ({ ...n }),
      setValue: (a, f, p) => {
        n = { ...n, [a]: f }, d.add(a);
      },
      setValues: (a, f) => {
        n = { ...n, ...a };
        for (const p of Object.keys(a))
          d.add(p);
      },
      trigger: async (a) => {
        if (a) {
          const p = _(e).shape?.[a];
          return p ? p.safeParse(n[a]).success : !0;
        }
        return e.safeParse(n).success;
      },
      getErrors: () => {
        const a = e.safeParse(n);
        if (a.success) return {};
        const f = {};
        for (const p of a.error.issues) {
          const g = p.path.join(".");
          g && !f[g] && (f[g] = p.message);
        }
        return f;
      },
      getFieldNames: () => {
        const a = _(e);
        return Object.keys(a.shape ?? {});
      },
      actionBar: {
        wiggle: () => {
        }
      },
      _setStateCallback: () => {
      }
    }
  }, dirtyFields: d };
}
function M(e) {
  const c = _(e).shape;
  if (!c) return {};
  const n = {};
  for (const [F, d] of Object.entries(c)) {
    const l = de(d), u = d.description;
    (l?.label || u) && (n[F] = {
      label: l?.label ?? F,
      ...l?.section && { section: l.section },
      ...l?.placeholder && { placeholder: l.placeholder },
      ...l?.helpText && { helpText: l.helpText },
      ...u && { description: u },
      ...l?.customFieldName && {
        customFieldName: l.customFieldName
      },
      ...ee(d, l ?? { label: F }) !== "text" && {
        fieldType: ee(d, l ?? { label: F })
      }
    });
  }
  return n;
}
function E(e) {
  if (!e) return {};
  const m = {};
  for (const [c, n] of Object.entries(e))
    m[c] = {
      title: n.title,
      ...n.description && { description: n.description }
    };
  return m;
}
const oe = le(null);
function Se({
  children: e,
  availableFormDefinitions: m
}) {
  const c = X(
    () => m?.map(ae),
    [m]
  ), n = D(/* @__PURE__ */ new Map()), F = D(""), d = D(/* @__PURE__ */ new Map()), l = D(/* @__PURE__ */ new Set()), u = D(/* @__PURE__ */ new Map()), a = D(/* @__PURE__ */ new Map()), [f, p] = A([]), [g, w] = A(
    []
  ), [T, O] = A(
    null
  ), R = D(null), C = D({}), b = V(() => {
    queueMicrotask(() => {
      const t = Array.from(n.current.entries()), i = [], r = [];
      let o = null;
      for (const [v, s] of t) {
        const h = s.ref.current;
        if (h && (s.virtual ? r.push({
          formName: v,
          ...s.description ? { description: s.description } : {},
          ...s.module ? { module: s.module } : {},
          cardTitle: "",
          cardDescription: "",
          formSchema: P(s.schema),
          fieldDescriptions: M(s.schema),
          sectionDescriptions: E(s.sections),
          formValues: h.getValues(),
          formErrors: h.getErrors(),
          isDirty: h.isDirty(),
          ...s.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: P(
              s.defaultValuesParamsSchema
            )
          } : {},
          ...s.defaultValuesParams ? { defaultValuesParams: s.defaultValuesParams } : {}
        }) : i.push({
          formName: v,
          ...s.description ? { description: s.description } : {},
          ...s.module ? { module: s.module } : {},
          cardTitle: "",
          cardDescription: "",
          formSchema: P(s.schema),
          fieldDescriptions: M(s.schema),
          sectionDescriptions: E(s.sections),
          formValues: h.getValues(),
          formErrors: h.getErrors(),
          isDirty: h.isDirty(),
          ...s.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: P(
              s.defaultValuesParamsSchema
            )
          } : {},
          ...s.defaultValuesParams ? { defaultValuesParams: s.defaultValuesParams } : {}
        }), R.current === v)) {
          const y = C.current;
          o = {
            formName: v,
            ...s.description ? { description: s.description } : {},
            ...s.module ? { module: s.module } : {},
            cardTitle: y.cardTitle ?? "",
            cardDescription: y.cardDescription ?? "",
            formSchema: P(s.schema),
            fieldDescriptions: M(s.schema),
            sectionDescriptions: E(s.sections),
            formValues: h.getValues(),
            formErrors: h.getErrors(),
            isDirty: h.isDirty(),
            ...s.defaultValuesParamsSchema ? {
              defaultValuesParamsSchema: P(
                s.defaultValuesParamsSchema
              )
            } : {},
            ...s.defaultValuesParams ? { defaultValuesParams: s.defaultValuesParams } : {}
          };
        }
      }
      const S = JSON.stringify({
        formsOnCurrentPage: i,
        availableForms: r,
        activeForm: o
      });
      S !== F.current && (F.current = S, p(i), w(r), O(o));
    });
  }, []), J = V(
    (t, i, r, o, S, v, s, h) => {
      const y = n.current.get(t);
      n.current.set(t, {
        ref: i,
        schema: r,
        description: s,
        module: h,
        sections: o,
        defaultValuesParamsSchema: S ?? y?.defaultValuesParamsSchema,
        defaultValuesFn: v ?? y?.defaultValuesFn,
        defaultValuesParams: y?.defaultValuesParams,
        onSubmit: y?.onSubmit,
        steps: y?.steps,
        submitConfig: y?.submitConfig,
        errorTriggerMode: y?.errorTriggerMode
      }), b();
    },
    [b]
  ), $ = V(
    (t) => {
      const i = n.current.get(t);
      if (i?.virtual) return;
      const r = i?.ref.current?.getValues() ?? {};
      n.current.delete(t);
      const o = c?.find((S) => S.name === t);
      if (o) {
        const v = { ...typeof o.defaultValues == "function" ? {} : se(o.defaultValues), ...r }, { ref: s, dirtyFields: h } = ne(
          o.schema,
          v,
          o.onSubmit
        ), y = typeof o.defaultValues == "function" ? (() => {
          const k = o.defaultValues;
          return async (j) => {
            const x = k(j);
            return typeof x?.then == "function" ? await x : x;
          };
        })() : void 0;
        n.current.set(t, {
          ref: s,
          schema: o.schema,
          description: o.description,
          module: o.module,
          sections: o.sections,
          virtual: !0,
          defaultValuesParamsSchema: o.defaultValuesParamsSchema,
          defaultValuesFn: y,
          defaultValuesParams: i?.defaultValuesParams,
          dirtyFields: h,
          onSubmit: o.onSubmit,
          steps: o.steps,
          submitConfig: o.submitConfig,
          errorTriggerMode: o.errorTriggerMode
        });
      }
      b();
    },
    [b, c]
  ), q = V((t) => n.current.get(t), []), I = V(() => Array.from(n.current.keys()), []), K = V(
    (t, i) => {
      const r = n.current.get(t);
      if (!r) {
        const o = Array.from(n.current.keys());
        return {
          success: !1,
          error: `Form "${t}" not found. Available forms: ${o.join(", ")}`
        };
      }
      return r.virtual ? (R.current = t, C.current = {
        cardTitle: i?.cardTitle ?? "",
        cardDescription: i?.cardDescription ?? ""
      }, b(), { success: !0 }) : {
        success: !1,
        error: `Form "${t}" is a rendered form on the current page. You can co-edit it directly without picking it as active.`
      };
    },
    [b]
  ), Z = V(() => {
    R.current = null, C.current = { cardTitle: "", cardDescription: "" }, b();
  }, [b]), z = V(
    (t, i) => {
      const r = n.current.get(t);
      r && (r.defaultValuesParams = i);
    },
    []
  ), B = V((t) => {
    const i = d.current.get(t) ?? 0;
    d.current.set(t, i + 1);
  }, []), Q = V((t) => {
    d.current.delete(t), l.current.delete(t), u.current.delete(t), a.current.delete(t);
  }, []), Y = V((t) => d.current.get(t) ?? 0, []), G = V((t) => !l.current.has(t), []), H = V((t) => {
    l.current.add(t);
  }, []), L = V(
    (t, i) => {
      l.current.delete(t), u.current.set(t, i ?? null);
      const r = a.current.get(t);
      if (r?.length) {
        a.current.delete(t);
        for (const o of r)
          o();
      }
      b();
    },
    [b]
  ), N = V(
    (t, i) => {
      const r = a.current.get(t) ?? [];
      r.push(i), a.current.set(t, r);
    },
    []
  ), U = V(
    (t, i) => u.current.has(t) ? i === void 0 ? !0 : u.current.get(t) === i : !1,
    []
  ), W = D(/* @__PURE__ */ new Set());
  ue(() => {
    const t = c ?? [], i = /* @__PURE__ */ new Set();
    for (const r of t) {
      i.add(r.name);
      const o = n.current.get(r.name);
      if (o && !o.virtual || o?.virtual) continue;
      const S = typeof r.defaultValues == "function" ? {} : se(r.defaultValues), { ref: v, dirtyFields: s } = ne(
        r.schema,
        S,
        r.onSubmit
      ), h = typeof r.defaultValues == "function" ? (() => {
        const y = r.defaultValues;
        return async (k) => {
          const j = y(k);
          return typeof j?.then == "function" ? await j : j;
        };
      })() : void 0;
      n.current.set(r.name, {
        ref: v,
        schema: r.schema,
        description: r.description,
        module: r.module,
        sections: r.sections,
        virtual: !0,
        defaultValuesParamsSchema: r.defaultValuesParamsSchema,
        defaultValuesFn: h,
        dirtyFields: s,
        onSubmit: r.onSubmit,
        steps: r.steps,
        submitConfig: r.submitConfig,
        errorTriggerMode: r.errorTriggerMode
      });
    }
    for (const r of W.current)
      i.has(r) || n.current.get(r)?.virtual && n.current.delete(r);
    return W.current = i, b(), () => {
      for (const r of i)
        n.current.get(r)?.virtual && n.current.delete(r);
      b();
    };
  }, [c, b]);
  const ie = X(
    () => ({
      register: J,
      unregister: $,
      get: q,
      getFormNames: I,
      rebuildDescriptions: b,
      formsOnCurrentPage: f,
      availableForms: g,
      activeForm: T,
      setActiveForm: K,
      clearActiveForm: Z,
      updateActiveFormDefaultValuesParams: z,
      incrementFillVersion: B,
      resetFillVersion: Q,
      getFillVersion: Y,
      isDefaultValuesResolved: G,
      markDefaultValuesResolving: H,
      markDefaultValuesResolved: L,
      queueFillAction: N,
      hasDefaultValuesEverResolved: U
    }),
    [
      J,
      $,
      q,
      I,
      b,
      f,
      g,
      T,
      K,
      Z,
      z,
      B,
      Q,
      Y,
      G,
      H,
      L,
      N,
      U
    ]
  );
  return /* @__PURE__ */ ce(oe.Provider, { value: ie, children: e });
}
function De() {
  return fe(oe);
}
export {
  Se as F0AiFormRegistryProvider,
  ve as defineAvailableForm,
  De as useF0AiFormRegistry
};
