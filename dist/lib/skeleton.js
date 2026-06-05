import { jsx as i } from "react/jsx-runtime";
function r(a, e) {
  const t = a.displayName || a.name || "Component";
  return Object.assign(e, { displayName: `${t}.Skeleton` }), Object.assign(a, { Skeleton: e });
}
const n = ({ orientation: a = "vertical", limit: e = 600, children: t }) => /* @__PURE__ */ i(
  "div",
  {
    style: {
      maskImage: `linear-gradient(to ${a == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${e}px, 100%)), rgba(0, 0, 0, 0) 100%)`
    },
    className: a == "horizontal" ? "w-full overflow-hidden" : "w-auto",
    children: t
  }
);
export {
  n as Blend,
  r as withSkeleton
};
