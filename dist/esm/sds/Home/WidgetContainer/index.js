import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/Delete.js";
import r from "../../../icons/app/Ellipsis.js";
import i from "../../../icons/app/InfoCircleLine.js";
import a from "../../../icons/app/Plus.js";
import o from "../../../icons/app/Sliders.js";
import { useI18n as s } from "../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as c } from "../../../experimental/Overlays/Tooltip/index.js";
import { F0Button as l } from "../../../components/F0Button/F0Button.js";
import { DropdownInternal as u } from "../../../experimental/Navigation/Dropdown/internal.js";
import { toasts as ee } from "../../../hooks/toast/imperative.js";
import { arrivalWindowMs as te, useElapsed as ne } from "../home-motion.js";
import { resolveWidgetHeader as re, widgetChrome as ie, widgetTitle as ae } from "../slotRenderers.js";
import { SlotWidget as oe } from "../SlotWidget/index.js";
import { WidgetUpdateDialog as se } from "../WidgetUpdateDialog/index.js";
import { takeCardGhost as ce, takePageSurface as le } from "./dragGhost.js";
import { lockedCeiling as ue, noHigherThan as de, topPins as fe } from "./lockedCeiling.js";
import { SortableWidget as pe } from "./SortableWidget.js";
import { useWidgetVirtualizer as me } from "./useWidgetVirtualizer.js";
import { verticalOnly as he } from "./verticalOnly.js";
import { WidgetMotion as ge } from "./WidgetMotion.js";
import { useMemo as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { DndContext as _e, DragOverlay as ve, PointerSensor as g, closestCenter as ye, useSensor as be, useSensors as xe } from "@dnd-kit/core";
import { SortableContext as Se, arrayMove as _, verticalListSortingStrategy as Ce } from "@dnd-kit/sortable";
//#region src/sds/Home/WidgetContainer/index.tsx
var v = [
	"a",
	"button",
	"input",
	"select",
	"textarea",
	"label",
	"[role='button']",
	"[role='link']",
	"[role='menuitem']",
	"[role='switch']",
	"[role='checkbox']",
	"[role='tab']",
	"[contenteditable='true']"
].join(","), we = class extends g {
	static activators = [{
		eventName: "onPointerDown",
		handler: ({ nativeEvent: e }, { onActivation: t }) => {
			if (!e.isPrimary || e.button !== 0) return !1;
			let n = e.target;
			return n instanceof Element && n.closest(v) ? !1 : (t?.({ event: e }), !0);
		}
	}];
}, Te = {
	duration: 450,
	easing: "cubic-bezier(0.4, 0, 0.1, 1)"
}, Ee = (e, t) => {
	for (let n = e; n; n = n.parentElement) {
		let e = n.querySelector(t);
		if (e) return e;
	}
	return null;
}, y = {
	main: 24,
	right: 16
}, De = ({ hidden: e, placement: t, measureRef: n, children: r }) => /* @__PURE__ */ m("div", {
	ref: t ? n : void 0,
	"data-index": t?.index,
	hidden: e,
	style: t ? {
		position: "absolute",
		top: t.start,
		left: 0,
		width: "100%"
	} : { display: e ? void 0 : "contents" },
	children: r
}), Oe = ({ onClick: e, label: n }) => /* @__PURE__ */ m(c, {
	label: n,
	children: /* @__PURE__ */ m("button", {
		type: "button",
		onClick: e,
		"aria-label": n,
		className: "flex w-full items-center justify-center rounded-xl border border-dashed border-f1-border py-4 text-f1-foreground-secondary hover:border-f1-border-hover hover:text-f1-foreground",
		children: /* @__PURE__ */ m(t, {
			size: "md",
			icon: a
		})
	})
});
function b({ widgets: t = [], side: a = "main", children: c, slotRenderers: g, renderWidget: v, disableEdition: b = !1, disableDrag: ke = !1, dragSurfaceSelector: x, onRemoveWidget: S, onClickAddNewWidget: C, onReorder: w, visibleWidgetId: T, entrance: E = {}, virtualized: D = !1, stow: O, addWidgetLabel: Ae, onChangeWidgetParams: k, rebuildWidget: A, renderWidgetPreview: j, paramsPreviewWidth: je, removeLabel: Me, editParamsLabel: Ne, ctx: M = {}, className: Pe, style: Fe }) {
	let N = s(), P = !b, Ie = (e) => T !== void 0 && e.id !== T, F = P && w != null && t.filter((e) => !e.locked).length > 1, [I, L] = p(null), Le = xe(be(we, { activationConstraint: { distance: 4 } })), [Re, R] = p(null), z = t.find((e) => e.id === Re), [ze, B] = p(null), V = f(null), H = f(null), U = f(null), W = f(null), Be = d(() => [he, de(() => W.current)], []), Ve = (e) => {
		let t = V.current?.querySelector(`[data-widget-id="${e}"]`);
		H.current = ce(t), U.current = x ? le(Ee(V.current, x), t) : null;
	}, He = (e) => {
		e && H.current && e.replaceChildren(H.current);
	}, G = f(0), K = () => cancelAnimationFrame(G.current), Ue = (e) => {
		K();
		let t = U.current;
		if (!e || !t) return;
		e.replaceChildren(t.node), e.style.top = `${t.offset.top}px`, e.style.left = `${t.offset.left}px`, e.style.width = `${t.offset.width}px`, e.style.height = `${t.offset.height}px`, t.base && (e.style.backgroundColor = t.base);
		let n = e.parentElement?.parentElement;
		if (!n || typeof DOMMatrix != "function") return;
		let r = () => {
			let { m41: t, m42: i } = new DOMMatrix(getComputedStyle(n).transform);
			e.style.transform = `translate3d(${-t}px, ${-i}px, 0)`, G.current = requestAnimationFrame(r);
		};
		r();
	}, q = me({
		config: D === !0 ? {} : D,
		count: t.length,
		gap: y[a],
		pinned: I ? [t.findIndex((e) => e.id === I)] : [],
		paused: T !== void 0
	}), We = D !== !1 && T !== void 0, Ge = ({ activatorEvent: e, delta: n, active: r }) => {
		let i = r.rect.current.translated, a = e, o = a.clientX == null ? null : a.clientX + n.x, s = a.clientY == null ? null : a.clientY + n.y, c = W.current == null ? [] : fe(t);
		return t.find((e) => {
			if (!e.locked || c.includes(e)) return !1;
			let t = V.current?.querySelector(`[data-widget-id="${e.id}"]`)?.getBoundingClientRect();
			if (!t) return !1;
			let n = t.top + t.height / 2, r = !!i && i.top <= n && i.bottom >= n, a = o != null && s != null && o >= t.left && o <= t.right && s >= t.top && s <= t.bottom;
			return r || a;
		});
	}, Ke = (e) => {
		let t = [...e.actions ?? []];
		return re(e.header, e.params)?.info && t.push({
			label: N.widgets.whatThisMeans,
			icon: i,
			onClick: () => B(e.id)
		}), e.paramsSchema && k && t.push({
			label: Ne ?? N.widgets.editParams,
			icon: o,
			onClick: () => R(e.id)
		}), P && !e.locked && S && (t.length > 0 && t.push({ type: "separator" }), t.push({
			label: Me ?? N.widgets.removeWidget,
			icon: n,
			critical: !0,
			onClick: () => S(e.id)
		})), t;
	}, J = (e) => {
		let { active: n, over: r } = e, i = Ge(e);
		if (i) {
			ee.open({
				variant: "warning",
				title: N.widgets.cannotMoveHere.replace("{{title}}", ae(i))
			});
			return;
		}
		if (!r || n.id === r.id) return;
		let a = t.map((e) => e.id), o = a.indexOf(String(n.id)), s = a.indexOf(String(r.id));
		if (o < 0 || s < 0) return;
		let c = new Map(t.flatMap((e, t) => e.locked ? [[t, e.id]] : []));
		if (c.size === 0) {
			w?.(_(a, o, s));
			return;
		}
		if ([...c.values()].includes(String(r.id))) return;
		let l = _(a, o, s).filter((e) => !c.has(a.indexOf(e))), u = a.map((e, t) => c.get(t) ?? l.shift());
		w?.(u);
	}, Y = (e, t, n = e.params) => {
		let i = Ke(e);
		if (!v) return /* @__PURE__ */ m(oe, {
			...ie(e),
			header: e.header,
			params: n,
			fullHeight: e.fullHeight,
			slots: e.slots,
			loading: e.loading,
			slotRenderers: g,
			ctx: M,
			actions: i.length > 0 ? i : void 0,
			flipped: ze === e.id,
			onFlipBack: () => B(null),
			isDragging: t?.isDragging
		});
		let a = v(e, M);
		return i.length === 0 ? a : /* @__PURE__ */ h("div", {
			className: "relative",
			children: [a, /* @__PURE__ */ m("div", {
				className: "absolute right-3 top-3 z-10",
				children: /* @__PURE__ */ m(u, {
					items: i,
					align: "end",
					children: /* @__PURE__ */ m(l, {
						icon: r,
						label: "Actions",
						variant: "ghost",
						size: "sm",
						hideLabel: !0
					})
				})
			})]
		});
	}, X = E === !1 ? null : E, qe = ne(te(X?.delayMs)), Je = (e) => O && {
		...O,
		stowed: O.stowed && e.id !== T,
		instant: O.stowed
	}, Z = (e, t, n) => {
		let r = n ? Je(n) : void 0;
		return !X && !r ? t : /* @__PURE__ */ m(ge, {
			arrival: X ? {
				order: (X.order ?? 0) + e,
				delayMs: X.delayMs ?? 0,
				arriving: !qe
			} : void 0,
			stow: r,
			fullHeight: n?.fullHeight,
			children: t
		});
	}, Q = (e, t, n) => /* @__PURE__ */ m(De, {
		hidden: Ie(e),
		placement: n,
		measureRef: q.measureRef,
		children: F ? /* @__PURE__ */ m(pe, {
			id: e.id,
			disabled: e.locked || ke,
			children: (n) => Z(t, Y(e, n), e)
		}) : Z(t, Y(e), e)
	}, e.id), $ = /* @__PURE__ */ m("div", {
		ref: q.listRef,
		className: e("flex flex-col", a === "main" ? "gap-6" : "gap-4"),
		style: q.window ? {
			position: "relative",
			height: q.window.totalSize
		} : void 0,
		children: q.window ? q.window.placements.map((e) => Q(t[e.index], e.index, e)) : t.flatMap((e, t) => We && e.id !== T ? [] : [Q(e, t)])
	});
	return /* @__PURE__ */ h("div", {
		ref: V,
		className: e("relative flex flex-col [&_*]:shadow-none", a === "main" ? "gap-6" : "gap-4", Pe),
		style: Fe,
		children: [
			c,
			F ? /* @__PURE__ */ h(_e, {
				sensors: Le,
				collisionDetection: ye,
				modifiers: Be,
				onDragStart: ({ active: e }) => {
					Ve(String(e.id)), W.current = ue(t, V.current, y[a]), L(String(e.id));
				},
				onDragCancel: () => {
					L(null), K(), H.current = null, U.current = null, W.current = null;
				},
				onDragEnd: (e) => {
					L(null), H.current = null, U.current = null, J(e), W.current = null;
				},
				children: [
					/* @__PURE__ */ m(Se, {
						items: t.map((e) => e.id),
						strategy: Ce,
						children: $
					}),
					I ? /* @__PURE__ */ m("div", {
						"aria-hidden": !0,
						"data-drag-cursor": !0,
						className: "fixed inset-0 z-50 cursor-grabbing"
					}) : null,
					/* @__PURE__ */ m(ve, {
						dropAnimation: Te,
						children: I ? /* @__PURE__ */ h("div", {
							className: "relative h-full w-full cursor-grabbing overflow-hidden rounded-xl bg-f1-background",
							children: [/* @__PURE__ */ m("div", {
								ref: Ue,
								className: "absolute isolate"
							}), /* @__PURE__ */ m("div", {
								ref: He,
								className: "relative h-full w-full [&_*]:shadow-none"
							})]
						}) : null
					})
				]
			}) : $,
			!b && C ? Z(t.length, /* @__PURE__ */ m(Oe, {
				onClick: C,
				label: Ae ?? N.widgets.addWidget
			})) : null,
			z?.paramsSchema && k ? /* @__PURE__ */ m(se, {
				isOpen: !0,
				onClose: () => R(null),
				schema: z.paramsSchema,
				params: z.params,
				info: z.header?.info,
				previewWidth: je,
				renderPreview: (e) => A ? Y(A(z, e), void 0, e) : j ? j(z, e) : Y(z, void 0, e),
				onSave: (e) => k(z.id, e)
			}, z.id) : null
		]
	});
}
//#endregion
export { b as WidgetContainer };
