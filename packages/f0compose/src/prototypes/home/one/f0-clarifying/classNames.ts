// F0 focus-ring tokens; these components pass strings only and need no merge library.
export const cn = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(" ")
export const focusRing = () =>
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1"
