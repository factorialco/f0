import { jsxs as h, Fragment as p, jsx as i } from "react/jsx-runtime";
import { FileItem as s } from "../../FileItem/index.js";
import { getAcceptFileTypeString as u, handleRemoveFile as y, handleAddFiles as F } from "../utils/files.js";
import { AnimatePresence as x } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as g } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const f = ({
  filesConfig: e,
  files: r,
  setFiles: n,
  disabled: c,
  fileInputRef: l
}) => {
  if (!e) return null;
  const m = (a) => {
    const t = a.target.files;
    if (t && t.length > 0) {
      let o = Array.from(t);
      e?.maxFileSize && (o = o.filter(
        (d) => d.size <= e.maxFileSize
      )), F(o, r, e, n);
    }
    l.current && (l.current.value = "");
  };
  return /* @__PURE__ */ h(p, { children: [
    /* @__PURE__ */ i(
      "input",
      {
        id: "rich-text-editor-upload-button",
        type: "file",
        multiple: e.multipleFiles,
        onChange: m,
        ref: l,
        className: "hidden",
        accept: u(e),
        "aria-label": "Upload file"
      }
    ),
    /* @__PURE__ */ i(x, { children: r.length > 0 && /* @__PURE__ */ i(
      g.div,
      {
        initial: { height: 0, opacity: 0, y: -20 },
        animate: { height: "auto", opacity: 1, y: 0 },
        exit: { height: 0, opacity: 0, y: -20 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ i("div", { className: "scrollbar-macos flex w-full items-end gap-2 overflow-x-auto pt-2", children: r.map((a, t) => /* @__PURE__ */ i(
          s,
          {
            file: a,
            actions: [
              {
                label: "Delete",
                onClick: () => y(t, r, e, n)
              }
            ],
            disabled: c
          },
          `${a.name}-${t}`
        )) })
      },
      "filelist-accordion"
    ) })
  ] });
};
export {
  f as FileList
};
