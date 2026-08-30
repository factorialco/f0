import { columnWidths as e } from "./sizes.js";
//#region src/experimental/OneTable/utils/colWidth.ts
var t = (e) => typeof e == "number", n = (n) => t(n) ? n : e[n];
//#endregion
export { t as colWidthIsNumber, n as getColWidth };
