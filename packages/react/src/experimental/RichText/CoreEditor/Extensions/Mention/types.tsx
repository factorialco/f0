export interface MentionNodeAttrs {
  id: string
  label: string
  image_url?: string
  href?: string
}

export interface MentionListRef {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean
}

export interface MentionItemComponentProps {
  item: MentionedUser
  index: number
  selected: boolean
}

export type MentionedUser = {
  id: number
  label: string
  image_url?: string
  href?: string
}

export type MentionsConfig = {
  onMentionQueryStringChanged?: (queryString: string) => Promise<MentionedUser[]> | undefined
  users: MentionedUser[]
}
