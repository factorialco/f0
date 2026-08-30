import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Drawer as i } from "vaul";
//#region src/ui/drawer.tsx
var a = ({ shouldScaleBackground: e = !0, ...t }) => /* @__PURE__ */ n(i.Root, {
	shouldScaleBackground: e,
	...t
});
a.displayName = "Drawer";
var o = i.Trigger, s = i.Portal;
i.Close;
var c = t.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ n(i.Overlay, {
	ref: a,
	className: e("bg-black/80 fixed inset-0 z-50", t),
	...r
}));
c.displayName = i.Overlay.displayName;
var l = t.forwardRef(({ className: t, children: a, ...o }, l) => /* @__PURE__ */ r(s, { children: [/* @__PURE__ */ n(c, {}), /* @__PURE__ */ r(i.Content, {
	ref: l,
	className: e("bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-xl focus:outline-none", t),
	...o,
	children: [/* @__PURE__ */ n("div", { className: "mx-auto mt-2 h-1 w-8 rounded-full bg-f1-border" }), a]
})] }));
l.displayName = "DrawerContent";
var u = ({ className: t, ...r }) => /* @__PURE__ */ n("div", {
	className: e("grid gap-1.5 p-4 text-center sm:text-left", t),
	...r
});
u.displayName = "DrawerHeader";
var d = ({ className: t, ...r }) => /* @__PURE__ */ n("div", {
	className: e("mt-auto flex flex-col gap-2 p-4", t),
	...r
});
d.displayName = "DrawerFooter";
var f = t.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ n(i.Title, {
	ref: a,
	className: e("text-lg font-semibold leading-none tracking-tight", t),
	...r
}));
f.displayName = i.Title.displayName;
var p = t.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ n(i.Description, {
	ref: a,
	className: e("text-muted-foreground text-sm", t),
	...r
}));
p.displayName = i.Description.displayName;
//#endregion
export { a as Drawer, l as DrawerContent, p as DrawerDescription, d as DrawerFooter, u as DrawerHeader, c as DrawerOverlay, s as DrawerPortal, f as DrawerTitle, o as DrawerTrigger };
