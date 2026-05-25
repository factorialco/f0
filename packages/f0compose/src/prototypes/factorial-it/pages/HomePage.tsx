import { useCallback, useMemo, useRef } from "react"
import { F0AiChatTextArea, F0AiInsightCard, F0AvatarPerson, F0Button, F0Icon, F0OneSwitch, type F0AiInsightCardProps } from "@factorialco/f0-react"
import { OneDataCollection, Page, useDataCollectionSource, useSidebar } from "@factorialco/f0-react/dist/experimental"
import {
  CheckCircleLine,
  ChevronRight,
  Command,
  Globe,
  Laptop,
  Menu,
  Person,
  Search,
  Shield,
  Sparkles,
} from "@factorialco/f0-react/icons/app"

// ── Types ────────────────────────────────────────────────────────────────────

type ItAction = {
  id: string
  title: string
  subtitle: string
  action: string
  avatarIcon: "laptop" | "person" | "command" | "shield" | "globe"
  group: "overdue" | "today"
}

type ActivityItem = {
  id: string
  title: string
  description: string
  time: string
  person?: { firstName: string; lastName: string; avatarUrl?: string }
}


// ── Data ─────────────────────────────────────────────────────────────────────

const needsYouData: ItAction[] = [
  {
    id: "1",
    title: "Approve 3 device requests",
    subtitle: "All standard equipment · within budget · no conflicts",
    action: "Approve all",
    avatarIcon: "laptop",
    group: "overdue",
  },
  {
    id: "2",
    title: "Assign MacBook to Clara Vidal",
    subtitle: "Starting next Monday · pre-configured and ready",
    action: "Assign",
    avatarIcon: "person",
    group: "overdue",
  },
  {
    id: "3",
    title: "Renew Adobe CC license",
    subtitle: "Expires in 7 days · 24 seats · €2,400/yr",
    action: "Renew",
    avatarIcon: "command",
    group: "today",
  },
  {
    id: "4",
    title: "Review 7 pending security patches",
    subtitle: "3 critical · affecting 12 devices · auto-applies in 48h",
    action: "Review",
    avatarIcon: "shield",
    group: "today",
  },
  {
    id: "5",
    title: "Confirm VPN access — 5 remote employees",
    subtitle: "Within IT policy · remote team · starts Monday",
    action: "Confirm all",
    avatarIcon: "globe",
    group: "today",
  },
]

const _now = new Date()
const todayGroupLabel = [
  `${_now.getDate()} ${_now.toLocaleDateString("en-GB", { month: "long" })}`,
  "Today",
  _now.toLocaleDateString("en-GB", { weekday: "long" }),
].join(" · ")

const avatarIconMap = {
  laptop: Laptop,
  person: Person,
  command: Command,
  shield: Shield,
  globe: Globe,
} as const

const activities: ActivityItem[] = [
  {
    id: "1",
    title: "MacBook assigned to Clara Reyes",
    description: "One provisioned account, apps, and VPN access",
    time: "2m ago",
  },
  {
    id: "2",
    title: "Security patches deployed",
    description: "3 critical updates applied across 12 devices",
    time: "14m ago",
  },
  {
    id: "3",
    title: "Device request submitted",
    description: "Requested MacBook Pro 16\" for design work",
    time: "31m ago",
    person: { firstName: "Marc", lastName: "Pons" },
  },
  {
    id: "4",
    title: "Adobe CC license renewed",
    description: "24 seats · €2,400/yr · auto-renewed by One",
    time: "1h ago",
  },
  {
    id: "5",
    title: "VPN access revoked",
    description: "Removed access for 2 offboarded contractors",
    time: "2h ago",
    person: { firstName: "Laura", lastName: "Alves" },
  },
  {
    id: "6",
    title: "Figma seats audit",
    description: "Detected 4 inactive licenses — flagged for review",
    time: "3h ago",
  },
]

const insightCards: F0AiInsightCardProps[] = [
  {
    content: "sparkline",
    description: "Devices",
    heading: "Device requests up 22% this quarter",
    data: [{ value: 5 }, { value: 8 }, { value: 7 }, { value: 11 }, { value: 14 }, { value: 18 }, { value: 22 }],
    label: "+22%",
    onClick: () => {},
    onAskOne: () => {},
  },
  {
    content: "people",
    description: "Security",
    heading: "3 devices unpatched for 30+ days",
    avatars: [
      { firstName: "Marc", lastName: "Pons" },
      { firstName: "Clara", lastName: "Reyes" },
      { firstName: "Laura", lastName: "Alves" },
      { firstName: "Aitor", lastName: "Oriol" },
      { firstName: "Sofia", lastName: "Mas" },
      { firstName: "Jordi", lastName: "Vidal" },
    ],
    label: "6 people",
    onClick: () => {},
    onAskOne: () => {},
  },
  {
    content: "people",
    description: "Software",
    heading: "2 managers haven't activated their licenses",
    avatars: [
      { firstName: "Sara", lastName: "Gomez" },
      { firstName: "Luis", lastName: "Mora" },
    ],
    label: "2 people",
    onClick: () => {},
    onAskOne: () => {},
  },
]

const quickActions = [
  {
    label: "Analyze tickets",
    icon: Search,
    prompt: "Which open tickets are most urgent right now and why?",
  },
  {
    label: "Open ticket",
    icon: CheckCircleLine,
    prompt: "I need to open a new IT support ticket.",
  },
  {
    label: "Check device status",
    icon: Laptop,
    prompt: "Which devices have issues or need attention today?",
  },
  {
    label: "View security alerts",
    icon: Shield,
    prompt: "What security alerts need my attention right now?",
  },
]

// ── Styles ───────────────────────────────────────────────────────────────────

const s = {
  wrap: { display: "flex", height: "100%", overflow: "hidden" } as React.CSSProperties,
  main: { flex: 1, overflowY: "auto", padding: "40px 48px" } as React.CSSProperties,
  hero: { maxWidth: 720, margin: "0 auto 36px", textAlign: "center" } as React.CSSProperties,
  inputWrap: { maxWidth: 720, margin: "24px auto 12px" } as React.CSSProperties,
  chips: {
    display: "flex", flexWrap: "wrap" as const, gap: 8,
    justifyContent: "center", maxWidth: 720, margin: "0 auto 64px",
  } as React.CSSProperties,
  panel: { width: 360, overflowY: "auto", flexShrink: 0 } as React.CSSProperties,
  panelSection: { padding: "24px 24px 20px" } as React.CSSProperties,
  panelHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } as React.CSSProperties,
}


// ── One agent avatar (static) ─────────────────────────────────────────────────

function OneAgentAvatar() {
  return (
    <div
      className="flex flex-shrink-0 items-center justify-center rounded-full bg-f1-background-accent-bold text-f1-foreground-inverse"
      style={{ width: 32, height: 32 }}
    >
      <F0Icon icon={Sparkles} size="sm" className="text-f1-foreground-inverse" />
    </div>
  )
}

// ── Needs You list (OneDataCollection) ───────────────────────────────────────

function NeedsYouList() {
  const dataAdapter = useMemo(
    () => ({
      fetchData: () => Promise.resolve({ records: needsYouData }),
    }),
    []
  )

  const source = useDataCollectionSource(
    {
      dataAdapter,
      itemOnClick: () => () => {},
      itemActions: (item) => [
        {
          label: item.action,
          onClick: () => {},
          type: "primary" as const,
        },
      ],
      grouping: {
        mandatory: true,
        hideSelector: true,
        collapsible: false,
        groupBy: {
          group: {
            name: "Date",
            label: (groupId) =>
              groupId === "overdue" ? "Overdue" : todayGroupLabel,
            itemCount: (groupId) =>
              needsYouData.filter((item) => item.group === groupId).length,
          },
        },
      },
      currentGrouping: { field: "group", order: "asc" },
    },
    []
  )

  const visualization = useMemo(
    () => ({
      type: "list" as const,
      options: {
        itemDefinition: (item: ItAction) => ({
          title: item.title,
          description: [item.subtitle],
          avatar: {
            type: "icon" as const,
            icon: avatarIconMap[item.avatarIcon],
          },
        }),
        fields: [] as [],
      },
    }),
    []
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[visualization]}
      onSelectItems={() => {}}
    />
  )
}

// ── Minimal header (hamburger + AI toggle only) ───────────────────────────────

function MinimalHeader() {
  const { sidebarState, toggleSidebar } = useSidebar()
  return (
    <div className="flex h-16 items-center justify-between px-5 xs:px-6">
      <div className="flex items-center">
        {sidebarState !== "locked" && (
          <F0Button
            variant="ghost"
            hideLabel
            label="Open main menu"
            icon={Menu}
            onClick={() => toggleSidebar()}
          />
        )}
      </div>
      <div className="flex items-center gap-3">
        <F0OneSwitch />
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export function HomePage() {
  const textareaWrapRef = useRef<HTMLDivElement>(null)

  const injectPrompt = useCallback((text: string) => {
    const ta = textareaWrapRef.current?.querySelector("textarea")
    if (!ta) return
    const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set
    setter?.call(ta, text)
    ta.dispatchEvent(new Event("input", { bubbles: true }))
    ta.focus()
  }, [])

  return (
    <Page header={<MinimalHeader />}>
      <div style={s.wrap}>
        {/* ── Main column ── */}
        <div style={s.main}>
          {/* Greeting */}
          <div style={s.hero}>
            <div className="mb-2 inline-block">
              <F0AvatarPerson
                firstName="Hellen"
                lastName="IT"
                src="/hellen-avatar.png"
                size="xl"
              />
            </div>
            <p className="mb-1 text-2xl font-semibold text-f1-foreground-secondary">Good Morning, Hellen</p>
            <h2 className="m-0 text-2xl font-semibold text-f1-foreground">What can I do for you?</h2>
          </div>

          {/* AI input */}
          <div style={s.inputWrap} ref={textareaWrapRef}>
            <F0AiChatTextArea
              inProgress={false}
              onSend={async () => {}}
              onStop={() => {}}
            />
          </div>

          {/* Quick action chips */}
          <div style={s.chips}>
            {quickActions.map(({ label, icon, prompt }) => (
              <F0Button
                key={label}
                label={label}
                icon={icon}
                variant="neutral"
                size="md"
                onClick={() => injectPrompt(prompt)}
              />
            ))}
          </div>

          {/* Needs you — OneDataCollection list */}
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h3 className="m-0 mb-3 text-lg font-semibold text-f1-foreground">Here's what needs you today</h3>
            <NeedsYouList />
          </div>
        </div>

        {/* ── Right panel ── */}
        <div style={s.panel} className="border-l border-f1-border-secondary bg-f1-background">
          {/* Activity */}
          <div style={s.panelSection}>
            <div style={s.panelHeader}>
              <h3 className="m-0 text-lg font-semibold text-f1-foreground">Activity</h3>
              <button
                className="flex cursor-pointer items-center gap-1 rounded border-none bg-transparent px-1 py-0.5 text-sm text-f1-foreground-secondary hover:bg-f1-background-secondary hover:text-f1-foreground"
                onClick={() => {}}
              >
                247 done today
                <F0Icon icon={ChevronRight} size="sm" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {activities.map((a) => (
                <div key={a.id} className="flex items-center gap-3">
                  {a.person ? (
                    <F0AvatarPerson
                      firstName={a.person.firstName}
                      lastName={a.person.lastName}
                      src={a.person.avatarUrl}
                    />
                  ) : (
                    <OneAgentAvatar />
                  )}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-base font-medium text-f1-foreground">{a.title}</span>
                    <span className="truncate text-sm text-f1-foreground-secondary">
                      {a.description}
                      <span className="ml-2">{a.time}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-f1-border-secondary" />

          {/* Worth a look */}
          <div style={s.panelSection}>
            <h3 className="m-0 mb-4 text-lg font-semibold text-f1-foreground">Worth a look</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {insightCards.map((card, i) => (
                <F0AiInsightCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
