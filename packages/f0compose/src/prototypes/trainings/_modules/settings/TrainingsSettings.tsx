import { useState } from "react"
import { F0Alert, F0Box, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import { Page, PageHeader, Tabs } from "@factorialco/f0-react/dist/experimental"
import { useSearchParams } from "react-router-dom"
import { Download, Calculator } from "@factorialco/f0-react/icons/app"

import { fundaeSettings } from "@/fixtures"
import type { PrototypeMeta } from "../../../types"
import { SettingsModals, type SettingsAction } from "./SettingsModals"

const REMINDERS = [
  { id: "r1", name: "Session reminder", days: 1, channel: "Email + In-app" },
  { id: "r2", name: "Pre-training kickoff", days: 7, channel: "Email" },
  { id: "r3", name: "Survey reminder", days: 3, channel: "In-app" },
]

export const meta: PrototypeMeta = {
  slug: "trainings-settings",
  title: "Trainings — Settings"
,
  description:
    "Configuration screens for the Trainings module: Fundae subsidy (CIF, social reason, contact, bank, digital certificate, RLT, CCC) plus general training settings.",
  category: "Settings",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "settings", "fundae", "subsidy"],
  createdAt: "2026-05-12",
}

type TabId = "fundae" | "general" | "reminders" | "calendar"

const tabs: { id: TabId; label: string }[] = [
  { id: "fundae", label: "Fundae" },
  { id: "general", label: "General" },
  { id: "reminders", label: "Reminders" },
  { id: "calendar", label: "Calendar" },
]

const VALID = new Set<string>(tabs.map((t) => t.id))

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <F0Text content={label} variant="label" />
      {typeof value === "string" ? <F0Text content={value} variant="body" /> : value}
    </div>
  )
}

export default function TrainingsSettings() {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get("tab")
  const active: TabId = raw && VALID.has(raw) ? (raw as TabId) : "fundae"
  const [enabled, setEnabled] = useState(fundaeSettings.enabled)
  const [action, setAction] = useState<SettingsAction>(null)
  const [actionContext, setActionContext] = useState<{ name?: string } | undefined>()

  const open = (a: SettingsAction, ctx?: { name?: string }) => {
    setActionContext(ctx)
    setAction(a)
  }

  const setTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("tab", id)
    setSearchParams(next)
  }

  return (
    <>
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "company_trainings", name: "Trainings", href: "/p/trainings" }}
            breadcrumbs={[
              { id: "list", label: "Trainings", href: "/p/trainings" },
              { id: "settings", label: "Settings" },
            ]}
            actions={[
              { label: "Export", icon: Download, onClick: () => open("export-trainings") },
              { label: "Salary calculator", icon: Calculator, onClick: () => open("salary-cost-calculator") },
            ]}
          />
          <Tabs
            key={active}
            tabs={tabs.map((t) => ({ ...t, onClick: () => setTab(t.id) }))}
            activeTabId={active}
          />
        </>
      }
    >
      <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
        {active === "fundae" && (
          <>
            <F0Alert
              title={enabled ? "Fundae bonification is enabled" : "Fundae is disabled"}
              description={
                enabled
                  ? "All eligible trainings will be reported to Fundae."
                  : "Enable Fundae to start bonifying training costs."
              }
              variant={enabled ? "positive" : "info"}
              action={{
                label: enabled ? "Disable" : "Enable",
                onClick: () => setEnabled((v) => !v),
              }}
            />

            <F0Card title="Company data">
              <div className="flex flex-col gap-4 p-4">
                <div className="flex justify-end">
                  <F0Button label="Edit" variant="outline" size="sm" onClick={() => open("edit-fundae-company")} />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Field label="CIF" value={fundaeSettings.cif} />
                  <Field label="Social reason" value={fundaeSettings.socialReason} />
                  <Field label="Contact name" value={fundaeSettings.contactName} />
                  <Field label="Contact email" value={fundaeSettings.contactEmail} />
                  <Field label="Bank account (IBAN)" value={fundaeSettings.bankAccount} />
                  <Field label="CCC" value={fundaeSettings.ccc} />
                </div>
              </div>
            </F0Card>

            <F0Card title="Certificates & legal representation">
              <div className="flex flex-col gap-4 p-4">
                <div className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3">
                  <div className="flex flex-col">
                    <F0Text content="Digital certificate" variant="label" />
                    <F0Text
                      content={
                        fundaeSettings.digitalCertificateConfigured
                          ? "Configured"
                          : "Not configured"
                      }
                      variant="small"
                    />
                  </div>
                  <F0Button
                    label={fundaeSettings.digitalCertificateConfigured ? "Reconfigure" : "Configure"}
                    variant="outline"
                    size="sm"
                    onClick={() => open("configure-digital-cert")}
                  />
                </div>
                <div className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3">
                  <div className="flex flex-col">
                    <F0Text content="Legal representation (RLT)" variant="label" />
                    <F0Text
                      content={
                        fundaeSettings.rltConfigured
                          ? `${fundaeSettings.rltMembers.length} members configured`
                          : "Not configured"
                      }
                      variant="small"
                    />
                  </div>
                  <F0Button
                    label={fundaeSettings.rltConfigured ? "Reconfigure" : "Configure"}
                    variant="outline"
                    size="sm"
                    onClick={() => open("configure-rlt")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {fundaeSettings.rltMembers.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3"
                    >
                      <div className="flex flex-col">
                        <F0Text content={m.name} variant="body" />
                        <F0Text content={m.role} variant="small" />
                      </div>
                      <span
                        className={
                          m.signed
                            ? "inline-flex items-center rounded-full bg-f1-background-positive px-2 py-0.5 text-xs text-f1-foreground-positive"
                            : "inline-flex items-center rounded-full bg-f1-background-warning px-2 py-0.5 text-xs text-f1-foreground-warning"
                        }
                      >
                        {m.signed ? "Signed" : "Pending"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </F0Card>
          </>
        )}

        {active === "general" && (
          <F0Card title="General training settings">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex justify-end">
                <F0Button label="Edit" variant="outline" size="sm" onClick={() => open("edit-general")} />
              </div>
              <Field label="Default training year" value="2026" />
              <Field
                label="Allow employees to request external trainings"
                value="Enabled"
              />
              <Field
                label="Auto-create classes for new participants"
                value="Disabled"
              />
              <Field label="Default course validity" value="1 year" />
              <div className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3">
                <div className="flex flex-col">
                  <F0Text content="Categories" variant="label" />
                  <F0Text content="Manage training categories" variant="small" />
                </div>
                <F0Button
                  label="New category"
                  variant="outline"
                  size="sm"
                  onClick={() => open("new-category")}
                />
              </div>
            </div>
          </F0Card>
        )}

        {active === "reminders" && (
          <F0Card title="Reminders">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex justify-end">
                <F0Button
                  label="New reminder"
                  variant="default"
                  size="sm"
                  onClick={() => open("new-reminder")}
                />
              </div>
              {REMINDERS.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3"
                >
                  <div className="flex flex-col">
                    <F0Text content={r.name} variant="body" />
                    <F0Text
                      content={`${r.days} day${r.days === 1 ? "" : "s"} before · ${r.channel}`}
                      variant="small"
                    />
                  </div>
                  <div className="flex gap-2">
                    <F0Button
                      label="Edit"
                      variant="outline"
                      size="sm"
                      onClick={() => open("edit-reminder", { name: r.name })}
                    />
                    <F0Button
                      label="Delete"
                      variant="critical"
                      size="sm"
                      onClick={() => open("delete-reminder", { name: r.name })}
                    />
                  </div>
                </div>
              ))}
            </div>
          </F0Card>
        )}

        {active === "calendar" && (
          <F0Card title="Calendar integration">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3">
                <div className="flex flex-col">
                  <F0Text content="Google Calendar" variant="label" />
                  <F0Text content="Connected" variant="small" />
                </div>
                <div className="flex gap-2">
                  <F0Button
                    label="Reconnect"
                    variant="outline"
                    size="sm"
                    onClick={() => open("connect-google-calendar")}
                  />
                  <F0Button
                    label="Disconnect"
                    variant="critical"
                    size="sm"
                    onClick={() => open("disconnect-calendar", { name: "Google Calendar" })}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3">
                <div className="flex flex-col">
                  <F0Text content="Outlook Calendar" variant="label" />
                  <F0Text content="Not connected" variant="small" />
                </div>
                <F0Button
                  label="Connect"
                  variant="default"
                  size="sm"
                  onClick={() => open("connect-outlook-calendar")}
                />
              </div>
              <Field label="Send invites by default" value="Enabled" />
            </div>
          </F0Card>
        )}

        <div>
          <F0Heading content="Need help?" variant="heading" as="h2" />
          <F0Text
            content="Visit the help center for guides on Fundae setup, scheduling and onboarding configurations."
            variant="body"
          />
        </div>
      </F0Box>
    </Page>
    <SettingsModals action={action} context={actionContext} onClose={() => setAction(null)} />
    </>
  )
}
