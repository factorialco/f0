import workerSrc from "pdfjs-dist/build/pdf.worker.min.js?url"

import { pdfjs } from "@/ui/pdf"

let configured = false

export const configurePdfWorker = (src?: string): void => {
  pdfjs.GlobalWorkerOptions.workerSrc = src ?? workerSrc
  configured = true
}

export const ensurePdfWorker = (): void => {
  if (!configured) configurePdfWorker()
}
