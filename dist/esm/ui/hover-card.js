"use client";
import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
import * as r from "@radix-ui/react-hover-card";
//#region src/ui/hover-card.tsx
var i = r.Root, a = r.Trigger, o = t.forwardRef(({ className: t, align: i = "center", sideOffset: a = 4, container: o, ...s }, c) => /* @__PURE__ */ n(r.Portal, {
	container: o,
	children: /* @__PURE__ */ n(r.Content, {
		ref: c,
		align: i,
		sideOffset: a,
		className: e("z-50 w-[200px] rounded bg-f1-background-inverse font-medium text-f1-foreground-inverse outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
		...s
	})
}));
o.displayName = r.Content.displayName;
//#endregion
export { i as HoverCard, o as HoverCardContent, a as HoverCardTrigger };
