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
import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"
import { Add, Check, Download, Files } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { trainingCategories } from "@/fixtures"
import type { PrototypeMeta } from "../../../types"

export const meta: PrototypeMeta = {
  slug: "trainings-importer",
  title: "Trainings — Universal Importer",
  description:
    "Bulk-import training catalog (courses, providers and categories) from a CSV/XLSX file: download template, upload file, map columns, validate rows and run the import with rollback support.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "importer", "bulk", "csv", "xlsx"],
  createdAt: "2026-05-12",
}

type Step = "upload" | "map" | "validate" | "review" | "done"

const SAMPLE_ROWS = [
  {
    name: "Advanced TypeScript",
    category: "Engineering",
    provider: "Frontend Masters",
    duration: "12",
    cost: "299",
    valid: true,
  },
  {
    name: "Leadership 101",
    category: "Leadership",
    provider: "INSEAD Online",
    duration: "20",
    cost: "1200",
    valid: true,
  },
  {
    name: "Excel for Finance",
    category: "(missing)",
    provider: "Udemy",
    duration: "8",
    cost: "49",
    valid: false,
  },
  {
    name: "GDPR Refresher",
    category: "Compliance",
    provider: "",
    duration: "3",
    cost: "",
    valid: false,
  },
]

const COLUMNS = [
  { id: "name", label: "Training name", required: true },
  { id: "category", label: "Category", required: true },
  { id: "provider", label: "Provider", required: false },
  { id: "duration", label: "Duration (h)", required: true },
  { id: "cost", label: "Cost (€)", required: false },
  { id: "axis", label: "Axis", required: false },
  { id: "is_mandatory", label: "Mandatory", required: false },
]

export default function TrainingsImporter() {
  const [step, setStep] = useState<Step>("upload")
  const [filename, setFilename] = useState<string | null>(null)
  const valid = SAMPLE_ROWS.filter((r) => r.valid).length
  const invalid = SAMPLE_ROWS.length - valid

  return (
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
            { id: "import", label: "Import catalog" },
          ]}
        />
      }
    >
      <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
        <div className="flex flex-col gap-1">
          <F0Heading
            content="Universal importer"
            variant="heading-large"
            as="h1"
          />
          <F0Text
            content="Upload your existing training catalog from a spreadsheet. Map the columns to Factorial fields, validate the rows and run the import."
            variant="body"
          />
        </div>

        {/* Stepper */}
        <div className="flex items-center gap-2">
          {[
            { id: "upload", label: "1. Upload" },
            { id: "map", label: "2. Map columns" },
            { id: "validate", label: "3. Validate" },
            { id: "review", label: "4. Review" },
            { id: "done", label: "5. Done" },
          ].map((s, i, arr) => (
            <div key={s.id} className="flex items-center gap-2">
              <span
                className={`flex h-7 items-center rounded-full px-3 text-xs font-medium ${
                  step === s.id
                    ? "bg-f1-background-bold text-white"
                    : "bg-f1-background-secondary text-f1-foreground-secondary"
                }`}
              >
                {s.label}
              </span>
              {i < arr.length - 1 && (
                <span className="text-f1-foreground-secondary">→</span>
              )}
            </div>
          ))}
        </div>

        {/* STEP: UPLOAD */}
        {step === "upload" && (
          <F0Card title="Upload your file">
            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-f1-border-secondary p-10 text-center">
                <Files className="h-10 w-10 text-f1-foreground-secondary" />
                <F0Text
                  content={
                    filename
                      ? `Ready to upload: ${filename}`
                      : "Drop your file here or click to browse (.csv, .xlsx, .xls — max 10MB)"
                  }
                  variant="small"
                />
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={(e) =>
                    setFilename(e.target.files?.[0]?.name ?? null)
                  }
                  className="text-sm"
                  aria-label="Upload file"
                />
              </div>
              <F0Alert
                variant="info"
                title="Need a template?"
                description="Download a pre-formatted spreadsheet with all columns and example rows."
              />
              <div className="flex justify-between">
                <F0Button
                  label="Download template"
                  icon={Download}
                  variant="outline"
                />
                <F0Button
                  label="Continue"
                  variant="default"
                  disabled={!filename}
                  onClick={() => setStep("map")}
                />
              </div>
            </div>
          </F0Card>
        )}

        {/* STEP: MAP */}
        {step === "map" && (
          <F0Card title="Map your columns to Factorial fields">
            <div className="flex flex-col gap-3 p-5">
              {COLUMNS.map((c) => (
                <div
                  key={c.id}
                  className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-3"
                >
                  <strong className="text-sm">
                    {c.label}
                    {c.required && (
                      <span className="ml-1 text-f1-foreground-critical">*</span>
                    )}
                  </strong>
                  <span className="text-f1-foreground-secondary">←</span>
                  <div className="min-w-[200px]">
                    <F0Select
                      label={`Map ${c.label}`}
                      hideLabel
                      value={c.label}
                      onChange={() => {}}
                      options={[
                        { value: c.label, label: c.label },
                        {
                          value: c.label.toLowerCase(),
                          label: c.label.toLowerCase(),
                        },
                        { value: "_none", label: "—" },
                      ]}
                    />
                  </div>
                  <Check className="h-4 w-4 text-f1-foreground-positive" />
                </div>
              ))}
              <div className="flex justify-between border-t border-f1-border-secondary pt-3">
                <F0Button
                  label="Back"
                  variant="outline"
                  onClick={() => setStep("upload")}
                />
                <F0Button
                  label="Validate rows"
                  variant="default"
                  onClick={() => setStep("validate")}
                />
              </div>
            </div>
          </F0Card>
        )}

        {/* STEP: VALIDATE */}
        {step === "validate" && (
          <>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  l: "Total rows",
                  v: SAMPLE_ROWS.length,
                  c: "bg-f1-background-secondary text-f1-foreground-secondary",
                },
                {
                  l: "Valid",
                  v: valid,
                  c: "bg-f1-background-positive text-f1-foreground-positive",
                },
                {
                  l: "Invalid",
                  v: invalid,
                  c: "bg-f1-background-critical text-f1-foreground-critical",
                },
              ].map((k) => (
                <F0Card key={k.l}>
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-wide text-f1-foreground-secondary">
                      {k.l}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <strong className="text-3xl">{k.v}</strong>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${k.c}`}
                      >
                        {k.l}
                      </span>
                    </div>
                  </div>
                </F0Card>
              ))}
            </div>
            <F0Card title="Preview">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-f1-background-secondary text-xs uppercase tracking-wide text-f1-foreground-secondary">
                    <tr>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Provider</th>
                      <th className="px-4 py-2 text-left">Duration</th>
                      <th className="px-4 py-2 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_ROWS.map((r, i) => (
                      <tr
                        key={i}
                        className="border-t border-f1-border-secondary"
                      >
                        <td className="px-4 py-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${r.valid ? "bg-f1-background-positive text-f1-foreground-positive" : "bg-f1-background-critical text-f1-foreground-critical"}`}
                          >
                            {r.valid ? "Valid" : "Invalid"}
                          </span>
                        </td>
                        <td className="px-4 py-2">{r.name}</td>
                        <td
                          className={`px-4 py-2 ${r.category === "(missing)" ? "text-f1-foreground-critical" : ""}`}
                        >
                          {r.category}
                        </td>
                        <td className="px-4 py-2">{r.provider || "—"}</td>
                        <td className="px-4 py-2">{r.duration}</td>
                        <td
                          className={`px-4 py-2 ${!r.cost ? "text-f1-foreground-critical" : ""}`}
                        >
                          {r.cost || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between border-t border-f1-border-secondary p-4">
                <F0Button
                  label="Back"
                  variant="outline"
                  onClick={() => setStep("map")}
                />
                <F0Button
                  label="Review & import"
                  variant="default"
                  onClick={() => setStep("review")}
                />
              </div>
            </F0Card>
          </>
        )}

        {/* STEP: REVIEW */}
        {step === "review" && (
          <F0Card title="Confirm import">
            <div className="flex flex-col gap-3 p-5">
              <F0Alert
                variant="warning"
                title="Invalid rows will be skipped"
                description={`${invalid} row(s) won't be imported. You can re-run the import after fixing them.`}
              />
              <ul className="ml-4 list-disc text-sm">
                <li>{valid} new trainings will be created</li>
                <li>
                  {trainingCategories.length} categories will be matched by name
                  (any new ones will be auto-created)
                </li>
                <li>2 new providers will be created</li>
              </ul>
              <F0Checkbox
                title="Send a confirmation email when the import is complete"
                checked
              />
              <F0Checkbox title="Mark all imported trainings as Mandatory by default" />
              <div className="flex justify-between border-t border-f1-border-secondary pt-3">
                <F0Button
                  label="Back"
                  variant="outline"
                  onClick={() => setStep("validate")}
                />
                <F0Button
                  label="Run import"
                  icon={Add}
                  variant="default"
                  onClick={() => setStep("done")}
                />
              </div>
            </div>
          </F0Card>
        )}

        {/* STEP: DONE */}
        {step === "done" && (
          <F0Card title="Import complete">
            <div className="flex flex-col items-center gap-3 p-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-f1-background-positive">
                <Check className="h-8 w-8 text-f1-foreground-positive" />
              </div>
              <F0Heading
                content={`${valid} trainings imported`}
                variant="heading"
                as="h2"
              />
              <F0Text
                content={`${invalid} row(s) were skipped due to validation errors. You can download the error log to fix them and re-run.`}
                variant="body"
              />
              <div className="flex gap-2">
                <F0Button
                  label="Download error log"
                  icon={Download}
                  variant="outline"
                />
                <F0Button
                  label="View imported trainings"
                  variant="default"
                  onClick={() => {
                    window.location.href = "/p/trainings"
                  }}
                />
              </div>
            </div>
          </F0Card>
        )}
      </F0Box>
    </Page>
  )
}
