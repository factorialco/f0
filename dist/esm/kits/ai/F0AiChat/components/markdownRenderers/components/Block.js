import { cn as e } from "../../../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Block.tsx
function n({ children: n, ...r }) {
	return /* @__PURE__ */ t("pre", {
		...r,
		className: e("relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2", r.className),
		children: n
	});
}
function r({ children: n, ...r }) {
	return /* @__PURE__ */ t("code", {
		...r,
		className: e("rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground", "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base", r.className),
		children: n
	});
}
function i({ children: n, ...r }) {
	return /* @__PURE__ */ t("blockquote", {
		...r,
		className: e("mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base", r.className),
		children: n
	});
}
function a({ ...n }) {
	return /* @__PURE__ */ t("hr", {
		...n,
		className: e("my-3 border-0 border-t border-f1-border", n.className)
	});
}
//#endregion
export { i as Blockquote, r as Code, a as Hr, n as Pre };
