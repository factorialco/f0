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
}

export type OpenLinkActionType = {
  type: "open-link"
  href: string
}
