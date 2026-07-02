import { useState, useRef, useEffect, useCallback, createContext } from "react"
import {
  F0Avatar,
  F0AvatarList,
  F0Box,
  F0Button,
  F0Icon,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  Search,
  Organization,
  Calendar,
} from "@factorialco/f0-react/icons/app"
import { employees } from "@/fixtures"

import type { GoalNode } from "../shared/types"
import { goalTree } from "../shared/buildTree"
import {
  levelToLabel,
  statusToLabel,
  statusToVariant,
} from "../shared/helpers"
import { NewGoalModal } from "../shared/NewGoalModal"
import type { GoalLevel, GoalStatus } from "../shared/types"

const employeeMap = new Map(employees.map((e) => [e.id, e]))
const tree = goalTree

function formatK(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(0)}k` : String(n)
}

function formatDateES(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" })
}

const ZOOM_STEPS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2]
const DEFAULT_ZOOM_INDEX = 3

/* Dot-grid background as CSS radial-gradient */
const DOT_BG: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, var(--f1-border) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
}

/** Context to let branches pan the canvas to focus on a node */
type MapControls = {
  panTo: (el: HTMLElement) => void
}
const MapControlsCtx = createContext<MapControls>({ panTo: () => {} })

export function TreeMapView() {
  const [zoomIndex, setZoomIndex] = useState(DEFAULT_ZOOM_INDEX)
  const zoom = ZOOM_STEPS[zoomIndex] ?? 1
  const [modalOpen, setModalOpen] = useState(false)
  const [treeData, setTreeData] = useState<GoalNode[]>(tree)

  const zoomIn = () =>
    setZoomIndex((i) => Math.min(i + 1, ZOOM_STEPS.length - 1))
  const zoomOut = () => setZoomIndex((i) => Math.max(i - 1, 0))
  const resetZoom = () => {
    setZoomIndex(DEFAULT_ZOOM_INDEX)
    setPan({ x: 0, y: 0 })
  }

  // Drag-to-pan state (transform-based for 360° movement)
  const canvasRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 })

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return
    const target = e.target as HTMLElement
    if (target.closest("button") || target.closest("[data-card]")) return

    setIsDragging(true)
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    }
    e.preventDefault()
  }, [pan])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      setPan({
        x: dragStart.current.panX + (e.clientX - dragStart.current.x),
        y: dragStart.current.panY + (e.clientY - dragStart.current.y),
      })
    },
    [isDragging]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Pinch-to-zoom on trackpad (ctrl+wheel = pinch gesture on macOS)
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        if (e.deltaY < 0) {
          setZoomIndex((i) => Math.min(i + 1, ZOOM_STEPS.length - 1))
        } else if (e.deltaY > 0) {
          setZoomIndex((i) => Math.max(i - 1, 0))
        }
      }
    },
    []
  )

  /** Pan so a given element is centered in the viewport */
  const panTo = useCallback(
    (el: HTMLElement) => {
      const canvas = canvasRef.current
      const content = contentRef.current
      if (!canvas || !content) return

      const canvasRect = canvas.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()

      // Center of the element relative to the current content position
      const elCenterX = elRect.left + elRect.width / 2
      const elCenterY = elRect.top + elRect.height / 2

      // Center of the canvas viewport
      const canvasCenterX = canvasRect.left + canvasRect.width / 2
      const canvasCenterY = canvasRect.top + canvasRect.height / 2

      // Offset needed to move element center to canvas center
      const offsetX = canvasCenterX - elCenterX
      const offsetY = canvasCenterY - elCenterY

      setPan((prev) => ({
        x: prev.x + offsetX,
        y: prev.y + offsetY,
      }))
    },
    [zoom]
  )

  const controls = { panTo }

  return (
    <div className="relative" style={{ margin: "-20px -24px -24px -24px" }}>
      {/* Canvas — full-bleed, no rounded corners, dot grid bg */}
      <div
        ref={canvasRef}
        className="overflow-hidden"
        style={{
          ...DOT_BG,
          minHeight: "600px",
          padding: "32px",
          backgroundColor: "#F5F6F8",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div
          ref={contentRef}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "top center",
            transition: "none",
          }}
        >
          <div className="flex items-start gap-10 pb-8 pt-16 justify-center">
            <MapControlsCtx.Provider value={controls}>
              {treeData.map((root) => (
                <TreeMapBranch key={root.id} node={root} />
              ))}
            </MapControlsCtx.Provider>
          </div>
        </div>
      </div>

      {/* Vertical toolbar — top-left, F0Button icon-only */}
      <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
        <F0Button label="Search" icon={Search} hideLabel variant="outline" onClick={() => {}} />
        <F0Button label="Zoom in" icon={Plus} hideLabel variant="outline" onClick={zoomIn} disabled={zoomIndex === ZOOM_STEPS.length - 1} />
        <F0Button label="Zoom out" icon={Minus} hideLabel variant="outline" onClick={zoomOut} disabled={zoomIndex === 0} />
        <F0Button label="Fit to screen" icon={Organization} hideLabel variant="outline" onClick={resetZoom} />
      </div>

      {/* Add goal button — top-right */}
      <div className="absolute top-3 right-3 z-10">
        <F0Button
          label="Add goal"
          icon={Plus}
          variant="default"
          onClick={() => setModalOpen(true)}
        />
      </div>

      <NewGoalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(data) => {
          const newGoal: GoalNode = {
            id: `sg-${Date.now()}`,
            title: data.title,
            description: data.description,
            level: data.level as GoalLevel,
            status: data.status as GoalStatus,
            progress: 0,
            ownerId: "emp-001",
            contributorIds: [],
            parentId: null,
            dueDate: data.dueDate || "2026-06-30",
            assignation: data.assignation || "Unassigned",
            measureStart: 0,
            measureTarget: data.measureTarget || 100,
            measureCurrent: 0,
            children: [],
          }
          setTreeData((prev) => [newGoal, ...prev])
          setModalOpen(false)
        }}
      />
    </div>
  )
}

// ── Tree layout ─────────────────────────────────────────────────────────

const CONNECTOR_COLOR = "#e0e0e0"

function VerticalLine({ height = 24 }: { height?: number }) {
  return (
    <div
      style={{
        width: "2px",
        height: `${height}px`,
        backgroundColor: CONNECTOR_COLOR,
        flexShrink: 0,
      }}
    />
  )
}

function TreeMapBranch({ node }: { node: GoalNode }) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = node.children.length > 0
  const branchRef = useRef<HTMLDivElement>(null)

  const handleToggle = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  return (
    <div ref={branchRef} className="flex flex-col items-center">
      <GoalCard
        node={node}
        onToggle={hasChildren ? handleToggle : undefined}
        expanded={expanded}
      />

      {hasChildren && expanded && (
        <div
          className="flex flex-col items-center"
        >
          {/* Vertical line from parent card bottom to children rail */}
          <VerticalLine height={32} />

          {/* Children row */}
          <div className="flex items-start relative" style={{ gap: "40px" }}>
            {node.children.length > 1 && (
              <HorizontalConnector count={node.children.length} />
            )}
            {node.children.map((child) => (
              <div
                key={child.id}
                className="flex flex-col items-center"
              >
                {/* Vertical line from rail down to child card */}
                <VerticalLine height={32} />
                <TreeMapBranch node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function HorizontalConnector({ count }: { count: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [connectorStyle, setConnectorStyle] = useState<{
    left: string
    width: string
  }>({
    left: "0",
    width: "0",
  })

  const measure = useCallback(() => {
    const el = containerRef.current?.parentElement
    if (!el || count < 2) return
    const children = Array.from(el.children).filter(
      (c) => c !== containerRef.current
    )
    const first = children[0] as HTMLElement | undefined
    const last = children[children.length - 1] as HTMLElement | undefined
    if (!first || !last) return

    const parentRect = el.getBoundingClientRect()
    const firstCenter =
      first.getBoundingClientRect().left +
      first.getBoundingClientRect().width / 2 -
      parentRect.left
    const lastCenter =
      last.getBoundingClientRect().left +
      last.getBoundingClientRect().width / 2 -
      parentRect.left

    setConnectorStyle({
      left: `${firstCenter}px`,
      width: `${lastCenter - firstCenter}px`,
    })
  }, [count])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  return (
    <div
      ref={containerRef}
      className="absolute top-0"
      style={{
        ...connectorStyle,
        height: "2px",
        backgroundColor: CONNECTOR_COLOR,
      }}
    />
  )
}

// ── F0-styled Tooltip ───────────────────────────────────────────────────

function Tooltip({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [visible, setVisible] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    timeout.current = setTimeout(() => setVisible(true), 400)
  }
  const hide = () => {
    if (timeout.current) clearTimeout(timeout.current)
    setVisible(false)
  }

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
      {visible && (
        <div
          className="absolute left-1/2 bottom-full mb-1.5 px-2.5 py-1.5 rounded-lg text-xs whitespace-nowrap pointer-events-none z-50"
          style={{
            transform: "translateX(-50%)",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          {label}
        </div>
      )}
    </div>
  )
}

// ── Goal card ───────────────────────────────────────────────────────────

function assigneeAvatar(node: GoalNode) {
  if (node.level === "company") {
    return { type: "company" as const, name: node.assignation }
  }
  if (node.level === "team") {
    return { type: "team" as const, name: node.assignation }
  }
  const owner = employeeMap.get(node.ownerId)
  if (owner) {
    return {
      type: "person" as const,
      firstName: owner.fullName.split(" ")[0] ?? "",
      lastName: owner.fullName.split(" ")[1] ?? "",
      src: owner.avatarUrl,
    }
  }
  return { type: "person" as const, firstName: node.assignation, lastName: "" }
}

function contributorAvatars(node: GoalNode) {
  const ownerEmp = employeeMap.get(node.ownerId)
  const all = [
    ...(ownerEmp
      ? [{ firstName: ownerEmp.fullName.split(" ")[0] ?? "", lastName: ownerEmp.fullName.split(" ")[1] ?? "", src: ownerEmp.avatarUrl }]
      : []),
    ...node.contributorIds
      .map((id) => employeeMap.get(id))
      .filter((emp): emp is NonNullable<typeof emp> => emp != null)
      .map((emp) => ({
        firstName: emp.fullName.split(" ")[0] ?? "",
        lastName: emp.fullName.split(" ")[1] ?? "",
        src: emp.avatarUrl,
      })),
  ]
  return all
}

function GoalCard({
  node,
  onToggle,
  expanded,
}: {
  node: GoalNode
  onToggle?: () => void
  expanded: boolean
}) {
  const owner = employeeMap.get(node.ownerId)
  const hasChildren = node.children.length > 0
  const progressPercent = Math.max(
    0,
    node.measureTarget === node.measureStart
      ? 0
      : ((node.measureCurrent - node.measureStart) /
          (node.measureTarget - node.measureStart)) *
        100
  )

  return (
    <div
      className="relative border border-f1-border rounded-xl shadow-md bg-f1-background p-4 flex flex-col gap-2"
      style={{ width: "280px", minWidth: "280px", cursor: hasChildren ? "pointer" : "default" }}
      onClick={hasChildren && onToggle ? onToggle : undefined}
    >
      {/* Header: level + status */}
      <F0Box display="flex" alignItems="center" justifyContent="between">
        <Tooltip label={`Level: ${levelToLabel(node.level)}`}>
          <span className="rounded-full px-2 py-0.5 text-xs bg-f1-background-secondary text-f1-foreground-secondary">
            {levelToLabel(node.level)}
          </span>
        </Tooltip>
        <Tooltip label={`Status: ${statusToLabel(node.status)}`}>
          <span>
            <F0TagStatus
              text={statusToLabel(node.status)}
              variant={statusToVariant(node.status)}
            />
          </span>
        </Tooltip>
      </F0Box>

      {/* Title */}
      <Tooltip label={`Goal: ${node.title}`}>
        <div>
          <F0Text content={node.title} variant="label" />
        </div>
      </Tooltip>

      {/* Measure: current / target */}
      <Tooltip label={`Start: ${formatK(node.measureStart)} · Actual: ${formatK(node.measureCurrent)} · Target: ${formatK(node.measureTarget)}`}>
        <div>
          <span className="text-sm font-semibold text-f1-foreground">{formatK(node.measureCurrent)}</span>
          <span className="text-sm text-f1-foreground-secondary"> / {formatK(node.measureTarget)}</span>
        </div>
      </Tooltip>

      {/* Progress bar with % */}
      <Tooltip label={`Progress: ${Math.round(progressPercent)}% — Current: ${formatK(node.measureCurrent)} / Target: ${formatK(node.measureTarget)}`}>
        <div>
          <F0Box display="flex" alignItems="center" gap="sm">
            <div className="h-2 rounded-full bg-f1-background-secondary grow">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${Math.min(progressPercent, 100)}%`,
                  backgroundColor: "#00b2a0",
                }}
              />
            </div>
            <F0Text content={`${Math.round(progressPercent)}%`} variant="small" />
          </F0Box>
        </div>
      </Tooltip>

      {/* Assignee + Owner — same row */}
      <div className="flex items-start gap-3 pt-1">
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <span className="text-[10px] text-f1-foreground-secondary">Assignee</span>
          <Tooltip label={`Assignee: ${node.assignation}`}>
            <div className="flex items-center gap-1.5">
              {contributorAvatars(node).length > 1 ? (
                <F0AvatarList
                  type="person"
                  avatars={contributorAvatars(node)}
                  size="xs"
                  max={10}
                  layout="compact"
                />
              ) : (
                <F0Avatar avatar={assigneeAvatar(node)} size="xs" />
              )}
            </div>
          </Tooltip>
        </div>
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <span className="text-[10px] text-f1-foreground-secondary">Owner</span>
          <Tooltip label={owner ? `Owner: ${owner.fullName}` : "No owner assigned"}>
            <div className="flex items-center gap-1.5">
              {owner && (
                <>
                  <F0Avatar
                    avatar={{
                      type: "person",
                      firstName: owner.fullName.split(" ")[0] ?? "",
                      lastName: owner.fullName.split(" ")[1] ?? "",
                      src: owner.avatarUrl,
                    }}
                    size="xs"
                  />
                  <F0Text content={owner.fullName} variant="small" />
                </>
              )}
            </div>
          </Tooltip>
        </div>
      </div>

      {/* Due date */}
      <div className="flex flex-col gap-1 pt-1 border-t border-f1-border-secondary">
        <span className="text-[10px] text-f1-foreground-secondary">Due date</span>
        <Tooltip label={`Due date: ${node.dueDate}`}>
          <div className="flex items-center gap-1 text-f1-foreground-secondary">
            <F0Icon icon={Calendar} size="xs" />
            <F0Text content={formatDateES(node.dueDate)} variant="small" />
          </div>
        </Tooltip>
      </div>

      {/* Expand/collapse arrow — bottom right */}
      {hasChildren && onToggle && (
        <button
          onClick={(e) => { e.stopPropagation(); onToggle() }}
          className="absolute bottom-2 right-2 flex items-center justify-center w-6 h-6 rounded text-f1-foreground-secondary hover:bg-f1-background-hover cursor-pointer border-none bg-transparent"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          <F0Icon
            icon={expanded ? ChevronDown : ChevronRight}
            size="sm"
          />
        </button>
      )}
    </div>
  )
}
