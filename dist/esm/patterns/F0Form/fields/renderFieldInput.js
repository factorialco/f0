import { evaluateDateConstraint as e, evaluateDisabled as t } from "./utils.js";
import { CardSelectFieldRenderer as n } from "./cardSelect/CardSelectFieldRenderer.js";
import { CheckboxFieldRenderer as r } from "./checkbox/CheckboxFieldRenderer.js";
import { CustomFieldRenderer as i } from "./custom/CustomFieldRenderer.js";
import { DateFieldRenderer as a } from "./date/DateFieldRenderer.js";
import { TimeFieldRenderer as o } from "./date/TimeFieldRenderer.js";
import { DateTimeFieldRenderer as s } from "./date/DateTimeFieldRenderer.js";
import { DateRangeFieldRenderer as c } from "./daterange/DateRangeFieldRenderer.js";
import { DurationFieldRenderer as l } from "./duration/DurationFieldRenderer.js";
import { EntitiesListFieldRenderer as u } from "./entitiesList/EntitiesListFieldRenderer.js";
import { FileFieldRenderer as d } from "./file/FileFieldRenderer.js";
import { NumberFieldRenderer as f } from "./number/NumberFieldRenderer.js";
import { PeriodFieldRenderer as p } from "./period/PeriodFieldRenderer.js";
import { PhoneFieldRenderer as m } from "./phone/PhoneFieldRenderer.js";
import { RichTextFieldRenderer as h } from "./richtext/RichTextFieldRenderer.js";
import { SelectFieldRenderer as g } from "./select/SelectFieldRenderer.js";
import { SwitchFieldRenderer as _ } from "./switch/SwitchFieldRenderer.js";
import { TextFieldRenderer as v } from "./text/TextFieldRenderer.js";
import { TextareaFieldRenderer as y } from "./textarea/TextareaFieldRenderer.js";
import { jsx as b } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/renderFieldInput.tsx
function x({ field: x, formField: S, fieldState: C, fieldStatus: w, isSubmitting: T, isRequired: E, values: D, initialFiles: O, isFormLoading: k }) {
	let A = !!C.error, { isValidating: j } = C, M = t(x.disabled, D) || T || !!k, N = {
		error: A,
		loading: !!k
	}, P = A ? { type: "error" } : w ? { type: w.type } : void 0;
	switch (x.type) {
		case "text": return /* @__PURE__ */ b(v, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			...N,
			status: P
		});
		case "number": return /* @__PURE__ */ b(f, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			...N,
			status: P
		});
		case "duration": return /* @__PURE__ */ b(l, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			error: A,
			status: P
		});
		case "textarea": return /* @__PURE__ */ b(y, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			...N,
			status: P
		});
		case "select": return /* @__PURE__ */ b(g, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			...N,
			status: P
		});
		case "checkbox": return /* @__PURE__ */ b(r, {
			field: {
				...x,
				disabled: M
			},
			formField: S
		});
		case "switch": return /* @__PURE__ */ b(_, {
			field: {
				...x,
				disabled: M
			},
			formField: S
		});
		case "date": return /* @__PURE__ */ b(a, {
			field: {
				...x,
				disabled: M,
				minDate: e(x.minDate, D),
				maxDate: e(x.maxDate, D)
			},
			formField: S,
			...N,
			status: P
		});
		case "time": return /* @__PURE__ */ b(o, {
			field: {
				...x,
				disabled: M,
				minDate: e(x.minDate, D),
				maxDate: e(x.maxDate, D)
			},
			formField: S,
			...N,
			status: P
		});
		case "datetime": return /* @__PURE__ */ b(s, {
			field: {
				...x,
				disabled: M,
				minDate: e(x.minDate, D),
				maxDate: e(x.maxDate, D)
			},
			formField: S,
			...N,
			status: P
		});
		case "daterange": return /* @__PURE__ */ b(c, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			...N,
			status: P
		});
		case "period": return /* @__PURE__ */ b(p, {
			field: {
				...x,
				disabled: M,
				minDate: e(x.minDate, D),
				maxDate: e(x.maxDate, D)
			},
			formField: S,
			...N,
			status: P
		});
		case "phone": return /* @__PURE__ */ b(m, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			...N,
			status: P
		});
		case "richtext": return /* @__PURE__ */ b(h, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			...N
		});
		case "file": return /* @__PURE__ */ b(d, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			error: A,
			statusType: P?.type,
			initialFiles: O
		});
		case "cardSelect": return /* @__PURE__ */ b(n, {
			field: {
				...x,
				disabled: M
			},
			formField: S
		});
		case "entitiesList": return /* @__PURE__ */ b(u, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			error: C.error
		});
		case "custom": return /* @__PURE__ */ b(i, {
			field: {
				...x,
				disabled: M
			},
			formField: S,
			error: C.error?.message,
			isValidating: j,
			required: E
		});
		default: return null;
	}
}
//#endregion
export { x as renderFieldInput };
