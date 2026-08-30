import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Marker.js";
import { F0AvatarIcon as n } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
import { Metadata as r } from "../../../experimental/Information/Headers/Metadata/index.js";
import { F0Text as i } from "../../../components/F0Text/F0Text.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/timeline/components/TaskHeader.tsx
var s = ({ props: s }) => {
	let { status: c, icon: l = t, title: u, description: d, metadata: f } = s, p = f?.some(Boolean);
	return /* @__PURE__ */ o("div", {
		className: "flex justify-between gap-3 w-full flex-wrap",
		children: [/* @__PURE__ */ o("div", {
			className: "flex justify-start items-center gap-3 h-8",
			children: [
				/* @__PURE__ */ a(n, {
					icon: l,
					size: "sm"
				}),
				/* @__PURE__ */ a("h4", {
					className: e("text-base font-semibold text-f1-foreground", c === "completed" && "line-through"),
					children: u
				}),
				d && /* @__PURE__ */ a(i, {
					content: d,
					variant: "description"
				})
			]
		}), /* @__PURE__ */ a("div", {
			className: "flex justify-end items-center gap-3 pl-9",
			children: c === "completed" && f && p && /* @__PURE__ */ a(r, { items: f })
		})]
	});
};
//#endregion
export { s as TaskHeader };
