import { cva } from "cva"

import { cn } from "@/lib/utils"

const baseButton =
  "group relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border-none p-0 text-base font-medium transition-transform duration-100 active:scale-[.975] data-[pressed=true]:scale-[.975] [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20"

const baseLink =
  "relative flex-row font-medium [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 transition-colors"

export const actionVariants = cva({
  base: "inline-flex items-center gap-1 text-base font-medium transition-colors",
  variants: {
    variant: {
      default: cn(
        baseButton,
        "bg-f1-background-accent-bold text-f1-foreground-inverse after:pointer-events-none after:absolute after:inset-0 after:rounded hover:bg-f1-background-accent-bold-hover",
        "active:bg-f1-background-accent-bold-hover",
        "data-[pressed=true]:bg-f1-background-accent-bold-hover"
      ),
      outline: cn(
        baseButton,
        "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover",
        "active:bg-f1-background-tertiary active:after:opacity-70 active:after:ring-f1-border-hover",
        "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"
      ),
      neutral: cn(
        baseButton,
        "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        "active:bg-f1-background-secondary-hover",
        "data-[pressed=true]:bg-f1-background-secondary-hover"
      ),
      critical: cn(
        baseButton,
        "bg-f1-background-secondary text-f1-foreground-critical after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse hover:after:ring-transparent dark:bg-transparent dark:hover:bg-f1-background-critical-bold",
        "active:bg-f1-background-critical-bold active:text-f1-foreground-inverse active:after:ring-transparent",
        "data-[pressed=true]:bg-f1-background-critical-bold data-[pressed=true]:text-f1-foreground-inverse data-[pressed=true]:after:ring-transparent"
      ),
      ghost: cn(
        baseButton,
        "bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover",
        "active:bg-f1-background-secondary-hover",
        "data-[pressed=true]:bg-f1-background-secondary-hover"
      ),
      promote: cn(
        baseButton,
        "bg-f1-background-promote text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border-promote after:transition-all after:content-[''] hover:bg-f1-background-promote-hover",
        "",
        ""
      ),
      outlinePromote: cn(
        baseButton,
        "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover",
        "active:bg-f1-background-tertiary active:after:opacity-70 active:after:ring-f1-border-hover",
        "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"
      ),
      link: cn(
        baseLink,
        "text-f1-foreground underline decoration-f1-border-hover decoration-1 underline-offset-[5px] visited:text-f1-foreground hover:text-f1-foreground hover:decoration-f1-border-bold active:text-f1-foreground"
      ),
      unstyled: cn(baseLink, "text-inherit no-underline"),
      mention: cn(
        baseLink,
        "bg-f1-background-accent !px-1.5 font-medium text-f1-foreground-accent"
      ),
      selected: cn(
        baseButton,
        "bg-f1-background-selected text-f1-icon-selected shadow-none hover:bg-f1-background-selected-hover hover:text-f1-icon-selected-hover",
        "active:bg-f1-background-selected-hover",
        "data-[pressed=true]:bg-f1-background-selected-hover"
      ),
      ai: cn(
        baseButton,
        "bg-f1-border text-f1-foreground transition-all duration-200 before:content-['']",
        "[--gradient-angle:0deg]",
        "hover:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] hover:before:opacity-100",
        "hover:animate-rotate-gradient",
        "before:pointer-events-none before:absolute before:inset-px before:z-10 before:rounded-[9px] before:bg-f1-background",
        "after:pointer-events-none after:absolute after:inset-0 after:translate-y-px after:scale-95 after:animate-rotate-gradient after:rounded after:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] after:opacity-0 after:blur-sm after:content-[''] after:[transition:transform_200ms,opacity_200ms] hover:after:scale-100 hover:after:opacity-80",
        "active:bg-f1-background-tertiary",
        "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"
      ),
    },
    pressed: {
      true: "scale-[.975]",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    pressed: false,
  },
})

export const buttonSizeVariants = cva({
  variants: {
    size: {
      sm: "rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2",
      md: "rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3",
      lg: "rounded-md text-lg before:rounded-[11px] [&_.main]:h-10 [&_.main]:px-4",
    },
  },
  defaultVariants: { size: "md" },
})

export const linkSizeVariants = cva({
  base: "rounded-xs p-0",
  variants: {
    size: {
      sm: "text-base",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: { size: "md" },
})

export const iconVariants = cva({
  base: "transition-colors",
  variants: {
    variant: {
      default: "",
      outline: "",
      neutral: "",
      critical: "",
      ghost: "",
      promote: "",
      outlinePromote: "",
      ai: "",
      link: "",
      mention: "",
      selected: "",
      unstyled: "",
    },
    mode: {
      default: "",
      only: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      mode: "default",
      class:
        "[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold/80",
    },
    {
      variant: "outline",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon",
    },
    {
      variant: "neutral",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon",
    },
    {
      variant: "critical",
      mode: "default",
      class:
        "[&_svg:not([data-has-color])]:text-f1-icon-critical-bold group-hover:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-active:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:group-hover:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-active:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-bold/80",
    },
    {
      variant: "ghost",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon",
    },
    {
      variant: "promote",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-promote",
    },
    {
      variant: "outlinePromote",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-promote",
    },
    {
      variant: "ai",
      mode: "default",
      class:
        "[&_svg>circle]:[stroke:url(#ai-gradient)] [&_svg>path]:[fill:url(#ai-gradient)] [&_svg>rect]:[fill:url(#ai-gradient)]",
    },
    {
      variant: "link",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon",
    },
    {
      variant: "mention",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-accent",
    },
    {
      variant: "unstyled",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-accent",
    },
    {
      variant: "default",
      mode: "only",
      class:
        "[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold",
    },
    {
      variant: "outline",
      mode: "only",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-bold",
    },
    {
      variant: "neutral",
      mode: "only",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-bold",
    },
    {
      variant: "critical",
      mode: "only",
      class:
        "[&_svg:not([data-has-color])]:text-f1-icon-critical-bold group-hover:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-active:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:group-hover:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-active:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-bold/80",
    },
    {
      variant: "ghost",
      mode: "only",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-bold",
    },
    {
      variant: "promote",
      mode: "only",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-promote",
    },
    {
      variant: "outlinePromote",
      mode: "only",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-promote",
    },
    {
      variant: "link",
      mode: "only",
      class: "[&_svg:not([data-has-color])]:text-f1-icon",
    },
    {
      variant: "unstyled",
      mode: "only",
      class: "[&_svg:not([data-has-color])]:text-f1-icon",
    },
    {
      variant: "mention",
      mode: "default",
      class: "[&_svg:not([data-has-color])]:text-f1-icon-accent",
    },
    {
      variant: "ai",
      mode: "only",
      class:
        "[&_svg>circle]:[stroke:url(#ai-gradient)] [&_svg>path]:[fill:url(#ai-gradient)] [&_svg>rect]:[fill:url(#ai-gradient)]",
    },
  ],
  defaultVariants: {
    variant: "default",
    mode: "default",
  },
})

export const loadingVariants = cva({
  base: "rounded-full border-solid border-t-transparent will-change-transform",
  variants: {
    size: {
      sm: "h-3 w-3 border-[1px]",
      md: "h-4 w-4 border-2",
      lg: "h-5 w-5 border-2",
    },
    variant: {
      default: "border-f1-foreground-inverse border-t-transparent",
      outline: "border-f1-foreground border-t-transparent",
      neutral: "border-f1-foreground border-t-transparent",
      critical: "border-f1-icon-critical border-t-transparent",
      ghost: "border-f1-foreground border-t-transparent",
      promote: "border-f1-icon-promote border-t-transparent",
      outlinePromote: "border-f1-icon-promote border-t-transparent",
      ai: "border-f1-foreground border-t-transparent",
      unstyled: "",
    },
  },
})
