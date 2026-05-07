import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type { GraphNode, ZoomLevel } from "@/patterns/F0Graph/types"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Graph } from "@/patterns/F0Graph/F0Graph"
import { F0GraphNodeAvatar } from "@/patterns/F0Graph/F0GraphNode/components/F0GraphNodeAvatar"
import { F0GraphNodeSubtitle } from "@/patterns/F0Graph/F0GraphNode/components/F0GraphNodeSubtitle"
import { F0GraphNodeTitle } from "@/patterns/F0Graph/F0GraphNode/components/F0GraphNodeTitle"

import { DATASET_SIZES, generateOrgData } from "./generateOrgData"

interface Employee {
  name: string
  title: string
}

const STATIC_NODES: GraphNode<Employee>[] = [
  {
    id: "1",
    parentId: null,
    data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
    childrenCount: 3,
  },
  {
    id: "2",
    parentId: "1",
    data: { name: "Marcus Chen", title: "Chief Technology Officer" },
    childrenCount: 2,
  },
  {
    id: "3",
    parentId: "1",
    data: { name: "Elena Dupont", title: "Chief Financial Officer" },
    childrenCount: 1,
  },
  {
    id: "4",
    parentId: "1",
    data: { name: "Laura Vázquez", title: "Chief People Officer" },
    childrenCount: 0,
  },
  {
    id: "5",
    parentId: "2",
    data: { name: "Tomás Herrera", title: "Engineering Manager" },
    childrenCount: 0,
  },
  {
    id: "6",
    parentId: "2",
    data: { name: "Aisha Patel", title: "QA Lead" },
    childrenCount: 0,
  },
  {
    id: "7",
    parentId: "3",
    data: { name: "David Park", title: "Finance Manager" },
    childrenCount: 0,
  },
]

// Stable portrait URLs from randomuser.me (deterministic by seed)
const PORTRAITS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/90.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
]

function getPortrait(id: string): string | undefined {
  // Give roughly half the nodes a portrait
  const hash = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return hash % 2 === 0 ? PORTRAITS[hash % PORTRAITS.length] : undefined
}

function renderEmployee(node: GraphNode<Employee>, _zoomLevel: ZoomLevel) {
  const { name, title } = node.data as Employee
  const [firstName = "", lastName = ""] = name.split(" ")
  const portrait = getPortrait(node.id)
  return (
    <>
      <F0GraphNodeAvatar>
        <F0AvatarPerson
          firstName={firstName}
          lastName={lastName}
          size="lg"
          src={portrait}
        />
      </F0GraphNodeAvatar>
      <F0GraphNodeTitle>{name}</F0GraphNodeTitle>
      <F0GraphNodeSubtitle>{title}</F0GraphNodeSubtitle>
    </>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: 10,
  color: "#666",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
}

const selectStyle: React.CSSProperties = {
  fontSize: 11,
  height: 18,
  padding: "0 4px",
  border: "1px solid #ddd",
  borderRadius: 3,
  background: "#fff",
}

const checkboxLabelStyle: React.CSSProperties = {
  fontSize: 11,
  display: "flex",
  alignItems: "center",
  gap: 3,
  cursor: "pointer",
}

export function App() {
  const [defaultZoom, setDefaultZoom] = useState(1)
  const [showControls, setShowControls] = useState(true)
  const [showMinimap, setShowMinimap] = useState(false)
  const [direction, setDirection] = useState<"TB" | "LR">("TB")
  const [expandDepth, setExpandDepth] = useState(3)
  const [selectionMode, setSelectionMode] = useState<
    "single" | "multi" | "none"
  >("single")
  const [fullScreen, setFullScreen] = useState(true)
  const [datasetSize, setDatasetSize] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [remountKey, setRemountKey] = useState(0)
  const [showPerfPanel, setShowPerfPanel] = useState(false)

  // ── FPS counter ──
  const fpsRef = useRef(0)
  const framesRef = useRef(0)
  const lastTimeRef = useRef(performance.now())
  const [fps, setFps] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!showPerfPanel) return
    function tick() {
      framesRef.current++
      const now = performance.now()
      const delta = now - lastTimeRef.current
      if (delta >= 1000) {
        fpsRef.current = Math.round((framesRef.current * 1000) / delta)
        setFps(fpsRef.current)
        framesRef.current = 0
        lastTimeRef.current = now
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [showPerfPanel])

  // ── Render counter ──
  const renderCountRef = useRef(0)
  renderCountRef.current++

  const renderNodeWithCount = useCallback(
    (node: GraphNode<Employee>, zoomLevel: ZoomLevel) => {
      return renderEmployee(node, zoomLevel)
    },
    []
  )

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }

  const nodes = useMemo(
    () => (datasetSize === 0 ? STATIC_NODES : generateOrgData(datasetSize)),
    [datasetSize]
  )

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 24,
          minHeight: 24,
          maxHeight: 24,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "0 8px",
          background: "#fafafa",
          borderBottom: "1px solid #eee",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={labelStyle}>zoom</span>
          <select
            style={selectStyle}
            value={defaultZoom}
            onChange={(e) => setDefaultZoom(Number(e.target.value))}
          >
            <option value={0.1}>0.1 (dot)</option>
            <option value={0.2}>0.2</option>
            <option value={0.3}>0.3</option>
            <option value={0.5}>0.5 (compact)</option>
            <option value={0.7}>0.7</option>
            <option value={1}>1.0 (detail)</option>
            <option value={1.5}>1.5</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={labelStyle}>dir</span>
          <select
            style={selectStyle}
            value={direction}
            onChange={(e) => setDirection(e.target.value as "TB" | "LR")}
          >
            <option value="TB">Top-Bottom</option>
            <option value="LR">Left-Right</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={labelStyle}>depth</span>
          <select
            style={selectStyle}
            value={expandDepth}
            onChange={(e) => setExpandDepth(Number(e.target.value))}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={labelStyle}>select</span>
          <select
            style={selectStyle}
            value={selectionMode}
            onChange={(e) =>
              setSelectionMode(e.target.value as "single" | "multi" | "none")
            }
          >
            <option value="single">single</option>
            <option value="multi">multi</option>
            <option value="none">none</option>
          </select>
        </div>

        <label style={checkboxLabelStyle}>
          <input
            type="checkbox"
            checked={showControls}
            onChange={(e) => setShowControls(e.target.checked)}
          />
          controls
        </label>

        <label style={checkboxLabelStyle}>
          <input
            type="checkbox"
            checked={showMinimap}
            onChange={(e) => setShowMinimap(e.target.checked)}
          />
          minimap
        </label>

        <label style={checkboxLabelStyle}>
          <input
            type="checkbox"
            checked={fullScreen}
            onChange={(e) => setFullScreen(e.target.checked)}
          />
          fullScreen
        </label>

        <label style={checkboxLabelStyle}>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          dark
        </label>

        <div style={{ flex: 1 }} />

        <button
          style={{ fontSize: 10, padding: "1px 6px", cursor: "pointer" }}
          onClick={() => {
            setExpandDepth(99)
            setRemountKey((k) => k + 1)
          }}
        >
          Expand All
        </button>
        <button
          style={{ fontSize: 10, padding: "1px 6px", cursor: "pointer" }}
          onClick={() => {
            setExpandDepth(0)
            setRemountKey((k) => k + 1)
          }}
        >
          Collapse All
        </button>

        <button
          style={{ fontSize: 10, padding: "1px 6px", cursor: "pointer" }}
          onClick={() => setShowPerfPanel((v) => !v)}
        >
          {showPerfPanel ? "Hide Perf" : "Perf"}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={labelStyle}>dataset</span>
          <select
            style={selectStyle}
            value={datasetSize}
            onChange={(e) => setDatasetSize(Number(e.target.value))}
          >
            {DATASET_SIZES.map((ds) => (
              <option key={ds.value} value={ds.value}>
                {ds.label}
              </option>
            ))}
          </select>
          <span style={{ fontSize: 10, color: "#999" }}>
            ({nodes.length.toLocaleString()} nodes, {visibleCount} visible)
          </span>
        </div>
      </div>

      <div style={{ flex: 1, position: "relative" }}>
        <F0Graph
          key={`${defaultZoom}-${direction}-${expandDepth}-${fullScreen}-${datasetSize}-${remountKey}`}
          nodes={nodes}
          renderNode={renderEmployee}
          defaultZoom={defaultZoom}
          defaultDirection={direction}
          defaultExpandDepth={expandDepth}
          selectionMode={selectionMode}
          showControls={showControls}
          showMinimap={showMinimap}
          fullScreen={fullScreen}
          searchable={{
            getLabel: (n) => n.data.name,
            getSecondaryLabel: (n) => n.data.title,
            placeholder: "Search people",
          }}
          onVisibleNodesChange={setVisibleCount}
        />
        {showPerfPanel && (
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              background: "rgba(0,0,0,0.75)",
              color: "#0f0",
              fontFamily: "monospace",
              fontSize: 11,
              padding: "6px 10px",
              borderRadius: 4,
              lineHeight: 1.6,
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            <div>FPS: {fps}</div>
            <div>App renders: {renderCountRef.current}</div>
            <div>Nodes: {nodes.length.toLocaleString()}</div>
            <div>Visible: {visibleCount}</div>
          </div>
        )}
      </div>
    </div>
  )
}
