import { cn as e } from "../../../../lib/utils.js";
import { OneEllipsis as t } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Avatar as n } from "../../../../components/avatars/F0Avatar/index.js";
import { tableDisplayClassNames as r } from "../../const.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/person/person.tsx
var o = (o, s) => {
	let c = `${o.firstName.toString()} ${o.lastName.toString()}`;
	return /* @__PURE__ */ a("div", {
		className: e("flex min-w-0 flex-1 items-center gap-2", s.visualization === "table" && r.avatar),
		children: [/* @__PURE__ */ i(n, {
			avatar: {
				type: "person",
				firstName: o.firstName.toString(),
				lastName: o.lastName.toString(),
				src: o.src,
				badge: o.badge,
				deactivated: o.deactivated
			},
			size: "xs"
		}), /* @__PURE__ */ i(t, {
			className: e("min-w-0 flex-1", o.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
			tag: "span",
			children: c
		})]
	});
};
//#endregion
export { o as PersonCell };
