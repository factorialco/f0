import { cn as e } from "../../../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../../../components/F0Icon/index.js";
import { OneEllipsis as n } from "../../../../../../../lib/OneEllipsis/OneEllipsis.js";
import r from "../../../../../../../icons/app/Delete.js";
import i from "../../../../../../../icons/app/Handle.js";
import a from "../../../../../../../icons/app/LockLocked.js";
import { useI18n as o } from "../../../../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as s } from "../../../../../../../components/F0Button/internal.js";
import { TooltipWrapper as c } from "../../../../../../../lib/tooltip-wrapper.js";
import { Switch as l } from "../../../../../../../experimental/Forms/Fields/Switch/index.js";
import { useEffect as u, useRef as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { Reorder as m, useDragControls as h } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/SortAndHideList/SortAndHideList.tsx
var g = (e) => e.locked ?? (!e.sortable && !e.canHide && !e.disabledReason), _ = (e) => !!e.sortable && !g(e), v = (e, t) => {
	let n = t.filter(_), r = e.filter(_).length;
	if (n.length !== r) return e;
	let i = 0;
	return e.map((e) => _(e) ? n[i++] : e);
}, y = ({ item: v, onChangeVisibility: y, onRemove: b, onLockedChange: x, allowSorting: S, allowHiding: C, isFirst: w, isLast: T }) => {
	let E = o(), D = e("group flex items-center gap-2 text-medium text-sm pr-4", w && "pt-1", T && "pb-1"), O = h(), k = g(v), A = _(v), j = !!v.removable && !k && !!b, M = !!v.lockable && !k && !!x, N = !!v.lockable && k && !!x, P = d(null), F = d(null), I = d(null), L = d(!1), R = (e) => {
		let t = L.current || e.detail === 0;
		return L.current = !1, t;
	}, z = (e) => {
		(e.key === "Enter" || e.key === " ") && (L.current = !0);
	};
	u(() => {
		let e = I.current, t = e === "lock" && M ? P.current : e === "unlock" && N ? F.current : null;
		t && (I.current = null, t.focus());
	}, [M, N]);
	let B = /* @__PURE__ */ p("div", {
		className: D,
		children: [
			(S || v.showLockState) && /* @__PURE__ */ f("div", {
				className: e("flex shrink-0 items-center justify-center text-f1-icon", A && "cursor-grab"),
				style: { width: N ? "28px" : "20px" },
				onPointerDown: (e) => {
					A && O.start(e);
				},
				children: A ? /* @__PURE__ */ f(t, {
					icon: i,
					size: "xs"
				}) : N ? /* @__PURE__ */ f("span", {
					onKeyDown: z,
					onPointerDown: () => {
						L.current = !1;
					},
					children: /* @__PURE__ */ f(s, {
						variant: "ghost",
						size: "sm",
						compact: !0,
						hideLabel: !0,
						icon: a,
						label: E.t("collections.table.settings.unlockColumn", { label: v.label }),
						ref: F,
						onClick: (e) => {
							I.current = R(e) ? "lock" : null, x?.(v, !1);
						}
					})
				}) : v.disabledReason ? null : /* @__PURE__ */ f(t, {
					icon: a,
					size: "sm"
				})
			}),
			/* @__PURE__ */ f("span", {
				className: e("flex-1 min-w-0", A ? "text-f1-foreground" : "text-f1-foreground-secondary"),
				children: /* @__PURE__ */ f(n, { children: v.label })
			}),
			(M || j) && /* @__PURE__ */ f("div", {
				"data-column-actions": !0,
				className: "shrink-0 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
				children: /* @__PURE__ */ p("div", {
					className: "flex items-center",
					children: [M && /* @__PURE__ */ f("span", {
						onKeyDown: z,
						onPointerDown: () => {
							L.current = !1;
						},
						children: /* @__PURE__ */ f(s, {
							variant: "ghost",
							size: "sm",
							compact: !0,
							hideLabel: !0,
							icon: a,
							label: E.t("collections.table.settings.lockColumn", { label: v.label }),
							ref: P,
							onClick: (e) => {
								I.current = R(e) ? "unlock" : null, x?.(v, !0);
							}
						})
					}), j && /* @__PURE__ */ f(s, {
						variant: "ghost",
						size: "sm",
						compact: !0,
						hideLabel: !0,
						icon: r,
						label: E.collections.table.settings.removeColumn,
						onClick: () => b?.(v)
					})]
				})
			}),
			C && (v.disabledReason ? /* @__PURE__ */ f(c, {
				tooltip: v.disabledReason,
				children: /* @__PURE__ */ f("span", {
					className: "inline-flex cursor-not-allowed",
					children: /* @__PURE__ */ f(l, {
						checked: !1,
						title: v.label,
						hideLabel: !0,
						disabled: !0
					})
				})
			}) : /* @__PURE__ */ f(l, {
				checked: v.visible,
				onCheckedChange: (e) => {
					y({
						...v,
						visible: e
					});
				},
				title: v.label,
				hideLabel: !0,
				disabled: !v.canHide || k
			}))
		]
	});
	return A ? /* @__PURE__ */ f(m.Item, {
		value: v,
		drag: "y",
		dragElastic: .1,
		whileDrag: { scale: 1.05 },
		dragListener: !1,
		dragControls: O,
		children: B
	}) : /* @__PURE__ */ f("li", { children: B });
}, b = ({ items: e, onChange: t, onRemove: n, onLockedChange: r, allowSorting: i, allowHiding: a }) => {
	let o = (n) => {
		t?.(e.map((e) => e.id === n.id ? n : e));
	};
	return /* @__PURE__ */ f(m.Group, {
		className: "flex flex-1 select-none list-none flex-col gap-2",
		values: e,
		onReorder: (n) => {
			t?.(v(e, n));
		},
		axis: "y",
		layoutScroll: !0,
		children: e.map((t, s) => /* @__PURE__ */ f(y, {
			item: t,
			onChangeVisibility: o,
			onRemove: n,
			onLockedChange: r,
			allowSorting: i,
			allowHiding: a,
			isFirst: s === 0,
			isLast: s === e.length - 1
		}, t.id))
	});
};
//#endregion
export { b as SortAndHideList, v as mergeReorderedItems };
