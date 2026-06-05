import { jsx as p } from "react/jsx-runtime";
import { experimentalComponent as s } from "../../lib/experimental.js";
import { InputInternal as u } from "./internal.js";
const m = ["buttonToggle"], c = (t) => {
  const o = m.reduce((r, n) => {
    const { [n]: i, ...e } = r;
    return e;
  }, t);
  return /* @__PURE__ */ p(u, { ...o });
}, T = s("F0TextInput", c);
export {
  T as F0TextInput
};
