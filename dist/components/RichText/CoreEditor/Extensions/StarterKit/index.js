import { StarterKit as t } from "../../../../../node_modules/.pnpm/@tiptap_starter-kit@2.11.7/node_modules/@tiptap/starter-kit/dist/index.js";
const r = t.configure({
  heading: { levels: [1, 2, 3] },
  bulletList: {
    HTMLAttributes: {
      class: "f1-bullet-list"
    }
  },
  orderedList: {
    HTMLAttributes: {
      class: "f1-ordered-list"
    }
  }
});
export {
  r as StarterKitExtension
};
