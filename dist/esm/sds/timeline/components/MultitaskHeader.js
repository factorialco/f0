import e from "../../../icons/app/List.js";
import { F0TagStatus as t } from "../../../components/tags/F0TagStatus/index.js";
import { F0AvatarIcon as n } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
import { GroupHeader as r } from "../../../ui/GroupHeader/GroupHeader.js";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/timeline/components/MultitaskHeader.tsx
var s = ({ props: s }) => {
	let { status: c, title: l, taskCount: u, completedCount: d, expanded: f, onExpandToggle: p } = s;
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(n, {
		icon: e,
		size: "sm"
	}), /* @__PURE__ */ o("div", {
		className: "flex flex-1 items-center justify-between",
		children: [/* @__PURE__ */ a(r, {
			label: `${u} ${l}`,
			itemCount: void 0,
			open: f,
			onOpenChange: () => p(),
			showOpenChange: !0
		}), d !== void 0 && /* @__PURE__ */ a(t, {
			text: `${d}/${u}`,
			variant: c === "completed" ? "positive" : "warning"
		})]
	})] });
};
//#endregion
export { s as MultitaskHeader };
