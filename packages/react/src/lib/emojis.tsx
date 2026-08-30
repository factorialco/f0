import confetti from "canvas-confetti"
import { cva, type VariantProps } from "cva"
import { motion } from "motion/react"
import { RefObject, useCallback } from "react"
import { parse } from "twemoji-parser"

import { useReducedMotion } from "./a11y"
import { cn } from "./utils"

interface ParseObject {
  url: string
  indices: [number, number]
  text: string
}

const emojiVariants = cva({
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

/**
 * Font size per box, for the native glyph. An `<img>` fills whatever box it is
 * given; a character does not — without pinning this it would inherit whatever
 * the surrounding text happens to be and land at a different size in every
 * caller. Matched to the box so both modes read as the same weight.
 */
const nativeEmojiVariants = cva({
  variants: {
    size: {
      xs: "text-[12px]",
      sm: "text-[16px]",
      md: "text-[20px]",
      lg: "text-[24px]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

/**
 * How an emoji is drawn.
 *
 * - `image` (default) swaps it for a twemoji SVG, so every platform shows the
 *   same picture.
 * - `native` renders the character and lets the OS draw it, so people see the
 *   emoji they know from the rest of their machine.
 *
 * F0Chat asks for `native`; the rest of F0 stays on `image` for now. Flipping
 * this default is the single switch that takes the whole design system native.
 */
export type EmojiRenderMode = "image" | "native"

export interface EmojiImageProps extends VariantProps<typeof emojiVariants> {
  emoji: string
  alt?: string
  mode?: EmojiRenderMode
}

export function EmojiImage({
  emoji,
  size,
  alt,
  mode = "image",
}: EmojiImageProps) {
  const emojiEntity = mode === "native" ? null : parseEmoji(emoji)

  const motionProps = {
    initial: { scale: 0.75 },
    animate: {
      scale: 1,
    },
    exit: { scale: 0.75 },
    transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
  }

  if (mode === "native") {
    return (
      <motion.span
        key={emoji}
        // `font-emoji` only ever wraps a lone glyph — never prose, where it
        // would turn digits, `#` and `™` into pictures. The box matches the
        // image variant's so swapping modes doesn't move the layout.
        className={cn(
          emojiVariants({ size }),
          nativeEmojiVariants({ size }),
          "inline-flex items-center justify-center leading-none font-emoji"
        )}
        aria-label={alt === "" ? undefined : (alt ?? emoji)}
        role={alt === "" ? undefined : "img"}
        aria-hidden={alt === "" ? true : undefined}
        {...motionProps}
      >
        {emoji}
      </motion.span>
    )
  }

  return emojiEntity ? (
    <motion.img
      key={emojiEntity.url}
      src={emojiEntity.url}
      alt={alt ?? emoji}
      className={emojiVariants({ size })}
      draggable={false}
      {...motionProps}
    />
  ) : (
    <motion.span key={emoji} {...motionProps}>
      {emoji}
    </motion.span>
  )
}

const parseEmoji = (emoji: string): ParseObject | null => {
  const [entity] = parse(emoji, {
    buildUrl: (codePoints) =>
      `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`,
  })

  return entity || null
}

export function getEmojiLabel(emoji: string): string {
  return `${emoji} emoji`
}

export const useEmojiConfetti = () => {
  const shouldReduceMotion = useReducedMotion()

  const fireEmojiConfetti = useCallback(
    (emoji: string, elementRef: RefObject<HTMLElement>) => {
      const button = elementRef.current
      if (button) {
        const rect = button.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top

        confetti({
          particleCount: 20,
          gravity: 0,
          spread: 360,
          startVelocity: 10,
          ticks: 50,
          origin: {
            x: centerX / window.innerWidth,
            y: centerY / window.innerHeight,
          },
          shapes: [confetti.shapeFromText({ text: emoji, scalar: 2 })],
          scalar: 2,
          disableForReducedMotion: shouldReduceMotion,
        })
      }
    },
    [shouldReduceMotion]
  )

  return { fireEmojiConfetti }
}
