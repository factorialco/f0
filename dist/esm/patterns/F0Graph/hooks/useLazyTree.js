import { useCallback as e, useEffect as t, useMemo as n, useRef as r, useState as i } from "react";
//#region src/patterns/F0Graph/hooks/useLazyTree.ts
function a(a) {
	let { rootNodes: o, loadChildren: s } = a, [c, l] = i(() => o), [u, d] = i(/* @__PURE__ */ new Set()), [f, p] = i(/* @__PURE__ */ new Map()), m = r(/* @__PURE__ */ new Set()), h = r(c);
	t(() => {
		h.current = c;
	}, [c]);
	let g = r(new Set(o.map((e) => e.id)));
	t(() => {
		let e = new Set(o.map((e) => e.id)), t = g.current, n = e.size !== t.size;
		if (!n) {
			for (let r of e) if (!t.has(r)) {
				n = !0;
				break;
			}
		}
		n && (g.current = e, l((t) => {
			let n = t.filter((t) => t.parentId !== null && !e.has(t.id));
			return [...o, ...n];
		}));
	}, [o]);
	let _ = e(async (e) => {
		if (m.current.has(e)) return h.current.filter((t) => t.parentId === e);
		d((t) => {
			let n = new Set(t);
			return n.add(e), n;
		}), p((t) => {
			if (!t.has(e)) return t;
			let n = new Map(t);
			return n.delete(e), n;
		});
		try {
			let t = (await s(e)).map((t) => ({
				...t,
				parentId: t.parentId ?? e
			}));
			return m.current.add(e), l((n) => [...n.filter((t) => t.parentId !== e || o.some((e) => e.id === t.id)), ...t].map((t) => t.id === e ? {
				...t,
				childrenLoaded: !0
			} : t)), t;
		} catch (t) {
			return p((n) => {
				let r = new Map(n);
				return r.set(e, t instanceof Error ? t : Error(String(t))), r;
			}), [];
		} finally {
			d((t) => {
				let n = new Set(t);
				return n.delete(e), n;
			});
		}
	}, [s, o]), v = e(async (e) => await _(e), [_]), y = e((e) => {}, []), b = e(async (e) => (m.current.delete(e), await _(e)), [_]);
	return n(() => ({
		nodes: c,
		loadingNodes: u,
		errorNodes: f,
		expandNode: v,
		collapseNode: y,
		retryNode: b
	}), [
		c,
		u,
		f,
		v,
		y,
		b
	]);
}
//#endregion
export { a as useLazyTree };
