import { cn as e } from "../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ClampText.tsx
var n = ({ children: n, className: r, lines: i = 1 }) => i > 1 ? /* @__PURE__ */ t("span", {
	title: n,
	className: e("line-clamp-1 min-w-0 max-w-full overflow-hidden whitespace-normal", r),
	style: {
		WebkitLineClamp: i,
		lineClamp: i
	},
	children: n
}) : /* @__PURE__ */ t("span", {
	title: n,
	className: e("block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap", r),
	children: n
});
//#endregion
export { n as ClampText };
