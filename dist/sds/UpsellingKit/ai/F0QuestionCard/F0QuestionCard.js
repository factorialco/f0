import { jsxs as o, jsx as r, Fragment as I } from "react/jsx-runtime";
import { useState as C, useCallback as b } from "react";
import { F0Icon as k } from "../../../../components/F0Icon/index.js";
import P from "../../../../icons/app/ChevronLeft.js";
import R from "../../../../icons/app/ChevronRight.js";
import "../../../../icons/app/Menu.js";
import { Card as B, CardContent as D, CardFooter as O } from "../../../../ui/Card/Card.js";
import { useI18n as Q } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Checkbox as T } from "../../../../components/F0Checkbox/F0Checkbox.js";
import { F0Button as v } from "../../../../components/F0Button/F0Button.js";
const Y = ({
  steps: a,
  onComplete: h,
  onSkip: p,
  sendAsMessage: x = !1,
  onSendMessage: d
}) => {
  const [t, g] = C(0), [l, w] = C({}), f = Q(), n = a.length, m = a[t], N = l[t] ?? [], S = b(
    (e, i) => {
      w((c) => {
        const u = c[t] ?? [], s = i ? [...u, e] : u.filter((z) => z !== e);
        return { ...c, [t]: s };
      });
    },
    [t]
  ), j = b(() => {
    t > 0 && g((e) => e - 1);
  }, [t]), y = b(() => {
    if (t < n - 1)
      g((e) => e + 1);
    else {
      if (x && d) {
        const e = Object.entries(l).map(([i, c]) => a[parseInt(i)].options.filter((s) => c.includes(s.id)).map((s) => s.label)).flat();
        e.length > 0 && d(e.join(", "));
      }
      h?.(l);
    }
  }, [
    t,
    n,
    x,
    d,
    l,
    a,
    h
  ]), F = t === n - 1, L = n > 1, q = p != null;
  return n === 0 || !m ? null : /* @__PURE__ */ o(B, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ o(D, { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ r("h3", { className: "text-base font-semibold text-f1-foreground", children: m.question }),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: m.options.map((e) => /* @__PURE__ */ r("div", { className: "flex items-center gap-2.5", children: /* @__PURE__ */ r(
        T,
        {
          id: e.id,
          title: e.label,
          checked: N.includes(e.id),
          onCheckedChange: (i) => S(e.id, i === !0)
        }
      ) }, e.id)) })
    ] }),
    /* @__PURE__ */ o(O, { className: "-mx-4 -mb-4 mt-4 flex items-center justify-between rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: [
      /* @__PURE__ */ r("div", { className: "flex min-w-[7.5rem] items-center justify-start gap-1", children: L && /* @__PURE__ */ o(I, { children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: j,
            disabled: t <= 0,
            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50",
            "aria-label": "Previous",
            children: /* @__PURE__ */ r(k, { icon: P, size: "sm" })
          }
        ),
        /* @__PURE__ */ o("span", { className: "min-w-[2.5rem] text-center text-sm text-f1-foreground-secondary", children: [
          t + 1,
          "/",
          n
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: y,
            disabled: t >= n - 1,
            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50",
            "aria-label": "Next",
            children: /* @__PURE__ */ r(k, { icon: R, size: "sm" })
          }
        )
      ] }) }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
        q && /* @__PURE__ */ r(
          v,
          {
            type: "button",
            variant: "ghost",
            size: "md",
            label: f?.ai?.growth?.questionCard?.skipLabel ?? "Skip",
            onClick: p
          }
        ),
        /* @__PURE__ */ r(
          v,
          {
            type: "button",
            variant: "outline",
            size: "md",
            label: F ? f?.ai?.growth?.questionCard?.sendLabel ?? "Send" : f?.ai?.growth?.questionCard?.actionLabel ?? "Next",
            onClick: y
          }
        )
      ] })
    ] })
  ] });
};
export {
  Y as F0QuestionCardMultiStep
};
