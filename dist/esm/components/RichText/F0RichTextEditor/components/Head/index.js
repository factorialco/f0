import e from "../../../../../icons/app/Maximize.js";
import t from "../../../../../icons/app/Minimize.js";
import { F0Button as n } from "../../../../F0Button/F0Button.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/RichText/F0RichTextEditor/components/Head/index.tsx
var o = ({ fullScreenMode: o, isFullscreen: s, handleToggleFullscreen: c, disableAllButtons: l, title: u }) => /* @__PURE__ */ a(r, { children: [o && /* @__PURE__ */ i("div", {
	className: "absolute right-3 top-3 z-[1300]",
	children: /* @__PURE__ */ i(n, {
		onClick: (e) => {
			e?.preventDefault(), c();
		},
		label: "Fullscreen",
		"aria-label": "Toggle fullscreen mode",
		variant: "outline",
		hideLabel: !0,
		size: "sm",
		icon: s ? t : e,
		disabled: l
	})
}), s && /* @__PURE__ */ i("div", {
	className: "flex w-full items-start justify-center px-10 pt-24",
	children: /* @__PURE__ */ i("h1", {
		className: "font-bold w-full max-w-[824px] text-3xl",
		children: u
	})
})] });
//#endregion
export { o as Head };
