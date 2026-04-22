export type ActionType =
  | CopyActionType
  | NavigateActionType
  | OpenLinkActionType

export type CopyActionType = {
  type: "copy"
  text?: string
}

export type NavigateActionType = {
  type: "navigate"
  href: string
  /**
   * Whether to show the trailing chevron icon. Defaults to `true`.
   * Set to `false` for dense layouts (e.g. hover cards) where the
   * chevron adds visual noise without conveying information.
   */
  showChevron?: boolean
}

export type OpenLinkActionType = {
  type: "open-link"
  href: string
}
