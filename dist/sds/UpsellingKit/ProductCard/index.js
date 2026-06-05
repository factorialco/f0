import { jsx as e, jsxs as n, Fragment as x } from "react/jsx-runtime";
import { useState as v, useEffect as w } from "react";
import { F0AvatarModule as b } from "../../../components/avatars/F0AvatarModule/index.js";
import { F0Icon as N } from "../../../components/F0Icon/index.js";
import C from "../../../icons/app/Cross.js";
import F from "../../../icons/special/One.js";
import { withDataTestId as k } from "../../../lib/data-testid/index.js";
import { F0Button as j } from "../../../components/F0Button/F0Button.js";
function y({
  title: s,
  description: c,
  onClick: l,
  onClose: t,
  isVisible: r,
  dismissable: i = !1,
  trackVisibility: a,
  type: o,
  ...f
}) {
  const [m, d] = v(r);
  w(() => {
    d(r), a && a(r);
  }, [r, a]);
  const u = () => {
    d(!1), t && t();
  }, g = () => o === "one-campaign" ? {
    background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
    borderRadius: "12px",
    padding: "1px"
  } : {}, h = () => o === "one-campaign" ? {
    background: "#fef7f8",
    borderRadius: "11px"
  } : {}, p = () => o === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary";
  return m && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e("div", { style: g(), children: /* @__PURE__ */ n(
    "div",
    {
      className: p(),
      style: h(),
      onClick: l,
      children: [
        /* @__PURE__ */ n(x, { children: [
          o === "one-campaign" ? /* @__PURE__ */ e("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ e(N, { icon: F, size: "lg", className: "!h-8 !w-8" }) }) : /* @__PURE__ */ e("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ e(
            b,
            {
              module: f.module,
              size: "lg"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-lg font-medium", children: s }),
            /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: c })
          ] }) })
        ] }),
        i && /* @__PURE__ */ e("div", { className: "h-6 w-6", children: /* @__PURE__ */ e(
          j,
          {
            variant: "ghost",
            icon: C,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          }
        ) })
      ]
    }
  ) }) }) });
}
const E = k(y);
export {
  E as ProductCard
};
