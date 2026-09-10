import { RightPanelCollapse, RightPanelExpand } from "./HomeToolbarActions"
import { F0Button } from "@factorialco/f0-react"
import {
  Comment,
  ChartLine,
  CalendarArrowRight,
  SearchPerson,
  File,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react"
import { useProfile } from "../profileStore"
import { useWidgetCollapse } from "./widgetCollapse"
import { railPanelTop } from "./railGeometry"
import {
  useHomeRefreshing,
  HomeLoadingSkeleton,
} from "../setup/homeRefresh"
import { WindowPanel, WindowStack, type PanelSpec } from "./WindowStack"
import type { WindowId } from "./types"

// PR48 useWidgetRail: vertical cards, catalog glyphs, same widget render in
// a preview outside the scrolling strip. Existing stack still owns the cards.
export function WidgetRail(
  props: ComponentProps<typeof WindowStack<WindowId>>
) {
  const profile = useProfile()
  const { collapsed, toggleCollapsed } = useWidgetCollapse(profile)
  const loading = useHomeRefreshing(profile)
  const [peek, setPeek] = useState<{ id: WindowId; top: number } | null>(
    null
  )
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>()
  const root = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const [previewHeight, setPreviewHeight] = useState(0)
  useLayoutEffect(() => {
    if (!previewRef.current) return
    const observer = new ResizeObserver(([entry]) =>
      setPreviewHeight(entry.contentRect.height)
    )
    observer.observe(previewRef.current)
    return () => observer.disconnect()
  }, [peek?.id])
  useEffect(() => () => clearTimeout(leaveTimer.current), [])
  const docked = props.state.open.filter(
    (id) => !props.state.floating.includes(id)
  )
  const folded = docked.filter((id) => collapsed.includes(id))
  const expanded = docked.filter((id) => !collapsed.includes(id))
  const width =
    (expanded.length ? props.state.columnWidth : 0) +
    (folded.length ? 56 : 0)
  const closePeek = () => {
    leaveTimer.current = setTimeout(() => setPeek(null), 180)
  }
  const holdPeek = () => clearTimeout(leaveTimer.current)
  const spec = (id: WindowId, preview = false): PanelSpec => {
    const original = props.specFor(id)
    return {
      ...original,
      content: (
        <WidgetContent loading={loading}>{original.content}</WidgetContent>
      ),
      actions: (
        <>
          {original.actions}
          <F0Button
            label={`${preview ? "Expand" : "Collapse"} ${original.title}`}
            icon={preview ? RightPanelExpand : RightPanelCollapse}
            hideLabel
            variant="ghost"
            size="md"
            onClick={() => {
              toggleCollapsed(id)
              setPeek(null)
            }}
          />
        </>
      ),
    }
  }
  if (!docked.length) return null
  return (
    <div
      ref={root}
      data-widget-rail
      className={`flex min-h-0 shrink-0 ${props.overlay ? "absolute bottom-0 right-0 top-12 z-20" : "relative h-full"}`}
      style={{ width, maxWidth: props.maxWidth }}
    >
      {expanded.length > 0 && (
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="min-h-0 flex-1">
            <WindowStack
              {...props}
              maxWidth={
                props.maxWidth
                  ? props.maxWidth - (folded.length ? 56 : 0)
                  : undefined
              }
              state={{
                ...props.state,
                open: expanded,
                weights: expanded.map(() => 1),
              }}
              overlay={false}
              verticalScroll
              specFor={(id) => spec(id)}
            />
          </div>
        </div>
      )}
      {folded.length > 0 && (
        <div
          aria-label="Collapsed widgets"
          className="flex h-full w-14 shrink-0 flex-col items-center gap-2 overflow-y-auto py-2"
          onScroll={() => setPeek(null)}
        >
          {folded.map((id) => (
            <div
              key={id}
              onMouseEnter={(event) => {
                holdPeek()
                const top =
                  event.currentTarget.getBoundingClientRect().top -
                  (root.current?.getBoundingClientRect().top ?? 0)
                setPeek({
                  id,
                  top,
                })
              }}
              onMouseLeave={closePeek}
              data-widget-anchor={id}
            >
              <F0Button
                label={`Expand ${props.specFor(id).title}`}
                icon={widgetGlyph(id)}
                hideLabel
                size="lg"
                variant="outline"
                onClick={() => {
                  toggleCollapsed(id)
                  setPeek(null)
                }}
              />
            </div>
          ))}
        </div>
      )}
      {peek && folded.includes(peek.id) && (
        <div
          ref={previewRef}
          data-widget-preview
          className="absolute right-14 z-30 flex flex-col [&>section]:!shrink"
          style={{
            top: railPanelTop({
              anchorOffsetTop: peek.top,
              panelHeight: previewHeight,
              containerHeight: root.current?.clientHeight ?? 600,
            }),
            width: Math.min(props.state.columnWidth, 448),
            maxHeight: "calc(100% - 16px)",
          }}
          onMouseEnter={holdPeek}
          onMouseLeave={closePeek}
        >
          <WindowPanel
            windowKey={`widget:${peek.id}`}
            spec={spec(peek.id, true)}
            weight={1}
            totalWeight={1}
            hugsContent
            onClose={() => {
              props.onClose(peek.id)
              setPeek(null)
            }}
            onToggleMaximized={() => {
              props.onToggleMaximized(peek.id)
              setPeek(null)
            }}
          />
        </div>
      )}
    </div>
  )
}

function widgetGlyph(id: WindowId) {
  if (id === "recruitment") return SearchPerson
  if (id === "documents") return File
  if (["shifts", "holidays", "events", "clockin"].includes(id))
    return CalendarArrowRight
  if (id === "communities") return Comment
  if (id === "celebrations") return Sparkles
  return ChartLine
}

function WidgetContent({
  loading,
  children,
}: {
  loading: boolean
  children: ReactNode
}) {
  const [opening, setOpening] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setOpening(false), 600)
    return () => clearTimeout(timer)
  }, [])
  return loading || opening ? <HomeLoadingSkeleton /> : <>{children}</>
}
