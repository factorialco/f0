import { useState } from "react"
import type { PrototypeMeta } from "../types"

export const meta: PrototypeMeta = {
  slug: "expenses-mobile-redesign-f0",
  title: "Expenses Mobile Redesign (F0)",
  description:
    "Pixel-perfect recreation of the Expenses mobile home screen from Figma node 12181-82442. Grouped list (Needs attention / Pending approval / Done), insight card, preset chips, and red FAB.",
  category: "Other",
  module: "spending",
  audience: ["employee"],
  tags: ["expenses", "mobile", "spending"],
  createdAt: "2026-05-08",
  hideSidebar: true,
}

// ─── Data ────────────────────────────────────────────────────────────────────

type StatusKey = "draft" | "pending" | "changes-requested" | "approved"

const STATUS: Record<
  StatusKey,
  { label: string; dot: string; bg: string; text: string }
> = {
  draft: {
    label: "Draft",
    dot: "rgba(1,21,54,0.61)",
    bg: "rgba(5,37,86,0.06)",
    text: "rgba(1,21,54,0.61)",
  },
  pending: {
    label: "Pending",
    dot: "rgb(253,129,47)",
    bg: "rgba(253,129,47,0.10)",
    text: "rgb(172,88,32)",
  },
  "changes-requested": {
    label: "Changes requested",
    dot: "rgb(253,129,47)",
    bg: "rgba(253,129,47,0.10)",
    text: "rgb(172,88,32)",
  },
  approved: {
    label: "Approved",
    dot: "rgb(34,197,94)",
    bg: "rgba(34,197,94,0.10)",
    text: "rgb(21,128,61)",
  },
}

type ExpenseRow = {
  id: string
  merchant: string
  date: string
  category: string
  amount: string
  status: StatusKey
  avatarType: "expense" | "card" | "car" | "folder"
  addReceipt?: boolean
}

const NEEDS_ATTENTION: ExpenseRow[] = [
  {
    id: "1",
    merchant: "Renfe",
    date: "26 Apr",
    category: "Transport",
    amount: "42 €",
    status: "draft",
    avatarType: "expense",
  },
  {
    id: "2",
    merchant: "Entropia",
    date: "24 Apr",
    category: "Meals",
    amount: "4.50 €",
    status: "draft",
    avatarType: "expense",
  },
  {
    id: "3",
    merchant: "ASTRO SMASH BURGER",
    date: "23 Apr",
    category: "Meals",
    amount: "19.95 €",
    status: "changes-requested",
    avatarType: "expense",
  },
  {
    id: "4",
    merchant: "L'Entrepeneur",
    date: "20 Apr",
    category: "Card transaction",
    amount: "27 €",
    status: "draft",
    avatarType: "card",
    addReceipt: true,
  },
]

const PENDING_APPROVAL: ExpenseRow[] = [
  {
    id: "5",
    merchant: "Mileage",
    date: "19 Apr",
    category: "Barcelona → Madrid",
    amount: "65 €",
    status: "pending",
    avatarType: "car",
  },
  {
    id: "6",
    merchant: "BCN Workshop April",
    date: "15 – 18 Apr",
    category: "Spain",
    amount: "150 €",
    status: "pending",
    avatarType: "folder",
  },
]

const DONE: ExpenseRow[] = [
  {
    id: "7",
    merchant: "Mileage",
    date: "19 Apr",
    category: "Barcelona → Madrid",
    amount: "65 €",
    status: "pending",
    avatarType: "car",
  },
  {
    id: "8",
    merchant: "BCN Workshop April",
    date: "15 – 18 Apr",
    category: "Spain",
    amount: "150 €",
    status: "pending",
    avatarType: "folder",
  },
]

const PRESETS = [
  { label: "All", count: 7, active: true },
  { label: "Expenses", count: 5, active: false },
  { label: "Trips", count: 2, active: false },
  { label: "Folders", count: 2, active: false },
  { label: "Spain", count: 2, active: false },
]

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function IconExpenseAvatar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#0d1625" strokeWidth="1.25" fill="none" />
      <line x1="2" y1="8" x2="18" y2="8" stroke="#0d1625" strokeWidth="1.25" />
      <line x1="5" y1="12" x2="9" y2="12" stroke="#0d1625" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function IconCardAvatar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="10" rx="2" stroke="#0d1625" strokeWidth="1.25" fill="none" />
      <rect x="2" y="8" width="16" height="3" fill="#0d1625" opacity="0.15" />
      <rect x="4" y="12.5" width="5" height="1.5" rx="0.75" fill="#0d1625" opacity="0.4" />
    </svg>
  )
}

function IconCarAvatar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 10.5L4.5 6.5H15.5L17 10.5" stroke="#0d1625" strokeWidth="1.25" strokeLinecap="round" />
      <rect x="2" y="10.5" width="16" height="5" rx="2" stroke="#0d1625" strokeWidth="1.25" fill="none" />
      <circle cx="5.5" cy="15.5" r="1.5" fill="#0d1625" />
      <circle cx="14.5" cy="15.5" r="1.5" fill="#0d1625" />
      <rect x="7" y="8" width="6" height="3" rx="0.5" stroke="#0d1625" strokeWidth="1" fill="none" />
    </svg>
  )
}

function IconFolderAvatar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 6C2 5.448 2.448 5 3 5H8L10 7H17C17.552 7 18 7.448 18 8V15C18 15.552 17.552 16 17 16H3C2.448 16 2 15.552 2 15V6Z" stroke="#0d1625" strokeWidth="1.25" fill="none" />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="4.5" stroke="#0d1625" strokeWidth="1.25" />
      <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="#0d1625" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function IconFolderPlus() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 4.5C1 3.948 1.448 3.5 2 3.5H6L7.5 5H13C13.552 5 14 5.448 14 6V12C14 12.552 13.552 13 13 13H2C1.448 13 1 12.552 1 12V4.5Z" stroke="#0d1625" strokeWidth="1.2" fill="none" />
      <line x1="7.5" y1="7.5" x2="7.5" y2="10.5" stroke="#0d1625" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="6" y1="9" x2="9" y2="9" stroke="#0d1625" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function IconFilter() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 4H14M4 8H12M6 12H10" stroke="#0d1625" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <line x1="7" y1="2" x2="7" y2="12" stroke="#0d1625" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="7" x2="12" y2="7" stroke="#0d1625" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPlusWhite() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <line x1="9" y1="3" x2="9" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="9" x2="15" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Money emoji illustration using Figma colors
function MoneyEmoji() {
  return (
    <svg width="72" height="72" viewBox="0 0 103 96" fill="none">
      {/* Bills / green paper */}
      <ellipse cx="51" cy="54" rx="46" ry="18" fill="#5c913b" opacity="0.3" />
      <rect x="8" y="20" width="87" height="54" rx="8" fill="#a7d28b" />
      <rect x="8" y="20" width="87" height="54" rx="8" fill="#5c913b" opacity="0.3" />
      <rect x="14" y="26" width="75" height="42" rx="6" fill="#77b255" />
      {/* Dollar circle */}
      <circle cx="51" cy="47" r="14" fill="#a7d28b" />
      <circle cx="51" cy="47" r="10" fill="#5c913b" />
      <text x="51" y="52" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">$</text>
      {/* Yellow band */}
      <rect x="8" y="44" width="87" height="6" fill="#ffac33" opacity="0.6" />
      {/* Wings */}
      <ellipse cx="18" cy="30" rx="16" ry="10" fill="#e1e8ed" transform="rotate(-20 18 30)" />
      <ellipse cx="85" cy="30" rx="16" ry="10" fill="#e1e8ed" transform="rotate(20 85 30)" />
      <ellipse cx="18" cy="30" rx="12" ry="7" fill="#ccd6dd" transform="rotate(-20 18 30)" />
      <ellipse cx="85" cy="30" rx="12" ry="7" fill="#ccd6dd" transform="rotate(20 85 30)" />
    </svg>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AvatarIcon({ type }: { type: ExpenseRow["avatarType"] }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 10,
        border: "1px solid rgba(5,37,86,0.15)",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {type === "expense" && <IconExpenseAvatar />}
      {type === "card" && <IconCardAvatar />}
      {type === "car" && <IconCarAvatar />}
      {type === "folder" && <IconFolderAvatar />}
    </div>
  )
}

function StatusTag({ s }: { s: StatusKey }) {
  const cfg = STATUS[s]
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        backgroundColor: cfg.bg,
        borderRadius: 999,
        padding: "2px 8px",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          backgroundColor: cfg.dot,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: cfg.text,
          lineHeight: "16px",
        }}
      >
        {cfg.label}
      </span>
    </span>
  )
}

function ExpenseRowItem({
  row,
  isLast,
}: {
  row: ExpenseRow
  isLast: boolean
}) {
  return (
    <div
      style={{
        padding: "13px 16px",
        borderBottom: isLast ? "none" : "1px solid rgba(5,37,86,0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <AvatarIcon type={row.avatarType} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(13,22,37)",
              lineHeight: "20px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {row.merchant}
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "rgba(1,21,54,0.61)",
              lineHeight: "16px",
              marginTop: 2,
            }}
          >
            {row.date} · {row.category}
          </div>
          {row.addReceipt && (
            <button
              style={{
                marginTop: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "3px 10px",
                fontSize: 12,
                fontWeight: 500,
                color: "rgb(13,22,37)",
                backgroundColor: "rgba(255,255,255,0.60)",
                border: "1px solid rgba(4,34,71,0.25)",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <IconPlus />
              Add receipt
            </button>
          )}
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(13,22,37)",
              lineHeight: "20px",
            }}
          >
            {row.amount}
          </div>
          <div style={{ marginTop: 4 }}>
            <StatusTag s={row.status} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionGroup({
  label,
  rows,
}: {
  label: string
  rows: ExpenseRow[]
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(1,21,54,0.61)",
          lineHeight: "18px",
          padding: "8px 16px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          margin: "0 8px",
          backgroundColor: "white",
          borderRadius: 16,
          border: "1px solid rgba(5,37,86,0.12)",
          overflow: "hidden",
        }}
      >
        {rows.map((row, i) => (
          <ExpenseRowItem key={row.id} row={row} isLast={i === rows.length - 1} />
        ))}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ExpensesMobileRedesignF0() {
  const [activePreset, setActivePreset] = useState(0)

  return (
    // Outer: centers the phone frame on the page
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 0 80px",
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: 393,
          backgroundColor: "#f5f6f8",
          borderRadius: 48,
          boxShadow:
            "0 0 0 10px #1a1a2e, 0 30px 80px rgba(0,0,0,0.4)",
          overflow: "hidden",
          position: "relative",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            height: 54,
            backgroundColor: "#f5f6f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px 0",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 600, color: "#0d1625" }}>
            9:41
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {/* Signal bars */}
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#0d1625" />
              <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" fill="#0d1625" />
              <rect x="9" y="3" width="3" height="9" rx="0.5" fill="#0d1625" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#0d1625" />
            </svg>
            {/* WiFi */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 9.5L8 11.5" stroke="#0d1625" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M5.5 7.5C6.3 6.7 7.1 6.3 8 6.3C8.9 6.3 9.7 6.7 10.5 7.5" stroke="#0d1625" strokeWidth="1.25" strokeLinecap="round" fill="none" />
              <path d="M3 5C4.5 3.5 6.2 2.7 8 2.7C9.8 2.7 11.5 3.5 13 5" stroke="#0d1625" strokeWidth="1.25" strokeLinecap="round" fill="none" />
              <path d="M0.5 2.5C2.8 0.5 5.3 -0.3 8 -0.3C10.7 -0.3 13.2 0.5 15.5 2.5" stroke="#0d1625" strokeWidth="1.25" strokeLinecap="round" fill="none" />
            </svg>
            {/* Battery */}
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="#0d1625" strokeWidth="1" fill="none" />
              <rect x="2" y="2" width="17" height="8" rx="1.5" fill="#0d1625" />
              <path d="M23 4.5V7.5" stroke="#0d1625" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 18px 12px",
          }}
        >
          <span
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "rgb(13,22,37)",
              lineHeight: "32px",
            }}
          >
            My spending
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            {[<IconSearch key="s" />, <IconFolderPlus key="f" />].map(
              (icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    border: "1px solid rgba(4,34,71,0.2)",
                    backgroundColor: "rgba(255,255,255,0.60)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {icon}
                </button>
              )
            )}
          </div>
        </div>

        {/* Primary tabs */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            padding: "0 18px",
            gap: 24,
            borderBottom: "1px solid rgba(5,37,86,0.08)",
            scrollbarWidth: "none",
          }}
        >
          {["Requests", "Notifications", "Items", "Items", "Items"].map(
            (tab, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  paddingBottom: 10,
                  fontSize: 14,
                  fontWeight: 500,
                  color: i === 0 ? "rgb(13,22,37)" : "rgba(1,21,54,0.4)",
                  borderBottom:
                    i === 0 ? "2px solid rgb(13,22,37)" : "2px solid transparent",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {tab}
              </div>
            )
          )}
        </div>

        {/* Scrollable body */}
        <div
          style={{
            overflowY: "auto",
            maxHeight: 620,
            paddingBottom: 80,
            scrollbarWidth: "none",
          }}
        >
          {/* Insight card */}
          <div style={{ padding: "16px 18px 0" }}>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.60)",
                border: "1px solid rgba(5,37,86,0.12)",
                borderRadius: 16,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "rgba(1,21,54,0.61)",
                    lineHeight: "20px",
                  }}
                >
                  Owed to you
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "rgb(13,22,37)",
                    lineHeight: "28px",
                    margin: "2px 0",
                  }}
                >
                  450.50 €
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "rgba(1,21,54,0.61)",
                    lineHeight: "20px",
                  }}
                >
                  Across 6 expenses
                </div>
              </div>
              <MoneyEmoji />
            </div>
          </div>

          {/* Presets bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 18px 8px",
            }}
          >
            {/* Filter button */}
            <button
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                border: "1px solid rgba(4,34,71,0.2)",
                backgroundColor: "rgba(255,255,255,0.60)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                cursor: "pointer",
              }}
            >
              <IconFilter />
            </button>
            {/* Divider */}
            <div
              style={{
                width: 1,
                height: 16,
                backgroundColor: "rgba(5,37,86,0.10)",
                flexShrink: 0,
              }}
            />
            {/* Chips */}
            <div
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                scrollbarWidth: "none",
                flex: 1,
              }}
            >
              {PRESETS.map((p, i) => {
                const isActive = activePreset === i
                return (
                  <button
                    key={i}
                    onClick={() => setActivePreset(i)}
                    style={{
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      height: 32,
                      padding: "0 10px",
                      borderRadius: 10,
                      border: isActive
                        ? "1px solid rgb(7,162,173)"
                        : "1px solid rgba(4,34,71,0.2)",
                      backgroundColor: isActive
                        ? "rgba(7,162,173,0.10)"
                        : "transparent",
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 500,
                      color: isActive ? "rgb(5,110,118)" : "rgb(13,22,37)",
                    }}
                  >
                    {p.label}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        backgroundColor: isActive
                          ? "rgb(7,162,173)"
                          : "rgba(5,37,86,0.06)",
                        border: isActive
                          ? "none"
                          : "1px solid rgba(5,37,86,0.15)",
                        fontSize: 12,
                        fontWeight: 500,
                        color: isActive ? "white" : "rgb(13,22,37)",
                      }}
                    >
                      {p.count}
                    </span>
                  </button>
                )
              })}
              {/* +4 more dropdown */}
              <button
                style={{
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  height: 32,
                  padding: "0 10px",
                  borderRadius: 10,
                  border: "1px solid rgba(4,34,71,0.2)",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgb(13,22,37)",
                }}
              >
                +4 more
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    backgroundColor: "rgba(5,37,86,0.06)",
                  }}
                >
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                    <path d="M1 1L4 4L7 1" stroke="#0d1625" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Grouped lists */}
          <div style={{ padding: "8px 0 0" }}>
            <SectionGroup
              label="Needs attention · 4"
              rows={NEEDS_ATTENTION}
            />
            <SectionGroup
              label="Pending approval · 1"
              rows={PENDING_APPROVAL}
            />
            <SectionGroup label="Done · 6" rows={DONE} />
          </div>
        </div>

        {/* FAB — fixed at bottom of phone frame */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            padding: "14px 16px 10px",
          }}
        >
          <button
            style={{
              width: "100%",
              height: 48,
              borderRadius: 24,
              backgroundColor: "rgb(229,25,67)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <IconPlusWhite />
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "white",
                lineHeight: "24px",
              }}
            >
              New expense
            </span>
          </button>
          {/* Swipe bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <div
              style={{
                width: 134,
                height: 5,
                borderRadius: 3,
                backgroundColor: "rgb(13,22,37)",
                opacity: 0.2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
