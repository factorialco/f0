import {
  F0Alert,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import { Add, Delete } from "@factorialco/f0-react/icons/app"

import { certificatesForTraining, type Training, type TrainingClass } from "@/fixtures"

type Props = { training: Training; klass: TrainingClass }

export function DocumentsTab({ training, klass }: Props) {
  const allCerts = certificatesForTraining(training.id)
  const participantNames = new Set(
    klass.participants.map((p) => `${p.firstName} ${p.lastName}`.trim())
  )
  const certs = allCerts.filter((c) => participantNames.has(c.employeeName))

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading
            content={`Documents (${certs.length})`}
            variant="heading-large"
            as="h2"
          />
          <F0Text
            content="Certificates issued for this group only. Generate new ones from the participants tab."
            variant="description"
          />
        </div>
        <F0Button label="Upload document" icon={Add} variant="default" />
      </div>

      {certs.length === 0 ? (
        <F0Alert
          variant="info"
          title="No documents yet"
          description="Issue certificates once participants finish the group, or upload supporting paperwork."
        />
      ) : (
        <F0Card title={`Certificates (${certs.length})`}>
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-x-4 gap-y-2 p-4">
            <F0Text content="Employee" variant="small" />
            <F0Text content="File" variant="small" />
            <F0Text content="Issued" variant="small" />
            <F0Text content="Status" variant="small" />
            <F0Text content="" variant="small" />
            {certs.map((c) => (
              <div
                key={c.id}
                className="col-span-5 grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-4 border-t border-solid border-f1-border-secondary py-2"
              >
                <F0Text content={c.employeeName} variant="label" />
                <F0Text content={c.fileName} variant="small" />
                <F0Text content={c.uploadedAt.slice(0, 10)} variant="small" />
                <span
                  className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium ${
                    c.status === "valid"
                      ? "bg-f1-background-positive text-f1-foreground-positive"
                      : c.status === "expiring_soon"
                        ? "bg-f1-background-warning text-f1-foreground-warning"
                        : "bg-f1-background-critical text-f1-foreground-critical"
                  }`}
                >
                  {c.status.replace("_", " ")}
                </span>
                <div className="flex gap-2">
                  <F0Button label="Download" variant="ghost" size="sm" />
                  <F0Button label="Replace" variant="ghost" size="sm" />
                  <F0Button
                    label="Delete"
                    icon={Delete}
                    variant="ghost"
                    size="sm"
                    hideLabel
                  />
                </div>
              </div>
            ))}
          </div>
        </F0Card>
      )}
    </F0Box>
  )
}
