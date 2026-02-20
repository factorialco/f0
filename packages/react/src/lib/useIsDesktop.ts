import { useMediaQuery } from "usehooks-ts"

/**
 * Returns true when the viewport width is >= 640px (Tailwind's `sm` breakpoint).
 */
export const useIsDesktop = () =>
  useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  })

/**
 * Returns true when the viewport width is < 640px (below Tailwind's `sm` breakpoint).
 */
export const useIsMobile = () =>
  useMediaQuery("(max-width: 639px)", {
    initializeWithValue: false,
  })
