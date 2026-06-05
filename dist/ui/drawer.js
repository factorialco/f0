import { jsx as o, jsxs as l } from "react/jsx-runtime";
import * as s from "react";
import { Drawer as e } from "../node_modules/.pnpm/vaul@1.1.2_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/vaul/dist/index.js";
import { cn as i } from "../lib/utils.js";
const d = ({
  shouldScaleBackground: r = !0,
  ...a
}) => /* @__PURE__ */ o(
  e.Root,
  {
    shouldScaleBackground: r,
    ...a
  }
);
d.displayName = "Drawer";
const N = e.Trigger, c = e.Portal, n = s.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ o(
  e.Overlay,
  {
    ref: t,
    className: i("bg-black/80 fixed inset-0 z-50", r),
    ...a
  }
));
n.displayName = e.Overlay.displayName;
const f = s.forwardRef(({ className: r, children: a, ...t }, m) => /* @__PURE__ */ l(c, { children: [
  /* @__PURE__ */ o(n, {}),
  /* @__PURE__ */ l(
    e.Content,
    {
      ref: m,
      className: i(
        "bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-xl focus:outline-none",
        r
      ),
      ...t,
      children: [
        /* @__PURE__ */ o("div", { className: "mx-auto mt-2 h-1 w-8 rounded-full bg-f1-border" }),
        a
      ]
    }
  )
] }));
f.displayName = "DrawerContent";
const p = s.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ o(
  e.Title,
  {
    ref: t,
    className: i(
      "text-lg font-semibold leading-none tracking-tight",
      r
    ),
    ...a
  }
));
p.displayName = e.Title.displayName;
const w = s.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ o(
  e.Description,
  {
    ref: t,
    className: i("text-muted-foreground text-sm", r),
    ...a
  }
));
w.displayName = e.Description.displayName;
export {
  d as Drawer,
  f as DrawerContent,
  w as DrawerDescription,
  n as DrawerOverlay,
  c as DrawerPortal,
  p as DrawerTitle,
  N as DrawerTrigger
};
