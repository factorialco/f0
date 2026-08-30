import { DataTestIdWrapper as e } from "../../../lib/data-testid/index.js";
import { cn as t } from "../../../lib/utils.js";
import { Tooltip as n } from "../../../experimental/Overlays/Tooltip/index.js";
import { F0AvatarModule as r } from "../F0AvatarModule/index.js";
import { Avatar as i, AvatarFallback as a } from "../../../ui/Avatar/Avatar.js";
import { Badge as o } from "../../../ui/IconBadge/index.js";
import { sizesMapping as s } from "../internal/BaseAvatar/types.js";
import { getAvatarSize as c, getBadgeSize as l, getFileTypeInfo as u } from "./utils.js";
import { forwardRef as d, useMemo as f } from "react";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarFile/F0AvatarFile.tsx
var g = d(({ file: d, badge: g, dataTestId: _, ...v }, y) => {
	let { type: b, color: x } = u(d), S = f(() => Object.fromEntries(Object.entries(s).map(([e, t]) => [t, e])), [])[v.size] ?? "small", C = l(v.size), w = c(v.size), T = f(() => g ? /* @__PURE__ */ h(p, { children: [g.type === "module" && /* @__PURE__ */ m(r, {
		module: g.module,
		size: w
	}), g.type !== "module" && /* @__PURE__ */ m(o, {
		type: g.type,
		icon: g.icon,
		size: C
	})] }) : null, [
		g,
		C,
		w
	]), E = f(() => {
		let e = {
			xs: "text-[7px]",
			sm: "text-[8px]",
			md: "text-sm",
			lg: "text-sm"
		};
		return e[v.size || "sm"] ?? e.sm;
	}, [v]);
	return /* @__PURE__ */ m(e, {
		dataTestId: _,
		children: /* @__PURE__ */ h(i, {
			ref: y,
			className: t("bg-f1-background", "overflow-visible"),
			...v,
			size: S,
			children: [/* @__PURE__ */ m(a, {
				className: t("select-none font-semibold", E, x),
				children: b
			}), g && /* @__PURE__ */ m("div", {
				className: "absolute -bottom-0.5 -right-0.5",
				children: g.tooltip ? /* @__PURE__ */ m(n, {
					description: g.tooltip,
					children: /* @__PURE__ */ m("div", {
						className: "cursor-help",
						children: T
					})
				}) : T
			})]
		})
	});
});
g.displayName = "F0AvatarFile";
//#endregion
export { g as F0AvatarFile };
