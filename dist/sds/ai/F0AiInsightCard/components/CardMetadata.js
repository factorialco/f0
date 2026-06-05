import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { F0AvatarCompany as d } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { F0AvatarList as f } from "../../../../components/avatars/F0AvatarList/index.js";
import { F0AvatarPerson as v } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { F0AvatarTeam as h } from "../../../../components/avatars/F0AvatarTeam/index.js";
import { F0TagAlert as x } from "../../../../components/tags/F0TagAlert/index.js";
import { F0TagBalance as p } from "../../../../components/tags/F0TagBalance/index.js";
import { cn as s } from "../../../../lib/utils.js";
import { headingVariants as N, labelVariants as i } from "../variants.js";
import { motion as c } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const g = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), u = ({ balance: a }) => /* @__PURE__ */ e(
  p,
  {
    amount: a.amount,
    percentage: a.percentage ?? void 0,
    invertStatus: a.invertStatus,
    hint: a.hint
  }
), S = (a) => {
  const {
    heading: o,
    label: t,
    content: n,
    shouldFadeContent: m = !1,
    fadeTransition: l
  } = a;
  return /* @__PURE__ */ r("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ e("span", { className: s(N()), children: o }),
    /* @__PURE__ */ r(
      c.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: m ? 0 : 1 },
        transition: l,
        children: [
          n === "person" && /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e(
              v,
              {
                firstName: a.avatar.firstName,
                lastName: a.avatar.lastName,
                src: a.avatar.src,
                size: "xs"
              }
            ),
            t && /* @__PURE__ */ e("span", { className: s(i()), children: t })
          ] }),
          n === "people" && /* @__PURE__ */ e(
            f,
            {
              type: "person",
              avatars: a.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e(
              h,
              {
                name: a.avatar.name,
                src: a.avatar.src,
                size: "xs"
              }
            ),
            t && /* @__PURE__ */ e("span", { className: s(i()), children: t })
          ] }),
          n === "company" && /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e(
              d,
              {
                name: a.avatar.name,
                src: a.avatar.src,
                size: "xs"
              }
            ),
            t && /* @__PURE__ */ e("span", { className: s(i()), children: t })
          ] }),
          n === "alert" && /* @__PURE__ */ e(x, { text: a.alertLabel, level: a.level }),
          n === "balance" && /* @__PURE__ */ e(u, { balance: a.balance })
        ]
      }
    ),
    t && !g.has(n) && /* @__PURE__ */ e(
      c.span,
      {
        className: s(i()),
        animate: { opacity: m ? 0 : 1 },
        transition: l,
        children: t
      }
    )
  ] });
};
export {
  S as CardMetadata
};
