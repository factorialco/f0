import { columnWidths as r } from "./sizes.js";
const t = (o) => typeof o == "number", n = (o) => t(o) ? o : r[o];
export {
  t as colWidthIsNumber,
  n as getColWidth
};
