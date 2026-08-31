import { d as e } from "./OneEllipsis-DuhKMtYp.js";
import { D as t, O as n, f as r, ht as i } from "./variants-BOK7SMP_.js";
import { n as a, t as o } from "./utils-CVzxZnoI.js";
import { r as s } from "./F0Button-DTIyyURd.js";
import { a as c, i as l, t as u, x as d } from "./popover-By8ytmVb.js";
import { t as f } from "./Download-Dvj6cfxp.js";
import { t as p } from "./Globe-h1NiqzRt.js";
import { t as m } from "./Maximize-CyNX1-Xd.js";
import { t as h } from "./Minimize-C1HdMgmx.js";
import { i as g, n as _, r as v, t as y } from "./VolumeMuted-oJgKMeaA.js";
import { n as b, t as x } from "./SolidPlay-BNctDF_s.js";
import { c as S, d as ee, f as te, n as ne, o as C, p as w, s as T, t as re, u as E } from "./dropdown-menu-CiJk0TZy.js";
import { forwardRef as D, useCallback as O, useEffect as k, useId as A, useMemo as j, useRef as M, useState as N } from "react";
import { jsx as P, jsxs as F } from "react/jsx-runtime";
//#region src/lib/localized.ts
function I(e) {
	return Array.isArray(e);
}
function L(e, t) {
	if (e !== void 0) {
		if (!I(e)) return e;
		if (e.length !== 0) return ((t ? e.find((e) => e.locale === t) : void 0) ?? e[0]).value;
	}
}
function R(...e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) if (I(n)) for (let e of n) {
		let n = t.get(e.locale);
		n ? !n.label && e.label && (n.label = e.label) : t.set(e.locale, {
			locale: e.locale,
			label: e.label
		});
	}
	return Array.from(t.values());
}
function z(e, t) {
	if (e.label) return e.label;
	try {
		let n = t ?? e.locale, r = new Intl.DisplayNames([n], { type: "language" }).of(e.locale) ?? e.locale;
		return r.charAt(0).toLocaleUpperCase(n) + r.slice(1);
	} catch {
		return e.locale;
	}
}
function B(e, t) {
	if (e.length === 0) return;
	let n = e.map((e) => e.locale), r = (e) => e.split("-")[0], i = (e) => n.find((t) => t === e) ?? n.find((t) => r(t) === r(e));
	if (t) {
		let e = i(t);
		if (e) return e;
	}
	let a = typeof navigator < "u" ? navigator.language : void 0;
	if (a) {
		let e = i(a);
		if (e) return e;
	}
	return n[0];
}
//#endregion
//#region src/components/F0VideoPlayer/utils.ts
var V = [
	.5,
	.75,
	1,
	1.25,
	1.5
], H = .1, U = [
	25,
	50,
	75
], W = 3e5, G = .03;
function K(e) {
	return !Number.isFinite(e) || e < 0 ? "0:00" : `${Math.floor(e / 60)}:${Math.floor(e % 60).toString().padStart(2, "0")}`;
}
function q(e) {
	return `${e}x`;
}
function J(e) {
	return V.includes(e);
}
//#endregion
//#region src/components/F0VideoPlayer/components/AudioDescriptionToggleIcons.tsx
var Y = {
	x: 12,
	y: 15,
	textAnchor: "middle",
	fontSize: 8,
	fontWeight: 700,
	fontFamily: "inherit",
	letterSpacing: -.4
}, X = D(({ animate: e, ...t }, n) => /* @__PURE__ */ F("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	ref: n,
	...t,
	"aria-hidden": "true",
	children: [/* @__PURE__ */ P("rect", {
		x: 3.5,
		y: 6.5,
		width: 17,
		height: 11,
		rx: 2.5,
		stroke: "currentColor",
		vectorEffect: "non-scaling-stroke"
	}), /* @__PURE__ */ P("text", {
		...Y,
		fill: "currentColor",
		children: "AD"
	})]
}));
X.displayName = "AudioDescriptionLineIcon";
var ie = D(({ animate: e, ...t }, n) => {
	let r = `ad-mask-${A().replace(/:/g, "")}`;
	return /* @__PURE__ */ F("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		ref: n,
		...t,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ F("mask", {
			id: r,
			maskUnits: "userSpaceOnUse",
			children: [/* @__PURE__ */ P("rect", {
				x: 3,
				y: 6,
				width: 18,
				height: 12,
				rx: 3,
				fill: "white"
			}), /* @__PURE__ */ P("text", {
				...Y,
				fill: "black",
				children: "AD"
			})]
		}), /* @__PURE__ */ P("rect", {
			x: 3,
			y: 6,
			width: 18,
			height: 12,
			rx: 3,
			fill: "currentColor",
			mask: `url(#${r})`
		})]
	});
});
ie.displayName = "AudioDescriptionFilledIcon";
//#endregion
//#region src/components/F0VideoPlayer/components/CaptionsToggleIcons.tsx
var Z = D(({ animate: e, ...t }, n) => /* @__PURE__ */ F("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: n,
	...t,
	children: [
		/* @__PURE__ */ P("rect", {
			x: 3.5,
			y: 6.5,
			width: 17,
			height: 11,
			rx: 2.5,
			stroke: "currentColor",
			vectorEffect: "non-scaling-stroke"
		}),
		/* @__PURE__ */ P("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M7 10.75h8",
			vectorEffect: "non-scaling-stroke"
		}),
		/* @__PURE__ */ P("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M7 13.75h4.5",
			vectorEffect: "non-scaling-stroke"
		})
	]
}));
Z.displayName = "CaptionsLineIcon";
var ae = D(({ animate: e, ...t }, n) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: n,
	...t,
	children: /* @__PURE__ */ P("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M6 6h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm1.25 4.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z",
		vectorEffect: "non-scaling-stroke"
	})
}));
ae.displayName = "CaptionsFilledIcon";
//#endregion
//#region src/components/F0VideoPlayer/components/PlaybackRateMenu.tsx
function oe({ value: e, onChange: t, containerRef: n }) {
	let { t: i } = r(), [a, f] = N(!1);
	return /* @__PURE__ */ F(u, {
		open: a,
		onOpenChange: f,
		children: [/* @__PURE__ */ P(c, {
			asChild: !0,
			children: /* @__PURE__ */ P(s, {
				variant: "ghost",
				size: "sm",
				label: q(e),
				"aria-label": i("videoPlayer.playbackSpeed", { rate: q(e) })
			})
		}), /* @__PURE__ */ P(l, {
			container: n.current,
			side: "top",
			align: "end",
			sideOffset: 8,
			className: o("flex w-auto min-w-[7rem] flex-col gap-0.5 rounded-md border", "border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"),
			role: "menu",
			"aria-label": i("videoPlayer.playbackSpeedLabel"),
			onKeyDown: (e) => {
				let t = Array.from(e.currentTarget.querySelectorAll("[role=\"menuitemradio\"]"));
				if (t.length === 0) return;
				let n = t.indexOf(document.activeElement), r;
				switch (e.key) {
					case "ArrowDown":
						r = n < 0 ? 0 : (n + 1) % t.length;
						break;
					case "ArrowUp":
						r = n <= 0 ? t.length - 1 : n - 1;
						break;
					case "Home":
						r = 0;
						break;
					case "End":
						r = t.length - 1;
						break;
					default: return;
				}
				e.preventDefault(), t[r]?.focus();
			},
			children: V.map((n) => {
				let r = n === e;
				return /* @__PURE__ */ F("button", {
					type: "button",
					role: "menuitemradio",
					"aria-checked": r,
					className: o("relative flex items-center rounded-xs py-1.5 pl-8 pr-3", "cursor-pointer border-none bg-transparent text-left text-sm font-medium tabular-nums", "text-f1-foreground transition-colors hover:bg-f1-background-secondary", "focus-visible:bg-f1-background-secondary focus-visible:outline-none", "[&_svg]:h-3.5 [&_svg]:w-3.5"),
					onClick: () => {
						t(n), f(!1);
					},
					children: [r && /* @__PURE__ */ P("span", {
						className: "absolute left-2.5 inline-flex items-center",
						children: /* @__PURE__ */ P(d, {})
					}), q(n)]
				}, n);
			})
		})]
	});
}
//#endregion
//#region src/components/F0VideoPlayer/components/SettingsMenu.tsx
var Q = "off", se = "py-2 pr-4 text-base font-medium", ce = "gap-2 py-2 pl-3 pr-2 text-base font-medium", le = "max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[13rem] overflow-y-auto p-1";
function $({ icon: e, label: t, container: r, options: i, value: a, onLanguageChange: o, on: s, onOff: c, offLabel: l }) {
	let u = c !== void 0, d = i.find((e) => e.locale === a), f = u && !s ? l : d ? z(d) : l;
	return /* @__PURE__ */ F(E, { children: [/* @__PURE__ */ F(te, {
		className: ce,
		children: [
			/* @__PURE__ */ P(n, { icon: e }),
			/* @__PURE__ */ P("span", {
				className: "flex-1",
				children: t
			}),
			/* @__PURE__ */ P("span", {
				className: "text-f1-foreground-secondary",
				children: f
			})
		]
	}), /* @__PURE__ */ P(C, {
		container: r ?? void 0,
		children: /* @__PURE__ */ P(ee, {
			className: le,
			children: /* @__PURE__ */ F(T, {
				value: u ? s ? a : Q : a,
				onValueChange: (e) => u && e === Q ? c() : o(e),
				children: [i.map((e) => /* @__PURE__ */ P(S, {
					value: e.locale,
					className: se,
					children: z(e)
				}, e.locale)), u && /* @__PURE__ */ P(S, {
					value: Q,
					className: se,
					children: l
				})]
			})
		})
	})] });
}
function ue({ containerRef: e, audioLanguages: t, audioLanguage: n, onAudioLanguageChange: i, captionLanguages: a, captionLanguage: o, captionsOn: c, onCaptionLanguageChange: l, onCaptionsOff: u, audioDescriptionLanguages: d, audioDescriptionLanguage: f, audioDescriptionOn: m, onAudioDescriptionLanguageChange: h, onAudioDescriptionOff: _ }) {
	let { t: v } = r(), y = e.current, b = v("videoPlayer.off");
	return /* @__PURE__ */ F(re, { children: [/* @__PURE__ */ P(w, {
		asChild: !0,
		children: /* @__PURE__ */ P(s, {
			variant: "ghost",
			size: "sm",
			hideLabel: !0,
			icon: g,
			label: v("videoPlayer.settings")
		})
	}), /* @__PURE__ */ F(ne, {
		container: y,
		side: "top",
		align: "end",
		className: le,
		children: [
			t.length > 1 && /* @__PURE__ */ P($, {
				icon: p,
				label: v("videoPlayer.audio"),
				container: y,
				options: t,
				value: n,
				onLanguageChange: i,
				offLabel: b
			}),
			a.length > 1 && /* @__PURE__ */ P($, {
				icon: Z,
				label: v("videoPlayer.subtitles"),
				container: y,
				options: a,
				value: o,
				on: c,
				onLanguageChange: l,
				onOff: u,
				offLabel: b
			}),
			d.length > 1 && /* @__PURE__ */ P($, {
				icon: X,
				label: v("videoPlayer.audioDescription"),
				container: y,
				options: d,
				value: f,
				on: m,
				onLanguageChange: h,
				onOff: _,
				offLabel: b
			})
		]
	})] });
}
function de(e) {
	return e.audioLanguages > 1 || e.captionLanguages > 1 || e.audioDescriptionLanguages > 1;
}
//#endregion
//#region src/components/F0VideoPlayer/components/Seekbar.tsx
function fe({ currentTime: e, duration: t, markerTime: n, blockSeekPastMarker: i = !1, onSeek: s }) {
	let { t: c } = r(), l = M(null), [u, d] = N(!1), [f, p] = N(null), m = t > 0 ? Math.min(1, e / t) : 0, h = n !== void 0 && t > 0 ? Math.min(1, n / t) : 0, g = n !== void 0 && t > 0 && n > 0 && n < t - .25 && e < n - .25, _ = (e) => {
		let t = l.current;
		if (!t) return 0;
		let n = t.getBoundingClientRect();
		return Math.max(0, Math.min(1, (e - n.left) / n.width));
	}, v = (e) => {
		t && s(_(e) * t);
	}, y = (e) => {
		t && (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), d(!0), v(e.clientX));
	}, b = (e) => {
		t && (p(_(e.clientX)), u && v(e.clientX));
	}, x = (e) => {
		u && (d(!1), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
	}, S = f !== null && i && n !== void 0 && f > h;
	return /* @__PURE__ */ F("div", {
		ref: l,
		className: o("relative flex h-4 flex-1 items-center rounded-sm", "cursor-pointer touch-none", a()),
		role: "slider",
		tabIndex: 0,
		"aria-label": c("videoPlayer.seekLabel"),
		"aria-valuemin": 0,
		"aria-valuemax": t || 0,
		"aria-valuenow": e,
		"aria-valuetext": c("videoPlayer.timeProgress", {
			current: K(e),
			total: K(t)
		}),
		onPointerDown: y,
		onPointerMove: b,
		onPointerUp: x,
		onPointerCancel: x,
		onLostPointerCapture: () => d(!1),
		onPointerLeave: () => p(null),
		onKeyDown: (n) => {
			if (!t) return;
			let r = null;
			switch (n.key) {
				case "ArrowLeft":
					r = Math.max(0, e - 5);
					break;
				case "ArrowRight":
					r = Math.min(t, e + 5);
					break;
				case "Home":
					r = 0;
					break;
				case "End":
					r = t;
					break;
				default: return;
			}
			n.preventDefault(), n.stopPropagation(), s(r);
		},
		children: [
			/* @__PURE__ */ P("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
			/* @__PURE__ */ P("div", {
				className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
				style: { width: `${m * 100}%` }
			}),
			g && /* @__PURE__ */ P("div", {
				className: "pointer-events-none absolute z-[1] h-2.5 w-0.5 -translate-x-px bg-f1-foreground/95",
				style: { left: `${h * 100}%` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ P("div", {
				className: "pointer-events-none absolute z-[2] h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]",
				style: { left: `${m * 100}%` }
			}),
			S && /* @__PURE__ */ P("div", { className: "absolute inset-0 cursor-not-allowed" })
		]
	});
}
//#endregion
//#region src/components/F0VideoPlayer/components/VolumeControl.tsx
function pe(e, t) {
	return t || e === 0 ? y : e <= .5 ? _ : v;
}
function me({ volume: e, isMuted: t, onToggleMute: n, onVolumeChange: i, silent: a = !1 }) {
	let { t: o } = r(), c = t || e === 0;
	return a ? /* @__PURE__ */ P(s, {
		variant: "ghost",
		size: "sm",
		hideLabel: !0,
		disabled: !0,
		icon: y,
		label: o("videoPlayer.noAudio")
	}) : /* @__PURE__ */ F("div", {
		className: "flex items-center gap-1",
		children: [/* @__PURE__ */ P(s, {
			variant: "ghost",
			size: "sm",
			hideLabel: !0,
			icon: pe(e, c),
			label: o(c ? "videoPlayer.unmute" : "videoPlayer.mute"),
			onClick: n
		}), /* @__PURE__ */ P(he, {
			value: c ? 0 : e,
			onChange: i
		})]
	});
}
function he({ value: e, onChange: t }) {
	let { t: n } = r(), i = M(null), [s, c] = N(!1), l = Math.max(0, Math.min(1, e)), u = (e) => {
		let t = i.current;
		if (!t) return 0;
		let n = t.getBoundingClientRect(), r = n.width - 12;
		return r <= 0 ? 0 : Math.max(0, Math.min(1, (e - n.left - 6) / r));
	}, d = (e) => {
		e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), c(!0), t(u(e.clientX));
	}, f = (e) => {
		s && t(u(e.clientX));
	}, p = (e) => {
		s && (c(!1), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
	};
	return /* @__PURE__ */ F("div", {
		ref: i,
		className: o("relative flex h-4 w-[60px] items-center rounded-sm", "cursor-pointer touch-none", a()),
		role: "slider",
		tabIndex: 0,
		"aria-label": n("videoPlayer.volume"),
		"aria-valuemin": 0,
		"aria-valuemax": 1,
		"aria-valuenow": Number(l.toFixed(2)),
		"aria-valuetext": `${Math.round(l * 100)}%`,
		onPointerDown: d,
		onPointerMove: f,
		onPointerUp: p,
		onPointerCancel: p,
		onLostPointerCapture: () => c(!1),
		onKeyDown: (e) => {
			let n = null;
			switch (e.key) {
				case "ArrowRight":
				case "ArrowUp":
					n = Math.min(1, l + H);
					break;
				case "ArrowLeft":
				case "ArrowDown":
					n = Math.max(0, l - H);
					break;
				case "Home":
					n = 0;
					break;
				case "End":
					n = 1;
					break;
				default: return;
			}
			e.preventDefault(), e.stopPropagation(), t(n);
		},
		children: [
			/* @__PURE__ */ P("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
			/* @__PURE__ */ P("div", {
				className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
				style: { width: `calc(12px + (100% - 12px) * ${l})` }
			}),
			/* @__PURE__ */ P("div", {
				className: "pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]",
				style: { left: `calc(6px + (100% - 12px) * ${l})` }
			})
		]
	});
}
//#endregion
//#region src/components/F0VideoPlayer/components/Controls.tsx
function ge({ isPlaying: e, currentTime: t, duration: n, volume: i, isMuted: a, playbackRate: c, isFullscreen: l, markerTime: u, blockSeekPastMarker: d, containerRef: p, captionsAvailable: g, captionsOn: _, audioDescriptionAvailable: v, audioDescriptionOn: y, silent: S, persist: ee, audioLanguages: te, audioLanguage: ne, onAudioLanguageChange: C, captionLanguages: w, captionLanguage: T, onCaptionLanguageChange: re, onCaptionsOff: E, audioDescriptionLanguages: D, audioDescriptionLanguage: O, onAudioDescriptionLanguageChange: k, onAudioDescriptionOff: A, onTogglePlay: j, onToggleMute: M, onVolumeChange: N, onPlaybackRateChange: I, onToggleFullscreen: L, onToggleCaptions: R, onToggleAudioDescription: z, onSeek: B, download: V }) {
	let { t: H } = r(), U = g && w.length <= 1, W = v && D.length <= 1, G = de({
		audioLanguages: te.length,
		captionLanguages: w.length,
		audioDescriptionLanguages: D.length
	});
	return /* @__PURE__ */ F("div", {
		className: o("dark absolute inset-x-0 bottom-0 z-[2] flex select-none items-center gap-2", "rounded-b-[inherit] bg-gradient-to-t from-[#000000f2] via-[#000000b3] to-transparent px-3 py-3", "[text-shadow:0_1px_2px_rgba(0,0,0,0.55)] [&_svg]:drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]", "transition-opacity duration-200 motion-reduce:transition-none", !e || ee ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"),
		children: [
			/* @__PURE__ */ P(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: e ? b : x,
				label: H(e ? "videoPlayer.pause" : "videoPlayer.play"),
				onClick: j
			}),
			/* @__PURE__ */ P(fe, {
				currentTime: t,
				duration: n,
				markerTime: u,
				blockSeekPastMarker: d,
				onSeek: B
			}),
			/* @__PURE__ */ F("span", {
				className: "min-w-[80px] whitespace-nowrap text-center text-base font-medium tabular-nums text-f1-foreground",
				children: [
					K(t),
					" / ",
					K(n)
				]
			}),
			/* @__PURE__ */ P(me, {
				volume: i,
				isMuted: a,
				onToggleMute: M,
				onVolumeChange: N,
				silent: S
			}),
			/* @__PURE__ */ P(oe, {
				value: c,
				onChange: I,
				containerRef: p
			}),
			U && /* @__PURE__ */ P(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: _ ? ae : Z,
				label: H("videoPlayer.captions"),
				"aria-pressed": _,
				onClick: R
			}),
			W && /* @__PURE__ */ P(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: y ? ie : X,
				label: H("videoPlayer.audioDescription"),
				"aria-pressed": y,
				onClick: z
			}),
			G && /* @__PURE__ */ P(ue, {
				containerRef: p,
				audioLanguages: te,
				audioLanguage: ne,
				onAudioLanguageChange: C,
				captionLanguages: w,
				captionLanguage: T,
				captionsOn: _,
				onCaptionLanguageChange: re,
				onCaptionsOff: E,
				audioDescriptionLanguages: D,
				audioDescriptionLanguage: O,
				audioDescriptionOn: y,
				onAudioDescriptionLanguageChange: k,
				onAudioDescriptionOff: A
			}),
			V && /* @__PURE__ */ P(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: f,
				label: V.label,
				onClick: V.onClick
			}),
			/* @__PURE__ */ P(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: l ? h : m,
				label: H(l ? "videoPlayer.exitFullscreen" : "videoPlayer.enterFullscreen"),
				onClick: L
			})
		]
	});
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useVttSource.ts
var _e = (e) => e.trimStart().startsWith("WEBVTT");
function ve(e) {
	let t = e !== void 0 && _e(e), [n, r] = N();
	return k(() => {
		if (e === void 0 || !_e(e)) {
			r(void 0);
			return;
		}
		let t = URL.createObjectURL(new Blob([e], { type: "text/vtt" }));
		return r(t), () => URL.revokeObjectURL(t);
	}, [e]), {
		trackSrc: e === void 0 ? void 0 : t ? n : e,
		needsCrossOrigin: e !== void 0 && !t
	};
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useAudioDescription.ts
var ye = "descriptions";
function be(e, { enabled: t, describedSrc: n, descriptions: r }) {
	let i = n !== void 0, { trackSrc: a, needsCrossOrigin: o } = ve(r), [s, c] = N(!1), l = i || r !== void 0 || s, [u, d] = N(), f = M(!1);
	return k(() => {
		if (!e) return;
		let n = e.textTracks, a = typeof window < "u" && "speechSynthesis" in window, o = t && !i && a, s = () => {
			f.current && (f.current = !1, e.play().catch(() => {}));
		}, l = (e) => {
			window.speechSynthesis.cancel();
			let t = new SpeechSynthesisUtterance(e);
			t.onend = s, t.onerror = s, window.speechSynthesis.speak(t);
		}, u = /* @__PURE__ */ new WeakSet(), p = [], m = (t) => {
			if (t.kind !== ye || (t.mode = "hidden", u.has(t)) || typeof t.addEventListener != "function") return;
			u.add(t);
			let n = () => {
				let n = t.activeCues?.[0]?.text || void 0;
				d(n), o && n && (e.paused || (e.pause(), f.current = !0), l(n));
			};
			t.addEventListener("cuechange", n), p.push(() => t.removeEventListener("cuechange", n));
		}, h = () => {
			let e = !1;
			for (let t = 0; t < n.length; t++) {
				let i = n[t];
				i.kind === ye && (r === void 0 && (e = !0), m(i));
			}
			c(e);
		};
		h();
		let g = typeof n.addEventListener == "function", _ = () => h();
		return g && (n.addEventListener("addtrack", _), n.addEventListener("removetrack", _)), () => {
			g && (n.removeEventListener("addtrack", _), n.removeEventListener("removetrack", _)), p.forEach((e) => e()), a && window.speechSynthesis.cancel(), s();
		};
	}, [
		e,
		t,
		i,
		r,
		a
	]), j(() => ({
		trackSrc: a,
		needsCrossOrigin: o,
		available: l,
		activeCue: u
	}), [
		a,
		o,
		l,
		u
	]);
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useFullscreen.ts
function xe({ targetRef: e }) {
	let [t, n] = N(!1);
	return k(() => {
		let t = () => {
			n(document.fullscreenElement === e.current);
		};
		return document.addEventListener("fullscreenchange", t), () => {
			document.removeEventListener("fullscreenchange", t);
		};
	}, [e]), {
		isFullscreen: t,
		toggleFullscreen: O(async () => {
			let t = e.current;
			if (t) try {
				document.fullscreenElement ? await document.exitFullscreen() : await t.requestFullscreen();
			} catch {}
		}, [e])
	};
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useKeyboardShortcuts.ts
function Se({ videoRef: e, seek: t, togglePlay: n, toggleMute: r, toggleFullscreen: i, setVolume: a }) {
	return O((o) => {
		let s = o.target;
		if (s instanceof HTMLElement && (s.closest("button, a, input, textarea, select, [role=\"button\"], [contenteditable=\"true\"]") || s.closest("[role=\"menu\"], [role^=\"menuitem\"]") || s.getAttribute("role") === "slider")) return;
		let c = e.current;
		if (c) switch (o.key.length === 1 ? o.key.toLowerCase() : o.key) {
			case " ":
				o.preventDefault(), n();
				return;
			case "ArrowLeft":
				o.preventDefault(), t(Math.max(0, c.currentTime - 5));
				return;
			case "ArrowRight": {
				o.preventDefault();
				let e = c.duration || c.currentTime + 5;
				t(Math.min(e, c.currentTime + 5));
				return;
			}
			case "ArrowUp":
				o.preventDefault(), a(Math.min(1, c.volume + H));
				return;
			case "ArrowDown":
				o.preventDefault(), a(Math.max(0, c.volume - H));
				return;
			case "m":
				o.preventDefault(), r();
				return;
			case "f":
				o.preventDefault(), i();
				return;
			default: return;
		}
	}, [
		e,
		t,
		n,
		r,
		i,
		a
	]);
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useRestrictForwardSeek.ts
function Ce({ video: e, enabled: t, resetKey: n }) {
	let r = M(0), i = M(0), a = M(t);
	a.current = t;
	let [o, s] = N(0);
	return k(() => {
		r.current = 0, i.current = 0, s(0);
	}, [n]), k(() => {
		if (!e) return;
		let t = () => {
			a.current && e.currentTime > r.current + .25 && (e.currentTime = r.current);
		}, n = () => {
			s((e) => {
				let t = r.current;
				return t - e >= 1 ? t : e;
			});
		}, o = () => {
			s((e) => Math.max(e, r.current));
		}, c = () => {
			let a = e.currentTime - i.current;
			a >= 0 && a < 1 && e.currentTime > r.current && (r.current = e.currentTime, n()), t(), i.current = e.currentTime;
		}, l = () => {
			t(), o();
		};
		return e.addEventListener("timeupdate", c), e.addEventListener("seeking", l), e.addEventListener("seeked", l), e.addEventListener("pause", o), e.addEventListener("ended", o), () => {
			e.removeEventListener("timeupdate", c), e.removeEventListener("seeking", l), e.removeEventListener("seeked", l), e.removeEventListener("pause", o), e.removeEventListener("ended", o);
		};
	}, [e]), {
		maxWatchedTime: o,
		clampSeek: O((e) => a.current ? Math.min(e, r.current) : e, [])
	};
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useVideoCaptions.ts
var we = /* @__PURE__ */ new Set(["captions", "subtitles"]), Te = 2, Ee = 3;
function De(e, t) {
	let { trackSrc: n, needsCrossOrigin: r } = ve(t), [i, a] = N(!1), [o, s] = N(!1), [c, l] = N(!1), u = o || t !== void 0 && !c;
	return k(() => {
		l(!1), s(!1);
	}, [n]), k(() => {
		if (!e) return;
		let t = e.textTracks, n = e.querySelector("track[kind=\"captions\"]"), r = () => {
			let e = !1;
			for (let n = 0; n < t.length; n++) {
				let r = t[n];
				we.has(r.kind) && (r.mode = i ? "showing" : "hidden", r.cues && r.cues.length > 0 && (e = !0));
			}
			if (s(e), n) {
				if (n.readyState === Ee) l(!0);
				else if (n.readyState === Te) {
					let e = n.track?.cues;
					l(!e || e.length === 0);
				}
			}
		};
		r();
		let a = [];
		if (n) {
			let e = () => r(), t = () => l(!0);
			n.addEventListener("load", e), n.addEventListener("error", t), a.push(() => {
				n.removeEventListener("load", e), n.removeEventListener("error", t);
			});
		}
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			if (!we.has(n.kind) || typeof n.addEventListener != "function") continue;
			let i = () => r();
			n.addEventListener("cuechange", i), a.push(() => n.removeEventListener("cuechange", i));
		}
		let o = typeof t.addEventListener == "function", c = () => r();
		return o && (t.addEventListener("addtrack", c), t.addEventListener("removetrack", c)), e.addEventListener("loadedmetadata", r), () => {
			a.forEach((e) => e()), o && (t.removeEventListener("addtrack", c), t.removeEventListener("removetrack", c)), e.removeEventListener("loadedmetadata", r);
		};
	}, [
		e,
		t,
		i,
		n
	]), j(() => ({
		trackSrc: n,
		needsCrossOrigin: r,
		available: u,
		showing: i,
		toggle: () => a((e) => !e)
	}), [
		n,
		r,
		u,
		i
	]);
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useVideoCompletion.ts
function Oe(e) {
	return e - Math.min(10, e * G);
}
function ke({ video: e, onComplete: t, resetKey: n }) {
	let r = M(t);
	r.current = t;
	let i = M(!1), a = !!t;
	k(() => {
		i.current = !1;
	}, [n]), k(() => {
		if (!e || !a) return;
		let t = () => {
			i.current || !e.duration || e.currentTime >= Oe(e.duration) && (i.current = !0, r.current?.(e));
		};
		return e.addEventListener("timeupdate", t), e.addEventListener("ended", t), () => {
			e.removeEventListener("timeupdate", t), e.removeEventListener("ended", t);
		};
	}, [e, a]);
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useVideoMilestones.ts
function Ae({ video: e, onMilestone: t, resetKey: n }) {
	let r = M(t);
	r.current = t;
	let i = M(/* @__PURE__ */ new Set()), a = !!t;
	k(() => {
		i.current.clear();
	}, [n]), k(() => {
		if (!e || !a) return;
		let t = () => {
			if (!e.duration) return;
			let t = Math.round(e.currentTime / e.duration * 100);
			for (let n of U) i.current.has(n) || t >= n && (i.current.add(n), r.current?.(n, e));
		};
		return e.addEventListener("timeupdate", t), () => {
			e.removeEventListener("timeupdate", t);
		};
	}, [e, a]);
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useVideoState.ts
function je(e) {
	let t = M(null), [n, r] = N(null), i = M(0), a = O((e) => {
		t.current = e, r(e);
	}, []), [o, s] = N(!1), [c, l] = N(!1), [u, d] = N(0), [f, p] = N(0), [m, h] = N(1), [g, _] = N(!1), [v, y] = N(1);
	return k(() => {
		i.current = 0, t.current && (t.current.playbackRate = 1), s(!1), l(!1), d(0), p(0), y(1);
	}, [e]), k(() => {
		let e = n;
		if (!e) return;
		let t = () => l(!0), r = () => l(!1), a = () => l(!1), o = () => {
			h(e.volume), _(e.muted);
		}, s = () => p(e.duration || 0), c = () => {
			J(e.playbackRate) && y(e.playbackRate);
		}, u = () => {
			let t = performance.now();
			t - i.current >= 250 && (i.current = t, d(e.currentTime));
		};
		return e.addEventListener("play", t), e.addEventListener("pause", r), e.addEventListener("ended", a), e.addEventListener("volumechange", o), e.addEventListener("loadedmetadata", s), e.addEventListener("ratechange", c), e.addEventListener("timeupdate", u), e.readyState >= 1 && e.duration && p(e.duration), () => {
			e.removeEventListener("play", t), e.removeEventListener("pause", r), e.removeEventListener("ended", a), e.removeEventListener("volumechange", o), e.removeEventListener("loadedmetadata", s), e.removeEventListener("ratechange", c), e.removeEventListener("timeupdate", u);
		};
	}, [n]), {
		videoRef: t,
		videoElement: n,
		setVideoNode: a,
		videoLoaded: o,
		isPlaying: c,
		currentTime: u,
		duration: f,
		volume: m,
		isMuted: g,
		playbackRate: v,
		setVideoLoaded: s,
		togglePlay: O(() => {
			let e = t.current;
			e && (e.paused || e.ended ? e.play().catch(() => {}) : e.pause());
		}, []),
		toggleMute: O(() => {
			let e = t.current;
			e && (e.muted = !e.muted);
		}, []),
		setVolume: O((e) => {
			let n = t.current;
			if (!n) return;
			let r = Math.max(0, Math.min(1, e));
			n.volume = r, n.muted = r === 0;
		}, []),
		setPlaybackRate: O((e) => {
			let n = t.current;
			n && (n.playbackRate = e);
		}, []),
		seekTo: O((e) => {
			let n = t.current;
			if (!n) return;
			let r = Math.max(0, Math.min(e, n.duration || e));
			n.currentTime = r, d(r);
		}, [])
	};
}
//#endregion
//#region src/components/F0VideoPlayer/hooks/useVideoTracking.ts
function Me({ video: e, onTrackAction: t }) {
	let n = M(t);
	n.current = t;
	let r = !!t;
	k(() => {
		if (!e || !r) return;
		let t = null, i = () => {
			t &&= (clearInterval(t), null);
		}, a = () => {
			n.current?.(), i(), t = setInterval(() => {
				n.current?.();
			}, W);
		}, o = () => {
			n.current?.(), i();
		}, s = () => i();
		return e.addEventListener("play", a), e.addEventListener("pause", o), e.addEventListener("ended", s), () => {
			i(), e.removeEventListener("play", a), e.removeEventListener("pause", o), e.removeEventListener("ended", s);
		};
	}, [e, r]);
}
//#endregion
//#region src/components/F0VideoPlayer/internal.tsx
function Ne({ src: e, poster: n, ariaLabel: i, silent: s = !1, persistControls: c = !1, content: l, defaultLanguage: u, autoPlay: d = !1, autoFocus: f = !1, download: p, restrictForwardSeek: m = !1, onTrackAction: h, onMilestone: g, onComplete: _, ...v }) {
	let { t: y } = r(), b = M(null), S = j(() => R(e), [e]), [ee, te] = N(() => B(S, u)), ne = S.some((e) => e.locale === ee) ? ee : B(S, u), C = L(e, ne) ?? "", w = j(() => R(l?.captions), [l?.captions]), [T, re] = N(() => B(w, u)), E = w.some((e) => e.locale === T) ? T : B(w, u), D = L(l?.captions, E), A = j(() => R(l?.descriptions, l?.describedSrc), [l?.descriptions, l?.describedSrc]), [I, z] = N(() => B(A, u)), V = A.some((e) => e.locale === I) ? I : B(A, u), H = L(l?.descriptions, V), U = L(l?.describedSrc, V), [W, G] = N(!1), K = W && U ? U : C, q = je(K), J = De(q.videoElement, D), Y = be(q.videoElement, {
		enabled: W,
		describedSrc: U,
		descriptions: H
	}), X = O(() => {
		let e = q.videoRef.current;
		if (!e) return;
		let t = e.currentTime, n = !e.paused, r = () => {
			e.currentTime = t, n && e.play().catch(() => {}), e.removeEventListener("loadedmetadata", r);
		};
		e.addEventListener("loadedmetadata", r);
	}, [q.videoRef]), ie = O((e) => {
		X(), te(e);
	}, [X]), Z = O(() => {
		U && X(), G((e) => !e);
	}, [U, X]), ae = O((e) => {
		re(e), J.showing || J.toggle();
	}, [J]), oe = O(() => {
		J.showing && J.toggle();
	}, [J]), Q = O((e) => {
		U && X(), z(e), G(!0);
	}, [U, X]), se = O(() => {
		U && X(), G(!1);
	}, [U, X]);
	Me({
		video: q.videoElement,
		onTrackAction: h
	}), Ae({
		video: q.videoElement,
		onMilestone: g,
		resetKey: C
	}), ke({
		video: q.videoElement,
		onComplete: _,
		resetKey: C
	});
	let { maxWatchedTime: ce, clampSeek: le } = Ce({
		video: q.videoElement,
		enabled: m,
		resetKey: C
	}), $ = O((e) => q.seekTo(le(e)), [q, le]), { isFullscreen: ue, toggleFullscreen: de } = xe({ targetRef: b }), fe = O(() => {}, []), pe = !!(W && U);
	k(() => {
		let e = q.videoRef.current;
		s && e && (e.muted = !pe);
	}, [
		s,
		pe,
		q.videoElement,
		q.videoRef
	]);
	let me = Se({
		videoRef: q.videoRef,
		seek: $,
		togglePlay: q.togglePlay,
		toggleMute: s ? fe : q.toggleMute,
		toggleFullscreen: de,
		setVolume: s ? fe : q.setVolume
	});
	k(() => {
		f && b.current?.focus({ preventScroll: !0 });
	}, [f]);
	let he = (e) => e.preventDefault();
	return /* @__PURE__ */ F("div", {
		ref: b,
		className: o("group relative h-full w-full overflow-hidden rounded-[inherit] bg-f1-foreground dark:bg-f1-background", "[&:fullscreen]:h-screen [&:fullscreen]:w-screen [&:fullscreen]:rounded-none", a()),
		role: "region",
		"aria-label": i ?? y("videoPlayer.regionLabel"),
		tabIndex: 0,
		onKeyDown: me,
		"data-video-captions": s ? "no-audio" : J.available ? "available" : "missing",
		...v,
		children: [
			/* @__PURE__ */ F("video", {
				ref: q.setVideoNode,
				autoPlay: d,
				playsInline: !0,
				disablePictureInPicture: !0,
				disableRemotePlayback: !0,
				draggable: !1,
				onContextMenu: he,
				onClick: q.togglePlay,
				src: K,
				poster: n,
				crossOrigin: J.needsCrossOrigin || Y.needsCrossOrigin ? "anonymous" : void 0,
				onLoadedData: () => q.setVideoLoaded(!0),
				className: o("block h-full w-full cursor-pointer rounded-[inherit] object-contain transition-opacity duration-300", "[&::-webkit-media-text-track-container]:![transform:translateY(-3.5rem)]"),
				style: { opacity: q.videoLoaded || n ? 1 : 0 },
				children: [J.trackSrc && /* @__PURE__ */ P("track", {
					kind: "captions",
					src: J.trackSrc,
					label: y("videoPlayer.captions"),
					default: !1
				}), Y.trackSrc && /* @__PURE__ */ P("track", {
					kind: "descriptions",
					src: Y.trackSrc,
					label: y("videoPlayer.audioDescription"),
					default: !1
				})]
			}),
			!q.isPlaying && /* @__PURE__ */ P("div", {
				"aria-hidden": !0,
				"data-video-play-overlay": !0,
				className: "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center",
				children: /* @__PURE__ */ P("button", {
					type: "button",
					tabIndex: -1,
					onClick: q.togglePlay,
					className: "pointer-events-auto flex size-14 items-center justify-center rounded-full bg-f1-foreground/70 pl-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-150 hover:scale-105 motion-reduce:transition-none dark:bg-f1-background/70 [&_svg]:size-7",
					children: /* @__PURE__ */ P(t, {
						icon: x,
						size: "lg",
						color: "#fff"
					})
				})
			}),
			J.showing && Y.activeCue && /* @__PURE__ */ P("div", {
				"aria-hidden": !0,
				className: "dark pointer-events-none absolute inset-x-0 top-0 z-[2] flex justify-center p-3",
				children: /* @__PURE__ */ F("p", {
					className: "max-w-[90%] rounded-md bg-f1-background/70 px-2 py-1 text-center text-base italic text-f1-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]",
					children: [/* @__PURE__ */ F("span", {
						className: "pr-1 font-medium not-italic opacity-70",
						children: [
							"[",
							y("videoPlayer.audioDescription"),
							"]"
						]
					}), Y.activeCue]
				})
			}),
			/* @__PURE__ */ P("span", {
				className: "sr-only",
				"aria-live": "polite",
				children: q.isPlaying ? y("videoPlayer.playing") : y("videoPlayer.paused")
			}),
			q.videoLoaded && /* @__PURE__ */ P(ge, {
				isPlaying: q.isPlaying,
				currentTime: q.currentTime,
				duration: q.duration,
				volume: q.volume,
				isMuted: q.isMuted,
				playbackRate: q.playbackRate,
				isFullscreen: ue,
				markerTime: m ? ce : void 0,
				blockSeekPastMarker: m,
				containerRef: b,
				captionsAvailable: J.available,
				captionsOn: J.showing,
				audioDescriptionAvailable: Y.available,
				audioDescriptionOn: W,
				silent: s,
				persist: c,
				audioLanguages: S,
				audioLanguage: ne,
				onAudioLanguageChange: ie,
				captionLanguages: w,
				captionLanguage: E,
				onCaptionLanguageChange: ae,
				onCaptionsOff: oe,
				audioDescriptionLanguages: A,
				audioDescriptionLanguage: V,
				onAudioDescriptionLanguageChange: Q,
				onAudioDescriptionOff: se,
				onTogglePlay: q.togglePlay,
				onToggleMute: q.toggleMute,
				onVolumeChange: q.setVolume,
				onPlaybackRateChange: q.setPlaybackRate,
				onToggleFullscreen: () => void de(),
				onToggleCaptions: J.toggle,
				onToggleAudioDescription: Z,
				onSeek: $,
				download: p
			})
		]
	});
}
//#endregion
//#region src/components/F0VideoPlayer/F0VideoPlayer.tsx
var Pe = e(i("F0VideoPlayer", Ne));
//#endregion
export { L as a, z as i, R as n, B as r, Pe as t };
