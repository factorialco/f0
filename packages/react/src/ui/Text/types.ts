export const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const
export const textTags = ["p", "span", "div", "label", "code"] as const
export const allTags = [...headingTags, ...textTags] as const

export type HeadingTags = (typeof headingTags)[number]
export type TextTags = (typeof textTags)[number]
export type AsAllowedList = (typeof allTags)[number]
