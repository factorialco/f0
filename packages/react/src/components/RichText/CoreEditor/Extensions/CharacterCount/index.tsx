import CharacterCount from "@tiptap/extension-character-count"

export const createCharacterCountExtension = (maxCharacters?: number) =>
  CharacterCount.configure({ limit: maxCharacters })
