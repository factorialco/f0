import { useGridStackContext as e } from "./grid-stack-context.js";
import { GridStackRenderContext as t } from "./grid-stack-render-context.js";
import { useCallback as n, useLayoutEffect as r, useMemo as i, useRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import { GridStack as s } from "gridstack";
import c from "lodash/isEqual";
//#region src/lib/F0GridStack/components/grid-stack-render-provider.tsx
var l = /* @__PURE__ */ new WeakMap();
function u({ children: u }) {
	let { _gridStack: { value: d, set: f }, options: p } = e(), m = a(/* @__PURE__ */ new Map()), h = a(null), g = a(p), _ = n((e, t) => {
		if (t.id && t.grid) {
			let n = l.get(t.grid);
			n || (n = /* @__PURE__ */ new Map(), l.set(t.grid, n)), n.set(t.id, e), m.current.set(t.id, e);
		}
	}, []), v = n(() => {
		if (h.current) {
			s.renderCB = _;
			let e = s.init(g.current, h.current);
			return e && g.current.handle && e.opts && (e.opts.handle = g.current.handle), e;
		}
		return null;
	}, [_]), y = (e, t) => {
		let { children: n, ...r } = e, { children: i, ...a } = t;
		return c(r, a);
	};
	return r(() => {
		if (!y(p, g.current) && d) try {
			d.removeAll(!1), d.destroy(!1), m.current.clear(), l.delete(d), g.current = p, f(null);
		} catch (e) {
			console.error("Error destroying gridstack", e);
		}
		else d && (g.current = p, p.handle && d.opts && (d.opts.handle = p.handle));
	}, [
		p,
		d,
		f
	]), r(() => {
		if (!d && h.current) try {
			f(v());
		} catch (e) {
			console.error("Error initializing gridstack", e);
		}
	}, [
		d,
		v,
		f
	]), /* @__PURE__ */ o(t.Provider, {
		value: i(() => ({ getWidgetContainer: (e) => {
			if (d) {
				let t = l.get(d);
				if (t?.has(e)) return t.get(e) || null;
			}
			return m.current.get(e) || null;
		} }), [d]),
		children: /* @__PURE__ */ o("div", {
			ref: h,
			children: d ? u : null
		})
	});
}
//#endregion
export { u as GridStackRenderProvider, l as gridWidgetContainersMap };
