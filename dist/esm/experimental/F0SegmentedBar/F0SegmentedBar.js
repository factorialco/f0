import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n } from "../../lib/utils.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import { getColor as i } from "../../kits/Charts/utils/colors.js";
import { forwardRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/experimental/F0SegmentedBar/F0SegmentedBar.tsx
var s = a(({ value: e, max: t, color: a = "categorical-1", label: s }, c) => {
	let l = r(), u = Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0, d = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), u)) : 0, f = Array.from({ length: u }, (e, t) => t < d), p = i(a);
	return /* @__PURE__ */ o("div", {
		ref: c,
		role: "progressbar",
		"aria-label": s,
		"aria-valuemin": 0,
		"aria-valuemax": u,
		"aria-valuenow": d,
		"aria-valuetext": l.t("audioPlayer.position", {
			current: d,
			total: u
		}),
		className: n("flex h-2 w-full gap-1"),
		children: f.map((e, t) => /* @__PURE__ */ o("div", {
			className: n("flex-1 rounded-full bg-f1-background-secondary", "transition-all duration-300 ease-in-out motion-reduce:transition-none"),
			style: e ? { backgroundColor: p } : void 0
		}, t))
	});
});
s.displayName = "F0SegmentedBar";
var c = e(t("F0SegmentedBar", s));
//#endregion
export { c as F0SegmentedBar };
