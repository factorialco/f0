import { jsxs as l, jsx as a } from "react/jsx-runtime";
import t from "../../../../../../icons/app/Download.js";
import { cn as m } from "../../../../../../lib/utils.js";
import { F0Button as r } from "../../../../../../components/F0Button/F0Button.js";
function h({
  src: o,
  alt: n,
  ...d
}) {
  const i = () => {
    if (o) {
      const e = document.createElement("a");
      e.href = o, e.download = n || "image", document.body.appendChild(e), e.click(), document.body.removeChild(e);
    }
  };
  return /* @__PURE__ */ l("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ a(
      "img",
      {
        ...d,
        src: o,
        alt: n,
        className: m("max-w-full rounded-md", d.className)
      }
    ),
    /* @__PURE__ */ a("div", { className: "absolute right-2 top-2 rounded", children: /* @__PURE__ */ a(
      r,
      {
        variant: "neutral",
        label: "Download",
        hideLabel: !0,
        icon: t,
        onClick: i
      }
    ) })
  ] });
}
export {
  h as Image
};
