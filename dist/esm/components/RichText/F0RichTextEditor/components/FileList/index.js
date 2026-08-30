import { F0FileItem as e } from "../../../../F0FileItem/F0FileItem.js";
import { UPLOAD_INPUT_ID as t } from "../../utils/constants.js";
import { getAcceptFileTypeString as n, handleAddFiles as r, handleRemoveFile as i } from "../../utils/files.js";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
//#region src/components/RichText/F0RichTextEditor/components/FileList/index.tsx
var u = ({ filesConfig: u, files: d, setFiles: f, disabled: p, fileInputRef: m }) => u ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("input", {
	id: t,
	type: "file",
	multiple: u.multipleFiles,
	onChange: (e) => {
		let t = e.target.files;
		if (t && t.length > 0) {
			let e = Array.from(t);
			u?.maxFileSize && (e = e.filter((e) => e.size <= u.maxFileSize)), r(e, d, u, f);
		}
		m.current && (m.current.value = "");
	},
	ref: m,
	className: "hidden",
	accept: n(u),
	"aria-label": "Upload file"
}), /* @__PURE__ */ o(c, { children: d.length > 0 && /* @__PURE__ */ o(l.div, {
	initial: {
		height: 0,
		opacity: 0,
		y: -20
	},
	animate: {
		height: "auto",
		opacity: 1,
		y: 0
	},
	exit: {
		height: 0,
		opacity: 0,
		y: -20
	},
	transition: { duration: .3 },
	children: /* @__PURE__ */ o("div", {
		className: "scrollbar-macos flex w-full items-end gap-2 overflow-x-auto pt-2",
		children: d.map((t, n) => /* @__PURE__ */ o(e, {
			file: t,
			actions: [{
				label: "Delete",
				onClick: () => i(n, d, u, f)
			}],
			disabled: p
		}, `${t.name}-${n}`))
	})
}, "filelist-accordion") })] }) : null;
//#endregion
export { u as FileList };
