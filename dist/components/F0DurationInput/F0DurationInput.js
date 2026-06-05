import { jsxs as z, jsx as a } from "react/jsx-runtime";
import { cva as ee } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as re, useId as oe, useRef as h, useMemo as te, useState as ne, useCallback as s, useEffect as se, Fragment as ie } from "react";
import { F0Icon as ae } from "../F0Icon/index.js";
import de from "../../icons/app/Bullet.js";
import "../../icons/app/Menu.js";
import { cn as N } from "../../lib/utils.js";
import { InputMessages as le } from "../F0InputField/components/InputMessages.js";
import { Label as ce } from "../F0InputField/components/Label.js";
import { UNIT_ORDER as A, DEFAULT_UNITS as $, secondsToVisibleFields as V, fieldsToSeconds as C, clampValue as fe } from "./utils.js";
const ue = {
  days: "d",
  hours: "h",
  minutes: "min",
  seconds: "s"
}, be = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, me = 2, pe = ee({
  base: [
    "inline-flex items-center gap-1 overflow-hidden rounded",
    "border border-solid border-f1-border bg-f1-background",
    "transition-[border-color]",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none"
  ],
  variants: {
    size: {
      sm: "px-2 py-1",
      md: "px-3 py-[6px]"
    },
    status: {
      default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error: "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10 focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical"
    },
    disabled: {
      true: "cursor-not-allowed aria-disabled:cursor-not-allowed bg-f1-background-tertiary",
      false: "cursor-text"
    },
    readonly: {
      true: "border-f1-border-secondary",
      false: ""
    }
  },
  compoundVariants: [
    {
      disabled: !1,
      readonly: !0,
      class: "bg-f1-background-secondary"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "default",
      class: "hover:border-f1-border-hover"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "warning",
      class: "hover:border-f1-border-warning-bold"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "info",
      class: "hover:border-f1-border-info-bold"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "error",
      class: "hover:border-f1-border-critical-bold"
    }
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    disabled: !1,
    readonly: !1
  }
}), he = re(
  function({
    id: O,
    "aria-describedby": M,
    "aria-invalid": T,
    label: g,
    ariaLabel: y,
    hideLabel: j = !1,
    value: d,
    onChange: E,
    onBlur: S,
    units: U = $,
    fields: u,
    status: k,
    disabled: t = !1,
    required: B = !1,
    readonly: w = !1,
    size: H = "md"
  }, X) {
    const L = oe(), v = h(/* @__PURE__ */ new Map()), R = h(!1), o = te(() => {
      const e = A.filter((r) => U.includes(r));
      return e.length > 0 ? e : A.filter((r) => $.includes(r));
    }, [U]), x = o.join("|"), [i, I] = ne(
      () => V(d, o)
    ), b = h(d), _ = h(x);
    (d !== b.current || x !== _.current) && (b.current = d, _.current = x, I(V(d, o)));
    const G = `${L}-${o[0]}`, m = s(
      (e) => {
        const r = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        for (const n of o)
          r[n] = e[n];
        return r;
      },
      [o]
    ), F = s(
      (e) => {
        const r = m(e), n = C(r);
        I(r), b.current = n, E(n);
      },
      [E, m]
    ), W = s(
      (e, r) => (n) => {
        const l = n.target.value;
        if (l === "") {
          F({ ...i, [e]: 0 });
          return;
        }
        const p = l.replace(/\D/g, "");
        if (p === "") return;
        const c = parseInt(p, 10);
        if (isNaN(c)) return;
        const f = fe(c, r);
        F({ ...i, [e]: f });
      },
      [i, F]
    ), q = s(() => {
      const e = m(i), r = C(e);
      I(V(r, o)), b.current = r, S?.();
    }, [i, S, m, o]), J = s(
      (e) => {
        e.metaKey || e.ctrlKey || e.altKey || e.key.length > 1 || /^\d$/.test(e.key) || e.preventDefault();
      },
      []
    ), P = s(
      (e) => {
        if (t || e.target instanceof HTMLInputElement) return;
        const r = o[0];
        r && v.current.get(r)?.focus();
      },
      [t, o]
    ), Q = s(
      (e) => (r) => {
        r ? v.current.set(e, r) : v.current.delete(e);
      },
      []
    ), D = (y && y.trim().length > 0 ? y : void 0) || g || void 0;
    se(() => {
      process.env.NODE_ENV !== "production" && !D && !R.current && (R.current = !0, console.warn(
        "F0DurationInput: provide a non-empty label or ariaLabel for accessibility."
      ));
    }, [D]);
    const K = k?.type ?? "default", Y = !j && g.length > 0;
    return /* @__PURE__ */ z(
      "div",
      {
        ref: X,
        className: N(
          "flex flex-col gap-2",
          "pointer-events-none",
          t && "cursor-not-allowed"
        ),
        children: [
          Y && /* @__PURE__ */ a(
            ce,
            {
              label: g,
              required: B,
              htmlFor: G,
              className: "min-w-0 flex-1",
              disabled: t
            }
          ),
          /* @__PURE__ */ a(
            "div",
            {
              id: O,
              "data-testid": "input-field-wrapper",
              className: N(
                "pointer-events-auto",
                pe({
                  size: H,
                  status: K,
                  disabled: t,
                  readonly: w
                })
              ),
              onClick: P,
              role: "group",
              "aria-label": D,
              "aria-describedby": M,
              "aria-invalid": T,
              "aria-disabled": t || void 0,
              "data-status": K,
              "data-disabled": t ? "" : void 0,
              children: o.map((e, r) => {
                const n = u?.[e]?.max, l = i[e], p = u?.[e]?.suffix ?? ue[e], c = l > 0 ? String(l) : "", f = u?.[e]?.maxVisibleDigits, Z = typeof f == "number" && Number.isFinite(f) ? Math.max(1, Math.floor(f)) : me;
                return /* @__PURE__ */ z(ie, { children: [
                  r > 0 && /* @__PURE__ */ a(
                    ae,
                    {
                      icon: de,
                      size: "xs",
                      color: "default",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ a(
                    "input",
                    {
                      ref: Q(e),
                      id: `${L}-${e}`,
                      className: N(
                        "border-none bg-transparent p-0 text-inherit outline-none",
                        "font-inherit text-[length:inherit] leading-[inherit]",
                        "placeholder:text-f1-foreground-secondary",
                        t && "pointer-events-none"
                      ),
                      style: {
                        width: `${Math.min(
                          Math.max(c.length, 1),
                          Z
                        )}ch`
                      },
                      "aria-label": u?.[e]?.ariaLabel ?? be[e],
                      "aria-describedby": M,
                      "aria-invalid": T,
                      value: c,
                      placeholder: "0",
                      onChange: W(e, n),
                      onBlur: q,
                      onKeyDown: J,
                      inputMode: "numeric",
                      disabled: t,
                      readOnly: w,
                      "aria-readonly": w || void 0
                    }
                  ),
                  /* @__PURE__ */ a("span", { className: "text-f1-foreground-secondary", children: p })
                ] }, e);
              })
            }
          ),
          /* @__PURE__ */ a(le, { status: k })
        ]
      }
    );
  }
);
he.displayName = "F0DurationInput";
export {
  he as F0DurationInput
};
