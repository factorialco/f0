import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Clock.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
import { formatClock as r } from "../utils/natural-time.js";
import { useEffect as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatMessageStatusIcon.tsx
var s = 500, c = ({ sentAt: c }) => {
	let [l, u] = a(!1);
	return i(() => {
		let e = setTimeout(() => u(!0), s);
		return () => clearTimeout(e);
	}, []), /* @__PURE__ */ o("span", {
		"aria-hidden": !l,
		className: e("flex items-center transition-opacity duration-150", l ? "opacity-100" : "opacity-0"),
		"data-testid": "chat-sending-clock",
		children: l && /* @__PURE__ */ o(n, {
			variant: "ghost",
			hideLabel: !0,
			label: r(new Date(c)),
			icon: t
		})
	});
};
//#endregion
export { c as SendingClock };
