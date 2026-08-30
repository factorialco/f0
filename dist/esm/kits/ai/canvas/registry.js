import { useCanvasEntities as e } from "../F0AiChat/providers/useCanvasEntities.js";
//#region src/kits/ai/canvas/registry.ts
function t(t) {
	let n = e();
	if (!(!t || !n)) return n[t];
}
//#endregion
export { t as useCanvasEntity };
