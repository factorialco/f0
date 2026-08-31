import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { formatPlaybackTime as r } from "../utils.js";
import { F0Text as i } from "../../F0Text/F0Text.js";
import { memo as a, useCallback as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/F0AudioPlayer/components/TranscriptCueList.tsx
var u = (t) => e("block w-full rounded px-2 py-1 text-left transition-colors", t ? "bg-f1-background-selected-secondary font-medium" : "bg-transparent"), d = a(function({ cue: a, index: s, isActive: l, onSeek: d, cueRefs: f }) {
	let p = n(), { startTime: m } = a, h = d && m !== void 0, g = o((e) => {
		f?.current && (f.current[s] = e);
	}, [f, s]), _ = o(() => {
		m !== void 0 && d?.(m);
	}, [d, m]);
	return /* @__PURE__ */ c("li", {
		ref: g,
		children: h ? /* @__PURE__ */ c("button", {
			type: "button",
			onClick: _,
			"aria-current": l || void 0,
			title: p.t("audioPlayer.jumpTo", { time: r(m) }),
			className: e(u(l), t(), !l && "hover:bg-f1-background-secondary"),
			children: /* @__PURE__ */ c(i, {
				as: "span",
				variant: "body",
				content: a.text
			})
		}) : /* @__PURE__ */ c("div", {
			className: u(l),
			children: /* @__PURE__ */ c(i, {
				as: "span",
				variant: "body",
				content: a.text
			})
		})
	});
}), f = a(function({ cues: e, activeIndex: t, onSeek: r, cueRefs: i }) {
	let a = n();
	return /* @__PURE__ */ l(s, { children: [r && /* @__PURE__ */ c("p", {
		className: "sr-only",
		children: a.audioPlayer.transcriptHint
	}), /* @__PURE__ */ c("ol", {
		className: "flex list-none flex-col gap-1 p-0",
		children: e.map((e, n) => /* @__PURE__ */ c(d, {
			cue: e,
			index: n,
			isActive: n === t,
			onSeek: r,
			cueRefs: i
		}, n))
	})] });
});
//#endregion
export { f as TranscriptCueList };
