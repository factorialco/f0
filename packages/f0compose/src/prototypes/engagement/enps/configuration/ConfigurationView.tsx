import { useState } from "react"
import type { IconType } from "@factorialco/f0-react"
import {
  F0Box,
  F0Button,
  F0Heading,
  F0Text,
  F0Select,
  F0DatePicker,
  F0Alert,
  F0Icon,
  F0AvatarPerson,
} from "@factorialco/f0-react"
import { Dialog } from "@factorialco/f0-react/dist/experimental"
import { Settings, People, Add } from "@factorialco/f0-react/icons/app"
import { configEditors } from "./editorsFixtures"

const frequencyOptions = [
  { value: "monthly", label: "Every month" },
  { value: "bimonthly", label: "Every 2 months" },
  { value: "quarterly", label: "Every 3 months" },
  { value: "biannual", label: "Every 6 months" },
  { value: "annual", label: "Every year" },
]

function SectionRow({
  icon,
  title,
  description,
  actions,
  children,
}: {
  icon: IconType
  title: string
  description: string
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-10 items-start">
      <div className="w-[340px] shrink-0 flex flex-col gap-2">
        <F0Icon icon={icon} size="md" />
        <F0Heading content={title} variant="heading" as="h3" />
        <F0Text content={description} variant="description" />
        {actions}
      </div>
      <F0Box grow>{children}</F0Box>
    </div>
  )
}

export function ConfigurationView() {
  const [stopDialogOpen, setStopDialogOpen] = useState(false)
  const [frequency, setFrequency] = useState("quarterly")

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10">
      {/* Basic info section */}
      <SectionRow
        icon={Settings}
        title="Basic info"
        description="Provide details to easily identify this survey."
      >
        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          padding="lg"
          background="secondary"
          borderRadius="md"
        >
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text content="Name" variant="label" />
            <input
              className="w-full rounded-md border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected focus:outline-none"
              defaultValue="Pesquisa eNPS"
            />
          </F0Box>
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text content="Description" variant="label" />
            <textarea
              className="w-full rounded-md border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected focus:outline-none"
              rows={4}
              defaultValue="Pesquisa Interna"
            />
          </F0Box>
        </F0Box>
      </SectionRow>

      {/* Date and frequency section */}
      <SectionRow
        icon={Settings}
        title="Date and frequency"
        description="Setup how often you want employees to respond to the survey."
      >
        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          padding="lg"
          background="secondary"
          borderRadius="md"
        >
          <F0DatePicker label="Start on" onChange={() => {}} />
          <F0Select
            label="Frequency"
            value={frequency}
            options={frequencyOptions}
            onChange={(val: string) => setFrequency(val)}
          />
          <F0Box>
            <F0Button
              label="Stop survey"
              variant="critical"
              onClick={() => setStopDialogOpen(true)}
            />
          </F0Box>
        </F0Box>
      </SectionRow>

      {/* Editors section */}
      <SectionRow
        icon={People}
        title="Editors"
        description="Editors can modify settings and view results. Admins have full access."
        actions={
          <F0Box>
            <F0Button
              label="Add editor"
              variant="outline"
              icon={Add}
              onClick={() => {}}
            />
          </F0Box>
        }
      >
        <F0Box display="flex" flexDirection="column">
          {/* Header */}
          <div className="border-b border-f1-border px-4 py-2">
            <F0Text content="Name" variant="description" />
          </div>
          {/* Editor rows */}
          {configEditors.map((editor) => (
            <div
              key={editor.id}
              className="flex items-center gap-3 border-b border-f1-border px-4 py-3 last:border-b-0"
            >
              <F0AvatarPerson
                firstName={editor.firstName}
                lastName={editor.lastName}
                src={editor.src}
                size="sm"
              />
              <F0Text
                content={`${editor.firstName} ${editor.lastName}`}
                variant="body"
              />
            </div>
          ))}
        </F0Box>
      </SectionRow>

      {/* Data integrity notice */}
      <F0Alert
        variant="info"
        title="Data integrity"
        description="Closed survey results are frozen at the time of closure. Adding or removing employees will not affect historical eNPS scores or response counts."
      />

      {stopDialogOpen && (
        <Dialog
          open={stopDialogOpen}
          onClose={() => setStopDialogOpen(false)}
          header={{
            type: "critical",
            title: "Stop eNPS survey",
            description:
              "Stopping this survey will freeze its results permanently. The eNPS score and all responses will be locked as of today. New employee changes will not affect historical data. Are you sure you want to proceed?",
          }}
          actions={{
            primary: {
              label: "Stop survey",
              onClick: () => setStopDialogOpen(false),
            },
            secondary: {
              label: "Cancel",
              onClick: () => setStopDialogOpen(false),
            },
          }}
        />
      )}
    </div>
  )
}
