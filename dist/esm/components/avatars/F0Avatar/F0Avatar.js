import { F0AvatarCompany as e } from "../F0AvatarCompany/index.js";
import { F0AvatarEmoji as t } from "../F0AvatarEmoji/index.js";
import { F0AvatarFile as n } from "../F0AvatarFile/F0AvatarFile.js";
import { F0AvatarFlag as r } from "../F0AvatarFlag/index.js";
import { F0AvatarIcon as i } from "../F0AvatarIcon/index.js";
import { F0AvatarPerson as a } from "../F0AvatarPerson/index.js";
import { F0AvatarTeam as o } from "../F0AvatarTeam/index.js";
import { jsx as s } from "react/jsx-runtime";
//#region src/components/avatars/F0Avatar/F0Avatar.tsx
var c = ({ avatar: c, size: l = "xs", dataTestId: u }) => {
	switch (c.type) {
		case "person": return /* @__PURE__ */ s(a, {
			firstName: c.firstName,
			lastName: c.lastName,
			badge: c.badge,
			src: c.src,
			size: l,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			deactivated: c.deactivated,
			pending: c.pending,
			dataTestId: u
		});
		case "team": return /* @__PURE__ */ s(o, {
			name: c.name,
			src: c.src,
			badge: c.badge,
			size: l,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			dataTestId: u
		});
		case "company": return /* @__PURE__ */ s(e, {
			name: c.name,
			src: c.src,
			badge: c.badge,
			size: l,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			dataTestId: u
		});
		case "file": return /* @__PURE__ */ s(n, {
			file: c.file,
			size: l,
			badge: c.badge,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			dataTestId: u
		});
		case "flag": return /* @__PURE__ */ s(r, {
			flag: c.flag,
			size: l,
			badge: c.badge,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			dataTestId: u
		});
		case "emoji": return /* @__PURE__ */ s(t, {
			emoji: c.emoji,
			size: l,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			dataTestId: u
		});
		case "icon": return /* @__PURE__ */ s(i, {
			icon: c.icon,
			size: l,
			state: c.state,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			dataTestId: u
		});
	}
};
//#endregion
export { c as F0Avatar };
