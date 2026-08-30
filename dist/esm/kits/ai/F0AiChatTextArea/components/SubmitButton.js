import e from "../../../../icons/app/ArrowUp.js";
import t from "../../../../icons/app/SolidStop.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/SubmitButton.tsx
var a = ({ inProgress: a, hasDataToSend: o, isPreSending: s, recordingStatus: c = "idle", size: l = "md" }) => {
	let u = n();
	return c !== "transcribing" && a ? /* @__PURE__ */ i(r, {
		type: "submit",
		variant: "neutral",
		size: l,
		label: u.ai.stopAnswerGeneration,
		icon: t,
		hideLabel: !0
	}) : /* @__PURE__ */ i(r, {
		type: "submit",
		size: l,
		disabled: !o || s,
		variant: "default",
		label: u.ai.sendMessage,
		icon: e,
		hideLabel: !0
	});
};
//#endregion
export { a as SubmitButton };
