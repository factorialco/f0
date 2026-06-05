import { jsxs as t, Fragment as v, jsx as e } from "react/jsx-runtime";
import { F0AvatarIcon as w } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
import { F0Icon as b } from "../../../components/F0Icon/index.js";
import N from "../../../icons/app/ChevronDown.js";
import F from "../../../icons/app/ChevronUp.js";
import { cn as a, focusRing as I } from "../../../lib/utils.js";
import { Progress as j } from "../../../ui/progress.js";
import { F0Text as l } from "../../../components/F0Text/F0Text.js";
const H = ({
  props: m,
  contentId: d
}) => {
  const {
    status: r,
    icon: p,
    title: i,
    description: s,
    taskCount: o,
    completedCount: n,
    expanded: c,
    onExpandToggle: f,
    items: h,
    content: x,
    collapsible: u = !0
  } = m, g = ((h?.length ?? 0) > 0 || x !== void 0) && u;
  return /* @__PURE__ */ t(v, { children: [
    /* @__PURE__ */ e(w, { icon: p, size: "sm" }),
    /* @__PURE__ */ t("div", { className: "flex flex-1 items-center justify-between", children: [
      g ? /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          "aria-expanded": c,
          "aria-controls": d,
          onClick: f,
          className: a(
            "pointer-events-auto flex items-center gap-3 rounded-sm",
            I()
          ),
          children: [
            /* @__PURE__ */ e(
              "span",
              {
                className: a(
                  "text-base font-semibold text-f1-foreground whitespace-nowrap",
                  r === "completed" && "line-through"
                ),
                children: i
              }
            ),
            s && /* @__PURE__ */ e(l, { content: s, variant: "description", as: "span" }),
            /* @__PURE__ */ e(
              b,
              {
                icon: c ? F : N,
                size: "xs",
                color: "secondary"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: a(
              "text-base font-semibold text-f1-foreground whitespace-nowrap",
              r === "completed" && "line-through"
            ),
            children: i
          }
        ),
        s && /* @__PURE__ */ e(l, { content: s, variant: "description", as: "span" })
      ] }),
      n !== void 0 && o !== void 0 && /* @__PURE__ */ t(
        "div",
        {
          className: "flex items-center gap-2",
          "aria-label": `${n} of ${o} completed`,
          children: [
            /* @__PURE__ */ e(
              j,
              {
                value: o > 0 ? n / o * 100 : 0,
                color: r === "completed" ? "hsl(var(--positive-50))" : "hsl(var(--warning-50))",
                className: "h-1.5 w-20"
              }
            ),
            /* @__PURE__ */ t("span", { className: "text-sm font-medium text-f1-foreground whitespace-nowrap", children: [
              n,
              "/",
              o
            ] })
          ]
        }
      )
    ] })
  ] });
};
export {
  H as NestedtaskHeader
};
