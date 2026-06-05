import { jsxs as t, jsx as e, Fragment as k } from "react/jsx-runtime";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import x from "../../../../icons/app/ArrowUp.js";
import y from "../../../../icons/app/Check.js";
import R from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import F from "../../../../icons/app/Microphone.js";
import N from "../../../../icons/app/Paperclip.js";
import L from "../../../../icons/app/SolidStop.js";
import { RecordingWaveform as C } from "./RecordingWaveform.js";
import { useI18n as $ } from "../../../../lib/providers/i18n/i18n-provider.js";
const J = ({
  onUploadFiles: d,
  isAtMaxFiles: n,
  maxFiles: c,
  acceptValue: m,
  fileInputRef: l,
  handleFileSelect: s,
  inProgress: o,
  hasDataToSend: p,
  isPreSending: f,
  canRecord: b,
  recordingStatus: a = "idle",
  recordingStream: u,
  onStartRecording: h,
  onStopRecording: v,
  onCancelRecording: g
}) => {
  const i = $();
  return a === "recording" ? /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-3 p-3", children: [
    /* @__PURE__ */ e(
      C,
      {
        stream: u ?? null,
        className: "min-w-0 flex-1"
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ e(
        r,
        {
          label: i.ai.cancelRecording,
          hideLabel: !0,
          type: "button",
          icon: R,
          variant: "outline",
          size: "md",
          onClick: g
        }
      ),
      /* @__PURE__ */ e(
        r,
        {
          label: i.ai.stopRecording,
          hideLabel: !0,
          type: "button",
          icon: y,
          variant: "default",
          size: "md",
          onClick: v
        }
      )
    ] })
  ] }) : /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center justify-between p-3", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: d && /* @__PURE__ */ t(k, { children: [
      /* @__PURE__ */ e(
        r,
        {
          label: i.ai.attachFile,
          hideLabel: !0,
          type: "button",
          icon: N,
          variant: "outline",
          size: "md",
          disabled: n || a === "transcribing",
          onClick: (w) => {
            w.preventDefault(), l.current?.click();
          }
        }
      ),
      /* @__PURE__ */ e(
        "input",
        {
          ref: l,
          type: "file",
          multiple: c !== 1,
          disabled: n,
          accept: m,
          className: "hidden",
          onChange: s
        }
      )
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
      b && /* @__PURE__ */ e(
        r,
        {
          label: i.ai.recordAudio,
          hideLabel: !0,
          type: "button",
          icon: F,
          variant: "ghost",
          size: "md",
          disabled: o,
          onClick: h,
          loading: a === "transcribing"
        }
      ),
      a !== "transcribing" && o ? /* @__PURE__ */ e(
        r,
        {
          type: "submit",
          variant: "neutral",
          label: i.ai.stopAnswerGeneration,
          icon: L,
          hideLabel: !0
        }
      ) : /* @__PURE__ */ e(
        r,
        {
          type: "submit",
          disabled: !p || f,
          variant: "default",
          label: i.ai.sendMessage,
          icon: x,
          hideLabel: !0
        }
      )
    ] })
  ] });
};
export {
  J as ActionBar
};
