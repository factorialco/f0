import { injectSectionEnds as e, reconstructElements as t } from "./utils.js";
import { useCallback as n, useState as r } from "react";
//#region src/kits/surveys/SurveyFormBuilder/Form/useReorderHandler.ts
function i({ flatItems: i, onChange: a }) {
	let [o, s] = r(null), [c, l] = r(!1);
	return {
		handleFlatReorder: n((n) => {
			let r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), c = null;
			for (let e of i) e.type === "section-header" ? (c = e.id, r.set(e.id, /* @__PURE__ */ new Set()), e.section.locked && o.add(e.id)) : e.type === "section-end" ? c = null : c && r.get(c).add(e.id);
			let u = i.filter((e) => e.type === "section-header").map((e) => e.id), d = n.filter((e) => e.type === "section-header").map((e) => e.id), f = u.some((e, t) => d[t] !== e), p = new Map(i.filter((e) => e.type !== "section-end").map((e, t) => [e.id, t])), m = new Set(o);
			if (f) for (let [e, t] of n.entries()) t.type === "section-header" && p.get(t.id) !== e && m.add(t.id);
			let h;
			if (m.size > 0) {
				let e = /* @__PURE__ */ new Map();
				for (let t of m) {
					let n = r.get(t);
					if (n) for (let r of n) e.set(r, t);
				}
				let t = /* @__PURE__ */ new Map();
				for (let e of m) t.set(e, []);
				let i = [];
				for (let r of n) {
					let n = e.get(r.id);
					n ? t.get(n).push(r) : i.push(r);
				}
				h = [];
				for (let e of i) h.push(e), e.type === "section-header" && m.has(e.id) && h.push(...t.get(e.id));
			} else h = n;
			let g = /* @__PURE__ */ new Set();
			for (let e of r.values()) for (let t of e) g.add(t);
			let _ = e(h, g);
			if (o.size > 0) {
				let e = null;
				for (let t of _) if (t.type === "section-header") e = t.id;
				else if (t.type === "section-end") e = null;
				else if (t.type === "question" && e && o.has(e) && !r.get(e)?.has(t.id)) return;
			}
			if ([...r.entries()].some(([e, t]) => {
				if (t.size === 0) return !1;
				let n = _.findIndex((t) => t.id === e);
				if (n === -1) return !1;
				let r = _[n + 1];
				return !r || r.type !== "question";
			})) {
				s(_), l(!0);
				return;
			}
			a(t(_));
		}, [a, i]),
		handleConfirmLastQuestionMove: n(() => {
			if (o) {
				let e = /* @__PURE__ */ new Set();
				for (let t = 0; t < o.length; t++) {
					let n = o[t];
					if (n.type === "section-header") {
						let r = o[t + 1];
						(!r || r.type === "section-end" || r.type === "section-header") && e.add(n.section.id);
					}
				}
				let n = o.filter((t) => !(t.type === "section-header" && e.has(t.section.id) || t.type === "section-end" && e.has(t.sectionId)));
				a(t(n));
			}
			l(!1), s(null);
		}, [o, a]),
		handleCancelLastQuestionMove: n(() => {
			l(!1), s(null);
		}, []),
		lastQuestionDialogOpen: c
	};
}
//#endregion
export { i as useReorderHandler };
