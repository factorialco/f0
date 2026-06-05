import { jsxs as N, jsx as t } from "react/jsx-runtime";
import { useState as w, useEffect as D } from "react";
import { Counter as I } from "../Counter/index.js";
import { cn as j, focusRing as E } from "../../lib/utils.js";
import { ChevronToggle as G } from "../ChevronToggle/ChevronToggle.js";
import { Skeleton as p } from "../skeleton.js";
import { Await as h } from "../../lib/Await/Await.js";
import { F0Checkbox as K } from "../../components/F0Checkbox/F0Checkbox.js";
const T = ({
  label: u,
  itemCount: k,
  open: r,
  onOpenChange: v,
  showOpenChange: o,
  selectable: n,
  select: i,
  onSelectChange: s,
  className: g,
  chevronPosition: l = "trailing",
  closedRotation: x,
  openRotation: b
}) => {
  const [a, c] = w(r);
  D(() => {
    c(r);
  }, [r]);
  const y = () => {
    c(!a), v?.(!a);
  }, d = () => {
    o ? y() : n && s?.(!i);
  }, m = o && /* @__PURE__ */ t("span", { className: "text-f1-icon-secondary", "data-testid": "group-header-chevron", children: /* @__PURE__ */ t(
    G,
    {
      open: a,
      size: "sm",
      closedRotation: x,
      openRotation: b
    }
  ) }), C = (e) => {
    (e.key === "Enter" || e.key === " ") && (e.key === " " && e.preventDefault(), d());
  }, f = o || n;
  return /* @__PURE__ */ N(
    "div",
    {
      className: j(
        "pointer-events-auto flex items-center gap-2",
        f && E("rounded"),
        g
      ),
      onClick: d,
      ...f && {
        role: "button",
        tabIndex: 0,
        onKeyDown: C
      },
      children: [
        l === "leading" && m,
        n && /* @__PURE__ */ t(
          K,
          {
            checked: !!i,
            indeterminate: i === "indeterminate",
            title: "Select all",
            hideLabel: !0,
            onCheckedChange: (e) => s?.(e),
            stopPropagation: !0
          }
        ),
        /* @__PURE__ */ t(h, { resolve: u, fallback: /* @__PURE__ */ t(p, { className: "h-4 w-24" }), children: (e) => /* @__PURE__ */ t("h6", { className: "text-base font-semibold text-f1-foreground", children: e }) }),
        /* @__PURE__ */ t(h, { resolve: k, fallback: /* @__PURE__ */ t(p, { className: "h-4 w-5" }), children: (e) => e !== void 0 && /* @__PURE__ */ t(I, { value: e }) }),
        l === "trailing" && m
      ]
    }
  );
};
export {
  T as GroupHeader
};
