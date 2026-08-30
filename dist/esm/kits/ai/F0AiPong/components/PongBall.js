import { cn as e } from "../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0AiPong/components/PongBall.tsx
function n({ size: n = 40, className: r, style: i }) {
	return /* @__PURE__ */ t("div", {
		className: e(r, "rounded-full"),
		style: {
			width: n,
			height: n,
			background: "linear-gradient(135deg, #E8845E, #B89BD6)",
			...i
		}
	});
}
//#endregion
export { n as PongBall };
