import { Tooltip as e, TooltipContent as t, TooltipProvider as n, TooltipTrigger as r } from "../ui/tooltip.js";
import { getComponentStatus as i } from "./component-status.js";
import { A11yRow as a, A11yTooltipRow as o } from "./A11yRow.js";
import "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/component-status/ComponentStability.tsx
var l = {
	stable: {
		bg: "bg-f1-background-positive",
		text: "text-f1-foreground-positive",
		dot: "bg-f1-background-positive-bold"
	},
	experimental: {
		bg: "bg-f1-background-warning",
		text: "text-f1-foreground-warning",
		dot: "bg-f1-background-warning-bold"
	},
	deprecated: {
		bg: "bg-f1-background-critical",
		text: "text-f1-foreground-critical",
		dot: "bg-f1-background-critical-bold"
	},
	internal: {
		bg: "bg-f1-background-info",
		text: "text-f1-foreground-info",
		dot: "bg-f1-background-info-bold"
	},
	unknown: {
		bg: "bg-f1-background-secondary",
		text: "text-f1-foreground-secondary",
		dot: "bg-f1-foreground-disabled"
	}
};
function u({ status: e }) {
	let t = l[e.effectiveStatus];
	return /* @__PURE__ */ c("span", {
		className: `inline-flex items-center gap-2 rounded-full px-3 py-1 text-base font-medium ${t.bg} ${t.text}`,
		children: [/* @__PURE__ */ s("span", { className: `h-2 w-2 rounded-full ${t.dot}` }), e.label]
	});
}
function d({ componentName: e, components: t, className: n }) {
	let r = i(e, t);
	return r ? /* @__PURE__ */ c("div", {
		className: `sb-unstyled rounded-lg border border-f1-border bg-f1-background ${n ?? ""}`,
		children: [
			/* @__PURE__ */ s("h3", {
				className: "m-0 mb-3 text-xl font-semibold text-f1-foreground",
				children: "Maturity level"
			}),
			/* @__PURE__ */ s("div", {
				className: "mb-2",
				children: /* @__PURE__ */ s(u, { status: r })
			}),
			/* @__PURE__ */ s("p", {
				className: "m-0 text-lg text-f1-foreground-secondary",
				children: r.summary
			}),
			r.showChecklist && /* @__PURE__ */ s("div", {
				role: "list",
				className: "mt-4 space-y-3",
				children: r.requirements.map((e) => e.key === "a11y" ? /* @__PURE__ */ s(a, {
					detail: e.detail,
					tier: r.a11yTier
				}, e.key) : /* @__PURE__ */ c("div", {
					role: "listitem",
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ s("span", {
						"aria-hidden": !0,
						className: `mt-0.5 shrink-0 ${e.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`,
						children: e.met ? "✓" : "✕"
					}), /* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s("div", {
						className: "text-base text-f1-foreground",
						children: e.label
					}), /* @__PURE__ */ c("div", {
						className: "mt-0.5 text-base text-f1-foreground-secondary",
						children: [e.detail, e.criteria && e.criteria.length > 0 && /* @__PURE__ */ s("div", {
							role: "list",
							className: "mt-1 space-y-0.5",
							children: e.criteria.map((e) => /* @__PURE__ */ c("div", {
								role: "listitem",
								className: "flex items-start gap-2 text-base",
								children: [/* @__PURE__ */ s("span", {
									"aria-hidden": !0,
									className: `shrink-0 ${e.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`,
									children: e.met ? "✓" : "✕"
								}), /* @__PURE__ */ s("span", { children: e.label })]
							}, e.label))
						})]
					})] })]
				}, e.key))
			})
		]
	}) : null;
}
function f({ status: e }) {
	return /* @__PURE__ */ c("div", {
		className: "text-f1-foreground-inverse",
		children: [/* @__PURE__ */ s("p", {
			className: "m-0 text-base opacity-90",
			children: e.summary
		}), e.showChecklist && /* @__PURE__ */ s("div", {
			role: "list",
			className: "mt-3 space-y-3",
			children: e.requirements.map((t) => t.key === "a11y" ? /* @__PURE__ */ s(o, {
				detail: t.detail,
				tier: e.a11yTier
			}, t.key) : /* @__PURE__ */ c("div", {
				role: "listitem",
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ s("span", {
					"aria-hidden": !0,
					className: `mt-0.5 shrink-0 ${t.met ? "text-f1-foreground-positive" : "opacity-60"}`,
					children: t.met ? "✓" : "✕"
				}), /* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s("div", {
					className: "text-base",
					children: t.label
				}), /* @__PURE__ */ c("div", {
					className: "mt-0.5 text-base opacity-75",
					children: [t.detail, t.criteria && t.criteria.length > 0 && /* @__PURE__ */ s("div", {
						role: "list",
						className: "mt-1 space-y-0.5",
						children: t.criteria.map((e) => /* @__PURE__ */ c("div", {
							role: "listitem",
							className: "flex items-start gap-2 text-base",
							children: [/* @__PURE__ */ s("span", {
								"aria-hidden": !0,
								className: `shrink-0 ${e.met ? "text-f1-foreground-positive" : "opacity-60"}`,
								children: e.met ? "✓" : "✕"
							}), /* @__PURE__ */ s("span", { children: e.label })]
						}, e.label))
					})]
				})] })]
			}, t.key))
		})]
	});
}
function p({ componentName: a, components: o, className: l }) {
	let d = i(a, o);
	return d ? /* @__PURE__ */ s(n, {
		delayDuration: 150,
		children: /* @__PURE__ */ c(e, { children: [/* @__PURE__ */ s(r, {
			asChild: !0,
			children: /* @__PURE__ */ s("span", {
				className: `sb-unstyled inline-flex cursor-help align-middle ${l ?? ""}`,
				children: /* @__PURE__ */ s(u, { status: d })
			})
		}), /* @__PURE__ */ s(t, {
			side: "bottom",
			align: "start",
			className: "max-h-[70vh] max-w-sm overflow-y-auto",
			children: /* @__PURE__ */ s("div", {
				className: "sb-unstyled p-1",
				children: /* @__PURE__ */ s(f, { status: d })
			})
		})] })
	}) : null;
}
//#endregion
export { p as ComponentMaturityTag, d as ComponentStability };
