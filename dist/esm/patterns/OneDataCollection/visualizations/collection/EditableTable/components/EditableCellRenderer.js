import { NonEditableCell as e } from "./cells/status/NonEditableCell.js";
import { editableCellMap as t, typingEditTypes as n } from "../consts.js";
import { useEditableRow as r } from "../context/EditableRowContext.js";
import { Fragment as i, jsx as a } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/EditableCellRenderer.tsx
function o(e, t) {
	if (t.id !== void 0 && t.id in e) {
		let n = e[t.id];
		return n == null ? "" : String(n);
	}
	let n = t.render(e);
	return typeof n == "string" ? n : typeof n == "number" ? String(n) : "";
}
function s({ column: s, children: c, isLastColumn: l, externalError: u }) {
	let d = r();
	if (!d) return /* @__PURE__ */ a(i, { children: c });
	let { localItem: f, cellErrors: p, cellLoading: m, handleCellChange: h, batchCellChanges: g } = d, _ = s, v = _.editType?.(f), y = _.id !== void 0, b = v !== void 0 && n.has(v), x = (e, t) => {
		if (_.id !== void 0) {
			let n = _.formula;
			if (n) {
				let r = {};
				n({
					value: e,
					item: f,
					selectedItem: t?.selectedItem,
					setCellValue: (e, t) => {
						r[e] = t;
					}
				}), g({
					[_.id]: e,
					...r
				}, { debounce: b });
			} else h(_.id, e, { debounce: b });
		}
	};
	if (y && v) {
		let e = t[v], n = o(f, _);
		if (e) {
			let t = (_.id ? p[_.id] : void 0) ?? u, r = _.id ? m[_.id] ?? !1 : !1;
			return /* @__PURE__ */ a("div", {
				className: "pointer-events-auto h-full",
				onClick: (e) => e.stopPropagation(),
				onMouseDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ a(e, {
					editableColumn: _,
					value: n,
					inputPlaceholder: _.inputPlaceholder,
					error: t,
					item: f,
					isLastColumn: l,
					loading: r,
					onChange: x,
					hint: _.cellHint?.(f)
				})
			});
		}
	}
	return /* @__PURE__ */ a(e, {
		editableColumn: _,
		item: f,
		value: o(f, _),
		isLastColumn: l,
		onChange: x
	});
}
//#endregion
export { s as EditableCellRenderer };
