import {
  F0Alert,
  F0Box,
  F0Button,
  F0Card,
  F0Select,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Add } from "@factorialco/f0-react/icons/app"
import { useCallback, useMemo, useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

import { participantsForTraining } from "@/fixtures"
import type { Training, TrainingClass } from "@/fixtures"

import {
  AccionFormativaCard,
  buildInitialAccionFormativa,
  type AccionFormativaState,
} from "./AccionFormativaCard"
import { CollapsibleCard } from "./CollapsibleCard"
import { FinSection } from "./FinSection"
import { InicioSection } from "./InicioSection"
import { FundaeParticipantsTable } from "./ParticipantsTable"
import {
  computeFinDeadline,
  computeInicioDeadline,
  parseSpanishDate,
} from "./deadlines"
import { UnsavedChangesBanner } from "./UnsavedChangesBanner"
import {
  validateCodigo,
  validateCp,
  validateDocumento,
  validateEmail,
  validateNif,
  validateTelefono,
  type FinGrupoData,
  type InicioGrupoData,
} from "./fundaeTypes"

// Minimal internal lifecycle phase, derived from the communication
// timestamps. (Originally exported by the LifecycleHeader timeline, which
// was dropped when the layout was consolidated to the master-detail panel.)
type LifecyclePhase = "pendiente" | "comunicado_inicio" | "finalizado"

type Props = { training: Training }

// ── Default data builders ────────────────────────────────────────────────

// Prototype defaults: pre-filled with valid sample data so the flow can be
// tested without re-typing provider / tutores / etc. every time. All values
// pass the FUNDAE validators (NIF, CIF, CP, teléfono, email).
export function defaultInicio(training: Training, trainingClass: TrainingClass): InicioGrupoData {
  // Default the declared count to the actual participants in the class (same
  // filter as the fin participants table) so the initial state is consistent —
  // the inicio/fin mismatch alert only fires once the user excludes someone.
  const participantesReales = participantsForTraining(training.id).filter(
    (p) => p.classId === trainingClass.id || p.classId === null
  ).length
  // Grupo de DEMO "a medias" (cls-001b): dejamos varios obligatorios vacíos
  // para ver la validación con varios campos faltando (N>1).
  const incompleto = trainingClass.id === "cls-001b"
  return {
    idAccion: training.codigoCurso ?? "00142",
    idGrupo: incompleto ? "" : (trainingClass.fundaeConfig?.codigoGrupo ?? "0001"),
    descripcion: trainingClass.name,
    numeroParticipantes: participantesReales || trainingClass.participantCount || 12,
    fechaInicio: trainingClass.startDate
      ? new Date(trainingClass.startDate).toLocaleDateString("es-ES")
      : "01/09/2026",
    fechaFin: trainingClass.endDate
      ? new Date(trainingClass.endDate).toLocaleDateString("es-ES")
      : "30/09/2026",
    responsable: incompleto ? "" : "María González Ruiz",
    telefonoContacto: incompleto ? "" : "934567890",
    modalidad: "presencial",
    centro: {
      tipoDocumentoCentro: "10",
      documentoCentro: "B66758231",
      nombreCentro: training.externalProvider ?? "Centro de Formación Empresarial S.L.",
      direccionDetallada: "Carrer d'Aragó 182, 3º",
      codPostal: incompleto ? "" : "08011",
      localidad: "Barcelona",
    },
    lugarImparticion: {
      cif: "B66758231",
      nombreCentro: "Centro de Formación Empresarial S.L.",
      direccionDetallada: "Carrer d'Aragó 182, 3º",
      codPostal: "08011",
      localidad: "Barcelona",
    },
    lugarMismoQueCentro: true,
    horario: {
      horaTotales: training.totalDuration ?? 8,
      horaInicioTramo1: "09:00",
      horaFinTramo1: "14:00",
      horaInicioTramo2: "",
      horaFinTramo2: "",
      dias: { L: true, M: true, X: true, J: true, V: true, S: false, D: false },
    },
    tutores: [
      {
        id: "tutor-1",
        numeroHoras: training.totalDuration ?? 8,
        tipoDocumento: "10",
        documento: "12345678Z",
        nombre: "Ana",
        apellido1: "Martínez",
        apellido2: "Soler",
        telefono: "678123456",
        correoElectronico: "ana.martinez@centroformacion.es",
      },
      {
        id: "tutor-2",
        numeroHoras: training.totalDuration ?? 8,
        tipoDocumento: "10",
        documento: "87654321X",
        nombre: "Carlos",
        apellido1: "Fernández",
        apellido2: "Vidal",
        telefono: "678987654",
        correoElectronico: "carlos.fernandez@centroformacion.es",
      },
    ],
    observaciones: "",
  }
}

export function defaultFin(trainingClass: TrainingClass): FinGrupoData {
  return {
    fechaFinReal: trainingClass.endDate
      ? new Date(trainingClass.endDate).toLocaleDateString("es-ES")
      : "30/09/2026",
    costesDirectos: trainingClass.cost ?? "3200",
    costesIndirectos: trainingClass.indirectCost ?? "400",
    costesSalariales: trainingClass.salaryCost ?? "1800",
  }
}

// ── Validation ───────────────────────────────────────────────────────────

function isInicioValid(d: InicioGrupoData): boolean {
  // Group header
  if (!validateCodigo(d.idAccion)) return false
  if (!validateCodigo(d.idGrupo)) return false
  if (!d.descripcion || d.descripcion.length > 100) return false
  if (!d.numeroParticipantes) return false
  if (!d.fechaInicio || !d.fechaFin) return false
  if (!d.responsable) return false
  if (!validateTelefono(d.telefonoContacto)) return false

  // Horario
  if (!d.horario.horaTotales) return false
  const hasDay = Object.values(d.horario.dias).some(Boolean)
  if (!hasDay) return false

  // Modalidad-specific
  const needsCentro = d.modalidad === "presencial" || d.modalidad === "mixta"
  if (needsCentro) {
    const c = d.centro
    if (!validateDocumento(c.documentoCentro)) return false
    if (!c.nombreCentro || !c.direccionDetallada || !c.localidad) return false
    if (!validateCp(c.codPostal)) return false
    if (!d.lugarMismoQueCentro) {
      const l = d.lugarImparticion
      if (!l.nombreCentro || !l.direccionDetallada || !l.localidad) return false
      if (!validateCp(l.codPostal)) return false
    }
  }

  // Tutores (at least one with all required fields)
  if (d.tutores.length === 0) return false
  if (
    d.tutores.some(
      (t) =>
        !validateNif(t.documento) ||
        !t.nombre ||
        !t.apellido1 ||
        !validateTelefono(t.telefono) ||
        !validateEmail(t.correoElectronico) ||
        !t.numeroHoras
    )
  ) {
    return false
  }

  return true
}

function isFinValid(d: FinGrupoData): boolean {
  return Boolean(
    d.fechaFinReal &&
      d.costesDirectos &&
      d.costesIndirectos &&
      d.costesSalariales
  )
}

// ── Empty / disabled states ──────────────────────────────────────────────

function NoClassesState({ trainingId }: { trainingId: string }) {
  const navigate = useNavigate()
  return (
    <F0Card>
      <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
        <F0Alert
          variant="info"
          title="Sin grupos formativos"
          description="Crea un grupo para configurar el ciclo FUNDAE: comunicar inicio, asignar participantes y comunicar fin."
        />
        <F0Box>
          <F0Button
            label="Crear grupo"
            icon={Add}
            variant="default"
            onClick={() =>
              navigate(`/p/trainings?training=${trainingId}&dtab=groups`)
            }
          />
        </F0Box>
      </F0Box>
    </F0Card>
  )
}

function NotFundaeState() {
  return (
    <F0Card>
      <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
        <F0Alert
          variant="warning"
          title="Formación no bonificable por FUNDAE"
          description="Activa la opción 'Bonificado por FUNDAE' en los ajustes para gestionar grupos formativos."
        />
        <F0Text
          variant="body"
          content="Una vez activada, podrás dar de alta la acción formativa en FUNDAE y luego comunicar inicio y fin de cada grupo."
        />
      </F0Box>
    </F0Card>
  )
}

// ── Status tag helpers ───────────────────────────────────────────────────

type StatusVariant = "neutral" | "info" | "positive" | "warning" | "critical"

// Per-panel tag — reflects only what the user has done locally in Factorial,
// not the official FUNDAE state (we don't have access to it).
function tagForInicioPanel(
  phase: LifecyclePhase,
  inicioDeadline: ReturnType<typeof computeInicioDeadline>,
  outOfDeadline: boolean
): { text: string; variant: StatusVariant } {
  // No "Bloqueado": even without the prerequisite the user can prepare data.
  // The tag reflects the communication state; the prerequisite is surfaced
  // as an actionHint next to the disabled "Marcar como comunicado" button.
  if (phase !== "pendiente") {
    return outOfDeadline
      ? { text: "Comunicado · fuera de plazo", variant: "critical" }
      : { text: "Comunicado a FUNDAE", variant: "positive" }
  }
  if (inicioDeadline?.level === "expired")
    return { text: "Sin comunicar · plazo vencido", variant: "critical" }
  if (inicioDeadline?.level === "critical")
    return { text: "Sin comunicar · plazo crítico", variant: "critical" }
  if (inicioDeadline?.level === "warning")
    return { text: "Sin comunicar · plazo próximo", variant: "warning" }
  return { text: "Sin comunicar", variant: "neutral" }
}

function tagForFinPanel(
  phase: LifecyclePhase,
  finDeadline: ReturnType<typeof computeFinDeadline>,
  outOfDeadline: boolean
): { text: string; variant: StatusVariant } {
  // No "Bloqueado" (same rationale as inicio). While the inicio isn't
  // comunicado the fin still shows "Sin comunicar" and stays editable.
  if (phase === "finalizado") {
    return outOfDeadline
      ? { text: "Comunicado · fuera de plazo", variant: "critical" }
      : { text: "Comunicado a FUNDAE", variant: "positive" }
  }
  if (finDeadline?.level === "expired")
    return { text: "Sin comunicar · plazo vencido", variant: "critical" }
  if (finDeadline?.level === "critical")
    return { text: "Sin comunicar · plazo crítico", variant: "critical" }
  if (finDeadline?.level === "warning")
    return { text: "Sin comunicar · plazo próximo", variant: "warning" }
  return { text: "Sin comunicar", variant: "neutral" }
}

// ── Group lifecycle manager ──────────────────────────────────────────────

function GroupLifecycleManager({
  training,
  accionFormativa,
  setAccionFormativa,
}: {
  training: Training
  accionFormativa: AccionFormativaState
  setAccionFormativa: (s: AccionFormativaState) => void
}) {
  const accionFormativaReady = accionFormativa.enFundae

  const [selectedClassId, setSelectedClassId] = useState<string>(
    training.classes[0]?.id ?? ""
  )
  const selectedClass = useMemo(
    () => training.classes.find((c) => c.id === selectedClassId),
    [training, selectedClassId]
  )

  // Memo the options by CONTENT (not `training` identity) so F0Select gets a
  // stable `options` reference across renders — avoids needless re-builds of
  // its internal data source.
  const groupOptionsKey = training.classes
    .map((c) => `${c.id}:${c.name}`)
    .join("|")
  const groupOptions = useMemo(
    () => training.classes.map((c) => ({ value: c.id, label: c.name })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [groupOptionsKey]
  )

  // No `phase` state — the lifecycle phase is derived from the
  // communication timestamps below (single source of truth).
  const [inicioByClass, setInicioByClass] = useState<Record<string, InicioGrupoData>>(
    () =>
      Object.fromEntries(
        training.classes.map((c) => [c.id, defaultInicio(training, c)])
      )
  )
  const [finByClass, setFinByClass] = useState<Record<string, FinGrupoData>>(() =>
    Object.fromEntries(training.classes.map((c) => [c.id, defaultFin(c)]))
  )

  // Saved snapshots per class — what the user has explicitly confirmed.
  // Anything in `inicioByClass` / `finByClass` that differs is considered
  // "dirty" (unsaved changes) and shows the Smart-Surveys-style banner.
  const [savedInicioByClass, setSavedInicioByClass] = useState<
    Record<string, InicioGrupoData>
  >(() =>
    Object.fromEntries(
      training.classes.map((c) => [c.id, defaultInicio(training, c)])
    )
  )
  const [savedFinByClass, setSavedFinByClass] = useState<
    Record<string, FinGrupoData>
  >(() => Object.fromEntries(training.classes.map((c) => [c.id, defaultFin(c)])))
  // Single source of truth for the FUNDAE lifecycle.
  // Mirrors the persisted DB shape: two nullable timestamps per group.
  //
  // Default state: the acción formativa is dada de alta, so the natural next
  // step — the inicio — is shown as ALREADY comunicado (within deadline) and
  // therefore read-only. The fin stays pendiente. Reverting is an explicit
  // action ("Marcar como NO comunicado").
  const [comunicadosByClass, setComunicadosByClass] = useState<
    Record<string, { inicioAt?: string; finAt?: string }>
  >(() =>
    Object.fromEntries(
      training.classes.map((c) => {
        const dl = computeInicioDeadline(defaultInicio(training, c).fechaInicio)
        // Communicated on the deadline day → in time (not out of deadline).
        const inicioAt = dl ? dl.deadlineDate.toLocaleDateString("es-ES") : undefined
        return [c.id, inicioAt ? { inicioAt } : {}]
      })
    )
  )

  const [validateInicio, setValidateInicio] = useState(false)
  const [validateFin, setValidateFin] = useState(false)

  // Edit-mode toggles (D10): when a phase is already comunicado, "Editar
  // datos" sets this to true to allow editing the payload WITHOUT touching
  // the timestamp. Reverting the state is a separate explicit action.
  const [inicioEditingComunicado, setInicioEditingComunicado] = useState(false)
  const [finEditingComunicado, setFinEditingComunicado] = useState(false)

  // Master-detail (layout D): which step's panel is shown on the right.
  const [openPhase, setOpenPhase] = useState<"alta" | "inicio" | "fin">(
    accionFormativaReady ? "inicio" : "alta"
  )

  if (!selectedClass) return null

  const inicio = inicioByClass[selectedClass.id] ?? defaultInicio(training, selectedClass)
  const fin = finByClass[selectedClass.id] ?? defaultFin(selectedClass)
  const comunicados = comunicadosByClass[selectedClass.id] ?? {}
  const savedInicio =
    savedInicioByClass[selectedClass.id] ?? defaultInicio(training, selectedClass)
  const savedFin = savedFinByClass[selectedClass.id] ?? defaultFin(selectedClass)

  // Phase derived from timestamps — no separate state needed.
  const phase: LifecyclePhase = !comunicados.inicioAt
    ? "pendiente"
    : comunicados.finAt
      ? "finalizado"
      : "comunicado_inicio"

  // Dirty state: current data differs from the last saved snapshot.
  // Using JSON.stringify is OK here — the shapes are small and well-defined.
  const isInicioDirty =
    JSON.stringify(inicio) !== JSON.stringify(savedInicio)
  const isFinDirty = JSON.stringify(fin) !== JSON.stringify(savedFin)

  const inicioDeadline = useMemo(
    () => computeInicioDeadline(inicio.fechaInicio),
    [inicio.fechaInicio]
  )
  const finDeadline = useMemo(
    () => computeFinDeadline(inicio.fechaFin),
    [inicio.fechaFin]
  )

  const setInicio = useCallback(
    (updater: InicioGrupoData | ((prev: InicioGrupoData) => InicioGrupoData)) => {
      setInicioByClass((prev) => {
        const id = selectedClass.id
        const currentValue = prev[id] ?? defaultInicio(training, selectedClass)
        const next =
          typeof updater === "function"
            ? (updater as (p: InicioGrupoData) => InicioGrupoData)(currentValue)
            : updater
        return { ...prev, [id]: next }
      })
    },
    [selectedClass, training]
  )
  const setFin = useCallback(
    (updater: FinGrupoData | ((prev: FinGrupoData) => FinGrupoData)) => {
      setFinByClass((prev) => {
        const id = selectedClass.id
        const currentValue = prev[id] ?? defaultFin(selectedClass)
        const next =
          typeof updater === "function"
            ? (updater as (p: FinGrupoData) => FinGrupoData)(currentValue)
            : updater
        return { ...prev, [id]: next }
      })
    },
    [selectedClass]
  )

  const handleSelectClass = (id: string) => {
    // Idempotent guard: ignore re-selecting the already-active group.
    if (id === selectedClassId) return
    setSelectedClassId(id)
    setValidateInicio(false)
    setValidateFin(false)
    // Open the next pending step of the newly selected group
    const next = comunicadosByClass[id] ?? {}
    setOpenPhase(!next.inicioAt ? "inicio" : "fin")
  }

  // ── Inicio handlers ──
  //
  // Per D10: "Editar datos" does NOT touch timestamps — it only flips the
  // local edit-mode toggle so the user can modify the payload. Reverting
  // the state is an explicit, separate action ("Marcar como NO comunicado").
  //
  // Action clusters:
  //   1. Editar/Guardar/Descartar (banner)  — payload only, no state change.
  //   2. Generar XML                          — pure export, no state change.
  //   3. Marcar como comunicado / NO comunicado — declarative state change.

  const saveInicioChanges = () => {
    setSavedInicioByClass((prev) => ({
      ...prev,
      [selectedClass.id]: inicio,
    }))
    setInicioEditingComunicado(false)
  }

  const discardInicioChanges = () => {
    setInicio(savedInicio)
    setValidateInicio(false)
    setInicioEditingComunicado(false)
  }

  // Sin comunicar → Comunicado. Persist only the timestamp; "out of deadline"
  // is derived later.
  const markInicioAsComunicado = () => {
    if (!isInicioValid(inicio)) {
      setValidateInicio(true)
      return
    }
    const now = new Date().toLocaleDateString("es-ES")
    setSavedInicioByClass((prev) => ({ ...prev, [selectedClass.id]: inicio }))
    setComunicadosByClass((prev) => ({
      ...prev,
      [selectedClass.id]: { ...prev[selectedClass.id], inicioAt: now },
    }))
    setValidateInicio(false)
    setInicioEditingComunicado(false)
    // Advance to the fin step
    setOpenPhase("fin")
  }

  // Explicit revert: Comunicado → Sin comunicar (timestamp = NULL).
  // This is now the ONLY way to revert — editing does not touch the timestamp.
  const unmarkInicioComunicado = () => {
    setComunicadosByClass((prev) => ({
      ...prev,
      [selectedClass.id]: { ...prev[selectedClass.id], inicioAt: undefined },
    }))
    setInicioEditingComunicado(false)
  }

  // Pure XML export — no state change
  const generarXmlInicio = () => {
    if (!isInicioValid(inicio)) {
      setValidateInicio(true)
      return
    }
    // In production: trigger XML download
  }

  // ── Fin handlers (same D10 pattern as inicio) ──

  const saveFinChanges = () => {
    setSavedFinByClass((prev) => ({ ...prev, [selectedClass.id]: fin }))
    setFinEditingComunicado(false)
  }

  const discardFinChanges = () => {
    setFin(savedFin)
    setValidateFin(false)
    setFinEditingComunicado(false)
  }

  const markFinAsComunicado = () => {
    if (!isFinValid(fin)) {
      setValidateFin(true)
      return
    }
    const now = new Date().toLocaleDateString("es-ES")
    setSavedFinByClass((prev) => ({ ...prev, [selectedClass.id]: fin }))
    setComunicadosByClass((prev) => ({
      ...prev,
      [selectedClass.id]: { ...prev[selectedClass.id], finAt: now },
    }))
    setValidateFin(false)
    setFinEditingComunicado(false)
  }

  const unmarkFinComunicado = () => {
    setComunicadosByClass((prev) => ({
      ...prev,
      [selectedClass.id]: { ...prev[selectedClass.id], finAt: undefined },
    }))
    setFinEditingComunicado(false)
  }

  const generarXmlFin = () => {
    if (!isFinValid(fin)) {
      setValidateFin(true)
      return
    }
    // In production: trigger XML download
  }

  // "Inicio communicated" = anything that's not pendiente.
  // "Fin communicated" = finalizado.
  const inicioComunicado = phase !== "pendiente"
  const finComunicado = phase === "finalizado"

  // Derive "out of deadline" by comparing the communication timestamp
  // (when the user marked it as comunicado) with the FUNDAE deadline.
  // No need to persist this as a separate flag.
  const inicioOutOfDeadline = (() => {
    if (!comunicados.inicioAt || !inicioDeadline) return false
    const at = parseSpanishDate(comunicados.inicioAt)
    return at ? at > inicioDeadline.deadlineDate : false
  })()
  const finOutOfDeadline = (() => {
    if (!comunicados.finAt || !finDeadline) return false
    const at = parseSpanishDate(comunicados.finAt)
    return at ? at > finDeadline.deadlineDate : false
  })()

  const inicioTag = tagForInicioPanel(phase, inicioDeadline, inicioOutOfDeadline)
  const finTag = tagForFinPanel(phase, finDeadline, finOutOfDeadline)

  // ── Subtitles depending on state ──

  const inicioSubtitle = !accionFormativaReady
    ? "Puedes preparar los datos; podrás comunicar tras dar de alta la acción formativa"
    : inicioComunicado
      ? inicioOutOfDeadline
        ? `Comunicado el ${comunicados.inicioAt ?? "—"} · fuera de plazo, puede no ser bonificable`
        : `Comunicado a FUNDAE el ${comunicados.inicioAt ?? "—"}`
      : inicioDeadline
        ? `Plazo FUNDAE: hasta el ${inicioDeadline.formattedDeadline}`
        : "Datos del grupo formativo"

  const finSubtitle = !inicioComunicado
    ? "Puedes preparar los datos; podrás comunicar tras comunicar el inicio"
    : finComunicado
      ? finOutOfDeadline
        ? `Comunicado el ${comunicados.finAt ?? "—"} · fuera de plazo, puede no ser bonificable`
        : `Comunicado a FUNDAE el ${comunicados.finAt ?? "—"}`
      : finDeadline
        ? `Plazo FUNDAE: hasta el ${finDeadline.formattedDeadline}`
        : "Fecha de fin real, costes y resultado de participantes"

  // ── Action wiring per state ──

  // ── Action buttons per state ──
  //
  // Each card splits actions in two clusters:
  //   - Footer right: primary (Editar / Guardar) + secondary (Cancelar)
  //     These manage local data only — no FUNDAE side effects.
  //   - Footer left: xmlAction (Generar XML)
  //     Independent file-generation action. Only enabled when:
  //       1. The parent step is ready (acción formativa de alta / inicio
  //          comunicado).
  //       2. All required fields are filled (XSD validation passes).
  //       3. Not currently in edit mode (you must save or cancel first).

  // Precompute validity once per render
  const inicioValido = isInicioValid(inicio)
  const finValido = isFinValid(fin)

  // ── Action buttons per state (D10: 3 states) ──
  //
  // Three independent action clusters per card:
  //   - xmlAction       : pure XML export (no state change)
  //   - secondaryAction : "Editar datos" (toggle edit mode, no state change)
  //   - primaryAction   : declarative state change
  //                       ("Marcar como comunicado" / "Marcar como NO comunicado")
  //
  // The three states are:
  //   1. Pendiente              → form editable, primary = "Marcar comunicado"
  //   2. Comunicado / read-only → primary = "Marcar NO comunicado", secondary = "Editar datos"
  //   3. Comunicado / editing   → form editable, banner handles save/discard; no buttons

  // Inicio
  let inicioPrimary, inicioSecondary, inicioXml
  if (!inicioComunicado) {
    // 1. Pendiente
    inicioPrimary = isInicioDirty
      ? undefined
      : {
          label: "Marcar como comunicado a FUNDAE",
          onClick: markInicioAsComunicado,
          disabled: !accionFormativaReady || !inicioValido,
        }
    inicioSecondary = undefined
    inicioXml = {
      label: "Generar XML inicio",
      onClick: generarXmlInicio,
      disabled: false,
    }
  } else if (!inicioEditingComunicado) {
    // 2. Comunicado, lectura
    inicioPrimary = {
      label: "Marcar como NO comunicado",
      onClick: unmarkInicioComunicado,
    }
    inicioSecondary = {
      label: "Editar datos",
      onClick: () => setInicioEditingComunicado(true),
    }
    inicioXml = {
      label: "Generar XML inicio",
      onClick: generarXmlInicio,
      disabled: false,
    }
  } else {
    // 3. Comunicado, editando — banner gestiona save/discard
    inicioPrimary = undefined
    inicioSecondary = undefined
    inicioXml = {
      label: "Generar XML inicio",
      onClick: generarXmlInicio,
      disabled: false,
    }
  }

  // Fin
  let finPrimary, finSecondary, finXml
  if (!finComunicado) {
    finPrimary = isFinDirty
      ? undefined
      : {
          label: "Marcar como comunicado a FUNDAE",
          onClick: markFinAsComunicado,
          disabled: !inicioComunicado || !finValido,
        }
    finSecondary = undefined
    finXml = {
      label: "Generar XML fin",
      onClick: generarXmlFin,
      disabled: false,
    }
  } else if (!finEditingComunicado) {
    finPrimary = {
      label: "Marcar como NO comunicado",
      onClick: unmarkFinComunicado,
    }
    finSecondary = {
      label: "Editar datos",
      onClick: () => setFinEditingComunicado(true),
    }
    finXml = {
      label: "Generar XML fin",
      onClick: generarXmlFin,
      disabled: false,
    }
  } else {
    finPrimary = undefined
    finSecondary = undefined
    finXml = {
      label: "Generar XML fin",
      onClick: generarXmlFin,
      disabled: false,
    }
  }

  // Read-only unless explicitly editing a comunicado section
  const inicioReadOnly = inicioComunicado && !inicioEditingComunicado
  const finReadOnly = finComunicado && !finEditingComunicado

  // ── Top-level critical alert when a deadline is urgent ──
  //
  // Show a single, prominent alert above everything when the active step
  // has an expired/critical/warning deadline. This captures the urgency
  // once, instead of repeating the warning in the timeline + the panel.
  let urgentAlert: ReactNode = null
  if (!inicioComunicado && inicioDeadline && inicioDeadline.level !== "info") {
    const variant =
      inicioDeadline.level === "expired" || inicioDeadline.level === "critical"
        ? "critical"
        : "warning"
    urgentAlert = (
      <F0Alert
        variant={variant}
        title={
          inicioDeadline.level === "expired"
            ? "Plazo FUNDAE vencido para comunicar el inicio"
            : "Plazo FUNDAE próximo para comunicar el inicio"
        }
        description={inicioDeadline.message}
        action={{
          label: "Ir al inicio del grupo",
          onClick: () => setOpenPhase("inicio"),
        }}
      />
    )
  } else if (
    inicioComunicado &&
    !finComunicado &&
    finDeadline &&
    finDeadline.level !== "info"
  ) {
    const variant =
      finDeadline.level === "expired" || finDeadline.level === "critical"
        ? "critical"
        : "warning"
    urgentAlert = (
      <F0Alert
        variant={variant}
        title={
          finDeadline.level === "expired"
            ? "Plazo FUNDAE vencido para comunicar el fin"
            : "Plazo FUNDAE próximo para comunicar el fin"
        }
        description={finDeadline.message}
        action={{
          label: "Ir al fin del grupo",
          onClick: () => setOpenPhase("fin"),
        }}
      />
    )
  }

  // ── Panel content per step ──

  const inicioContent = (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {isInicioDirty && !inicioReadOnly && (
        <UnsavedChangesBanner
          onDiscard={discardInicioChanges}
          onSave={saveInicioChanges}
        />
      )}
      <InicioSection
        data={inicio}
        setData={setInicio}
        validate={validateInicio}
        readOnly={inicioReadOnly}
      />
    </F0Box>
  )

  const finContent = (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      {isFinDirty && !finReadOnly && (
        <UnsavedChangesBanner
          onDiscard={discardFinChanges}
          onSave={saveFinChanges}
        />
      )}
      <FinSection
        data={fin}
        setData={setFin}
        validate={validateFin}
        readOnly={finReadOnly}
        fechaFinPrevista={inicio.fechaFin}
        numHorasTotales={inicio.horario.horaTotales}
        numParticipantesPrevistos={inicio.numeroParticipantes}
        trainingId={training.id}
      />
      <FundaeParticipantsTable
        trainingId={training.id}
        trainingClass={selectedClass}
        numParticipantesPrevistos={inicio.numeroParticipantes}
        readOnly={finReadOnly}
      />
    </F0Box>
  )

  // Steps are never hard-locked: the user can always open and prepare the
  // data. Only the declarative actions (comunicar / generar XML) are gated,
  // and we explain why next to them via actionHint.
  const inicioCardProps = {
    title: "Inicio del grupo",
    subtitle: inicioSubtitle,
    statusTag: inicioTag,
    actionHint: !accionFormativaReady
      ? "Da de alta la acción formativa para comunicar el inicio"
      : undefined,
    xmlAction: inicioXml,
    primaryAction: inicioPrimary,
    secondaryAction: inicioSecondary,
  }
  const finCardProps = {
    title: "Fin del grupo",
    subtitle: finSubtitle,
    statusTag: finTag,
    actionHint: !inicioComunicado
      ? "Comunica el inicio del grupo para comunicar el fin"
      : undefined,
    xmlAction: finXml,
    primaryAction: finPrimary,
    secondaryAction: finSecondary,
  }

  // ── Master-detail: steps nav + active step panel ──
  const selectedPhase = openPhase
  const altaTag = accionFormativaReady
    ? { text: "Dada de alta", variant: "positive" as const }
    : { text: "Pendiente de alta", variant: "warning" as const }
  const sidebarSteps = [
    { key: "alta" as const, label: "1 · Acción formativa", tag: altaTag },
    { key: "inicio" as const, label: "2 · Inicio del grupo", tag: inicioTag },
    { key: "fin" as const, label: "3 · Fin del grupo", tag: finTag },
  ]

  const sidebarNav = (
    <F0Box display="flex" flexDirection="column" gap="xs">
      {sidebarSteps.map((step) => {
        const selected = selectedPhase === step.key
        return (
          <F0Box
            key={step.key}
            role="button"
            tabIndex={0}
            aria-current={selected}
            onClick={() => setOpenPhase(step.key)}
            display="flex"
            alignItems="stretch"
            gap="sm"
            width="full"
            borderRadius="md"
            background={selected ? "secondary" : "transparent"}
          >
            {/* Accent bar marks the active step (vertical-tabs pattern) */}
            <F0Box
              width="1"
              borderRadius="full"
              background={selected ? "selected-bold" : "transparent"}
            />
            <F0Box
              display="flex"
              flexDirection="column"
              gap="xs"
              alignItems="start"
              paddingY="sm"
              paddingRight="sm"
            >
              <F0Text
                variant={selected ? "label" : "body"}
                content={step.label}
              />
              <F0TagStatus text={step.tag.text} variant={step.tag.variant} />
            </F0Box>
          </F0Box>
        )
      })}
    </F0Box>
  )

  const sidebarDetail =
    selectedPhase === "alta" ? (
      <AccionFormativaCard
        collapsible={false}
        training={training}
        state={accionFormativa}
        setState={setAccionFormativa}
      />
    ) : selectedPhase === "inicio" ? (
      <CollapsibleCard
        {...inicioCardProps}
        collapsible={false}
        expanded
        onExpandedChange={() => {}}
      >
        {inicioContent}
      </CollapsibleCard>
    ) : (
      <CollapsibleCard
        {...finCardProps}
        collapsible={false}
        expanded
        onExpandedChange={() => {}}
      >
        {finContent}
      </CollapsibleCard>
    )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {urgentAlert}
      {/* Group selector: a training can have many groups, so a dropdown (with
          search past a handful) beats an inline toggle here. */}
      {training.classes.length > 1 && (
        <F0Box width="72" maxWidth="full">
          <F0Select
            label="Grupo formativo"
            value={selectedClassId}
            options={groupOptions}
            showSearchBox={training.classes.length > 5}
            onChange={handleSelectClass}
          />
        </F0Box>
      )}
      <F0Box display="flex" alignItems="start" gap="lg">
        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          width="72"
          shrink={false}
        >
          {sidebarNav}
        </F0Box>
        <F0Box grow minWidth="0">
          {sidebarDetail}
        </F0Box>
      </F0Box>
    </F0Box>
  )
}

// ── Tab entry point ──────────────────────────────────────────────────────

export function FundaePanel({ training }: Props) {
  const [accionFormativa, setAccionFormativa] = useState<AccionFormativaState>(
    () => buildInitialAccionFormativa(training)
  )

  if (!training.fundaeSubsidized) return <NotFundaeState />

  if (training.classes.length === 0) {
    return (
      <F0Box display="flex" flexDirection="column" gap="lg">
        <AccionFormativaCard
          training={training}
          state={accionFormativa}
          setState={setAccionFormativa}
        />
        <NoClassesState trainingId={training.id} />
      </F0Box>
    )
  }

  return (
    <GroupLifecycleManager
      training={training}
      accionFormativa={accionFormativa}
      setAccionFormativa={setAccionFormativa}
    />
  )
}
