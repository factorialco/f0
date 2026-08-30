import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { BaseAvatar as t } from "../internal/BaseAvatar/BaseAvatar.js";
import { getFlag as n } from "../../../flags/flagsMap.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarFlag/F0AvatarFlag.tsx
var i = ({ flag: i, size: a, "aria-label": o, "aria-labelledby": s, badge: c }) => {
	let l = n(i), u = e().countries[i] ?? i;
	return /* @__PURE__ */ r(t, {
		type: "base",
		name: u,
		flag: l ? /* @__PURE__ */ r(l, {}) : void 0,
		size: a,
		color: "viridian",
		"aria-label": o,
		"aria-labelledby": s,
		badge: c
	});
};
i.displayName = "FlagAvatar";
//#endregion
export { i as F0AvatarFlag };
