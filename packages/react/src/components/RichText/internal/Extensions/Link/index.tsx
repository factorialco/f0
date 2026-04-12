import Link from "@tiptap/extension-link"

export const LinkExtension = Link.configure({
  openOnClick: true,
  HTMLAttributes: {
    rel: "noopener noreferrer",
    target: "_blank",
  },
})
