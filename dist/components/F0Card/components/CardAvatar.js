import { jsx as r } from "react/jsx-runtime";
import { F0Avatar as f } from "../../avatars/F0Avatar/index.js";
import { F0AvatarEmoji as t } from "../../avatars/F0AvatarEmoji/index.js";
import { F0AvatarIcon as s } from "../../avatars/F0AvatarIcon/index.js";
import { cn as m } from "../../../lib/utils.js";
import { F0AvatarFile as l } from "../../avatars/F0AvatarFile/F0AvatarFile.js";
const d = ({
  avatar: e,
  compact: i = !1
}) => e.type === "emoji" ? /* @__PURE__ */ r(t, { emoji: e.emoji, size: i ? "sm" : "lg" }) : e.type === "file" ? /* @__PURE__ */ r(l, { file: e.file, size: i ? "sm" : "lg" }) : e.type === "icon" ? /* @__PURE__ */ r(s, { icon: e.icon, size: i ? "sm" : "lg" }) : /* @__PURE__ */ r(f, { avatar: e, size: i ? "sm" : "lg" });
function b({
  avatar: e,
  overlay: i = !1,
  compact: o = !1
}) {
  const n = e.type === "person";
  return /* @__PURE__ */ r(
    "div",
    {
      className: m(
        "mb-1.5 flex h-fit w-fit",
        i && !o && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background",
        i && n && "rounded-full",
        o && "mb-0"
      ),
      "data-testid": "card-avatar",
      children: /* @__PURE__ */ r(d, { avatar: e, compact: o })
    }
  );
}
export {
  b as CardAvatar
};
