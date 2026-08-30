import { cn as e } from "../../../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Typography.tsx
function n({ children: n, ...r }) {
	return /* @__PURE__ */ t("p", {
		...r,
		className: e("text-base font-normal", r.className),
		children: n
	});
}
function r({ children: n, ...r }) {
	return /* @__PURE__ */ t("h1", {
		...r,
		className: e("mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0", r.className),
		children: n
	});
}
function i({ children: n, ...r }) {
	return /* @__PURE__ */ t("h2", {
		...r,
		className: e("mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0", r.className),
		children: n
	});
}
function a({ children: n, ...r }) {
	return /* @__PURE__ */ t("h3", {
		...r,
		className: e("mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0", r.className),
		children: n
	});
}
function o({ children: n, ...r }) {
	return /* @__PURE__ */ t("strong", {
		...r,
		className: e("font-semibold", r.className),
		children: n
	});
}
function s({ children: n, ...r }) {
	return /* @__PURE__ */ t("em", {
		...r,
		className: e("italic", r.className),
		children: n
	});
}
//#endregion
export { s as Em, r as H1, i as H2, a as H3, n as P, o as Strong };
