import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { F0Avatar as i } from "../../../../components/avatars/F0Avatar/index.js";
import { Card as c, CardContent as m, CardFooter as f } from "../../../../ui/Card/Card.js";
import { useI18n as x } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as l } from "../../../../components/F0Button/F0Button.js";
const y = ({
  moduleName: a,
  description: n,
  onAction: s,
  actionHref: o,
  imageSrc: d
}) => {
  const t = x()?.ai?.growth?.moduleCard?.actionLabel ?? "Learn more";
  return /* @__PURE__ */ r(c, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ e(m, { className: "flex flex-col gap-3 p-0", children: /* @__PURE__ */ r("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ e(
        i,
        {
          avatar: {
            type: "company",
            name: a || "",
            src: d || ""
          },
          size: "lg"
        }
      ),
      /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-col gap-1", children: [
        /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-f1-foreground", children: a }),
        /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: n })
      ] })
    ] }) }),
    /* @__PURE__ */ e(f, { className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: o ? /* @__PURE__ */ e(
      l,
      {
        variant: "outline",
        size: "md",
        label: t,
        href: o
      }
    ) : /* @__PURE__ */ e(
      l,
      {
        type: "button",
        variant: "outline",
        size: "md",
        label: t,
        onClick: s
      }
    ) })
  ] });
};
export {
  y as F0ModuleCard
};
