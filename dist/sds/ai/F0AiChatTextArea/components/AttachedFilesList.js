import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { F0Icon as c } from "../../../../components/F0Icon/index.js";
import { FileItem as s } from "../../../../components/RichText/FileItem/index.js";
import { Tooltip as a } from "../../../../experimental/Overlays/Tooltip/index.js";
import m from "../../../../icons/app/AlertCircle.js";
import t from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import { focusRing as f } from "../../../../lib/utils.js";
import { Skeleton as p } from "../../../../ui/skeleton.js";
const z = ({
  attachedFiles: e,
  isUploading: n,
  onRemove: l,
  removeLabel: o
}) => e.length === 0 ? null : /* @__PURE__ */ r(
  "div",
  {
    "aria-live": "polite",
    "aria-busy": n,
    className: "flex flex-wrap gap-1 px-1 pt-1",
    children: e.map(
      (i) => i.status === "uploading" ? /* @__PURE__ */ r(p, { className: "h-9 w-36 rounded-[10px]" }, i.id) : i.status === "error" ? /* @__PURE__ */ r(
        u,
        {
          att: i,
          onRemove: l,
          removeLabel: o
        },
        i.id
      ) : /* @__PURE__ */ r(
        s,
        {
          file: i.file,
          size: "md",
          actions: [
            {
              label: o,
              icon: t,
              onClick: () => l(i.id)
            }
          ]
        },
        i.id
      )
    )
  }
);
function u({
  att: e,
  onRemove: n,
  removeLabel: l
}) {
  const o = /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5", children: [
    /* @__PURE__ */ r(c, { icon: m, size: "md", color: "critical" }),
    /* @__PURE__ */ r("span", { className: "max-w-40 truncate text-sm font-medium text-f1-foreground-critical", children: e.file.name }),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        "aria-label": l,
        className: f(
          "rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"
        ),
        onClick: () => n(e.id),
        children: /* @__PURE__ */ r(c, { icon: t, size: "md", "aria-hidden": "true" })
      }
    )
  ] });
  return e.errorMessage ? /* @__PURE__ */ r(a, { label: e.errorMessage, children: o }) : o;
}
export {
  z as AttachedFilesList
};
