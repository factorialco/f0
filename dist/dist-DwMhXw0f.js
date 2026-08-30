import { O as e, S as t, w as n } from "./popover-DDfM6CZG.js";
import r from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom_8b50dd17dda88491984286d0a66c0706/node_modules/@radix-ui/react-collection/dist/index.mjs
function a(a) {
	let o = a + "CollectionProvider", [s, c] = e(o), [l, u] = s(o, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), d = (e) => {
		let { scope: t, children: n } = e, a = r.useRef(null), o = r.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ i(l, {
			scope: t,
			itemMap: o,
			collectionRef: a,
			children: n
		});
	};
	d.displayName = o;
	let f = a + "CollectionSlot", p = r.forwardRef((e, r) => {
		let { scope: a, children: o } = e, s = u(f, a), c = n(r, s.collectionRef);
		return /* @__PURE__ */ i(t, {
			ref: c,
			children: o
		});
	});
	p.displayName = f;
	let m = a + "CollectionItemSlot", h = "data-radix-collection-item", g = r.forwardRef((e, a) => {
		let { scope: o, children: s, ...c } = e, l = r.useRef(null), d = n(a, l), f = u(m, o);
		return r.useEffect(() => (f.itemMap.set(l, {
			ref: l,
			...c
		}), () => void f.itemMap.delete(l))), /* @__PURE__ */ i(t, {
			[h]: "",
			ref: d,
			children: s
		});
	});
	g.displayName = m;
	function _(e) {
		let t = u(a + "CollectionConsumer", e);
		return r.useCallback(() => {
			let e = t.collectionRef.current;
			if (!e) return [];
			let n = Array.from(e.querySelectorAll(`[${h}]`));
			return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current));
		}, [t.collectionRef, t.itemMap]);
	}
	return [
		{
			Provider: d,
			Slot: p,
			ItemSlot: g
		},
		_,
		c
	];
}
//#endregion
export { a as t };
