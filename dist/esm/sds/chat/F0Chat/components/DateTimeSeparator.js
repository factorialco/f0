import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Spinner as n } from "../../../../ui/Spinner/index.js";
import { formatRelativeDay as r, formatSeparator as i } from "../utils/natural-time.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/DateTimeSeparator.tsx
var s = ({ at: s, withTime: c = !1, loading: l = !1, padded: u = !1 }) => {
	let d = t(), f = {
		today: d.date.groups.today,
		yesterday: d.date.groups.yesterday
	}, p = new Date(s), m = /* @__PURE__ */ new Date(), h = c ? i(p, m, f) : r(p, m, f);
	return /* @__PURE__ */ a("div", {
		className: e("flex justify-center", u ? "py-6" : "py-0"),
		"data-testid": "chat-date-separator",
		children: /* @__PURE__ */ o("span", {
			className: "flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2.5 py-0.5 backdrop-blur",
			children: [l && /* @__PURE__ */ a(n, {
				size: "small",
				className: "h-3.5 w-3.5"
			}), /* @__PURE__ */ a("span", {
				className: "text-sm font-normal text-f1-foreground-secondary",
				children: h
			})]
		})
	});
};
//#endregion
export { s as DateTimeSeparator };
