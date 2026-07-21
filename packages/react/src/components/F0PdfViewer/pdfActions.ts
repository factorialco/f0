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

/** Download for the non-PDF kinds. Fetched into a blob first: the anchor
 * `download` attribute is ignored on cross-origin URLs, so a direct link to a
 * CDN text/csv file would navigate the app to the raw file instead. */
export const downloadFromUrl = async (
  url: string,
  filename?: string,
  withCredentials = true
): Promise<void> => {
  let href = url
  let objectUrl: string | undefined
  try {
    const response = await fetch(url, {
      credentials: withCredentials ? "include" : "same-origin",
    })
    if (!response.ok) throw new Error(`${response.status}`)
    objectUrl = URL.createObjectURL(await response.blob())
    href = objectUrl
  } catch {
    // Can't read the file (e.g. CORS) — open it in a new tab instead of
    // navigating the app away.
  }
  const anchor = document.createElement("a")
  anchor.href = href
  anchor.download = filename ?? ""
  anchor.rel = "noreferrer"
  if (!objectUrl) anchor.target = "_blank"
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  if (objectUrl) URL.revokeObjectURL(objectUrl)
}
