import { jsx as a } from "react/jsx-runtime";
import { cn as e } from "../../../../../../lib/utils.js";
function l({
  children: m,
  ...t
}) {
  return /* @__PURE__ */ a("p", { ...t, className: e("text-base font-normal", t.className), children: m });
}
function c({
  children: m,
  ...t
}) {
  return /* @__PURE__ */ a(
    "h1",
    {
      ...t,
      className: e(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        t.className
      ),
      children: m
    }
  );
}
function i({
  children: m,
  ...t
}) {
  return /* @__PURE__ */ a(
    "h2",
    {
      ...t,
      className: e(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        t.className
      ),
      children: m
    }
  );
}
function r({
  children: m,
  ...t
}) {
  return /* @__PURE__ */ a(
    "h3",
    {
      ...t,
      className: e(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        t.className
      ),
      children: m
    }
  );
}
function f({
  children: m,
  ...t
}) {
  return /* @__PURE__ */ a("strong", { ...t, className: e("font-semibold", t.className), children: m });
}
function o({
  children: m,
  ...t
}) {
  return /* @__PURE__ */ a("em", { ...t, className: e("italic", t.className), children: m });
}
export {
  o as Em,
  c as H1,
  i as H2,
  r as H3,
  l as P,
  f as Strong
};
