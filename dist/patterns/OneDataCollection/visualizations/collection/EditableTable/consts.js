import { DateCell as l } from "./components/cells/DateCell.js";
import { MoneyCell as o } from "./components/cells/MoneyCell.js";
import { NumberCell as t } from "./components/cells/NumberCell.js";
import { SelectCell as m } from "./components/cells/SelectCell.js";
import { DisabledCell as r } from "./components/cells/status/DisabledCell.js";
import { NonEditableCell as i } from "./components/cells/status/NonEditableCell.js";
import { TextCell as e } from "./components/cells/TextCell.js";
const s = {
  text: e,
  number: t,
  money: o,
  date: l,
  select: m,
  multiselect: e,
  "display-only": i,
  disabled: r
};
export {
  s as editableCellMap
};
