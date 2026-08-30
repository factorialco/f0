import { FIELD_GAP as e } from "../constants.js";
import { FieldRenderer as t } from "../fields/FieldRenderer.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/components/RowRenderer.tsx
function r({ row: r, sectionId: i }) {
	return /* @__PURE__ */ n("div", {
		className: "@container",
		children: /* @__PURE__ */ n("div", {
			className: `flex @[480px]:flex-row flex-col items-start ${e} [&>*]:flex-1 [&>*]:w-full`,
			children: r.fields.map((e) => /* @__PURE__ */ n(t, {
				field: e,
				sectionId: i
			}, e.id))
		})
	});
}
//#endregion
export { r as RowRenderer };
