import { forwardRef } from "react"
import { aiGradientTextClasses } from "@/lib/ai-gradient"
import { Text } from "@/ui/Text"
import type { F0AiTextProps } from "./types"

/**
 * Text painted with the One brand gradient — the headline treatment that marks
 * a surface as AI-generated (the One chat welcome headline, an "…with One"
 * page title).
 *
 * It is a typography component, not a decoration: sizing comes from the shared
 * F0 text variants, so a gradient headline lines up with the `F0Heading` next
 * to it. Use plain `F0Heading` / `F0Text` for everything that is not the AI
 * moment itself — the gradient stops meaning anything if every string on the
 * page carries it.
 */
export const F0AiTextBase = forwardRef<HTMLElement, F0AiTextProps>(
  (props, ref) => {
    return (
      <Text
        ref={ref}
        variant="heading-large"
        {...props}
        // Contrast is undeterminable by construction: the glyphs are painted by
        // a gradient, so there is no single foreground colour to measure.
        data-a11y-color-contrast-ignore=""
        className={aiGradientTextClasses}
      />
    )
  }
)

F0AiTextBase.displayName = "F0AiText"
