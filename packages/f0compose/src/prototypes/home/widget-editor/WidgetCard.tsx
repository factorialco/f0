import { useRef } from "react"
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
  onReorder,
}: {
  id: string
  custom: CustomWidget[]
  onRemove?: () => void
  onReorder?: (active: string, target: string) => void
}) {
  const dragStart = useRef<{ x: number; y: number } | null>(null)
  const record = custom.find((widget) => widget.id === id)
  const builtin = isBuiltin(id) ? windowRegistry[id] : undefined
  if (!builtin && !record) return null
  const title = builtin?.title ?? record!.title
  const Content = builtin?.content
  const sample = record ? sampleFor(record) : undefined
  return (
    <F0Box
      shrink={false}
      width="full"
      data-static-widget={id}
      data-widget-draggable={!!onReorder}
      tabIndex={onReorder ? 0 : undefined}
      aria-label={
        onReorder
          ? `Move ${title}. Use Alt and arrow keys to reorder.`
          : undefined
      }
      onPointerDown={(event) => {
        if (
          !onReorder ||
          event.button !== 0 ||
          !(event.target instanceof Element) ||
          event.target.closest("h3") !== event.currentTarget.querySelector("h3")
        )
          return
        event.preventDefault()
        dragStart.current = { x: event.clientX, y: event.clientY }
        event.currentTarget.setPointerCapture(event.pointerId)
      }}
      onPointerMove={(event) => {
        if (!dragStart.current || !onReorder) return
        if (
          Math.hypot(
            event.clientX - dragStart.current.x,
            event.clientY - dragStart.current.y
          ) < 6
        )
          return
        const target = document
          .elementFromPoint(event.clientX, event.clientY)
          ?.closest<HTMLElement>('[data-widget-draggable="true"]')
          ?.dataset.staticWidget
        if (target && target !== id) onReorder(id, target)
      }}
      onPointerUp={(event) => {
        dragStart.current = null
        if (event.currentTarget.hasPointerCapture(event.pointerId))
          event.currentTarget.releasePointerCapture(event.pointerId)
      }}
      onPointerCancel={() => {
        dragStart.current = null
      }}
      onKeyDown={(event) => {
        if (
          !onReorder ||
          event.target !== event.currentTarget ||
          !event.altKey ||
          !["ArrowUp", "ArrowDown"].includes(event.key)
        )
          return
        event.preventDefault()
        const widgets = Array.from(
          event.currentTarget.parentElement?.querySelectorAll<HTMLElement>(
            '[data-widget-draggable="true"]'
          ) ?? []
        )
        const index = widgets.indexOf(event.currentTarget as HTMLElement)
        const target =
          widgets[index + (event.key === "ArrowUp" ? -1 : 1)]?.dataset
            .staticWidget
        if (target) onReorder(id, target)
      }}
    >
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
