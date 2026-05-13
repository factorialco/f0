import {
  F0Alert,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  OneDataCollection,
  SectionHeader,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Download } from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  participantsForTraining,
  type Training,
  type TrainingClass,
  type TrainingParticipant,
} from "@/fixtures"

type Props = { training: Training }

// ---------- Empty state (no classes) ----------

function EmptyState({ trainingId }: { trainingId: string }) {
  const navigate = useNavigate()
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="2xl"
      paddingTop="2xl"
      paddingX="lg"
    >
      <F0Card title="No classes yet for this training">
        <F0Box display="flex" flexDirection="column" gap="md" padding="lg">
          <F0Text
            variant="body"
            content="Add a class so participants can be assigned and you can submit it to Fundae."
          />
          <F0Box>
            <F0Button
              label="Add class"
              icon={Add}
              variant="default"
              onClick={() =>
                navigate(`/p/trainings-list?id=${trainingId}&dtab=groups`)
              }
            />
          </F0Box>
        </F0Box>
      </F0Card>
    </F0Box>
  )
}

// ---------- Header (Section header + Export action) ----------

function Header({
  selectedClassId,
  onExport,
}: {
  selectedClassId?: string
  onExport: () => void
}) {
  return (
    <SectionHeader
      separator="bottom"
      title="Finalise training group (Fundae)"
      description="Export the XML to submit the closed training group to the State Foundation (Fundae). Make sure all required participant data is complete."
      link={{
        href: "https://empresas.fundae.es/Lanzadera",
        label: "Open Fundae portal",
      }}
      action={
        selectedClassId
          ? {
              icon: Download,
              label: "Export XML",
              onClick: onExport,
            }
          : undefined
      }
    />
  )
}

// ---------- Group fields (codigo grupo, codigo curso, costs) ----------

type FieldsState = {
  codigoCurso: string
  codigoGrupo: string
  directCost: string
  indirectCost: string
  salaryCost: string
}

function validateCodigo(value: string): boolean {
  if (!value) return false
  return /^\d{1,5}$/.test(value)
}

function GroupFields({
  fields,
  setFields,
  validate,
}: {
  fields: FieldsState
  setFields: (next: FieldsState) => void
  validate: boolean
}) {
  const codigoGrupoError =
    validate && !fields.codigoGrupo
      ? "This field is required."
      : fields.codigoGrupo && !validateCodigo(fields.codigoGrupo)
        ? "Invalid code: must be a number with up to 5 digits."
        : undefined

  const codigoCursoError =
    validate && !fields.codigoCurso
      ? "This field is required."
      : fields.codigoCurso && !validateCodigo(fields.codigoCurso)
        ? "Invalid code: must be a number with up to 5 digits."
        : undefined

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Heading as="h3" variant="heading" content="Group details" />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Group code"
            hint="Fundae group identifier (1–99999). Required."
            placeholder="00001"
            value={fields.codigoGrupo}
            error={codigoGrupoError}
            onChange={(v) =>
              setFields({ ...fields, codigoGrupo: (v ?? "").toString() })
            }
          />
          <Input
            label="Course code"
            hint="Fundae course identifier (1–99999). Required."
            placeholder="00001"
            value={fields.codigoCurso}
            error={codigoCursoError}
            onChange={(v) =>
              setFields({ ...fields, codigoCurso: (v ?? "").toString() })
            }
          />
        </div>
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Heading as="h3" variant="heading" content="Costs" />
        <div className="grid grid-cols-3 gap-4">
          <NumberInput
            label="Direct costs (€)"
            locale="es-ES"
            value={fields.directCost ? Number(fields.directCost) : null}
            onChange={(v) =>
              setFields({
                ...fields,
                directCost: v === null || v === undefined ? "" : String(v),
              })
            }
            error={
              validate && !fields.directCost
                ? "This field is required."
                : undefined
            }
          />
          <NumberInput
            label="Indirect costs (€)"
            locale="es-ES"
            value={fields.indirectCost ? Number(fields.indirectCost) : null}
            onChange={(v) =>
              setFields({
                ...fields,
                indirectCost: v === null || v === undefined ? "" : String(v),
              })
            }
            error={
              validate && !fields.indirectCost
                ? "This field is required."
                : undefined
            }
          />
          <NumberInput
            label="Salary costs (€)"
            locale="es-ES"
            value={fields.salaryCost ? Number(fields.salaryCost) : null}
            onChange={(v) =>
              setFields({
                ...fields,
                salaryCost: v === null || v === undefined ? "" : String(v),
              })
            }
            error={
              validate && !fields.salaryCost
                ? "This field is required."
                : undefined
            }
          />
        </div>
      </F0Box>
    </F0Box>
  )
}

// ---------- Fundae participants datatable ----------

type FundaeRow = {
  id: string
  fullName: string
  avatar: string
  identifier: string
  email: string
  phone: string
  professionalCategory: string
  educationLevel: string
  certificate: boolean
  // missing data flag for filter
  hasMissingData: boolean
}

const PROFESSIONAL_CATEGORIES: Record<string, string> = {
  "emp-001": "Engineering Manager",
  "emp-002": "Senior Engineer",
  "emp-003": "Lead Designer",
  "emp-004": "Engineer",
  "emp-005": "HR Specialist",
}

const EDUCATION_LEVELS: Record<string, string> = {
  "emp-001": "Master",
  "emp-002": "Bachelor",
  "emp-003": "Bachelor",
  "emp-004": "",
  "emp-005": "Bachelor",
}

function buildRowsForClass(
  trainingId: string,
  trainingClass: TrainingClass
): FundaeRow[] {
  const all = participantsForTraining(trainingId)
  const inClass = all.filter(
    (p) => p.classId === trainingClass.id || p.classId === null
  )
  return inClass.map((p, idx) => mapToRow(p, idx))
}

function mapToRow(p: TrainingParticipant, idx: number): FundaeRow {
  // Deterministic NIF / phone / category derived from employeeId
  const nifNumber = String(10000000 + idx * 1234567).slice(0, 8)
  const nifLetter = "TRWAGMYFPDXBNJZSQVHLCKE"[
    Number(nifNumber) % 23
  ] as string
  const identifier = `${nifNumber}${nifLetter}`
  // Half of the records intentionally missing a field
  const missingPhone = idx % 3 === 0
  const missingCategory = idx % 4 === 1
  const missingEducation = (EDUCATION_LEVELS[p.employeeId] ?? "") === ""
  return {
    id: p.id,
    fullName: p.employeeName,
    avatar: p.employeeAvatar,
    identifier,
    email: `${p.employeeName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
    phone: missingPhone ? "" : `+34 6${String(10000000 + idx * 31).slice(-8)}`,
    professionalCategory: missingCategory
      ? ""
      : PROFESSIONAL_CATEGORIES[p.employeeId] ?? "Specialist",
    educationLevel: EDUCATION_LEVELS[p.employeeId] ?? "",
    certificate: p.certificateCount > 0,
    hasMissingData: missingPhone || missingCategory || missingEducation,
  }
}

function ParticipantsTable({
  trainingClass,
  trainingId,
}: {
  trainingClass: TrainingClass
  trainingId: string
}) {
  const rows = useMemo(
    () => buildRowsForClass(trainingId, trainingClass),
    [trainingClass.id, trainingId]
  )

  const source = useDataCollectionSource<FundaeRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        missingData: {
          type: "in",
          label: "Missing data",
          options: {
            options: [
              { value: "missing", label: "Missing data" },
              { value: "complete", label: "Complete" },
            ],
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const missingFilter = (filters?.missingData ?? []) as string[]
          const filtered = rows.filter((r) => {
            const matchesSearch =
              term === "" ||
              r.fullName.toLowerCase().includes(term) ||
              r.identifier.toLowerCase().includes(term)
            const matchesMissing =
              missingFilter.length === 0 ||
              (missingFilter.includes("missing") && r.hasMissingData) ||
              (missingFilter.includes("complete") && !r.hasMissingData)
            return matchesSearch && matchesMissing
          })
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: filtered.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
    },
    [trainingClass.id, trainingId]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Heading as="h3" variant="heading" content="Participants" />
      <OneDataCollection
        id={`trainings/fundae-${trainingId}-${trainingClass.id}/v1`}
        source={source}
        emptyStates={{
          "no-data": {
            title: "No participants in this class",
            description: "Add participants to the class so they can be submitted to Fundae.",
          },
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Participant",
                  render: (r: FundaeRow) => ({
                    type: "person" as const,
                    value: {
                      firstName: r.fullName.split(" ")[0] ?? r.fullName,
                      lastName: r.fullName.split(" ").slice(1).join(" "),
                      src: r.avatar,
                    },
                  }),
                },
                {
                  label: "NIF / NIE",
                  render: (r: FundaeRow) =>
                    r.identifier
                      ? r.identifier
                      : { type: "text" as const, value: "—" },
                },
                {
                  label: "Phone",
                  render: (r: FundaeRow) =>
                    r.phone
                      ? r.phone
                      : { type: "text" as const, value: "Missing" },
                },
                {
                  label: "Professional category",
                  render: (r: FundaeRow) =>
                    r.professionalCategory
                      ? r.professionalCategory
                      : { type: "text" as const, value: "Missing" },
                },
                {
                  label: "Education level",
                  render: (r: FundaeRow) =>
                    r.educationLevel
                      ? r.educationLevel
                      : { type: "text" as const, value: "Missing" },
                },
                {
                  label: "Diploma",
                  render: (r: FundaeRow) => (r.certificate ? "Yes" : "No"),
                  noHiding: false,
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

// ---------- Export dashboard (classes.length > 0) ----------

function ExportDashboard({ training }: { training: Training }) {
  const classes = training.classes
  const [selectedClassId, setSelectedClassId] = useState<string>(
    classes[0]?.id ?? ""
  )
  const [validate, setValidate] = useState(false)
  const selectedClass = classes.find((c) => c.id === selectedClassId)

  const [fields, setFields] = useState<FieldsState>(() => ({
    codigoCurso: training.codigoCurso ?? "",
    codigoGrupo: selectedClass?.fundaeConfig?.codigoGrupo ?? "",
    directCost: selectedClass?.cost ?? "",
    indirectCost: selectedClass?.indirectCost ?? "",
    salaryCost: selectedClass?.salaryCost ?? "",
  }))

  // Refresh form state when class changes
  const handleSelectClass = (next: string) => {
    setSelectedClassId(next)
    const nextClass = classes.find((c) => c.id === next)
    setFields({
      codigoCurso: training.codigoCurso ?? "",
      codigoGrupo: nextClass?.fundaeConfig?.codigoGrupo ?? "",
      directCost: nextClass?.cost ?? "",
      indirectCost: nextClass?.indirectCost ?? "",
      salaryCost: nextClass?.salaryCost ?? "",
    })
  }

  const hasErrors =
    !fields.codigoGrupo ||
    !fields.codigoCurso ||
    !fields.directCost ||
    !fields.indirectCost ||
    !fields.salaryCost ||
    !validateCodigo(fields.codigoGrupo) ||
    !validateCodigo(fields.codigoCurso)

  const onExport = () => {
    if (hasErrors) {
      setValidate(true)
      return
    }
    // No-op: in production this fires the Fundae XML export mutation.
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Header selectedClassId={selectedClassId} onExport={onExport} />

      {selectedClass && (
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <div className="max-w-[400px]">
            <F0Select
              label="Training group"
              placeholder="Select a group"
              value={selectedClassId}
              onChange={(v: string) => handleSelectClass(v)}
              options={classes.map((c) => ({ value: c.id, label: c.name }))}
            />
          </div>

          <F0Alert
            variant="info"
            title="Any change you make here is saved automatically and applies only to this training group."
            description=""
          />

          <GroupFields
            fields={fields}
            setFields={setFields}
            validate={validate}
          />

          <ParticipantsTable
            trainingClass={selectedClass}
            trainingId={training.id}
          />
        </F0Box>
      )}
    </F0Box>
  )
}

// ---------- Tab entry point ----------

export function FundaeTab({ training }: Props) {
  if (!training.fundaeSubsidized) {
    return (
      <F0Box
        display="flex"
        flexDirection="column"
        gap="lg"
        padding="xl"
      >
        <F0Alert
          variant="warning"
          title="This training is not marked as Fundae-bonifiable"
          description="Enable Fundae from the training settings to submit closed groups to the State Foundation."
        />
        <F0Box>
          <F0Text
            variant="body"
            content="Once enabled, this tab will let you select a class, fill in the required Fundae fields (group code, course code, costs) and export the XML."
          />
        </F0Box>
      </F0Box>
    )
  }

  if (training.classes.length === 0) {
    return (
      <F0Box display="flex" flexDirection="column" gap="lg">
        <EmptyState trainingId={training.id} />
      </F0Box>
    )
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <ExportDashboard training={training} />
    </F0Box>
  )
}

// Silence "F0Button imported but unused" if F0Card.emptyState renders the action.
void F0Button
