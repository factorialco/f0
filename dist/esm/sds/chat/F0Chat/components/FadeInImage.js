import { cn as e } from "../../../../lib/utils.js";
import { useChatRenderConfig as t } from "../providers/ChatRenderConfigProvider.js";
import { useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/FadeInImage.tsx
var i = ({ className: i, onLoad: a, onLoadedChange: o, eager: s = !1, ...c }) => {
	let { reducedMotion: l } = t(), [u, d] = n(!1), f = () => {
		d(!0), o?.(!0);
	};
	return /* @__PURE__ */ r("img", {
		loading: s ? "eager" : "lazy",
		decoding: "async",
		...c,
		ref: (e) => {
			e?.complete && f();
		},
		onLoad: (e) => {
			f(), a?.(e);
		},
		className: e(!l && "transition-opacity duration-200", u ? "opacity-100" : "opacity-0", i)
	});
};
//#endregion
export { i as FadeInImage };
