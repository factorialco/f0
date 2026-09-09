import type { Ref, SVGProps } from "react"

import { forwardRef, useId } from "react"

/**
 * The One mark for the navbar button — Oskar's own export
 * (`~/Desktop/one-fill.svg`, a 20x20 fill glyph), used in BOTH of the
 * button's states (Oskar, 2026-09-02).
 *
 * ONE shape, two paints, which is the point: the button used to swap to
 * f0's `F0OneIcon` when it went active, so the glyph changed SHAPE
 * halfway through an interaction. Now only the paint changes.
 *
 * - `OneMark` fills with `currentColor`, so a ghost `F0Button` paints it
 *   through the same `text-f1-icon` as the megaphone beside it. It takes
 *   `SVGProps` and forwards a ref, which is what f0's `IconType` wants.
 * - `OneMarkGradient` fills the same path with the brand gradient, for
 *   the open state. The stops are the prototype's One palette — the same
 *   lavender, ONE red and ONE orange as the composer's focus glow and the
 *   panel's blank-state headline — at full opacity, because those alphas
 *   exist to soften a GLOW and a glyph wants the real colour.
 *
 * Both are `forwardRef` and take `SVGProps`, so BOTH satisfy f0's
 * `IconType` and either can be handed to a ghost `F0Button`'s `icon`.
 * That is what lets the pressed state stay ghost and merely change
 * colour, the way the Home clock-in does (Oskar) — the gradient rides in
 * the SVG's own `fill`, so f0's `text-f1-icon` utility has nothing to
 * fight over.
 *
 * The gradient id runs through `useId`: two instances on one page would
 * otherwise share a def and whichever mounted last would win.
 */
const ONE_MARK =
  "M9.99219 13.6035C11.3082 13.6037 12.6031 13.9918 13.7197 14.748C14.1693 15.0526 14.1641 15.7524 13.7129 16.0537C12.5978 16.7973 11.3055 17.2078 9.99219 17.208C8.6401 17.208 7.37187 16.7834 6.28906 16.0645C5.83127 15.7604 5.83015 15.0508 6.28809 14.7471C7.39918 14.0103 8.68547 13.6036 9.99219 13.6035ZM3.93555 6.2793C4.24013 5.82971 4.93987 5.83489 5.24121 6.28613C5.98498 7.40135 6.39542 8.69431 6.39551 10.0078C6.3954 11.3599 5.97094 12.6281 5.25195 13.7109C4.94786 14.1685 4.23826 14.1688 3.93457 13.7109C3.19787 12.6 2.79112 11.3144 2.79102 10.0078C2.7911 8.69161 3.17918 7.39606 3.93555 6.2793ZM14.748 6.2793C15.0526 5.82971 15.7524 5.83489 16.0537 6.28613C16.7975 7.40135 17.2079 8.69431 17.208 10.0078C17.2079 11.3599 16.7834 12.6281 16.0645 13.7109C15.7604 14.1685 15.0508 14.1688 14.7471 13.7109C14.0104 12.6 13.6036 11.3144 13.6035 10.0078C13.6036 8.69161 13.9917 7.39606 14.748 6.2793ZM9.99219 2.79102C11.3082 2.7912 12.6031 3.17931 13.7197 3.93555C14.1693 4.24011 14.1641 4.93986 13.7129 5.24121C12.5978 5.98483 11.3055 6.39532 9.99219 6.39551C8.64009 6.39546 7.37187 5.97087 6.28906 5.25195C5.83127 4.94794 5.83015 4.23831 6.28809 3.93457C7.39918 3.19775 8.68547 2.79106 9.99219 2.79102Z"

export const OneMark = forwardRef(function OneMark(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d={ONE_MARK} />
    </svg>
  )
})

export const OneMarkGradient = forwardRef(function OneMarkGradient(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
  const id = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient
          id={id}
          x1="17.208"
          y1="9.99951"
          x2="2.79102"
          y2="9.99951"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A1ADE5" />
          <stop offset="0.5" stopColor="#E51943" stopOpacity="0.7" />
          <stop offset="1" stopColor="#E55619" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} d={ONE_MARK} />
    </svg>
  )
})
