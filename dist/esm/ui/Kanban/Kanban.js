import { cn as e } from "../../lib/utils.js";
import { ScrollArea as t } from "../scrollarea.js";
import { dropTargetForElements as n } from "../../_embedded/BeMnDuG8.js";
import "../../_embedded/nR-CGXgB.js";
import { useDndEvents as r } from "../../lib/dnd/hooks.js";
import { KanbanLane as i } from "./components/KanbanLane.js";
import { useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/ui/Kanban/Kanban.tsx
function u(u) {
	let { lanes: d, renderCard: f, getKey: p, className: m, dnd: h, onCreate: g } = u, _ = u.heightMode ?? "fill", v = _ === "content", [y, b] = s(() => d), x = o(""), S = o(null);
	a(() => {
		let e = d.map((e) => `${e.id}:[${e.items.map((t, n) => p(t, n, e.id)).join(",")}]`).join("|");
		if (S.current !== null) {
			if (e === S.current) S.current = null, x.current = e, b(d);
			else return;
		} else e !== x.current && (x.current = e, b(d));
	}, [
		d,
		p,
		y
	]);
	let [C, w] = s(!1), T = o(null), E = o(null), D = o(null), O = o(null), k = o(0), A = o(null);
	r(({ phase: e }) => {
		e === "start" && w(!0), (e === "drop" || e === "cancel") && w(!1);
	}), a(() => {
		let e = () => {
			let t = performance.now(), n = (t - (A.current ?? t)) / 1e3;
			A.current = t;
			let r = D.current;
			if (!C || !r || k.current === 0) {
				O.current != null && (window.cancelAnimationFrame(O.current), O.current = null), A.current = null;
				return;
			}
			r.scrollLeft += k.current * n, O.current = window.requestAnimationFrame(e);
		}, t = (t) => {
			k.current = t, O.current ??= (A.current = null, window.requestAnimationFrame(e));
		}, r = () => {
			k.current = 0, O.current != null && (window.cancelAnimationFrame(O.current), O.current = null), A.current = null;
		}, i = [];
		return T.current && i.push(n({
			element: T.current,
			getData: () => ({
				type: "board-scroll-edge",
				edge: "left"
			}),
			onDragEnter: () => t(-400),
			onDrag: () => t(-400),
			onDragLeave: () => r(),
			onDrop: () => r()
		})), E.current && i.push(n({
			element: E.current,
			getData: () => ({
				type: "board-scroll-edge",
				edge: "right"
			}),
			onDragEnter: () => t(400),
			onDrag: () => t(400),
			onDragLeave: () => r(),
			onDrop: () => r()
		})), () => {
			i.forEach((e) => e()), r();
		};
	}, [C]);
	let j = (e, t) => {
		let n = y.find((t) => t.id === e);
		return n ? n.items.findIndex((n, r) => String(p(n, r, e)) === String(t)) : -1;
	}, M = async (e) => {
		let { fromLaneId: t, toLaneId: n, sourceId: r, indexOfTarget: i, position: a } = e, o = y, s = o.findIndex((e) => e.id === t), c = o.findIndex((e) => e.id === n);
		if (c === -1) return Promise.reject(/* @__PURE__ */ Error("Lane not found"));
		let l = -1;
		if (s !== -1 && (l = o[s].items.findIndex((e, n) => String(p(e, n, t)) === String(r))), l === -1) for (let e = 0; e < o.length; e++) {
			let t = o[e].id, n = o[e].items.findIndex((e, n) => String(p(e, n, t)) === String(r));
			if (n !== -1) {
				s = e, l = n;
				break;
			}
		}
		if (s === -1 || l === -1) return Promise.resolve(void 0);
		let u = o[s].items[l], d = 0;
		d = i == null ? 0 : i + +(a === "below");
		let f = t === n, m = o.map((e, t) => {
			if (t === s && f) {
				let t = [...e.items];
				t.splice(l, 1);
				let n = l < d ? d - 1 : d;
				return t.splice(n, 0, u), {
					...e,
					items: t
				};
			}
			if (t === s) {
				let t = [...e.items];
				t.splice(l, 1);
				let n = typeof e.total == "number" && !f ? Math.max(0, e.total - 1) : e.total;
				return {
					...e,
					items: t,
					total: n
				};
			}
			if (t === c) {
				let t = [...e.items], n = Math.max(0, Math.min(d, t.length));
				t.splice(n, 0, u);
				let r = typeof e.total == "number" && !f ? e.total + 1 : e.total;
				return {
					...e,
					items: t,
					total: r
				};
			}
			return e;
		});
		b(m);
		let g = m.map((e) => `${e.id}:[${e.items.map((t, n) => p(t, n, e.id)).join(",")}]`).join("|");
		S.current = g, x.current = g;
		try {
			let e = i == null ? null : o[c].items[i], s = await h?.onMove?.(t, n, u, e ? {
				record: e,
				position: a ?? "above"
			} : null);
			return s && b((e) => {
				let t = e.map((e) => {
					if (e.id !== n) return e;
					let t = [...e.items], i = t.findIndex((e, t) => String(p(e, t, n)) === String(r));
					return i !== -1 && t.splice(i, 1, s), {
						...e,
						items: t
					};
				}), i = t.map((e) => `${e.id}:[${e.items.map((t, n) => p(t, n, e.id)).join(",")}]`).join("|");
				return x.current = i, t;
			}), s;
		} catch (e) {
			throw b(o), S.current = null, e;
		}
	};
	return /* @__PURE__ */ l("div", {
		className: e("relative w-full px-6", !v && "h-full", m),
		children: [
			/* @__PURE__ */ c(t, {
				className: e("relative w-full", !v && "h-full [&>div>div]:h-full"),
				viewportRef: D,
				children: /* @__PURE__ */ c("div", {
					className: e("relative mb-2 flex gap-2", v ? "items-stretch" : "h-full items-start"),
					children: y.map((e, t) => {
						let n = d.find((t) => t.id === e.id), r = n?.loading ?? e.loading, a = n?.hasMore ?? e.hasMore, o = n?.loadingMore ?? e.loadingMore, s = n?.fetchMore ?? e.fetchMore, l = e.total ?? n?.total ?? e.items.length;
						return /* @__PURE__ */ c("div", {
							className: "relative shrink-0",
							"data-testid": `lane-${e.id ?? String(t)}`,
							children: /* @__PURE__ */ c(i, {
								id: e.id,
								heightMode: _,
								getLaneResourceIndexById: e.id ? (t) => j(e.id, t) : void 0,
								onMove: M,
								title: e.title,
								items: e.items,
								getKey: (t, n) => p(t, n, e.id),
								renderCard: (t, n) => f(t, n, l, e.id),
								emptyState: e.emptyState,
								loading: r,
								variant: e.variant,
								color: e.color,
								total: l,
								hasMore: a,
								loadingMore: o,
								fetchMore: s,
								onPrimaryAction: g && e.id ? () => g(e.id) : void 0,
								onFooterAction: g && e.id ? () => g(e.id) : void 0
							})
						}, e.id ?? String(t));
					})
				})
			}),
			/* @__PURE__ */ c("div", {
				ref: T,
				className: e("pointer-events-none absolute left-0 top-0 z-[9999] h-full w-12 select-none", C ? "pointer-events-auto" : "opacity-0"),
				"aria-hidden": !0
			}),
			/* @__PURE__ */ c("div", {
				ref: E,
				className: e("pointer-events-none absolute right-0 top-0 z-[9999] h-full w-12 select-none", C ? "pointer-events-auto" : "opacity-0"),
				"aria-hidden": !0
			})
		]
	});
}
//#endregion
export { u as Kanban };
