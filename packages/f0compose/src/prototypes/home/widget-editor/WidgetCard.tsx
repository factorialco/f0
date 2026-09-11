import { F0Box, F0Heading, F0Text } from "@factorialco/f0-react"
import { Widget } from "@factorialco/f0-react/dist/experimental"
import { Delete } from "@factorialco/f0-react/icons/app"

import { Post } from "../windows/CommunitiesWindow"
import { COMMUNITY_POSTS } from "../windows/communityPosts"
import { windowRegistry } from "../windows/WindowsColumn"
import { sampleFor } from "./mock-data"
import { isBuiltin, type CustomWidget } from "./model"

export function WidgetCard({
  id,
  custom,
  onRemove,
}: {
  id: string
  custom: CustomWidget[]
  onRemove?: () => void
}) {
  const record = custom.find((widget) => widget.id === id)
  const builtin = isBuiltin(id) ? windowRegistry[id] : undefined
  if (!builtin && !record) return null
  const title = builtin?.title ?? record!.title
  const Content = builtin?.content
  const sample = record ? sampleFor(record) : undefined
  return (
    <F0Box shrink={false} width="full" data-static-widget={id}>
      <Widget
        header={{
          title,
          ...(onRemove
            ? {
                link: {
                  title: `Remove ${title}`,
                  icon: Delete,
                  onClick: onRemove,
                },
              }
            : {}),
        }}
      >
        {id === "communities" ? (
          <Post post={COMMUNITY_POSTS[1]} />
        ) : Content ? (
          <Content />
        ) : record ? (
          <F0Box display="flex" flexDirection="column" gap="lg">
            <F0Text content={record.context} variant="description" />
            {/number|metric|número/i.test(record.format) ? (
              <>
                <F0Heading
                  content={sample!.value}
                  variant="heading-large"
                  as="h3"
                />
                <F0Text content={sample!.label} variant="label" />
              </>
            ) : /list|lista/i.test(record.format) ? (
              sample!.rows.map((row) => <F0Text key={row} content={row} />)
            ) : (
              <F0Text content={sample!.summary} />
            )}
            <F0Text content="Sample data" variant="description" />
          </F0Box>
        ) : null}
      </Widget>
    </F0Box>
  )
}
