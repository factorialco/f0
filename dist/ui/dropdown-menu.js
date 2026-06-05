import { jsx as a, jsxs as i } from "react/jsx-runtime";
import { Root as w, Trigger as x, Portal as l, Sub as N, Content as c, Item as f, Separator as m, SubTrigger as p, SubContent as u, Label as b, Group as R, CheckboxItem as g, ItemIndicator as y, RadioItem as h } from "../node_modules/.pnpm/@radix-ui_react-dropdown-menu@2.1.16_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@1_ylzjwukrbrzeggdpzvpwzctmwa/node_modules/@radix-ui/react-dropdown-menu/dist/index.js";
import * as n from "react";
import { F0Icon as I } from "../components/F0Icon/F0Icon.js";
import { cn as s } from "../lib/utils.js";
import C from "../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import D from "../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/check.js";
import M from "../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle.js";
const J = w, K = x, O = R, Q = l, U = N, k = n.forwardRef(({ className: e, inset: o, children: t, ...r }, d) => /* @__PURE__ */ i(
  p,
  {
    ref: d,
    className: s(
      "flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
      o && "pl-8",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ a(I, { icon: C, size: "md", className: "ml-auto" })
    ]
  }
));
k.displayName = p.displayName;
const v = n.forwardRef(({ className: e, ...o }, t) => /* @__PURE__ */ a(
  u,
  {
    ref: t,
    className: s(
      "z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
));
v.displayName = u.displayName;
const S = n.forwardRef(({ className: e, sideOffset: o = 4, ...t }, r) => /* @__PURE__ */ a(l, { children: /* @__PURE__ */ a(
  c,
  {
    ref: r,
    sideOffset: o,
    className: s(
      "z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "origin-[var(--radix-dropdown-menu-content-transform-origin)]",
      e
    ),
    ...t
  }
) }));
S.displayName = c.displayName;
const T = n.forwardRef(({ className: e, inset: o, ...t }, r) => /* @__PURE__ */ a(
  f,
  {
    onClick: (d) => {
      d.stopPropagation();
    },
    ref: r,
    className: s(
      "relative flex cursor-default select-none items-center rounded py-2 pl-3 pr-5 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "focus:outline-none focus:ring-0 focus:ring-transparent",
      // Temporal fix for Gamma issue
      o && "pl-8",
      e
    ),
    ...t
  }
));
T.displayName = f.displayName;
const j = n.forwardRef(({ className: e, children: o, checked: t, ...r }, d) => /* @__PURE__ */ i(
  g,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: t,
    ...r,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(y, { children: /* @__PURE__ */ a(D, { className: "h-4 w-4" }) }) }),
      o
    ]
  }
));
j.displayName = g.displayName;
const P = n.forwardRef(({ className: e, children: o, ...t }, r) => /* @__PURE__ */ i(
  h,
  {
    ref: r,
    className: s(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(y, { children: /* @__PURE__ */ a(M, { className: "h-2 w-2 fill-current" }) }) }),
      o
    ]
  }
));
P.displayName = h.displayName;
const z = n.forwardRef(({ className: e, inset: o, ...t }, r) => /* @__PURE__ */ a(
  b,
  {
    ref: r,
    className: s(
      "px-2 py-1.5 text-sm font-semibold",
      o && "pl-8",
      e
    ),
    ...t
  }
));
z.displayName = b.displayName;
const G = n.forwardRef(({ className: e, ...o }, t) => /* @__PURE__ */ a(
  m,
  {
    ref: t,
    className: s("-mx-1 my-1 h-px bg-f1-border-secondary", e),
    ...o
  }
));
G.displayName = m.displayName;
export {
  J as DropdownMenu,
  j as DropdownMenuCheckboxItem,
  S as DropdownMenuContent,
  O as DropdownMenuGroup,
  T as DropdownMenuItem,
  z as DropdownMenuLabel,
  Q as DropdownMenuPortal,
  P as DropdownMenuRadioItem,
  G as DropdownMenuSeparator,
  U as DropdownMenuSub,
  v as DropdownMenuSubContent,
  k as DropdownMenuSubTrigger,
  K as DropdownMenuTrigger
};
