/**
 * Action item for table export (download or custom action)
 */
export type F0TableExportActionItem = {
  /**
   * Label displayed on the button
   */
  label: string
  /**
   * Icon name to display (from @/icons/app)
   */
  icon?: string
  /**
   * Type of action: download triggers file download, action triggers callback
   */
  type: "download" | "action"
  /**
   * Base64 encoded file data (for type: "download")
   */
  fileData?: string
  /**
   * Filename for download (for type: "download")
   */
  fileName?: string
  /**
   * MIME type of the file (for type: "download")
   */
  mimeType?: string
  /**
   * Action identifier (for type: "action")
   */
  actionId?: string
}

/**
 * Props for the F0TableExport component
 */
export type F0TableExportProps = {
  /**
   * Markdown content to display (table preview + optional text)
   */
  markdown: string
  /**
   * Primary action button configuration
   */
  primaryAction: F0TableExportActionItem
  /**
   * Secondary actions for dropdown (optional)
   */
  secondaryActions?: F0TableExportActionItem[]
}
