import Placeholder from "@tiptap/extension-placeholder"

export const createPlaceholderExtension = (placeholder: string) =>
  Placeholder.configure({
    includeChildren: true,
    placeholder: placeholder,
  })
