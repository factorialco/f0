import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Check.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../F0Button/F0Button.js";
import { Popover as i, PopoverContent as a, PopoverTrigger as o } from "../../../ui/popover.js";
import { formatPlaybackRate as s, playbackRates as c } from "../utils.js";
import { useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/components/PlaybackRateMenu.tsx
function f({ value: f, onChange: p, containerRef: m }) {
	let { t: h } = n(), [g, _] = l(!1);
	return /* @__PURE__ */ d(i, {
		open: g,
		onOpenChange: _,
		children: [/* @__PURE__ */ u(o, {
			asChild: !0,
			children: /* @__PURE__ */ u(r, {
				variant: "ghost",
				size: "sm",
				label: s(f),
				"aria-label": h("videoPlayer.playbackSpeed", { rate: s(f) })
			})
		}), /* @__PURE__ */ u(a, {
			container: m.current,
			side: "top",
			align: "end",
			sideOffset: 8,
			className: e("flex w-auto min-w-[7rem] flex-col gap-0.5 rounded-md border", "border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"),
			role: "menu",
			"aria-label": h("videoPlayer.playbackSpeedLabel"),
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
			children: c.map((n) => {
				let r = n === f;
				return /* @__PURE__ */ d("button", {
					type: "button",
					role: "menuitemradio",
					"aria-checked": r,
					className: e("relative flex items-center rounded-xs py-1.5 pl-8 pr-3", "cursor-pointer border-none bg-transparent text-left text-sm font-medium tabular-nums", "text-f1-foreground transition-colors hover:bg-f1-background-secondary", "focus-visible:bg-f1-background-secondary focus-visible:outline-none", "[&_svg]:h-3.5 [&_svg]:w-3.5"),
					onClick: () => {
						p(n), _(!1);
					},
					children: [r && /* @__PURE__ */ u("span", {
						className: "absolute left-2.5 inline-flex items-center",
						children: /* @__PURE__ */ u(t, {})
					}), s(n)]
				}, n);
			})
		})]
	});
}
//#endregion
export { f as PlaybackRateMenu };
