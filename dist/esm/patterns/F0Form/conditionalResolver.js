import { getF0Config as e, isZodType as t, unwrapToZodObject as n } from "./f0Schema.js";
import { evaluateRenderIf as r, resolveFieldAlert as i } from "./fields/utils.js";
import { zodResolver as a } from "@hookform/resolvers/zod";
import { z as o } from "zod";
//#region src/patterns/F0Form/conditionalResolver.ts
function s(e, t) {
	return async (n, r, i) => {
		let o = l(e, n), s = { ...n };
		for (let e of Object.keys(s)) s[e] === null && (s[e] = void 0);
		let u = await a(o, t)(s, r, i);
		return c(e, n, u.errors), u;
	};
}
function c(t, a, o) {
	let s = n(t);
	for (let [t, n] of Object.entries(s.shape)) {
		if (o[t]) continue;
		let s = e(n);
		if (!s?.alert || s.renderIf && !r(s.renderIf, a)) continue;
		let c = i(s.alert, a[t], a);
		c?.variant === "critical" && (o[t] = {
			type: "alertCritical",
			message: c.title
		});
	}
}
function l(i, a) {
	let s = n(i).shape, c = {};
	for (let [t, n] of Object.entries(s)) {
		let i = e(n);
		if (!i || !i.renderIf) {
			c[t] = n;
			continue;
		}
		c[t] = r(i.renderIf, a) ? n : o.any();
	}
	let l = o.object(c);
	if (t(i, "ZodEffects")) {
		let e = i._def.effect;
		if (e.type === "refinement") return l.superRefine(e.refinement);
	}
	return l;
}
//#endregion
export { l as buildDynamicSchema, s as createConditionalResolver };
