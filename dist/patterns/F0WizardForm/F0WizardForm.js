import { jsx as B, jsxs as ue, Fragment as le } from "react/jsx-runtime";
import { useMemo as w, useRef as y, useState as ce, useCallback as S, useEffect as oe } from "react";
import { F0ActionBar as ve } from "../../components/F0ActionBar/index.js";
import { useI18n as Fe } from "../../lib/providers/i18n/i18n-provider.js";
import { F0FormSection as je } from "../F0Form/components/F0FormSection.js";
import { F0Form as we } from "../F0Form/F0Form.js";
import { unwrapToZodObject as K, getF0Config as ie } from "../F0Form/f0Schema.js";
import { useF0Form as fe } from "../F0Form/useF0Form.js";
import { F0Wizard as me } from "../../ui/F0Wizard/F0Wizard.js";
import { object as Re } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
function de(t) {
  const l = K(t).shape, r = Object.entries(l);
  return r.length === 0 ? !1 : r.every(([, d]) => ie(d)?.disabled === !0);
}
function De(t, a) {
  if (a) return Object.keys(a);
  const r = K(t).shape, d = /* @__PURE__ */ new Set();
  for (const o of Object.values(r)) {
    const i = ie(o);
    i?.section && d.add(i.section);
  }
  return Array.from(d);
}
function re(t, a) {
  const l = t.shape, r = {};
  for (const [d, o] of Object.entries(l)) {
    const i = ie(o);
    i?.section && a.includes(i.section) && (r[d] = o);
  }
  return Re(r);
}
function he(t, a, l) {
  const r = a ?? {};
  if (l) return l({ data: r });
  const o = K(t).shape;
  return Object.entries(o).every(([i, R]) => {
    if (R.isOptional()) return !0;
    const u = r[i];
    return u != null && u !== "";
  });
}
const Ee = 3e3;
function be() {
  const { forms: t } = Fe(), [a, l] = ce("idle"), [r, d] = ce(), o = y(null);
  oe(() => () => {
    o.current && clearTimeout(o.current);
  }, []);
  const i = S((p) => {
    o.current && (clearTimeout(o.current), o.current = null), d(p), l("success"), o.current = setTimeout(() => {
      l("idle"), d(void 0), o.current = null;
    }, Ee);
  }, []), R = a === "success" ? r ?? t.actionBar.saved : void 0, u = w(
    () => /* @__PURE__ */ B(
      ve,
      {
        isOpen: a === "success",
        variant: "light",
        status: a,
        label: R
      }
    ),
    [a, R]
  );
  return { showSuccess: i, ActionBar: u };
}
function Se(t, a, l, r, d, o, i) {
  return (l ?? t.map((u) => ({
    title: a?.[u]?.title ?? u,
    sectionIds: [u]
  }))).map((u, p) => {
    const x = r(u.sectionIds), O = i?.(p) ?? !1;
    return {
      title: u.title,
      nextLabel: u.nextLabel,
      previousLabel: u.previousLabel,
      isCompleted: x || O ? () => !0 : void 0,
      hasErrors: o ? () => o(p) : void 0,
      onNext: d(p)
    };
  });
}
function P(t, a, l) {
  if (l)
    return l[t]?.sectionIds ?? [];
  const r = a[t];
  return r ? [r] : [];
}
function ye({
  formDefinition: t,
  steps: a,
  isOpen: l,
  onClose: r,
  title: d,
  width: o,
  defaultStepIndex: i,
  nextLabel: R,
  previousLabel: u,
  onStepChanged: p,
  allowStepSkipping: x,
  autoCloseOnLastStepSubmit: O,
  linkAfterLastStepSubmit: F,
  autoSkipCompletedSteps: h = !1,
  renderCustomField: Q
}) {
  const {
    name: X,
    schema: j,
    sections: b,
    defaultValues: z,
    onSubmit: C,
    submitConfig: $,
    errorTriggerMode: Y = "on-blur"
  } = t, k = $?.label, f = w(() => Object.keys(j), [j]), D = a ?? t.steps, g = w(() => D ? D.some(
    (s) => s.sectionIds.length > 1
  ) ? (process.env.NODE_ENV !== "production" && console.error(
    "[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."
  ), D.flatMap(
    (s) => s.sectionIds.map((e) => ({
      title: b?.[e]?.title ?? s.title,
      sectionIds: [e],
      nextLabel: s.nextLabel,
      previousLabel: s.previousLabel
    }))
  )) : D : void 0, [D, b]), v = y({}), I = y(i ?? 0), N = w(
    () => Object.fromEntries(f.map((n) => [n, null])),
    [f]
  ), [A, q] = ce({}), L = y(A);
  L.current = A;
  const M = S(
    (n) => n.every((s) => {
      const e = j[s];
      return e ? de(e) : !1;
    }),
    [j]
  ), T = S(
    (n) => async () => {
      const s = P(n, f, g);
      for (const e of s) {
        const V = N[e];
        V && await V.submit();
      }
    },
    [f, g, N]
  ), U = S(
    (n) => P(n, f, g).some((e) => L.current[e] === !0),
    [f, g]
  ), W = w(
    () => g ?? f.map((n) => ({
      title: b?.[n]?.title ?? n,
      sectionIds: [n]
    })),
    [g, f, b]
  ), _ = S(
    (n) => {
      if (!h) return !1;
      const s = W[n];
      return s ? s.sectionIds.every((e) => {
        const V = j[e];
        if (!V) return !1;
        const ne = z?.[e] ?? v.current[e];
        return he(V, ne, s.isCompleted);
      }) : !1;
    },
    [h, W, j, z]
  ), Z = w(() => {
    if (i !== void 0) return i;
    if (!h) return;
    const n = W.findIndex(
      (s, e) => !_(e)
    );
    return n === -1 ? W.length - 1 : n;
  }, [i, h, W, _]), G = w(
    () => Se(
      f,
      b,
      g,
      M,
      T,
      U,
      h ? _ : void 0
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      f,
      b,
      g,
      M,
      T,
      U,
      A,
      h,
      _
    ]
  ), H = y(null), { showSuccess: J, ActionBar: ee } = be(), te = S(
    (n) => async (s) => {
      v.current[n] = s;
      const e = await C({
        sectionId: n,
        data: s,
        fullData: { ...v.current }
      });
      return H.current = e, e.success && e.message && J(e.message), e;
    },
    [C, J]
  ), c = S(() => {
    if (H.current?.success) {
      if (F) {
        const s = F({
          fullData: { ...v.current }
        });
        window.location.href = s;
        return;
      }
      O && r?.();
    }
  }, [O, F, r]), m = S(() => {
    const n = P(
      I.current,
      f,
      g
    );
    for (const s of n) {
      const e = N[s];
      e && (v.current[s] = e.getValues());
    }
  }, [f, g, N]), E = S(
    (n) => {
      m(), I.current = n, p?.(n);
    },
    [m, p]
  );
  return /* @__PURE__ */ B(
    me,
    {
      steps: G,
      isOpen: l,
      onClose: r,
      title: d,
      width: o,
      defaultStepIndex: Z,
      nextLabel: R,
      previousLabel: u,
      submitLabel: k,
      onSubmit: c,
      onStepChanged: E,
      allowStepSkipping: x,
      children: ({ currentStep: n }) => {
        const s = P(
          n,
          f,
          g
        );
        return /* @__PURE__ */ ue(le, { children: [
          /* @__PURE__ */ B("div", { className: "flex flex-col gap-6 pb-5", children: s.map((e) => {
            const V = j[e];
            if (!V) return null;
            const ne = b?.[e], pe = v.current[e], ge = z?.[e];
            return /* @__PURE__ */ B(
              Be,
              {
                sectionId: e,
                formName: X,
                schema: V,
                sectionConfig: ne,
                defaultValues: pe ?? ge,
                onSubmit: te(e),
                submitConfig: $,
                errorTriggerMode: Y,
                sectionForms: N,
                onErrorStateChange: (ae) => {
                  q((se) => se[e] === ae ? se : { ...se, [e]: ae });
                },
                renderCustomField: Q,
                isLoading: t.isLoading
              },
              e
            );
          }) }),
          ee
        ] });
      }
    }
  );
}
function Be({
  sectionId: t,
  formName: a,
  schema: l,
  sectionConfig: r,
  defaultValues: d,
  onSubmit: o,
  submitConfig: i,
  errorTriggerMode: R,
  sectionForms: u,
  onErrorStateChange: p,
  renderCustomField: x,
  isLoading: O
}) {
  const F = fe();
  oe(() => (u[t] = F, () => {
    u[t] = null;
  }), [u, t, F]);
  const h = y(p);
  return h.current = p, oe(() => {
    h.current(F.hasErrors);
  }, [F.hasErrors]), /* @__PURE__ */ B(
    je,
    {
      formName: a,
      sectionId: t,
      schema: l,
      sectionConfig: r,
      defaultValues: d,
      onSubmit: o,
      submitConfig: {
        ...i,
        hideSubmitButton: !0
      },
      errorTriggerMode: R,
      formRef: F.formRef,
      renderCustomField: x,
      isLoading: O
    }
  );
}
function Oe({
  formDefinition: t,
  steps: a,
  isOpen: l,
  onClose: r,
  title: d,
  width: o,
  defaultStepIndex: i,
  nextLabel: R,
  previousLabel: u,
  onStepChanged: p,
  allowStepSkipping: x,
  autoCloseOnLastStepSubmit: O,
  linkAfterLastStepSubmit: F,
  autoSkipCompletedSteps: h = !1,
  renderCustomField: Q
}) {
  const {
    name: X,
    schema: j,
    sections: b,
    defaultValues: z,
    onSubmit: C,
    submitConfig: $,
    errorTriggerMode: Y = "on-blur"
  } = t, k = $?.label, f = w(() => K(j), [j]), D = w(
    () => De(j, b),
    [j, b]
  ), g = S(
    (c) => {
      const m = re(f, c);
      return de(m);
    },
    [f]
  ), v = fe(), I = y(
    z ? { ...z } : {}
  ), N = y(i ?? 0), A = S(
    (c) => async () => {
      await v.submit();
    },
    [v]
  ), q = S(
    (c) => v.hasErrors,
    [v.hasErrors]
  ), L = a ?? t.steps, M = w(
    () => L ?? D.map((c) => ({
      title: b?.[c]?.title ?? c,
      sectionIds: [c]
    })),
    [L, D, b]
  ), T = S(
    (c) => {
      if (!h) return !1;
      const m = M[c];
      if (!m) return !1;
      const E = re(
        f,
        m.sectionIds
      );
      return he(E, z, m.isCompleted);
    },
    [h, M, f, z]
  ), U = w(() => {
    if (i !== void 0) return i;
    if (!h) return;
    const c = M.findIndex(
      (m, E) => !T(E)
    );
    return c === -1 ? M.length - 1 : c;
  }, [i, h, M, T]), W = w(
    () => Se(
      D,
      b,
      L,
      g,
      A,
      q,
      h ? T : void 0
    ),
    [
      D,
      b,
      L,
      g,
      A,
      q,
      h,
      T
    ]
  ), _ = y(null), Z = y(null), { showSuccess: G, ActionBar: H } = be(), J = S(
    async (c) => {
      Object.assign(I.current, c);
      const m = { ...I.current };
      Z.current = m;
      const E = await C({ data: m });
      return _.current = E, E;
    },
    [C]
  ), ee = S(() => {
    const c = _.current;
    if (c?.success) {
      if (G(c.message), F) {
        const m = F({
          fullData: Z.current
        });
        window.location.href = m;
        return;
      }
      O && r?.();
    }
  }, [O, F, r, G]), te = S(
    (c) => {
      const m = v.getValues();
      Object.assign(I.current, m), N.current = c, p?.(c);
    },
    [v, p]
  );
  return /* @__PURE__ */ B(
    me,
    {
      steps: W,
      isOpen: l,
      onClose: r,
      title: d,
      width: o,
      defaultStepIndex: U,
      nextLabel: R,
      previousLabel: u,
      submitLabel: k,
      onSubmit: ee,
      onStepChanged: te,
      allowStepSkipping: x,
      children: ({ currentStep: c }) => {
        const m = P(
          c,
          D,
          L
        ), E = re(
          f,
          m
        ), n = m.reduce((s, e) => (b?.[e] && (s[e] = b[e]), s), {});
        return /* @__PURE__ */ ue(le, { children: [
          /* @__PURE__ */ B("div", { className: "pb-5", children: /* @__PURE__ */ B(
            we,
            {
              name: `${X}-step-${c}`,
              schema: E,
              sections: n,
              defaultValues: I.current,
              onSubmit: J,
              submitConfig: { hideSubmitButton: !0, hideActionBar: !0 },
              errorTriggerMode: Y,
              formRef: v.formRef,
              renderCustomField: Q,
              isLoading: t.isLoading
            },
            c
          ) }),
          H
        ] });
      }
    }
  );
}
function ze(t) {
  return t.formDefinition._brand === "per-section" ? /* @__PURE__ */ B(
    ye,
    {
      ...t
    }
  ) : /* @__PURE__ */ B(
    Oe,
    {
      ...t
    }
  );
}
ze.displayName = "F0WizardForm";
export {
  ze as F0WizardForm
};
