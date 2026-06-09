import {
  F0Alert,
  F0Box,
  F0Button,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import { Fragment, useMemo, useState } from "react"

import { participantsForTraining, type Training } from "@/fixtures"

import {
  AccionFormativaCard,
  buildInitialAccionFormativa,
  type AccionFormativaState,
} from "./AccionFormativaCard"
import {
  computeInicioDeadline,
  formatSpanishDate,
  parseSpanishDate,
  type DeadlineInfo,
} from "./deadlines"
import { defaultFin, defaultInicio } from "./FundaePanel"
import { FinSection } from "./FinSection"
import { FundaeParticipantsTable } from "./ParticipantsTable"
import { InicioSection } from "./InicioSection"
import {
  MODALIDAD_OPTIONS,
  perfilLabel,
  type FinGrupoData,
  type InicioGrupoData,
} from "./fundaeTypes"

type Props = { training: Training }
type Phase = "alta" | "inicio" | "fin"
type Tone = "neutral" | "info" | "positive" | "warning" | "critical"
type Tag = { text: string; tone: Tone }
type ActionDef = { label: string; onClick: () => void; disabled?: boolean }

const MODULO_POR_MODALIDAD: Record<string, number> = { presencial: 13, teleformacion: 7.5, mixta: 11 }
const moduloHora = (mod: string) => MODULO_POR_MODALIDAD[mod] ?? 13

const eur = (n: number) =>
  n.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    useGrouping: true,
  })

function deadlineTone(d: DeadlineInfo | null): Tone {
  if (!d) return "neutral"
  if (d.level === "expired" || d.level === "critical") return "critical"
  if (d.level === "warning") return "warning"
  return "info"
}

// Plazo de FIN: hasta el boletín de diciembre del año del fin (regla FUNDAE).
function finDeadlineDic(fechaFinReal: string): DeadlineInfo | null {
  const d = parseSpanishDate(fechaFinReal)
  if (!d) return null
  const deadlineDate = new Date(d.getFullYear(), 11, 31)
  const today = new Date()
  const day = 86400000
  const t0 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  const t1 = Date.UTC(deadlineDate.getFullYear(), deadlineDate.getMonth(), deadlineDate.getDate())
  const daysRemaining = Math.floor((t1 - t0) / day)
  const formattedDeadline = formatSpanishDate(deadlineDate)
  const base = { deadlineDate, daysRemaining, formattedDeadline }
  if (daysRemaining < 0)
    return { ...base, level: "expired", shortMessage: "Vencido", message: `Plazo vencido el ${formattedDeadline}: FUNDAE puede no bonificar este grupo.` }
  if (daysRemaining <= 30)
    return { ...base, level: "warning", shortMessage: `${daysRemaining}d`, message: `Quedan ${daysRemaining} días — comunica antes del ${formattedDeadline}.` }
  return { ...base, level: "info", shortMessage: `${daysRemaining}d`, message: `Plazo hasta el ${formattedDeadline}.` }
}

// ─────────────────────────────────────────────────────────────────────────
// Sistema visual único — un solo patrón para estado, secciones y campos.
// ─────────────────────────────────────────────────────────────────────────

const TONE_CLASS: Record<Tone, string> = {
  neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
  info: "bg-f1-background-info text-f1-foreground-info",
  positive: "bg-f1-background-positive text-f1-foreground-positive",
  warning: "bg-f1-background-warning text-f1-foreground-warning",
  critical: "bg-f1-background-critical text-f1-foreground-critical",
}

// La ÚNICA forma de mostrar estado en toda la pantalla.
function StatusPill({ text, tone }: { text: string; tone: Tone }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ${TONE_CLASS[tone]}`}>
      {text}
    </span>
  )
}

// Sección consistente: título h2 + contenido, con ritmo fijo.
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <F0Heading as="h2" variant="heading" content={title} />
      {children}
    </section>
  )
}

// Rejilla label/valor con ritmo fijo — el único patrón de "ficha".
function Fields({
  items,
  cols = 3,
}: {
  items: Array<{ label: string; value: string }>
  cols?: 2 | 3
}) {
  return (
    <div className={`grid ${cols === 2 ? "grid-cols-2" : "grid-cols-3"} gap-x-10 gap-y-6`}>
      {items.map((it) => (
        <div key={it.label} className="flex flex-col gap-1">
          <F0Text variant="label" content={it.label} />
          <F0Text variant="body" content={it.value} />
        </div>
      ))}
    </div>
  )
}

// Stepper horizontal ligero (Zoho Data Migration, visto en Mobbin): puntos
// numerados + conectores, sin cajas pesadas; el activo va resaltado.
function Stepper({
  steps,
  active,
  onSelect,
}: {
  steps: Array<{ key: Phase; n: number; label: string; tag: Tag }>
  active: Phase
  onSelect: (p: Phase) => void
}) {
  return (
    <div className="flex items-center">
      {steps.map((s, i) => {
        const selected = s.key === active
        const done = s.tag.tone === "positive"
        return (
          <Fragment key={s.key}>
            <button
              type="button"
              aria-current={selected}
              onClick={() => onSelect(s.key)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                selected ? "bg-f1-background-secondary" : "hover:bg-f1-background-hover"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
                  done
                    ? "bg-f1-background-positive text-f1-foreground-positive"
                    : selected
                      ? "bg-f1-background-selected text-f1-foreground"
                      : "bg-f1-background-secondary text-f1-foreground-secondary"
                }`}
              >
                {done ? "✓" : s.n}
              </span>
              <span className="flex flex-col items-start gap-1">
                <F0Text variant={selected ? "label" : "body"} content={s.label} />
                <StatusPill text={s.tag.text} tone={s.tag.tone} />
              </span>
            </button>
            {i < steps.length - 1 && (
              <div className="mx-3 flex-1 border-t border-f1-border" aria-hidden />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

type Verdict = { level: "ok" | "warn" | "block"; text: string; advice?: string }
const VERDICT_ORDER: Record<Verdict["level"], number> = { block: 0, warn: 1, ok: 2 }

function VerdictList({ verdicts }: { verdicts: Verdict[] }) {
  const sorted = [...verdicts].sort((a, b) => VERDICT_ORDER[a.level] - VERDICT_ORDER[b.level])
  return (
    <div className="flex flex-col gap-2">
      {sorted.map((v, i) =>
        v.level === "ok" ? (
          <div key={i} className="flex items-center gap-2">
            <StatusPill text="OK" tone="positive" />
            <F0Text variant="body" content={v.text} />
          </div>
        ) : (
          <F0Alert key={i} variant={v.level === "block" ? "critical" : "warning"} title={v.text} description={v.advice ?? ""} />
        )
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────

function Manager({
  training,
  accionFormativa,
  setAccionFormativa,
}: {
  training: Training
  accionFormativa: AccionFormativaState
  setAccionFormativa: (s: AccionFormativaState) => void
}) {
  const classes = training.classes
  const [selectedClassId, setSelectedClassId] = useState(classes[0]?.id ?? "")
  const selectedClass = useMemo(() => classes.find((c) => c.id === selectedClassId), [classes, selectedClassId])

  const [inicioByClass, setInicioByClass] = useState<Record<string, InicioGrupoData>>(
    () => Object.fromEntries(classes.map((c) => [c.id, defaultInicio(training, c)]))
  )
  const [finByClass, setFinByClass] = useState<Record<string, FinGrupoData>>(() =>
    Object.fromEntries(classes.map((c) => [c.id, defaultFin(c)]))
  )
  const [comunicadosByClass, setComunicadosByClass] = useState<
    Record<string, { inicioAt?: string; finAt?: string }>
  >(() =>
    Object.fromEntries(
      classes.map((c) => {
        const dl = computeInicioDeadline(defaultInicio(training, c).fechaInicio)
        const inicioAt = dl ? dl.deadlineDate.toLocaleDateString("es-ES") : undefined
        return [c.id, inicioAt ? { inicioAt } : {}]
      })
    )
  )

  const enFundae = accionFormativa.enFundae
  const initC = comunicadosByClass[selectedClassId] ?? {}
  const initialPhase: Phase = !enFundae ? "alta" : !initC.inicioAt ? "inicio" : "fin"
  const [activePhase, setActivePhase] = useState<Phase>(initialPhase)
  const [confirming, setConfirming] = useState<"inicio" | "fin" | null>(null)
  const [ack, setAck] = useState(false)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)

  if (!selectedClass) return null

  const inicio = inicioByClass[selectedClass.id] ?? defaultInicio(training, selectedClass)
  const fin = finByClass[selectedClass.id] ?? defaultFin(selectedClass)
  const comunicados = comunicadosByClass[selectedClass.id] ?? {}
  const inicioComunicado = !!comunicados.inicioAt
  const finComunicado = !!comunicados.finAt
  const inicioDeadline = computeInicioDeadline(inicio.fechaInicio)
  const finDeadline = finDeadlineDic(fin.fechaFinReal || inicio.fechaFin)

  const classParts = participantsForTraining(training.id).filter(
    (p) => p.classId === selectedClass.id || p.classId === null
  )
  const aptoFlags = classParts.map((_, idx) => (idx % 7 === 0 ? 12 : 20) >= 15)
  const aptos = aptoFlags.filter(Boolean).length
  const noAptoNames = classParts.filter((_, idx) => !aptoFlags[idx]).map((p) => p.employeeName)

  const setInicio = (u: InicioGrupoData | ((p: InicioGrupoData) => InicioGrupoData)) =>
    setInicioByClass((prev) => {
      const id = selectedClass.id
      const cur = prev[id] ?? defaultInicio(training, selectedClass)
      return { ...prev, [id]: typeof u === "function" ? u(cur) : u }
    })
  const setFin = (u: FinGrupoData | ((p: FinGrupoData) => FinGrupoData)) =>
    setFinByClass((prev) => {
      const id = selectedClass.id
      const cur = prev[id] ?? defaultFin(selectedClass)
      return { ...prev, [id]: typeof u === "function" ? u(cur) : u }
    })

  const stamp = () => new Date().toLocaleDateString("es-ES")
  const giveAlta = () =>
    setAccionFormativa({
      ...accionFormativa,
      enFundae: true,
      codigoFundae: accionFormativa.codigoFundae ?? "00142",
      fechaAlta: stamp(),
    })
  const doComunicarInicio = () => {
    setComunicadosByClass((p) => ({ ...p, [selectedClass.id]: { ...p[selectedClass.id], inicioAt: stamp() } }))
    setConfirming(null)
    setSuccessMsg("Inicio comunicado a FUNDAE.")
    setActivePhase("fin")
  }
  const doComunicarFin = () => {
    setComunicadosByClass((p) => ({ ...p, [selectedClass.id]: { ...p[selectedClass.id], finAt: stamp() } }))
    setConfirming(null)
    setSuccessMsg("Fin comunicado a FUNDAE.")
  }
  const revertInicio = () =>
    setComunicadosByClass((p) => ({ ...p, [selectedClass.id]: { inicioAt: undefined, finAt: undefined } }))
  const revertFin = () =>
    setComunicadosByClass((p) => ({ ...p, [selectedClass.id]: { ...p[selectedClass.id], finAt: undefined } }))

  const openConfirm = (which: "inicio" | "fin") => {
    setActivePhase(which)
    setAck(false)
    setSuccessMsg(null)
    setConfirming(which)
  }
  const goPhase = (p: Phase) => {
    setSuccessMsg(null)
    setEditing(false)
    setActivePhase(p)
  }
  const handleSelectClass = (id: string) => {
    setSelectedClassId(id)
    setSuccessMsg(null)
    setEditing(false)
    const c = comunicadosByClass[id] ?? {}
    setActivePhase(!enFundae ? "alta" : !c.inicioAt ? "inicio" : "fin")
  }

  // ── Evaluación contra reglas FUNDAE (lógica de dominio) ──
  type Eval = { verdicts: Verdict[]; canSend: boolean; hasWarn: boolean }
  const summarize = (verdicts: Verdict[], canSend: boolean): Eval => ({
    verdicts,
    canSend,
    hasWarn: verdicts.some((v) => v.level === "warn"),
  })

  const evalInicio = (): Eval => {
    const v: Verdict[] = []
    const datosOk = !!(inicio.idGrupo && inicio.fechaInicio && inicio.fechaFin && inicio.responsable)
    const centroOk =
      !(inicio.modalidad === "presencial" || inicio.modalidad === "mixta") ||
      !!(inicio.centro.nombreCentro && inicio.centro.documentoCentro)
    const tutoresOk = inicio.tutores.length > 0 && inicio.tutores.every((t) => t.documento && t.nombre && t.telefono)
    const all = datosOk && centroOk && tutoresOk
    v.push(
      all
        ? { level: "ok", text: "Datos del grupo, centro y tutores completos." }
        : { level: "block", text: `Faltan datos obligatorios: ${[!datosOk ? "datos del grupo" : "", !centroOk ? "centro de formación" : "", !tutoresOk ? "datos de algún tutor" : ""].filter(Boolean).join(", ")}.`, advice: "Debes corregirlo antes de comunicar el inicio." }
    )
    if (inicioDeadline)
      v.push(
        inicioDeadline.level === "expired"
          ? { level: "warn", text: `El plazo para comunicar el inicio venció el ${inicioDeadline.formattedDeadline}.`, advice: "Puedes comunicar igualmente para dejar constancia, pero FUNDAE puede no bonificar este grupo." }
          : { level: "ok", text: `En plazo: hasta el ${inicioDeadline.formattedDeadline}.` }
      )
    return summarize(v, all)
  }

  const evalFin = (): Eval & { total: number; maxBonif: number | null; exceso: number } => {
    const v: Verdict[] = []
    const total = Number(fin.costesDirectos || 0) + Number(fin.costesIndirectos || 0) + Number(fin.costesSalariales || 0)
    const horas = inicio.horario.horaTotales
    const rate = moduloHora(inicio.modalidad)
    const maxBonif = horas ? rate * horas * aptos : null
    const exceso = maxBonif != null && total > maxBonif ? total - maxBonif : 0
    const datosOk = !!(fin.fechaFinReal && fin.costesDirectos && fin.costesIndirectos && fin.costesSalariales)
    v.push(
      datosOk
        ? { level: "ok", text: "Fecha de fin y costes informados." }
        : { level: "block", text: `Faltan datos obligatorios: ${[!fin.fechaFinReal ? "fecha de fin real" : "", !(fin.costesDirectos && fin.costesIndirectos && fin.costesSalariales) ? "algún coste" : ""].filter(Boolean).join(", ")}.`, advice: "Debes corregirlo antes de comunicar el fin." }
    )
    if (noAptoNames.length)
      v.push({ level: "warn", text: `${noAptoNames.length} participante(s) no llegan al 75% de asistencia (${noAptoNames.join(", ")}): no son bonificables.`, advice: `Por eso el cálculo cuenta ${aptos} aptos, no ${classParts.length}.` })
    if (maxBonif != null && exceso > 0)
      v.push({ level: "warn", text: `FUNDAE solo bonifica hasta ${eur(maxBonif)} en este grupo (${aptos} aptos × ${horas}h × ${rate} €/h, ${inicio.modalidad}).`, advice: `Tus costes (${eur(total)}) lo superan: el exceso de ${eur(exceso)} no se recupera.` })
    else if (maxBonif != null) v.push({ level: "ok", text: `Costes dentro del máximo bonificable (${eur(maxBonif)}).` })
    if (finDeadline)
      v.push(
        finDeadline.level === "expired"
          ? { level: "warn", text: `El plazo para comunicar el fin venció el ${finDeadline.formattedDeadline}.`, advice: "Puedes comunicar igualmente, pero FUNDAE puede no bonificar." }
          : { level: "ok", text: `En plazo: hasta el ${finDeadline.formattedDeadline}.` }
      )
    return { ...summarize(v, datosOk), total, maxBonif, exceso }
  }

  const inicioEval = evalInicio()
  const finEval = evalFin()

  // ── Estado de cada paso (una sola fuente para stepper + cabecera) ──
  const altaTag: Tag = enFundae ? { text: "Dada de alta", tone: "positive" } : { text: "Pendiente", tone: "warning" }
  const inicioTag: Tag = inicioComunicado
    ? { text: inicioEval.hasWarn ? "Comunicado · en riesgo" : "Comunicado", tone: inicioEval.hasWarn ? "warning" : "positive" }
    : { text: "Por comunicar", tone: deadlineTone(inicioDeadline) === "neutral" ? "info" : deadlineTone(inicioDeadline) }
  const finTag: Tag = finComunicado
    ? { text: finEval.hasWarn ? "Comunicado · en riesgo" : "Comunicado", tone: finEval.hasWarn ? "warning" : "positive" }
    : !inicioComunicado
      ? { text: "Pendiente", tone: "neutral" }
      : { text: "Por comunicar", tone: "info" }
  const steps = [
    { key: "alta" as const, n: 1, label: "Acción formativa", tag: altaTag },
    { key: "inicio" as const, n: 2, label: "Inicio del grupo", tag: inicioTag },
    { key: "fin" as const, n: 3, label: "Fin del grupo", tag: finTag },
  ]

  // ── Cabecera unificada: título · estado · plazo · UNA barra de acciones ──
  const toggleEdit: ActionDef = { label: editing ? "Ver resumen" : "Editar datos", onClick: () => setEditing((e) => !e) }
  let stepTitle = ""
  let stepStatus: Tag | undefined
  let stepNote: string | undefined
  let primaryAction: ActionDef | undefined
  let secondaryActions: ActionDef[] = []
  let work: React.ReactNode = null

  if (activePhase === "alta") {
    stepTitle = "Acción formativa"
    stepStatus = altaTag
    if (enFundae && accionFormativa.fechaAlta) stepNote = `Dada de alta el ${accionFormativa.fechaAlta}`
    if (!enFundae) primaryAction = { label: "Marcar como dada de alta", onClick: giveAlta }
    if (enFundae) secondaryActions = [{ label: "Generar XML", onClick: () => setSuccessMsg("XML de alta generado (demo).") }]

    const modalidadLabel =
      MODALIDAD_OPTIONS.find((o) => o.value === accionFormativa.modalidad)?.label ?? accionFormativa.modalidad
    work = (
      <div className="flex flex-col gap-8">
        <Section title="Datos de la acción formativa">
          <Fields
            items={[
              { label: "Código FUNDAE", value: accionFormativa.codigoFundae ?? "—" },
              { label: "Perfil", value: perfilLabel(accionFormativa.perfil) },
              { label: "Horas", value: accionFormativa.horas ? `${accionFormativa.horas} h` : "—" },
              { label: "Modalidad", value: modalidadLabel },
              { label: "Nombre", value: accionFormativa.nombre || "—" },
            ]}
          />
        </Section>
        <Section title="Objetivos">
          <F0Text variant="body" content={accionFormativa.objetivos || "—"} />
        </Section>
        <Section title="Contenidos">
          <F0Text variant="body" content={accionFormativa.contenidos || "—"} />
        </Section>
      </div>
    )
  } else if (activePhase === "inicio") {
    stepTitle = "Inicio del grupo"
    stepStatus = inicioTag
    if (!inicioComunicado) {
      stepNote = inicioDeadline?.message
      primaryAction = { label: "Revisar y comunicar inicio", onClick: () => openConfirm("inicio") }
    }
    secondaryActions = [toggleEdit, ...(inicioComunicado ? [{ label: "Deshacer", onClick: revertInicio }] : [])]
    work = <InicioSection data={inicio} setData={setInicio} validate={false} readOnly={!editing} />
  } else {
    stepTitle = "Fin del grupo"
    stepStatus = finTag
    if (!finComunicado) {
      stepNote = finDeadline?.message
      primaryAction = { label: "Revisar y comunicar fin", onClick: () => openConfirm("fin") }
    }
    secondaryActions = [
      toggleEdit,
      ...(finComunicado
        ? [
            { label: "Generar XML", onClick: () => setSuccessMsg("XML de fin generado (demo).") },
            { label: "Deshacer", onClick: revertFin },
          ]
        : []),
    ]
    work = editing ? (
      <div className="flex flex-col gap-8">
        <FinSection
          data={fin}
          setData={setFin}
          validate={false}
          readOnly={false}
          fechaFinPrevista={inicio.fechaFin}
          numHorasTotales={inicio.horario.horaTotales}
          numParticipantesPrevistos={inicio.numeroParticipantes}
          trainingId={training.id}
          hideModuleCheck
          hideIntro
        />
        <FundaeParticipantsTable
          trainingId={training.id}
          trainingClass={selectedClass}
          numParticipantesPrevistos={inicio.numeroParticipantes}
          readOnly={false}
        />
      </div>
    ) : (
      <div className="flex flex-col gap-8">
        {/* Héroe económico (Stripe big number): la cifra que importa manda. */}
        <div className="flex flex-col gap-2">
          <F0Text variant="label" content="Recuperas de FUNDAE" />
          <F0Heading as="h2" variant="heading-large" content={eur(finEval.maxBonif ?? 0)} />
          <F0Text
            variant="small"
            content={`de ${eur(finEval.total)} invertidos · ${aptos} de ${classParts.length} participantes bonificables · módulo ${moduloHora(inicio.modalidad)} €/h ${inicio.modalidad} · fin ${fin.fechaFinReal || "—"}`}
          />
        </div>

        {finEval.exceso > 0 && finEval.maxBonif != null && (
          <F0Alert
            variant="warning"
            title={`${eur(finEval.exceso)} no se recuperan`}
            description={`Los costes imputados (${eur(finEval.total)}) superan el máximo bonificable del módulo (${eur(finEval.maxBonif)} = ${moduloHora(inicio.modalidad)} €/h × ${inicio.horario.horaTotales ?? "—"}h × ${aptos} aptos).`}
          />
        )}

        {/* Costes como recibo, ancho legible, total destacado. */}
        <Section title="Costes imputados">
          <div className="flex max-w-md flex-col gap-3">
            {[
              { l: "Costes directos", v: Number(fin.costesDirectos || 0) },
              { l: "Costes indirectos", v: Number(fin.costesIndirectos || 0) },
              { l: "Costes salariales", v: Number(fin.costesSalariales || 0) },
            ].map((c) => (
              <div key={c.l} className="flex items-center justify-between">
                <F0Text variant="body" content={c.l} />
                <F0Text variant="body" content={eur(c.v)} />
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-f1-border pt-3">
              <F0Text variant="label" content="Total imputado" />
              <F0Heading as="h3" variant="heading" content={eur(finEval.total)} />
            </div>
          </div>
        </Section>

        {/* Tabla de participantes (lleva su propio encabezado de sección). */}
        <FundaeParticipantsTable
          trainingId={training.id}
          trainingClass={selectedClass}
          numParticipantesPrevistos={inicio.numeroParticipantes}
          readOnly
        />
      </div>
    )
  }

  // ── Diálogo de confirmación (revisar antes de enviar) ──
  const confirmEval = confirming === "inicio" ? inicioEval : confirming === "fin" ? finEval : null
  const hasWarn = !!confirmEval?.hasWarn
  const canSend = !!confirmEval?.canSend
  const gated = canSend && hasWarn && !ack
  const finExceso = confirming === "fin" ? finEval.exceso : 0
  const confirmSummary =
    confirming === "inicio"
      ? `Grupo ${selectedClass.name} · inicio ${inicio.fechaInicio} · ${inicio.numeroParticipantes ?? "—"} participantes`
      : confirming === "fin"
        ? `Grupo ${selectedClass.name} · fin ${fin.fechaFinReal || "—"} · ${eur(finEval.total)} de costes`
        : ""
  const primaryLabel = !canSend
    ? "Faltan datos"
    : gated
      ? "Marca la casilla para continuar"
      : finExceso > 0
        ? `Comunicar y asumir ${eur(finExceso)}`
        : hasWarn
          ? "Comunicar igualmente"
          : "Comunicar a FUNDAE"

  return (
    <div className="flex flex-col gap-8">
      {classes.length > 1 && (
        <div className="max-w-xs">
          <F0Select
            label="Grupo formativo"
            value={selectedClassId}
            options={classes.map((c) => ({ value: c.id, label: c.name }))}
            showSearchBox={classes.length > 5}
            onChange={handleSelectClass}
          />
        </div>
      )}

      <Stepper steps={steps} active={activePhase} onSelect={goPhase} />

      <div className="flex max-w-5xl flex-col gap-8">
        {/* Cabecera: título + estado + plazo a la izquierda; UNA barra de
            acciones a la derecha (un primario, secundarios homogéneos). */}
        <header className="flex items-start justify-between gap-6 border-b border-f1-border pb-6">
          <div className="flex flex-col gap-2">
            <F0Heading as="h2" variant="heading" content={stepTitle} />
            <div className="flex flex-wrap items-center gap-2">
              {stepStatus && <StatusPill text={stepStatus.text} tone={stepStatus.tone} />}
              {stepNote && <F0Text variant="small" content={stepNote} />}
            </div>
          </div>
          {(primaryAction || secondaryActions.length > 0) && (
            <div className="flex shrink-0 items-center gap-2">
              {secondaryActions.map((a) => (
                <F0Button key={a.label} label={a.label} variant="outline" onClick={a.onClick} />
              ))}
              {primaryAction && (
                <F0Button label={primaryAction.label} variant="default" disabled={primaryAction.disabled} onClick={primaryAction.onClick} />
              )}
            </div>
          )}
        </header>

        {successMsg && <F0Alert variant="positive" title={successMsg} description="" />}

        {work}
      </div>

      {confirmEval && (
        <F0Dialog
          isOpen={!!confirming}
          onClose={() => setConfirming(null)}
          width="md"
          title={confirming === "inicio" ? "Comunicar inicio a FUNDAE" : "Comunicar fin a FUNDAE"}
          description={confirmSummary}
          primaryAction={{
            label: primaryLabel,
            disabled: !canSend || gated,
            onClick: () => {
              if (!canSend || gated) return
              if (confirming === "inicio") doComunicarInicio()
              else doComunicarFin()
            },
          }}
          secondaryAction={{ label: "Cancelar y revisar", onClick: () => setConfirming(null) }}
        >
          <div className="flex flex-col gap-4">
            {!canSend && <F0Alert variant="critical" title="No puedes comunicar todavía" description="Completa los datos obligatorios marcados abajo." />}
            <VerdictList verdicts={confirmEval.verdicts} />
            {canSend && hasWarn && (
              <F0Checkbox
                title={
                  finExceso > 0
                    ? `Confirmo que asumo ${eur(finExceso)} de sobrecoste que FUNDAE no bonifica, y quiero comunicar igualmente.`
                    : "Entiendo que este grupo puede no bonificarse y quiero comunicarlo igualmente."
                }
                checked={ack}
                onCheckedChange={setAck}
              />
            )}
          </div>
        </F0Dialog>
      )}
    </div>
  )
}

export function FundaeRedesign({ training }: Props) {
  const [accionFormativa, setAccionFormativa] = useState<AccionFormativaState>(
    () => buildInitialAccionFormativa(training)
  )

  if (!training.fundaeSubsidized) {
    return (
      <F0Box padding="lg">
        <F0Alert variant="warning" title="Formación no bonificable por FUNDAE" description="Activa la opción 'Bonificado por FUNDAE' en los ajustes para gestionar grupos formativos." />
      </F0Box>
    )
  }

  if (training.classes.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <AccionFormativaCard training={training} state={accionFormativa} setState={setAccionFormativa} />
        <F0Alert variant="info" title="Sin grupos formativos" description="Crea un grupo para empezar el ciclo FUNDAE: comunicar inicio, asignar participantes y comunicar fin." />
      </div>
    )
  }

  return <Manager training={training} accionFormativa={accionFormativa} setAccionFormativa={setAccionFormativa} />
}
