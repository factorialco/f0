import type { PDFDocumentProxy } from "@/ui/pdf"

const getPdfBlob = async (pdf: PDFDocumentProxy): Promise<Blob> => {
  const data = await pdf.saveDocument()
  return new Blob([new Uint8Array(data)], { type: "application/pdf" })
}

export const printPdf = async (pdf: PDFDocumentProxy | null): Promise<void> => {
  if (!pdf) return

  const blobUrl = URL.createObjectURL(await getPdfBlob(pdf))
  const iframe = document.createElement("iframe")
  iframe.style.display = "none"
  iframe.src = blobUrl
  iframe.onload = () => {
    iframe.focus()
    iframe.contentWindow?.print()
    const cleanup = () => {
      URL.revokeObjectURL(blobUrl)
      iframe.remove()
    }
    iframe.contentWindow?.addEventListener("afterprint", cleanup)
    setTimeout(cleanup, 60_000)
  }
  document.body.appendChild(iframe)
}

export const downloadPdf = async (
  pdf: PDFDocumentProxy | null,
  filename: string
): Promise<void> => {
  if (!pdf) return

  const url = URL.createObjectURL(await getPdfBlob(pdf))
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename.length > 0 ? filename : "document.pdf"
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}
