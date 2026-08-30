import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as t } from "../../../../components/F0Button/F0Button.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0AvatarAlert as r } from "../../../../components/avatars/F0AvatarAlert/index.js";
import { F0ActionBar as i } from "../../../../components/F0ActionBar/index.js";
import { forwardRef as a, useEffect as o, useMemo as s, useRef as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import d from "@number-flow/react";
//#region src/patterns/OneDataCollection/components/ActionBar/OneDataCollectionActionBar.tsx
var f = ({ message: e }) => /* @__PURE__ */ u("div", {
	className: "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2",
	children: [/* @__PURE__ */ l(r, {
		type: "warning",
		size: "sm"
	}), /* @__PURE__ */ l("p", {
		className: "flex-1 font-medium text-f1-foreground-warning",
		children: e
	})]
});
function p(e) {
	let t = (e) => ({
		...e,
		loading: !0,
		disabled: !0
	});
	return Array.isArray(e) ? e.length === 0 || !("items" in e[0]) ? e.map(t) : e.map((e) => ({
		...e,
		items: e.items.map(t)
	})) : {
		...e,
		items: e.items.map(t)
	};
}
var m = a(function({ isOpen: r, primaryActions: a, secondaryActions: m, selectedNumber: h, onUnselect: g, warningMessage: _, allPagesSelection: v = !1, isAllItemsSelected: y = !1, totalItems: b, status: x }, S) {
	let { t: C, ...w } = e(), T = v && y && b !== void 0, E = x === "loading" || x === "success", D = c(h ?? 0);
	o(() => {
		h && (D.current = h);
	}, [h]);
	let O = E && !h ? D.current : h, k = O === 1 ? w.status.selected.singular : w.status.selected.plural, A = x === "loading" ? "idle" : x, j = s(() => _ || !a ? [] : x === "loading" ? p(a) : a, [
		a,
		x,
		_
	]), M = s(() => _ || !m ? [] : x === "loading" ? m.map((e) => ({
		...e,
		disabled: !0
	})) : m, [
		m,
		x,
		_
	]), N = s(() => !_ && !O ? null : /* @__PURE__ */ u("div", {
		className: "flex w-full flex-col gap-2 sm:flex-row sm:items-center",
		children: [_ && /* @__PURE__ */ l(f, { message: _ }), !!O && /* @__PURE__ */ u("div", {
			className: "dark flex h-8 w-full items-center justify-between gap-3 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0",
			children: [T ? /* @__PURE__ */ l("span", {
				className: "font-medium tabular-nums text-f1-foreground",
				children: C("status.selected.allItemsSelected", { total: b ?? 0 })
			}) : /* @__PURE__ */ u("span", {
				className: "flex items-center gap-1 font-medium tabular-nums",
				children: [/* @__PURE__ */ l(d, {
					value: O,
					className: "text-f1-foreground",
					spinTiming: {
						duration: 200,
						easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
					}
				}), /* @__PURE__ */ l(n, {
					className: "text-f1-foreground",
					children: k
				})]
			}), /* @__PURE__ */ l(t, {
				variant: "outline",
				label: w.actions.unselect,
				onClick: g,
				disabled: E,
				size: "sm"
			})]
		})]
	}), [
		_,
		O,
		T,
		b,
		k,
		g,
		E,
		w.actions.unselect,
		C
	]);
	return /* @__PURE__ */ l(i, {
		ref: S,
		isOpen: r,
		variant: "dark",
		status: A,
		leftContent: N,
		primaryActions: j,
		secondaryActions: M
	});
});
m.displayName = "OneDataCollectionActionBar";
//#endregion
export { m as OneDataCollectionActionBar };
