import { cn as e } from "../../lib/utils.js";
import { Popover as t, PopoverContent as n, PopoverTrigger as r } from "../../ui/popover.js";
import { F0DialogContext as i } from "../../patterns/F0Dialog/components/F0DialogProvider.js";
import { Content as a } from "./Content/index.js";
import { Trigger as o } from "./Trigger/index.js";
import { useContext as s, useEffect as c, useLayoutEffect as l, useMemo as u, useRef as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { useDebounceValue as h } from "usehooks-ts";
//#region src/deprecated/EntitySelect/index.tsx
var g = (g) => {
	let [_, v] = f((g.alwaysOpen || g.defaultOpen) ?? !1), x = (e) => {
		v(e), g.onOpenChange?.(e);
	};
	c(() => {
		g.defaultOpen && _ && g.onOpenChange?.(!0);
	}, [g.defaultOpen]);
	let [S, C] = f(g.entities), [w, T] = f(""), [E, D] = h("", 300), O = u(() => g.entities.some((e) => e.subItems && e.subItems.length > 0), [g.entities]), k = s(i), A = k.portalContainer && (k.position === "center" || k.position === "fullscreen") ? k.portalContainer : void 0;
	function j(e) {
		if (g.singleSelector) {
			g.onSelect(e), v(!1);
			return;
		}
		let t = g.selectedEntities ?? [], n = S.find((t) => t.id === e.id);
		if (!n) return;
		let r = new Set((n.subItems ?? []).map((e) => e.subId)), i = /* @__PURE__ */ new Set([n.id]);
		S.forEach((e) => {
			e.id !== n.id && (e.subItems ?? []).some((e) => r.has(e.subId)) && i.add(e.id);
		});
		let a = [...t];
		function o(e) {
			let t = a.findIndex((t) => t.id === e.id);
			t >= 0 ? a[t] = e : a.push(e);
		}
		i.forEach((e) => {
			let t = S.find((t) => t.id === e);
			if (!t) return;
			let n = t.subItems?.filter((e) => r.has(e.subId)) ?? [], i = a.findIndex((t) => t.id === e);
			if (i >= 0) {
				let e = a[i].subItems ?? [], r = new Set(e.map((e) => e.subId)), s = [...e, ...n.filter((e) => !r.has(e.subId))];
				o({
					...t,
					subItems: s
				});
			} else o({
				...t,
				subItems: n
			});
		}), g.onSelect(a);
	}
	function M(e, t) {
		if (g.singleSelector) g.onSelect({
			...e,
			subItems: [{ ...t }]
		}), v(!1);
		else {
			let n = g.selectedEntities ?? [], r = new Set(n.map((e) => e.id)), i = new Map(n.map((e) => [e.id, e.subItems ?? []]));
			r.add(e.id), g.entities.forEach((e) => {
				e.subItems?.some((e) => e.subId === t.subId) && r.add(e.id);
			});
			let a = [];
			g.entities.forEach((e) => {
				if (r.has(e.id)) {
					let n = [...i.get(e.id) ?? []];
					e.subItems?.some((e) => e.subId === t.subId) && (n.some((e) => e.subId === t.subId) || n.push(t));
					let r = new Set((e.subItems ?? []).map((e) => e.subId));
					n = n.filter((e) => r.has(e.subId)), a.push({
						...e,
						subItems: n
					});
				}
			}), g.onSelect(a);
		}
	}
	function N(e) {
		if (g.singleSelector) {
			g.onSelect(null);
			return;
		}
		let t = [], n = g.selectedEntities ?? [];
		if (O) {
			let r = S.find((t) => t.id === e.id);
			if (!r) return;
			let i = new Set((r.subItems ?? []).map((e) => e.subId));
			for (let e of n) {
				let n = (e.subItems ?? []).filter((e) => !i.has(e.subId));
				n.length > 0 && t.push({
					...e,
					subItems: n
				});
			}
		} else t = (n ?? []).filter((t) => t.id !== e.id);
		g.onSelect(t);
	}
	function P(e, t) {
		if (g.singleSelector) {
			g.onSelect(null);
			return;
		}
		let n = g.selectedEntities ?? [], r = t.subId, i = [];
		for (let e of n) {
			let t = e.subItems?.filter((e) => e.subId !== r) ?? [];
			t.length > 0 && i.push({
				...e,
				subItems: t
			});
		}
		g.onSelect(i);
	}
	function F() {
		if (g.singleSelector) {
			g.onSelect(null);
			return;
		}
		let e = g.selectedEntities ?? [], t = [];
		if (O) {
			let n = new Set(S.flatMap((e) => (e.subItems ?? []).map((e) => e.subId)));
			for (let r of e) {
				let e = (r.subItems ?? []).filter((e) => !n.has(e.subId));
				e.length > 0 && t.push({
					...r,
					subItems: e
				});
			}
		} else {
			let n = new Set(S.map((e) => e.id));
			t = (e ?? []).filter((e) => !n.has(e.id));
		}
		g.onSelect(t);
	}
	function I() {
		let e = [...g.selectedEntities ?? []];
		S.forEach((t) => {
			let n = e.find((e) => e.id === t.id);
			n ? n.subItems = Array.from(/* @__PURE__ */ new Set([...n.subItems ?? [], ...t.subItems ?? []])) : e.push({
				...t,
				subItems: t.subItems || []
			});
		}), g.singleSelector || g.onSelect(e);
	}
	let L = (e) => {
		T(e), D(e);
	}, R = (e, t) => {
		g.onItemExpandedChange(e.id, t), C(S.map((t) => t.id === e.id ? {
			...t,
			expanded: !e.expanded
		} : t));
	};
	c(() => {
		if (!E) {
			C(g.entities);
			return;
		}
		if (O && !g.applySearchToGroup) {
			let e = g.entities.map((e) => {
				let t = b(e, E), n = e.subItems?.map((e) => ({
					...e,
					score: y(E, e.subSearchKeys ?? [e.subName])
				})).filter((e) => e.score < Infinity).sort((e, t) => e.score - t.score);
				return {
					...e,
					score: t,
					expanded: e.expanded ?? (n?.length ?? 0) > 0,
					subItems: n
				};
			}).filter((e) => e.score < Infinity).sort((e, t) => e.score - t.score);
			C(e);
		} else {
			let e = g.entities.map((e) => {
				let t = y(E, e.searchKeys ?? [e.name]);
				return {
					...e,
					score: t
				};
			}).filter((e) => e.score < Infinity).sort((e, t) => e.score - t.score);
			C(e);
		}
	}, [
		E,
		g.entities,
		g.applySearchToGroup,
		O,
		C
	]);
	let z = d(null), [B, V] = f(0);
	return l(() => {
		let e = () => {
			z.current && V(z.current.offsetWidth);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), g.alwaysOpen ? /* @__PURE__ */ p("div", {
		ref: z,
		className: e("scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0", g.width ? "w-fit" : "w-full"),
		children: /* @__PURE__ */ p(a, {
			groupView: O,
			entities: S,
			groups: g.groups,
			onGroupChange: g.onGroupChange,
			selectedGroup: g.selectedGroup,
			onSelect: j,
			onRemove: N,
			onSubItemRemove: P,
			onSubItemSelect: M,
			onClear: F,
			onSelectAll: I,
			selectedEntities: g.selectedEntities ?? [],
			search: w,
			onSearch: L,
			onToggleExpand: R,
			searchPlaceholder: g.searchPlaceholder,
			selectAllLabel: g.selectAllLabel,
			clearLabel: g.clearLabel,
			selectedLabel: g.selectedLabel,
			singleSelector: g.singleSelector,
			loading: g.loading,
			notFoundTitle: g.notFoundTitle,
			notFoundSubtitle: g.notFoundSubtitle,
			width: g.width ?? B - 2,
			disabled: g.disabled,
			hiddenAvatar: g.hiddenAvatar,
			onCreate: g.onCreate,
			onCreateLabel: g.onCreateLabel
		})
	}) : /* @__PURE__ */ m(t, {
		...g,
		onOpenChange: x,
		open: _,
		children: [/* @__PURE__ */ p(r, {
			className: "w-full",
			disabled: g.disabled,
			"aria-label": g.label || g.placeholder,
			children: g.children ? g.children : /* @__PURE__ */ p(o, {
				selected: g.selectedItemsCopy,
				selectedEntities: g.selectedEntities ?? [],
				hiddenAvatar: g.hiddenAvatar,
				label: g.label,
				labelIcon: g.labelIcon,
				icon: g.icon,
				error: g.error,
				status: g.status,
				hint: g.hint,
				hideLabel: g.hideLabel,
				maxLength: g.maxLength,
				value: g.value?.toString() ?? void 0,
				disabled: g.disabled,
				placeholder: g.placeholder,
				loading: g.alwaysOpen ? g.loading : !1,
				required: g.required,
				readonly: g.readonly,
				append: g.append,
				size: g.size,
				open: _
			})
		}), /* @__PURE__ */ p(n, {
			container: A,
			className: e("scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"),
			children: /* @__PURE__ */ p(a, {
				groupView: O,
				entities: S,
				groups: g.groups,
				onGroupChange: g.onGroupChange,
				selectedGroup: g.selectedGroup,
				onSelect: j,
				onRemove: N,
				onSubItemRemove: P,
				onSubItemSelect: M,
				onClear: F,
				onSelectAll: I,
				selectedEntities: g.selectedEntities ?? [],
				search: w,
				onSearch: L,
				onToggleExpand: R,
				searchPlaceholder: g.searchPlaceholder,
				selectAllLabel: g.selectAllLabel,
				clearLabel: g.clearLabel,
				selectedLabel: g.selectedLabel,
				singleSelector: g.singleSelector,
				loading: g.loading,
				notFoundTitle: g.notFoundTitle,
				notFoundSubtitle: g.notFoundSubtitle,
				width: g.width,
				disabled: g.disabled,
				hiddenAvatar: g.hiddenAvatar,
				actions: g.actions,
				onCreate: g.onCreate,
				onCreateLabel: g.onCreateLabel
			})
		})]
	});
};
function _(e) {
	return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function v(e) {
	return _(e).split(/\s+/).filter((e) => e.length > 0);
}
function y(e = "", t) {
	let n = v(e);
	if (n.length === 0) return Infinity;
	for (let r of t) {
		let t = _(r), i = v(r), a = _(e);
		if (t.includes(a) || n.every((e) => i.some((t) => t.includes(e)))) return 1;
	}
	return Infinity;
}
function b(e, t) {
	let n = y(t, e.searchKeys ?? [e.name]), r = Infinity;
	return e.subItems?.length && (r = e.subItems.reduce((e, n) => {
		let r = y(t, n.subSearchKeys ?? [n.subName]);
		return Math.min(e, r);
	}, Infinity)), Math.min(n, r);
}
//#endregion
export { g as EntitySelect };
