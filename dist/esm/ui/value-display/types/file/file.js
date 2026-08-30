import { F0AvatarFile as e } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/ui/value-display/types/file/file.tsx
var r = (r) => /* @__PURE__ */ n("div", {
	className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
	"data-cell-type": "file",
	children: [
		/* @__PURE__ */ t(e, { file: r }),
		" ",
		/* @__PURE__ */ t("span", { children: r.name })
	]
});
//#endregion
export { r as FileCell };
