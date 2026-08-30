import { F0Icon as e } from "../../F0Icon/F0Icon.js";
import t from "../../../icons/app/Globe.js";
import n from "../../../icons/app/Settings.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../../F0Button/F0Button.js";
import { DropdownMenu as a, DropdownMenuContent as o, DropdownMenuPortal as s, DropdownMenuRadioGroup as c, DropdownMenuRadioItem as l, DropdownMenuSub as u, DropdownMenuSubContent as d, DropdownMenuSubTrigger as f, DropdownMenuTrigger as p } from "../../../ui/dropdown-menu.js";
import { languageLabel as m } from "../../../lib/localized.js";
import { AudioDescriptionLineIcon as h } from "./AudioDescriptionToggleIcons.js";
import { CaptionsLineIcon as g } from "./CaptionsToggleIcons.js";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/components/SettingsMenu.tsx
var y = "off", b = "py-2 pr-4 text-base font-medium", x = "gap-2 py-2 pl-3 pr-2 text-base font-medium", S = "max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[13rem] overflow-y-auto p-1";
function C({ icon: t, label: n, container: r, options: i, value: a, onLanguageChange: o, on: p, onOff: h, offLabel: g }) {
	let C = h !== void 0, w = i.find((e) => e.locale === a), T = C && !p ? g : w ? m(w) : g;
	return /* @__PURE__ */ v(u, { children: [/* @__PURE__ */ v(f, {
		className: x,
		children: [
			/* @__PURE__ */ _(e, { icon: t }),
			/* @__PURE__ */ _("span", {
				className: "flex-1",
				children: n
			}),
			/* @__PURE__ */ _("span", {
				className: "text-f1-foreground-secondary",
				children: T
			})
		]
	}), /* @__PURE__ */ _(s, {
		container: r ?? void 0,
		children: /* @__PURE__ */ _(d, {
			className: S,
			children: /* @__PURE__ */ v(c, {
				value: C ? p ? a : y : a,
				onValueChange: (e) => C && e === y ? h() : o(e),
				children: [i.map((e) => /* @__PURE__ */ _(l, {
					value: e.locale,
					className: b,
					children: m(e)
				}, e.locale)), C && /* @__PURE__ */ _(l, {
					value: y,
					className: b,
					children: g
				})]
			})
		})
	})] });
}
function w({ containerRef: e, audioLanguages: s, audioLanguage: c, onAudioLanguageChange: l, captionLanguages: u, captionLanguage: d, captionsOn: f, onCaptionLanguageChange: m, onCaptionsOff: y, audioDescriptionLanguages: b, audioDescriptionLanguage: x, audioDescriptionOn: w, onAudioDescriptionLanguageChange: T, onAudioDescriptionOff: E }) {
	let { t: D } = r(), O = e.current, k = D("videoPlayer.off");
	return /* @__PURE__ */ v(a, { children: [/* @__PURE__ */ _(p, {
		asChild: !0,
		children: /* @__PURE__ */ _(i, {
			variant: "ghost",
			size: "sm",
			hideLabel: !0,
			icon: n,
			label: D("videoPlayer.settings")
		})
	}), /* @__PURE__ */ v(o, {
		container: O,
		side: "top",
		align: "end",
		className: S,
		children: [
			s.length > 1 && /* @__PURE__ */ _(C, {
				icon: t,
				label: D("videoPlayer.audio"),
				container: O,
				options: s,
				value: c,
				onLanguageChange: l,
				offLabel: k
			}),
			u.length > 1 && /* @__PURE__ */ _(C, {
				icon: g,
				label: D("videoPlayer.subtitles"),
				container: O,
				options: u,
				value: d,
				on: f,
				onLanguageChange: m,
				onOff: y,
				offLabel: k
			}),
			b.length > 1 && /* @__PURE__ */ _(C, {
				icon: h,
				label: D("videoPlayer.audioDescription"),
				container: O,
				options: b,
				value: x,
				on: w,
				onLanguageChange: T,
				onOff: E,
				offLabel: k
			})
		]
	})] });
}
function T(e) {
	return e.audioLanguages > 1 || e.captionLanguages > 1 || e.audioDescriptionLanguages > 1;
}
//#endregion
export { w as SettingsMenu, T as hasSettingsMenu };
