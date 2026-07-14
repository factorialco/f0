"use client"

import { Document, Page, pdfjs } from "react-pdf"

import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"

export { Document, Page, pdfjs }
export type { DocumentProps, PageProps } from "react-pdf"
export type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist"
