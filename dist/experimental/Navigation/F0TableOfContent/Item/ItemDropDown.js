import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { ButtonInternal as u } from "../../../../components/F0Button/internal.js";
import { F0Icon as a } from "../../../../components/F0Icon/index.js";
import { Switch as f } from "../../../Forms/Fields/Switch/index.js";
import h from "../../../../icons/app/Check.js";
import b from "../../../../icons/app/Ellipsis.js";
import "../../../../icons/app/Menu.js";
import { cn as g } from "../../../../lib/utils.js";
import { DropdownMenu as w, DropdownMenuTrigger as x, DropdownMenuContent as D, DropdownMenuSeparator as C, DropdownMenuLabel as N, DropdownMenuGroup as p, DropdownMenuItem as m, DropdownMenuSub as y, DropdownMenuSubTrigger as M, DropdownMenuPortal as k, DropdownMenuSubContent as v } from "../../../../ui/dropdown-menu.js";
function i(e, n) {
  if ("type" in e) {
    if (e.type === "separator")
      return /* @__PURE__ */ r(C, {}, `sep-${n}`);
    if (e.type === "label")
      return /* @__PURE__ */ r(
        N,
        {
          className: "p-4 pb-2 font-medium text-f1-foreground-secondary",
          children: e.text
        },
        `label-${n}`
      );
    if (e.type === "toggle")
      return /* @__PURE__ */ r(p, { children: /* @__PURE__ */ r(
        m,
        {
          className: "!pb-2.5 pr-4",
          onClick: (t) => {
            t.preventDefault(), e.onCheckedChange(!e.checked);
          },
          children: /* @__PURE__ */ d("div", { className: "flex w-full flex-row items-center gap-2", children: [
            e.icon && /* @__PURE__ */ r(a, { icon: e.icon, color: "default" }),
            /* @__PURE__ */ r("span", { className: "flex-1", children: e.label }),
            /* @__PURE__ */ r(
              f,
              {
                title: e.label,
                checked: e.checked,
                onCheckedChange: e.onCheckedChange,
                hideLabel: !0
              }
            )
          ] })
        }
      ) }, `toggle-${n}`);
    if (e.type === "submenu")
      return /* @__PURE__ */ r(p, { children: /* @__PURE__ */ d(y, { children: [
        /* @__PURE__ */ r(M, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ d("div", { className: "flex w-full flex-row items-center gap-2", children: [
          e.icon && /* @__PURE__ */ r(a, { icon: e.icon, color: "default" }),
          /* @__PURE__ */ r("span", { className: "flex-1 text-base font-medium", children: e.label }),
          e.selectedLabel && /* @__PURE__ */ r("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: e.selectedLabel })
        ] }) }),
        /* @__PURE__ */ r(k, { children: /* @__PURE__ */ r(v, { children: e.children.map(
          (t, s) => i(t, s)
        ) }) })
      ] }) }, `submenu-${n}`);
  }
  const l = e;
  return /* @__PURE__ */ r(
    m,
    {
      onClick: l.onClick,
      className: g(l.critical && "text-f1-foreground-critical"),
      children: /* @__PURE__ */ d("div", { className: "flex w-full flex-row items-center gap-2", children: [
        l.icon && /* @__PURE__ */ r(a, { icon: l.icon }),
        /* @__PURE__ */ r("span", { className: "flex-1", children: l.label }),
        l.selected && /* @__PURE__ */ r(a, { icon: h, color: "default" })
      ] })
    },
    `item-${n}`
  );
}
function B({
  otherActions: e,
  open: n,
  setOpen: l,
  disabled: t
}) {
  const s = e.some(
    (o) => "type" in o && (o.type === "toggle" || o.type === "submenu" || o.type === "label")
  );
  return /* @__PURE__ */ d(w, { open: n, onOpenChange: l, children: [
    /* @__PURE__ */ r(x, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ r(
      u,
      {
        icon: b,
        label: "Actions",
        hideLabel: !0,
        variant: "ghost",
        pressed: n,
        size: "sm",
        disabled: t
      }
    ) }),
    /* @__PURE__ */ r(D, { className: "w-80", align: "start", children: s ? e.map((o, c) => i(o, c)) : e.map((o, c) => i(o, c)) })
  ] });
}
export {
  B as ItemDropDown
};
