import { cn } from "@/lib/utils"
import { cva } from "cva"

const baseButton =
  "group relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border-none p-0 text-base font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline"

const baseLink =
  "relative flex-row font-medium h-fit [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 transition-colors"

export const actionVariants = cva({
  base: "inline-flex items-center gap-1 text-base font-medium transition-colors",
  variants: {
    variant: {
      default: cn(
        baseButton,
        "bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover",
        "active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]",
        "data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]"
      ),
      outline: cn(
        baseButton,
        "bg-f1-background-inverse-secondary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover",
        "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover",
        "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"
      ),
      neutral: cn(
        baseButton,
        "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]",
        "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]"
      ),
      critical: cn(
        baseButton,
        "bg-f1-background-secondary text-f1-foreground-critical after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse hover:after:ring-transparent dark:bg-transparent dark:hover:bg-f1-background-critical-bold",
        "active:bg-f1-background-critical-bold active:text-f1-foreground-inverse active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] active:after:ring-transparent",
        "data-[pressed=true]:bg-f1-background-critical-bold data-[pressed=true]:text-f1-foreground-inverse data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:after:ring-transparent"
      ),
      ghost: cn(
        baseButton,
        "bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]",
        "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]",
        "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"
      ),
      promote: cn(
        baseButton,
        "bg-f1-background-promote text-f1-foreground shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(245,165,28,.15)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border-promote after:transition-all after:content-[''] hover:bg-f1-background-promote-hover dark:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.30)]",
        "active:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]",
        "data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]"
      ),
      outlinePromote: cn(
        baseButton,
        "bg-f1-background-inverse-secondary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover",
        "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover",
        "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"
      ),
      link: cn(
        baseLink,
        "text-f1-foreground underline decoration-f1-border-hover decoration-1 underline-offset-[5px] visited:text-f1-foreground hover:text-f1-foreground hover:decoration-f1-border-bold active:text-f1-foreground"
      ),
      mention: cn(
        baseLink,
        "bg-f1-background-accent !px-1.5 font-medium text-f1-foreground-accent"
      ),
      selected: cn(
        baseButton,
        "bg-f1-background-selected text-f1-icon-selected shadow-none hover:bg-f1-background-selected-hover hover:text-f1-icon-selected-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]",
        "active:bg-f1-background-selected-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]",
        "data-[pressed=true]:bg-f1-background-selected-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"
      ),
    },
    pressed: {
      true: "[&_.main]:translate-y-px",
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
      sm: "rounded-sm text-sm [&_.main]:h-6 [&_.main]:px-2",
      md: "rounded text-base [&_.main]:h-8 [&_.main]:px-3",
      lg: "rounded-md text-lg [&_.main]:h-10 [&_.main]:px-4",
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
      link: "",
      mention: "",
      selected: "",
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
      class: "[&>svg]:text-f1-icon-inverse dark:[&>svg]:text-f1-icon-bold/80",
    },
    {
      variant: "outline",
      mode: "default",
      class: "[&>svg]:text-f1-icon",
    },
    {
      variant: "neutral",
      mode: "default",
      class: "[&>svg]:text-f1-icon",
    },
    {
      variant: "critical",
      mode: "default",
      class:
        "[&>svg]:text-f1-icon-critical-bold group-hover:[&>svg]:text-f1-icon-inverse group-active:[&>svg]:text-f1-icon-inverse group-data-[pressed=true]:[&>svg]:text-f1-icon-inverse dark:group-hover:[&>svg]:text-f1-icon-bold/80 dark:group-active:[&>svg]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&>svg]:text-f1-icon-bold/80",
    },
    {
      variant: "ghost",
      mode: "default",
      class: "[&>svg]:text-f1-icon",
    },
    {
      variant: "promote",
      mode: "default",
      class: "[&>svg]:text-f1-icon-promote",
    },
    {
      variant: "outlinePromote",
      mode: "default",
      class: "[&>svg]:text-f1-icon-promote",
    },
    {
      variant: "link",
      mode: "default",
      class: "[&>svg]:text-f1-icon",
    },
    {
      variant: "mention",
      mode: "default",
      class: "[&>svg]:text-f1-icon-accent",
    },
    {
      variant: "default",
      mode: "only",
      class: "[&>svg]:text-f1-icon-inverse dark:[&>svg]:text-f1-icon-bold",
    },
    {
      variant: "outline",
      mode: "only",
      class: "[&>svg]:text-f1-icon-bold",
    },
    {
      variant: "neutral",
      mode: "only",
      class: "[&>svg]:text-f1-icon-bold",
    },
    {
      variant: "critical",
      mode: "only",
      class:
        "[&>svg]:text-f1-icon-critical-bold group-hover:[&>svg]:text-f1-icon-inverse group-active:[&>svg]:text-f1-icon-inverse group-data-[pressed=true]:[&>svg]:text-f1-icon-inverse dark:group-hover:[&>svg]:text-f1-icon-bold/80 dark:group-active:[&>svg]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&>svg]:text-f1-icon-bold/80",
    },
    {
      variant: "ghost",
      mode: "only",
      class: "[&>svg]:text-f1-icon-bold",
    },
    {
      variant: "promote",
      mode: "only",
      class: "[&>svg]:text-f1-icon-promote",
    },
    {
      variant: "outlinePromote",
      mode: "only",
      class: "[&>svg]:text-f1-icon-promote",
    },
    {
      variant: "link",
      mode: "only",
      class: "[&>svg]:text-f1-icon",
    },
    {
      variant: "mention",
      mode: "default",
      class: "[&>svg]:text-f1-icon-accent",
    },
  ],
  defaultVariants: {
    variant: "default",
    mode: "default",
  },
})
