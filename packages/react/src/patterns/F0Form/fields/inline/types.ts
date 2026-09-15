/** The knobs a detail row takes beyond being a detail row at all. */
export type F0FieldInlineConfig = {
  /** Offers the value for copying, beside whatever else the row has. */
  copyable?: boolean
  /** The value cannot be changed here, so activating the row does nothing. */
  readonly?: boolean
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
