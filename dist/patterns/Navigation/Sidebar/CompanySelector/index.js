import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { useMemo as p, useState as v } from "react";
import { F0AvatarCompany as w } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { F0Icon as y } from "../../../../components/F0Icon/index.js";
import { F0Select as C } from "../../../../components/F0Select/index.js";
import N from "../../../../icons/app/ChevronDown.js";
import k from "../../../../icons/app/Circle.js";
import "../../../../icons/app/Menu.js";
import { cn as u, focusRing as S } from "../../../../lib/utils.js";
import { Skeleton as d } from "../../../../ui/skeleton.js";
import { motion as j } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { OneEllipsis as F } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { useI18n as z } from "../../../../lib/providers/i18n/i18n-provider.js";
function K({
  companies: r,
  selected: n,
  onChange: i,
  isLoading: s = !1,
  withNotification: o = !1,
  additionalOptions: l = []
}) {
  const a = p(
    () => r.find((c) => c.id === n) || r[0],
    [r, n]
  );
  return s ? /* @__PURE__ */ m("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(d, { className: "size-6" }),
    /* @__PURE__ */ e(d, { className: "h-3 w-14" })
  ] }) : r.length + (l?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    h,
    {
      company: a,
      withNotification: o
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    I,
    {
      companies: r,
      selected: a,
      onChange: i,
      additionalOptions: l,
      children: /* @__PURE__ */ e(
        h,
        {
          company: a,
          withNotification: o
        }
      )
    }
  ) });
}
const I = ({
  companies: r,
  selected: n,
  onChange: i,
  children: s,
  additionalOptions: o = []
}) => {
  const l = z(), [a, c] = v(!1), g = p(
    () => [
      ...r.map((t) => ({
        value: t.id,
        label: t.name,
        avatar: {
          type: "company",
          name: t.name,
          src: t.logo,
          "aria-label": `${t.name} logo`
        }
      })),
      ...o.length ? [{ type: "separator" }] : [],
      ...o
    ],
    [r, o]
  ), x = (t) => {
    const f = o?.find((b) => b.value === t);
    if (f?.onClick) {
      f.onClick();
      return;
    }
    i(t);
  };
  return /* @__PURE__ */ e(
    C,
    {
      label: l.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: g,
      value: n.id,
      onChange: x,
      placeholder: l.navigation.sidebar.companySelector.placeholder,
      open: a,
      onOpenChange: c,
      children: /* @__PURE__ */ m(
        "div",
        {
          className: u(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            S()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            s,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              j.div,
              {
                animate: { rotate: a ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(y, { icon: N, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, h = ({
  company: r,
  withNotification: n = !1
}) => /* @__PURE__ */ m(
  "div",
  {
    className: u(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        w,
        {
          name: r?.name?.[0],
          src: r?.logo,
          size: "sm",
          badge: n ? { icon: k, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(F, { tag: "span", children: r?.name ?? "" })
    ]
  }
);
export {
  K as CompanySelector
};
