"use client";
import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
import * as r from "@radix-ui/react-tooltip";
//#region src/ui/tooltip.tsx
var i = r.Provider, a = r.Root, o = r.Trigger, s = t.forwardRef(({ className: t, sideOffset: i = 4, ...a }, o) => /* @__PURE__ */ n(r.Portal, { children: /* @__PURE__ */ n(r.Content, {
	ref: o,
	sideOffset: i,
	className: e("z-50 overflow-hidden rounded bg-f1-background border border-solid border-f1-border-secondary dark px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left", "break-words", t),
	...a
}) }));
s.displayName = r.Content.displayName;
//#endregion
export { a as Tooltip, s as TooltipContent, i as TooltipProvider, o as TooltipTrigger };
