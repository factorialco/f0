import { jsx as t } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { F0TagAvatar as p } from "../internal/TagAvatar/index.js";
const e = m(
  ({ name: a, src: r }, o) => /* @__PURE__ */ t(
    p,
    {
      ref: o,
      avatar: {
        type: "company",
        name: a,
        src: r
      },
      text: a
    }
  )
);
e.displayName = "F0TagCompany";
export {
  e as F0TagCompany
};
