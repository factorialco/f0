import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/F0Slider/components/SliderRangeLabels.tsx
var n = ({ minLabel: n, maxLabel: r }) => !n && !r ? null : /* @__PURE__ */ t("div", {
	"data-testid": "slider-range-labels",
	className: "flex justify-between text-sm text-f1-foreground-secondary",
	children: [/* @__PURE__ */ e("span", { children: n }), /* @__PURE__ */ e("span", { children: r })]
});
//#endregion
export { n as SliderRangeLabels };
