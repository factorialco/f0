import { jsx as o } from "react/jsx-runtime";
import { createContext as s, forwardRef as i, useContext as x } from "react";
const c = s(void 0), f = ({ children: e, ...t }) => /* @__PURE__ */ o(c.Provider, { value: t, children: e }), a = () => ({
  ...x(c)
}), I = i(
  function(t, r) {
    const { src: n } = a();
    if (!n) return /* @__PURE__ */ o("img", { ref: r, ...t });
    const m = n(t);
    return /* @__PURE__ */ o("img", { ref: r, ...t, ...m });
  }
);
export {
  I as Image,
  f as ImageProvider,
  a as useImageContext
};
