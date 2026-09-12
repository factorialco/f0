import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { F0Box, F0Heading, F0Text, F0Icon } from "@factorialco/f0-react"
import { Widget } from "@factorialco/f0-react/dist/experimental"
import { Delete, Handle } from "@factorialco/f0-react/icons/app"

import { Post } from "../windows/CommunitiesWindow"
import { COMMUNITY_POSTS } from "../windows/communityPosts"
import { windowRegistry } from "../windows/WindowsColumn"
import { sampleFor } from "./mock-data"
import { isBuiltin, type CustomWidget } from "./model"

export function WidgetCard({
  id,
  custom,
  onRemove,
  sortable = false,
  overlay = false,
  defaultWidget = false,
}: {
  id: string
  custom: CustomWidget[]
  onRemove?: () => void
  sortable?: boolean
  overlay?: boolean
  defaultWidget?: boolean
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: overlay ? `overlay-${id}` : id,
    disabled: !sortable || overlay,
  })
  const record = custom.find((widget) => widget.id === id)
  const builtin = isBuiltin(id) ? windowRegistry[id] : undefined
  if (!builtin && !record) return null
  const title = builtin?.title ?? record!.title
  const Content = builtin?.content
  const sample = record ? sampleFor(record) : undefined
  return (
    <div
      ref={setNodeRef}
      className="relative w-full shrink-0"
      data-static-widget={id}
      data-widget-draggable={sortable && !overlay}
      data-widget-dragging={isDragging}
      data-widget-overlay={overlay}
      aria-hidden={overlay || undefined}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.25 : 1,
      }}
      {...(sortable && !overlay ? attributes : {})}
      aria-label={sortable && !overlay ? `Move ${title}` : undefined}
      onKeyDown={(event) => {
        if (sortable) listeners?.onKeyDown?.(event)
      }}
      onPointerDown={(event) => {
        if (
          sortable &&
          event.target instanceof Element &&
          !event.target.closest("button, a, input") &&
          event.currentTarget
            .querySelector('[role="article"]')
            ?.firstElementChild?.contains(event.target)
        ) {
          listeners?.onPointerDown?.(event)
        }
      }}
    >
      {(sortable || overlay) && (
        <div
          className="pointer-events-none absolute left-4 top-6 z-10"
          aria-hidden
        >
          <F0Icon icon={Handle} size="xs" color="secondary" />
        </div>
      )}
      <Widget
        status={
          defaultWidget ? { text: "Default", variant: "neutral" } : undefined
        }
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
    </div>
  )
}
