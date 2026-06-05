import { jsx as i } from "react/jsx-runtime";
import { cn as t } from "../../../../../../lib/utils.js";
function c({
  children: m,
  ...l
}) {
  return /* @__PURE__ */ i(
    "ul",
    {
      ...l,
      className: t(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        l.className
      ),
      children: m
    }
  );
}
function e({
  children: m,
  ...l
}) {
  return /* @__PURE__ */ i(
    "ol",
    {
      ...l,
      className: t(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        l.className
      ),
      children: m
    }
  );
}
function n({
  children: m,
  ...l
}) {
  return /* @__PURE__ */ i("li", { ...l, className: t("mb-2", l.className), children: m });
}
export {
  n as Li,
  e as Ol,
  c as Ul
};
