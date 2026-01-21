import { Details } from "@tiptap/extension-details"

export const DetailsExtension = Details.configure({
  persist: true,
  HTMLAttributes: {
    class: "rich-text-details",
  },
})
