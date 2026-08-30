import e from "../../../../icons/app/Lightbulb.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0ActionItem as n } from "../../F0ActionItem/F0ActionItem.js";
import { CollapsibleMessage as r } from "./CollapsibleMessage.js";
import { useEffect as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/Thinking.tsx
var l = ({ titles: l, title: u, inProgress: d, isWriting: f }) => {
	let p = t(), [m, h] = o(!!d), g = a(d);
	i(() => {
		g.current && !d ? h(!1) : d && !m && h(!0), g.current = d;
	}, [d, m]);
	let _ = d ? p.ai.thoughtsGroupTitle : u ?? p.ai.thoughtsGroupTitle, v = l.length - 1, y = (e) => !d || f ? "completed" : e === v ? "executing" : "completed";
	return /* @__PURE__ */ s(r, {
		icon: e,
		title: _,
		open: m,
		onOpenChange: h,
		lockOpen: d,
		children: /* @__PURE__ */ s("div", {
			className: "flex flex-col gap-3 pb-4",
			children: l.map((e, t) => /* @__PURE__ */ c("div", {
				className: "relative",
				children: [/* @__PURE__ */ s(n, {
					title: e,
					status: y(t),
					inGroup: !0
				}), t < l.length - 1 && /* @__PURE__ */ s("div", {
					"aria-hidden": !0,
					className: "absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
				})]
			}, t))
		})
	});
};
//#endregion
export { l as Thinking };
