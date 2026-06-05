import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { useState as N, useCallback as x } from "react";
import { F0Icon as p } from "../../../../components/F0Icon/index.js";
import v from "../../../../icons/app/ChevronDown.js";
import q from "../../../../icons/app/ChevronRight.js";
import "../../../../icons/app/Menu.js";
import C from "../../../../icons/app/Question.js";
import { Card as F, CardHeader as k, CardContent as I } from "../../../../ui/Card/Card.js";
import { cn as d } from "../../../../lib/utils.js";
import { useI18n as T } from "../../../../lib/providers/i18n/i18n-provider.js";
const $ = ({ item: o, isExpanded: n, onToggle: s }) => /* @__PURE__ */ l(
  "div",
  {
    className: d(
      "flex flex-col rounded-lg px-3 -mx-3 transition-colors duration-200",
      n && "bg-f1-background-secondary"
    ),
    children: [
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: () => s(o.id),
          className: "flex w-full items-start justify-between gap-3 py-3 text-left transition-colors hover:opacity-80",
          "aria-expanded": n,
          "aria-controls": `faq-answer-${o.id}`,
          children: [
            /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground", children: o.question }),
            /* @__PURE__ */ r("span", { className: "mt-0.5 flex-shrink-0 text-f1-foreground-secondary", children: /* @__PURE__ */ r(
              p,
              {
                icon: n ? v : q,
                size: "sm",
                className: d(
                  "transition-transform duration-200",
                  n && "text-f1-foreground"
                )
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ r(
        "div",
        {
          id: `faq-answer-${o.id}`,
          role: "region",
          "aria-labelledby": `faq-question-${o.id}`,
          className: d(
            "overflow-hidden transition-all duration-200",
            n ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          ),
          children: /* @__PURE__ */ r("p", { className: "pb-3 text-base text-f1-foreground-secondary", children: o.answer })
        }
      )
    ]
  }
), L = ({
  headerIcon: o,
  items: n,
  defaultExpandedId: s,
  expandedId: t,
  onExpandedChange: f,
  allowMultiple: c = !1
}) => {
  const h = T()?.ai?.growth?.faqCard?.title ?? "Questions before getting started", b = o ?? C, [m, g] = N(
    () => new Set(s ? [s] : [])
  ), i = t !== void 0, w = x(
    (e) => i ? t === e : m.has(e),
    [i, t, m]
  ), y = x(
    (e) => {
      i ? f?.(t === e ? null : e) : g((u) => {
        const a = new Set(u);
        return a.has(e) ? a.delete(e) : (c || a.clear(), a.add(e)), a;
      });
    },
    [i, t, f, c]
  );
  return n.length === 0 ? null : /* @__PURE__ */ l(F, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ l(k, { className: "-mx-4 -mt-4 mb-2 flex flex-row items-center gap-2 rounded-t-xl bg-f1-background-secondary px-4 py-3", children: [
      /* @__PURE__ */ r("div", { className: "flex h-6 w-6 items-center justify-center rounded-full border border-f1-border-secondary", children: /* @__PURE__ */ r(
        p,
        {
          icon: b,
          size: "sm",
          className: "text-f1-foreground-secondary"
        }
      ) }),
      /* @__PURE__ */ r("h3", { className: "text-base font-semibold text-f1-foreground", children: h })
    ] }),
    /* @__PURE__ */ r(I, { className: "flex flex-col divide-y divide-f1-border p-0", children: n.map((e) => /* @__PURE__ */ r(
      $,
      {
        item: e,
        isExpanded: w(e.id),
        onToggle: y
      },
      e.id
    )) })
  ] });
};
export {
  L as F0FAQCard
};
