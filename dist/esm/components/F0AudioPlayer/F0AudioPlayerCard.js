import { cn as e } from "../../lib/utils.js";
import { useReducedMotion as t } from "../../lib/a11y.js";
import { useI18n as n } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as ee } from "../F0Button/F0Button.js";
import { ScrollArea as r } from "../../ui/scrollarea.js";
import { getDataAttributes as i } from "./utils.js";
import { AudioScrubber as te } from "./components/AudioScrubber.js";
import { collectLanguages as a, defaultLocale as o, resolveLocalized as s } from "../../lib/localized.js";
import { LanguageSelect as ne } from "./components/LanguageSelect.js";
import { PlaybackTime as re } from "./components/PlaybackTime.js";
import { PlayPauseButton as ie } from "./components/PlayPauseButton.js";
import { preserveAudioPosition as ae, useAudioLanguage as c } from "./useAudioLanguage.js";
import { usePlayerController as l } from "./usePlayerController.js";
import { F0SegmentedControl as u } from "../../experimental/Actions/F0SegmentedControl/index.js";
import { PlaybackMenu as d } from "./components/PlaybackMenu.js";
import { useDerivedTranscription as f } from "./useDerivedTranscription.js";
import { forwardRef as p, useMemo as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
import { motion as v } from "motion/react";
import { useControllableState as oe } from "@radix-ui/react-use-controllable-state";
//#region src/components/F0AudioPlayer/F0AudioPlayerCard.tsx
var y = p((p, y) => {
	let { title: b, subtitle: x, actions: S, className: se, src: ce, preload: le, autoPlay: ue = !1, disabled: C = !1, ariaLabel: w, size: T = "md", content: E, defaultLanguage: D, details: O, expanded: k, defaultExpanded: A = !1, onExpandedChange: j, detailsMaxHeight: M = 200 } = p, N = n(), P = c(ce, D), F = l({
		...p,
		src: P.resolvedSrc
	}), I = i(p), L = t(), R = (e) => {
		ae(F.audioRef.current), P.setLocale(e);
	}, z = !E && !!(O && O.length > 0), B = m(() => a(E?.summary, E?.transcription), [E?.summary, E?.transcription]), [V, H] = h(() => o(B, D)), U = B.some((e) => e.locale === V) ? V : o(B, D), W = s(E?.summary, U), G = s(E?.transcription, U), de = f(F.audioRef, F.currentSrc, !G), K = G ?? de, q = m(() => {
		if (z) return O ?? [];
		let e = [];
		return W && e.push({
			value: "summary",
			label: N.audioPlayer.summary,
			content: /* @__PURE__ */ g("p", {
				className: "whitespace-pre-line",
				children: W
			})
		}), K && e.push({
			value: "transcription",
			label: N.audioPlayer.transcription,
			content: /* @__PURE__ */ g("p", {
				className: "whitespace-pre-line",
				children: K
			})
		}), e;
	}, [
		z,
		O,
		W,
		K,
		N.audioPlayer.summary,
		N.audioPlayer.transcription
	]), fe = K ? "available" : "missing", J = q.length > 0, Y = q.length === 1 ? q[0] : void 0, X = (e) => Y?.value === "transcription" ? e ? N.audioPlayer.hideTranscription : N.audioPlayer.viewTranscription : Y?.value === "summary" ? e ? N.audioPlayer.hideSummary : N.audioPlayer.viewSummary : e ? N.audioPlayer.hideDetail : N.audioPlayer.viewDetail, [Z = !1, pe] = oe({
		prop: k,
		defaultProp: A,
		onChange: j
	}), [Q, me] = h(q[0]?.value), $ = q.some((e) => e.value === Q) ? Q : q[0]?.value, he = q.find((e) => e.value === $)?.content;
	return /* @__PURE__ */ _("div", {
		ref: y,
		role: "group",
		"aria-label": w ?? b,
		"data-audio-transcription": fe,
		className: e("flex flex-col gap-2.5 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-3", se),
		...I,
		children: [
			/* @__PURE__ */ g("audio", {
				ref: F.audioRef,
				src: F.currentSrc,
				preload: le ?? (typeof P.resolvedSrc == "function" ? "none" : "metadata"),
				autoPlay: ue
			}),
			/* @__PURE__ */ _("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ _("div", {
					className: "flex min-w-0 flex-1 items-center gap-2.5",
					children: [/* @__PURE__ */ g(ie, {
						isPlaying: F.isPlaying,
						disabled: C,
						size: T,
						onToggle: F.toggle
					}), /* @__PURE__ */ _("div", {
						className: "flex min-w-0 flex-col",
						children: [/* @__PURE__ */ g("span", {
							className: "truncate text-base font-medium text-f1-foreground",
							children: b
						}), x && /* @__PURE__ */ g("span", {
							className: "truncate text-base text-f1-foreground-secondary",
							children: x
						})]
					})]
				}), (J || F.playbackRates.length > 0 || P.languages.length > 1 || S) && /* @__PURE__ */ _("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [J && /* @__PURE__ */ g(ee, {
						variant: "outline",
						size: "sm",
						label: X(Z),
						onClick: () => pe(!Z),
						"aria-expanded": Z
					}), (F.playbackRates.length > 0 || P.languages.length > 1 || S) && /* @__PURE__ */ g(d, {
						playbackRate: F.playbackRate,
						playbackRates: F.playbackRates,
						onRateChange: F.setPlaybackRate,
						disabled: C,
						extraItems: S,
						audioLanguages: P.languages,
						audioLanguage: P.activeLocale,
						onAudioLanguageChange: R
					})]
				})]
			}),
			/* @__PURE__ */ _("div", {
				className: "flex w-full items-center gap-2",
				children: [/* @__PURE__ */ g(te, {
					currentTime: F.currentTime,
					duration: F.duration,
					buffered: F.buffered,
					disabled: C,
					onSeek: F.seek
				}), /* @__PURE__ */ g(re, {
					currentTime: F.currentTime,
					duration: F.duration,
					size: T
				})]
			}),
			J && /* @__PURE__ */ _(v.div, {
				role: "region",
				"aria-label": Y ? Y.label : N.audioPlayer.details,
				initial: !1,
				animate: {
					height: Z ? "auto" : 0,
					marginTop: Z ? 0 : "-0.625rem",
					opacity: +!!Z,
					visibility: Z ? "visible" : "hidden"
				},
				transition: {
					duration: L ? 0 : .15,
					ease: [
						.165,
						.84,
						.44,
						1
					]
				},
				className: "overflow-hidden",
				children: [
					B.length > 1 && U && /* @__PURE__ */ g("div", {
						className: "flex justify-end pb-2.5",
						children: /* @__PURE__ */ g(ne, {
							value: U,
							options: B,
							onChange: H,
							kind: N.audioPlayer.language
						})
					}),
					!Y && /* @__PURE__ */ g(u, {
						fullWidth: !0,
						ariaLabel: N.audioPlayer.details,
						value: $,
						onChange: me,
						items: q.map((e) => ({
							value: e.value,
							label: e.label
						}))
					}),
					/* @__PURE__ */ g("div", {
						className: Y ? void 0 : "pt-2.5",
						children: /* @__PURE__ */ g(r, {
							style: { "--audio-details-max-h": `${M}px` },
							className: "[&_[data-scroll-container]]:max-h-[var(--audio-details-max-h)]",
							children: /* @__PURE__ */ g("div", {
								className: "break-words pr-1 text-base text-f1-foreground",
								children: he
							})
						})
					})
				]
			})
		]
	});
});
y.displayName = "F0AudioPlayerCard";
//#endregion
export { y as F0AudioPlayerCardBase };
