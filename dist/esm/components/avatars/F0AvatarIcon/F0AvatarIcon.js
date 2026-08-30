import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarIcon/F0AvatarIcon.tsx
var r = {
	sm: "size-6 rounded-sm",
	md: "size-8 rounded",
	lg: "size-10 rounded-md"
}, i = ({ icon: i, size: a = "md", state: o, "aria-label": s, "aria-labelledby": c }) => /* @__PURE__ */ n("div", {
	className: e("flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background", r[a]),
	"aria-label": s,
	"aria-labelledby": c,
	children: /* @__PURE__ */ n(t, {
		icon: i,
		size: a,
		state: o,
		color: "default"
	})
});
i.displayName = "IconAvatar";
//#endregion
export { i as F0AvatarIcon };
