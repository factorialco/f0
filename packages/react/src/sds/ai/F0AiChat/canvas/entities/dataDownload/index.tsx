import type { CanvasEntityDefinition } from "../../types"

import { DataDownloadContent } from "./DataDownloadContent"
import { DataDownloadProvider } from "./DataDownloadContext"
import { DataDownloadHeader } from "./DataDownloadHeader"
import type { DataDownloadCanvasContent } from "../../../types"

export const dataDownloadCanvasEntity: CanvasEntityDefinition<DataDownloadCanvasContent> =
  {
    type: "dataDownload",
    renderContent: ({ content, refreshKey }) => (
      <DataDownloadContent content={content} refreshKey={refreshKey} />
    ),
    renderHeader: ({ content, onClose }) => (
      <DataDownloadHeader content={content} onClose={onClose} />
    ),
    wrapper: ({ content, children }) => (
      <DataDownloadProvider content={content}>{children}</DataDownloadProvider>
    ),
  }

export type { DataDownloadCanvasContent } from "../../../types"
export { DataDownloadCard } from "./DataDownloadCard"
export type { DataDownloadCardProps } from "./DataDownloadCard"
