import { useState, useCallback, useRef, useEffect } from "react"

import { F0Box, F0Text } from "@factorialco/f0-react"

import {
  jobCatalogTree,
  type JobCatalogNode,
  type JobCatalogNodeType,
} from "./jobCatalogData"

// ---------------------------------------------------------------------------
// Colors per node type
// ---------------------------------------------------------------------------

const NODE_BG: Record<JobCatalogNodeType, string> = {
  root: "#1e293b",
  family: "#7c3aed",
  function: "#2563eb",
  role: "#059669",
  level: "#d97706",
}

// ---------------------------------------------------------------------------
// Get initials
// ---------------------------------------------------------------------------

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
}

// ---------------------------------------------------------------------------
// Card component
// ---------------------------------------------------------------------------

function NodeCard({
  node,
  isSelected,
  onClick,
}: {
  node: JobCatalogNode
  isSelected: boolean
  onClick: () => void
}) {
  const color = NODE_BG[node.type]
  const hasChildren = node.children.length > 0

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        cursor: "pointer",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: 140,
          padding: "16px 12px",
          borderRadius: 8,
          border: isSelected ? "2px solid #2563eb" : "1px solid #e5e7eb",
          background: isSelected ? "#eff6ff" : "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          boxShadow: isSelected
            ? "0 0 0 3px rgba(37,99,235,0.1)"
            : "0 1px 3px rgba(0,0,0,0.06)",
          transition: "all 0.15s",
          position: "relative",
        }}
      >
        {/* Avatar circle */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {getInitials(node.name)}
        </div>

        {/* Name */}
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "#111827",
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: 120,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {node.name}
        </span>
      </div>

      {/* Bottom connector dot + child count */}
      {hasChildren && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Vertical line from card */}
          <div style={{ width: 1, height: 8, background: "#d1d5db" }} />
          {/* Dot with count */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 11,
              color: "#6b7280",
            }}
          >
            <span>{node.children.length}</span>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                border: "1.5px solid #d1d5db",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                color: "#9ca3af",
                cursor: "pointer",
              }}
            >
              +
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Tree level rendering with connecting lines (SVG)
// ---------------------------------------------------------------------------

interface TreeLevelProps {
  nodes: JobCatalogNode[]
  parentCenter: number | null // x center of parent card (relative to this level container)
  onSelect: (node: JobCatalogNode) => void
  selectedId: string | null
  expandedIds: Set<string>
  onToggleExpand: (id: string) => void
  depth: number
}

function TreeLevel({
  nodes,
  parentCenter,
  onSelect,
  selectedId,
  expandedIds,
  onToggleExpand,
  depth,
}: TreeLevelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardPositions, setCardPositions] = useState<number[]>([])

  useEffect(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll<HTMLElement>("[data-card]")
    const containerRect = containerRef.current.getBoundingClientRect()
    const positions = Array.from(cards).map((card) => {
      const rect = card.getBoundingClientRect()
      return rect.left - containerRect.left + rect.width / 2
    })
    setCardPositions(positions)
  }, [nodes, expandedIds])

  // Find which node is expanded at this level
  const expandedChild = nodes.find((n) => expandedIds.has(n.id) && n.children.length > 0)

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Connecting lines SVG */}
      {parentCenter !== null && cardPositions.length > 0 && (
        <svg
          style={{ width: "100%", height: 40, overflow: "visible" }}
          preserveAspectRatio="none"
        >
          {/* Horizontal line connecting all cards */}
          {cardPositions.length > 1 && (
            <line
              x1={cardPositions[0]}
              y1={20}
              x2={cardPositions[cardPositions.length - 1]}
              y2={20}
              stroke="#d1d5db"
              strokeWidth={1.5}
            />
          )}
          {/* Vertical drops to each card */}
          {cardPositions.map((x, i) => (
            <line key={i} x1={x} y1={20} x2={x} y2={40} stroke="#d1d5db" strokeWidth={1.5} />
          ))}
          {/* Vertical line from parent center to horizontal bar */}
          <line
            x1={parentCenter}
            y1={0}
            x2={parentCenter}
            y2={20}
            stroke="#d1d5db"
            strokeWidth={1.5}
          />
        </svg>
      )}

      {/* Cards row */}
      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "nowrap",
        }}
      >
        {nodes.map((node) => (
          <div
            key={node.id}
            data-card
            onClick={(e) => {
              e.stopPropagation()
              if (node.children.length > 0) {
                onToggleExpand(node.id)
              }
            }}
          >
            <NodeCard
              node={node}
              isSelected={selectedId === node.id}
              onClick={() => onSelect(node)}
            />
          </div>
        ))}
      </div>

      {/* Expanded children level */}
      {expandedChild && (
        <TreeLevel
          nodes={expandedChild.children}
          parentCenter={
            cardPositions[nodes.indexOf(expandedChild)] ?? null
          }
          onSelect={onSelect}
          selectedId={selectedId}
          expandedIds={expandedIds}
          onToggleExpand={onToggleExpand}
          depth={depth + 1}
        />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Detail panel
// ---------------------------------------------------------------------------

function NodeDetail({
  node,
  onClose,
}: {
  node: JobCatalogNode
  onClose: () => void
}) {
  const color = NODE_BG[node.type]

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: 360,
        borderLeft: "1px solid #e5e7eb",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        overflowY: "auto",
        background: "#fff",
        zIndex: 10,
      }}
    >
      <F0Box display="flex" justifyContent="between" alignItems="center">
        <span
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#fff",
            background: color,
            borderRadius: 4,
            padding: "2px 8px",
          }}
        >
          {node.type}
        </span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          ✕
        </button>
      </F0Box>

      <F0Text content={node.name} variant="label" />

      {node.description && <F0Text content={node.description} variant="body" />}

      {node.children.length > 0 && (
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Children" variant="label" />
          {node.children.map((child) => {
            const childColor = NODE_BG[child.type]
            return (
              <div
                key={child.id}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: childColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 9,
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {getInitials(child.name)}
                </div>
                <span style={{ flex: 1 }}>{child.name}</span>
                <span style={{ color: "#9ca3af", fontSize: 10, textTransform: "uppercase" }}>
                  {child.type}
                </span>
              </div>
            )
          })}
        </F0Box>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function OrganizationTab() {
  const [selectedNode, setSelectedNode] = useState<JobCatalogNode | null>(null)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set([jobCatalogTree.id])
  )

  const handleSelect = useCallback((node: JobCatalogNode) => {
    setSelectedNode(node)
  }, [])

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  return (
    <div
      style={{
        position: "relative",
        height: "calc(100vh - 180px)",
        minHeight: 400,
        overflow: "auto",
      }}
    >
      {/* Zoom controls placeholder */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          zIndex: 5,
        }}
      >
        <button
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            background: "#fff",
            cursor: "pointer",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() =>
            setExpandedIds(
              new Set(
                (function collectAll(n: JobCatalogNode): string[] {
                  return [n.id, ...n.children.flatMap(collectAll)]
                })(jobCatalogTree)
              )
            )
          }
          title="Expand all"
        >
          +
        </button>
        <button
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            background: "#fff",
            cursor: "pointer",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setExpandedIds(new Set([jobCatalogTree.id]))}
          title="Collapse all"
        >
          −
        </button>
      </div>

      {/* Tree canvas */}
      <div
        style={{
          padding: "60px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "fit-content",
        }}
      >
        {/* Root card */}
        <div data-card>
          <NodeCard
            node={jobCatalogTree}
            isSelected={selectedNode?.id === jobCatalogTree.id}
            onClick={() => handleSelect(jobCatalogTree)}
          />
        </div>

        {/* Children levels */}
        {expandedIds.has(jobCatalogTree.id) && jobCatalogTree.children.length > 0 && (
          <TreeLevel
            nodes={jobCatalogTree.children}
            parentCenter={null}
            onSelect={handleSelect}
            selectedId={selectedNode?.id ?? null}
            expandedIds={expandedIds}
            onToggleExpand={handleToggleExpand}
            depth={1}
          />
        )}
      </div>

      {/* Detail panel */}
      {selectedNode && (
        <NodeDetail node={selectedNode} onClose={() => setSelectedNode(null)} />
      )}
    </div>
  )
}
