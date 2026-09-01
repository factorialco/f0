import { StyleSheet } from "react-native"
import { tv } from "tailwind-variants"

export const wizardRootVariants = tv({
  base: "flex-1",
})

export const wizardHeaderVariants = tv({
  base: "gap-3 px-4 pt-4 pb-2",
})

export const wizardTitleBlockVariants = tv({
  base: "pt-1",
})

export const wizardContentVariants = tv({
  base: "flex-1",
})

export const wizardFooterVariants = tv({
  base: "flex-row gap-3 px-4 pt-3 pb-4",
})

export const wizardFooterButtonVariants = tv({
  base: "flex-1 flex-row",
})

// ScrollView does not support className. The padding value matches the `p-4`
// spacing token (--spacing-4: 16px). StyleSheet.create ensures the object is
// created once and not recreated on every render.
export const wizardScrollContentStyle = StyleSheet.create({
  content: { padding: 16 },
}).content
