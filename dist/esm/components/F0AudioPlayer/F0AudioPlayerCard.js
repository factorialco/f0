import { cn as e } from "../../lib/utils.js";
import { useReducedMotion as t } from "../../lib/a11y.js";
import { useI18n as n } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../F0Button/F0Button.js";
import { ScrollArea as i } from "../../ui/scrollarea.js";
import { buildCueTimeline as a, findActiveCueIndex as ee, getDataAttributes as o } from "./utils.js";
import { AudioScrubber as te } from "./components/AudioScrubber.js";
import { collectLanguages as ne, defaultLocale as s, resolveLocalized as c } from "../../lib/localized.js";
import { LanguageSelect as re } from "./components/LanguageSelect.js";
import { PlaybackTime as ie } from "./components/PlaybackTime.js";
import { PlayPauseButton as ae } from "./components/PlayPauseButton.js";
import { preserveAudioPosition as oe, useAudioLanguage as se } from "./useAudioLanguage.js";
import { usePlayerController as ce } from "./usePlayerController.js";
import { F0SegmentedControl as le } from "../../experimental/Actions/F0SegmentedControl/index.js";
import { PlaybackMenu as ue } from "./components/PlaybackMenu.js";
import { TranscriptCueList as de } from "./components/TranscriptCueList.js";
import { useDerivedTranscription as fe } from "./useDerivedTranscription.js";
import { forwardRef as l, useCallback as pe, useEffect as u, useMemo as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { motion as me } from "motion/react";
import { useControllableState as he } from "@radix-ui/react-use-controllable-state";
//#region src/components/F0AudioPlayer/F0AudioPlayerCard.tsx
var ge = /* @__PURE__ */ new Set([
	"ArrowUp",
	"ArrowDown",
	"PageUp",
	"PageDown",
	"Home",
	"End",
	" "
]), g = l((l, g) => {
	let { title: _, subtitle: v, actions: y, className: _e, src: ve, preload: ye, autoPlay: be = !1, disabled: b = !1, ariaLabel: xe, size: x = "md", content: S, defaultLanguage: C, details: w, expanded: Se, defaultExpanded: Ce = !1, onExpandedChange: we, detailsMaxHeight: Te = 200 } = l, T = n(), E = se(ve, C), D = ce({
		...l,
		src: E.resolvedSrc
	}), O = o(l), k = t(), Ee = (e) => {
		oe(D.audioRef.current), E.setLocale(e);
	}, A = !S && !!(w && w.length > 0), j = d(() => ne(S?.summary, S?.transcription), [S?.summary, S?.transcription]), [M, De] = p(() => s(j, C)), N = j.some((e) => e.locale === M) ? M : s(j, C), P = c(S?.summary, N), F = c(S?.transcription, N), Oe = fe(D.audioRef, D.currentSrc, !F), I = F ?? Oe, L = Array.isArray(I) ? I : void 0, R = typeof I == "string" ? I : void 0, z = !!(R || L?.length), B = d(() => L ? a(L) : [], [L]), V = B.length > 0, H = D.pendingTime ?? D.currentTime, U = d(() => V ? ee(B, H) : -1, [
		V,
		B,
		H
	]), W = f(null), G = f([]), K = f(!1), q = pe((e) => {
		K.current = !1, D.seek(e);
	}, [D.seek]);
	u(() => {
		let e = W.current;
		if (!e) return;
		let t = () => {
			K.current = !0;
		}, n = (e) => {
			ge.has(e.key) && t();
		}, r = (n) => {
			e.contains(n.target) || t();
		}, i = e.parentElement;
		return e.addEventListener("wheel", t, { passive: !0 }), e.addEventListener("touchmove", t, { passive: !0 }), e.addEventListener("keydown", n), i?.addEventListener("pointerdown", r), () => {
			e.removeEventListener("wheel", t), e.removeEventListener("touchmove", t), e.removeEventListener("keydown", n), i?.removeEventListener("pointerdown", r);
		};
	}, [z]);
	let J = d(() => {
		if (A) return w ?? [];
		let e = [];
		return P && e.push({
			value: "summary",
			label: T.audioPlayer.summary,
			content: /* @__PURE__ */ m("p", {
				className: "whitespace-pre-line",
				children: P
			})
		}), z && e.push({
			value: "transcription",
			label: T.audioPlayer.transcription,
			content: L ? /* @__PURE__ */ m(de, {
				cues: L,
				activeIndex: U,
				onSeek: V ? q : void 0,
				cueRefs: G
			}) : /* @__PURE__ */ m("p", {
				className: "whitespace-pre-line",
				children: R
			})
		}), e;
	}, [
		A,
		w,
		P,
		z,
		L,
		R,
		U,
		V,
		q,
		T.audioPlayer.summary,
		T.audioPlayer.transcription
	]), ke = z ? "available" : "missing", Y = J.length > 0, X = J.length === 1 ? J[0] : void 0, Ae = (e) => X?.value === "transcription" ? e ? T.audioPlayer.hideTranscription : T.audioPlayer.viewTranscription : X?.value === "summary" ? e ? T.audioPlayer.hideSummary : T.audioPlayer.viewSummary : e ? T.audioPlayer.hideDetail : T.audioPlayer.viewDetail, [Z = !1, je] = he({
		prop: Se,
		defaultProp: Ce,
		onChange: we
	});
	u(() => {
		if (!Z || U < 0 || K.current) return;
		let e = W.current, t = G.current[U];
		if (!e || !t) return;
		let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = r.top - n.top, a = r.bottom - n.bottom;
		i >= 0 && a <= 0 || e.scrollTo({
			top: e.scrollTop + (i < 0 ? i : a),
			behavior: k ? "auto" : "smooth"
		});
	}, [
		U,
		Z,
		k
	]);
	let [Q, Me] = p(J[0]?.value), $ = J.some((e) => e.value === Q) ? Q : J[0]?.value, Ne = J.find((e) => e.value === $)?.content;
	return /* @__PURE__ */ h("div", {
		ref: g,
		role: "group",
		"aria-label": xe ?? _,
		"data-audio-transcription": ke,
		className: e("flex flex-col gap-2.5 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-3", _e),
		...O,
		children: [
			/* @__PURE__ */ m("audio", {
				ref: D.audioRef,
				src: D.currentSrc,
				preload: ye ?? (typeof E.resolvedSrc == "function" ? "none" : "metadata"),
				autoPlay: be
			}),
			/* @__PURE__ */ h("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ h("div", {
					className: "flex min-w-0 flex-1 items-center gap-2.5",
					children: [/* @__PURE__ */ m(ae, {
						isPlaying: D.isPlaying,
						disabled: b,
						size: x,
						onToggle: D.toggle
					}), /* @__PURE__ */ h("div", {
						className: "flex min-w-0 flex-col",
						children: [/* @__PURE__ */ m("span", {
							className: "truncate text-base font-medium text-f1-foreground",
							children: _
						}), v && /* @__PURE__ */ m("span", {
							className: "truncate text-base text-f1-foreground-secondary",
							children: v
						})]
					})]
				}), (Y || D.playbackRates.length > 0 || E.languages.length > 1 || y) && /* @__PURE__ */ h("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [Y && /* @__PURE__ */ m(r, {
						variant: "outline",
						size: "sm",
						label: Ae(Z),
						onClick: () => je(!Z),
						"aria-expanded": Z
					}), (D.playbackRates.length > 0 || E.languages.length > 1 || y) && /* @__PURE__ */ m(ue, {
						playbackRate: D.playbackRate,
						playbackRates: D.playbackRates,
						onRateChange: D.setPlaybackRate,
						disabled: b,
						extraItems: y,
						audioLanguages: E.languages,
						audioLanguage: E.activeLocale,
						onAudioLanguageChange: Ee
					})]
				})]
			}),
			/* @__PURE__ */ h("div", {
				className: "flex w-full items-center gap-2",
				children: [/* @__PURE__ */ m(te, {
					currentTime: D.currentTime,
					duration: D.duration,
					buffered: D.buffered,
					disabled: b,
					onSeek: q
				}), /* @__PURE__ */ m(ie, {
					currentTime: D.currentTime,
					duration: D.duration,
					size: x
				})]
			}),
			Y && /* @__PURE__ */ h(me.div, {
				role: "region",
				"aria-label": X ? X.label : T.audioPlayer.details,
				initial: !1,
				animate: {
					height: Z ? "auto" : 0,
					marginTop: Z ? 0 : "-0.625rem",
					opacity: +!!Z,
					visibility: Z ? "visible" : "hidden"
				},
				transition: {
					duration: k ? 0 : .15,
					ease: [
						.165,
						.84,
						.44,
						1
					]
				},
				className: "overflow-hidden",
				children: [
					j.length > 1 && N && /* @__PURE__ */ m("div", {
						className: "flex justify-end pb-2.5",
						children: /* @__PURE__ */ m(re, {
							value: N,
							options: j,
							onChange: De,
							kind: T.audioPlayer.language
						})
					}),
					!X && /* @__PURE__ */ m(le, {
						fullWidth: !0,
						ariaLabel: T.audioPlayer.details,
						value: $,
						onChange: Me,
						items: J.map((e) => ({
							value: e.value,
							label: e.label
						}))
					}),
					/* @__PURE__ */ m("div", {
						className: X ? void 0 : "pt-2.5",
						children: /* @__PURE__ */ m(i, {
							viewportRef: W,
							style: { "--audio-details-max-h": `${Te}px` },
							className: "[&_[data-scroll-container]]:max-h-[var(--audio-details-max-h)]",
							children: /* @__PURE__ */ m("div", {
								className: "break-words pr-1 text-base text-f1-foreground",
								children: Ne
							})
						})
					})
				]
			})
		]
	});
});
g.displayName = "F0AudioPlayerCard";
//#endregion
export { g as F0AudioPlayerCardBase };
