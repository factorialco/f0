import e from "../../../../icons/app/Microphone.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/DictationButton.tsx
var i = ({ inProgress: i, recordingStatus: a = "idle", onStartRecording: o, size: s = "md" }) => {
	let c = t();
	return /* @__PURE__ */ r(n, {
		label: c.ai.recordAudio,
		hideLabel: !0,
		type: "button",
		icon: e,
		variant: "outline",
		size: s,
		disabled: i,
		onClick: o,
		loading: a === "transcribing"
	});
};
//#endregion
export { i as DictationButton };
