import { jsxs as i, jsx as t, Fragment as d } from "react/jsx-runtime";
import u from "react";
import { F0AvatarPerson as x } from "../../../components/avatars/F0AvatarPerson/index.js";
import { F0Icon as h } from "../../../components/F0Icon/index.js";
import { F0TagDot as g } from "../../../components/tags/F0TagDot/index.js";
import { F0TagRaw as N } from "../../../components/tags/F0TagRaw/index.js";
import { Tooltip as b } from "../../Overlays/Tooltip/index.js";
import v from "../../../icons/app/InfoCircle.js";
import "../../../icons/app/Menu.js";
import { withDataTestId as w } from "../../../lib/data-testid/index.js";
import { experimentalComponent as y } from "../../../lib/experimental.js";
import { withSkeleton as k } from "../../../lib/skeleton.js";
import { cn as T } from "../../../lib/utils.js";
import { Skeleton as a } from "../../../ui/skeleton.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
const l = u.forwardRef(({ person: o, onClick: c, ...e }, m) => {
  const s = () => {
    c();
  };
  return /* @__PURE__ */ i(
    "div",
    {
      ref: m,
      className: T(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        e.withPointerCursor && "cursor-pointer"
      ),
      onClick: s,
      children: [
        /* @__PURE__ */ t(
          x,
          {
            firstName: o.firstName,
            lastName: o.lastName,
            src: o.avatarUrl,
            badge: o.avatarBadge
          }
        ),
        /* @__PURE__ */ i("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ i("div", { className: "flex flex-1 flex-row items-center gap-1", children: [
            /* @__PURE__ */ t("span", { className: "truncate font-medium", children: `${o.firstName} ${o.lastName}` }),
            e.info && /* @__PURE__ */ t(b, { label: e.info, children: /* @__PURE__ */ t(
              h,
              {
                icon: v,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in e && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: e.bottomTags.map((r, f) => /* @__PURE__ */ i(d, { children: [
            /* @__PURE__ */ t(N, { ...r }, r.text),
            f < e.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in e && e.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: e.description })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in e && e.rightTag && /* @__PURE__ */ t(g, { ...e.rightTag }),
          "actions" in e && /* @__PURE__ */ i("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            e.actions?.primary && /* @__PURE__ */ t(
              n,
              {
                variant: "outline",
                onClick: e.actions.primary.onClick,
                label: e.actions.primary.label,
                icon: e.actions.primary.icon
              }
            ),
            e.actions?.secondary && /* @__PURE__ */ t(
              n,
              {
                variant: "outline",
                onClick: e.actions.secondary.onClick,
                label: "Secondary",
                icon: e.actions.secondary.icon,
                hideLabel: !0
              }
            )
          ] })
        ] })
      ]
    }
  );
}), C = () => /* @__PURE__ */ i("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(a, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ i("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(a, { className: "h-4" }),
    /* @__PURE__ */ t(a, { className: "h-4" })
  ] })
] });
l.displayName = "OnePersonListItem";
const U = w(
  y(
    "OnePersonListItem",
    k(l, C)
  )
);
export {
  U as OnePersonListItem
};
