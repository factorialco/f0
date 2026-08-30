import { DateCell as e } from "./components/cells/DateCell.js";
import { NumberCell as t } from "./components/cells/NumberCell.js";
import { MoneyCell as n } from "./components/cells/MoneyCell.js";
import { MultiSelectCell as r } from "./components/cells/MultiSelectCell.js";
import { SelectCell as i } from "./components/cells/SelectCell.js";
import { DisabledCell as a } from "./components/cells/status/DisabledCell.js";
import { NonEditableCell as o } from "./components/cells/status/NonEditableCell.js";
import { TextCell as s } from "./components/cells/TextCell.js";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/consts.ts
var c = {
	text: s,
	number: t,
	money: n,
	date: e,
	select: i,
	multiselect: r,
	"display-only": o,
	disabled: a
}, l = /* @__PURE__ */ new Set([
	"text",
	"number",
	"money"
]);
//#endregion
export { c as editableCellMap, l as typingEditTypes };
