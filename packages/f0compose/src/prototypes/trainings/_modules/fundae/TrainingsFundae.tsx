import {
  F0Alert,
  F0Box,
  F0Button,
  F0Card,
  F0Checkbox,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Pencil } from "@factorialco/f0-react/icons/app"
import { useEffect, useMemo, useState } from "react"

import { trainingCategories } from "@/fixtures"
import type { PrototypeMeta } from "../../../types"

export const meta: PrototypeMeta = {
  slug: "trainings-fundae",
  title: "Trainings — Fundae subsidies (ES)",
  description:
    "Spain-only Fundae subsidy management: map training categories to Fundae bonus codes, configure quarterly limits, view subsidy report and export the XML for the State Foundation.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "fundae", "spain", "subsidies", "compliance"],
  createdAt: "2026-05-12",
}

type Mapping = {
  id: string
  categoryId: string
  bonusCode: string
  modality: "presencial" | "teleformacion" | "mixta"
  hourlyRate: number
}

const initialMappings: Mapping[] = [
  {
    id: "map-001",
    categoryId: trainingCategories[0]?.id ?? "cat-001",
    bonusCode: "B-2024-001",
    modality: "teleformacion",
    hourlyRate: 7.5,
  },
  {
    id: "map-002",
    categoryId: trainingCategories[1]?.id ?? "cat-002",
    bonusCode: "B-2024-002",
    modality: "mixta",
    hourlyRate: 13,
  },
  {
    id: "map-003",
    categoryId: trainingCategories[2]?.id ?? "cat-003",
    bonusCode: "B-2024-003",
    modality: "presencial",
    hourlyRate: 13,
  },
]

export default function TrainingsFundae() {
  const [tab, setTab] = useState("mappings")
  const [mappings, setMappings] = useState(initialMappings)
  const [action, setAction] = useState<
    null | { type: "create" } | { type: "edit"; id: string } | { type: "delete"; id: string } | { type: "export" }
  >(null)
  const [annualLimit, setAnnualLimit] = useState<number | null>(42000)
  const [quarterCap, setQuarterCap] = useState<number | null>(10500)
  const [warnAt80, setWarnAt80] = useState(true)

  const [formCategoryId, setFormCategoryId] = useState(
    trainingCategories[0]?.id ?? "cat-001"
  )
  const [formBonusCode, setFormBonusCode] = useState("")
  const [formModality, setFormModality] = useState<
    "presencial" | "teleformacion" | "mixta"
  >("teleformacion")
  const [formHourlyRate, setFormHourlyRate] = useState<number | null>(7.5)
  const [exportQuarter, setExportQuarter] = useState("Q1 2026")
  const [exportOnlySigned, setExportOnlySigned] = useState(true)
  const [exportValidate, setExportValidate] = useState(true)

  const close = () => setAction(null)
  const editing =
    action && action.type === "edit"
      ? mappings.find((m) => m.id === action.id)
      : null

  useEffect(() => {
    if (action?.type === "edit" && editing) {
      setFormCategoryId(editing.categoryId)
      setFormBonusCode(editing.bonusCode)
      setFormModality(editing.modality)
      setFormHourlyRate(editing.hourlyRate)
    } else if (action?.type === "create") {
      setFormCategoryId(trainingCategories[0]?.id ?? "cat-001")
      setFormBonusCode("")
      setFormModality("teleformacion")
      setFormHourlyRate(7.5)
    }
  }, [action, editing])

  const categoryOptions = useMemo(
    () => trainingCategories.map((c) => ({ value: c.id, label: c.name })),
    []
  )

  return (
    <>
      <Page
        header={
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Trainings",
              href: "/p/trainings",
            }}
            breadcrumbs={[
              { id: "list", label: "Trainings", href: "/p/trainings" },
              {
                id: "settings",
                label: "Settings",
                href: "/p/trainings-settings",
              },
              { id: "fundae", label: "Fundae" },
            ]}
            actions={[
              {
                label: "Export XML",
                icon: Add,
                onClick: () => setAction({ type: "export" }),
              },
            ]}
          />
        }
      >
        <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
          <div className="flex flex-col gap-1">
            <F0Heading
              content="Fundae subsidies"
              variant="heading-large"
              as="h1"
            />
            <F0Text
              content="Configure the Spanish State Foundation (Fundae) subsidies for company trainings. Map your internal categories to official bonus codes."
              variant="body"
            />
          </div>

          <F0Alert
            variant="info"
            title="Spain-only feature"
            description="This section is enabled because the company country is set to Spain. Fundae quarterly XML must be submitted before the deadline."
          />

          <Tabs
            tabs={[
              {
                id: "mappings",
                label: "Category mappings",
                onClick: () => setTab("mappings"),
              },
              {
                id: "limits",
                label: "Quarterly limits",
                onClick: () => setTab("limits"),
              },
              {
                id: "report",
                label: "Subsidy report",
                onClick: () => setTab("report"),
              },
            ]}
            activeTabId={tab}
          />

          {tab === "mappings" && (
            <F0Card title={`${mappings.length} mappings`}>
              <div className="flex flex-col divide-y divide-f1-border-secondary">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 bg-f1-background-secondary px-4 py-2 text-xs uppercase tracking-wide text-f1-foreground-secondary">
                  <span>Category</span>
                  <span>Bonus code</span>
                  <span>Modality</span>
                  <span>Hourly rate</span>
                  <span></span>
                </div>
                {mappings.map((m) => {
                  const cat = trainingCategories.find(
                    (c) => c.id === m.categoryId
                  )
                  return (
                    <div
                      key={m.id}
                      className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-3 px-4 py-3 text-sm"
                    >
                      <strong>{cat?.name ?? m.categoryId}</strong>
                      <span>{m.bonusCode}</span>
                      <span className="capitalize">{m.modality}</span>
                      <span>€ {m.hourlyRate.toFixed(2)} / h</span>
                      <div className="flex gap-1">
                        <button
                          onClick={() =>
                            setAction({ type: "edit", id: m.id })
                          }
                          className="rounded-md p-1.5 hover:bg-f1-background-hover"
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            setAction({ type: "delete", id: m.id })
                          }
                          className="rounded-md px-2 py-1 text-xs text-f1-foreground-critical hover:bg-f1-background-hover"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )
                })}
                <div className="p-4">
                  <F0Button
                    label="Add mapping"
                    icon={Add}
                    variant="outline"
                    size="sm"
                    onClick={() => setAction({ type: "create" })}
                  />
                </div>
              </div>
            </F0Card>
          )}

          {tab === "limits" && (
            <div className="grid grid-cols-2 gap-4">
              <F0Card title="Annual limit">
                <div className="flex flex-col gap-3 p-5">
                  <NumberInput
                    label="Maximum bonifiable amount per year (€)"
                    locale="en-US"
                    value={annualLimit}
                    onChange={(v) => setAnnualLimit(v)}
                  />
                  <F0Text
                    content="The State Foundation caps the bonifiable amount based on the company's social-security contribution from the previous year."
                    variant="small"
                  />
                </div>
              </F0Card>
              <F0Card title="Per-quarter cap">
                <div className="flex flex-col gap-3 p-5">
                  <NumberInput
                    label="Cap per quarter (€)"
                    locale="en-US"
                    value={quarterCap}
                    onChange={(v) => setQuarterCap(v)}
                  />
                  <F0Checkbox
                    title="Send a warning email when 80% of the quarter cap is reached"
                    checked={warnAt80}
                    onCheckedChange={(c) => setWarnAt80(c === true)}
                  />
                </div>
              </F0Card>
            </div>
          )}

          {tab === "report" && (
            <F0Card title="Q1 2026 — provisional subsidy report">
              <div className="flex flex-col gap-3 p-5">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { l: "Bonifiable amount", v: "€ 8,420.00" },
                    { l: "Hours bonified", v: "1,124 h" },
                    { l: "Employees", v: "42" },
                  ].map((k) => (
                    <div
                      key={k.l}
                      className="rounded-md border border-f1-border-secondary p-4"
                    >
                      <div className="text-xs uppercase tracking-wide text-f1-foreground-secondary">
                        {k.l}
                      </div>
                      <strong className="text-2xl">{k.v}</strong>
                    </div>
                  ))}
                </div>
                <F0Alert
                  variant="warning"
                  title="3 trainings missing required data"
                  description="Some trainings can't be included in the XML until you complete provider CIF, signed attendance and start/end dates."
                />
                <div className="flex justify-end gap-2">
                  <F0Button label="View missing data" variant="outline" />
                  <F0Button
                    label="Generate XML"
                    variant="default"
                    onClick={() => setAction({ type: "export" })}
                  />
                </div>
              </div>
            </F0Card>
          )}
        </F0Box>
      </Page>

      {action && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={close}
        >
          <div
            className="w-[460px] rounded-lg bg-f1-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-f1-border-secondary px-5 py-4">
              <strong className="text-base">
                {action.type === "create" && "Add Fundae mapping"}
                {action.type === "edit" && "Edit Fundae mapping"}
                {action.type === "delete" && "Remove Fundae mapping"}
                {action.type === "export" && "Generate Fundae XML"}
              </strong>
              <button
                onClick={close}
                className="text-2xl leading-none text-f1-foreground-secondary hover:text-f1-foreground"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-3 p-5 text-sm">
              {(action.type === "create" || action.type === "edit") && (
                <>
                  <F0Select
                    label="Internal category"
                    value={formCategoryId}
                    onChange={(v: string) => setFormCategoryId(v)}
                    options={categoryOptions}
                  />
                  <Input
                    label="Bonus code"
                    placeholder="e.g. B-2024-001"
                    value={formBonusCode}
                    onChange={(v) => setFormBonusCode(v ?? "")}
                  />
                  <F0Select
                    label="Modality"
                    value={formModality}
                    onChange={(v: string) =>
                      setFormModality(
                        v as "presencial" | "teleformacion" | "mixta"
                      )
                    }
                    options={[
                      { value: "presencial", label: "Presencial" },
                      { value: "teleformacion", label: "Teleformación" },
                      { value: "mixta", label: "Mixta" },
                    ]}
                  />
                  <NumberInput
                    label="Hourly rate (€/h)"
                    locale="en-US"
                    value={formHourlyRate}
                    onChange={(v) => setFormHourlyRate(v)}
                  />
                </>
              )}
              {action.type === "delete" && (
                <div className="rounded-md bg-f1-background-critical-secondary p-3 text-f1-foreground-critical">
                  This mapping will be removed. Trainings already submitted with
                  this code remain unchanged.
                </div>
              )}
              {action.type === "export" && (
                <>
                  <F0Select
                    label="Quarter"
                    value={exportQuarter}
                    onChange={(v: string) => setExportQuarter(v)}
                    options={[
                      { value: "Q1 2026", label: "Q1 2026" },
                      { value: "Q4 2025", label: "Q4 2025" },
                      { value: "Q3 2025", label: "Q3 2025" },
                    ]}
                  />
                  <F0Checkbox
                    title="Include only trainings with signed attendance"
                    checked={exportOnlySigned}
                    onCheckedChange={(c) => setExportOnlySigned(c === true)}
                  />
                  <F0Checkbox
                    title="Validate XML against Fundae XSD before download"
                    checked={exportValidate}
                    onCheckedChange={(c) => setExportValidate(c === true)}
                  />
                </>
              )}
            </div>
            <div className="flex justify-end gap-2 border-t border-f1-border-secondary px-5 py-4">
              <button
                onClick={close}
                className="rounded-md border border-f1-border-secondary px-4 py-1.5 text-sm font-medium hover:bg-f1-background-hover"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (action.type === "delete") {
                    setMappings((prev) => prev.filter((m) => m.id !== action.id))
                  }
                  close()
                }}
                className={`rounded-md px-4 py-1.5 text-sm font-semibold text-white ${action.type === "delete" ? "bg-f1-background-critical hover:opacity-90" : "bg-f1-background-bold hover:opacity-90"}`}
              >
                {action.type === "create" && "Add"}
                {action.type === "edit" && "Save"}
                {action.type === "delete" && "Remove"}
                {action.type === "export" && "Download XML"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
