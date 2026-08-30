import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/Cross.js";
import r from "../../../icons/app/PersonNegative.js";
import { BaseTag as i } from "../../../components/tags/internal/BaseTag/index.js";
import { BaseAvatar as a } from "../../../components/avatars/internal/BaseAvatar/BaseAvatar.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/ListTag/index.tsx
var s = ({ entity: s, onRemove: c, disabled: l = !1, deactivated: u = !1, hiddenAvatar: d = !1 }) => /* @__PURE__ */ o("div", {
	className: "pr-2 pt-1.5",
	children: /* @__PURE__ */ o(i, {
		className: e("max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]", "rounded-full", d ? "pl-2" : "pl-0"),
		left: !d && /* @__PURE__ */ o(a, {
			src: s.subAvatar,
			name: s.subName,
			size: "xs",
			type: "rounded",
			icon: u ? {
				icon: r,
				color: "secondary"
			} : void 0
		}),
		right: !l && /* @__PURE__ */ o(t, {
			icon: n,
			size: "sm",
			className: "cursor-pointer text-f1-icon-secondary",
			onClick: () => c?.(s)
		}),
		text: s.subName,
		deactivated: u
	})
});
//#endregion
export { s as ListTag };
