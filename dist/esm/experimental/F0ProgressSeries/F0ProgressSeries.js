import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n, focusRing as r } from "../../lib/utils.js";
import { Tooltip as i, TooltipContent as a, TooltipProvider as o, TooltipTrigger as s } from "../../ui/tooltip.js";
import { useI18n as c } from "../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as l } from "../../ui/skeleton.js";
import { getColor as u } from "../../kits/Charts/utils/colors.js";
import { f0ProgressSeriesColors as d, f0ProgressSeriesSizes as f } from "./types.js";
import { forwardRef as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/experimental/F0ProgressSeries/F0ProgressSeries.tsx
var g = 4, _ = "categorical-1", v = .5, y = 4, b = {
	sm: "h-1.5",
	md: "h-2",
	lg: "h-3"
}, x = {
	sm: "text-xs",
	md: "text-sm",
	lg: "text-sm"
}, S = "h-full transition-all duration-300 ease-in-out motion-reduce:transition-none", C = "[background-image:repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(0,0,0,0.16)_3px,rgba(0,0,0,0.16)_6px)] dark:[background-image:repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(255,255,255,0.2)_3px,rgba(255,255,255,0.2)_6px)]";
function w(e) {
	return `${e % 1 == 0 ? e.toFixed(0) : e.toFixed(1)}%`;
}
var T = /\D*$/;
function E(e, t, n) {
	let r = n(e), i = n(t), a = i.match(T)?.[0] ?? "";
	return `${(a && r.endsWith(a) ? r.slice(0, -a.length) : "") || r} / ${i}`;
}
function D({ pct: e, color: t }) {
	let n = u(t);
	if (e <= 100) return /* @__PURE__ */ m("div", {
		className: S,
		style: {
			width: `${Math.max(0, e)}%`,
			backgroundColor: n
		}
	});
	let r = 100 / e * 100;
	return /* @__PURE__ */ h("div", {
		className: "flex h-full w-full",
		children: [/* @__PURE__ */ m("div", {
			className: S,
			style: {
				width: `${r}%`,
				backgroundColor: n
			}
		}), /* @__PURE__ */ m("div", {
			className: S,
			style: {
				width: `${100 - r}%`,
				backgroundColor: u(t, v)
			}
		})]
	});
}
function O(e, t, n) {
	let r = e.max ?? 100, i = e.value === void 0 || !Number.isFinite(e.value) || !Number.isFinite(r) || r <= 0, a = i ? 0 : e.value / r * 100, o = e.canceled ? t.progressSeries.canceled : i ? t.progressSeries.noData : `${E(e.value, r, n)} (${w(a)})`;
	return {
		bar: e,
		isEmpty: i,
		pct: a,
		caption: e.canceled || i ? e.caption ?? "" : e.caption ?? w(a),
		tooltip: e.tooltip ?? (e.label ? `${e.label} · ${o}` : o)
	};
}
function k({ resolved: e, rounded: t, hideTooltip: o }) {
	let { bar: c, isEmpty: l, pct: u, tooltip: d } = e;
	return /* @__PURE__ */ h(i, { children: [/* @__PURE__ */ m(s, {
		asChild: !0,
		children: /* @__PURE__ */ m("div", {
			role: "img",
			"aria-label": d,
			tabIndex: 0,
			className: n("pointer-events-auto relative h-full min-w-[3px] flex-1 cursor-default overflow-hidden", r(), t, c.canceled ? n("bg-f1-foreground-disabled", C) : "bg-f1-background-secondary"),
			children: !l && !c.canceled && /* @__PURE__ */ m(D, {
				pct: u,
				color: c.color ?? _
			})
		})
	}), !o && /* @__PURE__ */ m(a, {
		className: "text-sm",
		children: d
	})] });
}
function A({ label: e, caption: t, textClass: r }) {
	return !e && !t ? null : /* @__PURE__ */ h("div", {
		className: n("flex items-center gap-1 truncate", r),
		children: [e && /* @__PURE__ */ m("span", {
			className: "text-f1-foreground",
			children: e
		}), t && /* @__PURE__ */ m("span", {
			className: "text-f1-foreground-secondary",
			children: t
		})]
	});
}
function j(e, t) {
	return e <= 0 || t <= 0 ? [] : e <= t ? Array.from({ length: e }, (e, t) => t) : Array.from({ length: t }, (n, r) => Math.floor(r * e / t));
}
var M = p(({ bars: e, maxLabels: t = g, hideTooltip: r, formatValue: i = String, size: a = "md", loading: s }, u) => {
	let d = c();
	if (s) return /* @__PURE__ */ m("div", {
		ref: u,
		className: "w-full",
		"aria-busy": "true",
		"aria-live": "polite",
		children: /* @__PURE__ */ m(l, { className: n("w-full rounded-2xs", b[a]) })
	});
	let f = e.length > y, p = f ? "gap-0.5" : "gap-1", _ = f ? "rounded-2xs" : "rounded-full", v = new Set(j(e.length, t)), S = e.map((e) => O(e, d, i)), C = S.some((e, t) => v.has(t) && (e.bar.label || e.caption));
	return /* @__PURE__ */ m("div", {
		ref: u,
		className: "flex w-full flex-col gap-1",
		children: /* @__PURE__ */ h(o, { children: [/* @__PURE__ */ m("div", {
			className: n("flex w-full", b[a], p),
			children: S.map((e, t) => /* @__PURE__ */ m(k, {
				resolved: e,
				rounded: _,
				hideTooltip: r
			}, `${e.bar.label}-${t}`))
		}), C && /* @__PURE__ */ m("div", {
			className: n("flex w-full", p),
			"aria-hidden": "true",
			children: S.map((e, t) => /* @__PURE__ */ m("div", {
				className: "min-w-[3px] flex-1 overflow-hidden",
				children: v.has(t) && /* @__PURE__ */ m(A, {
					label: e.bar.label,
					caption: e.caption,
					textClass: x[a]
				})
			}, `${e.bar.label}-${t}`))
		})] })
	});
});
M.displayName = "F0ProgressSeries";
var N = e(t("F0ProgressSeries", M));
//#endregion
export { N as F0ProgressSeries, d as f0ProgressSeriesColors, f as f0ProgressSeriesSizes };
