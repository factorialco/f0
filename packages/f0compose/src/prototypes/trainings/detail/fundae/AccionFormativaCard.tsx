import { F0Alert, F0Box, F0Select } from "@factorialco/f0-react"
import { Input, NumberInput, Textarea } from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"

import type { Training } from "@/fixtures"

import { CollapsibleCard } from "./CollapsibleCard"
import { OptionToggle } from "./OptionToggle"
import { SummarySection } from "./SummarySection"
import { UnsavedChangesBanner } from "./UnsavedChangesBanner"
import {
  MODALIDAD_OPTIONS,
  PERFIL_OPTIONS,
  perfilLabel,
  validateCodigo,
  type Modalidad,
  type PerfilFundae,
  type PlataformaData,
} from "./fundaeTypes"

export type AccionFormativaState = {
  enFundae: boolean
  codigoFundae: string | null
  fechaAlta: string | null
  nombre: string
  horas: number | null
  modalidad: Modalidad
  perfil: PerfilFundae
  objetivos: string
  contenidos: string
  // Plataforma de teleformación / aula virtual (solo aplica a modalidades online).
  plataforma: PlataformaData
}

type Props = {
  training: Training
  state: AccionFormativaState
  setState: (s: AccionFormativaState) => void
  // Optional controlled expansion (for stepper/contained layouts). When
  // omitted the card manages its own expanded state.
  expanded?: boolean
  onExpandedChange?: (v: boolean) => void
  variant?: "card" | "flat"
  collapsible?: boolean
}

// Fingerprint of the editable data fields. Used only to detect unsaved
// in-progress edits (the "cambios sin guardar" banner).
function dataFingerprint(s: AccionFormativaState): string {
  return JSON.stringify({
    codigoFundae: s.codigoFundae,
    nombre: s.nombre,
    horas: s.horas,
    modalidad: s.modalidad,
    perfil: s.perfil,
    objetivos: s.objetivos,
    contenidos: s.contenidos,
  })
}

export function buildInitialAccionFormativa(
  training: Training
): AccionFormativaState {
  return {
    enFundae: !!training.codigoCurso,
    codigoFundae: training.codigoCurso ?? null,
    fechaAlta: training.codigoCurso ? "05/02/2026" : null,
    nombre: training.name,
    horas: training.totalDuration,
    modalidad: "presencial",
    perfil: "bonificada", // default: only XSD currently supported for fin
    objetivos: training.objectives,
    contenidos: training.description,
    // Pre-rellenado para que, al cambiar a una modalidad online, el caso se vea
    // montado (no campos vacíos).
    plataforma: {
      cif: "B12345678",
      razonSocial: "Aula Virtual Formación S.L.",
      url: "https://campus.formacion.es",
      usuario: "casa.tarradellas",
      password: "Ct-2026-aula",
    },
  }
}

function isComplete(s: AccionFormativaState): boolean {
  return Boolean(
    s.nombre &&
      s.horas &&
      s.modalidad &&
      s.objetivos &&
      s.contenidos &&
      (s.codigoFundae ? validateCodigo(s.codigoFundae) : true)
  )
}

// ─── Summary row (always visible inside the expanded card) ───────────────

function SummaryGrid({ state }: { state: AccionFormativaState }) {
  const modalidadLabel =
    MODALIDAD_OPTIONS.find((m) => m.value === state.modalidad)?.label ??
    state.modalidad

  const items = state.enFundae
    ? [
        { label: "Código FUNDAE", value: state.codigoFundae ?? "—" },
        { label: "Perfil FUNDAE", value: perfilLabel(state.perfil) },
        { label: "Dada de alta", value: state.fechaAlta ?? "—" },
        { label: "Horas", value: state.horas ? `${state.horas}h` : "—" },
        { label: "Modalidad", value: modalidadLabel },
      ]
    : [
        { label: "Código FUNDAE", value: "Pendiente" },
        { label: "Perfil FUNDAE", value: perfilLabel(state.perfil) },
        { label: "Horas", value: state.horas ? `${state.horas}h` : "—" },
        { label: "Modalidad", value: modalidadLabel },
      ]

  return <SummarySection items={items} />
}

// ─── Inline edit form (same pattern as InicioSection / FinSection) ───────

function AccionFormativaForm({
  state,
  setField,
  showErrors,
}: {
  state: AccionFormativaState
  setField: <K extends keyof AccionFormativaState>(
    k: K,
    v: AccionFormativaState[K]
  ) => void
  showErrors: boolean
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <Input
        label="Nombre de la acción formativa"
        value={state.nombre}
        error={showErrors && !state.nombre ? "Obligatorio." : undefined}
        onChange={(v) => setField("nombre", v ?? "")}
      />

      <F0Box display="grid" columns="2" gap="md">
        <NumberInput
          label="Horas totales"
          locale="es-ES"
          value={state.horas}
          error={showErrors && !state.horas ? "Obligatorio." : undefined}
          onChange={(v) => setField("horas", v)}
        />
        <F0Select
          label="Modalidad"
          value={state.modalidad}
          options={MODALIDAD_OPTIONS}
          onChange={(v: string) => setField("modalidad", v as Modalidad)}
        />
      </F0Box>

      <OptionToggle
        label="Perfil FUNDAE"
        hint="Determina los datos que se piden al comunicar inicio y fin del grupo. Por defecto: Empresa bonificada."
        value={state.perfil}
        options={PERFIL_OPTIONS}
        onChange={(v) => setField("perfil", v as PerfilFundae)}
      />

      <Textarea
        label="Objetivos"
        rows={3}
        value={state.objetivos}
        error={showErrors && !state.objetivos ? "Obligatorio." : undefined}
        onChange={(v) => setField("objetivos", v ?? "")}
      />
      <Textarea
        label="Contenidos"
        rows={3}
        value={state.contenidos}
        error={showErrors && !state.contenidos ? "Obligatorio." : undefined}
        onChange={(v) => setField("contenidos", v ?? "")}
      />
    </F0Box>
  )
}

// ─── Main card ───────────────────────────────────────────────────────────

export function AccionFormativaCard({
  state,
  setState,
  expanded: expandedProp,
  onExpandedChange,
  variant,
  collapsible,
}: Props) {
  // Snapshot used for the unsaved-changes banner (Smart-Surveys pattern,
  // same as InicioSection / FinSection).
  const [saved, setSaved] = useState(state)
  // Edit mode. Before alta the form is always editable; after alta it's
  // read-only until the user hits "Editar datos".
  const [editing, setEditing] = useState(!state.enFundae)
  const [expandedInternal, setExpandedInternal] = useState(!state.enFundae)
  const expanded = expandedProp ?? expandedInternal
  const setExpanded = onExpandedChange ?? setExpandedInternal
  const [showErrors, setShowErrors] = useState(false)

  const ready = isComplete(state)
  const isDirty = dataFingerprint(state) !== dataFingerprint(saved)

  const setField = <K extends keyof AccionFormativaState>(
    k: K,
    v: AccionFormativaState[K]
  ) => setState({ ...state, [k]: v })

  // Pendiente → Dada de alta.
  const giveAlta = () => {
    if (!ready) {
      setShowErrors(true)
      return
    }
    const next: AccionFormativaState = {
      ...state,
      enFundae: true,
      codigoFundae: state.codigoFundae ?? "00142",
      fechaAlta: new Date().toLocaleDateString("es-ES"),
    }
    setState(next)
    setSaved(next)
    setShowErrors(false)
    setEditing(false)
    setExpanded(false)
  }

  // Reveal the inline form. Editing just updates the data.
  const editDatos = () => setEditing(true)

  // Confirm in-progress edits (banner "Guardar").
  const saveChanges = () => {
    if (!isComplete(state)) {
      setShowErrors(true)
      return
    }
    setSaved(state)
    setShowErrors(false)
    if (state.enFundae) setEditing(false)
  }

  // Discard in-progress edits — revert to the last saved snapshot.
  const discardChanges = () => {
    setState(saved)
    setShowErrors(false)
    if (state.enFundae) setEditing(false)
  }

  const statusTag = state.enFundae
    ? { text: "Dada de alta en FUNDAE", variant: "positive" as const }
    : { text: "No dada de alta en FUNDAE", variant: "warning" as const }

  // Action wiring mirrors InicioSection/FinSection:
  //   - primaryAction: state declaration ("Marcar como dada de alta").
  //     Hidden while there are unsaved changes (resolve them first).
  //   - secondaryAction: "Editar datos" only when given alta and read-only.
  const primaryAction =
    !state.enFundae && !isDirty
      ? {
          label: "Marcar como dada de alta en FUNDAE",
          onClick: giveAlta,
          disabled: !ready,
        }
      : undefined
  const secondaryAction =
    state.enFundae && !editing
      ? { label: "Editar datos", onClick: editDatos }
      : undefined

  return (
    <CollapsibleCard
      title="Acción formativa en FUNDAE"
      variant={variant}
      collapsible={collapsible}
      subtitle={
        state.enFundae && state.codigoFundae
          ? `${state.nombre} · Código ${state.codigoFundae} · Dada de alta ${state.fechaAlta ?? "—"}`
          : state.nombre
      }
      statusTag={statusTag}
      expanded={expanded}
      onExpandedChange={setExpanded}
      xmlAction={{
        label: "Generar XML alta",
        onClick: () => {},
        disabled: false,
      }}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        {isDirty && (
          <UnsavedChangesBanner onDiscard={discardChanges} onSave={saveChanges} />
        )}

        {editing ? (
          <AccionFormativaForm
            state={state}
            setField={setField}
            showErrors={showErrors}
          />
        ) : (
          <SummaryGrid state={state} />
        )}

        {!state.enFundae && (
          <F0Alert
            variant="warning"
            title="Esta acción formativa aún no está dada de alta en FUNDAE"
            description="Antes de comunicar el inicio de cualquier grupo formativo, debes dar de alta el curso en FUNDAE. Esto solo se hace una vez por acción formativa."
          />
        )}
      </F0Box>
    </CollapsibleCard>
  )
}
