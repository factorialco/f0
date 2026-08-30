import { DateFieldRenderer as e } from "./DateFieldRenderer.js";
import { combineDateAndTime as t, dateToTimeString as n } from "./utils.js";
import { TimeFieldRenderer as r } from "./TimeFieldRenderer.js";
import { useCallback as i, useMemo as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/date/DateTimeFieldRenderer.tsx
function c({ field: c, formField: l, error: u, loading: d, status: f }) {
	let p = l.value ?? void 0, m = a(() => n(p), [p]), h = i((e) => {
		if (!e) {
			l.onChange(null);
			return;
		}
		l.onChange(t(e, m));
	}, [l, m]), g = i((e) => {
		if (!e) {
			if (p) {
				let e = new Date(p);
				e.setHours(0, 0, 0, 0), l.onChange(e);
			}
			return;
		}
		let r = n(e);
		if (!p) {
			let e = /* @__PURE__ */ new Date();
			e.setHours(0, 0, 0, 0), l.onChange(t(e, r));
			return;
		}
		l.onChange(t(p, r));
	}, [l, p]), _ = a(() => ({
		id: `${c.id}-date`,
		type: "date",
		label: c.label,
		placeholder: c.placeholder,
		disabled: c.disabled,
		granularities: c.granularities ?? ["day"],
		presets: c.presets,
		minDate: c.minDate,
		maxDate: c.maxDate,
		clearable: c.clearable
	}), [c]), v = a(() => ({
		...l,
		value: p,
		onChange: h
	}), [
		l,
		p,
		h
	]), y = a(() => ({
		id: `${c.id}-time`,
		type: "time",
		label: "Time",
		disabled: c.disabled,
		clearable: !1
	}), [c.id, c.disabled]), b = a(() => ({
		...l,
		value: p,
		onChange: g
	}), [
		l,
		p,
		g
	]);
	return /* @__PURE__ */ s("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ o("div", {
			className: "flex-1",
			children: /* @__PURE__ */ o(e, {
				field: _,
				formField: v,
				error: u,
				status: f,
				loading: d
			})
		}), /* @__PURE__ */ o("div", {
			className: "w-32",
			children: /* @__PURE__ */ o(r, {
				field: y,
				formField: b,
				error: u,
				status: f,
				loading: d
			})
		})]
	});
}
//#endregion
export { c as DateTimeFieldRenderer };
