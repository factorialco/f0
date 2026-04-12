import StarterKit from "@tiptap/starter-kit"

export const StarterKitExtension = StarterKit.configure({
  heading: { levels: [1, 2, 3] },
  bulletList: {
    HTMLAttributes: {
      class: "f1-bullet-list",
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: "f1-ordered-list",
    },
  },
})
