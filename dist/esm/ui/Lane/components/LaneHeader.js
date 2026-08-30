import e from "../../../icons/app/Plus.js";
import { Counter as t } from "../../Counter/index.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { F0TagStatus as r } from "../../../components/tags/F0TagStatus/index.js";
import { F0TagDot as i } from "../../../components/tags/F0TagDot/index.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/ui/Lane/components/LaneHeader.tsx
var s = ({ label: s, variant: c, color: l, count: u, onPrimaryAction: d }) => /* @__PURE__ */ o("div", {
	className: "flex items-center gap-2 px-1 pb-0.5 pt-2",
	children: [
		l ? /* @__PURE__ */ a(i, {
			text: s,
			color: l
		}) : /* @__PURE__ */ a(r, {
			text: s,
			variant: c || "neutral"
		}),
		/* @__PURE__ */ a(t, {
			size: "md",
			type: "default",
			value: u
		}),
		!!d && /* @__PURE__ */ a("div", {
			className: "ml-auto flex items-center gap-1 pr-1",
			children: /* @__PURE__ */ a(n, {
				variant: "ghost",
				size: "sm",
				label: "Add",
				icon: e,
				hideLabel: !0,
				onClick: d
			})
		})
	]
});
//#endregion
export { s as LaneHeader };
