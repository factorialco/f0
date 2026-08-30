import { useF0ChatStable as e } from "../providers/F0ChatProvider.js";
import { chatPermission as t } from "../utils/capabilities.js";
//#region src/sds/chat/F0Chat/hooks/useChatPermission.ts
var n = (n) => {
	let { channelType: r, capabilities: i } = e();
	return t(n, r, i);
};
//#endregion
export { n as useChatPermission };
