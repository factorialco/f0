import { F0Alert, F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import {
  OneDataCollection,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Delete } from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"

import {
  participantsForTraining,
  type TrainingClass,
  type TrainingParticipant,
} from "@/fixtures"

type Props = {
  trainingId: string
  trainingClass: TrainingClass
  // Declared count from the inicio communication (NumeroParticipante). Used to
  // flag a mismatch between what was reported at inicio and who is actually
  // being bonified at fin.
  numParticipantesPrevistos: number | null
  readOnly?: boolean
}

type ParticipantRow = {
  id: string
  fullName: string
  avatar: string
  nif: string
  telefono: string
  categoria: string
  nivel: string
  horasAsistidas: number
  horasTotales: number
  apto: boolean
  diploma: boolean
}

// Catálogos FUNDAE (categoría profesional y nivel de estudios del participante).
const CATEGORIAS_FUNDAE = [
  "Directivo/a",
  "Mando intermedio",
  "Técnico/a",
  "Trabajador/a cualificado/a",
  "Trabajador/a no cualificado/a",
]
const NIVELES_FUNDAE = [
  "Educación primaria",
  "ESO / Graduado escolar",
  "Bachillerato",
  "FP grado medio",
  "FP grado superior",
  "Titulado/a universitario/a",
]

function buildRows(
  trainingId: string,
  trainingClass: TrainingClass
): ParticipantRow[] {
  const all = participantsForTraining(trainingId)
  const inClass = all.filter(
    (p) => p.classId === trainingClass.id || p.classId === null
  )
  return inClass.map((p, idx) => mapRow(p, idx))
}

function mapRow(p: TrainingParticipant, idx: number): ParticipantRow {
  const nifNumber = String(10000000 + idx * 1234567).slice(0, 8)
  const nifLetter = "TRWAGMYFPDXBNJZSQVHLCKE"[Number(nifNumber) % 23] as string
  const horasAsistidas = idx % 7 === 0 ? 12 : 20
  const horasTotales = 20
  return {
    id: p.id,
    fullName: p.employeeName,
    avatar: p.employeeAvatar,
    nif: `${nifNumber}${nifLetter}`,
    telefono: `6${String(11111111 + idx * 1234567).slice(0, 8)}`,
    categoria: CATEGORIAS_FUNDAE[idx % CATEGORIAS_FUNDAE.length] as string,
    nivel: NIVELES_FUNDAE[idx % NIVELES_FUNDAE.length] as string,
    horasAsistidas,
    horasTotales,
    apto: horasAsistidas >= 15,
    // No bonificable (no apto) no puede figurar con diploma emitido.
    diploma: horasAsistidas >= 15 && p.certificateCount > 0,
  }
}

// Used only inside the FIN panel (XML of finalización requires per-participant
// outcomes: hours attended, apto/no apto, diploma). The INICIO panel only
// reports the total count (NumeroParticipante) — no individual data is sent.
export function FundaeParticipantsTable({
  trainingId,
  trainingClass,
  numParticipantesPrevistos,
  readOnly,
}: Props) {
  const rows = useMemo(
    () => buildRows(trainingId, trainingClass),
    [trainingId, trainingClass.id]
  )

  // Participants excluded from the bonification (dropouts / won't be bonified).
  // Kept locally — they're not deleted, just hidden from the fin report and
  // restorable. Reset when the selected class changes.
  const [excludedIds, setExcludedIds] = useState<string[]>([])
  const excludeKey = [...excludedIds].sort().join(",")

  const visibleRows = useMemo(
    () => rows.filter((r) => !excludedIds.includes(r.id)),
    [rows, excludeKey] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const bonificables = visibleRows.length
  const aptosVisibles = visibleRows.filter((r) => r.apto).length
  const previstos = numParticipantesPrevistos

  const source = useDataCollectionSource<ParticipantRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        estado: {
          type: "in",
          label: "Resultado",
          options: {
            options: [
              { value: "apto", label: "Apto" },
              { value: "no_apto", label: "No apto" },
            ],
          },
        },
      },
      itemActions: readOnly
        ? undefined
        : (item: ParticipantRow) => [
            {
              label: "Excluir de la bonificación",
              icon: Delete,
              critical: true,
              onClick: () =>
                setExcludedIds((prev) =>
                  prev.includes(item.id) ? prev : [...prev, item.id]
                ),
            },
          ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const estadoFilter = (filters?.estado ?? []) as string[]
          const filtered = visibleRows.filter((r) => {
            const matchSearch =
              term === "" ||
              r.fullName.toLowerCase().includes(term) ||
              r.nif.toLowerCase().includes(term)
            const matchFilter =
              estadoFilter.length === 0 ||
              (estadoFilter.includes("apto") && r.apto) ||
              (estadoFilter.includes("no_apto") && !r.apto)
            return matchSearch && matchFilter
          })
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          return {
            type: "pages" as const,
            records: filtered.slice((currentPage - 1) * perPage, currentPage * perPage),
            total,
            perPage,
            currentPage,
            pagesCount: Math.max(1, Math.ceil(total / perPage)),
          }
        },
      },
    },
    [trainingId, trainingClass.id, excludeKey, readOnly] // eslint-disable-line react-hooks/exhaustive-deps
  )

  // Mismatch between who is being bonified at fin vs declared at inicio.
  const countAlert =
    previstos != null && bonificables !== previstos
      ? bonificables > previstos
        ? {
            variant: "critical" as const,
            title: `Vas a bonificar ${bonificables} participantes, pero en el inicio comunicaste ${previstos}`,
            description:
              "No puedes bonificar más participantes de los comunicados al inicio del grupo. Reduce la lista o comunica primero una modificación del inicio.",
          }
        : {
            variant: "warning" as const,
            title: `Vas a bonificar ${bonificables} de los ${previstos} participantes comunicados al inicio`,
            description:
              "FUNDAE permite finalizar con menos participantes (bajas), pero el número no cuadra con el inicio. Revisa que las exclusiones sean correctas.",
          }
      : null

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="md"
      >
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading
            as="h3"
            variant="heading"
            content="Resultado de participantes"
          />
          <F0Text
            variant="small"
            content={`${aptosVisibles} bonificable${aptosVisibles === 1 ? "" : "s"} de ${bonificables}${
              previstos != null ? ` · ${previstos} comunicados al inicio` : ""
            }`}
          />
        </F0Box>
        {!readOnly && excludedIds.length > 0 && (
          <F0Button
            label={`Restaurar ${excludedIds.length} excluido${excludedIds.length > 1 ? "s" : ""}`}
            variant="outline"
            size="sm"
            onClick={() => setExcludedIds([])}
          />
        )}
      </F0Box>

      {countAlert && (
        <F0Alert
          variant={countAlert.variant}
          title={countAlert.title}
          description={countAlert.description}
        />
      )}

      <OneDataCollection
        source={source}
        emptyStates={{
          "no-data": {
            title: "Sin participantes",
            description: "Sin participantes que mostrar.",
          },
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Participante",
                  render: (r: ParticipantRow) => ({
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
                  render: (r: ParticipantRow) => r.nif,
                },
                {
                  label: "Teléfono",
                  render: (r: ParticipantRow) => r.telefono,
                },
                {
                  label: "Categoría profesional",
                  render: (r: ParticipantRow) => r.categoria,
                },
                {
                  label: "Nivel educativo",
                  render: (r: ParticipantRow) => r.nivel,
                },
                {
                  label: "Horas asistidas",
                  render: (r: ParticipantRow) =>
                    `${r.horasAsistidas} / ${r.horasTotales}`,
                },
                {
                  label: "Resultado",
                  render: (r: ParticipantRow) => (r.apto ? "Apto" : "No apto"),
                },
                {
                  label: "Diploma",
                  render: (r: ParticipantRow) => (r.diploma ? "Sí" : "No"),
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}
