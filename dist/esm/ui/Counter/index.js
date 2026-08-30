import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n } from "../../lib/utils.js";
import { cva as r } from "cva";
import { jsx as i } from "react/jsx-runtime";
//#region src/ui/Counter/index.tsx
var a = r({
	base: "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums transition-all",
	variants: {
		size: {
			md: "min-w-5 p-0.5",
			sm: "min-w-4 px-0.5"
		},
		type: {
			default: "bg-f1-background-secondary outline outline-1 outline-f1-border",
			selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
			bold: "bg-f1-background-accent-bold text-f1-foreground-inverse"
		}
	},
	defaultVariants: {
		size: "md",
		type: "default"
	}
});
function o({ size: e, type: t, value: r, maxValue: o }) {
	let s = o && r > o ? `+${o}` : r;
	return /* @__PURE__ */ i("div", {
		className: n("text-f1-foreground", a({
			size: e,
			type: t
		})),
		children: s
	});
}
var s = e(t("Counter", o));
//#endregion
export { s as Counter };
