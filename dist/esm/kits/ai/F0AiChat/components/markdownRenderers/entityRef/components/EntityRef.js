import { getEntityRefRenderer as e } from "./entityRefRegistry.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRef.tsx
function n(e) {
	return typeof e == "string" ? e : typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(n).join("") : e && typeof e == "object" && "props" in e ? n(e.props.children) : "";
}
function r({ type: r, id: i, children: a }) {
	if (!i || !r) return /* @__PURE__ */ t("span", { children: a });
	let o = n(a), s = e(r);
	return s ? /* @__PURE__ */ t(s, {
		id: i,
		label: o
	}) : /* @__PURE__ */ t("span", { children: a });
}
//#endregion
export { r as EntityRef, n as extractText };
