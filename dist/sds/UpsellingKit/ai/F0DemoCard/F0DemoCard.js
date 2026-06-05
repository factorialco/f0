import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { cn as f } from "../../../../lib/utils.js";
import { Card as b, CardContent as g, CardFooter as x } from "../../../../ui/Card/Card.js";
import { useI18n as u } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as d } from "../../../../components/F0Button/F0Button.js";
const y = ({
  preview: l,
  moduleName: n,
  description: i,
  onAction: s,
  actionHref: o
}) => {
  const t = u(), c = t?.ai?.growth?.demoCard?.title ?? "Show {{moduleName}} in action", a = t?.ai?.growth?.demoCard?.actionLabel ?? "Start demo", m = c.replace("{{moduleName}}", n);
  return /* @__PURE__ */ r(b, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ r(g, { className: "flex flex-col gap-4 p-0", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: f(
            "overflow-hidden rounded-lg border border-f1-border",
            "ring-1 ring-f1-border/50 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary"
          ),
          children: l
        }
      ),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-f1-foreground", children: m }),
        /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: i })
      ] })
    ] }),
    /* @__PURE__ */ e(x, { className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: o ? /* @__PURE__ */ e(
      d,
      {
        variant: "default",
        size: "md",
        label: a,
        href: o,
        target: "_blank"
      }
    ) : /* @__PURE__ */ e(
      d,
      {
        type: "button",
        variant: "default",
        size: "md",
        label: a,
        onClick: s
      }
    ) })
  ] });
};
export {
  y as F0DemoCard
};
