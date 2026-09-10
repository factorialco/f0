import { useEffect, useState } from "react"

/**
 * EVERY DIALOG SURFACE ON THE PAGE. A dialog, an alert dialog and a bottom
 * sheet are the same shape in the DOM — Radix builds all three on the same
 * primitive — so one role pair covers F0Dialog wherever it portals to, the
 * drawer positions included.
 *
 * A popover wears `role="dialog"` too, this coachmark's own panel first among
 * them, which is what the popper wrapper rules out: a select opening inside the
 * very field a step is describing has not taken the page over, and a coachmark
 * that stood down for it would stand down for itself.
 */
const DIALOGS = '[role="dialog"], [role="alertdialog"]'

const isDialog = (element: HTMLElement) =>
  // Absent on a dialog that is not Radix's; only an explicit "closed" — the
  // state a panel wears while it animates out — means it is on its way off.
  element.dataset.state !== "closed" &&
  !element.closest("[data-radix-popper-content-wrapper]")

const dialogOnScreen = () =>
  [...document.querySelectorAll<HTMLElement>(DIALOGS)].some(isDialog)

/**
 * `true` while a dialog is open anywhere on the page.
 *
 * Watched in the DOM rather than read from a store because there is no store to
 * read: a dialog is opened by rendering one, from anywhere in the app, and the
 * coachmark is mounted somewhere else entirely.
 *
 * Mounting is the signal — a closed dialog is removed from the DOM — and
 * `data-state` is watched alongside it for the panels that are kept mounted
 * instead. The observer lives exactly as long as a coachmark is on screen,
 * which is seconds.
 */
export const useDialogOpen = () => {
  // Read on the first render rather than in the effect, so a coachmark that
  // opens while a dialog is already up never paints a frame over it.
  const [open, setOpen] = useState(
    () => typeof document !== "undefined" && dialogOnScreen()
  )

  useEffect(() => {
    if (typeof MutationObserver !== "function") {
      return
    }

    const sync = () => setOpen(dialogOnScreen())
    sync()

    const observer = new MutationObserver(sync)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-state"],
    })
    return () => observer.disconnect()
  }, [])

  return open
}
