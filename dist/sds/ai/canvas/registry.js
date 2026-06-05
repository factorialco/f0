import { useCanvasEntities as i } from "../F0AiChat/providers/useCanvasEntities.js";
function r(n) {
  const t = i();
  if (!(!n || !t))
    return t[n];
}
export {
  r as useCanvasEntity
};
