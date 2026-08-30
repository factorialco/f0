import { F0Link as e } from "../../../../../../components/F0Link/F0Link.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Link.tsx
function n({ children: n, ...r }) {
	return /* @__PURE__ */ t(e, {
		...r,
		variant: "link",
		href: r.href,
		children: n
	});
}
//#endregion
export { n as A };
