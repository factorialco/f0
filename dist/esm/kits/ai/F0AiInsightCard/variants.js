import { cva as e } from "cva";
//#region src/kits/ai/F0AiInsightCard/variants.ts
var t = e({
	base: [
		"relative flex flex-col rounded-2xl bg-f1-background",
		"border border-solid border-f1-border-secondary",
		"shadow transition-shadow duration-200",
		"w-[217px] h-[200px] p-4 gap-2"
	],
	variants: { selected: {
		true: "shadow-none",
		false: "hover:shadow-md"
	} },
	defaultVariants: { selected: !1 }
}), n = e({ base: "text-lg font-semibold text-f1-foreground line-clamp-3" }), r = e({ base: "text-sm text-f1-foreground-secondary leading-normal" }), i = e({ base: "text-sm font-medium text-f1-foreground leading-normal" });
//#endregion
export { t as cardVariants, r as descriptionVariants, n as headingVariants, i as labelVariants };
