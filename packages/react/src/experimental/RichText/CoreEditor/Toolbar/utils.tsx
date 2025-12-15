import { AlignTextCenter, AlignTextJustify, AlignTextLeft, AlignTextRight } from "@/icons/app"
import { Editor } from "@tiptap/react"

export const getTextAlignLabel = (editor: Editor) => {
  if (editor.isActive({ textAlign: "left" })) return "Left"
  if (editor.isActive({ textAlign: "center" })) return "Center"
  if (editor.isActive({ textAlign: "right" })) return "Right"
  if (editor.isActive({ textAlign: "justify" })) return "Justify"
  return "Left"
}

export const getTextAlignIcon = (editor: Editor) => {
  if (editor.isActive({ textAlign: "left" })) return AlignTextLeft
  if (editor.isActive({ textAlign: "center" })) return AlignTextCenter
  if (editor.isActive({ textAlign: "right" })) return AlignTextRight
  if (editor.isActive({ textAlign: "justify" })) return AlignTextJustify
  return AlignTextLeft
}
