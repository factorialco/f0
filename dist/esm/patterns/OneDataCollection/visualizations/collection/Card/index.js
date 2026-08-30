import { cn as e } from "../../../../../lib/utils.js";
import t from "../../../../../icons/app/Placeholder.js";
import { Skeleton as n } from "../../../../../ui/skeleton.js";
import { Card as r, CardContent as i, CardHeader as a, CardTitle as o } from "../../../../../ui/Card/Card.js";
import { cardPropertyRenderers as s } from "../../../../../components/F0Card/components/CardMetadata.js";
import { F0Card as c } from "../../../../../components/F0Card/F0Card.js";
import { getAnimationVariants as l, useGroups as u } from "../../../../../hooks/datasource/useGroups.js";
import { useSelectable as d } from "../../../../../hooks/datasource/useSelectable/useSelectable.js";
import { GroupHeader as f } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { useDataCollectionData as p } from "../../../hooks/useDataCollectionData/useDataCollectionData.js";
import { PagesPagination as m } from "../../../components/PagesPagination/PagesPagination.js";
import { useEffect as h, useMemo as g } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
import { AnimatePresence as b, motion as x } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Card/index.tsx
var S = (e) => Math.ceil(e / 12) * 12, C = ({ children: t, tmpFullWidth: n }) => /* @__PURE__ */ v("div", {
	className: e("@container", n ? "px-0" : "px-page"),
	children: /* @__PURE__ */ v("div", {
		className: e("grid grid-cols-1 gap-4", "@sm:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4"),
		children: t
	})
}), w = ({ source: e, items: n, selectedItems: r, handleSelectItemChange: i, cardProperties: a, title: o, description: u, avatar: d, image: f, imageFit: p, imageSize: m, imageAspectRatio: h, blurredBackground: g, compact: _, tmpFullWidth: y }) => {
	function b(e, n) {
		return n.map((n) => {
			if (n.hide?.(e)) return null;
			let r = n.render(e);
			if (r === void 0) return null;
			let i = S(r);
			if (!i) return null;
			let a = {
				...i,
				label: n.label
			};
			return a.type === "file" ? { property: a } : {
				icon: n.icon ?? t,
				property: a
			};
		}).filter((e) => e !== null);
	}
	function S(e) {
		return typeof e == "string" ? {
			type: "text",
			value: e
		} : typeof e == "number" ? {
			type: "number",
			value: e
		} : w(e) ? e : null;
	}
	function w(e) {
		if (typeof e != "object" || !e || !("type" in e)) return !1;
		let t = e.type;
		return typeof t == "string" && t in s;
	}
	return /* @__PURE__ */ v(C, {
		tmpFullWidth: y,
		children: n.map((t, n) => {
			let s = e.selectable ? e.selectable(t) : void 0, y = e.itemUrl ? e.itemUrl(t) : void 0, S = e.itemOnClick ? e.itemOnClick(t) : void 0, C = (e.itemActions && e.itemActions(t) || []).filter((e) => e.type !== "separator"), w = (C.filter((e) => e.type === "other" || !e.type) || []).map((e) => ({
				...e,
				type: "item"
			})), T = C.find((e) => e.type === "primary") || void 0, E = C.filter((e) => e.type === "secondary") || [], D = !!e.selectable && s !== void 0, O = b(t, a);
			return /* @__PURE__ */ v(x.div, {
				layout: !0,
				initial: "hidden",
				animate: "visible",
				exit: "hidden",
				custom: n,
				variants: l({
					delay: .02,
					duration: .3
				}),
				children: /* @__PURE__ */ v(c, {
					title: o(t),
					selectable: D,
					description: u ? u(t) : void 0,
					avatar: d ? d(t) : void 0,
					image: f ? f(t) : void 0,
					imageFit: p,
					imageSize: m,
					imageAspectRatio: h,
					blurredBackground: g,
					selected: D && r.has(s),
					onSelect: (e) => i(t, e),
					secondaryActions: E,
					primaryAction: T,
					otherActions: w,
					onClick: S,
					link: y,
					compact: _ || !1,
					metadata: O,
					fullHeight: !0
				}, n)
			}, n);
		})
	});
}, T = ({ cardProperties: e, title: t, description: s, avatar: c, image: l, imageFit: x, imageSize: T, imageAspectRatio: E, blurredBackground: D, compact: O, source: k, onSelectItems: A, onLoadData: j, onLoadError: M, tmpFullWidth: N }) => {
	let P = g(() => {
		if (k.dataAdapter.paginationType === "pages") {
			let e = k.dataAdapter.perPage, t = S(typeof e == "number" ? e : 24);
			return {
				...k.dataAdapter,
				perPage: t
			};
		}
		return k.dataAdapter;
	}, [k.dataAdapter]), { data: F, paginationInfo: I, setPage: L, isInitialLoading: R } = p({
		...k,
		dataAdapter: P
	}, { onError: (e) => {
		M(e);
	} });
	h(() => {
		j({
			totalItems: I?.total || F.records.length,
			filters: k.currentFilters,
			search: k.currentSearch,
			isInitialLoading: R,
			data: F.records
		});
	}, [I?.total, F.records]);
	let { selectedItems: z, groupAllSelectedStatus: B, handleSelectItemChange: V, handleSelectGroupChange: H } = d({
		data: F,
		paginationInfo: I,
		source: k,
		onSelectItems: A,
		selectionMode: "multi",
		selectedState: k.defaultSelectedItems
	}), U = k.grouping?.collapsible, W = k.grouping?.defaultOpenGroups, { openGroups: G, setGroupOpen: K } = u(F?.type === "grouped" ? F.groups : [], W);
	return /* @__PURE__ */ y("div", {
		className: "flex h-full min-h-0 flex-1 flex-col gap-4",
		children: [/* @__PURE__ */ v("div", {
			className: "overflow-auto",
			children: R ? /* @__PURE__ */ v(C, {
				tmpFullWidth: N,
				children: Array.from({ length: 8 }).map((t, s) => /* @__PURE__ */ y(r, { children: [/* @__PURE__ */ v(a, { children: /* @__PURE__ */ v(o, {
					"aria-label": "Loading card",
					children: /* @__PURE__ */ v(n, { className: "h-4 w-3/4" })
				}) }), /* @__PURE__ */ v(i, {
					className: "space-y-2",
					children: e.map((e) => /* @__PURE__ */ y("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ v(n, { className: "h-3 w-1/4" }), /* @__PURE__ */ v(n, { className: "h-3 w-1/2" })]
					}, String(e.label)))
				})] }, s))
			}) : /* @__PURE__ */ y(_, { children: [F?.type === "grouped" && F.groups.map((n) => /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(f, {
				label: n.label,
				itemCount: n.itemCount,
				onOpenChange: (e) => K(n.key, e),
				open: G[n.key],
				selectable: !!k.selectable,
				showOpenChange: U,
				select: B[n.key]?.checked ? !0 : B[n.key]?.indeterminate ? "indeterminate" : !1,
				onSelectChange: (e) => H(n, e),
				className: "px-page pb-2 pt-4"
			}), /* @__PURE__ */ v(b, { children: (!U || G[n.key]) && /* @__PURE__ */ v(w, {
				source: k,
				items: n.records,
				selectedItems: z,
				handleSelectItemChange: V,
				title: t,
				cardProperties: e,
				description: s,
				avatar: c,
				image: l,
				imageFit: x,
				imageSize: T,
				imageAspectRatio: E,
				blurredBackground: D,
				compact: O,
				tmpFullWidth: N
			}, n.key) })] })), F?.type === "flat" && /* @__PURE__ */ v(w, {
				source: k,
				items: F.records,
				selectedItems: z,
				handleSelectItemChange: V,
				title: t,
				cardProperties: e,
				description: s,
				avatar: c,
				image: l,
				imageFit: x,
				imageSize: T,
				imageAspectRatio: E,
				blurredBackground: D,
				compact: O,
				tmpFullWidth: N
			})] })
		}), /* @__PURE__ */ v(m, {
			paginationInfo: I,
			setPage: L
		})]
	});
};
//#endregion
export { T as CardCollection };
