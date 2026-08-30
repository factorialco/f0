import { FieldRenderer as e } from "./fields/FieldRenderer.js";
import { RowRenderer as t } from "./components/RowRenderer.js";
import "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/groupingUtils.tsx
function r(e, t) {
	let n = e.renderIf;
	return !n || typeof n == "function" ? null : "fieldId" in n && "equalsTo" in n && n.equalsTo === !0 && t.has(n.fieldId) ? n.fieldId : null;
}
function i(e, t) {
	let n = e.renderIf;
	return !n || typeof n == "function" ? null : "fieldId" in n && "equalsTo" in n && typeof n.equalsTo == "string" && t.has(n.fieldId) ? {
		fieldId: n.fieldId,
		equalsTo: n.equalsTo
	} : null;
}
function a(r, i) {
	let a = /* @__PURE__ */ new Map();
	for (let [o, s] of r) a.set(o, /* @__PURE__ */ n("div", {
		className: "flex flex-col gap-4",
		children: s.map((r) => "type" in r && r.type === "row" ? /* @__PURE__ */ n(t, {
			row: r,
			sectionId: i
		}, r.fields.map((e) => e.id).join("-")) : /* @__PURE__ */ n(e, {
			field: r,
			sectionId: i
		}, r.id))
	}, o));
	return a;
}
function o(e) {
	let t = [], n = 0;
	for (; n < e.length;) {
		let a = e[n];
		if (a.type === "field" && a.field.type === "switch") {
			let o = [];
			if (a.field.grouped === !1) o.push(a.field), n++;
			else for (; n < e.length && e[n].type === "field" && e[n].field.type === "switch" && e[n].field.grouped !== !1;) o.push(e[n].field), n++;
			let s = new Set(o.map((e) => e.id)), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
			for (; n < e.length;) {
				let t = e[n];
				if (t.type === "field" && t.field.type !== "switch") {
					let e = r(t.field, s);
					if (e) {
						t.field.type === "cardSelect" && l.add(t.field.id);
						let r = c.get(e) ?? [];
						r.push(t.field), c.set(e, r), n++;
						continue;
					}
					let a = i(t.field, l);
					if (a) {
						u.has(a.fieldId) || u.set(a.fieldId, /* @__PURE__ */ new Map());
						let e = u.get(a.fieldId), r = e.get(a.equalsTo) ?? [];
						r.push(t.field), e.set(a.equalsTo, r), n++;
						continue;
					}
					break;
				}
				if (t.type === "row") {
					let e = t.fields.map((e) => r(e, s)), a = e[0];
					if (a && e.every((e) => e === a)) {
						let e = c.get(a) ?? [];
						e.push(t), c.set(a, e), n++;
						continue;
					}
					let o = t.fields.map((e) => i(e, l)), d = o[0];
					if (d && o.every((e) => e && e.fieldId === d.fieldId && e.equalsTo === d.equalsTo)) {
						u.has(d.fieldId) || u.set(d.fieldId, /* @__PURE__ */ new Map());
						let e = u.get(d.fieldId), r = e.get(d.equalsTo) ?? [];
						r.push(t), e.set(d.equalsTo, r), n++;
						continue;
					}
					break;
				}
				break;
			}
			t.push({
				type: "switchGroup",
				fields: o,
				dependentFields: c.size > 0 ? c : void 0,
				cardSelectDependentFields: u.size > 0 ? u : void 0
			});
		} else if (a.type === "field") {
			if (a.field.type === "cardSelect") {
				let r = a.field.id, o = /* @__PURE__ */ new Set([r]), s = /* @__PURE__ */ new Map();
				for (n++; n < e.length;) {
					let t = e[n];
					if (t.type === "field") {
						let e = i(t.field, o);
						if (e) {
							let r = s.get(e.equalsTo) ?? [];
							r.push(t.field), s.set(e.equalsTo, r), n++;
							continue;
						}
					} else if (t.type === "row") {
						let e = t.fields.map((e) => i(e, o)), r = e[0];
						if (r && e.every((e) => e && e.fieldId === r.fieldId && e.equalsTo === r.equalsTo)) {
							let e = s.get(r.equalsTo) ?? [];
							e.push(t), s.set(r.equalsTo, e), n++;
							continue;
						}
					}
					break;
				}
				t.push({
					type: "field",
					item: a,
					cardSelectDependentFields: s.size > 0 ? s : void 0
				});
			} else t.push({
				type: "field",
				item: a
			}), n++;
		} else a.type === "row" ? (t.push({
			type: "row",
			item: a,
			index: n
		}), n++) : (a.type === "section" && t.push({
			type: "section",
			item: a
		}), n++);
	}
	return t;
}
//#endregion
export { a as buildCardSelectContentMap, o as groupContiguousSwitches, i as isDependentOnCardSelect, r as isDependentOnSwitch };
