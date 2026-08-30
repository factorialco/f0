import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/ArrowDown.js";
import i from "../../../../icons/app/ArrowUp.js";
import { useContainerSize as a } from "../../../../kits/F0DataChart/utils/useContainerSize.js";
import { useDashboardItemData as o } from "../../hooks/useDashboardItemData.js";
import { DashboardItem as s } from "../DashboardItem/DashboardItem.js";
import { MetricSkeleton as c } from "../DashboardItem/DashboardItemSkeleton.js";
import { useLayoutEffect as l, useRef as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/MetricItem/MetricItem.tsx
function m(e, t = { type: "number" }, n = 0) {
	switch (t.type) {
		case "currency": return new Intl.NumberFormat(void 0, {
			style: "currency",
			currency: t.currency ?? "EUR",
			minimumFractionDigits: n,
			maximumFractionDigits: n
		}).format(e);
		case "percent": return new Intl.NumberFormat(void 0, {
			style: "percent",
			minimumFractionDigits: n,
			maximumFractionDigits: n
		}).format(e / 100);
		case "custom": {
			let r = new Intl.NumberFormat(void 0, {
				minimumFractionDigits: n,
				maximumFractionDigits: n
			}).format(e);
			return `${t.prefix ?? ""}${r}${t.suffix ?? ""}`;
		}
		default: return new Intl.NumberFormat(void 0, {
			minimumFractionDigits: n,
			maximumFractionDigits: n
		}).format(e);
	}
}
function h(e, t) {
	if (t === void 0 || t === 0) return;
	let n = (e - t) / Math.abs(t) * 100;
	return {
		percent: Math.abs(n),
		direction: n > .5 ? "up" : n < -.5 ? "down" : "flat"
	};
}
function g({ value: o, trend: s }) {
	let c = u(null), { height: m, width: h } = a(c), [g, _] = d(!1), v = m > 220;
	return l(() => {
		let e = c.current;
		_(e !== null && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight));
	}, [
		m,
		s?.direction,
		s?.percent,
		o,
		h
	]), /* @__PURE__ */ f("div", {
		ref: c,
		tabIndex: g ? 0 : void 0,
		className: e("flex h-full min-h-0 overflow-auto px-4", v ? "items-center py-4" : "items-end pb-4", g && t("rounded-sm focus-visible:ring-inset focus-visible:ring-offset-0")),
		children: /* @__PURE__ */ p("div", {
			className: e("flex items-baseline gap-3", v && "mx-auto -translate-y-4"),
			children: [/* @__PURE__ */ f("span", {
				className: "whitespace-nowrap text-3xl font-semibold leading-none tracking-tight text-f1-foreground",
				children: o
			}), s && s.direction !== "flat" && /* @__PURE__ */ p("div", {
				className: "flex shrink-0 items-center",
				children: [
					s.direction === "up" ? /* @__PURE__ */ f(n, {
						icon: i,
						color: "positive",
						size: "sm",
						"aria-hidden": "true"
					}) : /* @__PURE__ */ f(n, {
						icon: r,
						color: "critical",
						size: "sm",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ p("span", {
						className: "sr-only",
						children: [
							s.direction === "up" ? "+" : "−",
							s.percent.toFixed(1),
							"%"
						]
					}),
					/* @__PURE__ */ p("span", {
						"aria-hidden": "true",
						className: e("whitespace-nowrap text-base font-medium", s.direction === "up" ? "text-f1-foreground-positive" : "text-f1-foreground-critical"),
						children: [s.percent.toFixed(1), "%"]
					})
				]
			})]
		})
	});
}
function _({ item: e, filters: t, actions: n, itemFilters: r, editMode: i, handleDelete: a, onAskAi: l, onAskAiTarget: u }) {
	let d = e.useDashboardFilters !== !1, p = JSON.stringify(r?.value ?? {}), { data: _, isLoading: v, error: y, retry: b } = o(e.fetchData, t, d, p), x = _ ? h(_.value, _.previousValue) : void 0;
	return /* @__PURE__ */ f(s, {
		title: e.title,
		description: e.description,
		info: e.info,
		explanation: e.explanation,
		isLoading: v,
		error: y,
		onRetry: b,
		skeleton: /* @__PURE__ */ f(c, {}),
		actions: n,
		itemFilters: r,
		editMode: i,
		handleDelete: a,
		onAskAi: l,
		onAskAiTarget: u,
		itemId: e.id,
		children: _ && /* @__PURE__ */ f(g, {
			value: e.valueFormatter ? e.valueFormatter(_.value) : m(_.value, e.format, e.decimals),
			trend: x
		})
	});
}
//#endregion
export { _ as MetricItem, g as MetricValue };
