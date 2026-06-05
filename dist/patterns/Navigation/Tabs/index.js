import { jsx as i, jsxs as f } from "react/jsx-runtime";
import { useState as x, useEffect as N } from "react";
import { withDataTestId as w } from "../../../lib/data-testid/index.js";
import { experimentalComponent as g } from "../../../lib/experimental.js";
import { TabNavigation as d, TabNavigationLink as r } from "../../../ui/tab-navigation.js";
import { F0Icon as S } from "../../../components/F0Icon/index.js";
import "../../../icons/app/Menu.js";
import I from "../../../icons/app/Upsell.js";
import { useNavigation as p, Link as y } from "../../../lib/linkHandler.js";
import { withSkeleton as j } from "../../../lib/skeleton.js";
const C = ({
  tabs: a,
  activeTabId: h,
  setActiveTabId: m,
  secondary: s = !1,
  embedded: v = !1
}) => {
  const c = a[0], [n, b] = x(
    h ?? ("id" in c ? c.id : void 0)
  );
  N(() => {
    n && m?.(n);
  }, [m, n]);
  const { isActive: T } = p(), o = v ? [a[0]] : a, l = [...o].sort(
    (t, e) => t.index ? 1 : e.index ? -1 : 0
  ).find(
    (t) => "href" in t ? T(t.href) : n === t.id
  );
  return /* @__PURE__ */ i(
    d,
    {
      secondary: s,
      asChild: !0,
      "aria-label": s ? "primary-navigation" : "secondary-navigation",
      children: o.length === 1 ? /* @__PURE__ */ i("li", { className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground", children: o[0].label }) : o.map(({ label: t, ...e }, u) => {
        const k = l && "href" in l && "href" in e ? l.href === e.href : "id" in e && n === e.id;
        return /* @__PURE__ */ i(
          r,
          {
            active: k,
            href: "href" in e ? e.href : void 0,
            onClick: () => {
              "id" in e && b?.(e.id);
            },
            secondary: s,
            asChild: !0,
            children: /* @__PURE__ */ f(y, { role: "link", ...e, children: [
              e.variant === "upsell" && /* @__PURE__ */ i(
                S,
                {
                  icon: I,
                  size: "md",
                  className: "mr-1 text-[hsl(var(--promote-50))]"
                }
              ),
              t
            ] })
          },
          u
        );
      })
    }
  );
}, L = ({
  secondary: a
}) => /* @__PURE__ */ f(
  d,
  {
    "aria-label": a ? "Secondary empty nav" : "Main empty nav",
    secondary: a,
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ i(r.Skeleton, { className: "w-24" }),
      /* @__PURE__ */ i(r.Skeleton, { className: "w-20" }),
      /* @__PURE__ */ i(r.Skeleton, { className: "w-28" }),
      /* @__PURE__ */ i(r.Skeleton, { className: "w-20" })
    ]
  }
), J = w(
  g("Tabs", j(C, L))
);
export {
  C as BaseTabs,
  J as Tabs,
  L as TabsSkeleton
};
