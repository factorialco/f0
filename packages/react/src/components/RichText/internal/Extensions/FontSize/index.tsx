import { Extension } from "@tiptap/core"

/**
 * Font sizes (px) the editor renders. 16 is the body size, so text at 16 needs
 * no mark; it is included for completeness when a size is set explicitly.
 *
 * The top two steps match the notes editor's h1 and h2, so a size lifted from a
 * document lands on the same rhythm as its headings.
 */
export const FONT_SIZE_SCALE = [12, 14, 16, 18, 20, 24, 29] as const

export type FontSizeValue = `${(typeof FONT_SIZE_SCALE)[number]}px`

const CLASS_PREFIX = "f0-fs-"

const classNameFor = (fontSize: string): string | null => {
  const px = Number.parseInt(fontSize, 10)

  return FONT_SIZE_SCALE.includes(px as (typeof FONT_SIZE_SCALE)[number])
    ? `${CLASS_PREFIX}${px}`
    : null
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      /** Sets a font size on the selection, e.g. `"24px"`. */
      setFontSize: (fontSize: string) => ReturnType
      /** Removes the font size, falling back to the body size. */
      unsetFontSize: () => ReturnType
    }
  }
}

export interface FontSizeOptions {
  /** Marks the attribute is added to. */
  types: string[]
}

/**
 * Adds a `fontSize` attribute to the `textStyle` mark, so a document can carry
 * text at a size other than the body size.
 *
 * A size on the scale renders as a class rather than an inline style, because
 * the sanitizer that read-only content passes through allows `class` but not
 * `style`; an inline style would be dropped there. Sizes off the scale keep the
 * inline style, so a value we do not recognise degrades instead of vanishing.
 */
export const FontSizeExtension = Extension.create<FontSizeOptions>({
  name: "fontSize",

  addOptions() {
    return {
      types: ["textStyle"],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => {
              const scaleClass = Array.from(element.classList).find((name) =>
                name.startsWith(CLASS_PREFIX)
              )

              if (scaleClass) {
                return `${scaleClass.slice(CLASS_PREFIX.length)}px`
              }

              return element.style.fontSize || null
            },
            renderHTML: (attributes) => {
              const fontSize = attributes.fontSize

              if (typeof fontSize !== "string" || fontSize === "") {
                return {}
              }

              const className = classNameFor(fontSize)
              const style = { style: `font-size: ${fontSize}` }

              // Both, deliberately. The inline style is what makes TextStyle
              // recognise the span when parsing HTML -- it rejects any span
              // without one -- and what a renderer outside F0 reads. The class
              // is what survives the sanitizer applied to read-only content,
              // which allows `class` and drops `style`.
              return className ? { ...style, class: className } : style
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) =>
          chain().setMark("textStyle", { fontSize }).run(),
      unsetFontSize:
        () =>
        ({ chain }) =>
          chain()
            .setMark("textStyle", { fontSize: null })
            .removeEmptyTextStyle()
            .run(),
    }
  },
})
