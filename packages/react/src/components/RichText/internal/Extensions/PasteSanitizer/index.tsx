import { Extension } from "@tiptap/core"
import { Plugin, PluginKey } from "@tiptap/pm/state"

// Replace NBSPs (raw U+00A0 or HTML entity forms) with regular spaces at
// paste time so content from PDFs/Word wraps normally instead of breaking
// mid-word.
const NBSP_FORMS = /\xA0|&nbsp;|&#0*160;|&#[xX]0*[aA]0;/g

export const sanitizePasted = (s: string): string => s.replace(NBSP_FORMS, " ")

export const PasteSanitizer = Extension.create({
  name: "pasteSanitizer",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("pasteSanitizer"),
        props: {
          transformPastedHTML: sanitizePasted,
          transformPastedText: sanitizePasted,
        },
      }),
    ]
  },
})
