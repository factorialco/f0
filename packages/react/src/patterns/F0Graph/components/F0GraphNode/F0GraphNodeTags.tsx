import { Tag, type TagVariant } from "@/components/tags/F0Tag/F0Tag"

interface F0GraphNodeTagsProps {
  tags: TagVariant[]
}

/**
 * Renders a flex-wrap row with every tag shown individually. Tags are never
 * grouped or collapsed into a summary — even several tags of the same type are
 * all rendered as-is.
 */
export function F0GraphNodeTags({ tags }: F0GraphNodeTagsProps) {
  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap items-center justify-center gap-1">
      {tags.map((tag, index) => (
        <div key={`${tag.type}-${index}`}>
          <Tag tag={tag} />
        </div>
      ))}
    </div>
  )
}
