import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Check.js";
import n from "../../../../icons/app/Cross.js";
import r from "../../../../icons/app/Paperclip.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { RecordingWaveform as o } from "./RecordingWaveform.js";
import { DictationButton as s } from "./DictationButton.js";
import { SubmitButton as c } from "./SubmitButton.js";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/ActionBar.tsx
var f = ({ onUploadFiles: f, toolbarStart: p, center: m, isAtMaxFiles: h, maxFiles: g, acceptValue: _, fileInputRef: v, handleFileSelect: y, inProgress: b, hasDataToSend: x, isPreSending: S, canRecord: C, recordingStatus: w = "idle", recordingStream: T, onStartRecording: E, onStopRecording: D, onCancelRecording: O }) => {
	let k = i();
	return w === "recording" ? /* @__PURE__ */ d("div", {
		className: "flex shrink-0 items-center gap-3 p-3",
		children: [/* @__PURE__ */ u(o, {
			stream: T ?? null,
			className: "min-w-0 flex-1"
		}), /* @__PURE__ */ d("div", {
			className: "flex shrink-0 items-center gap-2",
			children: [/* @__PURE__ */ u(a, {
				label: k.ai.cancelRecording,
				hideLabel: !0,
				type: "button",
				icon: n,
				variant: "outline",
				size: "md",
				onClick: O
			}), /* @__PURE__ */ u(a, {
				label: k.ai.stopRecording,
				hideLabel: !0,
				type: "button",
				icon: t,
				variant: "default",
				size: "md",
				onClick: D
			})]
		})]
	}) : /* @__PURE__ */ d("div", {
		className: "flex shrink-0 items-center gap-2 p-3",
		children: [
			(f || p) && /* @__PURE__ */ d("div", {
				className: e("flex items-center gap-2", m ? "shrink-0" : "min-w-0"),
				children: [f && /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u(a, {
					label: k.ai.attachFile,
					hideLabel: !0,
					type: "button",
					icon: r,
					variant: "outline",
					size: "md",
					disabled: h || w === "transcribing",
					onClick: (e) => {
						e.preventDefault(), v.current?.click();
					}
				}), /* @__PURE__ */ u("input", {
					ref: v,
					type: "file",
					multiple: g !== 1,
					disabled: h,
					accept: _,
					className: "hidden",
					onChange: y
				})] }), p && /* @__PURE__ */ u("div", {
					className: "min-w-0 cursor-default",
					onClick: (e) => e.stopPropagation(),
					children: p
				})]
			}),
			m && /* @__PURE__ */ u("div", {
				className: "min-w-0 flex-1",
				children: m
			}),
			/* @__PURE__ */ d("div", {
				className: "ml-auto flex shrink-0 items-center gap-2",
				children: [C && /* @__PURE__ */ u(s, {
					inProgress: b,
					recordingStatus: w,
					onStartRecording: E
				}), /* @__PURE__ */ u(c, {
					inProgress: b,
					hasDataToSend: x,
					isPreSending: S,
					recordingStatus: w
				})]
			})
		]
	});
};
//#endregion
export { f as ActionBar };
