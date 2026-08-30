import { cn as e } from "../../../../lib/utils.js";
import { Spinner as t } from "../../../../ui/Spinner/index.js";
import { F0Select as n } from "../../../../F0Select.js";
import { VirtualList as r } from "../../../../lib/VirtualList/index.js";
import { EntitySelectListItem as i } from "../../ListItem/index.js";
import { CreateItem as a } from "../../CreateItem/index.js";
import { Footer as o } from "./Footer.js";
import { Searcher as s } from "./Searcher.js";
import c, { useCallback as l, useMemo as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/Content/MainContent/index.tsx
var p = 384, m = 36, h = 37, g = 1, _ = 200, v = "[data-avatarname-navigator-element=\"true\"]", y = ({ groupView: y, entities: x, groups: S, selectedGroup: C, search: w, onSelect: T, onRemove: E, onSubItemRemove: D, onSubItemSelect: O, onClear: k, onSelectAll: A, onSearch: te, selectedEntities: j = [], onGroupChange: ne, onToggleExpand: M, searchPlaceholder: N, selectAllLabel: P, clearLabel: F, notFoundTitle: I, notFoundSubtitle: L, className: R, actions: z, onCreate: B, onCreateLabel: V, singleSelector: H = !1, loading: U = !1, disabled: W = !1, hiddenAvatar: G = !1 }) => {
	let K = c.useRef(null), q = u(() => y ? x.reduce((e, t) => e + (t.subItems?.length ?? 0), 0) : x.length, [x, y]), J = l(() => {
		setTimeout(() => {
			K.current?.scrollTo({ top: 0 });
		}, g), setTimeout(() => {
			Array.from(document.querySelectorAll(v))[0]?.focus();
		}, _);
	}, []), Y = l(() => {
		setTimeout(() => {
			K.current?.scrollTo({ top: K.current?.scrollHeight });
		}, g), setTimeout(() => {
			let e = Array.from(document.querySelectorAll(v));
			e[e.length - 1]?.focus();
		}, _);
	}, []), X = u(() => new Map(j.map((e) => [e.id, e])), [j]), Z = l((e) => {
		let t = X.get(e.id);
		if (!y) return {
			selected: !!t,
			partialSelected: !!t
		};
		let n = (e.subItems ?? []).filter((e) => t?.subItems?.some((t) => t.subId === e.subId)), r = (e.subItems?.length ?? 0) === n.length;
		return {
			selected: r,
			partialSelected: !r && n.length > 0
		};
	}, [y, X]), re = l((e) => {
		if (e.index === 0 && B) return /* @__PURE__ */ d(a, {
			label: V ?? "",
			onCreate: () => B?.(w),
			goToFirst: J,
			goToLast: Y
		});
		let t = x[B ? e.index - 1 : e.index], { selected: n, partialSelected: r } = Z(t);
		return /* @__PURE__ */ d(i, {
			expanded: t.expanded ?? !1,
			onExpand: () => M(t, !0),
			search: w,
			groupView: y,
			entity: t,
			onSelect: T,
			onRemove: E,
			selected: n,
			partialSelected: r,
			showGroupIcon: ee(S, C),
			singleSelector: H,
			goToFirst: J,
			goToLast: Y,
			disabled: W,
			hiddenAvatar: G
		}, t.id);
	}, [
		B,
		V,
		W,
		x,
		Z,
		J,
		Y,
		y,
		S,
		G,
		E,
		T,
		M,
		w,
		C,
		H
	]), Q = u(() => y ? x.flatMap((e) => {
		let t = b(j ?? [], e.id);
		return [{
			parent: null,
			subItem: {
				subId: e.id,
				subName: e.name,
				subAvatar: e.avatar,
				expanded: e.expanded ?? t?.expanded ?? !1,
				subItems: e.subItems,
				subSearchKeys: e.searchKeys
			}
		}, ...(e.subItems ?? []).map((n) => ({
			parent: {
				...e,
				expanded: e.expanded ?? t?.expanded ?? !1
			},
			subItem: n
		}))];
	}).filter((e) => (!e.parent || e.parent.expanded) && (!!e.parent || !!e.subItem.subItems && e.subItem.subItems.length > 0)) : x.map((e) => ({
		parent: null,
		subItem: {
			subId: e.id,
			subName: e.name,
			subAvatar: e.avatar,
			subSearchKeys: e.searchKeys
		}
	})), [
		y,
		x,
		j
	]), ie = l((e) => {
		if (e.index === 0 && B) return /* @__PURE__ */ d(a, {
			label: V ?? "",
			onCreate: () => B?.(w),
			goToFirst: J,
			goToLast: Y
		});
		let t = B ? e.index - 1 : e.index, n = Q[t].parent, r = Q[t].subItem;
		if (!n) {
			let e = {
				id: r.subId,
				name: r.subName,
				avatar: r.subAvatar,
				subItems: r.subItems,
				expanded: r.expanded,
				searchKeys: r.subSearchKeys
			}, n = b(j, e.id), a = (e?.subItems ?? []).filter((e) => n?.subItems?.some((t) => t.subId === e.subId)), o = (e.subItems?.length ?? 0) === a.length, s = !o && a.length > 0;
			return /* @__PURE__ */ d(i, {
				groupView: !0,
				expanded: e.expanded ?? !1,
				onExpand: (t) => M(e, t),
				search: w,
				entity: e,
				onSelect: T,
				onRemove: E,
				selected: o,
				partialSelected: s,
				showGroupIcon: S.find((e) => e.value === C)?.groupType === "team",
				singleSelector: H,
				goToFirst: J,
				goToLast: Y,
				hideLine: t === Q.length - 1,
				disabled: W,
				hiddenAvatar: G
			});
		}
		let o = !!b(j, r.subId);
		if (!o) {
			let e = b(j, n.id);
			o = !!(n?.subItems ?? []).filter((t) => e?.subItems?.some((e) => e.subId === t.subId)).find((e) => e.subId === r.subId);
		}
		return /* @__PURE__ */ d(i, {
			expanded: !1,
			onExpand: () => null,
			search: w,
			groupView: !1,
			entity: {
				id: r.subId,
				name: r.subName,
				avatar: r.subAvatar,
				searchKeys: r.subSearchKeys
			},
			onSelect: () => {
				O(n, r);
			},
			onRemove: () => D(n, r),
			selected: !!o,
			partialSelected: !1,
			singleSelector: H,
			goToFirst: J,
			goToLast: Y,
			isChild: !0,
			hiddenAvatar: G
		});
	}, [
		Q,
		j,
		w,
		H,
		J,
		Y,
		T,
		E,
		S,
		W,
		M,
		C,
		O,
		D,
		G,
		B,
		V
	]), [ae, oe] = u(() => {
		if (!x.length) return [!1, !1];
		let e = 0, t = 0;
		if (!y) e = x.length, t = x.reduce((e, { id: t }) => e + +!!X.has(t), 0);
		else {
			let n = new Set([...X.values()].flatMap((e) => e.subItems?.map((e) => e.subId) ?? []));
			x.forEach((r) => {
				let i = r.subItems ?? [];
				e += i.length, t += i.filter((e) => n.has(e.subId)).length;
			});
		}
		return [e > 0 && t === e, t > 0];
	}, [
		x,
		X,
		y
	]), se = Q.length, ce = !H && (P || F), le = z && z.length > 0, $ = !U && (!H && ce || le);
	return /* @__PURE__ */ f("div", {
		className: e("flex w-full flex-col rounded-l-xl border-0", H || U ? "rounded-r-xl" : "", R),
		children: [
			/* @__PURE__ */ f("header", {
				className: e("flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl", H || U ? "rounded-t-xl border-r-0" : ""),
				children: [/* @__PURE__ */ d("div", {
					className: "flex-1",
					children: /* @__PURE__ */ d(s, {
						search: w,
						onSearch: te,
						searchPlaceholder: N,
						goToFirst: J,
						goToLast: Y
					})
				}), S && S.length > 1 && /* @__PURE__ */ d("div", {
					className: "flex-1",
					children: /* @__PURE__ */ d(n, {
						label: "Group",
						hideLabel: !0,
						disabled: U,
						onChange: ne,
						options: S,
						value: C,
						className: e("h-8 rounded bg-transparent py-[5px]", C === "all" ? "text-f1-foreground-secondary" : "")
					})
				})]
			}),
			/* @__PURE__ */ f("section", {
				className: e("flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background", $ ? "" : "rounded-b-xl border-r-0"),
				children: [
					U && /* @__PURE__ */ d("div", {
						className: "flex h-full w-full flex-row items-center justify-center",
						children: /* @__PURE__ */ d(t, {})
					}),
					!U && !q && /* @__PURE__ */ f("div", {
						className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
						style: { height: p },
						children: [/* @__PURE__ */ d("span", {
							className: "text-lg font-medium",
							children: I
						}), /* @__PURE__ */ d("span", {
							className: "text-center text-f1-foreground-secondary",
							children: L
						})]
					}),
					!U && (!!q || B) && /* @__PURE__ */ d("div", {
						className: "h-full",
						children: y ? /* @__PURE__ */ d(r, {
							height: p,
							itemCount: se + +!!B,
							itemSize: (e) => {
								if (e === 0 && B) return m;
								let t = B ? e - 1 : e;
								return Q[t]?.parent === null ? h : m;
							},
							renderer: ie,
							ref: K
						}) : /* @__PURE__ */ d(r, {
							height: p,
							itemCount: x.length + +!!B,
							itemSize: m,
							renderer: re,
							ref: K
						})
					})
				]
			}),
			/* @__PURE__ */ d(o, {
				onSelectAll: A,
				onClear: k,
				singleSelector: H,
				totalFilteredEntities: q,
				allVisibleSelected: ae,
				anyVisibleSelected: oe,
				selectAllLabel: P,
				clearLabel: F,
				disabled: W,
				actions: z
			})
		]
	});
}, b = (e, t) => e.find((e) => e.id === t), ee = (e, t) => e.find((e) => e.value === t)?.groupType === "team";
//#endregion
export { y as MainContent };
