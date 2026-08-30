import { t as e } from "./clsx-rBDvwE6-.js";
//#region ../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.mjs
var t = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, { compose: n, cva: r, cx: i } = ((n) => {
	let r = function() {
		var t = [...arguments];
		return n?.hooks?.["cx:done"] === void 0 ? n?.hooks?.onComplete === void 0 ? e(t) : n?.hooks.onComplete(e(t)) : n?.hooks["cx:done"](e(t));
	};
	return {
		compose: function() {
			var e = [...arguments];
			return (t) => {
				let n = Object.fromEntries(Object.entries(t || {}).filter((e) => {
					let [t] = e;
					return !["class", "className"].includes(t);
				}));
				return r(e.map((e) => e(n)), t?.class, t?.className);
			};
		},
		cva: (e) => (n) => {
			if (e?.variants == null) return r(e?.base, n?.class, n?.className);
			let { variants: i, defaultVariants: a } = e, o = Object.keys(i).map((e) => {
				let r = n?.[e], o = a?.[e], s = t(r) || t(o);
				return i[e][s];
			}), s = {
				...a,
				...n && Object.entries(n).reduce((e, t) => {
					let [n, r] = t;
					return r === void 0 ? e : {
						...e,
						[n]: r
					};
				}, {})
			}, c = e?.compoundVariants?.reduce((e, t) => {
				let { class: n, className: r, ...i } = t;
				return Object.entries(i).every((e) => {
					let [t, n] = e, r = s[t];
					return Array.isArray(n) ? n.includes(r) : r === n;
				}) ? [
					...e,
					n,
					r
				] : e;
			}, []);
			return r(e?.base, o, c, n?.class, n?.className);
		},
		cx: r
	};
})();
//#endregion
export { r as t };
