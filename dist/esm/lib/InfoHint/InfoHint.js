import { cn as e, focusRing as t } from "../utils.js";
import { F0Icon as n } from "../../components/F0Icon/index.js";
import r from "../../icons/app/InfoCircleLine.js";
import { useI18n as i } from "../providers/i18n/i18n-provider.js";
import { Tooltip as a } from "../../experimental/Overlays/Tooltip/index.js";
import { HoverCard as o, HoverCardContent as s, HoverCardTrigger as c } from "../../ui/hover-card.js";
import { useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/lib/InfoHint/InfoHint.tsx
function f({ info: r, icon: a, label: f }) {
	let [p, m] = l(!1), { forms: h } = i();
	return /* @__PURE__ */ d(o, {
		open: p,
		onOpenChange: m,
		openDelay: 300,
		closeDelay: 100,
		children: [/* @__PURE__ */ u(c, {
			asChild: !0,
			children: /* @__PURE__ */ u("button", {
				type: "button",
				className: e("flex h-5 w-5 items-center justify-center rounded-xs text-f1-foreground-secondary", t()),
				"aria-label": r.label ?? f ?? h.moreInformation,
				children: /* @__PURE__ */ u(n, {
					icon: a,
					size: "sm"
				})
			})
		}), /* @__PURE__ */ u(s, {
			className: "w-auto max-w-xs px-3 py-2 shadow-md",
			children: /* @__PURE__ */ d("div", {
				className: "flex flex-col gap-1 whitespace-normal text-left",
				children: [
					/* @__PURE__ */ u("p", { children: r.title }),
					/* @__PURE__ */ u("p", {
						className: "text-f1-foreground-inverse-secondary",
						children: r.description
					}),
					r.link && /* @__PURE__ */ u("button", {
						type: "button",
						onClick: () => {
							m(!1), r.link?.onClick();
						},
						className: e("mt-1 w-fit rounded-xs font-medium text-f1-foreground-inverse underline underline-offset-2 transition-colors hover:text-f1-foreground-inverse-secondary", t()),
						children: r.link.label
					})
				]
			})
		})]
	});
}
function p({ info: i, icon: o = r, label: s }) {
	return typeof i == "string" ? /* @__PURE__ */ u(a, {
		label: i,
		children: /* @__PURE__ */ u("div", {
			className: e("flex h-5 w-5 items-center justify-center rounded-xs", t()),
			tabIndex: 0,
			children: /* @__PURE__ */ u(n, {
				icon: o,
				size: "sm"
			})
		})
	}) : /* @__PURE__ */ u(f, {
		info: i,
		icon: o,
		label: s
	});
}
//#endregion
export { p as InfoHint };
