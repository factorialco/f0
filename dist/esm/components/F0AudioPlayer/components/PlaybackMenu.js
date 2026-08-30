import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import n from "../../../icons/app/CheckCircle.js";
import r from "../../../icons/app/Ellipsis.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as a } from "../../F0Button/F0Button.js";
import { DropdownMenu as o, DropdownMenuContent as s, DropdownMenuItem as c, DropdownMenuLabel as l, DropdownMenuSeparator as u, DropdownMenuTrigger as d } from "../../../ui/dropdown-menu.js";
import { languageLabel as f } from "../../../lib/localized.js";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/F0AudioPlayer/components/PlaybackMenu.tsx
var g = ({ playbackRate: g, playbackRates: _, onRateChange: v, disabled: y, extraItems: b = [], audioLanguages: x = [], audioLanguage: S, onAudioLanguageChange: C }) => {
	let w = i(), T = _.length > 0, E = x.length > 1;
	return /* @__PURE__ */ h(o, { children: [/* @__PURE__ */ m(d, {
		asChild: !0,
		children: /* @__PURE__ */ m(a, {
			variant: "ghost",
			size: "sm",
			icon: r,
			label: w.audioPlayer.options,
			hideLabel: !0,
			disabled: y
		})
	}), /* @__PURE__ */ h(s, {
		align: "end",
		className: "flex min-w-44 flex-col gap-0.5",
		children: [
			T && /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(l, {
				className: "text-f1-foreground-secondary",
				children: w.audioPlayer.playbackSpeed
			}), _.map((r) => {
				let i = r === g;
				return /* @__PURE__ */ h(c, {
					onSelect: () => v(r),
					className: e("justify-between gap-3 px-3 text-sm text-f1-foreground", i && "before:absolute before:inset-x-1 before:inset-y-0 before:rounded before:bg-f1-background-selected-bold/10 before:content-[''] dark:before:bg-f1-background-selected-bold/20"),
					children: [/* @__PURE__ */ h("span", {
						className: "relative",
						children: [r, "x"]
					}), i && /* @__PURE__ */ m("span", {
						className: "relative flex text-f1-icon-selected",
						children: /* @__PURE__ */ m(t, {
							icon: n,
							size: "md"
						})
					})]
				}, r);
			})] }),
			E && /* @__PURE__ */ h(p, { children: [
				T && /* @__PURE__ */ m(u, {}),
				/* @__PURE__ */ m(l, {
					className: "text-f1-foreground-secondary",
					children: w.audioPlayer.audio
				}),
				x.map((r) => {
					let i = r.locale === S;
					return /* @__PURE__ */ h(c, {
						onSelect: () => C?.(r.locale),
						className: e("justify-between gap-3 px-3 text-sm text-f1-foreground", i && "before:absolute before:inset-x-1 before:inset-y-0 before:rounded before:bg-f1-background-selected-bold/10 before:content-[''] dark:before:bg-f1-background-selected-bold/20"),
						children: [/* @__PURE__ */ m("span", {
							className: "relative",
							children: f(r)
						}), i && /* @__PURE__ */ m("span", {
							className: "relative flex text-f1-icon-selected",
							children: /* @__PURE__ */ m(t, {
								icon: n,
								size: "md"
							})
						})]
					}, r.locale);
				})
			] }),
			b.length > 0 && /* @__PURE__ */ h(p, { children: [(T || E) && /* @__PURE__ */ m(u, {}), b.map((n) => /* @__PURE__ */ h(c, {
				onSelect: () => n.onClick(),
				className: e("gap-2 px-3 text-sm", n.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
				children: [n.icon && /* @__PURE__ */ m("span", {
					className: e("relative flex", n.critical ? "text-f1-icon-critical" : "text-f1-icon"),
					children: /* @__PURE__ */ m(t, {
						icon: n.icon,
						size: "md"
					})
				}), /* @__PURE__ */ m("span", {
					className: "relative",
					children: n.label
				})]
			}, n.label))] })
		]
	})] });
};
//#endregion
export { g as PlaybackMenu };
