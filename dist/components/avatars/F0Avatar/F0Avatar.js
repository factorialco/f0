import { jsx as i } from "react/jsx-runtime";
import { F0AvatarCompany as r } from "../F0AvatarCompany/index.js";
import { F0AvatarEmoji as a } from "../F0AvatarEmoji/index.js";
import { F0AvatarFlag as m } from "../F0AvatarFlag/index.js";
import { F0AvatarIcon as o } from "../F0AvatarIcon/index.js";
import { F0AvatarPerson as c } from "../F0AvatarPerson/index.js";
import { F0AvatarTeam as n } from "../F0AvatarTeam/index.js";
import { F0AvatarFile as y } from "../F0AvatarFile/F0AvatarFile.js";
const j = ({
  avatar: e,
  size: l = "xs",
  dataTestId: b
}) => {
  switch (e.type) {
    case "person":
      return /* @__PURE__ */ i(
        c,
        {
          firstName: e.firstName,
          lastName: e.lastName,
          badge: e.badge,
          src: e.src,
          size: l,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"],
          deactivated: e.deactivated,
          dataTestId: b
        }
      );
    case "team":
      return /* @__PURE__ */ i(
        n,
        {
          name: e.name,
          src: e.src,
          badge: e.badge,
          size: l,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"],
          dataTestId: b
        }
      );
    case "company":
      return /* @__PURE__ */ i(
        r,
        {
          name: e.name,
          src: e.src,
          badge: e.badge,
          size: l,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"],
          dataTestId: b
        }
      );
    case "file":
      return /* @__PURE__ */ i(
        y,
        {
          file: e.file,
          size: l,
          badge: e.badge,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"],
          dataTestId: b
        }
      );
    case "flag":
      return /* @__PURE__ */ i(
        m,
        {
          flag: e.flag,
          size: l,
          badge: e.badge,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"],
          dataTestId: b
        }
      );
    case "emoji":
      return /* @__PURE__ */ i(
        a,
        {
          emoji: e.emoji,
          size: l,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"],
          dataTestId: b
        }
      );
    case "icon":
      return /* @__PURE__ */ i(
        o,
        {
          icon: e.icon,
          size: l,
          state: e.state,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"],
          dataTestId: b
        }
      );
  }
};
export {
  j as F0Avatar
};
