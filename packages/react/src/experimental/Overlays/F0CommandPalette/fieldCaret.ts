export const CHIP_SELECTOR = "[data-scope-chip]"

const ZWSP = "​"

const strip = (value: string) => value.split(ZWSP).join("")

const isChip = (node: Node): node is HTMLElement =>
  node instanceof HTMLElement && node.matches(CHIP_SELECTOR)

/** Every chip in the field, in document order. */
export const chipsIn = (field: HTMLElement | null): HTMLElement[] =>
  field ? Array.from(field.querySelectorAll<HTMLElement>(CHIP_SELECTOR)) : []

/**
 * The query text split at every chip: `N + 1` segments for `N` chips — what was
 * typed before the first, between each pair, and after the last.
 *
 * Segments rather than one string, because the chips' POSITIONS are part of what
 * was written. Reading the field as a single string throws them away and then
 * has to guess them back, which reorders the sentence into something nobody
 * typed.
 */
export const textSegments = (field: HTMLElement | null): string[] => {
  if (!field) return [""]
  const segments = [""]
  for (const node of Array.from(field.childNodes)) {
    if (isChip(node)) {
      segments.push("")
      continue
    }
    if (node.nodeType === Node.TEXT_NODE || node instanceof HTMLElement) {
      segments[segments.length - 1] += node.textContent ?? ""
    }
  }
  return segments.map(strip)
}

/** The whole query, chip positions discarded: what matching and ranking want. */
export const textOf = (field: HTMLElement | null): string =>
  textSegments(field).join("")

const selectionIn = (field: HTMLElement | null): Range | null => {
  if (!field) return null
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return null
  const range = selection.getRangeAt(0)
  return field.contains(range.startContainer) ? range : null
}

export const caretOffset = (field: HTMLElement | null): number => {
  const range = selectionIn(field)
  if (!field || !range) return 0
  const probe = document.createRange()
  probe.selectNodeContents(field)
  probe.setEnd(range.startContainer, range.startOffset)
  const fragment = probe.cloneContents()
  let out = ""
  for (const node of Array.from(fragment.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) out += node.textContent ?? ""
    else if (node instanceof HTMLElement && !node.matches(CHIP_SELECTOR)) {
      out += node.textContent ?? ""
    }
  }

  return strip(out).length
}

export const caretAtStart = (field: HTMLElement | null): boolean => {
  const range = selectionIn(field)
  if (!range || !range.collapsed) return false
  return caretOffset(field) === 0
}

export const caretAtEnd = (field: HTMLElement | null): boolean => {
  const range = selectionIn(field)
  if (!range || !range.collapsed) return false
  return caretOffset(field) === textOf(field).length
}

export const caretBeforeChip = (field: HTMLElement | null): boolean => {
  const range = selectionIn(field)
  const chip = field?.querySelector(CHIP_SELECTOR)
  if (!field || !range || !chip) return false
  const upToChip = document.createRange()
  upToChip.selectNodeContents(field)
  upToChip.setEndBefore(chip)
  return upToChip.comparePoint(range.startContainer, range.startOffset) <= 0
}

/** Whether `chip` is the thing immediately on one side of the caret. */
const touchesCaret = (
  range: Range,
  chip: HTMLElement,
  side: "before" | "after"
): boolean => {
  const between = document.createRange()
  if (side === "after") {
    between.setStartAfter(chip)
    try {
      between.setEnd(range.startContainer, range.startOffset)
    } catch {
      return false
    }
  } else {
    try {
      between.setStart(range.startContainer, range.startOffset)
    } catch {
      return false
    }
    between.setEndBefore(chip)
  }
  if (between.collapsed) return true

  if (
    between.startContainer.compareDocumentPosition(between.endContainer) &
    Node.DOCUMENT_POSITION_PRECEDING
  ) {
    return false
  }
  return strip(between.toString()) === ""
}

/**
 * WHICH chip the caret is up against, as an index into the chain, or `-1`.
 *
 * The index is the whole point: with a chain of references, `Backspace` has to
 * remove the one it is actually beside. Asking only about the first chip — which
 * is what a single `querySelector` does — deletes the wrong link the moment
 * there are two.
 */
export const chipIndexAtCaret = (
  field: HTMLElement | null,
  side: "before" | "after"
): number => {
  const range = selectionIn(field)
  if (!field || !range || !range.collapsed) return -1
  return chipsIn(field).findIndex((chip) => touchesCaret(range, chip, side))
}

const stripPhantomBreaks = (field: HTMLElement): void => {
  for (const br of Array.from(field.querySelectorAll("br"))) br.remove()
}

const dropCarrierIfRedundant = (field: HTMLElement): void => {
  const selection = window.getSelection()
  const range =
    selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null
  for (const node of Array.from(field.childNodes)) {
    if (node.nodeType !== Node.TEXT_NODE) continue
    const text = node.textContent ?? ""
    if (!text.includes(ZWSP)) continue
    const cleaned = strip(text)

    if (cleaned === "") continue
    const caretHere = range?.startContainer === node
    const before = caretHere
      ? strip(text.slice(0, range.startOffset)).length
      : 0
    node.textContent = cleaned
    if (caretHere) {
      const fixed = document.createRange()
      fixed.setStart(node, Math.min(before, cleaned.length))
      fixed.collapse(true)
      selection?.removeAllRanges()
      selection?.addRange(fixed)
    }
  }
}

export const ensureCaretHome = (field: HTMLElement | null): void => {
  if (!field) return
  stripPhantomBreaks(field)
  dropCarrierIfRedundant(field)
  const last = field.lastChild
  if (
    !last ||
    last.nodeType !== Node.TEXT_NODE ||
    (last.textContent ?? "") === ""
  ) {
    const node = document.createTextNode(ZWSP)
    field.appendChild(node)
    const range = document.createRange()
    range.setStart(node, 0)
    range.collapse(true)
    const selection = window.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(range)
  }
}

export const hasCaretIn = (field: HTMLElement | null): boolean =>
  selectionIn(field) !== null

const tail = (field: HTMLElement): Text => {
  const last = field.lastChild
  if (last && last.nodeType === Node.TEXT_NODE) {
    if ((last.textContent ?? "") === "") last.textContent = ZWSP
    return last as Text
  }
  const node = document.createTextNode(ZWSP)
  field.appendChild(node)
  return node
}

export const caretToEnd = (field: HTMLElement | null): void => {
  if (!field) return
  const node = tail(field)
  const range = document.createRange()

  const lone = (node.textContent ?? "") === ZWSP
  range.setStart(node, lone ? 0 : node.length)
  range.collapse(true)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
}

/**
 * The FIRST chip a pending edit would take, as an index into the chain, or `-1`.
 *
 * The earliest one is the answer that matters: the chain is a path, so losing a
 * link takes everything after it with it, and truncating at the first casualty
 * is the only outcome that leaves a path rather than a gap.
 */
export const editWouldTakeChipFrom = (
  field: HTMLElement | null,
  event: InputEvent
): number => {
  if (!field) return -1
  const chips = chipsIn(field)
  if (chips.length === 0) return -1

  const ranges: Range[] = []
  for (const staticRange of event.getTargetRanges?.() ?? []) {
    const range = document.createRange()
    range.setStart(staticRange.startContainer, staticRange.startOffset)
    range.setEnd(staticRange.endContainer, staticRange.endOffset)
    ranges.push(range)
  }
  if (ranges.length === 0) {
    const selection = document.getSelection()
    const range =
      selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null
    if (range && !range.collapsed) ranges.push(range)
  }

  return chips.findIndex((chip) =>
    ranges.some((range) => range.intersectsNode(chip))
  )
}

export const textAfterEdit = (
  field: HTMLElement | null,
  event: InputEvent
): string => {
  if (!field) return ""
  const selection = document.getSelection()
  const range =
    selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null
  const whole = textOf(field)
  if (!range) return whole + (event.data ?? "")

  const side = (which: "before" | "after") => {
    const probe = document.createRange()
    probe.selectNodeContents(field)
    if (which === "before")
      probe.setEnd(range.startContainer, range.startOffset)
    else probe.setStart(range.endContainer, range.endOffset)
    const fragment = probe.cloneContents()
    fragment.querySelector?.(CHIP_SELECTOR)?.remove()
    return strip(fragment.textContent ?? "")
  }
  return side("before") + (event.data ?? "") + side("after")
}

export const setText = (field: HTMLElement | null, text: string): void => {
  if (!field) return
  // EVERY chip survives, not just the first: the chain is React's to render, and
  // this only owns the text around it.
  for (const node of Array.from(field.childNodes)) {
    if (!isChip(node)) field.removeChild(node)
  }

  field.appendChild(document.createTextNode(text === "" ? ZWSP : text))
  caretToEnd(field)
}
