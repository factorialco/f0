import { jsx as e } from "react/jsx-runtime";
import { getEntityRefRenderer as u } from "./entityRefRegistry.js";
function f(r) {
  return typeof r == "string" ? r : typeof r == "number" ? String(r) : Array.isArray(r) ? r.map(f).join("") : r && typeof r == "object" && "props" in r ? f(r.props.children) : "";
}
function o({
  type: r,
  id: i,
  children: t
}) {
  if (!i || !r)
    return /* @__PURE__ */ e("span", { children: t });
  const p = f(t), n = u(r);
  return n ? /* @__PURE__ */ e(n, { id: i, label: p }) : /* @__PURE__ */ e("span", { children: t });
}
export {
  o as EntityRef,
  f as extractText
};
