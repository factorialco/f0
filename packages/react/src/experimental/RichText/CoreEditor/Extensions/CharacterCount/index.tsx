import type { Extension } from "@tiptap/core"
import CharacterCount from "@tiptap/extension-character-count"

export const createCharacterCountExtension = (
  maxCharacters?: number
): Extension => CharacterCount.configure({ limit: maxCharacters })
