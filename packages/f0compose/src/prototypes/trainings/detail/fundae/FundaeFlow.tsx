import {
  F0Alert,
  F0Box,
  F0Button,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Select,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Input, NumberInput, Textarea } from "@factorialco/f0-react/dist/experimental"
import { useMemo, useState } from "react"

import { participantsForTraining, type Training, type TrainingClass } from "@/fixtures"

// Solo DATOS / dominio:
import { buildInitialAccionFormativa, type AccionFormativaState } from "./AccionFormativaCard"
import {
  computeInicioDeadline,
  formatSpanishDate,
  parseSpanishDate,
  type DeadlineInfo,
} from "./deadlines"
import { defaultFin, defaultInicio } from "./FundaePanel"
import { FundaeParticipantsTable } from "./ParticipantsTable"
import {
  MODALIDAD_OPTIONS,
  PERFIL_OPTIONS,
  perfilLabel,
  type FinGrupoData,
  type InicioGrupoData,
  type Modalidad,
  type PerfilFundae,
} from "./fundaeTypes"

type Phase = "alta" | "inicio" | "fin"
type Tone = "neutral" | "info" | "positive" | "warning" | "critical"
type ActionDef = { label: string; onClick: () => void }

const eur = (n: number) =>
  n.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0, useGrouping: true })

const MODULO: Record<string, number> = { presencial: 13, teleformacion: 7.5, mixta: 11 }
const moduloHora = (m: string) => MODULO[m] ?? 13

// Fechas siempre en numérico DD/MM/AAAA (misma lógica en los 3 pasos).
function padDateStr(s: string): string {
  const p = s.split("/")
  if (p.length !== 3) return s
  return `${p[0].padStart(2, "0")}/${p[1].padStart(2, "0")}/${p[2]}`
}

// Color del enunciado de estado (lead de la banda de decisión) por tono.
const TONE_TEXT: Record<string, string> = {
  positive: "text-f1-foreground-positive",
  warning: "text-f1-foreground-warning",
  critical: "text-f1-foreground-critical",
  info: "text-f1-foreground-info",
  neutral: "text-f1-foreground",
}
const TONE_DOT: Record<string, string> = {
  positive: "bg-f1-icon-positive",
  warning: "bg-f1-icon-warning",
  critical: "bg-f1-icon-critical",
  info: "bg-f1-icon-info",
  neutral: "bg-f1-foreground-secondary",
}

function finDeadlineDic(fecha: string): DeadlineInfo | null {
  const d = parseSpanishDate(fecha)
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
    return { ...base, level: "expired", shortMessage: "Vencido", message: `Plazo vencido el ${formattedDeadline}.` }
  if (daysRemaining <= 30)
    return { ...base, level: "warning", shortMessage: `${daysRemaining}d`, message: `Quedan ${daysRemaining} días (hasta ${formattedDeadline}).` }
  return { ...base, level: "info", shortMessage: `${daysRemaining}d`, message: `Plazo hasta ${formattedDeadline}.` }
}

function deadlineTone(d: DeadlineInfo | null): Tone {
  if (!d) return "neutral"
  if (d.level === "expired" || d.level === "critical") return "critical"
  if (d.level === "warning") return "warning"
  return "info"
}

function aptosFor(trainingId: string, cls: TrainingClass): { aptos: number; total: number } {
  const all = participantsForTraining(trainingId).filter((p) => p.classId === cls.id || p.classId === null)
  const aptos = all.filter((_, idx) => (idx % 7 === 0 ? 12 : 20) >= 15).length
  return { aptos, total: all.length }
}

// ── Piezas de presentación (solo componentes f0) ───────────────────────

function Field({ label, value }: { label: string; value: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text variant="label" content={label} />
      <F0Text variant="body" content={value || "—"} />
    </F0Box>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Heading as="h2" variant="heading" content={title} />
      {children}
    </F0Box>
  )
}

type Step = { key: Phase; n: number; label: string; desc: string; done: boolean; tone: Tone; status: string }

// ── Diálogos de edición ─────────────────────────────────────────────────

function EditFooter({ onCancel, onSave }: { onCancel: () => void; onSave: () => void }) {
  return (
    <F0Box display="flex" justifyContent="end" gap="sm" borderTop="default" borderColor="secondary" paddingTop="lg">
      <F0Button label="Cancelar" variant="outline" onClick={onCancel} />
      <F0Button label="Guardar" variant="default" onClick={onSave} />
    </F0Box>
  )
}

function FinForm({ data, onCancel, onSave }: { data: FinGrupoData; onCancel: () => void; onSave: (d: FinGrupoData) => void }) {
  const [draft, setDraft] = useState(data)
  const num = (k: keyof FinGrupoData) => (draft[k] ? Number(draft[k]) : null)
  const set = (k: keyof FinGrupoData, v: string) => setDraft({ ...draft, [k]: v })
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" maxWidth="96">
      <Input label="Fecha de fin real" placeholder="DD/MM/AAAA" value={draft.fechaFinReal} onChange={(v) => set("fechaFinReal", v ?? "")} />
      <F0Box display="grid" columns="3" gap="lg">
        <NumberInput label="Costes directos (€)" locale="es-ES" value={num("costesDirectos")} onChange={(v) => set("costesDirectos", v == null ? "" : String(v))} />
        <NumberInput label="Costes indirectos (€)" locale="es-ES" value={num("costesIndirectos")} onChange={(v) => set("costesIndirectos", v == null ? "" : String(v))} />
        <NumberInput label="Costes salariales (€)" locale="es-ES" value={num("costesSalariales")} onChange={(v) => set("costesSalariales", v == null ? "" : String(v))} />
      </F0Box>
      <EditFooter onCancel={onCancel} onSave={() => onSave(draft)} />
    </F0Box>
  )
}

function InicioForm({ data, onCancel, onSave }: { data: InicioGrupoData; onCancel: () => void; onSave: (d: InicioGrupoData) => void }) {
  const [draft, setDraft] = useState(data)
  const set = <K extends keyof InicioGrupoData>(k: K, v: InicioGrupoData[K]) => setDraft({ ...draft, [k]: v })
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" maxWidth="2xl">
      <F0Box display="grid" columns="2" gap="lg">
        <Input label="Código de grupo" value={draft.idGrupo} onChange={(v) => set("idGrupo", v ?? "")} />
        <Input label="Descripción" value={draft.descripcion} onChange={(v) => set("descripcion", v ?? "")} />
      </F0Box>
      <F0Box display="grid" columns="3" gap="lg">
        <Input label="Fecha de inicio" placeholder="DD/MM/AAAA" value={draft.fechaInicio} onChange={(v) => set("fechaInicio", v ?? "")} />
        <Input label="Fecha fin prevista" placeholder="DD/MM/AAAA" value={draft.fechaFin} onChange={(v) => set("fechaFin", v ?? "")} />
        <NumberInput label="Nº participantes" locale="es-ES" value={draft.numeroParticipantes} onChange={(v) => set("numeroParticipantes", v)} />
      </F0Box>
      <F0Box display="grid" columns="3" gap="lg">
        <Input label="Responsable" value={draft.responsable} onChange={(v) => set("responsable", v ?? "")} />
        <Input label="Teléfono" value={draft.telefonoContacto} onChange={(v) => set("telefonoContacto", v ?? "")} />
        <F0Select label="Modalidad" value={draft.modalidad} options={MODALIDAD_OPTIONS} onChange={(v: string) => set("modalidad", v as Modalidad)} />
      </F0Box>
      <F0Box maxWidth="64">
        <NumberInput label="Horas totales" locale="es-ES" value={draft.horario.horaTotales} onChange={(v) => set("horario", { ...draft.horario, horaTotales: v })} />
      </F0Box>
      <EditFooter onCancel={onCancel} onSave={() => onSave(draft)} />
    </F0Box>
  )
}

function AltaForm({ data, onCancel, onSave }: { data: AccionFormativaState; onCancel: () => void; onSave: (d: AccionFormativaState) => void }) {
  const [draft, setDraft] = useState(data)
  const set = <K extends keyof AccionFormativaState>(k: K, v: AccionFormativaState[K]) => setDraft({ ...draft, [k]: v })
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" maxWidth="2xl">
      <Input label="Nombre" value={draft.nombre} onChange={(v) => set("nombre", v ?? "")} />
      <F0Box display="grid" columns="3" gap="lg">
        <Input label="Código FUNDAE" value={draft.codigoFundae ?? ""} onChange={(v) => set("codigoFundae", v ?? "")} />
        <NumberInput label="Horas" locale="es-ES" value={draft.horas} onChange={(v) => set("horas", v)} />
        <F0Select label="Modalidad" value={draft.modalidad} options={MODALIDAD_OPTIONS} onChange={(v: string) => set("modalidad", v as Modalidad)} />
      </F0Box>
      <F0Box maxWidth="64">
        <F0Select label="Perfil FUNDAE" value={draft.perfil} options={PERFIL_OPTIONS} onChange={(v: string) => set("perfil", v as PerfilFundae)} />
      </F0Box>
      <Textarea label="Objetivos" rows={3} value={draft.objetivos} onChange={(v) => set("objetivos", v ?? "")} />
      <Textarea label="Contenidos" rows={3} value={draft.contenidos} onChange={(v) => set("contenidos", v ?? "")} />
      <EditFooter onCancel={onCancel} onSave={() => onSave(draft)} />
    </F0Box>
  )
}


// ═══════════════════════════════════════════════════════════════════════

// Stepper HORIZONTAL a ancho completo como UNA barra (patrón "consultant
// profile"): un solo bloque dividido en segmentos iguales que llenan el ancho.
// Cada segmento mantiene su info (círculo de estado + nombre + descripción +
// estado), el activo resaltado, separados por divisores. Clicable con hover.
// (TopSteps eliminado en versión C: los pasos van como header-tabs compactos)

function Flow({ training, af, setAf }: { training: Training; af: AccionFormativaState; setAf: (s: AccionFormativaState) => void }) {
  const classes = training.classes
  const [classId, setClassId] = useState(classes[0]?.id ?? "")
  const cls = useMemo(() => classes.find((c) => c.id === classId), [classes, classId])

  const [inicioBy, setInicioBy] = useState<Record<string, InicioGrupoData>>(
    () => Object.fromEntries(classes.map((c) => [c.id, defaultInicio(training, c)]))
  )
  const [finBy, setFinBy] = useState<Record<string, FinGrupoData>>(
    () => Object.fromEntries(classes.map((c) => [c.id, defaultFin(c)]))
  )
  const [comBy, setComBy] = useState<Record<string, { inicioAt?: string; finAt?: string }>>(
    () =>
      Object.fromEntries(
        classes.map((c, i) => {
          const dl = computeInicioDeadline(defaultInicio(training, c).fechaInicio)
          const inicioAt = dl ? dl.deadlineDate.toLocaleDateString("es-ES") : undefined
          // Cada grupo arranca en una fase distinta, para que cambiar de grupo
          // cambie de verdad la vista (su progreso es independiente).
          const mod = i % 3
          if (mod === 1) return [c.id, {}] // aún por comunicar el inicio
          if (mod === 2) return [c.id, { inicioAt, finAt: inicioAt }] // ciclo completo
          return [c.id, inicioAt ? { inicioAt } : {}] // en fase Fin (inicio hecho)
        })
      )
  )

  const enFundae = af.enFundae
  const initCom = comBy[classId] ?? {}
  const [active, setActive] = useState<Phase>(!enFundae ? "alta" : !initCom.inicioAt ? "inicio" : "fin")
  const [confirm, setConfirm] = useState<"inicio" | "fin" | null>(null)
  const [editing, setEditing] = useState<Phase | null>(null)
  const [ack, setAck] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  if (!cls) return null

  const inicio = inicioBy[cls.id] ?? defaultInicio(training, cls)
  const fin = finBy[cls.id] ?? defaultFin(cls)
  const com = comBy[cls.id] ?? {}
  const inicioCom = !!com.inicioAt
  const finCom = !!com.finAt
  const inicioDl = computeInicioDeadline(inicio.fechaInicio)
  const finDl = finDeadlineDic(fin.fechaFinReal || inicio.fechaFin)

  const { aptos, total: totalParts } = aptosFor(training.id, cls)

  const setInicio = (d: InicioGrupoData) => setInicioBy((p) => ({ ...p, [cls.id]: d }))
  const setFin = (d: FinGrupoData) => setFinBy((p) => ({ ...p, [cls.id]: d }))

  const stamp = () => new Date().toLocaleDateString("es-ES")
  const goPhase = (p: Phase) => { setToast(null); setEditing(null); setActive(p) }
  const giveAlta = () => setAf({ ...af, enFundae: true, codigoFundae: af.codigoFundae ?? "00142", fechaAlta: stamp() })
  const comunicarInicio = () => { setComBy((p) => ({ ...p, [cls.id]: { ...p[cls.id], inicioAt: stamp() } })); setConfirm(null); setToast("Inicio comunicado a FUNDAE."); setActive("fin") }
  const comunicarFin = () => { setComBy((p) => ({ ...p, [cls.id]: { ...p[cls.id], finAt: stamp() } })); setConfirm(null); setToast("Fin comunicado a FUNDAE.") }
  const openConfirm = (w: "inicio" | "fin") => { setAck(false); setToast(null); setActive(w); setConfirm(w) }
  const selectClass = (id: string) => { setClassId(id); setToast(null); setEditing(null); const c = comBy[id] ?? {}; setActive(!enFundae ? "alta" : !c.inicioAt ? "inicio" : "fin") }

  const totalCostes = Number(fin.costesDirectos || 0) + Number(fin.costesIndirectos || 0) + Number(fin.costesSalariales || 0)
  const horas = inicio.horario.horaTotales
  const rate = moduloHora(inicio.modalidad)
  const maxBonif = horas ? rate * horas * aptos : 0
  const exceso = totalCostes > maxBonif ? totalCostes - maxBonif : 0
  const recuperable = Math.min(totalCostes, maxBonif)
  const noAptos = totalParts - aptos

  type Check = { ok: boolean; warn?: boolean; text: string; advice?: string }
  const inicioChecks: Check[] = []
  {
    const datosOk = !!(inicio.idGrupo && inicio.fechaInicio && inicio.fechaFin && inicio.responsable)
    inicioChecks.push(datosOk ? { ok: true, text: "Datos del grupo completos." } : { ok: false, text: "Faltan datos obligatorios del grupo.", advice: "Edita los datos antes de comunicar." })
    if (inicioDl) inicioChecks.push(inicioDl.level === "expired" ? { ok: false, warn: true, text: `El plazo venció el ${inicioDl.formattedDeadline}.`, advice: "Puedes comunicar igualmente, pero FUNDAE puede no bonificar." } : { ok: true, text: `En plazo hasta el ${inicioDl.formattedDeadline}.` })
  }
  const finChecks: Check[] = []
  {
    const datosOk = !!(fin.fechaFinReal && fin.costesDirectos && fin.costesIndirectos && fin.costesSalariales)
    finChecks.push(datosOk ? { ok: true, text: "Fecha de fin y costes informados." } : { ok: false, text: "Faltan fecha de fin o algún coste.", advice: "Edita los datos antes de comunicar." })
    if (noAptos > 0) finChecks.push({ ok: false, warn: true, text: `${noAptos} ${noAptos === 1 ? "participante no llega" : "participantes no llegan"} al 75% de asistencia`, advice: `Se bonifican ${aptos} de ${totalParts}.` })
    if (exceso > 0) finChecks.push({ ok: false, warn: true, text: `${eur(exceso)} por encima del módulo bonificable`, advice: `FUNDAE solo bonifica hasta ${eur(maxBonif)}.` })
    else finChecks.push({ ok: true, text: `Costes dentro del módulo bonificable (${eur(maxBonif)}).` })
    if (finDl) finChecks.push(finDl.level === "expired" ? { ok: false, warn: true, text: `El plazo venció el ${finDl.formattedDeadline}.`, advice: "Puedes comunicar igualmente, pero FUNDAE puede no bonificar." } : { ok: true, text: `En plazo hasta el ${finDl.formattedDeadline}.` })
  }
  const inicioRisk = inicioChecks.some((c) => c.warn)
  const finRisk = finChecks.some((c) => c.warn)

  const steps: Step[] = [
    { key: "alta", n: 1, label: "Acción formativa", desc: "Da de alta el curso en FUNDAE", done: enFundae, tone: enFundae ? "positive" : "neutral", status: enFundae ? "Dada de alta" : "Pendiente" },
    { key: "inicio", n: 2, label: "Inicio del grupo", desc: "Comunica el inicio antes del plazo", done: inicioCom, tone: inicioCom ? (inicioRisk ? "warning" : "positive") : deadlineTone(inicioDl) === "neutral" ? "info" : deadlineTone(inicioDl), status: inicioCom ? (inicioRisk ? "Comunicado · en riesgo" : "Comunicado") : "Por comunicar" },
    { key: "fin", n: 3, label: "Fin del grupo", desc: "Costes y resultado de participantes", done: finCom, tone: finCom ? (finRisk ? "warning" : "positive") : !inicioCom ? "neutral" : "info", status: finCom ? (finRisk ? "Comunicado · en riesgo" : "Comunicado") : !inicioCom ? "Pendiente" : "Por comunicar" },
  ]

  // ── Contenido + acciones del paso activo ──
  let stepNote: string | undefined
  // Fecha de confirmación del paso (alta/comunicado) como campo apilado
  // label/valor, MISMO tratamiento que "Plazos" en el paso fin.
  let doneDate: { label: string; value: string } | undefined
  let secondary: ActionDef[] = [] // acciones de DECISIÓN (panel derecho): p.ej. Generar XML
  let onEdit: (() => void) | null = null // editar vive a la IZQUIERDA, con los datos
  let mainBody: React.ReactNode = null

  if (active === "alta") {
    if (enFundae && af.fechaAlta) doneDate = { label: "Dada de alta el", value: padDateStr(af.fechaAlta) }
    onEdit = () => setEditing("alta")
    if (enFundae) secondary.push({ label: "Generar XML", onClick: () => setToast("XML de alta generado (demo).") })
    const modalidad = MODALIDAD_OPTIONS.find((o) => o.value === af.modalidad)?.label ?? af.modalidad
    mainBody = (
      <F0Box display="flex" flexDirection="column" gap="3xl">
        <Section title="Datos de la acción formativa">
          <F0Box display="grid" columns="3" gap="2xl">
            <Field label="Denominación" value={af.nombre} />
            <Field label="Código FUNDAE" value={af.codigoFundae ?? "—"} />
            <Field label="Duración" value={af.horas ? `${af.horas} h` : "—"} />
            <Field label="Modalidad" value={modalidad} />
            <Field label="Perfil FUNDAE" value={perfilLabel(af.perfil)} />
          </F0Box>
        </Section>
        <Section title="Objetivos">
          <F0Text variant="body" content={af.objetivos || "—"} />
        </Section>
        <Section title="Contenidos">
          <F0Text variant="body" content={af.contenidos || "—"} />
        </Section>
      </F0Box>
    )
  } else if (active === "inicio") {
    if (inicioCom) doneDate = { label: "Comunicado el", value: padDateStr(com.inicioAt ?? "") }
    onEdit = () => setEditing("inicio")
    const modalidad = MODALIDAD_OPTIONS.find((o) => o.value === inicio.modalidad)?.label ?? inicio.modalidad
    mainBody = (
      <F0Box display="flex" flexDirection="column" gap="3xl">
        <Section title="Datos del grupo">
          <F0Box display="grid" columns="3" gap="2xl">
            <Field label="Código acción formativa" value={inicio.idAccion} />
            <Field label="Código de grupo" value={inicio.idGrupo} />
            <Field label="Descripción" value={inicio.descripcion} />
            <Field label="Fecha de inicio" value={inicio.fechaInicio} />
            <Field label="Fecha fin prevista" value={inicio.fechaFin} />
            <Field label="Nº participantes" value={inicio.numeroParticipantes != null ? String(inicio.numeroParticipantes) : "—"} />
            <Field label="Responsable" value={inicio.responsable} />
            <Field label="Teléfono" value={inicio.telefonoContacto} />
            <Field label="Modalidad" value={modalidad} />
          </F0Box>
        </Section>
        <Section title="Centro proveedor">
          <F0Box display="grid" columns="3" gap="2xl">
            <Field label="Nombre del centro" value={inicio.centro.nombreCentro} />
            <Field label="Documento" value={inicio.centro.documentoCentro} />
            <Field label="Dirección" value={inicio.centro.direccionDetallada} />
            <Field label="Localidad" value={inicio.centro.localidad} />
            <Field label="Código postal" value={inicio.centro.codPostal} />
          </F0Box>
        </Section>
        <Section title="Horario">
          <F0Box display="grid" columns="3" gap="2xl">
            <Field label="Horas totales" value={inicio.horario.horaTotales ? `${inicio.horario.horaTotales} h` : "—"} />
            <Field label="Tramos" value={[inicio.horario.horaInicioTramo1 && `${inicio.horario.horaInicioTramo1}–${inicio.horario.horaFinTramo1}`].filter(Boolean).join(" · ") || "—"} />
          </F0Box>
        </Section>
        <Section title={`Tutores (${inicio.tutores.length})`}>
          <F0Box display="grid" columns="2" gap="2xl">
            {inicio.tutores.map((t, i) => (
              <Field key={t.id} label={`Tutor ${i + 1}`} value={`${t.nombre} ${t.apellido1} · ${t.documento} · ${t.numeroHoras ?? "—"} h`} />
            ))}
          </F0Box>
        </Section>
      </F0Box>
    )
  } else {
    if (finCom) doneDate = { label: "Comunicado el", value: padDateStr(com.finAt ?? "") }
    onEdit = () => setEditing("fin")
    if (finCom) {
      secondary.push({ label: "Generar XML", onClick: () => setToast("XML de fin generado (demo).") })
    }
    // Izquierda = el trabajo (lo que verificas y editas): costes (arriba) +
    // participantes. Costes a todo el ancho, con jerarquía (no celdas planas).
    mainBody = (
      <F0Box display="flex" flexDirection="column" gap="3xl">
        <Section title="Costes">
          {/* Desglose itemizado en una columna acotada: componentes → total
              destacado (divisor encima) → tope del módulo como referencia.
              Filas etiqueta/valor, mismo patrón que el panel de la derecha. */}
          <F0Box display="flex" flexDirection="column" gap="sm" width="full">
            <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
              <F0Text variant="small" content="Directos" />
              <F0Text variant="body" content={eur(Number(fin.costesDirectos || 0))} />
            </F0Box>
            <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
              <F0Text variant="small" content="Indirectos" />
              <F0Text variant="body" content={eur(Number(fin.costesIndirectos || 0))} />
            </F0Box>
            <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
              <F0Text variant="small" content="Salariales" />
              <F0Text variant="body" content={eur(Number(fin.costesSalariales || 0))} />
            </F0Box>
            <F0Box display="flex" justifyContent="between" alignItems="center" gap="md" borderTop="default" borderColor="secondary" paddingTop="sm">
              <F0Text variant="label" content="Total invertido" />
              <F0Heading as="h3" variant="heading" content={eur(totalCostes)} />
            </F0Box>
            <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
              <F0Text variant="small" content="Máximo bonificable (módulo)" />
              <F0Text variant="body" content={eur(maxBonif)} />
            </F0Box>
          </F0Box>
        </Section>

        <F0Box borderTop="default" borderColor="secondary" />

        <FundaeParticipantsTable
          trainingId={training.id}
          trainingClass={cls}
          numParticipantesPrevistos={inicio.numeroParticipantes}
          readOnly
        />
      </F0Box>
    )
  }

  // Edición EN LÍNEA (no modal): sustituye el contenido del paso por su
  // formulario, con Guardar/Cancelar propios. Acciones de cabecera ocultas.
  if (editing === active) {
    secondary = []
    stepNote = "Editando…"
    if (active === "alta") mainBody = <AltaForm data={af} onCancel={() => setEditing(null)} onSave={(d) => { setAf(d); setEditing(null) }} />
    else if (active === "inicio") mainBody = <InicioForm data={inicio} onCancel={() => setEditing(null)} onSave={(d) => { setInicio(d); setEditing(null) }} />
    else mainBody = <FinForm data={fin} onCancel={() => setEditing(null)} onSave={(d) => { setFin(d); setEditing(null) }} />
  }

  const isEditing = editing === active

  // Plazo del paso activo (cuando aún está por comunicar): se muestra como
  // indicador con color por urgencia, no como texto gris.
  const activeDeadline: DeadlineInfo | null = isEditing
    ? null
    : active === "inicio" && !inicioCom
      ? inicioDl
      : active === "fin" && !finCom
        ? finDl
        : null

  // Fechas de "Plazos" en formato numérico consistente (DD/MM/AAAA), apiladas.
  const numDate = (d: Date) => `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`
  const deadlineNum = activeDeadline ? numDate(activeDeadline.deadlineDate) : ""

  // Acción primaria del paso (barra inferior, patrón Atrás/Siguiente de las
  // referencias): avanzar el ciclo o pasar al siguiente paso ya hecho.
  // El CTA es SOLO para completar el paso (comunicar / dar de alta), y solo si
  // está por hacer. Navegar entre pasos es libre por el stepper — no es un botón.
  let action: { label: string; onClick: () => void; disabled?: boolean } | null = null
  let actionHint: string | undefined
  if (active === "alta") {
    if (!enFundae) action = { label: "Comunicar alta", onClick: giveAlta }
  } else if (active === "inicio") {
    if (!inicioCom) {
      action = { label: "Comunicar inicio", onClick: () => openConfirm("inicio"), disabled: !enFundae }
      if (!enFundae) actionHint = "Primero da de alta la acción formativa."
    }
  } else if (!finCom) {
    action = { label: "Comunicar fin", onClick: () => openConfirm("fin"), disabled: !inicioCom }
    if (!inicioCom) actionHint = "Primero comunica el inicio del grupo."
  }

  // ── Veredicto sintetizado del paso activo ──────────────────────────────
  // El sistema YA tiene los checks (lee los datos). Aquí los convertimos en
  // un veredicto en claro + solo las incidencias, en vez de exponer el dato
  // crudo para que el usuario lo ensamble.
  const activeChecks: Check[] = active === "inicio" ? inicioChecks : active === "fin" ? finChecks : []
  const activeCom = active === "inicio" ? inicioCom : active === "fin" ? finCom : enFundae
  const datosOk = activeChecks.length === 0 ? true : activeChecks[0]!.ok
  const issues = activeChecks.filter((c) => !c.ok) // incidencias = lo que NO está en orden

  // ── Estructura del panel (elementos + jerarquía, sin ocultar info) ──
  // El resultado económico se presenta como DESGLOSE alineado: el 208 € es el
  // total de un cálculo (invertido − no bonificable), y los avisos son sus
  // razones (líneas del cálculo), no frases sueltas al lado del número.
  const showBreakdown = active === "fin" && datosOk

  // Estado = un ESTADO real (Comunicable / Comunicado / Faltan datos / Bloqueado),
  // NO "Atención". Los avisos no son el estado: van en su propio banner.
  let stateText: string
  let stateTone: Tone
  if (active === "alta") {
    stateText = enFundae ? "Dada de alta" : "Pendiente de alta"
    stateTone = enFundae ? "positive" : "info"
  } else if (activeCom) {
    stateText = "Comunicado"
    stateTone = "positive"
  } else if (!datosOk) {
    stateText = "Faltan datos"
    stateTone = "critical"
  } else if ((active === "inicio" && !enFundae) || (active === "fin" && !inicioCom)) {
    stateText = "Bloqueado"
    stateTone = "neutral"
  } else {
    stateText = "Comunicable"
    stateTone = "positive"
  }

  // Avisos para el BANNER: todos menos el del módulo (ese vive en "Bonificación"
  // como "No bonificable", para no duplicar la cifra).
  const bannerIssues = issues.filter((c) => !/módulo/i.test(c.text))

  // Línea de apoyo (secundaria) de la banda de decisión: SOLO el plazo /
  // confirmación. El desglose de costes vive en la sección Costes (abajo), no
  // se duplica aquí.
  const decisionMeta = activeDeadline
    ? `Plazo para comunicar · ${deadlineNum}`
    : doneDate
      ? `${doneDate.label} ${doneDate.value}`
      : ""

  // ── Confirmación ──
  const checks = confirm === "inicio" ? inicioChecks : confirm === "fin" ? finChecks : []
  const canSend = checks.length > 0 && checks[0]!.ok
  const risk = checks.some((c) => c.warn)
  const gated = canSend && risk && !ack
  const confExceso = confirm === "fin" ? exceso : 0

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      {toast && <F0Alert variant="positive" title={toast} description="" />}

      {/* Barra de contexto (ref Edit Attributes): selector de grupo full-width
          + divisor inferior. */}
      {classes.length > 1 && (
        <F0Box display="flex" borderBottom="default" borderColor="secondary" paddingBottom="lg">
          <F0Box width="80" maxWidth="full">
            <F0Select
              label="Grupo formativo"
              value={classId}
              options={classes.map((c) => ({ value: c.id, label: c.name }))}
              showSearchBox={classes.length > 5}
              onChange={selectClass}
            />
          </F0Box>
        </F0Box>
      )}

      {/* Nav LATERAL: rail (pasos arriba + DECISIÓN abajo) · divisor vertical ·
          CONTENIDO (datos, sin caja). El rail va "dividido en dos". */}
      <F0Box display="flex" alignItems="stretch" gap="2xl">
        <F0Box display="flex" flexDirection="column" width="72" shrink={false}>
          {/* Stepper VERTICAL: círculo nº/check + título + subtítulo + línea
              conectora, estados done/activo/pendiente, pastilla en el activo. */}
          <F0Box display="flex" flexDirection="column">
            {steps.map((s, i) => {
              const sel = s.key === active
              const last = i === steps.length - 1
              return (
                <F0Box
                  key={s.key}
                  role="button"
                  tabIndex={0}
                  aria-current={sel}
                  onClick={() => goPhase(s.key)}
                  display="flex"
                  gap="md"
                  alignItems="stretch"
                >
                  <F0Box display="flex" flexDirection="column" alignItems="center" shrink={false}>
                    <F0Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="7"
                      height="7"
                      borderRadius="full"
                      shrink={false}
                      background={s.done ? "positive-bold" : sel ? "info-bold" : "transparent"}
                      border={!s.done && !sel ? "default" : undefined}
                      borderColor={!s.done && !sel ? "secondary" : undefined}
                    >
                      <F0Text variant={s.done || sel ? "inverse" : "body"} content={s.done ? "✓" : String(s.n)} />
                    </F0Box>
                    {!last && (
                      <F0Box grow minHeight="8" marginY="xs" borderLeft="default" borderColor={s.done ? "positive-bold" : "secondary"} />
                    )}
                  </F0Box>
                  <div className={"mb-1 flex flex-1 flex-col gap-0.5 rounded-lg px-3 py-2 " + (sel ? "bg-f1-background-secondary" : "")}>
                    <span className={"text-sm text-f1-foreground " + (sel ? "font-semibold" : "font-medium")}>{s.label}</span>
                    <span className="text-sm text-f1-foreground-secondary">{s.desc}</span>
                  </div>
                </F0Box>
              )
            })}
          </F0Box>

        </F0Box>

        {/* divisor vertical (sin cajas) */}
        <F0Box shrink={false} borderLeft="default" borderColor="secondary" />

        {/* CONTENIDO: DECISIÓN (banda horizontal arriba) + DATOS del paso. */}
        <F0Box grow minWidth="0" display="flex" flexDirection="column" gap="2xl">
          {/* DECISIÓN — primera sección, en HORIZONTAL: KPIs en fila + CTA a la
              derecha, avisos debajo. */}
          {!isEditing && (
            <F0Box display="flex" flexDirection="column" gap="lg" borderBottom="default" borderColor="secondary" paddingBottom="2xl">
              <F0Box display="flex" alignItems="start" justifyContent="between" gap="xl">
                {/* SÍNTESIS en ORDEN de lectura: 1) ¿puedo? (Estado, lead) →
                    2) ¿cuánto? (Recuperable) → 3) ¿cuándo? (Plazo). */}
                <F0Box display="flex" flexDirection="column" gap="md">
                  <div className="flex items-center gap-2">
                    <span className={"h-2.5 w-2.5 shrink-0 rounded-full " + (TONE_DOT[stateTone] ?? TONE_DOT.neutral)} />
                    <span className={"text-lg font-semibold " + (TONE_TEXT[stateTone] ?? TONE_TEXT.neutral)}>{stateText}</span>
                  </div>
                  {showBreakdown && (
                    <F0Box display="flex" flexDirection="column" gap="xs">
                      <F0Text variant="small" content="Recuperable" />
                      <F0Heading as="h3" variant="heading" content={eur(recuperable)} />
                    </F0Box>
                  )}
                  {decisionMeta && <F0Text variant="small" content={decisionMeta} />}
                </F0Box>
                {(action || secondary.length > 0) && (
                  <F0Box display="flex" alignItems="center" gap="sm" shrink={false}>
                    {secondary.map((a) => (
                      <F0Button key={a.label} label={a.label} variant="outline" size="md" onClick={a.onClick} />
                    ))}
                    {action && (
                      <F0Button label={action.label} variant="default" size="md" disabled={action.disabled} onClick={action.onClick} />
                    )}
                  </F0Box>
                )}
              </F0Box>
              {bannerIssues.length > 0 && (
                <F0Box display="flex" flexDirection="column" gap="sm">
                  {bannerIssues.map((c, i) => (
                    <F0Alert key={i} variant={c.warn ? "warning" : "critical"} title={c.text} description={c.advice ?? ""} />
                  ))}
                </F0Box>
              )}
              {(actionHint || stepNote) && (
                <F0Box display="flex" flexDirection="column" gap="xs">
                  {actionHint && <F0Text variant="small" content={actionHint} />}
                  {stepNote && <F0Text variant="small" content={stepNote} />}
                </F0Box>
              )}
            </F0Box>
          )}

          {/* DATOS del paso */}
          <F0Box display="flex" flexDirection="column" gap="lg">
            <F0Box display="flex" alignItems="center" justifyContent="between" gap="md" minHeight="12">
              <F0Heading as="h3" variant="heading" content="Datos del grupo" />
              {!isEditing && onEdit && (
                <F0Button label="Editar datos" variant="outline" onClick={onEdit} />
              )}
            </F0Box>
            {mainBody}
          </F0Box>
        </F0Box>
      </F0Box>

      {confirm && (
        <F0Dialog
          isOpen={!!confirm}
          onClose={() => setConfirm(null)}
          width="md"
          title={confirm === "inicio" ? "Comunicar inicio a FUNDAE" : "Comunicar fin a FUNDAE"}
          description={confirm === "inicio" ? `Grupo ${cls.name} · inicio ${inicio.fechaInicio}` : `Grupo ${cls.name} · recuperas ${eur(maxBonif)} de ${eur(totalCostes)}`}
          primaryAction={{
            label: !canSend ? "Faltan datos" : gated ? "Marca la casilla" : confExceso > 0 ? `Comunicar y asumir ${eur(confExceso)}` : risk ? "Comunicar igualmente" : "Comunicar",
            disabled: !canSend || gated,
            onClick: () => { if (canSend && !gated) (confirm === "inicio" ? comunicarInicio() : comunicarFin()) },
          }}
          secondaryAction={{ label: "Cancelar", onClick: () => setConfirm(null) }}
        >
          <F0Box display="flex" flexDirection="column" gap="md">
            {checks.map((c, i) =>
              c.ok ? (
                <F0Box key={i} display="flex" alignItems="center" gap="sm">
                  <F0TagStatus text="OK" variant="positive" />
                  <F0Text variant="body" content={c.text} />
                </F0Box>
              ) : (
                <F0Alert key={i} variant={c.warn ? "warning" : "critical"} title={c.text} description={c.advice ?? ""} />
              )
            )}
            {canSend && risk && (
              <F0Checkbox
                title={confExceso > 0 ? `Asumo ${eur(confExceso)} de sobrecoste que FUNDAE no bonifica y quiero comunicar igualmente.` : "Entiendo que este grupo puede no bonificarse y quiero comunicarlo igualmente."}
                checked={ack}
                onCheckedChange={setAck}
              />
            )}
          </F0Box>
        </F0Dialog>
      )}
    </F0Box>
  )
}

export function FundaeFlow({ training }: { training: Training }) {
  const [af, setAf] = useState<AccionFormativaState>(() => buildInitialAccionFormativa(training))

  if (!training.fundaeSubsidized) {
    return <F0Box padding="sm"><F0Alert variant="warning" title="Formación no bonificable por FUNDAE" description="Actívala en los ajustes del training para gestionar grupos formativos." /></F0Box>
  }
  if (training.classes.length === 0) {
    return <F0Box padding="sm"><F0Alert variant="info" title="Sin grupos formativos" description="Crea un grupo para empezar el ciclo FUNDAE." /></F0Box>
  }
  return <Flow training={training} af={af} setAf={setAf} />
}
