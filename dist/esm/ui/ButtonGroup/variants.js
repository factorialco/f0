import { cva as e } from "cva";
//#region src/ui/ButtonGroup/variants.ts
var t = e({
	base: "flex gap-md",
	variants: {
		align: {
			end: "justify-end",
			between: "justify-between"
		},
		stack: {
			none: "flex-row items-center",
			sm: "flex-col items-stretch sm:flex-row sm:items-center",
			md: "flex-col items-stretch md:flex-row md:items-center",
			"container-md": "flex-col items-stretch @md:flex-row @md:items-center"
		},
		fullWidthOnStack: {
			true: "",
			false: ""
		},
		reverseOnStack: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [
		{
			stack: "sm",
			fullWidthOnStack: !0,
			class: "[&>*]:w-full sm:[&>*]:w-auto"
		},
		{
			stack: "md",
			fullWidthOnStack: !0,
			class: "[&>*]:w-full md:[&>*]:w-auto"
		},
		{
			stack: "container-md",
			fullWidthOnStack: !0,
			class: "[&>*]:w-full @md:[&>*]:w-auto"
		},
		{
			stack: "sm",
			reverseOnStack: !0,
			class: "flex-col-reverse"
		},
		{
			stack: "md",
			reverseOnStack: !0,
			class: "flex-col-reverse"
		},
		{
			stack: "container-md",
			reverseOnStack: !0,
			class: "flex-col-reverse"
		}
	],
	defaultVariants: {
		align: "end",
		stack: "none",
		fullWidthOnStack: !1,
		reverseOnStack: !1
	}
});
//#endregion
export { t as buttonGroupVariants };
