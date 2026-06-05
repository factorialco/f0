import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { F0AvatarPerson as s } from "../../../../../components/avatars/F0AvatarPerson/index.js";
import { getAvatarColor as c } from "../../../../../components/avatars/internal/BaseAvatar/utils.js";
import { cn as a } from "../../../../../lib/utils.js";
import { Picker as f } from "../../../../../kits/Social/Reactions/Picker/index.js";
import { BACKGROUND_COLORS as v } from "../types.js";
function x({
  firstName: o,
  lastName: t,
  src: r,
  canReact: i,
  lastEmojiReaction: n,
  onReactionSelect: d,
  pickerRef: m
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: a(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        r ? "" : v[c(
          [o, t].join("")
        )]
      ),
      children: [
        r && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url("${r}")` }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ l("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ e(
            "div",
            {
              style: i ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ e(
                s,
                {
                  src: r,
                  firstName: o,
                  lastName: t,
                  size: "2xl"
                }
              )
            }
          ),
          i && /* @__PURE__ */ e(
            "div",
            {
              ref: m,
              className: a(
                "absolute -right-0.5",
                r ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                f,
                {
                  lastEmojiReaction: n,
                  onSelect: d,
                  size: "sm",
                  variant: "neutral"
                }
              )
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  x as CelebrationAvatar
};
