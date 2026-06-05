import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { F0Icon as s } from "../../../../components/F0Icon/F0Icon.js";
import "../../../../icons/app/Menu.js";
import l from "../../../../icons/app/Upload.js";
import { cn as f } from "../../../../lib/utils.js";
import { useI18n as p } from "../../../../lib/providers/i18n/i18n-provider.js";
const g = ({ visible: t, onFilesDropped: n }) => {
  const a = p();
  return /* @__PURE__ */ i(
    "div",
    {
      className: f(
        "absolute inset-1 z-50 flex flex-col items-center gap-2 justify-center rounded-[calc(theme(borderRadius.xl)-4px)] backdrop-blur bg-f1-background-tertiary/80 border border-dashed border-f1-border",
        "transition-opacity duration-150 ease-out motion-reduce:transition-none",
        t ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
      ),
      onDragEnter: (e) => {
        e.preventDefault();
      },
      onDragOver: (e) => {
        e.preventDefault();
      },
      onDragLeave: (e) => {
        e.preventDefault();
      },
      onDrop: (e) => {
        e.preventDefault();
        const r = Array.from(e.dataTransfer.files);
        r.length > 0 && n(r);
      },
      children: [
        /* @__PURE__ */ o(s, { icon: l, size: "lg", color: "bold" }),
        /* @__PURE__ */ o("p", { className: "text-base font-normal text-f1-foreground", children: a.ai.dropFilesHere })
      ]
    }
  );
};
export {
  g as DropOverlay
};
