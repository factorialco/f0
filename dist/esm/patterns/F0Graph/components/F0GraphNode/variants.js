import { cva as e } from "cva";
//#region src/patterns/F0Graph/components/F0GraphNode/variants.ts
var t = e({
	base: "relative w-auto transition-[opacity,box-shadow,border-color,background-color] duration-200",
	variants: {
		variant: {
			detail: "flex items-center justify-center",
			compact: "flex items-center justify-center",
			dot: "flex items-center justify-center border-0 bg-transparent"
		},
		state: {
			default: "",
			selected: "",
			highlighted: "",
			dimmed: "opacity-40"
		}
	},
	defaultVariants: {
		variant: "detail",
		state: "default"
	}
});
//#endregion
export { t as graphNodeContainerVariants };
