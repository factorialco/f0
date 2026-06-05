import { jsx as p } from "react/jsx-runtime";
import { experimentalComponent as m } from "../../lib/experimental.js";
import { NumberInputInternal as u } from "./internal.js";
const s = ["buttonToggle"], c = (t) => {
  const r = s.reduce((o, n) => {
    const { [n]: b, ...e } = o;
    return e;
  }, t);
  return /* @__PURE__ */ p(u, { ...r });
}, N = m("F0NumberInput", c);
export {
  N as F0NumberInput
};
