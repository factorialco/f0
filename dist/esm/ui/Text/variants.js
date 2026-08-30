import { cva as e } from "cva";
//#region src/ui/Text/variants.ts
var t = e({
	base: "text-base text-f1-foreground",
	variants: {
		variant: {
			heading: "text-lg font-semibold",
			body: "",
			description: "text-f1-foreground-secondary",
			small: "text-sm font-medium text-f1-foreground-secondary",
			inverse: "text-f1-foreground-inverse",
			code: "text-f1-foreground-secondary",
			label: "font-medium",
			"heading-large": "text-2xl font-semibold",
			"label-input": "font-medium text-f1-foreground-secondary",
			selected: "font-medium text-f1-foreground-selected",
			warning: "text-f1-foreground-warning",
			critical: "text-f1-foreground-critical",
			positive: "text-f1-foreground-positive",
			info: "text-f1-foreground-info",
			"warning-strong": "font-semibold text-f1-foreground-warning",
			"critical-strong": "font-semibold text-f1-foreground-critical",
			"positive-strong": "font-semibold text-f1-foreground-positive",
			"info-strong": "font-semibold text-f1-foreground-info"
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right"
		}
	},
	defaultVariants: {
		variant: "body",
		align: "left"
	}
}), n = {
	"heading-large": "h1",
	heading: "h2",
	body: "p",
	description: "p",
	label: "p",
	"label-input": "label",
	small: "p",
	selected: "p",
	inverse: "p",
	warning: "p",
	critical: "p",
	positive: "p",
	info: "p",
	"warning-strong": "p",
	"critical-strong": "p",
	"positive-strong": "p",
	"info-strong": "p",
	code: "code"
};
//#endregion
export { n as defaultTag, t as textVariants };
