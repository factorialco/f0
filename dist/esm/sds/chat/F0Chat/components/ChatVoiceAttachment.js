import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import n from "../../../../icons/app/SolidPause.js";
import r from "../../../../icons/app/SolidPlay.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { useAudioPlayer as o } from "../../../../components/F0AudioPlayer/useAudioPlayer.js";
import { useF0ChatEmit as s, useF0ChatVoicePlayLog as c } from "../providers/F0ChatProvider.js";
import { useChatSurface as l } from "../providers/ChatSurfaceProvider.js";
import { CHAT_MEDIA_WIDTH_CLASS as u } from "../utils/media-layout.js";
import { useCallback as d, useEffect as f, useRef as p, useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatVoiceAttachment.tsx
var _ = [
	1,
	1.5,
	2,
	.5
], v = 32, y = .12, b = (e) => {
	let t = Math.max(0, Math.floor(e));
	return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
}, x = Array.from({ length: v }, (e, t) => .3 + .25 * Math.abs(Math.sin(t / 2.4))), S = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), w = Promise.resolve(), T = (e) => {
	let t = w.then(e, e);
	return w = t.then(() => void 0, () => void 0), t;
}, E = (e) => {
	let t = S.get(e);
	if (t) return Promise.resolve(t);
	let n = C.get(e);
	if (n) return n;
	let r = typeof window < "u" ? window.AudioContext ?? window.webkitAudioContext : void 0;
	if (!r) return Promise.resolve(x);
	let i = (async () => {
		let t = await (await fetch(e)).arrayBuffer();
		return T(async () => {
			let e = new r();
			try {
				let n = (await e.decodeAudioData(t)).getChannelData(0), r = Math.max(1, Math.floor(n.length / v)), i = [];
				for (let e = 0; e < v; e++) {
					let t = 0, a = 0, o = e * r, s = Math.max(1, Math.floor(r / 256));
					for (let e = o; e < o + r && e < n.length; e += s) t += n[e] * n[e], a += 1;
					i.push(Math.sqrt(t / Math.max(a, 1)));
				}
				let a = Math.max(...i, .001);
				return i.map((e) => Math.max(y, e / a));
			} finally {
				e.close();
			}
		});
	})().then((t) => (S.set(e, t), t)).catch(() => x).finally(() => C.delete(e));
	return C.set(e, i), i;
}, D = (e) => {
	let [t, n] = m(() => S.get(e) ?? x);
	return f(() => {
		let t = S.get(e);
		if (t) {
			n(t);
			return;
		}
		let r = !1;
		return E(e).then((e) => {
			r || n(e);
		}), () => {
			r = !0;
		};
	}, [e]), t;
}, O = ({ voice: f, isMine: y = !1, cornerClass: x = "rounded-xl", className: S, surfaceClassName: C }) => {
	let w = i(), T = p(null), E = o(T), O = D(f.url), [k, A] = m(0), j = p(null), M = s(), N = l(), P = c(), F = E.duration > 0 ? E.duration : f.durationSeconds ?? 0, I = F > 0 ? Math.min(1, E.currentTime / F) : 0, L = d(() => {
		if (E.isPlaying) {
			E.pause();
			return;
		}
		N === "transcript" && !P.hasReported(f.url) && (P.markReported(f.url), M.onVoiceNotePlayed({ durationSeconds: f.durationSeconds })), F > 0 && E.currentTime >= F && E.seek(0), E.play();
	}, [
		E,
		F,
		M,
		N,
		P,
		f.url,
		f.durationSeconds
	]), R = d(() => {
		let e = (k + 1) % _.length;
		A(e), E.setPlaybackRate(_[e]), N === "transcript" && M.onVoicePlaybackRateChanged({ rate: _[e] });
	}, [
		E,
		k,
		M,
		N
	]), z = d((e) => {
		let t = j.current;
		if (!t || F <= 0) return;
		let n = t.getBoundingClientRect(), r = Math.min(1, Math.max(0, (e.clientX - n.left) / n.width));
		E.seek(r * F);
	}, [E, F]), B = d((e) => {
		if (F <= 0) return;
		let t = Math.max(1, F / v), n;
		switch (e.key) {
			case "ArrowLeft":
			case "ArrowDown":
				n = E.currentTime - t;
				break;
			case "ArrowRight":
			case "ArrowUp":
				n = E.currentTime + t;
				break;
			case "Home":
				n = 0;
				break;
			case "End":
				n = F;
				break;
			default: return;
		}
		e.preventDefault(), E.seek(Math.min(F, Math.max(0, n)));
	}, [F, E]);
	return /* @__PURE__ */ g("div", {
		className: e("group/voice flex h-[58px] min-w-0 items-center gap-2 border border-solid border-f1-border-secondary p-3", u, y ? "bg-f1-background-tertiary" : "bg-f1-background", x, S, C),
		"data-testid": "chat-voice-attachment",
		children: [
			/* @__PURE__ */ h("audio", {
				ref: T,
				src: f.url,
				preload: "metadata"
			}),
			/* @__PURE__ */ h("div", {
				className: "shrink-0",
				"data-testid": "chat-voice-toggle",
				children: /* @__PURE__ */ h(a, {
					variant: "outline",
					size: "md",
					hideLabel: !0,
					label: E.isPlaying ? w.audioPlayer.pause : w.audioPlayer.play,
					icon: E.isPlaying ? n : r,
					onClick: L
				})
			}),
			/* @__PURE__ */ h("div", {
				ref: j,
				onClick: z,
				onKeyDown: B,
				className: e("flex h-8 min-w-0 flex-1 cursor-pointer items-center justify-between gap-0.5 overflow-hidden rounded-sm", t("focus-visible:ring-inset")),
				role: "slider",
				tabIndex: 0,
				"aria-label": w.audioPlayer.seek,
				"aria-valuemin": 0,
				"aria-valuemax": Math.round(F),
				"aria-valuenow": Math.round(E.currentTime),
				"data-testid": "chat-voice-waveform",
				children: O.map((t, n) => /* @__PURE__ */ h("span", {
					className: e("w-0.5 min-w-px shrink rounded-full transition-colors", n / O.length <= I && I > 0 ? "bg-f1-foreground" : "bg-f1-foreground-tertiary"),
					style: { height: `${Math.round(t * 100)}%` }
				}, n))
			}),
			/* @__PURE__ */ g("div", {
				className: "relative w-12 shrink-0",
				"data-testid": "chat-voice-trailing",
				children: [/* @__PURE__ */ h("span", {
					className: "inline-block w-full pr-2 text-end text-base font-medium tabular-nums text-f1-foreground-secondary group-focus-within/voice:invisible group-hover/voice:invisible",
					"data-testid": "chat-voice-time",
					children: b(E.isPlaying || E.currentTime > 0 ? E.currentTime : F)
				}), /* @__PURE__ */ h("div", {
					className: "pointer-events-none absolute inset-0 flex justify-end opacity-0 transition-opacity group-focus-within/voice:pointer-events-auto group-focus-within/voice:opacity-100 group-hover/voice:pointer-events-auto group-hover/voice:opacity-100 motion-reduce:transition-none",
					children: /* @__PURE__ */ h(a, {
						variant: "ghost",
						size: "sm",
						label: `${_[k]}x`,
						"aria-label": `${w.audioPlayer.playbackSpeed}: ${_[k]}x`,
						onClick: R,
						"data-testid": "chat-voice-rate"
					})
				})]
			})
		]
	});
}, k = ({ voice: t, isMine: n = !1, cornerClass: r = "rounded-xl", className: i, surfaceClassName: a }) => /* @__PURE__ */ h("div", {
	"data-testid": "chat-voice-attachment-shell",
	className: e("flex w-full flex-col gap-1 bg-f1-background", r),
	children: /* @__PURE__ */ h(O, {
		voice: t,
		isMine: n,
		cornerClass: r,
		className: i,
		surfaceClassName: a
	})
});
//#endregion
export { k as ChatVoiceAttachment };
