import { cn as e } from "../../../../lib/utils.js";
import { F0GridStack as t } from "../../../../lib/F0GridStack/F0GridStack2.js";
import { useCallback as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { motion as c } from "motion/react";
//#region src/layouts/Layout/groups/GroupGrid/GroupGrid.tsx
var l = (e, t, n) => /* @__PURE__ */ s("div", { children: e }), u = ({ widgets: u = [], editMode: d = !1, onChange: f = () => {}, WidgetWrapper: p = l, main: m = !1, deps: h }) => {
	let g = n((e, t, n) => /* @__PURE__ */ s(c.div, {
		className: "h-full w-full",
		initial: {
			opacity: 0,
			scale: .8,
			filter: "blur(8px)"
		},
		animate: {
			opacity: 1,
			scale: 1,
			filter: "blur(0px)"
		},
		transition: {
			opacity: {
				duration: .4,
				ease: [
					.33,
					1,
					.68,
					1
				]
			},
			scale: {
				type: "spring",
				stiffness: 100,
				damping: 6,
				mass: .5
			},
			filter: {
				duration: .4,
				ease: [
					.33,
					1,
					.68,
					1
				]
			}
		},
		children: p(e, t, n)
	}), [p]), _ = i(() => ({
		acceptWidgets: !0,
		margin: 8,
		handle: "[data-gs-handle='true']",
		column: 4,
		columnOpts: {
			breakpointForWindow: !0,
			breakpoints: [
				{
					c: 1,
					w: 700
				},
				{
					c: 3,
					w: 850
				},
				{
					c: 6,
					w: 950
				},
				{
					c: 8,
					w: 1100
				}
			],
			columnMax: 4
		}
	}), []), v = (e, t) => {
		if (typeof e.content == "function" && e.deps && t) {
			let n = {};
			return e.deps.forEach((e) => {
				typeof e == "string" && t[e] !== void 0 && (n[e] = t[e]);
			}), e.content(n);
		}
		return typeof e.content == "function" ? null : e.content;
	}, [y, b] = o(((e, t, n) => e.map((e) => {
		let r = v(e, n), i = {
			id: e.id,
			h: e.h ?? 1,
			w: e.w ?? 1,
			allowedSizes: e.availableSizes,
			noMove: !t,
			noResize: !t,
			locked: e.locked,
			meta: e.meta,
			_originalContent: r,
			content: g(r, e.meta, t)
		};
		return e.x !== void 0 && (i.x = e.x), e.y !== void 0 && (i.y = e.y), i;
	}))(u, d)), x = a(d), S = a(u), C = a(!1), w = a(/* @__PURE__ */ new Map()), T = a(u);
	T.current = u;
	let E = a(h), D = i(() => {
		let e = /* @__PURE__ */ new Map();
		return !h || Object.keys(h).length === 0 || u.forEach((t) => {
			if (t.deps && t.deps.length > 0) {
				let n = t.deps.map((e) => typeof e == "string" && h[e] !== void 0 ? h[e] : e).filter((e) => e !== null);
				e.set(t.id, n);
			}
		}), e;
	}, [u, h]), O = n((e) => {
		b(e), C.current || f(e.map((e) => {
			let t = T.current.find((t) => t.id === e.id);
			return {
				id: e.id,
				w: e.w ?? 1,
				h: e.h ?? 1,
				allowedSizes: e.allowedSizes,
				meta: e.meta,
				content: typeof t?.content == "function" ? t.content : e._originalContent,
				x: e.x ?? 0,
				y: e.y ?? 0,
				locked: e.locked,
				deps: t?.deps
			};
		})), C.current = !1;
	}, [f]), k = (e, t) => !e && !t ? !1 : !e || !t || e.length !== t.length || e.some((e, n) => e !== t[n]);
	return r(() => {
		let e = x.current !== d, t = S.current !== u, n = E.current !== h && (E.current === void 0 || h === void 0 || Object.keys(E.current).length !== Object.keys(h).length || Object.keys(h).some((e) => E.current?.[e] !== h[e])), r = /* @__PURE__ */ new Map();
		u.forEach((e) => {
			if (e.deps && e.deps.length > 0) {
				let t = w.current.get(e.id), n = D.get(e.id);
				r.set(e.id, k(t, n)), n ? w.current.set(e.id, n) : w.current.delete(e.id);
			}
		});
		let i = new Set(u.map((e) => e.id));
		w.current.forEach((e, t) => {
			i.has(t) || w.current.delete(t);
		});
		let a = Array.from(r.values()).some((e) => e) || n;
		e && !t && !a ? (C.current = !0, b((e) => e.map((e) => {
			let t = u.find((t) => t.id === e.id);
			if (!t) return e;
			let n = v(t, h);
			return {
				...e,
				noMove: !d,
				noResize: !d,
				locked: t.locked,
				meta: t.meta,
				_originalContent: n,
				content: g(n, t.meta, d)
			};
		}))) : (t || a) && b((e) => {
			let t = new Map(e.map((e) => [e.id, e]));
			return u.map((e) => {
				let n = t.get(e.id), i = r.get(e.id) ?? !1, a;
				a = i || !n ? v(e, h) : n._originalContent ?? v(e, h);
				let o = {
					id: e.id,
					h: n?.h ?? e.h ?? 1,
					w: n?.w ?? e.w ?? 1,
					allowedSizes: e.availableSizes,
					noMove: !d,
					noResize: !d,
					locked: e.locked,
					meta: e.meta,
					_originalContent: a,
					content: g(a, e.meta, d)
				}, s = n?.x ?? e.x, c = n?.y ?? e.y;
				return s !== void 0 && (o.x = s), c !== void 0 && (o.y = c), o;
			});
		}), x.current = d, S.current = u, E.current = h;
	}, [
		u,
		d,
		g,
		D,
		h
	]), /* @__PURE__ */ s(t, {
		className: e(m && "h-full flex-1 overflow-auto"),
		options: _,
		onChange: O,
		widgets: y
	});
};
u.displayName = "GroupGrid", u.__isPageLayoutGroup = !0;
//#endregion
export { u as GroupGrid };
