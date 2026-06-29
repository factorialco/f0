import { F0Alert, F0Box, F0Button, F0Heading, F0TagStatus, F0Text } from "@factorialco/f0-react"
import { ResourceHeader } from "@factorialco/f0-react/dist/experimental"
import {
  ArrowLeft,
  CheckCircleLine,
  ChevronRight,
  Download,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { Training, TrainingClass } from "@/fixtures"

import {
  buildInitialAccionFormativa,
  type AccionFormativaState,
} from "./AccionFormativaCard"
import { AccionFormativaForm, FinForm, InicioForm } from "./FundaeDForms"
import { FundaeParticipantsTable } from "./ParticipantsTable"
import {
  defaultFin,
  defaultInicio,
  isFinValid,
  isInicioValid,
} from "./FundaePanel"
import {
  computeFinDeadline,
  computeInicioDeadline,
  parseSpanishDate,
  type DeadlineInfo,
} from "./deadlines"
import type { FinGrupoData, InicioGrupoData } from "./fundaeTypes"

// ─────────────────────────────────────────────────────────────────────────
// Variante D — FUNDAE como PÁGINA propia, al estilo del nuevo UI de policies
// (Talent Plan): ResourceHeader + dos paneles (NavRail de pasos | contenido).
//
// Misma base/datos/lógica que A/B/C (reutiliza AccionFormativaCard,
// InicioSection, FinSection, ParticipantsTable, defaultInicio/Fin,
// isInicioValid/isFinValid y los deadlines). Lo único que cambia es la IA:
//
//   A/C: eliges UN grupo  → ves sus 3 pasos (alta · inicio · fin).
//   D:   eliges UN paso   → ves TODOS los grupos del curso como cards.
//
//   · Paso 1 (Acción formativa) → a nivel de curso, una sola vez.
//   · Paso 2/3 → lista de grupos como cards expandibles; cada uno con su
//     "Generar XML" + "Marcar como comunicado a FUNDAE" por separado.
// ─────────────────────────────────────────────────────────────────────────

type StepId = "alta" | "inicio" | "fin"
type StatusVariant = "neutral" | "info" | "positive" | "warning" | "critical"
type Comunicado = { inicioAt?: string; finAt?: string }
type Tag = { text: string; variant: StatusVariant }

// ── Tag por grupo (mismo criterio y copy que FundaePanel: "comunicado") ────

function groupTagFor(comunicado: boolean, fuera: boolean): Tag {
  if (comunicado)
    return fuera
      ? { text: "Comunicado · fuera de plazo", variant: "critical" }
      : { text: "Comunicado a FUNDAE", variant: "positive" }
  // El ESTADO es solo "Sin comuncar" (igual para todos los no comunicados). La
  // urgencia/plazo NO va aquí — va en el texto de plazo (claro y con color).
  return { text: "Sin comunicar", variant: "neutral" }
}

/**
 * Texto de plazo que LIDERA con cuánto te queda (countdown), no con la fecha
 * absoluta — que era lo que se perdía. La fecha va después, como contexto.
 */
// Solo el countdown, SIN la fecha (para usar junto a la fecha sin repetirla).
function plazoCountdown(dl: DeadlineInfo): string {
  const { daysRemaining } = dl
  if (daysRemaining < 0) {
    const ago = -daysRemaining
    return `Vencido hace ${ago} ${ago === 1 ? "día" : "días"}`
  }
  if (daysRemaining === 0) return "Vence hoy"
  return daysRemaining === 1 ? "Queda 1 día" : `Quedan ${daysRemaining} días`
}

// Countdown + fecha (para la fila de la lista, donde no hay etiqueta de fecha).
function plazoText(dl: DeadlineInfo): string {
  return `${plazoCountdown(dl)} · ${dl.daysRemaining < 0 ? "vencía" : "hasta"} el ${dl.formattedDeadline}`
}

function plazoColorClass(dl: DeadlineInfo): string {
  return dl.level === "expired" || dl.level === "critical"
    ? "text-f1-foreground-critical"
    : dl.level === "warning"
      ? "text-f1-foreground-warning"
      : "text-f1-foreground-secondary"
}

/** Plazo como texto CLARO con color de urgencia (rojo vencido/crítico, etc.). */
function PlazoText({ dl }: { dl: DeadlineInfo }) {
  return <span className={`text-sm ${plazoColorClass(dl)}`}>{plazoText(dl)}</span>
}

/**
 * Fecha "D/M/AAAA" a N días de hoy. Los ejemplos de D usan fechas FUTURAS
 * relativas a hoy → siempre EN PLAZO (no vencidos), se vea cuando se vea.
 */
function fechaEnDias(dias: number): string {
  const d = new Date()
  d.setDate(d.getDate() + dias)
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}

// Offsets (días desde hoy) por grupo de ejemplo. El grupo YA se impartió en el
// pasado (inicio comunicado a tiempo) y ahora toca comunicar el FIN, que sigue
// EN PLAZO (deadline = fin + 2 meses, aún futuro). Nada vencido. A más holgado
// que B, los dos en plazo.
const EJEMPLO_FECHAS = [
  { inicio: -50, fin: -10 }, // Group A — ~50 días para el fin (info)
  { inicio: -60, fin: -20 }, // Group B — ~40 días, también en plazo holgado
]

function outOfPlazo(at: string | undefined, dl: DeadlineInfo | null): boolean {
  if (!at || !dl) return false
  const parsed = parseSpanishDate(at)
  return parsed ? parsed > dl.deadlineDate : false
}

// ── Lista + drill-in (patrón Time tracking → Assignments) ──────────────────
//
// Los grupos se muestran como FILAS (nombre · nº participantes · estado · ›);
// al hacer click se entra al DETALLE del grupo (otro nivel) con "← volver".
// Nada de cajas apiladas.

function GroupRow({
  name,
  count,
  tag,
  plazoDl,
  onClick,
}: {
  name: string
  count: string
  tag: Tag
  plazoDl?: DeadlineInfo | null
  onClick: () => void
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      className="cursor-pointer border-f1-border-secondary transition-colors hover:bg-f1-background-hover"
      style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
    >
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="md"
        paddingY="lg"
        paddingX="sm"
      >
        <F0Box display="flex" alignItems="baseline" gap="sm" minWidth="0">
          <F0Text variant="label" content={name} />
          <span className="text-sm text-f1-foreground-secondary">{count}</span>
        </F0Box>
        <F0Box display="flex" alignItems="center" gap="md" shrink={false}>
          {plazoDl ? <PlazoText dl={plazoDl} /> : null}
          <F0TagStatus text={tag.text} variant={tag.variant} />
          <ChevronRight className="h-4 w-4 shrink-0 text-f1-foreground-secondary" />
        </F0Box>
      </F0Box>
    </div>
  )
}

function GroupDetail({
  name,
  tag,
  onBack,
  actions,
  children,
}: {
  name: string
  tag: Tag
  onBack: () => void
  actions: React.ReactNode
  children: React.ReactNode
}) {
  return (
    // gap 2xl (32px) separa la cabecera del grupo del cuerpo del form, que es lo
    // que estaba "pegado". Dentro de la cabecera: back → título 12px, título →
    // estado 8px.
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Box display="flex" flexDirection="column" gap="lg">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 self-start text-sm text-f1-foreground-secondary transition-colors hover:text-f1-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a los grupos</span>
        </button>
        <F0Box display="flex" alignItems="center" justifyContent="between" gap="xl">
          {/* Tag INLINE a la derecha del título. El plazo NO va aquí: va en su
              propia sección "Plazo FUNDAE" dentro del contenido. */}
          <F0Box display="flex" alignItems="center" gap="sm" minWidth="0">
            <F0Heading variant="heading" as="h2" content={name} />
            <F0TagStatus text={tag.text} variant={tag.variant} />
          </F0Box>
          <F0Box display="flex" gap="sm" shrink={false}>
            {actions}
          </F0Box>
        </F0Box>
      </F0Box>
      {children}
    </F0Box>
  )
}

// ── Grupo · Inicio (fila o detalle) ────────────────────────────────────────

function InicioGroupCard({
  cls,
  accionReady,
  data,
  setData,
  comunicado,
  setComunicado,
  open,
  someoneOpen,
  onOpen,
  onClose,
}: {
  cls: TrainingClass
  accionReady: boolean
  data: InicioGrupoData
  setData: (u: InicioGrupoData | ((p: InicioGrupoData) => InicioGrupoData)) => void
  comunicado: Comunicado
  setComunicado: (c: Comunicado) => void
  open: boolean
  someoneOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const [validate, setValidate] = useState(false)

  const dl = useMemo(() => computeInicioDeadline(data.fechaInicio), [data.fechaInicio])
  const valido = isInicioValid(data)
  const isComunicado = !!comunicado.inicioAt
  const fuera = outOfPlazo(comunicado.inicioAt, dl)
  const tag = groupTagFor(isComunicado, fuera)

  // Generar el XML = comunicar a FUNDAE. La 1ª vez marca el grupo como
  // comunicado; después el botón pasa a "Generar de nuevo" (secundario).
  const generarXml = () => {
    if (!valido) {
      setValidate(true)
      return
    }
    if (!isComunicado) {
      setComunicado({ ...comunicado, inicioAt: new Date().toLocaleDateString("es-ES") })
    }
  }

  // Otro grupo abierto → esta fila se oculta (solo se ve el detalle).
  if (someoneOpen && !open) return null

  if (!open) {
    return (
      <GroupRow
        name={cls.name}
        count={`${data.numeroParticipantes ?? 0} participantes`}
        tag={tag}
        plazoDl={!isComunicado && accionReady ? dl : null}
        onClick={onOpen}
      />
    )
  }

  return (
    <GroupDetail
      name={cls.name}
      tag={tag}
      onBack={onClose}
      actions={
        <F0Button
          label={isComunicado ? "Generar de nuevo" : "Generar XML"}
          icon={Download}
          variant={isComunicado ? "outline" : "default"}
          disabled={!accionReady}
          onClick={generarXml}
        />
      }
    >
      <InicioForm
        data={data}
        setData={setData}
        showErrors={validate}
        plazoHint={!isComunicado && accionReady && dl ? plazoText(dl) : undefined}
      />
    </GroupDetail>
  )
}

// ── Card de grupo · Finalización ───────────────────────────────────────────

function FinGroupCard({
  training,
  cls,
  inicioComunicado,
  inicioData,
  data,
  setData,
  comunicado,
  setComunicado,
  open,
  someoneOpen,
  onOpen,
  onClose,
}: {
  training: Training
  cls: TrainingClass
  inicioComunicado: boolean
  inicioData: InicioGrupoData
  data: FinGrupoData
  setData: (u: FinGrupoData | ((p: FinGrupoData) => FinGrupoData)) => void
  comunicado: Comunicado
  setComunicado: (c: Comunicado) => void
  open: boolean
  someoneOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const [validate, setValidate] = useState(false)

  const dl = useMemo(() => computeFinDeadline(inicioData.fechaFin), [inicioData.fechaFin])
  const valido = isFinValid(data)
  const isComunicado = !!comunicado.finAt
  const fuera = outOfPlazo(comunicado.finAt, dl)
  const tag = groupTagFor(isComunicado, fuera)

  const generarXml = () => {
    if (!valido) {
      setValidate(true)
      return
    }
    if (!isComunicado) {
      setComunicado({ ...comunicado, finAt: new Date().toLocaleDateString("es-ES") })
    }
  }

  if (someoneOpen && !open) return null

  if (!open) {
    return (
      <GroupRow
        name={cls.name}
        count={`${inicioData.numeroParticipantes ?? 0} participantes`}
        tag={tag}
        plazoDl={!isComunicado && inicioComunicado ? dl : null}
        onClick={onOpen}
      />
    )
  }

  return (
    <GroupDetail
      name={cls.name}
      tag={tag}
      onBack={onClose}
      actions={
        <F0Button
          label={isComunicado ? "Generar de nuevo" : "Generar XML"}
          icon={Download}
          variant={isComunicado ? "outline" : "default"}
          disabled={!inicioComunicado}
          onClick={generarXml}
        />
      }
    >
      <F0Box display="flex" flexDirection="column" gap="2xl">
        <FinForm
          data={data}
          setData={setData}
          showErrors={validate}
          fechaFinPrevista={inicioData.fechaFin}
          plazoHint={!isComunicado && dl ? plazoText(dl) : undefined}
          numHoras={inicioData.horario.horaTotales}
          numParticipantes={inicioData.numeroParticipantes}
          modalidad={inicioData.modalidad}
        />
        {/* Tabla densa: 1ª columna fija (frozenColumns) + scroll horizontal para
            las columnas que no caben — patrón f0 para tablas anchas, sin romper
            el layout de dos paneles. */}
        <FundaeParticipantsTable
          trainingId={training.id}
          trainingClass={cls}
          numParticipantesPrevistos={inicioData.numeroParticipantes}
        />
      </F0Box>
    </GroupDetail>
  )
}

// ── NavRail (patrón policies: lista vertical, barra de acento, gating) ──────

function StepNav({
  steps,
  active,
  onSelect,
}: {
  steps: { id: StepId; label: string; unlocked: boolean; done: boolean }[]
  active: StepId
  onSelect: (id: StepId) => void
}) {
  // Mismo patrón que el NavRail de policies: filas de texto, hover, el activo
  // con fondo "secondary". Sin barra de acento, tags ni números. Un paso
  // bloqueado simplemente no responde al click (sin cambio visual).
  return (
    <F0Box display="flex" flexDirection="column" gap="none">
      {steps.map((step) => {
        const selected = active === step.id
        return (
          <div
            key={step.id}
            role="button"
            tabIndex={step.unlocked ? 0 : -1}
            aria-current={selected}
            aria-disabled={!step.unlocked}
            className={`cursor-pointer rounded-md hover:bg-f1-background-hover ${
              step.unlocked ? "" : "opacity-30"
            }`}
            onClick={() => step.unlocked && onSelect(step.id)}
            onKeyDown={(e) => {
              if (!step.unlocked) return
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onSelect(step.id)
              }
            }}
          >
            <F0Box
              display="flex"
              alignItems="center"
              gap="sm"
              paddingX="sm"
              paddingY="sm"
              borderRadius="md"
              background={selected ? "secondary" : "transparent"}
            >
              {/* Completado → anillo con check dentro; pendiente → anillo vacío.
                  (f0 Circle es relleno, por eso el vacío es un SVG circle-line.) */}
              {step.done ? (
                <CheckCircleLine className="h-[18px] w-[18px] shrink-0 text-f1-foreground-positive" />
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`shrink-0 ${selected ? "text-f1-foreground" : "text-f1-foreground-secondary"}`}
                  aria-hidden="true"
                >
                  <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
              <F0Text content={step.label} variant={selected ? "label" : "body"} />
            </F0Box>
          </div>
        )
      })}
    </F0Box>
  )
}

// ── Cabecera de paso (dentro del panel de contenido) ───────────────────────

// Cabecera de sección = patrón `SectionHeader` de policies (Figma Time tracking
// → Assignments, node 9664:127771): título semibold + descripción SECUNDARIA a
// 4px, sin py propio (el aire lo da el gap del cuerpo del paso).
function StepHeader({ title, help }: { title: string; help: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      <F0Heading variant="heading" as="h2" content={title} />
      <F0Text variant="description" content={help} />
    </F0Box>
  )
}

// ── Página D ────────────────────────────────────────────────────────────────

export function FundaeFlowD({ training }: { training: Training }) {
  const classes = training.classes

  // Volver al curso — flecha a la izquierda del título (patrón policies
  // OnboardingConfigView), no en la fila del breadcrumb.
  const [searchParams, setSearchParams] = useSearchParams()
  const goBack = () => {
    const next = new URLSearchParams(searchParams)
    next.set("dtab", "overview")
    next.delete("fv")
    setSearchParams(next)
  }

  const [af, setAf] = useState<AccionFormativaState>(() =>
    buildInitialAccionFormativa(training)
  )
  const accionReady = af.enFundae

  const [inicioBy, setInicioBy] = useState<Record<string, InicioGrupoData>>(() =>
    Object.fromEntries(
      classes.map((c, i) => {
        const f = EJEMPLO_FECHAS[i] ?? EJEMPLO_FECHAS[EJEMPLO_FECHAS.length - 1]!
        return [
          c.id,
          {
            ...defaultInicio(training, c),
            fechaInicio: fechaEnDias(f.inicio),
            fechaFin: fechaEnDias(f.fin),
          },
        ]
      })
    )
  )
  const [finBy, setFinBy] = useState<Record<string, FinGrupoData>>(() =>
    Object.fromEntries(
      classes.map((c, i) => {
        const f = EJEMPLO_FECHAS[i] ?? EJEMPLO_FECHAS[EJEMPLO_FECHAS.length - 1]!
        return [c.id, { ...defaultFin(c), fechaFinReal: fechaEnDias(f.fin) }]
      })
    )
  )
  // Inicio ya comunicado a tiempo (el grupo se impartió). Usa las MISMAS fechas
  // de ejemplo que arriba → comunicado en la fecha límite del inicio (en plazo).
  const [comBy, setComBy] = useState<Record<string, Comunicado>>(() =>
    Object.fromEntries(
      classes.map((c, i) => {
        const f = EJEMPLO_FECHAS[i] ?? EJEMPLO_FECHAS[EJEMPLO_FECHAS.length - 1]!
        const dl = computeInicioDeadline(fechaEnDias(f.inicio))
        const inicioAt = dl ? dl.deadlineDate.toLocaleDateString("es-ES") : undefined
        return [c.id, inicioAt ? { inicioAt } : {}]
      })
    )
  )
  const [active, setActiveState] = useState<StepId>(accionReady ? "inicio" : "alta")
  const [showErrorsAlta, setShowErrorsAlta] = useState(false)
  // Acordeón (patrón ApprovalFlowsList de policies): un solo grupo abierto a la
  // vez. Se resetea al cambiar de paso.
  const [openGroupId, setOpenGroupId] = useState<string | null>(null)
  const setActive = (id: StepId) => {
    setActiveState(id)
    setOpenGroupId(null)
  }

  const altaComplete = !!(
    af.nombre &&
    af.horas &&
    af.objetivos &&
    af.contenidos
  )
  const exportAlta = () => {
    if (!altaComplete) {
      setShowErrorsAlta(true)
      return
    }
    setShowErrorsAlta(false)
    // En producción: descargar el XML de alta de la acción formativa.
  }

  // Setters por clase (soportan forma updater para InicioSection/FinSection).
  const makeInicioSetter =
    (id: string) =>
    (u: InicioGrupoData | ((p: InicioGrupoData) => InicioGrupoData)) =>
      setInicioBy((prev) => ({
        ...prev,
        [id]: typeof u === "function" ? (u as (p: InicioGrupoData) => InicioGrupoData)(prev[id]) : u,
      }))
  const makeFinSetter =
    (id: string) =>
    (u: FinGrupoData | ((p: FinGrupoData) => FinGrupoData)) =>
      setFinBy((prev) => ({
        ...prev,
        [id]: typeof u === "function" ? (u as (p: FinGrupoData) => FinGrupoData)(prev[id]) : u,
      }))

  const total = classes.length
  const inicioDone = classes.filter((c) => comBy[c.id]?.inicioAt).length
  const finDone = classes.filter((c) => comBy[c.id]?.finAt).length

  const steps = [
    { id: "alta" as const, label: "Acción formativa", unlocked: true, done: accionReady },
    {
      id: "inicio" as const,
      label: "Inicio de grupos",
      unlocked: accionReady,
      done: total > 0 && inicioDone === total,
    },
    {
      id: "fin" as const,
      label: "Finalización",
      unlocked: accionReady,
      done: total > 0 && finDone === total,
    },
  ]

  // ── Estado global (header) ──
  const overallStatus: { label: string; text: string; variant: "info" | "positive" | "warning" } =
    !accionReady
      ? { label: "Estado", text: "Sin dar de alta", variant: "warning" }
      : total > 0 && finDone === total
        ? { label: "Estado", text: "Finalizado", variant: "positive" }
        : { label: "Estado", text: "En curso", variant: "info" }

  // ── Contenido por paso ──
  let body: React.ReactNode
  if (active === "alta") {
    body = (
      <F0Box display="flex" flexDirection="column" gap="2xl">
        <StepHeader
          title="Acción formativa"
          help="Datos del curso que se dan de alta una sola vez en FUNDAE. Son comunes a todos los grupos."
        />
        <AccionFormativaForm
          state={af}
          setState={setAf}
          showErrors={showErrorsAlta}
        />
        <F0Box
          display="flex"
          justifyContent="end"
          borderTop="default"
          paddingTop="lg"
        >
          <F0Button
            label="Generar XML de alta"
            icon={Download}
            variant="default"
            onClick={exportAlta}
          />
        </F0Box>
      </F0Box>
    )
  } else if (active === "inicio") {
    body = (
      <F0Box display="flex" flexDirection="column" gap="lg">
        {openGroupId === null && (
          <StepHeader
            title="Inicio de grupos"
            help="Comunica el inicio de cada grupo antes de su plazo. Abre un grupo para ver y comunicar sus datos; cada uno genera su propio XML."
          />
        )}
        <F0Box display="flex" flexDirection="column" gap="none">
          {classes.map((c) => (
            <InicioGroupCard
              key={c.id}
              cls={c}
              accionReady={accionReady}
              data={inicioBy[c.id]}
              setData={makeInicioSetter(c.id)}
              comunicado={comBy[c.id] ?? {}}
              setComunicado={(co) => setComBy((p) => ({ ...p, [c.id]: co }))}
              open={openGroupId === c.id}
              someoneOpen={openGroupId !== null}
              onOpen={() => setOpenGroupId(c.id)}
              onClose={() => setOpenGroupId(null)}
            />
          ))}
        </F0Box>
      </F0Box>
    )
  } else {
    body = (
      <F0Box display="flex" flexDirection="column" gap="lg">
        {openGroupId === null && (
          <StepHeader
            title="Finalización"
            help="Al cerrar cada grupo: fecha de fin real, costes y participantes. Abre un grupo para completar su finalización; cada uno genera su XML."
          />
        )}
        <F0Box display="flex" flexDirection="column" gap="none">
          {classes.map((c) => (
            <FinGroupCard
              key={c.id}
              training={training}
              cls={c}
              inicioComunicado={!!comBy[c.id]?.inicioAt}
              inicioData={inicioBy[c.id]}
              data={finBy[c.id]}
              setData={makeFinSetter(c.id)}
              comunicado={comBy[c.id] ?? {}}
              setComunicado={(co) => setComBy((p) => ({ ...p, [c.id]: co }))}
              open={openGroupId === c.id}
              someoneOpen={openGroupId !== null}
              onOpen={() => setOpenGroupId(c.id)}
              onClose={() => setOpenGroupId(null)}
            />
          ))}
        </F0Box>
      </F0Box>
    )
  }

  if (!training.fundaeSubsidized) {
    return (
      <F0Box padding="lg">
        <F0Alert
          variant="warning"
          title="Formación no bonificable por FUNDAE"
          description="Activa la opción 'Bonificado por FUNDAE' en los ajustes del curso para gestionar los grupos."
        />
      </F0Box>
    )
  }

  const content =
    classes.length === 0 ? (
      <F0Box display="flex" flexDirection="column" gap="2xl">
        <AccionFormativaForm
          state={af}
          setState={setAf}
          showErrors={showErrorsAlta}
        />
        <F0Alert
          variant="info"
          title="Sin grupos formativos"
          description="Crea un grupo para comunicar inicio y fin a FUNDAE."
        />
      </F0Box>
    ) : (
      body
    )

  // Layout fiel al de policies (ExpenseConfigView): ResourceHeader, divisor
  // horizontal a sangre, y dos paneles (NavRail fijo | contenido capado y
  // centrado) separados por un divisor vertical a altura completa.
  return (
    <F0Box display="flex" flexDirection="column" gap="none">
      <ResourceHeader
        title={training.name}
        status={overallStatus}
        secondaryActions={[
          {
            label: "Volver al curso",
            icon: ArrowLeft,
            onClick: goBack,
            tooltip: "Volver al curso",
            hideLabel: true as const,
          },
        ]}
        metadata={[
          {
            label: "Código acción",
            value: { type: "text", content: af.codigoFundae ?? "Pendiente" },
          },
          {
            label: "Grupos",
            value: { type: "text", content: `${total}` },
          },
          {
            label: "Inicios comunicados",
            value: { type: "text", content: `${inicioDone}/${total}` },
          },
          {
            label: "Fines comunicados",
            value: { type: "text", content: `${finDone}/${total}` },
          },
        ]}
      />

      {/* Dos paneles (patrón policies/Talent Plan): NavRail | contenido.
          Maquetado con utilidades Tailwind (f0-design), NO con style inline:
          `-mx-6` cancela el px-6 (24px) de PageContent para ir a sangre, `mt-4`
          el aire bajo el header, `min-h-[…]` rellena hacia abajo. Los divisores
          son BORDES de panel con `border-f1-border`; el GROSOR va inline porque
          en esta build las clases `border-t/-r` solo aplican color, no ancho
          (gotcha documentado). */}
      {/* Dos paneles (NavRail | contenido) DENTRO de StandardLayout, que ya
          aporta el padding/centrado/scroll (skill f0-prototype): no a-sangre, no
          padding propio, no min-height inventado. Solo el grosor de los
          divisores va inline (las clases border-* solo aplican color en esta
          build). */}
      <div
        className="mt-4 flex items-stretch border-f1-border"
        style={{
          borderTopWidth: 1,
          borderTopStyle: "solid",
          // A-sangre: cancela el px-6 (24) de StandardLayout para que los
          // divisores (borde superior y el del NavRail) lleguen hasta los bordes
          // del contenido, no cortados a 24px. (Inline porque el Tailwind
          // precompilado de f0 no genera `-mx`.)
          marginLeft: -24,
          marginRight: -24,
          // Altura mínima para que el divisor vertical del NavRail llegue hasta
          // abajo y la página tenga estructura (no una cajita corta flotando).
          minHeight: "calc(100vh - 260px)",
        }}
      >
        <div
          className="w-[250px] shrink-0 border-f1-border"
          style={{ borderRightWidth: 1, borderRightStyle: "solid" }}
        >
          <div className="p-3">
            <StepNav steps={steps} active={active} onSelect={setActive} />
          </div>
        </div>

        {/* Contenido = columna de ~960 CENTRADA (como en Vercel): ni full-width
            ni estrecha a la izquierda. El form y la tabla LLENAN esta columna
            (mismo borde izq. y der.), por eso no se mezclan. Los divisores van a
            sangre (el two-panel), pero el contenido queda contenido y centrado. */}
        <div className="min-w-0 flex-1">
          <div
            className="mx-auto w-full px-6 pt-6"
            style={{ maxWidth: 960 }}
          >
            {content}
          </div>
        </div>
      </div>
    </F0Box>
  )
}
