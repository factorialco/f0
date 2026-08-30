import { getF0Config as e, inferFieldType as t, unwrapToZodObject as n } from "./f0Schema.js";
import { isFieldRequired as r } from "./fields/schema.js";
import { inferInputType as i } from "./fields/text/schema.js";
import { extractDateConstraints as a } from "./fields/date/schema.js";
import { extractNumberConstraints as o } from "./fields/number/schema.js";
import { extractTextareaConstraints as s } from "./fields/textarea/schema.js";
import { useMemo as c } from "react";
//#region src/patterns/F0Form/useSchemaDefinition.ts
function l(e, t, n, c) {
	let l = {
		id: e,
		label: n.label,
		placeholder: n.placeholder,
		helpText: n.helpText,
		status: n.status,
		disabled: n.disabled,
		resetOnDisable: n.resetOnDisable,
		autoSave: "autoSave" in n ? n.autoSave : void 0,
		alert: n.alert,
		customFieldName: "customFieldName" in n ? n.customFieldName : void 0,
		validation: t
	}, u = !r(t, c);
	switch (c) {
		case "text": {
			let e = "inputType" in n && n.inputType ? n.inputType : i(t);
			return {
				...l,
				type: "text",
				inputType: e,
				clearable: u,
				renderIf: n.renderIf
			};
		}
		case "money":
		case "percentage":
		case "number": {
			let { min: e, max: r, isInteger: i } = o(t), a = c === "percentage" ? "%" : c === "money" && "currency" in n ? n.currency : void 0;
			return {
				...l,
				type: "number",
				step: "step" in n ? n.step : void 0,
				min: e,
				max: r,
				maxDecimals: i ? 0 : void 0,
				units: a,
				locale: "locale" in n ? n.locale : void 0,
				clearable: u,
				renderIf: n.renderIf
			};
		}
		case "duration": return {
			...l,
			type: "duration",
			units: "units" in n ? n.units : void 0,
			fields: "fields" in n ? n.fields : void 0,
			readonly: "readonly" in n ? n.readonly : void 0,
			size: "size" in n ? n.size : void 0,
			renderIf: n.renderIf
		};
		case "textarea": {
			let { maxLength: e } = s(t);
			return {
				...l,
				type: "textarea",
				rows: "rows" in n ? n.rows : void 0,
				maxHeight: "maxHeight" in n ? n.maxHeight : void 0,
				maxLength: e,
				clearable: u,
				renderIf: n.renderIf
			};
		}
		case "select": {
			let e = "source" in n && n.source;
			return {
				...l,
				type: "select",
				...e ? {
					source: n.source,
					mapOptions: "mapOptions" in n ? n.mapOptions : void 0
				} : { options: "options" in n ? n.options : [] },
				multiple: "multiple" in n ? n.multiple : void 0,
				clearable: u,
				showSearchBox: "showSearchBox" in n ? n.showSearchBox : void 0,
				searchBoxPlaceholder: "searchBoxPlaceholder" in n ? n.searchBoxPlaceholder : void 0,
				renderIf: n.renderIf
			};
		}
		case "checkbox": return {
			...l,
			type: "checkbox",
			moreInfoLink: "moreInfoLink" in n ? n.moreInfoLink : void 0,
			renderIf: n.renderIf
		};
		case "switch": return {
			...l,
			type: "switch",
			moreInfoLink: "moreInfoLink" in n ? n.moreInfoLink : void 0,
			grouped: "grouped" in n ? n.grouped : void 0,
			renderIf: n.renderIf
		};
		case "date": {
			let e = a(t), r = "minDate" in n ? n.minDate : void 0, i = "maxDate" in n ? n.maxDate : void 0;
			return {
				...l,
				type: "date",
				granularities: "granularities" in n ? n.granularities : void 0,
				minDate: r ?? e.minDate,
				maxDate: i ?? e.maxDate,
				presets: "presets" in n ? n.presets : void 0,
				clearable: u,
				renderIf: n.renderIf
			};
		}
		case "time": {
			let e = a(t), r = "minDate" in n ? n.minDate : void 0, i = "maxDate" in n ? n.maxDate : void 0;
			return {
				...l,
				type: "time",
				minDate: r ?? e.minDate,
				maxDate: i ?? e.maxDate,
				clearable: u,
				renderIf: n.renderIf
			};
		}
		case "datetime": {
			let e = a(t), r = "minDate" in n ? n.minDate : void 0, i = "maxDate" in n ? n.maxDate : void 0;
			return {
				...l,
				type: "datetime",
				minDate: r ?? e.minDate,
				maxDate: i ?? e.maxDate,
				clearable: u,
				renderIf: n.renderIf
			};
		}
		case "daterange": return {
			...l,
			type: "daterange",
			fromLabel: "fromLabel" in n ? n.fromLabel : void 0,
			toLabel: "toLabel" in n ? n.toLabel : void 0,
			granularities: "granularities" in n ? n.granularities : void 0,
			presets: "presets" in n ? n.presets : void 0,
			clearable: u,
			renderIf: n.renderIf
		};
		case "period": {
			let e = "minDate" in n ? n.minDate : void 0, t = "maxDate" in n ? n.maxDate : void 0;
			return {
				...l,
				type: "period",
				granularities: "granularities" in n ? n.granularities : void 0,
				minDate: e,
				maxDate: t,
				presets: "presets" in n ? n.presets : void 0,
				displayFormat: "displayFormat" in n ? n.displayFormat : void 0,
				clearable: u,
				renderIf: n.renderIf
			};
		}
		case "phone": return {
			...l,
			type: "phone",
			defaultCountry: "defaultCountry" in n ? n.defaultCountry : void 0,
			pinnedCountries: "pinnedCountries" in n ? n.pinnedCountries : void 0,
			allowedCountries: "allowedCountries" in n ? n.allowedCountries : void 0,
			clearable: u,
			renderIf: n.renderIf
		};
		case "richtext": return {
			...l,
			type: "richtext",
			maxCharacters: "maxCharacters" in n ? n.maxCharacters : void 0,
			mentionsConfig: "mentionsConfig" in n ? n.mentionsConfig : void 0,
			height: "height" in n ? n.height : void 0,
			plainHtmlMode: "plainHtmlMode" in n ? n.plainHtmlMode : void 0,
			renderIf: n.renderIf
		};
		case "file": return {
			...l,
			type: "file",
			accept: "accept" in n ? n.accept : void 0,
			maxSizeMB: "maxSizeMB" in n ? n.maxSizeMB : void 0,
			multiple: "multiple" in n ? n.multiple : void 0,
			maxFiles: "maxFiles" in n ? n.maxFiles : void 0,
			description: "description" in n ? n.description : void 0,
			useUpload: "useUpload" in n ? n.useUpload : void 0,
			renderIf: n.renderIf
		};
		case "entitiesList": {
			let e = "config" in n ? n.config : void 0;
			return {
				...l,
				type: "entitiesList",
				itemSchema: "schema" in n ? n.schema : void 0,
				createFormDefinition: "createFormDefinition" in n ? n.createFormDefinition : void 0,
				updateFormDefinition: "updateFormDefinition" in n ? n.updateFormDefinition : void 0,
				sortable: e?.sortable,
				canAddItems: e?.canAddItems,
				supportInlineEditing: e?.supportInlineEditing,
				visualization: e?.visualization,
				listItem: e?.listItem,
				itemHref: e?.itemHref,
				labels: e?.labels,
				editableIds: e?.editableIds,
				removableIds: e?.removableIds,
				maxItems: e?.maxItems,
				columns: e?.columns,
				rowActions: e?.rowActions,
				onRemove: e?.onRemove,
				confirmRemove: e?.confirmRemove,
				renderIf: n.renderIf
			};
		}
		case "cardSelect": return {
			...l,
			type: "cardSelect",
			options: "options" in n ? n.options : [],
			hideLabel: "hideLabel" in n ? n.hideLabel : void 0,
			grouped: "grouped" in n ? n.grouped : void 0,
			renderIf: n.renderIf
		};
		case "custom": return {
			...l,
			type: "custom",
			render: "render" in n ? n.render : void 0,
			fieldConfig: "fieldConfig" in n ? n.fieldConfig : void 0,
			renderIf: n.renderIf
		};
		default: return {
			...l,
			type: "text",
			inputType: i(t),
			renderIf: n.renderIf
		};
	}
}
function u(e) {
	let t = [], n = /* @__PURE__ */ new Set();
	for (let r = 0; r < e.length; r++) {
		if (n.has(r)) continue;
		let i = e[r], a = i.config.row;
		if (a) {
			let i = [];
			for (let t = r; t < e.length; t++) e[t].config.row === a && (i.push(e[t]), n.add(t));
			i.sort((e, t) => e.position - t.position);
			let o = {
				type: "row",
				fields: i.map((e) => l(e.id, e.schema, e.config, e.fieldType))
			};
			t.push(o);
		} else {
			n.add(r);
			let e = l(i.id, i.schema, i.config, i.fieldType);
			t.push({
				type: "field",
				field: e
			});
		}
	}
	return t;
}
function d(n) {
	let r = n.shape, i = [], a = Object.entries(r);
	for (let n = 0; n < a.length; n++) {
		let [r, o] = a[n], s = e(o);
		if (s) {
			let e = t(o, s);
			i.push({
				id: r,
				schema: o,
				config: s,
				fieldType: e,
				position: n
			});
		}
	}
	return i;
}
function f(e, t) {
	return c(() => {
		let r = d(n(e)), i = [], a = {};
		for (let e of r) {
			let t = e.config.section;
			t ? (a[t] || (a[t] = []), a[t].push(e)) : i.push(e);
		}
		i.sort((e, t) => e.position - t.position);
		for (let e of Object.keys(a)) a[e].sort((e, t) => e.position - t.position);
		let o = [];
		o.push(...u(i));
		let s = t ? Object.keys(t).filter((e) => a[e]) : Object.keys(a);
		for (let e of s) {
			let n = t?.[e], r = a[e], i = {
				id: e,
				type: "section",
				section: {
					title: n?.title ?? e,
					description: n?.description,
					withInset: n?.withInset,
					renderIf: n?.renderIf,
					action: n?.action,
					fields: u(r)
				}
			};
			o.push(i);
		}
		return o;
	}, [e, t]);
}
function p(e, t) {
	let r = d(n(e)), i = [], a = {};
	for (let e of r) {
		let t = e.config.section;
		t ? (a[t] || (a[t] = []), a[t].push(e)) : i.push(e);
	}
	i.sort((e, t) => e.position - t.position);
	for (let e of Object.keys(a)) a[e].sort((e, t) => e.position - t.position);
	let o = [];
	o.push(...u(i));
	let s = t ? Object.keys(t).filter((e) => a[e]) : Object.keys(a);
	for (let e of s) {
		let n = t?.[e], r = a[e], i = {
			id: e,
			type: "section",
			section: {
				title: n?.title ?? e,
				description: n?.description,
				withInset: n?.withInset,
				renderIf: n?.renderIf,
				action: n?.action,
				fields: u(r)
			}
		};
		o.push(i);
	}
	return o;
}
//#endregion
export { p as getSchemaDefinition, f as useSchemaDefinition };
