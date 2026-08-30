import { useShowExperimentalWarnings as e } from "./providers/user-platafform/UserPlatformProvider.js";
import { forwardRef as t, memo as n } from "react";
//#region src/lib/experimental.ts
var r = {}, i = (e, t) => {
	let n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
	for (let r of n) if (r !== "prototype" && r !== "length" && r !== "name" && r !== "$$typeof" && r !== "render") try {
		let n = Object.getOwnPropertyDescriptor(e, r);
		n && Object.defineProperty(t, r, n);
	} catch {}
}, a = (a, o) => {
	let s = () => {
		Object.entries(r).forEach(([e, t]) => {
			let n = t.uses - t.usesReported;
			n > 0 && (console.warn(`🚧 The \x1b[1m${e}\x1b[0m component is experimental. Use it at your own risk.`, `Found ${t.uses} uses. ${t.usesReported === -1 ? "" : `New uses found since last report: ${n}`}`), r[e] = {
				...t,
				usesReported: t.uses
			});
		});
	}, c = null, l = () => {
		if (!c) return c = setTimeout(() => {
			s();
		}, 5e3), () => {
			c && clearTimeout(c);
		};
	};
	if (o.$$typeof === Symbol.for("react.forward_ref")) {
		let n = o.render, s = t((t, i) => (e() && (l(), r[a] || (r[a] = {
			uses: 0,
			usesReported: -1
		}), r[a] = {
			...r[a],
			uses: (r[a]?.uses ?? 0) + 1
		}), n(t, i)));
		return i(o, s), s.displayName ||= `Experimental(${a})`, s;
	}
	if (o.$$typeof === Symbol.for("react.memo")) {
		let t = o.type, s = o.compare, c = (n) => (e() && (l(), r[a] || (r[a] = {
			uses: 0,
			usesReported: -1
		}), r[a] = {
			...r[a],
			uses: (r[a]?.uses ?? 0) + 1
		}), t(n));
		c.displayName = `Experimental(${a})`, i(o, c);
		let u = n(c, s);
		return i(o, u), u;
	}
	let u = ((...t) => (e() && (l(), r[a] || (r[a] = {
		uses: 0,
		usesReported: -1
	}), r[a] = {
		...r[a],
		uses: (r[a]?.uses ?? 0) + 1
	}), o(...t)));
	return i(o, u), u;
};
//#endregion
export { a as experimentalComponent };
