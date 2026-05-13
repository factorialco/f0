import {
  F0Alert,
  F0Button,
  F0Checkbox,
  F0Dialog,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
} from "@factorialco/f0-react/dist/experimental"
import { useEffect, useState } from "react"

export type SettingsAction =
  | "edit-fundae-company"
  | "configure-digital-cert"
  | "configure-rlt"
  | "edit-general"
  | "new-reminder"
  | "edit-reminder"
  | "delete-reminder"
  | "connect-google-calendar"
  | "connect-outlook-calendar"
  | "disconnect-calendar"
  | "export-trainings"
  | "salary-cost-calculator"
  | "new-category"
  | null

type Props = {
  action: SettingsAction
  context?: { name?: string }
  onClose: () => void
}

const TITLES: Record<Exclude<SettingsAction, null>, string> = {
  "edit-fundae-company": "Edit company data",
  "configure-digital-cert": "Configure digital certificate",
  "configure-rlt": "Configure legal representation",
  "edit-general": "Edit general settings",
  "new-reminder": "New reminder",
  "edit-reminder": "Edit reminder",
  "delete-reminder": "Delete reminder",
  "connect-google-calendar": "Connect Google Calendar",
  "connect-outlook-calendar": "Connect Outlook Calendar",
  "disconnect-calendar": "Disconnect calendar",
  "export-trainings": "Export trainings",
  "salary-cost-calculator": "Salary cost calculator",
  "new-category": "New category",
}

const PRIMARY_LABELS: Record<Exclude<SettingsAction, null>, string> = {
  "edit-fundae-company": "Save data",
  "configure-digital-cert": "Upload",
  "configure-rlt": "Save members",
  "edit-general": "Save settings",
  "new-reminder": "Create reminder",
  "edit-reminder": "Save changes",
  "delete-reminder": "Delete reminder",
  "connect-google-calendar": "Connect",
  "connect-outlook-calendar": "Connect",
  "disconnect-calendar": "Disconnect",
  "export-trainings": "Export",
  "salary-cost-calculator": "Apply to training",
  "new-category": "Create category",
}

export function SettingsModals({ action, context, onClose }: Props) {
  // Fundae company
  const [cif, setCif] = useState("B12345678")
  const [socialReason, setSocialReason] = useState("Factorial Clothing Co. SL")
  const [contactName, setContactName] = useState("Hellen Owen")
  const [contactEmail, setContactEmail] = useState(
    "hellen@factorialclothingco.co"
  )
  const [iban, setIban] = useState("ES91 2100 0418 4502 0005 1332")
  const [ccc, setCcc] = useState("08/12345678/01")

  // Digital cert
  const [certPassword, setCertPassword] = useState("")

  // RLT members
  const [members, setMembers] = useState<
    { name: string; role: string; email: string }[]
  >([
    { name: "", role: "", email: "" },
    { name: "", role: "", email: "" },
    { name: "", role: "", email: "" },
  ])

  // General
  const [defaultYear, setDefaultYear] = useState<number | null>(2026)
  const [allowExternal, setAllowExternal] = useState(true)
  const [autoCreateClasses, setAutoCreateClasses] = useState(false)
  const [courseValidity, setCourseValidity] = useState<number | null>(12)

  // Reminder
  const [reminderName, setReminderName] = useState("")
  const [reminderTrigger, setReminderTrigger] = useState("before-session")
  const [reminderDays, setReminderDays] = useState<number | null>(1)
  const [reminderChannel, setReminderChannel] = useState<
    "email" | "in-app" | "both"
  >("both")

  // Calendar
  const [calSendInvites, setCalSendInvites] = useState(true)
  const [calAutoUpdate, setCalAutoUpdate] = useState(true)

  // Export
  const [exportFormat, setExportFormat] = useState<"csv" | "xlsx" | "pdf">(
    "xlsx"
  )
  const [exportRange, setExportRange] = useState<"all" | "year" | "custom">(
    "year"
  )
  const [exportFrom, setExportFrom] = useState("")
  const [exportTo, setExportTo] = useState("")
  const [includeFundae, setIncludeFundae] = useState(true)
  const [includeParticipants, setIncludeParticipants] = useState(true)
  const [includeCosts, setIncludeCosts] = useState(false)

  // Salary calculator
  const [salaryHourly, setSalaryHourly] = useState<number | null>(18)
  const [salaryHours, setSalaryHours] = useState<number | null>(8)
  const [salaryEmployees, setSalaryEmployees] = useState<number | null>(12)

  // Category
  const [categoryName, setCategoryName] = useState("")
  const [categoryColor, setCategoryColor] = useState("info")

  useEffect(() => {
    if (!action) return
    setReminderName("")
    setReminderTrigger("before-session")
    setReminderDays(1)
    setReminderChannel("both")
    setExportFormat("xlsx")
    setExportRange("year")
    setIncludeFundae(true)
    setIncludeParticipants(true)
    setIncludeCosts(false)
    setSalaryHourly(18)
    setSalaryHours(8)
    setSalaryEmployees(12)
    setCategoryName("")
    setCategoryColor("info")
    setCertPassword("")
  }, [action])

  if (!action) return null

  const isCritical =
    action === "delete-reminder" || action === "disconnect-calendar"

  const totalSalaryCost =
    (salaryHourly ?? 0) * (salaryHours ?? 0) * (salaryEmployees ?? 0)

  return (
    <F0Dialog
      open
      onOpenChange={(o: boolean) => {
        if (!o) onClose()
      }}
      title={TITLES[action]}
      description={context?.name}
      size="lg"
      actions={{
        primaryAction: {
          label: PRIMARY_LABELS[action],
          onClick: onClose,
          variant: isCritical ? "critical" : "default",
        },
        secondaryAction: {
          label: "Cancel",
          onClick: onClose,
          variant: "outline",
        },
      }}
    >
      {action === "edit-fundae-company" && (
        <div className="grid grid-cols-2 gap-3">
          <Input label="CIF" value={cif} onChange={(v) => setCif(v ?? "")} />
          <Input
            label="Social reason"
            value={socialReason}
            onChange={(v) => setSocialReason(v ?? "")}
          />
          <Input
            label="Contact name"
            value={contactName}
            onChange={(v) => setContactName(v ?? "")}
          />
          <Input
            label="Contact email"
            type="email"
            value={contactEmail}
            onChange={(v) => setContactEmail(v ?? "")}
          />
          <Input
            label="Bank account (IBAN)"
            value={iban}
            onChange={(v) => setIban(v ?? "")}
          />
          <Input label="CCC" value={ccc} onChange={(v) => setCcc(v ?? "")} />
        </div>
      )}

      {action === "configure-digital-cert" && (
        <div className="flex flex-col gap-3">
          <F0Text
            content="Upload your FNMT or equivalent digital certificate as a .p12 or .pfx file. We use it to sign Fundae communications on your behalf."
            variant="small"
          />
          <label className="flex flex-col items-center gap-2 rounded-md border-2 border-dashed border-f1-border-secondary bg-f1-background-secondary p-6 text-center">
            <strong className="text-sm">
              Drop certificate here or click to browse
            </strong>
            <span className="text-xs text-f1-foreground-secondary">
              .p12 or .pfx · max 5 MB
            </span>
            <input
              type="file"
              accept=".p12,.pfx"
              className="hidden"
              aria-label="Upload digital certificate"
            />
          </label>
          <Input
            label="Password"
            type="password"
            placeholder="Certificate password"
            value={certPassword}
            onChange={(v) => setCertPassword(v ?? "")}
          />
        </div>
      )}

      {action === "configure-rlt" && (
        <div className="flex flex-col gap-3">
          <F0Text
            content="Add the legal representatives that must sign Fundae communications. Each member receives an email with the documents to sign."
            variant="small"
          />
          {members.map((m, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-2 rounded-md border border-f1-border-secondary p-3"
            >
              <Input
                label={`Member ${idx + 1} name`}
                hideLabel
                placeholder={`Member ${idx + 1} name`}
                value={m.name}
                onChange={(v) =>
                  setMembers((prev) =>
                    prev.map((x, i) => (i === idx ? { ...x, name: v ?? "" } : x))
                  )
                }
              />
              <Input
                label={`Member ${idx + 1} role`}
                hideLabel
                placeholder="Role / position"
                value={m.role}
                onChange={(v) =>
                  setMembers((prev) =>
                    prev.map((x, i) => (i === idx ? { ...x, role: v ?? "" } : x))
                  )
                }
              />
              <Input
                label={`Member ${idx + 1} email`}
                hideLabel
                type="email"
                placeholder="Email"
                value={m.email}
                onChange={(v) =>
                  setMembers((prev) =>
                    prev.map((x, i) =>
                      i === idx ? { ...x, email: v ?? "" } : x
                    )
                  )
                }
              />
            </div>
          ))}
          <F0Button
            label="Add another member"
            variant="outline"
            size="sm"
            onClick={() =>
              setMembers((prev) => [...prev, { name: "", role: "", email: "" }])
            }
          />
        </div>
      )}

      {action === "edit-general" && (
        <div className="flex flex-col gap-3">
          <NumberInput
            label="Default training year"
            locale="en-US"
            value={defaultYear}
            onChange={(v) => setDefaultYear(v)}
          />
          <F0Checkbox
            title="Allow employees to request external trainings"
            checked={allowExternal}
            onCheckedChange={(c) => setAllowExternal(c === true)}
          />
          <F0Checkbox
            title="Auto-create classes for new participants"
            checked={autoCreateClasses}
            onCheckedChange={(c) => setAutoCreateClasses(c === true)}
          />
          <NumberInput
            label="Default course validity (months)"
            locale="en-US"
            value={courseValidity}
            onChange={(v) => setCourseValidity(v)}
          />
        </div>
      )}

      {(action === "new-reminder" || action === "edit-reminder") && (
        <div className="flex flex-col gap-3">
          <Input
            label="Reminder name"
            placeholder="One day before session"
            value={reminderName}
            onChange={(v) => setReminderName(v ?? "")}
          />
          <F0Select
            label="Trigger"
            value={reminderTrigger}
            onChange={(v: string) => setReminderTrigger(v)}
            options={[
              { value: "before-session", label: "Before session" },
              {
                value: "before-due-date",
                label: "Before completion due date",
              },
              {
                value: "after-no-progress",
                label: "After N days without progress",
              },
            ]}
          />
          <div className="grid grid-cols-2 gap-3">
            <NumberInput
              label="Days before"
              locale="en-US"
              value={reminderDays}
              onChange={(v) => setReminderDays(v)}
            />
            <F0Select
              label="Channel"
              value={reminderChannel}
              onChange={(v: string) =>
                setReminderChannel(v as "email" | "in-app" | "both")
              }
              options={[
                { value: "email", label: "Email" },
                { value: "in-app", label: "In-app" },
                { value: "both", label: "Email + In-app" },
              ]}
            />
          </div>
        </div>
      )}

      {action === "delete-reminder" && (
        <F0Alert
          variant="critical"
          title="This action cannot be undone"
          description="Deleting this reminder cancels it for all current and future trainings."
        />
      )}

      {action === "connect-google-calendar" && (
        <div className="flex flex-col gap-3">
          <F0Text
            content="You'll be redirected to Google to grant Factorial permission to create and update calendar events on your behalf."
            variant="small"
          />
          <F0Checkbox
            title="Send invites for new sessions automatically"
            checked={calSendInvites}
            onCheckedChange={(c) => setCalSendInvites(c === true)}
          />
          <F0Checkbox
            title="Update events when sessions are rescheduled"
            checked={calAutoUpdate}
            onCheckedChange={(c) => setCalAutoUpdate(c === true)}
          />
        </div>
      )}

      {action === "connect-outlook-calendar" && (
        <F0Text
          content="You'll be redirected to Microsoft to grant Factorial permission to create and update Outlook calendar events on your behalf."
          variant="small"
        />
      )}

      {action === "disconnect-calendar" && (
        <F0Alert
          variant="warning"
          title="Disconnect calendar"
          description="Existing events stay in the calendar but won't be updated. You can reconnect anytime."
        />
      )}

      {action === "export-trainings" && (
        <div className="flex flex-col gap-3">
          <F0Select
            label="Format"
            value={exportFormat}
            onChange={(v: string) =>
              setExportFormat(v as "csv" | "xlsx" | "pdf")
            }
            options={[
              { value: "xlsx", label: "Excel (.xlsx)" },
              { value: "csv", label: "CSV" },
              { value: "pdf", label: "PDF report" },
            ]}
          />
          <F0Select
            label="Date range"
            value={exportRange}
            onChange={(v: string) =>
              setExportRange(v as "all" | "year" | "custom")
            }
            options={[
              { value: "all", label: "All trainings" },
              { value: "year", label: "Current year (2026)" },
              { value: "custom", label: "Custom range" },
            ]}
          />
          {exportRange === "custom" && (
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="From"
                type="date"
                value={exportFrom}
                onChange={(v) => setExportFrom(v ?? "")}
              />
              <Input
                label="To"
                type="date"
                value={exportTo}
                onChange={(v) => setExportTo(v ?? "")}
              />
            </div>
          )}
          <F0Checkbox
            title="Include Fundae data (CIF, group, subsidies)"
            checked={includeFundae}
            onCheckedChange={(c) => setIncludeFundae(c === true)}
          />
          <F0Checkbox
            title="Include participants and attendance"
            checked={includeParticipants}
            onCheckedChange={(c) => setIncludeParticipants(c === true)}
          />
          <F0Checkbox
            title="Include cost breakdown"
            checked={includeCosts}
            onCheckedChange={(c) => setIncludeCosts(c === true)}
          />
        </div>
      )}

      {action === "salary-cost-calculator" && (
        <div className="flex flex-col gap-3">
          <F0Text
            content="Estimate the salary cost of running a training. We multiply the average hourly salary by the total hours per participant and the number of participants."
            variant="small"
          />
          <div className="grid grid-cols-3 gap-3">
            <NumberInput
              label="Avg. hourly salary (€)"
              locale="en-US"
              value={salaryHourly}
              onChange={(v) => setSalaryHourly(v)}
            />
            <NumberInput
              label="Hours per participant"
              locale="en-US"
              value={salaryHours}
              onChange={(v) => setSalaryHours(v)}
            />
            <NumberInput
              label="Participants"
              locale="en-US"
              value={salaryEmployees}
              onChange={(v) => setSalaryEmployees(v)}
            />
          </div>
          <div className="flex items-center justify-between rounded-md bg-f1-background-secondary p-3">
            <F0Text content="Estimated salary cost" variant="label" />
            <strong className="text-base">
              € {totalSalaryCost.toLocaleString("en-GB")}
            </strong>
          </div>
        </div>
      )}

      {action === "new-category" && (
        <div className="flex flex-col gap-3">
          <Input
            label="Category name"
            placeholder="Compliance"
            value={categoryName}
            onChange={(v) => setCategoryName(v ?? "")}
          />
          <F0Select
            label="Colour"
            value={categoryColor}
            onChange={(v: string) => setCategoryColor(v)}
            options={[
              { value: "info", label: "Info (blue)" },
              { value: "positive", label: "Positive (green)" },
              { value: "warning", label: "Warning (yellow)" },
              { value: "critical", label: "Critical (red)" },
              { value: "neutral", label: "Neutral (gray)" },
            ]}
          />
        </div>
      )}
    </F0Dialog>
  )
}
