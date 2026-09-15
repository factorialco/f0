/** What the asker filled in. `from` is the value at the time they asked. */
export type F0FieldChangeRequest = {
  from: string
  to: string
  reason?: string
}

/** A request already on the record, waiting for an answer. */
export type F0FieldPendingChange = {
  id: string
  to: string
}

/**
 * Lets a reader who may not edit the field ask whoever administers the record
 * to change it.
 *
 * Answering a request is not part of this: the record screen is where someone
 * asks and where they see they have asked, and the approving happens wherever
 * the product already handles approvals. `onCancel` is the one resolution that
 * belongs here, because withdrawing is the asker taking back their own ask.
 *
 * `pending` is app state on a field definition that is otherwise static config.
 * `status` and the functional `disabled` already work that way, and the
 * alternative puts the ask and its answer in two different places.
 */
export type F0FieldRequestChange = {
  onSubmit: (change: F0FieldChangeRequest) => void | Promise<void>
  pending?: F0FieldPendingChange
  /** Withdraws the pending request. Omit where the asker cannot take it back. */
  onCancel?: (id: string) => void
}

/** The knobs a detail row takes beyond being a detail row at all. */
export type F0FieldInlineConfig = {
  /** Offers the value for copying, beside whatever else the row has. */
  copyable?: boolean
  /** The value cannot be changed here, so activating the row does nothing. */
  readonly?: boolean
  /** Somewhere to go for a reader who may not change the value themselves. */
  requestChange?: F0FieldRequestChange
}

/**
 * Renders the field as a record detail row: the value reads as text where a
 * read-only row would print it, and the editor appears when the row is
 * activated. `true` is the plain row.
 */
export type F0FieldInlineProp = boolean | F0FieldInlineConfig

/** Normalises the `boolean | config` shape into the config the row reads. */
export function resolveInlineConfig(
  inline: F0FieldInlineProp | undefined
): F0FieldInlineConfig | undefined {
  if (!inline) {
    return undefined
  }
  return inline === true ? {} : inline
}
