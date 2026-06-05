import { createContext as s, useContext as e } from "react";
const u = s(null);
function i() {
  const t = e(u);
  if (!t)
    throw new Error("useF0FormContext must be used within a F0Form");
  return t;
}
function m() {
  return e(u);
}
function c(t, n, r) {
  const o = ["forms", t];
  return n && o.push(n), r && o.push(r), o.join(".");
}
export {
  u as F0FormContext,
  c as generateAnchorId,
  i as useF0FormContext,
  m as useOptionalF0FormContext
};
