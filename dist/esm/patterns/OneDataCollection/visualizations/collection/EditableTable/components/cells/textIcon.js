import { getFieldInputIcon as e } from "../../../../../../../lib/field-input-icons.js";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/textIcon.ts
function t(t) {
	if (t) return t.icon ? t.icon : e(t.inputType);
}
//#endregion
export { t as resolveTextCellIcon };
