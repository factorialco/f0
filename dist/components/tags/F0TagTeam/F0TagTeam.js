import { jsx as m } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { F0TagAvatar as e } from "../internal/TagAvatar/index.js";
const p = o(
  ({ name: a, src: r }, t) => /* @__PURE__ */ m(
    e,
    {
      ref: t,
      avatar: {
        type: "team",
        name: a,
        src: r
      },
      text: a
    }
  )
);
p.displayName = "F0TagTeam";
export {
  p as F0TagTeam
};
