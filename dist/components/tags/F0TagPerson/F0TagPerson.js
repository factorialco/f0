import { jsx as e } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { F0TagAvatar as s } from "../internal/TagAvatar/index.js";
const p = m(
  ({ src: a, name: r, deactivated: o }, t) => /* @__PURE__ */ e(
    s,
    {
      ref: t,
      avatar: {
        type: "person",
        firstName: r,
        lastName: "",
        src: a,
        deactivated: o
      },
      text: r,
      deactivated: o
    }
  )
);
p.displayName = "F0TagPerson";
export {
  p as F0TagPerson
};
