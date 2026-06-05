import { jsx as t, jsxs as A } from "react/jsx-runtime";
import { useControllableState as he } from "../../node_modules/.pnpm/@radix-ui_react-use-controllable-state@1.2.2_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.js";
import { forwardRef as ve, useId as be, useState as x, useMemo as D, useEffect as W, useCallback as Ie } from "react";
import ye from "../../icons/app/Calculator.js";
import we from "../../icons/app/Check.js";
import "../../icons/app/Menu.js";
import { cn as oe } from "../../lib/utils.js";
import { Input as Ne } from "../../ui/input.js";
import { InputMessages as ee } from "../F0InputField/components/InputMessages.js";
import { Label as Ve } from "../F0InputField/components/Label.js";
import { Popover as Oe, PopoverTrigger as Ae, PopoverContent as Ce } from "../../ui/popover.js";
import { Arrows as Fe } from "./components/Arrows.js";
import { extractNumber as V } from "./internal/extractNumber.js";
import { useI18n as Se } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as ne } from "../F0Button/F0Button.js";
const O = (o, e, l) => new Intl.NumberFormat(e, {
  maximumFractionDigits: l,
  useGrouping: !1
}).format(o), Me = (o, e, l) => {
  if (e)
    return {
      type: "error",
      message: typeof e == "string" ? e : void 0
    };
  if (o) return { type: "default", message: o };
  if (l) return l;
};
function te({
  label: o,
  htmlFor: e,
  disabled: l
}) {
  return /* @__PURE__ */ t(
    Ve,
    {
      label: o,
      htmlFor: e,
      disabled: l,
      className: "mb-2"
    }
  );
}
function Te(o) {
  if (!(!o || o === "auto"))
    return { width: o };
}
function re({
  children: o,
  extraContent: e,
  inputWidth: l,
  trailingAction: s
}) {
  const r = !l || l === "auto";
  return /* @__PURE__ */ A("div", { className: "flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        style: Te(l),
        className: oe(r ? "w-auto" : void 0),
        children: o
      }
    ),
    e && /* @__PURE__ */ t("span", { className: "shrink-0 text-f1-foreground-secondary", children: e }),
    s
  ] });
}
const Ee = ve(function({
  locale: e,
  id: l,
  value: s,
  maxDecimals: r,
  step: m,
  min: c,
  max: d,
  onChange: C,
  units: le,
  extraContent: F,
  inputWidth: G,
  popover: g,
  label: h,
  hint: S,
  error: H,
  status: $,
  hideLabel: q = !1,
  disabled: M,
  readonly: z,
  loading: J,
  ...ue
}, se) {
  const y = Se(), ie = be(), T = l ?? ie, [E, ae] = he({
    prop: g?.open,
    defaultProp: !1,
    onChange: g?.onOpenChange
  }), [P, w] = x(
    () => s != null ? O(s, e, r) : ""
  ), [K, Q] = x(
    s ?? null
  ), U = D(() => {
    if (S !== void 0)
      return S;
    if (c != null && d != null)
      return y.t("numberInput.between", { min: c, max: d });
    if (c != null)
      return y.t("numberInput.greaterThan", { min: c });
    if (d != null)
      return y.t("numberInput.lessThan", { max: d });
  }, [S, c, d]), X = !!F, v = g?.commitMode === "deferred", b = g !== void 0 || X, Y = !q && h != null, I = Me(U, H, $), Z = b && I != null, N = !!(M || z || J), _ = (n) => {
    n && N || ae(n);
  };
  W(() => {
    !v || !E || Q(s ?? null);
  }, [v, E, s]);
  const f = v ? K : s, B = D(
    () => v ? (n) => Q(n) : C,
    [v, C]
  ), ce = Ie(
    (n) => {
      const u = n.nativeEvent.data;
      if (!u) return;
      const a = n.currentTarget, p = a.selectionStart ?? 0, k = a.selectionEnd ?? 0, j = a.value.slice(0, p) + u + a.value.slice(k);
      (!V(j, { maxDecimals: r }) || r === 0 && /[.,]/.test(u)) && n.preventDefault();
    },
    [r]
  ), L = (n) => {
    const i = V(n, { maxDecimals: r });
    if (!i)
      return;
    const { value: u } = i;
    if (u === null) {
      w(""), B?.(null);
      return;
    }
    const a = Math.max(
      c ?? -1 / 0,
      Math.min(d ?? 1 / 0, u)
    );
    if (a === u) {
      w(i.formattedValue), B?.(u);
      return;
    }
    const p = V(a.toString(), {
      maxDecimals: r
    });
    w(p?.formattedValue ?? ""), B?.(p?.value ?? null);
  }, de = (n) => () => {
    if (!m) return;
    if (f == null)
      return L(O(m, e, r));
    const i = n === "increase" ? f + m : f - m;
    c != null && i < c || d != null && i > d || L(O(i, e, r));
  };
  W(() => {
    const n = V(P, { maxDecimals: r });
    f === void 0 || f == n?.value || w(
      f != null ? O(f, e, r) : ""
    );
  }, [P, f, e, r]);
  const fe = I ? { type: I.type } : void 0, R = /* @__PURE__ */ t("div", { className: "group relative", children: /* @__PURE__ */ t(
    Ne,
    {
      type: "text",
      ref: se,
      id: T,
      value: P,
      inputMode: r === 0 ? "numeric" : "decimal",
      onChange: L,
      ...ue,
      label: b ? h ?? "" : h,
      hideLabel: q || b,
      hint: b ? "" : U,
      error: b ? void 0 : H,
      status: b ? fe : $,
      disabled: M,
      loading: J,
      readonly: z,
      onBeforeInput: ce,
      appendTag: le,
      append: m ? /* @__PURE__ */ t(Fe, { step: m, disabled: M, onClickArrow: de }) : void 0
    }
  ) });
  if (g !== void 0) {
    const {
      icon: n = ye,
      side: i = "bottom",
      align: u = "start",
      triggerLabel: a,
      apply: p
    } = g, k = v, j = p?.label ?? y.actions.apply, pe = p?.icon ?? we, me = p?.closeOnApply ?? !0, ge = () => {
      C?.(K), me && _(!1);
    };
    return /* @__PURE__ */ A(Oe, { open: E, onOpenChange: _, children: [
      /* @__PURE__ */ t(Ae, { asChild: !0, children: /* @__PURE__ */ t(
        ne,
        {
          variant: "outline",
          icon: n,
          disabled: N,
          hideLabel: !a,
          label: a ?? h
        }
      ) }),
      /* @__PURE__ */ t(
        Ce,
        {
          side: i,
          align: u,
          className: oe(
            "w-auto min-w-[220px] rounded-xl border border-solid border-f1-border-secondary p-3"
          ),
          children: /* @__PURE__ */ A("div", { className: "flex flex-col", children: [
            Y ? /* @__PURE__ */ t(
              te,
              {
                label: h,
                htmlFor: T,
                disabled: N
              }
            ) : null,
            /* @__PURE__ */ t(
              re,
              {
                extraContent: F,
                inputWidth: G,
                trailingAction: k ? /* @__PURE__ */ t(
                  ne,
                  {
                    variant: "default",
                    icon: pe,
                    label: j,
                    onClick: ge
                  }
                ) : void 0,
                children: R
              }
            ),
            Z ? /* @__PURE__ */ t(ee, { status: I }) : null
          ] })
        }
      )
    ] });
  }
  return X ? /* @__PURE__ */ A("div", { className: "flex flex-col", children: [
    Y ? /* @__PURE__ */ t(
      te,
      {
        label: h,
        htmlFor: T,
        disabled: N
      }
    ) : null,
    /* @__PURE__ */ t(re, { extraContent: F, inputWidth: G, children: R }),
    Z ? /* @__PURE__ */ t(ee, { status: I }) : null
  ] }) : R;
});
Ee.displayName = "NumberInputInternal";
export {
  Ee as NumberInputInternal
};
