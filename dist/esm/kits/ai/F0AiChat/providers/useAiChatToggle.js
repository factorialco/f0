import { useAiChat as e } from "./AiChatStateProvider.js";
import { useCallback as t } from "react";
//#region src/kits/ai/F0AiChat/providers/useAiChatToggle.ts
function n() {
	let { enabled: n, open: r, setOpen: i, panelContent: a, clearPanelContent: o, restoringPanelContentId: s } = e();
	return {
		enabled: n,
		open: r && !a && !s,
		setOpen: t((e) => {
			e ? (o(), i(!0)) : i(!1);
		}, [o, i])
	};
}
//#endregion
export { n as useAiChatToggle };
