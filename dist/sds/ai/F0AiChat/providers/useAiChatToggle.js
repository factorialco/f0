import { useAiChat as o } from "./AiChatStateProvider.js";
function i() {
  const { enabled: e, open: t, setOpen: n } = o();
  return { enabled: e, open: t, setOpen: n };
}
export {
  i as useAiChatToggle
};
