import { cva, type VariantProps } from "cva"

/**
 * Class variants for {@link BaseBanner}, one slot per element it styles.
 *
 * Both variants are horizontal banners: the media sits above the text on narrow
 * viewports and moves beside it at `sm`. They differ in exactly one place — the
 * text wrapper's max width — so most slots below carry identical values today.
 * They are still written out per variant rather than collapsed into `base`,
 * because the slots are the seam a new variant extends.
 *
 * Every generated class is a static string so Tailwind's JIT can see it.
 */
export const bannerVariants = cva({
  base: "bg-white relative flex w-full flex-col rounded-xl border border-f1-border-secondary shadow-md",
  variants: {
    variant: {
      default: "gap-4 sm:flex-row sm:gap-5",
      "full-width": "gap-4 sm:flex-row sm:gap-5",
    },
  },
  defaultVariants: { variant: "default" },
})

/** Media slot — fixed 16:9, capped beside the text once the row layout kicks in. */
export const mediaVariants = cva({
  base: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl",
  variants: {
    variant: {
      default: "px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      "full-width": "px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
    },
  },
  defaultVariants: { variant: "default" },
})

/** Text + actions column. */
export const contentVariants = cva({
  base: "flex flex-col justify-center",
  variants: {
    variant: {
      default: "gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      "full-width": "gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
    },
  },
  defaultVariants: { variant: "default" },
})

/**
 * Title + subtitle wrapper — the only slot where the two variants differ.
 * `full-width` deliberately lets the copy run the full width of its column.
 */
export const textWrapperVariants = cva({
  base: "flex w-full flex-col gap-1",
  variants: {
    variant: {
      default: "sm:max-w-lg",
      "full-width": "",
    },
  },
  defaultVariants: { variant: "default" },
})

export const titleVariants = cva({
  base: "text-f1-foreground",
  variants: {
    variant: {
      default: "font-bold text-xl",
      "full-width": "font-bold text-xl",
    },
  },
  defaultVariants: { variant: "default" },
})

export const subtitleVariants = cva({
  base: "text-base text-f1-foreground-secondary",
  variants: {
    variant: {
      default: "",
      "full-width": "",
    },
  },
  defaultVariants: { variant: "default" },
})

export const actionsVariants = cva({
  base: "flex",
  variants: {
    variant: {
      default: "gap-3",
      "full-width": "gap-3",
    },
  },
  defaultVariants: { variant: "default" },
})

/**
 * Extracted with `NonNullable` rather than used raw: `VariantProps` widens to
 * `| null`, and `UpsellingBanner` passes `variant` straight through its rest
 * props, so the raw type would leak `null` into that component's public API.
 */
export type BaseBannerVariant = NonNullable<
  VariantProps<typeof bannerVariants>["variant"]
>
