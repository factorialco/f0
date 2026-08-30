import { secondsToFields as e } from "../../../../components/F0DurationInput/utils.js";
import { useAiChat as t } from "../../F0AiChat/providers/AiChatStateProvider.js";
import { DetailsItemsList as n } from "../../../../experimental/Lists/DetailsItemsList/index.js";
import { F0CanvasCard as r } from "../../canvas/F0CanvasCard/F0CanvasCard.js";
import { useFormCardValueFormatter as i } from "../../F0AiChat/providers/FormCardValueFormatterProvider.js";
import { useEffect as a, useRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/FormCard.tsx
var c = 7, l = 625, u = /* @__PURE__ */ new Set();
function d(e) {
	return typeof DOMParser < "u" ? new DOMParser().parseFromString(e, "text/html").body.textContent?.replace(/\s+/g, " ").trim() ?? "" : e.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function f(e) {
	return e && e.charAt(0).toUpperCase() + e.slice(1);
}
function p(t) {
	let { days: n, hours: r, minutes: i, seconds: a } = e(t), o = [];
	return n > 0 && o.push(`${n}d`), r > 0 && o.push(`${r}h`), i > 0 && o.push(`${i}m`), (a > 0 || o.length === 0) && o.push(`${a}s`), o.join(" ");
}
function m(e) {
	if (e instanceof Date) return !0;
	if (typeof e != "string") return !1;
	let t = new Date(e);
	return !Number.isNaN(t.getTime());
}
function h(e) {
	return (e instanceof Date ? e : new Date(e)).toLocaleDateString();
}
function g(e) {
	return e.type === "item" ? e.text : "";
}
function _(e, t) {
	if (e == null || e === "") return {
		type: "item",
		text: "—"
	};
	if (t === "duration" && typeof e == "number") return {
		type: "item",
		text: p(e)
	};
	if (t === "richtext" && typeof e == "object" && e && "value" in e) {
		let t = e.value;
		return {
			type: "item",
			text: (t ? d(t) : "") || "—"
		};
	}
	if (t === "daterange" && typeof e == "object" && e && "from" in e && "to" in e) {
		let { from: t, to: n } = e;
		return {
			type: "item",
			text: `${m(t) ? h(t) : String(t)} – ${m(n) ? h(n) : String(n)}`
		};
	}
	if (e instanceof Date) return {
		type: "item",
		text: e.toLocaleDateString()
	};
	if (typeof e == "boolean") return {
		type: "item",
		text: e ? "Yes" : "No"
	};
	if (Array.isArray(e)) return {
		type: "item",
		text: e.map((e) => {
			let t = _(e);
			return Array.isArray(t) ? t.map(g).join(", ") : g(t);
		}).filter(Boolean).join(", ") || "—"
	};
	if (typeof e == "object" && e) {
		let t = e;
		return typeof t.label == "string" ? {
			type: "item",
			text: t.label
		} : typeof t.name == "string" ? {
			type: "item",
			text: t.name
		} : typeof t.text == "string" ? {
			type: "item",
			text: t.text
		} : {
			type: "item",
			text: JSON.stringify(e)
		};
	}
	return {
		type: "item",
		text: f(String(e))
	};
}
function v({ formName: e, formDescription: d, module: f, cardTitle: p, cardDescription: m, fieldDescriptions: h, formValues: g, valueFormatter: v }) {
	let { canvasContent: y, openCanvas: b, closeCanvas: x } = t(), S = i(e), C = v ?? S, w = o(() => {}), T = p ?? e, E = m ?? d ?? "", D = y?.type === "form" && y.formName === e, O = () => b({
		type: "form",
		title: T,
		description: E,
		formName: e,
		formDescription: d,
		formModule: f
	});
	w.current = O, a(() => {
		typeof window > "u" || window.innerWidth < l || u.has(e) || (u.add(e), w.current());
	}, [e]);
	let k = h && g ? Object.entries(h).map(([e, t]) => {
		let n = g[e], r = C?.(e, n, {
			fieldType: t.fieldType,
			customFieldName: t.customFieldName
		});
		if (!r && t.fieldType === "custom" && typeof n == "object" && n) return null;
		let i = r ?? _(n, t.fieldType);
		return {
			label: t.label,
			content: i,
			verticalLayout: ["richtext", "textarea"].includes(t.fieldType ?? "")
		};
	}).filter((e) => {
		if (!e) return !1;
		let t = Array.isArray(e.content) ? e.content[0] : e.content;
		return t?.type !== "item" || t.text !== "—";
	}) : [], A = k.slice(0, c), j = k.length > c;
	return /* @__PURE__ */ s(r, {
		avatar: f ? {
			type: "module",
			module: f
		} : void 0,
		title: T,
		description: E,
		isActive: D,
		action: {
			type: "open",
			onOpen: O,
			onClose: x,
			showButton: D
		},
		children: A.length > 0 && !D && /* @__PURE__ */ s("div", {
			className: "-mx-3 flex w-full flex-col overflow-hidden pb-1",
			children: /* @__PURE__ */ s(n, {
				details: A.map((e) => ({
					title: e.label,
					content: e.content,
					...e.verticalLayout && { verticalLayout: !0 }
				})),
				showSeeMore: j,
				onClickSeeMore: O,
				tableView: !0
			})
		})
	});
}
v.displayName = "FormCard";
//#endregion
export { v as FormCard };
