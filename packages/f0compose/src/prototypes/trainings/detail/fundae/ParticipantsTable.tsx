import {
  F0Alert,
  F0Box,
  F0Button,
  F0Dialog,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  OneDataCollection,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Delete, Link as LinkIcon } from "@factorialco/f0-react/icons/app"
import { useMemo, useRef, useState } from "react"

import {
  participantsForTraining,
  type TrainingClass,
  type TrainingParticipant,
} from "@/fixtures"

type Props = {
  trainingId: string
  trainingClass: TrainingClass
  numParticipantesPrevistos: number | null
  readOnly?: boolean
}

// Campos del <participante> del XML de FINALIZACIÓN de FUNDAE (XSD 2026
// FinalizacionGrupo_Bonificada). Obligatorios: nif, tipo doc, email, teléfono,
// categoría profesional, nivel de estudios y diploma acreditativo.
type ParticipantRow = {
  id: string
  fullName: string
  avatar: string
  nif: string
  tipoDoc: string
  email: string
  telefono: string
  // Valor del PERFIL del empleado (catálogo Factorial) — origen de la vinculación.
  factorialCategoria: string
  factorialNivel: string
  // Valor FUNDAE resuelto vía vinculación (lo que va al XML, como código).
  categoria: string
  nivel: string
  diploma: string
}

// Catálogos oficiales FUNDAE (XSD 2026). Cada valor lleva su código detrás.
const DOC_TYPES = ["NIF", "NIE", "Pasaporte"] // FUNDAE: 10 / 20 / 60
const CATEGORIAS_FUNDAE = [
  "Directivo", // 1
  "Mando intermedio", // 2
  "Técnico", // 3
  "Trabajador cualificado", // 4
  "Trabajador con baja cualificación", // 5
]
const NIVELES_FUNDAE = [
  "Menos que primaria", // 1
  "Educación primaria", // 2
  "Primera etapa de educación secundaria", // 3
  "Segunda etapa de educación secundaria", // 4
  "Educación postsecundaria no superior", // 5
  "Técnico superior / FP grado superior", // 6
  "E. universitarios 1º ciclo", // 7
  "E. universitarios 2º ciclo", // 8
  "E. universitarios 3º ciclo", // 9
  "Otras titulaciones", // 10
]

// Catálogo de Factorial (lo que tiene el empleado en su perfil). Difiere en
// nomenclatura del de FUNDAE → por eso hay que VINCULARLO ("Vincular datos").
const FACTORIAL_CATEGORIAS = [
  "Directivo",
  "Mando intermedio",
  "Técnico",
  "Trabajador cualificado",
  "Trabajador con baja cualificación",
]
const FACTORIAL_NIVELES = [
  "Educación primaria",
  "Estudios universitarios primer ciclo",
  "Otras titulaciones",
  "Segunda etapa de secundaria",
  "Educación postsecundaria no superior",
  "Estudios universitarios segundo ciclo",
  "Menos que primaria",
]

// Categoría ya viene mapeada 1:1 (misma nomenclatura); nivel arranca SIN vincular
// (Factorial y FUNDAE usan etiquetas distintas) → "Vincular datos" tiene sentido.
const DEFAULT_CATEGORIA_MAP: Record<string, string> = Object.fromEntries(
  FACTORIAL_CATEGORIAS.map((c) => [c, c])
)
const DEFAULT_NIVEL_MAP: Record<string, string> = {}

const docOptions = DOC_TYPES.map((d) => ({ value: d, label: d }))
const catOptions = CATEGORIAS_FUNDAE.map((c) => ({ value: c, label: c }))
const nivOptions = NIVELES_FUNDAE.map((n) => ({ value: n, label: n }))
const diplomaOptions = [
  { value: "Sí", label: "Sí" },
  { value: "No", label: "No" },
]

function emailFor(name: string): string {
  const slug = name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ".")
  return `${slug}@empresa.es`
}

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
  const factorialCategoria = FACTORIAL_CATEGORIAS[
    idx % FACTORIAL_CATEGORIAS.length
  ] as string
  const factorialNivel = FACTORIAL_NIVELES[idx % FACTORIAL_NIVELES.length] as string
  return {
    id: p.id,
    fullName: p.employeeName,
    avatar: p.employeeAvatar,
    nif: `${nifNumber}${nifLetter}`,
    tipoDoc: "NIF",
    email: emailFor(p.employeeName),
    telefono: `6${String(11111111 + idx * 1234567).slice(0, 8)}`,
    factorialCategoria,
    factorialNivel,
    categoria: DEFAULT_CATEGORIA_MAP[factorialCategoria] ?? "",
    nivel: DEFAULT_NIVEL_MAP[factorialNivel] ?? "",
    diploma: p.certificateCount > 0 ? "Sí" : "No",
  }
}

// Faltan campos obligatorios FUNDAE de finalización (para el filtro "Faltan datos").
const rowMissing = (r: ParticipantRow) =>
  !r.nif || !r.tipoDoc || !r.email || !r.telefono || !r.categoria || !r.nivel

// Select nativo estilado (para las filas del modal de vinculación). Evita
// F0Select, que entra en bucle al abrirse en este build.
function MapSelect({
  value,
  options,
  onChange,
}: {
  value: string
  options: ReadonlyArray<{ value: string; label: string }>
  onChange: (v: string) => void
}) {
  return (
    <div className="relative inline-flex h-9 w-full items-center rounded border border-solid border-f1-border bg-f1-background transition-colors hover:border-f1-border-hover">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-full w-full cursor-pointer appearance-none bg-transparent pl-3 pr-8 text-sm text-f1-foreground focus:outline-none"
      >
        <option value="">Selecciona…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="pointer-events-none absolute right-2 h-4 w-4 text-f1-foreground-secondary"
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// Tabla EDITABLE del paso fin = el <participante> del XML de finalización. El
// usuario completa NIF, tipo doc, email, teléfono, categoría, nivel y diploma,
// vincula categoría/nivel al catálogo FUNDAE con "Vincular datos", y deja la
// lista como quiere (quitando a quien no va) antes de exportar.
export function FundaeParticipantsTable({
  trainingId,
  trainingClass,
  numParticipantesPrevistos,
  readOnly,
}: Props) {
  const [rowsById, setRowsById] = useState<Record<string, ParticipantRow>>(() =>
    Object.fromEntries(buildRows(trainingId, trainingClass).map((r) => [r.id, r]))
  )
  const [excludedIds, setExcludedIds] = useState<string[]>([])

  const classKeyRef = useRef(trainingClass.id)
  if (classKeyRef.current !== trainingClass.id) {
    classKeyRef.current = trainingClass.id
    setRowsById(
      Object.fromEntries(buildRows(trainingId, trainingClass).map((r) => [r.id, r]))
    )
    setExcludedIds([])
  }

  // Vinculación de catálogos (Factorial → FUNDAE) por campo.
  const [categoriaMap, setCategoriaMap] =
    useState<Record<string, string>>(DEFAULT_CATEGORIA_MAP)
  const [nivelMap, setNivelMap] = useState<Record<string, string>>(DEFAULT_NIVEL_MAP)
  const [vincularOpen, setVincularOpen] = useState(false)
  const [draftCat, setDraftCat] = useState<Record<string, string>>({})
  const [draftNiv, setDraftNiv] = useState<Record<string, string>>({})

  const openVincular = () => {
    setDraftCat(categoriaMap)
    setDraftNiv(nivelMap)
    setVincularOpen(true)
  }
  const saveVincular = () => {
    setCategoriaMap(draftCat)
    setNivelMap(draftNiv)
    setRowsById((prev) => {
      const next = { ...prev }
      Object.values(next).forEach((r) => {
        next[r.id] = {
          ...r,
          categoria: draftCat[r.factorialCategoria] ?? "",
          nivel: draftNiv[r.factorialNivel] ?? "",
        }
      })
      return next
    })
    setVincularOpen(false)
    setRefreshKey((k) => k + 1)
  }
  // Ref para que la acción "Vincular datos" de la barra de la tabla siempre
  // llame a la versión más reciente (el source está memoizado).
  const openVincularRef = useRef(openVincular)
  openVincularRef.current = openVincular

  const stateRef = useRef({ rowsById, excludedIds })
  stateRef.current = { rowsById, excludedIds }
  const [refreshKey, setRefreshKey] = useState(0)

  const allRows = useMemo(() => Object.values(rowsById), [rowsById])
  const visibleRows = allRows.filter((r) => !excludedIds.includes(r.id))
  const bonificables = visibleRows.length
  const previstos = numParticipantesPrevistos

  const updateRow = (id: string, patch: Partial<ParticipantRow>) =>
    setRowsById((prev) => ({ ...prev, [id]: { ...prev[id]!, ...patch } }))

  const excludeKey = [...excludedIds].sort().join(",")

  const source = useDataCollectionSource<ParticipantRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        estado: {
          type: "in",
          label: "Datos",
          options: { options: [{ value: "incompleto", label: "Faltan datos" }] },
        },
      },
      primaryActions: readOnly
        ? undefined
        : () => ({
            label: "Vincular datos",
            icon: LinkIcon,
            onClick: () => openVincularRef.current(),
          }),
      itemActions: readOnly
        ? undefined
        : (item: ParticipantRow) => [
            {
              label: "Quitar de la bonificación",
              icon: Delete,
              critical: true,
              type: "primary" as const,
              hideLabel: true,
              onClick: () => {
                setExcludedIds((prev) =>
                  prev.includes(item.id) ? prev : [...prev, item.id]
                )
                setRefreshKey((k) => k + 1)
              },
            },
          ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, filters, pagination }) => {
          const { rowsById: rb, excludedIds: ex } = stateRef.current
          const term = (search ?? "").toLowerCase().trim()
          const estadoFilter = (filters?.estado ?? []) as string[]
          const filtered = Object.values(rb).filter((r) => {
            if (ex.includes(r.id)) return false
            const matchSearch =
              term === "" ||
              r.fullName.toLowerCase().includes(term) ||
              r.nif.toLowerCase().includes(term)
            const matchFilter =
              estadoFilter.length === 0 ||
              (estadoFilter.includes("incompleto") && rowMissing(r))
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
            records: filtered.slice(
              (currentPage - 1) * perPage,
              currentPage * perPage
            ),
            total,
            perPage,
            currentPage,
            pagesCount: Math.max(1, Math.ceil(total / perPage)),
          }
        },
      },
    },
    [trainingId, trainingClass.id, excludeKey, refreshKey] // eslint-disable-line react-hooks/exhaustive-deps
  )

  // Mismatch entre quién se finaliza vs lo declarado al inicio.
  const countAlert =
    previstos != null && bonificables !== previstos
      ? bonificables > previstos
        ? {
            variant: "critical" as const,
            title: `Vas a finalizar con ${bonificables} participantes, pero en el inicio comunicaste ${previstos}`,
            description:
              "No puedes finalizar con más participantes de los comunicados al inicio. Quita a alguien de la lista o exporta primero una modificación del inicio.",
          }
        : {
            variant: "warning" as const,
            title: `Vas a finalizar con ${bonificables} de los ${previstos} participantes comunicados al inicio`,
            description:
              "FUNDAE permite finalizar con menos participantes (bajas), pero el número no cuadra con el inicio. Revisa que las exclusiones sean correctas.",
          }
      : null

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Box display="flex" alignItems="center" justifyContent="between" gap="md">
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading as="h3" variant="heading" content="Participantes" />
          <F0Text
            variant="small"
            content={`${bonificables} en el XML${
              previstos != null ? ` · ${previstos} comunicados al inicio` : ""
            }`}
          />
        </F0Box>
        {!readOnly && excludedIds.length > 0 && (
          <F0Button
            label={`Restaurar ${excludedIds.length}`}
            variant="outline"
            size="sm"
            onClick={() => {
              setExcludedIds([])
              setRefreshKey((k) => k + 1)
            }}
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
            type: "editableTable",
            options: {
              // Patrón f0 para tablas anchas (TableVisualizationOptions.
              // frozenColumns): la tabla mantiene sus anchos y hace scroll
              // horizontal, pero la 1ª columna (el participante) queda FIJADA
              // para no perder de vista de quién es cada fila al desplazar.
              frozenColumns: 1,
              onCellChange: async (updated: ParticipantRow) => {
                updateRow(updated.id, updated)
                const errors: Record<string, string> = {}
                if (!updated.nif) errors.nif = "Obligatorio"
                if (!updated.email) errors.email = "Obligatorio"
                if (!updated.telefono) errors.telefono = "Obligatorio"
                if (!updated.categoria) errors.categoria = "Obligatorio"
                if (!updated.nivel) errors.nivel = "Obligatorio"
                return Object.keys(errors).length ? errors : undefined
              },
              columns: [
                {
                  id: "fullName",
                  label: "Participante",
                  width: 200,
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
                  id: "tipoDoc",
                  label: "Tipo doc.",
                  width: 120,
                  editType: readOnly ? undefined : () => "select",
                  selectConfig: { options: docOptions },
                  render: (r: ParticipantRow) => r.tipoDoc || "—",
                },
                {
                  id: "nif",
                  label: "NIF / NIE",
                  width: 130,
                  editType: readOnly ? undefined : () => "text",
                  render: (r: ParticipantRow) => r.nif || "—",
                },
                {
                  id: "email",
                  label: "Email",
                  width: 220,
                  editType: readOnly ? undefined : () => "text",
                  render: (r: ParticipantRow) => r.email || "—",
                },
                {
                  id: "telefono",
                  label: "Teléfono",
                  width: 130,
                  editType: readOnly ? undefined : () => "text",
                  render: (r: ParticipantRow) => r.telefono || "—",
                },
                {
                  id: "categoria",
                  label: "Categoría profesional",
                  width: 200,
                  editType: readOnly ? undefined : () => "select",
                  selectConfig: { placeholder: "Selecciona…", options: catOptions },
                  render: (r: ParticipantRow) => r.categoria || "—",
                },
                {
                  id: "nivel",
                  label: "Nivel de estudios",
                  width: 220,
                  editType: readOnly ? undefined : () => "select",
                  selectConfig: { placeholder: "Selecciona…", options: nivOptions },
                  render: (r: ParticipantRow) => r.nivel || "—",
                },
                {
                  id: "diploma",
                  label: "Diploma",
                  width: 110,
                  editType: readOnly ? undefined : () => "select",
                  selectConfig: { options: diplomaOptions },
                  render: (r: ParticipantRow) => r.diploma || "—",
                },
              ],
            },
          },
        ]}
      />

      {vincularOpen && (
        <F0Dialog
          isOpen={vincularOpen}
          onClose={() => setVincularOpen(false)}
          width="lg"
          title="Vincular datos"
          description="Para exportar correctamente, los campos de Factorial deben coincidir con los de FUNDAE. Vincula cada valor con su equivalente."
          primaryAction={{ label: "Guardar", onClick: saveVincular }}
          secondaryAction={{ label: "Cancelar", onClick: () => setVincularOpen(false) }}
        >
          <div style={{ maxHeight: "55vh", overflowY: "auto", paddingRight: 4 }}>
            <F0Box display="flex" flexDirection="column" gap="2xl">
              <MappingSection
                title="Nivel de estudios"
                left={FACTORIAL_NIVELES}
                options={nivOptions}
                map={draftNiv}
                onChange={(fv, v) => setDraftNiv((m) => ({ ...m, [fv]: v }))}
              />
              <MappingSection
                title="Categoría profesional"
                left={FACTORIAL_CATEGORIAS}
                options={catOptions}
                map={draftCat}
                onChange={(fv, v) => setDraftCat((m) => ({ ...m, [fv]: v }))}
              />
            </F0Box>
          </div>
        </F0Dialog>
      )}
    </F0Box>
  )
}

function MappingSection({
  title,
  left,
  options,
  map,
  onChange,
}: {
  title: string
  left: ReadonlyArray<string>
  options: ReadonlyArray<{ value: string; label: string }>
  map: Record<string, string>
  onChange: (factorialValue: string, fundaeValue: string) => void
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Heading as="h3" variant="heading" content={title} />
      <F0Box display="grid" columns="2" gap="lg">
        <F0Text variant="label" content="Campos de Factorial" />
        <F0Text variant="label" content="Campos de FUNDAE" />
      </F0Box>
      {left.map((fv) => (
        <F0Box key={fv} display="grid" columns="2" gap="lg" alignItems="center">
          <F0Text variant="body" content={fv} />
          <MapSelect
            value={map[fv] ?? ""}
            options={options}
            onChange={(v) => onChange(fv, v)}
          />
        </F0Box>
      ))}
    </F0Box>
  )
}
