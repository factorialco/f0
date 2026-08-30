import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { F0Icon as n } from "../../components/F0Icon/index.js";
import { cva as r } from "cva";
import { jsx as i } from "react/jsx-runtime";
//#region src/ui/IconBadge/index.tsx
var a = r({
	base: "flex shrink-0 items-center justify-center rounded-full",
	variants: {
		type: {
			neutral: "bg-transparent text-f1-icon",
			highlight: "text-f1-special-highlight",
			positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
			critical: "bg-f1-icon-critical text-f1-foreground-inverse",
			warning: "bg-f1-background-warning-bold text-f1-foreground-inverse"
		},
		size: {
			xs: "h-2.5 w-2.5",
			sm: "h-3 w-3",
			md: "h-5 w-5",
			lg: "h-6 w-6"
		}
	},
	defaultVariants: {
		type: "neutral",
		size: "md"
	}
}), o = {
	xs: "xs",
	sm: "xs",
	md: "sm",
	lg: "md"
}, s = e(t("Badge", ({ type: e, size: t = "md", icon: r }) => /* @__PURE__ */ i("div", {
	className: a({
		type: e,
		size: t
	}),
	children: /* @__PURE__ */ i(n, {
		icon: r,
		size: o[t]
	})
})));
//#endregion
export { s as Badge };
