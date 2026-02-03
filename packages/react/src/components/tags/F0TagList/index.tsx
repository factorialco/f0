import { withDataTestId } from "@/lib/data-testid"

import { F0TagList as _F0TagList } from "./F0TagList"

export { TagCounter } from "./components/TagCounter"
export type { TagCounterItem } from "./components/TagCounter"
export type { F0TagListProps as TagListProps, TagType } from "./types"
export const F0TagList = withDataTestId(_F0TagList)
