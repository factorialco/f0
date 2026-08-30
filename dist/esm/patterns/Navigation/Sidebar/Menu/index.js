import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/Delete.js";
import i from "../../../../icons/app/EllipsisHorizontal.js";
import a from "../../../../icons/app/MoveDown.js";
import o from "../../../../icons/app/MoveUp.js";
import { useI18n as s } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as c } from "../../../../experimental/Overlays/Tooltip/index.js";
import { Link as l, useNavigation as u } from "../../../../lib/linkHandler.js";
import { Counter as d } from "../../../../ui/Counter/index.js";
import { OneEllipsis as f } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0Avatar as p } from "../../../../components/avatars/F0Avatar/index.js";
import { Dropdown as m } from "../../../../experimental/Navigation/Dropdown/index.js";
import { F0TagRaw as h } from "../../../../components/tags/F0TagRaw/index.js";
import { SidebarCollapsibleSection as g } from "../CollapsibleSection/index.js";
import { useTouchScreen as _ } from "../../../../lib/useTouchScreen.js";
import { DragProvider as v, useDragContext as y } from "./DragContext.js";
import { useCallback as b, useEffect as x, useMemo as S, useRef as C, useState as w } from "react";
import { Fragment as T, jsx as E, jsxs as D } from "react/jsx-runtime";
import { LayoutGroup as O, Reorder as k, useDragControls as A } from "motion/react";
//#region src/patterns/Navigation/Sidebar/Menu/index.tsx
var j = ({ item: t, active: r }) => /* @__PURE__ */ D("div", {
	className: "flex w-full items-center justify-between",
	children: [/* @__PURE__ */ D("div", {
		className: "flex min-w-0 items-center gap-1.5 font-medium text-f1-foreground",
		children: [/* @__PURE__ */ E(n, {
			icon: t.icon,
			size: "md",
			className: e("transition-colors", r ? "text-f1-icon-bold" : "text-f1-icon")
		}), /* @__PURE__ */ E("span", { children: t.label })]
	}), (t.tag || t.badge) && /* @__PURE__ */ D("div", {
		className: "flex flex-shrink-0 items-center gap-1.5",
		children: [t.tag && /* @__PURE__ */ E(h, { text: t.tag }), t.badge && /* @__PURE__ */ E(d, {
			value: t.badge,
			size: "sm",
			type: "bold"
		})]
	})]
}), M = ({ item: n }) => {
	let { isActive: r } = u(), { label: i, icon: a, ...o } = n, s = r(o.href, { exact: o.exactMatch });
	return /* @__PURE__ */ E(l, {
		...o,
		className: e("flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors", t("focus-visible:ring-inset"), s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"),
		children: /* @__PURE__ */ E(j, {
			item: n,
			active: s
		})
	});
}, N = ({ item: t, tooltip: c, dragConstraints: d, onRemove: h, index: g, total: _, onMove: v, onReorderFinish: b, isSortable: x = !0 }) => {
	let O = s(), { isDragging: A, setIsDragging: j, draggedItemId: M, setDraggedItemId: N } = y(), { isActive: P } = u(), F = P(t.href, { exact: t.exactMatch }), I = C(!1), [R, z] = w(!1), B = g === 0, V = g === _ - 1, H = _ === 1, U = S(() => {
		let e = [];
		return !H && !B && e.push({
			label: O.actions.moveUp,
			onClick: () => v?.(g, g - 1),
			icon: o
		}), !H && !V && e.push({
			label: O.actions.moveDown,
			onClick: () => v?.(g, g + 1),
			icon: a
		}), e.length > 0 && e.push({ type: "separator" }), e.push({
			label: O.favorites.remove,
			onClick: () => h?.(t),
			icon: r,
			critical: !0
		}), e;
	}, [
		H,
		B,
		V,
		O,
		v,
		g,
		h,
		t
	]), W = () => {
		j(!0), z(!1), N(t.href || null), I.current = !0;
	}, G = () => {
		j(!1), N(null), b(), setTimeout(() => {
			I.current = !1;
		}, 0);
	}, K = A && M === t.href, q = S(() => e("group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing", x && "touch-none", F ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary", R && "bg-f1-background-secondary", K && "bg-f1-background-secondary"), [
		F,
		R,
		K,
		x
	]), J = S(() => /* @__PURE__ */ D(T, { children: [/* @__PURE__ */ E("div", {
		className: "flex w-full items-center justify-between px-1.5 py-1.5",
		children: /* @__PURE__ */ E(L, {
			tooltip: c,
			children: /* @__PURE__ */ D(l, {
				onClick: t.onClick,
				href: t.href,
				exactMatch: t.exactMatch,
				className: e("flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline", K && "pointer-events-none"),
				draggable: !1,
				children: [t.type === "icon" ? /* @__PURE__ */ E(n, {
					icon: t.icon,
					size: "md",
					className: e("transition-colors", F ? "text-f1-icon-bold" : "text-f1-icon")
				}) : t.avatar ? /* @__PURE__ */ E(p, {
					size: "xs",
					avatar: t.avatar
				}) : null, /* @__PURE__ */ E(f, {
					tag: "span",
					className: "line-clamp-1 font-medium text-f1-foreground",
					lines: 1,
					noTooltip: !!c,
					children: t.label
				})]
			})
		})
	}), /* @__PURE__ */ E("div", {
		className: e("absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100", R && "bg-f1-background-secondary opacity-100", K && "opacity-100"),
		children: /* @__PURE__ */ E(m, {
			open: R,
			onOpenChange: z,
			items: U,
			children: /* @__PURE__ */ E("div", {
				className: "flex items-center justify-center",
				role: "list",
				children: /* @__PURE__ */ E(n, {
					icon: i,
					size: "sm"
				})
			})
		})
	})] }), [
		t,
		F,
		R,
		K,
		U,
		c
	]);
	return x ? /* @__PURE__ */ E(k.Item, {
		value: t,
		drag: "y",
		dragConstraints: d,
		dragElastic: .1,
		onDragStart: W,
		onDragEnd: G,
		className: q,
		whileDrag: { scale: 1.05 },
		children: J
	}) : /* @__PURE__ */ E("div", {
		className: q,
		children: J
	});
}, P = ({ category: t, isSortable: n = !1, dragConstraints: r, onCollapse: i, onDragEnd: a, currentOrder: o }) => {
	let { isDragging: s, setIsDragging: c } = y(), l = C(!1), u = A(), d = () => {
		c(!0), l.current = !0;
	}, f = () => {
		c(!1), setTimeout(() => {
			l.current = !1, o && a?.(o);
		}, 0);
	}, p = /* @__PURE__ */ E(g, {
		title: t.title,
		isOpen: t.isOpen,
		isRoot: t.isRoot,
		onCollapse: (e) => {
			!s && !l.current && i?.(t, e);
		},
		isDragging: s,
		wasDragging: l,
		children: /* @__PURE__ */ E("div", {
			className: e("flex flex-col gap-0.5", s && !l.current && "pointer-events-none"),
			children: t.items.map((e, t) => /* @__PURE__ */ E(M, { item: e }, t))
		})
	});
	return n ? /* @__PURE__ */ E(k.Item, {
		id: t.id,
		value: t,
		dragConstraints: r,
		dragElastic: .1,
		dragControls: u,
		onDragStart: d,
		onDragEnd: f,
		layout: !0,
		layoutId: `category-${t.id}`,
		initial: { opacity: 1 },
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .95,
			filter: "blur(8px)"
		},
		transition: {
			opacity: {
				duration: .2,
				ease: "easeInOut"
			},
			filter: {
				duration: .1,
				ease: "easeInOut"
			},
			scale: {
				duration: .2,
				ease: [
					.175,
					.885,
					.32,
					1.275
				]
			},
			layout: {
				type: "spring",
				bounce: .1,
				damping: 15
			}
		},
		whileDrag: {
			scale: 1.04,
			cursor: "grabbing",
			zIndex: 50,
			backdropFilter: "blur(4px)"
		},
		className: "relative",
		children: p
	}) : p;
};
function F({ tree: e, onCollapse: t, onSort: n, onFavoritesChange: r, favorites: i }) {
	let a = C(null), o = e.filter((e) => e.isSortable === !1), [s, c] = w(e.filter((e) => e.isSortable !== !1)), [l, u] = w(0), d = b((e) => {
		c(e);
	}, []), f = b((e) => {
		n?.(e);
	}, [n]), p = _();
	return /* @__PURE__ */ E(v, { children: /* @__PURE__ */ E(O, {
		id: "sidebar-menu",
		children: /* @__PURE__ */ E(I, {
			disableDragging: p,
			nonSortableItems: o,
			sortableItems: s,
			setSortableItems: d,
			containerRef: a,
			onCollapse: t,
			onDragEnd: f,
			favorites: i,
			onFavoritesChange: r,
			forceUpdate: () => u((e) => e + 1)
		}, l)
	}) });
}
function I({ nonSortableItems: t, sortableItems: n, setSortableItems: r, containerRef: i, onCollapse: a, onDragEnd: o, favorites: c = [], onFavoritesChange: l, forceUpdate: u, disableDragging: d = !1 }) {
	let f = s(), { isDragging: p } = y(), m = t.some((e) => e.isRoot), h = t.filter((e) => !e.isRoot).length > 0, _ = n.length > 0, v = C(null), [T, O] = w(c), A = c.length > 0;
	x(() => {
		JSON.stringify(c) !== JSON.stringify(T) && O(c);
	}, [c]);
	let j = (e) => {
		O(e);
	}, M = b((e) => {
		let t = T.filter((t) => t.href !== e.href);
		O(t), l?.(t);
	}, [T, l]), F = b((e, t) => {
		if (t < 0 || t >= T.length) return;
		let n = [...T], [r] = n.splice(e, 1);
		n.splice(t, 0, r), O(n), l?.(n);
	}, [T, l]), [I, L] = w(!1), R = C(null);
	x(() => {
		n.length > 0 && !I && (r([...n]), L(!0));
	}, [
		n,
		r,
		I
	]), x(() => {
		let e = () => {
			R.current !== null && window.clearTimeout(R.current), R.current = window.setTimeout(() => {
				i.current && n.length > 0 && u();
			}, 50);
		};
		return window.addEventListener("resize", e), () => {
			window.removeEventListener("resize", e), R.current !== null && window.clearTimeout(R.current);
		};
	}, [
		i,
		n,
		u
	]);
	let z = "flex flex-col gap-0.5", B = S(() => T.reduce((e, t, n) => (t.label in e || (e[t.label] = []), e[t.label].push(n), e), {}), [T]), V = S(() => A && T.map((e, t) => /* @__PURE__ */ E(N, {
		isSortable: !d,
		tooltip: (B[e.label] ?? []).length > 1 ? e.tooltip : void 0,
		item: e,
		dragConstraints: v,
		onRemove: M,
		index: t,
		total: T.length,
		onMove: F,
		onReorderFinish: () => {
			l?.(T);
		}
	}, `${e.href}-${e.label}`)), [
		A,
		T,
		B,
		M,
		F,
		l,
		d
	]), H = "flex flex-col gap-3", U = S(() => n.map((e) => /* @__PURE__ */ E(P, {
		category: e,
		isSortable: !d,
		dragConstraints: i,
		onCollapse: a,
		onDragEnd: o,
		currentOrder: n
	}, e.id)), [
		n,
		d,
		i,
		a,
		o
	]);
	return /* @__PURE__ */ D("div", {
		className: e("relative", p && "cursor-grabbing [&_*]:cursor-grabbing"),
		children: [
			m && /* @__PURE__ */ E("div", {
				className: "flex w-full flex-col gap-3 bg-transparent px-3",
				children: t.filter((e) => e.isRoot).map((e, t) => /* @__PURE__ */ E(P, {
					category: e,
					onCollapse: a
				}, `fixed-${t}`))
			}),
			A && /* @__PURE__ */ E("div", {
				className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3",
				children: /* @__PURE__ */ E(g, {
					title: f.favorites.favorites,
					children: /* @__PURE__ */ E("div", {
						ref: v,
						children: d ? /* @__PURE__ */ E("div", {
							className: z,
							children: V
						}) : /* @__PURE__ */ E(k.Group, {
							axis: "y",
							values: T,
							onReorder: j,
							className: z,
							children: V
						})
					})
				})
			}),
			h && /* @__PURE__ */ E("div", {
				className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3",
				children: t.filter((e) => !e.isRoot).map((e, t) => /* @__PURE__ */ E(P, {
					category: e,
					onCollapse: a
				}, `fixed-${t}`))
			}),
			_ && /* @__PURE__ */ E("div", {
				className: e("mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"),
				ref: i,
				children: d ? /* @__PURE__ */ E("div", {
					className: H,
					children: U
				}) : /* @__PURE__ */ E(k.Group, {
					axis: "y",
					values: n,
					onReorder: r,
					layoutScroll: !0,
					className: H,
					children: U
				})
			})
		]
	});
}
var L = ({ tooltip: e, children: t }) => e ? /* @__PURE__ */ E(c, {
	description: e,
	children: t
}) : t;
//#endregion
export { F as Menu };
