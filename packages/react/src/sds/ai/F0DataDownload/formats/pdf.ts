import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"

import Download from "@/icons/app/Download"

import { DownloadFormatDefinition } from "../types"
import { resolveHeaders } from "../utils"

export const pdfFormat: DownloadFormatDefinition = {
  key: "pdf",
  formatName: "PDF",
  icon: Download,
  handler: (dataset, filename) => {
    const { columns, rows, columnLabels } = dataset
    const headers = resolveHeaders(columns, columnLabels)

    const doc = new jsPDF({ orientation: "landscape" })
    autoTable(doc, {
      head: [headers],
      body: rows.map((row) =>
        columns.map((col) => (row[col] == null ? "" : String(row[col])))
      ),
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: {
        // f1-background-secondary: hsla(216, 89%, 18%, 0.06) composited over white
        fillColor: [240, 241, 245],
        textColor: [30, 30, 30],
      },
    })
    doc.save(`${filename}.pdf`)
  },
}
