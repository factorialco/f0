import { jsx as p } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { useComponentXRay as s } from "../xray.js";
const c = (o, e) => {
  const r = f((n, t) => {
    const { ref: m } = s(o, t);
    return /* @__PURE__ */ p(e, { ref: m, ...n });
  });
  return r.displayName = `${o.name}`, r;
};
export {
  c as Component
};
