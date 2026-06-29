import {
  F0Alert,
  F0Box,
  F0Button,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Download, InfoCircleLine } from "@factorialco/f0-react/icons/app"
import { Input, NumberInput, Textarea, Tooltip } from "@factorialco/f0-react/dist/experimental"
import { createContext, Fragment, useContext, useMemo, useState } from "react"

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
  modalidadTieneOnline,
  modalidadTienePresencial,
  PERFIL_OPTIONS,
  TIPO_DOCUMENTO_CENTRO_OPTIONS,
  type FinGrupoData,
  type InicioGrupoData,
  type Modalidad,
  type PerfilFundae,
  type TipoDocumentoCentro,
} from "./fundaeTypes"

type Phase = "alta" | "inicio" | "fin"
type Tone = "neutral" | "info" | "positive" | "warning" | "critical"

const eur = (n: number) =>
  n.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0, useGrouping: true })

const MODULO: Record<string, number> = { presencial: 13, teleformacion: 7.5, mixta: 11 }
const moduloHora = (m: string) => MODULO[m] ?? 13

// Color del nº del paso (header) según su estado, cuando aún no está hecho.
const STEP_TONE_TEXT: Record<string, string> = {
  info: "text-f1-foreground-info",
  warning: "text-f1-foreground-warning",
  critical: "text-f1-foreground-critical",
  positive: "text-f1-foreground-positive",
  neutral: "text-f1-foreground",
}

// Campos OBLIGATORIOS para FUNDAE por paso (esquema oficial): si falta alguno,
// no se debe generar el fichero. Devuelve la lista de los que faltan.
function requiredMissing(
  phase: Phase,
  af: AccionFormativaState,
  inicio: InicioGrupoData,
  fin: FinGrupoData
): string[] {
  const m: string[] = []
  if (phase === "alta") {
    if (!af.codigoFundae) m.push("Código FUNDAE")
    if (!af.horas) m.push("Duración")
    if (!af.modalidad) m.push("Modalidad")
    if (!af.perfil) m.push("Perfil FUNDAE")
  } else if (phase === "inicio") {
    if (!inicio.idGrupo) m.push("Código de grupo")
    if (!inicio.descripcion) m.push("Descripción")
    if (!inicio.fechaInicio) m.push("Fecha de inicio")
    if (!inicio.fechaFin) m.push("Fecha fin prevista")
    if (!inicio.responsable) m.push("Responsable")
    if (!inicio.telefonoContacto) m.push("Teléfono de contacto")
    if (!inicio.centro?.localidad) m.push("Localidad del centro")
    if (!inicio.centro?.codPostal) m.push("Código postal del centro")
    inicio.tutores?.forEach((t, i) => {
      if (!t.correoElectronico) m.push(`Correo del tutor ${i + 1}`)
      if (!t.documento) m.push(`NIF del tutor ${i + 1}`)
    })
  } else {
    if (!fin.fechaFinReal) m.push("Fecha de fin real")
    if (!fin.costesDirectos) m.push("Costes directos")
    if (!fin.costesIndirectos) m.push("Costes indirectos")
    if (!fin.costesSalariales) m.push("Costes salariales")
  }
  return m
}

// Fechas siempre en numérico DD/MM/AAAA (misma lógica en los 3 pasos).
function padDateStr(s: string): string {
  const p = s.split("/")
  if (p.length !== 3) return s
  return `${p[0].padStart(2, "0")}/${p[1].padStart(2, "0")}/${p[2]}`
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

// ── Piezas de FORM (siempre editables, patrón f0: label + hint + input) ─────

// Mensaje de validación f0 para un obligatorio sin rellenar (error, rojo).
const REQUIRED_ERROR = "Obligatorio para FUNDAE"

// El error rojo de "obligatorio" solo se muestra cuando se ha intentado exportar
// el paso (validación al enviar, patrón f0), no de entrada.
const ValidateCtx = createContext(false)

// Etiqueta de campo común (estilo Invoice): label + ⓘ con tooltip f0 para la
// ayuda, en vez de una línea gris fija debajo del campo.
function Labeled({
  label,
  hint,
  required,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Box display="flex" alignItems="center" gap="xs">
        <F0Text variant="label" content={required ? `${label} *` : label} />
        {hint && (
          <Tooltip label={hint}>
            <span className="inline-flex cursor-help text-f1-foreground-secondary">
              <InfoCircleLine className="h-3.5 w-3.5" />
            </span>
          </Tooltip>
        )}
      </F0Box>
      {children}
    </F0Box>
  )
}

function EditField({
  label,
  hint,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string
  hint?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  placeholder?: string
}) {
  const validate = useContext(ValidateCtx)
  return (
    <Labeled label={label} hint={hint} required={required}>
      <Input
        label={label}
        hideLabel
        placeholder={placeholder}
        value={value}
        required={required}
        error={validate && required && !value ? REQUIRED_ERROR : undefined}
        onChange={(v) => onChange(v ?? "")}
      />
    </Labeled>
  )
}

function NumField({
  label,
  hint,
  value,
  onChange,
  required,
  units,
}: {
  label: string
  hint?: string
  value: number | null
  onChange: (v: number | null) => void
  required?: boolean
  units?: string
}) {
  const validate = useContext(ValidateCtx)
  return (
    <Labeled label={label} hint={hint} required={required}>
      <NumberInput
        label={label}
        hideLabel
        locale="es-ES"
        value={value}
        required={required}
        units={units}
        error={validate && required && !value ? REQUIRED_ERROR : undefined}
        onChange={onChange}
      />
    </Labeled>
  )
}

// Select NATIVO estilado para imitar al input f0 (label + hint arriba, caja con
// chevron). F0Select NO se puede usar: al abrirlo entra en bucle ("Maximum
// update depth exceeded") y tira toda la página. Verificado en este build.
function SelectField({
  label,
  hint,
  value,
  options,
  onChange,
  required,
}: {
  label: string
  hint?: string
  value: string
  options: ReadonlyArray<{ value: string; label: string }>
  onChange: (v: string) => void
  required?: boolean
}) {
  const validate = useContext(ValidateCtx)
  const missing = validate && required && !value
  return (
    <Labeled label={label} hint={hint} required={required}>
      <div
        className={
          "relative inline-flex h-9 w-full items-center rounded border border-solid bg-f1-background transition-colors " +
          (missing
            ? "border-f1-border-critical"
            : "border-f1-border hover:border-f1-border-hover")
        }
      >
        <select
          aria-label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-full w-full cursor-pointer appearance-none bg-transparent pl-3 pr-8 text-sm text-f1-foreground focus:outline-none"
        >
          {!value && <option value="">Selecciona…</option>}
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
      {missing && (
        <span className="text-xs text-f1-foreground-critical">{REQUIRED_ERROR}</span>
      )}
    </Labeled>
  )
}

function Section({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" alignItems="center" justifyContent="between" gap="md">
        <F0Heading as="h2" variant="heading" content={title} />
        {action}
      </F0Box>
      {children}
    </F0Box>
  )
}

type Step = { key: Phase; n: number; label: string; desc: string; done: boolean; tone: Tone; status: string }

// ═══════════════════════════════════════════════════════════════════════

function Flow({ training, af, setAf }: { training: Training; af: AccionFormativaState; setAf: (s: AccionFormativaState) => void }) {
  const classes = training.classes
  const groupOptions = useMemo(() => classes.map((c) => ({ value: c.id, label: c.name })), [classes])
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
          if (mod === 1) return [c.id, {}] // aún por exportar el inicio
          if (mod === 2) return [c.id, { inicioAt, finAt: inicioAt }] // ciclo completo
          return [c.id, inicioAt ? { inicioAt } : {}] // en fase Fin (inicio hecho)
        })
      )
  )

  const enFundae = af.enFundae
  const initCom = comBy[classId] ?? {}
  const [active, setActive] = useState<Phase>(!enFundae ? "alta" : !initCom.inicioAt ? "inicio" : "fin")
  const [toast, setToast] = useState<string | null>(null)
  // Pasos (por grupo) en los que ya se ha intentado exportar → se muestran los
  // errores de obligatorios. Antes de intentar, solo el asterisco.
  const [validatedSteps, setValidatedSteps] = useState<Record<string, boolean>>({})

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
  const patchInicio = <K extends keyof InicioGrupoData>(k: K, v: InicioGrupoData[K]) => setInicio({ ...inicio, [k]: v })
  const patchTutor = (id: string, patch: Partial<InicioGrupoData["tutores"][number]>) =>
    patchInicio("tutores", inicio.tutores.map((x) => (x.id === id ? { ...x, ...patch } : x)))
  const patchFin = (k: keyof FinGrupoData, v: string) => setFin({ ...fin, [k]: v })
  const patchAf = <K extends keyof AccionFormativaState>(k: K, v: AccionFormativaState[K]) => setAf({ ...af, [k]: v })

  const stamp = () => new Date().toLocaleDateString("es-ES")
  const goPhase = (p: Phase) => { setToast(null); setActive(p) }
  const selectClass = (id: string) => { setClassId(id); setToast(null); const c = comBy[id] ?? {}; setActive(!enFundae ? "alta" : !c.inicioAt ? "inicio" : "fin") }

  const totalCostes = Number(fin.costesDirectos || 0) + Number(fin.costesIndirectos || 0) + Number(fin.costesSalariales || 0)
  const horas = inicio.horario.horaTotales
  const rate = moduloHora(af.modalidad)
  const maxBonif = horas ? rate * horas * aptos : 0
  const exceso = totalCostes > maxBonif ? totalCostes - maxBonif : 0
  const recuperable = Math.min(totalCostes, maxBonif)
  const noAptos = totalParts - aptos

  type Check = { ok: boolean; warn?: boolean; text: string; advice?: string }
  const inicioChecks: Check[] = []
  {
    const datosOk = !!(inicio.idGrupo && inicio.fechaInicio && inicio.fechaFin && inicio.responsable)
    inicioChecks.push(datosOk ? { ok: true, text: "Datos del grupo completos." } : { ok: false, text: "Faltan datos obligatorios del grupo." })
    if (inicioDl) inicioChecks.push(inicioDl.level === "expired" ? { ok: false, warn: true, text: `El plazo venció el ${inicioDl.formattedDeadline}.`, advice: "Puedes exportar igualmente, pero FUNDAE puede no bonificar." } : { ok: true, text: `En plazo hasta el ${inicioDl.formattedDeadline}.` })
  }
  const finChecks: Check[] = []
  {
    const datosOk = !!(fin.fechaFinReal && fin.costesDirectos && fin.costesIndirectos && fin.costesSalariales)
    finChecks.push(datosOk ? { ok: true, text: "Fecha de fin y costes informados." } : { ok: false, text: "Faltan fecha de fin o algún coste." })
    if (noAptos > 0) finChecks.push({ ok: false, warn: true, text: `${noAptos} ${noAptos === 1 ? "participante no llega" : "participantes no llegan"} al 75% de asistencia`, advice: `Se bonifican ${aptos} de ${totalParts}.` })
    if (exceso > 0) finChecks.push({ ok: false, warn: true, text: `${eur(exceso)} por encima del módulo bonificable`, advice: `FUNDAE solo bonifica hasta ${eur(maxBonif)}.` })
    else finChecks.push({ ok: true, text: `Costes dentro del módulo bonificable (${eur(maxBonif)}).` })
    if (finDl) finChecks.push(finDl.level === "expired" ? { ok: false, warn: true, text: `El plazo venció el ${finDl.formattedDeadline}.`, advice: "Puedes exportar igualmente, pero FUNDAE puede no bonificar." } : { ok: true, text: `En plazo hasta el ${finDl.formattedDeadline}.` })
  }
  const inicioRisk = inicioChecks.some((c) => c.warn)
  const finRisk = finChecks.some((c) => c.warn)

  const steps: Step[] = [
    { key: "alta", n: 1, label: "Acción formativa", desc: "Da de alta el curso en FUNDAE", done: enFundae, tone: enFundae ? "positive" : "neutral", status: enFundae ? "Dada de alta" : "Pendiente" },
    { key: "inicio", n: 2, label: "Inicio del grupo", desc: "Genera el XML de inicio del grupo", done: inicioCom, tone: inicioCom ? (inicioRisk ? "warning" : "positive") : deadlineTone(inicioDl) === "neutral" ? "info" : deadlineTone(inicioDl), status: inicioCom ? (inicioRisk ? "Exportado · en riesgo" : "Exportado") : "Por exportar" },
    { key: "fin", n: 3, label: "Fin del grupo", desc: "Costes y resultado de participantes", done: finCom, tone: finCom ? (finRisk ? "warning" : "positive") : !inicioCom ? "neutral" : "info", status: finCom ? (finRisk ? "Exportado · en riesgo" : "Exportado") : !inicioCom ? "Pendiente" : "Por exportar" },
  ]

  // ── Cuerpo del paso activo: SIEMPRE editable (no hay modo edición) ──
  const leftTitle = active === "alta" ? "Acción formativa" : active === "inicio" ? "Datos del grupo" : "Cierre del grupo"
  const leftDesc =
    active === "alta"
      ? "Información de la acción formativa que se da de alta en FUNDAE."
      : active === "inicio"
        ? "Datos del grupo que se envían al exportar el XML de inicio."
        : "Costes y resultado que se envían al exportar el XML de finalización."
  let doneDate: { label: string; value: string } | undefined
  let mainBody: React.ReactNode = null

  if (active === "alta") {
    if (enFundae && af.fechaAlta) doneDate = { label: "Exportado el", value: padDateStr(af.fechaAlta) }
    mainBody = (
      <F0Box display="flex" flexDirection="column" gap="3xl">
        <F0Box display="flex" flexDirection="column" gap="lg">
          <EditField label="Denominación" value={af.nombre} onChange={(v) => patchAf("nombre", v)} />
          <F0Box display="grid" columns="3" gap="lg" alignItems="start">
            <EditField label="Código FUNDAE" hint="Código de la acción en FUNDAE" value={af.codigoFundae ?? ""} required onChange={(v) => patchAf("codigoFundae", v)} />
            <NumField label="Duración" units="h" required value={af.horas ?? null} onChange={(v) => patchAf("horas", v ?? 0)} />
            <SelectField label="Modalidad" required value={af.modalidad} options={MODALIDAD_OPTIONS} onChange={(v) => patchAf("modalidad", v as Modalidad)} />
          </F0Box>
          <F0Box maxWidth="96">
            <SelectField label="Perfil FUNDAE" hint="Perfil del destinatario de la formación" required value={af.perfil} options={PERFIL_OPTIONS} onChange={(v) => patchAf("perfil", v as PerfilFundae)} />
          </F0Box>
        </F0Box>
        {modalidadTieneOnline(af.modalidad) && (
          <Section title="Plataforma de teleformación">
            <F0Box display="grid" columns="2" gap="lg" alignItems="start">
              <EditField label="CIF de la plataforma" required value={af.plataforma.cif} onChange={(v) => patchAf("plataforma", { ...af.plataforma, cif: v })} />
              <EditField label="Razón social" required value={af.plataforma.razonSocial} onChange={(v) => patchAf("plataforma", { ...af.plataforma, razonSocial: v })} />
            </F0Box>
            <EditField label="URL de acceso" hint="Dirección de la plataforma/aula virtual" required value={af.plataforma.url} onChange={(v) => patchAf("plataforma", { ...af.plataforma, url: v })} />
            <F0Box display="grid" columns="2" gap="lg" alignItems="start">
              <EditField label="Usuario" required value={af.plataforma.usuario} onChange={(v) => patchAf("plataforma", { ...af.plataforma, usuario: v })} />
              <EditField label="Contraseña" required value={af.plataforma.password} onChange={(v) => patchAf("plataforma", { ...af.plataforma, password: v })} />
            </F0Box>
          </Section>
        )}
        <Section title="Objetivos">
          <Textarea label="Objetivos" hideLabel rows={3} value={af.objetivos} onChange={(v) => patchAf("objetivos", v ?? "")} />
        </Section>
        <Section title="Contenidos">
          <Textarea label="Contenidos" hideLabel rows={3} value={af.contenidos} onChange={(v) => patchAf("contenidos", v ?? "")} />
        </Section>
      </F0Box>
    )
  } else if (active === "inicio") {
    if (inicioCom) doneDate = { label: "Exportado el", value: padDateStr(com.inicioAt ?? "") }
    mainBody = (
      <F0Box display="flex" flexDirection="column" gap="3xl">
        <F0Box display="flex" flexDirection="column" gap="lg">
          <F0Box display="grid" columns="2" gap="lg" alignItems="start">
            <EditField label="Código acción formativa" hint="Código interno del curso" value={inicio.idAccion} onChange={(v) => patchInicio("idAccion", v)} />
            <EditField label="Código de grupo" hint="Código interno del grupo formativo" value={inicio.idGrupo} required onChange={(v) => patchInicio("idGrupo", v)} />
          </F0Box>
          <EditField label="Descripción" value={inicio.descripcion} required onChange={(v) => patchInicio("descripcion", v)} />
          <F0Box display="grid" columns="3" gap="lg" alignItems="start">
            <EditField label="Fecha de inicio" placeholder="DD/MM/AAAA" value={inicio.fechaInicio} required onChange={(v) => patchInicio("fechaInicio", v)} />
            <EditField label="Fecha fin prevista" placeholder="DD/MM/AAAA" value={inicio.fechaFin} required onChange={(v) => patchInicio("fechaFin", v)} />
            <NumField label="Nº participantes" value={inicio.numeroParticipantes ?? null} onChange={(v) => patchInicio("numeroParticipantes", v)} />
          </F0Box>
          <F0Box display="grid" columns="2" gap="lg" alignItems="start">
            <EditField label="Responsable" value={inicio.responsable} required onChange={(v) => patchInicio("responsable", v)} />
            <EditField label="Teléfono" value={inicio.telefonoContacto} required onChange={(v) => patchInicio("telefonoContacto", v)} />
          </F0Box>
        </F0Box>
        {modalidadTienePresencial(af.modalidad) && (
          <Section title="Centro proveedor">
            <EditField label="Nombre del centro" value={inicio.centro.nombreCentro} onChange={(v) => patchInicio("centro", { ...inicio.centro, nombreCentro: v })} />
            <F0Box display="grid" columns="2" gap="lg" alignItems="start">
              <SelectField label="Tipo de documento" value={inicio.centro.tipoDocumentoCentro} options={TIPO_DOCUMENTO_CENTRO_OPTIONS} onChange={(v) => patchInicio("centro", { ...inicio.centro, tipoDocumentoCentro: v as TipoDocumentoCentro })} />
              <EditField label="Documento" value={inicio.centro.documentoCentro} onChange={(v) => patchInicio("centro", { ...inicio.centro, documentoCentro: v })} />
            </F0Box>
            <EditField label="Dirección" value={inicio.centro.direccionDetallada} onChange={(v) => patchInicio("centro", { ...inicio.centro, direccionDetallada: v })} />
            <F0Box display="grid" columns="2" gap="lg" alignItems="start">
              <EditField label="Localidad" value={inicio.centro.localidad} required onChange={(v) => patchInicio("centro", { ...inicio.centro, localidad: v })} />
              <EditField label="Código postal" value={inicio.centro.codPostal} required onChange={(v) => patchInicio("centro", { ...inicio.centro, codPostal: v })} />
            </F0Box>
          </Section>
        )}
        <Section title="Horario">
          <F0Box maxWidth="64">
            <NumField label="Horas totales" units="h" value={inicio.horario.horaTotales || null} onChange={(v) => patchInicio("horario", { ...inicio.horario, horaTotales: v ?? 0 })} />
          </F0Box>
        </Section>
        <Section title={`Tutores (${inicio.tutores.length})`}>
          {inicio.tutores.map((t, i) => (
            <F0Box key={t.id} display="flex" flexDirection="column" gap="sm">
              <F0Text variant="label" content={`Tutor ${i + 1} · ${t.nombre} ${t.apellido1}`} />
              <F0Box display="grid" columns="2" gap="lg" alignItems="start">
                <SelectField label="Tipo de documento" value={t.tipoDocumento} options={TIPO_DOCUMENTO_CENTRO_OPTIONS} onChange={(v) => patchTutor(t.id, { tipoDocumento: v as TipoDocumentoCentro })} />
                <EditField label="NIF" required value={t.documento ?? ""} onChange={(v) => patchTutor(t.id, { documento: v })} />
                <EditField label="Correo" required value={t.correoElectronico ?? ""} onChange={(v) => patchTutor(t.id, { correoElectronico: v })} />
                <NumField label="Nº de horas" units="h" required value={t.numeroHoras} onChange={(v) => patchTutor(t.id, { numeroHoras: v })} />
              </F0Box>
            </F0Box>
          ))}
        </Section>
      </F0Box>
    )
  } else {
    if (finCom) doneDate = { label: "Exportado el", value: padDateStr(com.finAt ?? "") }
    const numFin = (k: keyof FinGrupoData) => (fin[k] ? Number(fin[k]) : null)
    mainBody = (
      <F0Box display="flex" flexDirection="column" gap="3xl">
        <F0Box maxWidth="64">
          <EditField label="Fecha de fin real" placeholder="DD/MM/AAAA" value={fin.fechaFinReal} required onChange={(v) => patchFin("fechaFinReal", v)} />
        </F0Box>
        <Section title="Costes">
          <F0Box display="grid" columns="3" gap="lg" alignItems="start">
            <NumField label="Directos" units="EUR" required value={numFin("costesDirectos")} onChange={(v) => patchFin("costesDirectos", v == null ? "" : String(v))} />
            <NumField label="Indirectos" units="EUR" required value={numFin("costesIndirectos")} onChange={(v) => patchFin("costesIndirectos", v == null ? "" : String(v))} />
            <NumField label="Salariales" units="EUR" required value={numFin("costesSalariales")} onChange={(v) => patchFin("costesSalariales", v == null ? "" : String(v))} />
          </F0Box>
        </Section>

        <F0Box borderTop="default" borderColor="secondary" />

        <FundaeParticipantsTable
          trainingId={training.id}
          trainingClass={cls}
          numParticipantesPrevistos={inicio.numeroParticipantes}
        />
      </F0Box>
    )
  }

  // Plazo del paso activo (cuando aún está por exportar).
  const activeDeadline: DeadlineInfo | null =
    active === "inicio" && !inicioCom
      ? inicioDl
      : active === "fin" && !finCom
        ? finDl
        : null
  const numDate = (d: Date) => `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`
  const finRealNum = fin.fechaFinReal ? padDateStr(fin.fechaFinReal) : ""
  const deadlineNum = activeDeadline ? numDate(activeDeadline.deadlineDate) : ""

  // ── Validación + estado del paso ──
  const activeChecks: Check[] = active === "inicio" ? inicioChecks : active === "fin" ? finChecks : []
  const activeCom = active === "inicio" ? inicioCom : active === "fin" ? finCom : enFundae
  const datosOk = activeChecks.length === 0 ? true : activeChecks[0]!.ok
  const issues = activeChecks.filter((c) => !c.ok)

  // Campos obligatorios FUNDAE que faltan: si hay alguno, no se puede exportar.
  const missing = requiredMissing(active, af, inicio, fin)
  const blocked = missing.length > 0
  const validateKey = `${active}-${cls.id}`
  const showErrors = !!validatedSteps[validateKey]

  // Prerrequisito de orden: no se exporta inicio sin alta, ni fin sin inicio.
  let prereq: string | null = null
  if (active === "inicio" && !enFundae) prereq = "Primero da de alta la acción formativa."
  if (active === "fin" && !inicioCom) prereq = "Primero exporta el inicio del grupo."
  // Solo el prerrequisito de orden deshabilita. Si faltan datos, el botón se
  // pulsa igual y entonces se marcan los obligatorios (validación al enviar).
  const exportDisabled = !!prereq

  const showBreakdown = active === "fin" && datosOk

  // Estado real del paso.
  let stateText: string
  let stateTone: Tone
  if (activeCom) {
    stateText = "Exportado"
    stateTone = "positive"
  } else if (prereq) {
    stateText = "Bloqueado"
    stateTone = "neutral"
  } else if (blocked && showErrors) {
    stateText = `Faltan ${missing.length} ${missing.length === 1 ? "dato" : "datos"}`
    stateTone = "critical"
  } else if (blocked) {
    stateText = "Por completar"
    stateTone = "neutral"
  } else {
    stateText = "Listo para exportar"
    stateTone = "info"
  }

  // Banner = SOLO avisos reales de asistencia/75% (lo demás vive en su sección).
  const bannerIssues = activeCom ? [] : issues.filter((c) => /asistencia|75%/i.test(c.text))

  // Acción de exportar: marca el paso como hecho al exportar con éxito.
  const doExport = (fmt: string) => {
    // Validación al enviar: si faltan obligatorios, se marcan (en rojo) y no exporta.
    if (blocked) {
      setValidatedSteps((v) => ({ ...v, [validateKey]: true }))
      setToast("Faltan datos obligatorios para exportar — revísalos abajo.")
      return
    }
    if (active === "alta") setAf({ ...af, enFundae: true, codigoFundae: af.codigoFundae ?? "00142", fechaAlta: stamp() })
    else if (active === "inicio") setComBy((p) => ({ ...p, [cls.id]: { ...p[cls.id], inicioAt: stamp() } }))
    else setComBy((p) => ({ ...p, [cls.id]: { ...p[cls.id], finAt: stamp() } }))
    setToast(
      fmt === "XML"
        ? "XML exportado. Paso marcado como hecho — súbelo a la web de FUNDAE."
        : `Exportado a ${fmt}.`
    )
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      {toast && <F0Alert variant="positive" title={toast} description="" />}

      {/* Selector de grupo + STEPPER compacto: círculos numerados unidos por
          una línea (= flujo de pasos), no pestañas. Sin pista de pills. */}
      <div className="flex w-full items-center gap-3">
        {classes.length > 1 && (
          <>
            <div className="relative inline-flex h-8 shrink-0 items-center rounded border border-solid border-f1-border bg-f1-background transition-colors hover:border-f1-border-hover">
              <select
                aria-label="Grupo formativo"
                value={classId}
                onChange={(e) => selectClass(e.target.value)}
                className="h-full cursor-pointer appearance-none bg-transparent pl-3 pr-8 text-sm text-f1-foreground focus:outline-none"
              >
                {groupOptions.map((o) => (
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
            <div className="h-6 w-px shrink-0 bg-f1-border" />
          </>
        )}
        <div className="flex flex-1 items-center">
          {steps.map((s, i) => {
            const sel = s.key === active
            const prevDone = i > 0 && !!steps[i - 1]?.done
            return (
              <Fragment key={s.key}>
                {i > 0 && (
                  <div
                    className={
                      "mx-2 h-px flex-1 " +
                      (prevDone ? "bg-f1-background-positive-bold" : "bg-f1-border")
                    }
                  />
                )}
                <button
                  type="button"
                  onClick={() => goPhase(s.key)}
                  className="flex shrink-0 items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-f1-background-hover"
                >
                  <span
                    className={
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium " +
                      (s.done
                        ? "bg-f1-background-positive text-f1-foreground-positive"
                        : sel
                          ? "bg-f1-background-info text-f1-foreground-info"
                          : "border border-solid border-f1-border " +
                            (STEP_TONE_TEXT[s.tone] ?? "text-f1-foreground-secondary"))
                    }
                  >
                    {s.done ? "✓" : s.n}
                  </span>
                  <span
                    className={
                      "whitespace-nowrap text-sm " +
                      (sel
                        ? "font-semibold text-f1-foreground"
                        : "font-medium text-f1-foreground-secondary")
                    }
                  >
                    {s.label}
                  </span>
                </button>
              </Fragment>
            )
          })}
        </div>
      </div>

      {/* Body: DATOS (izquierda, editable) + DECISIÓN (derecha, panel). Mismo
          layout en los 3 pasos (coherencia). */}
      <F0Box display="flex" width="full" gap="2xl" alignItems="start">
        <F0Box
          grow
          minWidth="0"
          display="flex"
          flexDirection="column"
          gap="lg"
          border="default"
          borderColor="secondary"
          borderRadius="lg"
          paddingX="lg"
          paddingY="lg"
        >
          <F0Box display="flex" flexDirection="column" gap="xs" borderBottom="default" borderColor="secondary" paddingBottom="md">
            <F0Heading as="h3" variant="heading" content={leftTitle} />
            <F0Text variant="description" content={leftDesc} />
          </F0Box>
          <ValidateCtx.Provider value={showErrors}>{mainBody}</ValidateCtx.Provider>
        </F0Box>

        {/* DERECHA — decisión: estado · avisos · bonificación · recuperable ·
            plazos · exportar. */}
        <F0Box
          shrink={false}
          width="80"
          display="flex"
          flexDirection="column"
          gap="xl"
          border="default"
          borderColor="secondary"
          borderRadius="lg"
          paddingX="lg"
          paddingY="xl"
        >
          {/* Estado del paso + su acción primaria, juntos, arriba del panel. */}
          <F0Box display="flex" flexDirection="column" gap="lg">
            <F0Box display="flex" alignItems="center" justifyContent="between" gap="md">
              <F0Heading as="h3" variant="heading" content="Estado" />
              <F0TagStatus text={stateText} variant={stateTone} />
            </F0Box>
            <F0Button
              label={activeCom ? "Volver a exportar" : "Exportar .XML"}
              icon={Download}
              variant={activeCom ? "outline" : "default"}
              disabled={exportDisabled}
              onClick={() => doExport("XML")}
            />
            {prereq && !blocked && <F0Text variant="small" content={prereq} />}
          </F0Box>

          {showBreakdown && (
            <F0Box display="flex" flexDirection="column" gap="sm" borderTop="default" borderColor="secondary" paddingTop="xl">
              <F0Heading as="h3" variant="heading" content="Bonificación" />
              <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
                <F0Text variant="small" content="Invertido" />
                <F0Text variant="body" content={eur(totalCostes)} />
              </F0Box>
              {exceso > 0 && (
                <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
                  <F0Text variant="small" content="No recuperable" />
                  <F0Text variant="body" content={`−${eur(exceso)}`} />
                </F0Box>
              )}
              <F0Box display="flex" justifyContent="between" alignItems="center" gap="md" borderTop="default" borderColor="secondary" paddingTop="sm">
                <F0Text variant="label" content="Recuperable" />
                <F0Text variant="label" content={eur(recuperable)} />
              </F0Box>
            </F0Box>
          )}

          {bannerIssues.length > 0 && (
            <F0Box display="flex" flexDirection="column" gap="sm">
              {bannerIssues.map((c, i) => (
                <F0Alert key={i} variant={c.warn ? "warning" : "critical"} title={c.text} description={c.advice ?? ""} />
              ))}
            </F0Box>
          )}

          {(activeDeadline || (active === "fin" && fin.fechaFinReal)) && (
            <F0Box display="flex" flexDirection="column" gap="sm" borderTop="default" borderColor="secondary" paddingTop="xl">
              <F0Heading as="h3" variant="heading" content="Plazos" />
              {active === "fin" && fin.fechaFinReal && (
                <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
                  <F0Text variant="small" content="Finalizó el" />
                  <F0Text variant="body" content={finRealNum} />
                </F0Box>
              )}
              {activeDeadline && (
                <>
                  <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
                    <F0Text variant="small" content="Plazo para exportar" />
                    <F0Text variant="body" content={deadlineNum} />
                  </F0Box>
                  <span
                    className={
                      "text-sm font-medium " +
                      STEP_TONE_TEXT[
                        activeDeadline.level === "info" ? "info" : activeDeadline.level === "warning" ? "warning" : "critical"
                      ]
                    }
                  >
                    {activeDeadline.daysRemaining < 0
                      ? "Vencido — exportar puede no bonificar"
                      : `Te quedan ${activeDeadline.daysRemaining} ${activeDeadline.daysRemaining === 1 ? "día" : "días"}`}
                  </span>
                </>
              )}
            </F0Box>
          )}

          {doneDate && (
            <F0Box display="flex" justifyContent="between" alignItems="center" gap="md" borderTop="default" borderColor="secondary" paddingTop="xl">
              <F0Text variant="small" content={doneDate.label} />
              <F0Text variant="body" content={doneDate.value} />
            </F0Box>
          )}

        </F0Box>
      </F0Box>
    </F0Box>
  )
}

export function FundaeFlowC({ training }: { training: Training }) {
  const [af, setAf] = useState<AccionFormativaState>(() => buildInitialAccionFormativa(training))

  if (!training.fundaeSubsidized) {
    return <F0Box padding="sm"><F0Alert variant="warning" title="Formación no bonificable por FUNDAE" description="Actívala en los ajustes del training para gestionar grupos formativos." /></F0Box>
  }
  if (training.classes.length === 0) {
    return <F0Box padding="sm"><F0Alert variant="info" title="Sin grupos formativos" description="Crea un grupo para empezar el ciclo FUNDAE." /></F0Box>
  }
  return <Flow training={training} af={af} setAf={setAf} />
}
