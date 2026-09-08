export type ActionType =
  | CopyActionType
  | NavigateActionType
  | OpenLinkActionType
  | DrawerActionType

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

/**
 * Disclosure trigger. The item only flips a chevron and reports the click;
 * whatever it reveals is rendered and owned by the parent, so the state is
 * controlled.
 */
export type DrawerActionType = {
  type: "drawer"
  expanded: boolean
  onToggle: () => void
  /** `id` of the revealed element, for `aria-controls`. Pass it only while that element is in the DOM. */
  controls?: string
}
