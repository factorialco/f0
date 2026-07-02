import {
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react";
import { useState } from "react";
import { timeOffRequests, timeOffBalances, timeOffPolicies } from "@/fixtures";

// ─── Types ────────────────────────────────────────────────────────────────────

type LeaveTab = "vacation" | "sick" | "personal" | "parental";
type PrimitiveTab = "calculator" | "free-text" | "tree";

// ─── Static data ──────────────────────────────────────────────────────────────

const LEAVE_TABS: { id: LeaveTab; label: string }[] = [
  { id: "vacation", label: "Vacation" },
  { id: "sick", label: "Sick leave" },
  { id: "personal", label: "Personal" },
  { id: "parental", label: "Parental" },
];

const PRIMITIVE_TABS: { id: PrimitiveTab; label: string }[] = [
  { id: "calculator", label: "Calculator" },
  { id: "free-text", label: "Free Text" },
  { id: "tree", label: "Decision Tree" },
];

const SNAPSHOT = {
  base: 26,
  tenure: 1,
  total: 27,
  programVersion: "v3 — published 2026-01-01",
  freeText:
    "You accrued 27 days in 2026: 26 days base entitlement plus a 1-day tenure bonus for 6 years of service.",
};

const TREE_NODES = [
  {
    label: "Base entitlement",
    condition: "All employees",
    value: "+ 26 days",
    fired: true,
  },
  {
    label: "Tenure bonus (≥5 yrs)",
    condition: "tenure ≥ 5 years",
    value: "+ 1 day",
    fired: true,
  },
  {
    label: "Tenure bonus (≥10 yrs)",
    condition: "tenure ≥ 10 years",
    value: "+ 2 days",
    fired: false,
  },
  {
    label: "Part-time proration",
    condition: "hours < 40/wk",
    value: "× proration",
    fired: false,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ME = "emp-001";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function statusColor(status: string): string {
  if (status === "approved") return "var(--f1-color-text-success)";
  if (status === "pending") return "var(--f1-color-text-warning)";
  if (status === "rejected" || status === "cancelled")
    return "var(--f1-color-text-danger)";
  return "var(--f1-color-text-default)";
}

function statusLabel(status: string): string {
  if (status === "approved") return "Approved";
  if (status === "pending") return "Pending";
  if (status === "rejected") return "Rejected";
  if (status === "cancelled") return "Cancelled";
  return status;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExplainabilityPanel({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<PrimitiveTab>("calculator");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: 420,
        height: "100vh",
        background: "hsl(var(--page))",
        borderLeft: "1px solid var(--f1-color-border-default)",
        boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 20px 16px",
          borderBottom: "1px solid var(--f1-color-border-default)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <F0Heading
              content="Why 27 days accrued?"
              variant="heading"
              as="h3"
            />
            <F0Text
              content={`Rule: ${SNAPSHOT.programVersion}`}
              variant="description"
            />
          </div>
          <F0Button label="Close" variant="neutral" onClick={onClose} />
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 0,
            borderBottom: "1px solid var(--f1-color-border-default)",
            marginTop: 8,
          }}
        >
          {PRIMITIVE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "6px 16px",
                border: "none",
                borderBottom:
                  activeTab === tab.id
                    ? "2px solid var(--f1-color-border-strong)"
                    : "2px solid transparent",
                cursor: "pointer",
                background: "transparent",
                color:
                  activeTab === tab.id
                    ? "var(--f1-color-text-default)"
                    : "var(--f1-color-text-subtle)",
                fontFamily: "inherit",
                fontSize: 13,
                fontWeight: activeTab === tab.id ? 600 : 400,
                marginBottom: -1,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {activeTab === "calculator" && (
          <>
            {[
              {
                label: "Base entitlement",
                sublabel: "All employees",
                value: `+${SNAPSHOT.base} days`,
              },
              {
                label: "Tenure bonus (6 yrs service)",
                sublabel: "≥5 years tier",
                value: `+${SNAPSHOT.tenure} day`,
              },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 8,
                  background: "var(--f1-color-surface-subtle)",
                }}
              >
                <div>
                  <F0Text content={row.label} variant="body" />
                  <F0Text content={row.sublabel} variant="description" />
                </div>
                <F0Text content={row.value} variant="label" />
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 8px",
                borderTop: "2px solid var(--f1-color-border-strong)",
                marginTop: 4,
              }}
            >
              <F0Heading content="Total accrued" variant="heading" as="h4" />
              <F0Heading
                content={`${SNAPSHOT.total} days`}
                variant="heading-large"
                as="h4"
              />
            </div>
            <F0Text
              content="This calculation is locked to the rule version and employee facts active on the calculation date. Re-running it produces the same result."
              variant="description"
            />
          </>
        )}

        {activeTab === "free-text" && (
          <div
            style={{
              padding: 16,
              background: "var(--f1-color-surface-subtle)",
              borderRadius: 8,
              borderLeft: "4px solid var(--f1-color-border-strong)",
            }}
          >
            <F0Text content={SNAPSHOT.freeText} variant="body" />
          </div>
        )}

        {activeTab === "tree" && (
          <>
            <F0Text
              content="Rules evaluated in order — highlighted rows fired for your profile."
              variant="description"
            />
            {TREE_NODES.map((node, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 12px",
                  borderRadius: 8,
                  background: node.fired
                    ? "var(--f1-color-surface-selected)"
                    : "var(--f1-color-surface-subtle)",
                  border: node.fired
                    ? "2px solid var(--f1-color-border-strong)"
                    : "1px solid var(--f1-color-border-default)",
                  opacity: node.fired ? 1 : 0.45,
                }}
              >
                <div style={{ flex: 1 }}>
                  <F0Text content={node.label} variant="label" />
                  <F0Text content={node.condition} variant="description" />
                </div>
                <F0Text content={node.value} variant="label" />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function EmployeeView() {
  const [leaveTab, setLeaveTab] = useState<LeaveTab>("vacation");
  const [panelOpen, setPanelOpen] = useState(false);

  // Derive balance for the selected leave type
  const myBalance = timeOffBalances.find((b) => b.employeeId === ME);
  const policyForTab = timeOffPolicies.find((p) => p.type === leaveTab);

  const accrued =
    leaveTab === "vacation" ? 27 : (policyForTab?.annualDays ?? 0);
  const taken =
    leaveTab === "vacation"
      ? (myBalance?.taken ?? 0)
      : timeOffRequests
          .filter(
            (r) =>
              r.employeeId === ME &&
              r.type === leaveTab &&
              r.status === "approved",
          )
          .reduce((s, r) => s + r.workingDays, 0);
  const pending =
    leaveTab === "vacation"
      ? (myBalance?.pending ?? 0)
      : timeOffRequests
          .filter(
            (r) =>
              r.employeeId === ME &&
              r.type === leaveTab &&
              r.status === "pending",
          )
          .reduce((s, r) => s + r.workingDays, 0);
  const available = Math.max(accrued - taken - pending, 0);

  // Requests for selected leave type
  const myRequests = timeOffRequests
    .filter((r) => r.employeeId === ME && r.type === leaveTab)
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    );

  return (
    <>
      {/* ── Page shell ── */}
      <F0Box display="flex" flexDirection="column" gap="lg">
        {/* Page header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <F0Heading content="My Time Off" variant="heading-large" as="h1" />
            <F0Text
              content="Ada Lovelace · Barcelona · hired 4 Mar 2019 (6 yrs)"
              variant="description"
            />
          </div>
          <F0Button
            label="New request"
            variant="primary"
            onClick={() => undefined}
          />
        </div>

        {/* Leave type tabs */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--f1-color-border-default)",
            gap: 0,
          }}
        >
          {LEAVE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setLeaveTab(tab.id)}
              style={{
                padding: "8px 20px",
                border: "none",
                borderBottom:
                  leaveTab === tab.id
                    ? "2px solid var(--f1-color-text-default)"
                    : "2px solid transparent",
                cursor: "pointer",
                background: "transparent",
                color:
                  leaveTab === tab.id
                    ? "var(--f1-color-text-default)"
                    : "var(--f1-color-text-subtle)",
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: leaveTab === tab.id ? 600 : 400,
                marginBottom: -1,
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Balance tiles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {[
            {
              id: "accrued",
              label: "Accrued",
              value: accrued,
              sub: "Jan 2026 – Jan 2027",
              explainer: leaveTab === "vacation",
            },
            { id: "taken", label: "Taken", value: taken, sub: "Approved" },
            {
              id: "pending",
              label: "Pending",
              value: pending,
              sub: "Awaiting approval",
            },
            {
              id: "available",
              label: "Available",
              value: available,
              sub: "Accrued – taken – pending",
            },
          ].map((tile) => (
            <F0Card key={tile.id}>
              <div
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <F0Text content={tile.label} variant="label" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "var(--f1-color-text-default)",
                    }}
                  >
                    {tile.value}
                  </span>
                  <F0Text content="days" variant="description" />
                </div>
                <F0Text content={tile.sub} variant="description" />
                {"explainer" in tile && tile.explainer && (
                  <div style={{ marginTop: 4 }}>
                    <F0Button
                      label="Why this number?"
                      variant="outline"
                      onClick={() => setPanelOpen(true)}
                    />
                  </div>
                )}
              </div>
            </F0Card>
          ))}
        </div>

        {/* Requests list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <F0Heading content="Requests" variant="heading" as="h2" />
            <F0Text
              content={`${myRequests.length} request${myRequests.length !== 1 ? "s" : ""}`}
              variant="description"
            />
          </div>

          {myRequests.length === 0 ? (
            <F0Card>
              <div style={{ padding: 32, textAlign: "center" }}>
                <F0Text
                  content="No requests for this leave type yet."
                  variant="description"
                />
              </div>
            </F0Card>
          ) : (
            <F0Card>
              {/* Table header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 80px 100px",
                  gap: 8,
                  padding: "10px 16px",
                  borderBottom: "1px solid var(--f1-color-border-default)",
                }}
              >
                {["Date range", "Reason", "Days", "Status"].map((h) => (
                  <F0Text key={h} content={h} variant="label" />
                ))}
              </div>

              {/* Rows */}
              {myRequests.map((r, i) => (
                <div
                  key={r.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 80px 100px",
                    gap: 8,
                    padding: "12px 16px",
                    borderBottom:
                      i < myRequests.length - 1
                        ? "1px solid var(--f1-color-border-default)"
                        : "none",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <F0Text
                      content={`${formatDate(r.startDate)} – ${formatDate(r.endDate)}`}
                      variant="body"
                    />
                  </div>
                  <F0Text content={r.reason ?? "—"} variant="description" />
                  <F0Text content={`${r.workingDays}d`} variant="body" />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: statusColor(r.status),
                      textTransform: "capitalize",
                    }}
                  >
                    {statusLabel(r.status)}
                  </span>
                </div>
              ))}
            </F0Card>
          )}
        </div>
      </F0Box>

      {/* ── Explainability side panel ── */}
      {panelOpen && <ExplainabilityPanel onClose={() => setPanelOpen(false)} />}
    </>
  );
}
