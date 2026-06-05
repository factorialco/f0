import { useAiChat as n } from "./AiChatStateProvider.js";
function s() {
  const { canvasEntities: t } = n();
  return t;
}
export {
  s as useCanvasEntities
};
