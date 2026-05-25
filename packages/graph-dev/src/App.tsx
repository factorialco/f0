import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type { F0GraphNodeRenderContext } from "@/patterns/F0Graph/F0Graph"
import type { GraphNode } from "@/patterns/F0Graph/types"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Card } from "@/components/F0Card"
import { F0Text } from "@/components/F0Text"
import { F0TagPerson } from "@/components/tags/F0TagPerson"
import { DataList } from "@/experimental/Lists/DataList"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
import { Pin, WhatsappChat } from "@/icons/app"
import { F0Graph } from "@/patterns/F0Graph/F0Graph"
import { F0GraphNode } from "@/patterns/F0Graph/F0GraphNode"

import { DATASET_SIZES, generateOrgData } from "./generateOrgData"

interface Team {
  name: string
  members: number
}

interface Employee {
  name: string
  title: string
  pronouns?: string
  email?: string
  phone?: string
  workEmail?: string
  workplace?: string
  workableDays?: ReadonlyArray<"M" | "T" | "W" | "R" | "F" | "S" | "U">
  managerId?: string | null
  teams?: ReadonlyArray<Team>
}

const ALL_DAYS = ["M", "T", "W", "R", "F", "S", "U"] as const

const DAY_CODE_TO_INDEX: Record<(typeof ALL_DAYS)[number], number> = {
  M: 0,
  T: 1,
  W: 2,
  R: 3,
  F: 4,
  S: 5,
  U: 6,
}

function profileDefaults(
  id: string,
  name: string,
  parentId: string | null
): Partial<Employee> {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z]+/g, ".")
    .replace(/^\.|\.$/g, "")
  const hash = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const cities = [
    "Barcelona",
    "Madrid",
    "Lisbon",
    "Berlin",
    "Paris",
    "Amsterdam",
  ]
  const teams: Team[] = [
    { name: "Engineering", members: 23 },
    { name: "Time Tracking", members: 16 },
    { name: "Operations", members: 11 },
    { name: "Design", members: 8 },
  ]
  return {
    pronouns: hash % 2 === 0 ? "He/Him" : "She/Her",
    email: `${slug}@example.com`,
    phone: `+34 6${(700 + (hash % 99)).toString().padStart(2, "0")} ${(100 + (hash % 800)).toString().padStart(3, "0")} ${(100 + (hash % 800)).toString().padStart(3, "0")}`,
    workEmail: `${slug}@company.com`,
    workplace: cities[hash % cities.length],
    workableDays: ["M", "T", "R", "F", "U"],
    managerId: parentId,
    teams: [teams[hash % teams.length], teams[(hash + 1) % teams.length]],
  }
}

const STATIC_NODES: GraphNode<Employee>[] = [
  {
    id: "1",
    parentId: null,
    data: {
      name: "Sofia Reyes",
      title: "Chief Executive Officer",
      ...profileDefaults("1", "Sofia Reyes", null),
    },
    childrenCount: 3,
  },
  {
    id: "2",
    parentId: "1",
    data: {
      name: "Marcus Chen",
      title: "Chief Technology Officer",
      ...profileDefaults("2", "Marcus Chen", "1"),
    },
    childrenCount: 2,
  },
  {
    id: "3",
    parentId: "1",
    data: {
      name: "Elena Dupont",
      title: "Chief Financial Officer",
      ...profileDefaults("3", "Elena Dupont", "1"),
    },
    childrenCount: 1,
  },
  {
    id: "4",
    parentId: "1",
    data: {
      name: "Laura Vázquez",
      title: "Chief People Officer",
      ...profileDefaults("4", "Laura Vazquez", "1"),
    },
    childrenCount: 0,
  },
  {
    id: "5",
    parentId: "2",
    data: {
      name: "Tomás Herrera",
      title: "Engineering Manager",
      ...profileDefaults("5", "Tomas Herrera", "2"),
    },
    childrenCount: 0,
  },
  {
    id: "6",
    parentId: "2",
    data: {
      name: "Aisha Patel",
      title: "QA Lead",
      ...profileDefaults("6", "Aisha Patel", "2"),
    },
    childrenCount: 0,
  },
  {
    id: "7",
    parentId: "3",
    data: {
      name: "David Park",
      title: "Finance Manager",
      ...profileDefaults("7", "David Park", "3"),
    },
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

// Tag pools for deterministic metadata on every node
const TEAM_POOL = [
  "Engineering",
  "Time Tracking",
  "Operations",
  "Design",
  "People",
  "Finance",
  "Marketing",
  "Product",
] as const

const LOCATION_POOL = [
  "Barcelona",
  "Madrid",
  "Lisbon",
  "Berlin",
  "Paris",
  "Amsterdam",
  "Remote",
] as const

type EmployeeTag =
  | { type: "team"; name: string }
  | {
      type: "raw"
      text: string
      icon: typeof Pin
    }

function getEmployeeTags(node: GraphNode<Employee>): EmployeeTag[] {
  const hash = node.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const teams = node.data.teams?.map((t) => t.name) ?? [
    TEAM_POOL[hash % TEAM_POOL.length],
    TEAM_POOL[(hash + 3) % TEAM_POOL.length],
  ]
  const workplace =
    node.data.workplace ?? LOCATION_POOL[hash % LOCATION_POOL.length]
  return [
    ...teams.map((name) => ({ type: "team" as const, name })),
    {
      type: "raw" as const,
      text: workplace,
      icon: Pin,
    },
  ]
}

function renderEmployee(
  node: GraphNode<Employee>,
  ctx: F0GraphNodeRenderContext
) {
  const { name, title } = node.data as Employee
  const [firstName = "", lastName = ""] = name.split(" ")
  const portrait = getPortrait(node.id)
  return (
    <F0GraphNode
      {...ctx}
      avatar={{
        type: "person",
        firstName,
        lastName,
        src: portrait,
      }}
      title={name}
      subtitle={title}
      tags={getEmployeeTags(node)}
    />
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

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col border-0 border-t border-dashed border-f1-border-secondary">
      <header className="flex items-center px-4 pb-2 pt-3">
        <F0Text
          content={title}
          as="span"
          className="text-base font-semibold leading-5 text-f1-foreground"
        />
      </header>
      <div className="flex flex-col gap-2 pb-2">{children}</div>
    </section>
  )
}

export function App() {
  const [defaultZoom, setDefaultZoom] = useState(1)
  const [showControls, setShowControls] = useState(true)
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

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }

  const nodes = useMemo(
    () =>
      datasetSize === 0
        ? STATIC_NODES
        : generateOrgData(datasetSize).map((n) => ({
            ...n,
            data: {
              ...n.data,
              ...profileDefaults(n.id, n.data.name, n.parentId),
            },
          })),
    [datasetSize]
  )

  const nodesById = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes])

  return (
    <div
      className="bg-f1-background text-f1-foreground"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
        style={{
          height: 24,
          minHeight: 24,
          maxHeight: 24,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "0 8px",
          borderBottom: "1px solid",
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
          fullScreen={fullScreen}
          searchable={{
            getLabel: (n) => n.data.name,
            getSecondaryLabel: (n) => n.data.title,
            placeholder: "Search people",
          }}
          nodeTagTypes={["team", "raw"]}
          nodeTagTypeLabels={{
            team: "Teams",
            raw: "Workplace",
          }}
          detailPanel={(n) => {
            const e = n.data
            const [firstName = "", lastName = ""] = e.name.split(" ")
            const portrait = getPortrait(n.id)
            const manager = n.parentId ? nodesById.get(n.parentId) : undefined
            const days = e.workableDays ?? []
            return {
              variant: "resource",
              header: (
                <div className="flex flex-col gap-[10px] px-5 pb-3 pt-6">
                  <F0AvatarPerson
                    firstName={firstName}
                    lastName={lastName}
                    src={portrait}
                    size="xl"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-end gap-1.5">
                      <F0Text
                        as="span"
                        content={e.name}
                        className="text-xl font-semibold leading-7 text-f1-foreground"
                      />
                      {e.pronouns && (
                        <F0Text
                          as="span"
                          content={`(${e.pronouns})`}
                          className="text-sm font-medium leading-5 text-f1-foreground-secondary"
                        />
                      )}
                    </div>
                    {e.title && (
                      <F0Text
                        as="span"
                        content={e.title}
                        className="text-lg text-f1-foreground-secondary"
                      />
                    )}
                  </div>
                </div>
              ),
              actions: [
                {
                  label: "View profile",
                  onClick: () => console.log("view profile", n.id),
                },
                {
                  label: "Send message",
                  icon: WhatsappChat,
                  onClick: () => console.log("message", n.id),
                },
                {
                  label: "Copy link",
                  onClick: () => console.log("copy link", n.id),
                },
                {
                  label: "Remove",
                  onClick: () => console.log("remove", n.id),
                },
              ],
              children: (
                <>
                  <Section title="Contact details">
                    <div className="flex flex-col px-3 pb-1">
                      <DataList label="Email">
                        <DataList.Item text={e.email ?? "—"} />
                      </DataList>
                      <DataList label="Phone number">
                        <DataList.Item text={e.phone ?? "—"} />
                      </DataList>
                    </div>
                  </Section>
                  <Section title="Work details">
                    <div className="flex flex-col px-3 pb-1">
                      <DataList label="Email">
                        <DataList.Item text={e.workEmail ?? "—"} />
                      </DataList>
                      <DataList label="Workplace">
                        <DataList.Item text={e.workplace ?? "—"} />
                      </DataList>
                    </div>
                    <div className="flex flex-col gap-0.5 px-4 pb-2">
                      <F0Text
                        as="span"
                        content="Workable days"
                        className="text-base leading-5 text-f1-foreground-secondary"
                      />
                      <Weekdays
                        activatedDays={days
                          .map((d) => DAY_CODE_TO_INDEX[d])
                          .filter((i): i is number => typeof i === "number")}
                      />
                    </div>
                    {manager && (
                      <div className="flex flex-col gap-0.5 px-4 pb-2">
                        <F0Text
                          as="span"
                          content="Managed by"
                          className="text-base leading-5 text-f1-foreground-secondary"
                        />
                        <F0TagPerson
                          name={manager.data.name}
                          src={getPortrait(manager.id)}
                        />
                      </div>
                    )}
                  </Section>
                  {e.teams && e.teams.length > 0 && (
                    <Section title="Teams">
                      <div className="flex items-stretch gap-2 px-3 pb-5">
                        {e.teams.map((t) => (
                          <div key={t.name} className="flex-1">
                            <F0Card
                              compact
                              fullHeight
                              avatar={{ type: "team", name: t.name }}
                              title={t.name}
                              description={`${t.members} members`}
                            />
                          </div>
                        ))}
                      </div>
                    </Section>
                  )}
                </>
              ),
            }
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
