import { jsxs as f, jsx as o } from "react/jsx-runtime";
import * as t from "react";
import { F0Icon as m } from "../../components/F0Icon/index.js";
import h from "../../icons/app/ChevronRight.js";
import C from "../../icons/app/InfoCircleLine.js";
import { Link as p } from "../../lib/linkHandler.js";
import { cn as s } from "../../lib/utils.js";
import { TooltipProvider as N, Tooltip as g, TooltipTrigger as v, TooltipContent as w } from "../tooltip.js";
import { useI18n as y } from "../../lib/providers/i18n/i18n-provider.js";
const R = t.forwardRef(({ className: a, href: r, onClick: e, disabled: n, children: i, ...d }, l) => {
  const { actions: c } = y();
  return /* @__PURE__ */ f(
    "div",
    {
      ref: l,
      role: "article",
      className: s(
        "flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-4 shadow",
        (r || e) && !n && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md",
        a
      ),
      ...d,
      onClick: () => {
        if (!n && !r && e)
          return e();
      },
      children: [
        r && !n && /* @__PURE__ */ o(p, { href: r, className: "absolute inset-0 block", tabIndex: 0, children: /* @__PURE__ */ o("span", { className: "sr-only", children: c.view }) }),
        i
      ]
    }
  );
});
R.displayName = "Card";
const k = t.forwardRef(({ className: a, ...r }, e) => /* @__PURE__ */ o(
  "div",
  {
    ref: e,
    className: s("flex flex-row gap-1.5", a),
    ...r
  }
));
k.displayName = "CardHeader";
const T = t.forwardRef(({ className: a, ...r }, e) => /* @__PURE__ */ o(
  "h3",
  {
    ref: e,
    className: s("text-base font-medium text-f1-foreground", a),
    ...r
  }
));
T.displayName = "CardTitle";
const F = t.forwardRef(({ className: a, ...r }, e) => /* @__PURE__ */ o(
  "h3",
  {
    ref: e,
    className: s(
      "line-clamp-1 text-base font-normal text-f1-foreground-secondary",
      a
    ),
    ...r
  }
));
F.displayName = "CardSubtitle";
const I = t.forwardRef(({ className: a, content: r }, e) => /* @__PURE__ */ o(
  "div",
  {
    ref: e,
    className: s("-ml-1 flex h-6 w-6 items-center justify-center", a),
    children: /* @__PURE__ */ o(N, { children: /* @__PURE__ */ f(g, { children: [
      /* @__PURE__ */ o(
        v,
        {
          className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
          "aria-label": r,
          children: /* @__PURE__ */ o(m, { icon: C, size: "md" })
        }
      ),
      /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o("p", { children: r }) })
    ] }) })
  }
));
I.displayName = "CardInfo";
const j = t.forwardRef(({ className: a, title: r, icon: e = h, href: n, ...i }, d) => {
  const l = s(
    "group inline-flex aspect-square h-6 items-center justify-center gap-1",
    //layout
    "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
    //appearance
    "whitespace-nowrap px-0 text-base font-medium text-f1-foreground",
    //typography
    "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1",
    //interaction
    a
  ), c = /* @__PURE__ */ o(m, { size: "sm", icon: e, className: "text-f1-icon-bold" });
  if (!n) {
    const { target: b, rel: L, download: z, type: P, ...x } = i;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: d,
        className: l,
        "aria-label": r,
        type: "button",
        ...x,
        children: c
      }
    );
  }
  return /* @__PURE__ */ o(
    p,
    {
      ref: d,
      className: l,
      role: "button",
      "aria-label": r,
      href: n,
      ...i,
      children: c
    }
  );
});
j.displayName = "CardLink";
const H = t.forwardRef(({ className: a, ...r }, e) => /* @__PURE__ */ o(
  "div",
  {
    ref: e,
    className: s("relative flex grow flex-col", a),
    ...r
  }
));
H.displayName = "CardContent";
const u = t.forwardRef(({ className: a, ...r }, e) => /* @__PURE__ */ o("div", { ref: e, className: s("flex items-center", a), ...r }));
u.displayName = "CardFooter";
const G = t.forwardRef(function({ className: r, ...e }, n) {
  return /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      className: s("flex text-3xl font-semibold", r),
      ...e
    }
  );
});
u.displayName = "CardComment";
export {
  R as Card,
  G as CardComment,
  H as CardContent,
  u as CardFooter,
  k as CardHeader,
  I as CardInfo,
  j as CardLink,
  F as CardSubtitle,
  T as CardTitle
};
