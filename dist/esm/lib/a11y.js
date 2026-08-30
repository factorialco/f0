import { useMediaQuery as e } from "usehooks-ts";
//#region src/lib/a11y.tsx
var t = () => e("(prefers-reduced-motion: reduce)", {
	initializeWithValue: !0,
	defaultValue: !1
});
//#endregion
export { t as useReducedMotion };
