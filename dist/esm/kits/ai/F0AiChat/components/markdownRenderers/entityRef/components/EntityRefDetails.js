import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefDetails.tsx
function n({ rows: n }) {
	return n.length === 0 ? null : /* @__PURE__ */ e("div", {
		className: "flex flex-col gap-2",
		children: n.map((n, r) => /* @__PURE__ */ t("div", {
			className: "flex flex-col",
			children: [n.label && /* @__PURE__ */ e("p", {
				className: "text-f1-foreground-secondary",
				children: n.label
			}), /* @__PURE__ */ e("div", {
				className: "flex items-center gap-1.5 font-medium text-f1-foreground",
				children: n.value
			})]
		}, n.label ?? r))
	});
}
//#endregion
export { n as EntityRefDetails };
