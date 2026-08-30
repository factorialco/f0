import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { withSkeleton as n } from "../../lib/skeleton.js";
import { configurePdfWorker as r } from "./pdfWorker.js";
import { F0PdfViewerBase as i } from "./F0PdfViewer.js";
import { F0PdfViewerSkeleton as a } from "./F0PdfViewerSkeleton.js";
import { pdfScales as o } from "./types.js";
//#region src/components/F0PdfViewer/index.tsx
var s = e(t("F0PdfViewer", n(i, a)));
//#endregion
export { s as F0PdfViewer, r as configurePdfWorker, o as pdfScales };
