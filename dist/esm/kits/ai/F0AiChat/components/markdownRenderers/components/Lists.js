import { cn as e } from "../../../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Lists.tsx
function n({ children: n, ...r }) {
	return /* @__PURE__ */ t("ul", {
		...r,
		className: e("list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", r.className),
		children: n
	});
}
function r({ children: n, ...r }) {
	return /* @__PURE__ */ t("ol", {
		...r,
		className: e("list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", r.className),
		children: n
	});
}
function i({ children: n, ...r }) {
	return /* @__PURE__ */ t("li", {
		...r,
		className: e("mb-2", r.className),
		children: n
	});
}
//#endregion
export { i as Li, r as Ol, n as Ul };
