import { Tag as e } from "../../../../components/tags/F0Tag/F0Tag.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNodeTags.tsx
function n({ tags: n }) {
	return n.length === 0 ? null : /* @__PURE__ */ t("div", {
		className: "flex flex-wrap items-center justify-center gap-1",
		children: n.map((n, r) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(e, { tag: n }) }, `${n.type}-${r}`))
	});
}
//#endregion
export { n as F0GraphNodeTags };
