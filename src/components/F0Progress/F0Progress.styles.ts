import { tv } from "tailwind-variants"

export const F0_PROGRESS_LINEAR_TRACK_HEIGHT = 4
export const F0_PROGRESS_DEFAULT_CIRCULAR_SIZE = "default"
export const F0_PROGRESS_CIRCULAR_SIZE = 28
export const F0_PROGRESS_CIRCULAR_STROKE_WIDTH = 3.25
export const F0_PROGRESS_CIRCULAR_RADIUS = 10.375
export const F0_PROGRESS_CIRCULAR_CIRCUMFERENCE =
  2 * Math.PI * F0_PROGRESS_CIRCULAR_RADIUS
export const F0_PROGRESS_CIRCULAR_BACKGROUND_OPACITY = 0.1

export const F0_PROGRESS_CIRCULAR_METRICS = {
  default: {
    size: 28,
    progressSize: 24,
    strokeWidth: 3.25,
    radius: 10.375,
    circumference: 2 * Math.PI * 10.375,
  },
  small: {
    size: 20,
    progressSize: 17.143,
    strokeWidth: 2.32,
    radius: 7.4115,
    circumference: 2 * Math.PI * 7.4115,
  },
} as const

export const f0ProgressRootVariants = tv({
  base: "shrink-0",
  variants: {
    type: {
      linear: "w-full",
      circular: "",
    },
    withLabel: {
      true: "flex-row items-center gap-2",
      false: "",
    },
  },
  defaultVariants: {
    withLabel: false,
  },
})

export const f0ProgressVisualVariants = tv({
  base: "shrink-0",
  variants: {
    type: {
      linear: "w-full",
      circular: "",
    },
    withLabel: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      type: "linear",
      withLabel: true,
      class: "flex-1",
    },
  ],
  defaultVariants: {
    withLabel: false,
  },
})

export const f0ProgressLinearTrackVariants = tv({
  base: "h-1 w-full overflow-hidden rounded-full",
  variants: {
    status: {
      info: "bg-f0-background-info",
      positive: "bg-f0-background-positive",
      warning: "bg-f0-background-warning",
      critical: "bg-f0-background-critical",
    },
  },
  defaultVariants: {
    status: "info",
  },
})

export const f0ProgressLinearFillVariants = tv({
  base: "h-full w-full rounded-full",
  variants: {
    status: {
      info: "bg-f0-icon-info",
      positive: "bg-f0-icon-positive",
      warning: "bg-f0-icon-warning",
      critical: "bg-f0-icon-critical",
    },
  },
  defaultVariants: {
    status: "info",
  },
})
