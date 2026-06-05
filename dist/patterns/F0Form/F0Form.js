import { jsx as i, jsxs as Y } from "react/jsx-runtime";
import { useMemo as N, useCallback as x, useState as q, useRef as S, useEffect as T } from "react";
import { flushSync as Ke } from "react-dom";
import { useForm as Qe } from "../../node_modules/.pnpm/react-hook-form@7.54.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.js";
import { F0TableOfContent as Ee } from "../../experimental/Navigation/F0TableOfContent/index.js";
import We from "../../icons/app/Delete.js";
import "../../icons/app/Menu.js";
import { useI18n as Xe } from "../../lib/providers/i18n/i18n-provider.js";
import { cn as z } from "../../lib/utils.js";
import { useAsyncDefaultValues as Te } from "../F0WizardForm/useF0FormDefinition.js";
import { Form as et } from "../../ui/form.js";
import { FormActionBar as tt } from "./components/ActionBar.js";
import { F0FormSection as nt } from "./components/F0FormSection.js";
import { RowRenderer as it } from "./components/RowRenderer.js";
import { SectionRenderer as rt } from "./components/SectionRenderer.js";
import { SwitchGroupRenderer as ot } from "./components/SwitchGroupRenderer.js";
import { createConditionalResolver as st } from "./conditionalResolver.js";
import { SECTION_MARGIN as Ne } from "./constants.js";
import { generateAnchorId as oe, F0FormContext as at } from "./context.js";
import { useF0AiFormRegistry as ct } from "./F0AiFormRegistry.js";
import { CardSelectDepsContext as lt } from "./fields/cardSelect/CardSelectDepsContext.js";
import { FieldRenderer as Ce } from "./fields/FieldRenderer.js";
import { groupContiguousSwitches as ut, buildCardSelectContentMap as mt } from "./groupingUtils.js";
import { useErrorNavigation as ft } from "./useErrorNavigation.js";
import { useSchemaDefinition as dt } from "./useSchemaDefinition.js";
import { createZodErrorMap as gt } from "./zodErrorMap.js";
import { F0Button as bt } from "../../components/F0Button/F0Button.js";
const we = 800;
function ht(o) {
  const a = {};
  function r(l, f) {
    for (const [u, m] of Object.entries(l)) {
      if (u === "root") continue;
      const b = f ? `${f}.${u}` : u;
      if (m && typeof m == "object" && !Array.isArray(m)) {
        const e = m;
        "message" in e && typeof e.message == "string" ? a[b] = e.message : r(e, b);
      }
    }
  }
  return r(o, ""), a;
}
function St(o) {
  if (typeof o != "object" || o === null) return !1;
  const r = o._def;
  return r?.typeName === "ZodObject" || r?.typeName === "ZodEffects";
}
const Ft = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Re(o) {
  const {
    name: a,
    schema: r,
    sections: l,
    defaultValues: f,
    onSubmit: u,
    submitConfig: m,
    className: b,
    errorTriggerMode: e = "on-submit",
    styling: v,
    initialFiles: D,
    isLoadingInitialFiles: y,
    renderCustomField: h,
    isLoading: F,
    useUpload: L
  } = o, A = v?.showSectionsSidepanel ?? !1, E = N(() => Object.keys(r), [r]), k = x(
    (g) => {
      const B = oe(a, g), M = document.getElementById(B);
      M && M.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [a]
  ), [U, j] = q(
    E[0]
  ), w = N(() => !l || !A ? [] : E.map((g) => ({
    id: g,
    label: l[g]?.title ?? g,
    onClick: () => {
      j(g), k(g);
    }
  })), [l, E, A, k]), R = /* @__PURE__ */ i("div", { className: z("flex w-full flex-col max-w-content", b), children: E.map((g, B) => {
    const M = r[g], H = l?.[g], J = f?.[g], K = H?.submitConfig ?? m;
    return /* @__PURE__ */ i(
      "div",
      {
        id: oe(a, g),
        className: z("scroll-mt-4", B !== 0 && Ne),
        children: /* @__PURE__ */ i(
          nt,
          {
            formName: a,
            sectionId: g,
            schema: M,
            sectionConfig: H,
            defaultValues: J,
            onSubmit: (O) => u(g, O),
            submitConfig: K,
            errorTriggerMode: e,
            initialFiles: D,
            isLoadingInitialFiles: y,
            renderCustomField: h,
            isLoading: F,
            useUpload: L
          }
        )
      },
      g
    );
  }) });
  return A && w.length > 0 ? /* @__PURE__ */ Y("div", { className: "flex w-full overflow-scroll", children: [
    /* @__PURE__ */ i("div", { className: "sticky top-0 mr-4 h-fit shrink-0 self-start pt-2", children: /* @__PURE__ */ i(
      Ee,
      {
        items: w,
        activeItem: U,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "sticky bottom-0 top-0 w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ i("div", { className: "flex w-full justify-center px-4 py-2", children: R })
  ] }) : /* @__PURE__ */ i("div", { className: "flex justify-center p-4", children: R });
}
function pt(o) {
  return "formDefinition" in o && o.formDefinition != null;
}
function Jt(o) {
  const a = o;
  if (pt(a))
    return /* @__PURE__ */ i(vt, { ...a });
  const r = a;
  return St(r.schema) ? /* @__PURE__ */ i(
    Be,
    {
      ...r
    }
  ) : /* @__PURE__ */ i(
    Re,
    {
      ...r
    }
  );
}
function vt(o) {
  const {
    formDefinition: a,
    className: r,
    styling: l,
    formRef: f,
    initialFiles: u,
    renderCustomField: m
  } = o, b = "useUpload" in o ? o.useUpload : void 0;
  return a.isLoading ? a._brand === "single" ? /* @__PURE__ */ i(
    De,
    {
      formDefinition: a,
      className: r,
      styling: l,
      formRef: f,
      initialFiles: u,
      renderCustomField: m,
      useUpload: b,
      isLoading: !0
    }
  ) : /* @__PURE__ */ i(
    Le,
    {
      formDefinition: a,
      className: r,
      styling: l,
      formRef: f,
      initialFiles: u,
      renderCustomField: m,
      useUpload: b,
      isLoading: !0
    }
  ) : a._brand === "single" ? /* @__PURE__ */ i(
    De,
    {
      formDefinition: a,
      className: r,
      styling: l,
      formRef: f,
      initialFiles: u,
      renderCustomField: m,
      useUpload: b
    }
  ) : /* @__PURE__ */ i(
    Le,
    {
      formDefinition: a,
      className: r,
      styling: l,
      formRef: f,
      initialFiles: u,
      renderCustomField: m,
      useUpload: b
    }
  );
}
function De({
  formDefinition: o,
  className: a,
  styling: r,
  formRef: l,
  initialFiles: f,
  renderCustomField: u,
  useUpload: m,
  isLoading: b
}) {
  const e = o, { resolved: v, isLoading: D } = Te(
    e.asyncDefaultValues ?? e.defaultValues
  ), y = x(
    (h) => e.onSubmit({ data: h }),
    [e]
  );
  return /* @__PURE__ */ i(
    Be,
    {
      name: e.name,
      description: e.description,
      module: e.module,
      schema: e.schema,
      sections: e.sections,
      defaultValues: v,
      onSubmit: y,
      submitConfig: e.submitConfig,
      errorTriggerMode: e.errorTriggerMode,
      className: a,
      styling: r,
      formRef: l,
      initialFiles: e.initialFiles ?? f,
      isLoadingInitialFiles: e.isLoadingInitialFiles,
      renderCustomField: u,
      useUpload: m,
      isLoading: b || D,
      defaultValuesParamsSchema: e.defaultValuesParamsSchema,
      defaultValuesFn: e.defaultValuesFn
    }
  );
}
function Le({
  formDefinition: o,
  className: a,
  styling: r,
  formRef: l,
  initialFiles: f,
  renderCustomField: u,
  useUpload: m,
  isLoading: b
}) {
  const e = o, { resolved: v, isLoading: D } = Te(
    e.asyncDefaultValues ?? e.defaultValues
  ), y = S(
    v ? { ...v } : {}
  ), h = x(
    (F, L) => (y.current[F] = L, e.onSubmit({
      sectionId: F,
      data: L,
      fullData: { ...y.current }
    })),
    [e]
  );
  return /* @__PURE__ */ i(
    Re,
    {
      name: e.name,
      schema: e.schema,
      sections: e.sections,
      defaultValues: v,
      onSubmit: h,
      submitConfig: e.submitConfig,
      errorTriggerMode: e.errorTriggerMode,
      className: a,
      styling: r,
      formRef: l,
      initialFiles: e.initialFiles ?? f,
      isLoadingInitialFiles: e.isLoadingInitialFiles,
      renderCustomField: u,
      useUpload: m,
      isLoading: b || D
    }
  );
}
function Be(o) {
  const a = Xe(), { forms: r } = a, {
    name: l,
    schema: f,
    sections: u,
    defaultValues: m,
    onSubmit: b,
    submitConfig: e,
    className: v,
    errorTriggerMode: D = "on-submit",
    styling: y,
    formRef: h,
    isLoading: F,
    defaultValuesParamsSchema: L,
    defaultValuesFn: A,
    description: E,
    module: k
  } = o, { useUpload: U } = o, j = y?.showSectionsSidepanel ?? !1, w = e?.type === "action-bar", R = e?.type === "autosubmit", g = e?.label ?? "Submit", B = e?.icon ?? void 0, M = (e?.type === "default" || e?.type === void 0) && !!e?.hideSubmitButton, H = e?.type !== "action-bar" && !!e?.hideActionBar, J = !w && !R && !M, K = e?.type === "action-bar" && e?.discardable, O = w ? e?.discardConfig : void 0, Me = O?.label ?? r.actionBar.discard, Ve = O?.icon === null ? void 0 : O?.icon ?? We, xe = w ? e?.actionBarLabel ?? r.actionBar.unsavedChanges : r.actionBar.unsavedChanges, Ae = e?.savingMessage ?? r.actionBar.saving, ke = e?.successMessageDuration, Q = dt(f, u), W = N(() => Q.filter((n) => n.type === "section").map((n) => n.id), [Q]), [je, Oe] = q(
    W[0]
  ), se = S(null), ae = x(
    (n) => {
      Oe(n);
      const t = oe(l, n), c = document.getElementById(t), d = se.current;
      c && d && d.scrollTo({
        top: c.offsetTop - d.offsetTop,
        behavior: "smooth"
      });
    },
    [l]
  ), ce = N(() => !u || !j ? [] : W.map((n) => ({
    id: n,
    label: u[n]?.title ?? n,
    onClick: () => ae(n)
  })), [u, W, j, ae]), le = N(() => gt(a), [a]), Pe = Ft[D], _e = N(
    () => st(f, { errorMap: le }),
    [f, le]
  ), s = Qe({
    resolver: _e,
    mode: Pe,
    defaultValues: m
  }), ue = S(F);
  T(() => {
    ue.current && !F && m && s.reset(m), ue.current = F;
  }, [F, m, s]);
  const me = s.formState.errors.root, { isDirty: Ue, isSubmitting: V, errors: He } = s.formState, [X, P] = q("idle"), [Ge, ee] = q(), p = S(null), C = S(null), fe = S(null), te = S(null), de = S(null), {
    hasErrors: G,
    errorCount: Ie,
    goToPreviousError: Ze,
    goToNextError: $e,
    resetErrorNavigation: I
  } = ft({
    formName: l,
    errors: He
  }), Ye = X === "loading" ? Ae : X === "success" ? Ge ?? r.actionBar.saved : xe, _ = async (n) => {
    p.current && (clearTimeout(p.current), p.current = null), Ke(() => {
      P("loading");
    });
    const t = { ...n };
    for (const d of Object.keys(t))
      t[d] === null && (t[d] = void 0);
    const c = await b(t);
    c.success ? (s.reset(n), I(), ee(c.message), P("success"), p.current = setTimeout(() => {
      P("idle"), ee(void 0), p.current = null;
    }, ke ?? 2e3)) : (P("idle"), c.errors && Object.entries(c.errors).forEach(([d, re]) => {
      s.setError(d, { message: re });
    }), c.rootMessage && s.setError("root", { message: c.rootMessage }));
  };
  T(() => () => {
    p.current && clearTimeout(p.current), C.current && clearTimeout(C.current);
  }, []);
  const ge = S(_);
  ge.current = _;
  const ne = x(() => {
    const n = document.activeElement;
    if (!(n instanceof HTMLElement) || !de.current?.contains(n)) return;
    const t = n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement, c = t ? n.selectionStart : null, d = t ? n.selectionEnd : null;
    te.current = {
      element: n,
      selectionStart: c,
      selectionEnd: d
    };
  }, []), be = S(s.formState.isSubmitting);
  T(() => {
    const n = be.current;
    if (be.current = V, !n || V) return;
    const t = te.current;
    if (te.current = null, !!t && t.element.isConnected && document.activeElement !== t.element && (t.element.focus(), t.selectionStart !== null && t.selectionEnd !== null && (t.element instanceof HTMLInputElement || t.element instanceof HTMLTextAreaElement)))
      try {
        t.element.setSelectionRange(
          t.selectionStart,
          t.selectionEnd
        );
      } catch {
      }
  }, [V]);
  const he = e?.type === "autosubmit" ? e.delay ?? we : we;
  T(() => {
    if (!R) return;
    const n = s.watch(() => {
      s.formState.isDirty && (s.formState.isSubmitting || (C.current && clearTimeout(C.current), C.current = setTimeout(() => {
        C.current = null, ne(), s.handleSubmit(
          (t) => ge.current(t)
        )();
      }, he)));
    });
    return () => {
      n.unsubscribe(), C.current && (clearTimeout(C.current), C.current = null);
    };
  }, [R, he, s, ne]);
  const qe = () => {
    s.reset(), I(), P("idle"), ee(void 0), p.current && (clearTimeout(p.current), p.current = null);
  }, ie = S(null), Se = S(_);
  Se.current = _;
  const Z = x(
    (n) => ({
      submit: () => new Promise((t, c) => {
        s.handleSubmit(
          async (d) => {
            await Se.current(d), t();
          },
          () => c(new Error("Form validation failed"))
        )();
      }),
      reset: () => {
        s.reset(), I();
      },
      isDirty: () => s.formState.isDirty,
      getValues: () => s.getValues(),
      setValue: (t, c, d) => {
        s.setValue(
          t,
          c,
          {
            shouldValidate: d?.shouldValidate ?? !0,
            shouldDirty: d?.shouldDirty ?? !0
          }
        );
      },
      setValues: (t, c) => {
        for (const [d, re] of Object.entries(t))
          s.setValue(d, re, {
            shouldValidate: !1,
            shouldDirty: c?.shouldDirty ?? !0
          });
        c?.shouldValidate !== !1 && s.trigger();
      },
      trigger: async (t) => t ? s.trigger(t) : s.trigger(),
      getErrors: () => ht(s.formState.errors),
      getFieldNames: () => Object.keys(s.getValues()),
      actionBar: {
        wiggle: (t) => {
          const c = Object.keys(s.formState.errors).length > 0;
          fe.current?.wiggle(
            t?.errorHighlight && !c ? { ...t, errorHighlight: !1 } : t
          );
        }
      },
      _setStateCallback: n?.stateCallback ? (t) => {
        ie.current = t;
      } : () => {
      }
    }),
    [s, I]
  ), $ = ct(), Fe = S(null), pe = h ?? Fe;
  T(() => {
    if ($)
      return h || (Fe.current = Z()), $.register(
        l,
        pe,
        f,
        u,
        L,
        A,
        E,
        k
      ), () => {
        $.unregister(l);
      };
  }, [
    $,
    l,
    E,
    k,
    f,
    u,
    h,
    pe,
    Z,
    L
  ]), T(() => (h && (h.current = Z({ stateCallback: !0 })), () => {
    h && (h.current = null);
  }), [h, Z]), T(() => {
    ie.current && ie.current({
      isSubmitting: V,
      hasErrors: G
    });
  }, [V, G]);
  const ze = ut(Q), Je = N(
    () => ({
      formName: l,
      initialFiles: o.initialFiles,
      isLoadingInitialFiles: o.isLoadingInitialFiles,
      renderCustomField: o.renderCustomField,
      isLoading: F,
      useUpload: U,
      submitConfig: e
    }),
    [
      l,
      o.initialFiles,
      o.isLoadingInitialFiles,
      o.renderCustomField,
      F,
      U,
      e
    ]
  ), ve = s.handleSubmit(_), ye = /* @__PURE__ */ Y(
    "form",
    {
      ref: de,
      onSubmit: (n) => {
        const t = document.activeElement;
        t instanceof HTMLElement && (t.tagName === "BUTTON" || t.tagName === "INPUT" && t.type === "submit") || ne(), ve(n);
      },
      className: z(
        "flex flex-col w-full mx-auto max-w-content",
        v,
        y?.showSectionsSidepanel && "[&>div:last-child]:pb-6"
      ),
      children: [
        ze.map((n, t) => {
          const c = t !== 0 && n.type !== "section" ? "mt-4" : "";
          switch (n.type) {
            case "switchGroup":
              return /* @__PURE__ */ i("div", { className: c, children: /* @__PURE__ */ i(
                ot,
                {
                  fields: n.fields,
                  dependentFields: n.dependentFields,
                  cardSelectDependentFields: n.cardSelectDependentFields
                }
              ) }, `switch-group-${t}`);
            case "field": {
              const d = n.cardSelectDependentFields ? /* @__PURE__ */ i(
                lt.Provider,
                {
                  value: mt(
                    n.cardSelectDependentFields
                  ),
                  children: /* @__PURE__ */ i(Ce, { field: n.item.field })
                }
              ) : /* @__PURE__ */ i(Ce, { field: n.item.field });
              return /* @__PURE__ */ i(
                "div",
                {
                  className: z(c, "has-[>span.hidden]:hidden"),
                  children: d
                },
                n.item.field.id
              );
            }
            case "row":
              return /* @__PURE__ */ i("div", { className: c, children: /* @__PURE__ */ i(it, { row: n.item }) }, `row-${n.index}`);
            case "section":
              return /* @__PURE__ */ i(
                "div",
                {
                  className: t !== 0 ? Ne : "",
                  children: /* @__PURE__ */ i(rt, { section: n.item })
                },
                n.item.id
              );
            default:
              return null;
          }
        }),
        me && /* @__PURE__ */ i("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: me.message }),
        !w && J && /* @__PURE__ */ i("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ i(
          bt,
          {
            type: "submit",
            label: g,
            icon: B,
            loading: V,
            disabled: G || F
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ i(at.Provider, { value: Je, children: /* @__PURE__ */ Y(et, { ...s, children: [
    j && ce.length > 0 ? /* @__PURE__ */ Y("div", { ref: se, className: "flex w-full overflow-scroll", children: [
      /* @__PURE__ */ i("div", { className: "sticky top-0 h-fit shrink-0 self-start pt-2", children: /* @__PURE__ */ i(
        Ee,
        {
          items: ce,
          activeItem: je,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ i("div", { className: "sticky bottom-0 top-0 mr-4 w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ i("div", { className: "flex w-full justify-center px-4 py-2", children: ye })
    ] }) : /* @__PURE__ */ i("div", { className: "flex justify-center p-4", children: ye }),
    !H && /* @__PURE__ */ i(
      tt,
      {
        ref: fe,
        isActionBar: w,
        isDirty: Ue,
        actionBarStatus: X,
        hasErrors: G,
        errorCount: Ie,
        resolvedActionBarLabel: Ye,
        submitLabel: g,
        submitIcon: B,
        discardableChanges: K,
        discardLabel: Me,
        discardIcon: Ve,
        issuesOneLabel: r.actionBar.issues.one,
        issuesOtherLabel: r.actionBar.issues.other,
        onSubmit: () => ve(),
        onDiscard: qe,
        goToPreviousError: Ze,
        goToNextError: $e
      }
    )
  ] }) });
}
export {
  Jt as F0Form
};
