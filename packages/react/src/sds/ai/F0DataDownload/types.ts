/**
 * A single download action item — represents one downloadable format/file.
 */
export type F0DataDownloadActionItem = {
  /**
   * Label displayed on the button (e.g. "Download CSV", "Download Excel")
   */
  label: string
  /**
   * Type of action. Currently only "download" is supported,
   * which opens the URL in a new tab.
   */
  type: "download"
  /**
   * URL to download the file — opens in a new tab when clicked.
   */
  downloadUrl: string
}

/**
 * Props for the F0DataDownload component.
 *
 * Renders an optional markdown preview/description followed by
 * download buttons. When the agent has prepared data exports,
 * it triggers this frontend tool with the download URLs.
 */
export type F0DataDownloadProps = {
  /**
   * Optional markdown content to display above the download buttons.
   * Can contain a table preview, descriptive text, or any markdown.
   */
  markdown?: string
  /**
   * Primary download button configuration.
   */
  primaryAction: F0DataDownloadActionItem
  /**
   * Additional download format options shown in a dropdown menu.
   */
  secondaryActions?: F0DataDownloadActionItem[]
}
