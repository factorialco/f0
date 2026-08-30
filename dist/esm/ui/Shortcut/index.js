import { useUserPlatform as e } from "../../lib/providers/user-platafform/UserPlatformProvider.js";
import { withDataTestId as t } from "../../lib/data-testid/index.js";
import { experimentalComponent as n } from "../../lib/experimental.js";
import { cn as r } from "../../lib/utils.js";
import { F0Icon as i } from "../../components/F0Icon/index.js";
import a from "../../icons/app/Windows.js";
import { useI18n as o } from "../../lib/providers/i18n/i18n-provider.js";
import { cva as s } from "cva";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/ui/Shortcut/index.tsx
var u = s({
	base: "flex h-5 min-w-[1ch] items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none",
	variants: { variant: {
		default: "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
		inverse: "border-f1-border-inverse text-f1-foreground-inverse-secondary"
	} },
	defaultVariants: { variant: "default" }
}), d = /* @__PURE__ */ new Set([
	"cmd",
	"option",
	"ctrl"
]), f = {
	mac: {
		cmd: "⌘",
		option: "⌥",
		ctrl: "⌃"
	},
	windows: {
		ctrl: "Ctrl",
		cmd: a,
		option: "Alt"
	},
	linux: {
		ctrl: "^",
		cmd: "Meta",
		option: "Alt"
	}
}, p = (e) => d.has(e);
function m({ keys: t, variant: n }) {
	let a = e(), s = o();
	if (a === "unknown" || a === "mobile") return null;
	let d = f[a];
	return /* @__PURE__ */ l("div", {
		className: "flex flex-wrap items-center gap-0.5",
		children: [/* @__PURE__ */ c("span", {
			className: "sr-only",
			children: s.shortcut
		}), t.map((e, t) => {
			let a = e.toLowerCase(), o = p(a), s = o ? d[a] : e, l = typeof s != "string";
			return /* @__PURE__ */ c("kbd", {
				className: r(u({ variant: n }), o ? "" : "uppercase", l ? "w-5 px-0.5" : "min-w-5 px-1"),
				children: l ? /* @__PURE__ */ c(i, {
					icon: s,
					size: "sm"
				}) : s
			}, t);
		})]
	});
}
var h = t(n("Shortcut", m));
//#endregion
export { h as Shortcut };
