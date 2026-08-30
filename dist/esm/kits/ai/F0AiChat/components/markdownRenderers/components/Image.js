import { cn as e } from "../../../../../../lib/utils.js";
import t from "../../../../../../icons/app/Download.js";
import { F0Button as n } from "../../../../../../components/F0Button/F0Button.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Image.tsx
function a({ src: a, alt: o, ...s }) {
	let c = () => {
		if (a) {
			let e = document.createElement("a");
			e.href = a, e.download = o || "image", document.body.appendChild(e), e.click(), document.body.removeChild(e);
		}
	};
	return /* @__PURE__ */ i("div", {
		className: "relative w-fit",
		children: [/* @__PURE__ */ r("img", {
			...s,
			src: a,
			alt: o,
			className: e("max-w-full rounded-md", s.className)
		}), /* @__PURE__ */ r("div", {
			className: "absolute right-2 top-2 rounded",
			children: /* @__PURE__ */ r(n, {
				variant: "neutral",
				label: "Download",
				hideLabel: !0,
				icon: t,
				onClick: c
			})
		})]
	});
}
//#endregion
export { a as Image };
