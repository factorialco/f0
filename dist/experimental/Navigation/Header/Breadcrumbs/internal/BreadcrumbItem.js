import { jsxs as p, jsx as a, Fragment as f } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { F0AvatarModule as h } from "../../../../../components/avatars/F0AvatarModule/index.js";
import { BreadcrumbSkeleton as g } from "./BreadcrumbSkeleton.js";
import { Link as B } from "../../../../../lib/linkHandler.js";
import { cn as t } from "../../../../../lib/utils.js";
import { BreadcrumbItem as x, BreadcrumbLink as y, BreadcrumbPage as N } from "../../../../../ui/breadcrumb.js";
import { BreadcrumbSeparator as I } from "./BreadcrumbSeparator.js";
import { motion as s } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { BreadcrumbSelect as k } from "./BreadcrumbSelect/index.js";
const v = u(({ item: e, isLast: l, isOnly: r = !1, isFirst: n = !1, children: c }, o) => /* @__PURE__ */ p(x, { ref: o, children: [
  !n && /* @__PURE__ */ a(I, {}),
  /* @__PURE__ */ a(
    m,
    {
      item: e,
      isLast: l,
      isOnly: r,
      isFirst: n
    }
  ),
  c
] }, e.id));
v.displayName = "BreadcrumbItem";
const m = u(
  ({ item: e, isLast: l, isOnly: r = !1, isFirst: n = !1 }, c) => {
    const o = "loading" in e && e.loading, i = o ? "loading" : "type" in e && e.type ? e.type : l || r ? "page" : "link", d = /* @__PURE__ */ p(
      s.div,
      {
        layoutId: `breadcrumb-${e.id}`,
        className: t(
          "flex items-center gap-2 px-1.5",
          n && "pl-0",
          r && "text-2xl font-semibold"
        ),
        transition: { duration: 0.15 },
        children: [
          !o && "module" in e && e.module && (r || n) && /* @__PURE__ */ a(h, { module: e.module, size: r ? "lg" : "sm" }),
          /* @__PURE__ */ a("span", { className: "truncate", children: !o && "label" in e ? e.label : "" })
        ]
      }
    ), b = {
      loading: /* @__PURE__ */ a(g, {}),
      select: "type" in e && e.type === "select" && (e.options || e.source) && /* @__PURE__ */ a(f, { children: /* @__PURE__ */ a(
        k,
        {
          label: e.label,
          hideLabel: !0,
          source: e.source,
          options: e.options,
          mapOptions: e.mapOptions,
          defaultItem: e.defaultItem,
          clearable: !1,
          onChange: e.onChange,
          value: e.value,
          showSearchBox: e.searchbox
        }
      ) }),
      page: /* @__PURE__ */ a(N, { "aria-hidden": "true", className: "p-0", children: d }),
      link: /* @__PURE__ */ a(y, { asChild: !0, className: "p-0", children: /* @__PURE__ */ a(
        B,
        {
          ..."href" in e && !("type" in e) ? e : {},
          className: "block",
          children: d
        }
      ) })
    };
    return /* @__PURE__ */ a(
      s.div,
      {
        ref: c,
        layout: !0,
        className: t(o && "max-w-40"),
        transition: { duration: 0.15 },
        children: b[i]
      }
    );
  }
);
m.displayName = "BreadcrumbContent";
export {
  v as BreadcrumbItem
};
