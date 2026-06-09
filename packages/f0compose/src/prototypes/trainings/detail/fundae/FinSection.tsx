import {
  F0Alert,
  F0Box,
  F0Button,
  F0Card,
  F0Dialog,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import { Input, NumberInput } from "@factorialco/f0-react/dist/experimental"
import { Pencil } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import type { FinGrupoData } from "./fundaeTypes"
import { SummarySection } from "./SummarySection"

type Props = {
  data: FinGrupoData
  setData: (
    updater: FinGrupoData | ((prev: FinGrupoData) => FinGrupoData)
  ) => void
  validate: boolean
  readOnly?: boolean
  fechaFinPrevista: string
  numHorasTotales: number | null
  numParticipantesPrevistos: number | null
  trainingId: string
  // When true, hide FinSection's own módulo check (the FundaeRedesign verdict
  // layer owns it, computed per modality + aptos) to avoid a competing number.
  hideModuleCheck?: boolean
  // Hide FinSection's own intro alert (redundant blue box) — the redesign
  // gives context above. Default shows it (old FundaePanel).
  hideIntro?: boolean
}

function fmtEUR(v: string | number): string {
  const n = typeof v === "number" ? v : Number(v || 0)
  return n.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  })
}

// FUNDAE bonifiable module (€/participant/hour) — varies by modality.
// 7.5 €/h is the default for teleformación. In production this would come
// from a per-modality lookup table maintained by FUNDAE.
const MODULO_BONIFICABLE_HORA = 7.5

function CostesSummary({
  data,
  numHoras,
  numParticipantes,
  hideModuleCheck,
}: {
  data: FinGrupoData
  numHoras: number | null
  numParticipantes: number | null
  hideModuleCheck?: boolean
}) {
  const directos = Number(data.costesDirectos || 0)
  const indirectos = Number(data.costesIndirectos || 0)
  const salariales = Number(data.costesSalariales || 0)
  const total = directos + indirectos + salariales

  const moduloMaximo =
    numHoras && numParticipantes
      ? MODULO_BONIFICABLE_HORA * numHoras * numParticipantes
      : null

  const dentroDeModulo = moduloMaximo === null ? null : total <= moduloMaximo
  const exceso = moduloMaximo && total > moduloMaximo ? total - moduloMaximo : 0

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Box
        background="secondary"
        borderRadius="md"
        padding="lg"
        display="flex"
        flexDirection="column"
        gap="md"
      >
        <F0Box display="grid" columns="3" gap="md">
          {[
            { l: "Directos", v: directos },
            { l: "Indirectos", v: indirectos },
            { l: "Salariales", v: salariales },
          ].map((c) => (
            <F0Box key={c.l} display="flex" flexDirection="column" gap="xs">
              <F0Text variant="label" content={c.l} />
              <F0Text variant="body" content={fmtEUR(c.v)} />
            </F0Box>
          ))}
        </F0Box>
        <F0Box
          display="flex"
          alignItems="center"
          justifyContent="between"
          borderTop="default"
          borderColor="secondary"
          paddingTop="md"
        >
          <F0Heading
            as="h4"
            variant="heading"
            content="Total imputado a FUNDAE"
          />
          <F0Heading as="h3" variant="heading-large" content={fmtEUR(total)} />
        </F0Box>
      </F0Box>

      {/* FUNDAE bonifiable module check */}
      {!hideModuleCheck && dentroDeModulo !== null && (
        <RuleRow
          ok={dentroDeModulo}
          label={`Módulo bonificable (${MODULO_BONIFICABLE_HORA} €/h × ${numHoras}h × ${numParticipantes} participantes)`}
          detail={
            dentroDeModulo
              ? `Margen: ${fmtEUR((moduloMaximo ?? 0) - total)}`
              : `Excede en ${fmtEUR(exceso)}`
          }
        />
      )}
    </F0Box>
  )
}

function RuleRow({
  ok,
  label,
  detail,
}: {
  ok: boolean
  label: string
  detail: string
}) {
  return (
    <F0Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      gap="sm"
      borderRadius="md"
      border="default"
      borderColor={ok ? "positive" : "warning"}
      background={ok ? "positive" : "warning"}
      paddingX="md"
      paddingY="sm"
    >
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0Text variant="small" content={ok ? "✅" : "⚠️"} />
        <F0Text variant="small" content={label} />
      </F0Box>
      <F0Text variant="small" content={detail} />
    </F0Box>
  )
}

// ─── Edit modal ──────────────────────────────────────────────────────────

function EditCostesModal({
  open,
  onClose,
  data,
  onSave,
}: {
  open: boolean
  onClose: () => void
  data: FinGrupoData
  onSave: (d: FinGrupoData) => void
}) {
  const [draft, setDraft] = useState(data)

  const setField = <K extends keyof FinGrupoData>(k: K, v: FinGrupoData[K]) =>
    setDraft({ ...draft, [k]: v })

  const cancel = () => {
    setDraft(data)
    onClose()
  }

  return (
    <F0Dialog
      isOpen={open}
      onClose={cancel}
      width="md"
      title="Editar costes del grupo"
      description="Estos costes se comparten con la tab Costs — es la misma fuente de datos."
      primaryAction={{
        label: "Guardar",
        onClick: () => {
          onSave(draft)
          onClose()
        },
      }}
      secondaryAction={{
        label: "Cancelar",
        onClick: cancel,
      }}
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Alert
          variant="info"
          title="Sincronizado con la tab Costs"
          description="Cualquier cambio aquí se refleja en Costs y viceversa."
        />

        <F0Box display="grid" columns="1" gap="md">
          <NumberInput
            label="Costes directos (€)"
            hint="Proveedores, materiales, alquiler de aula."
            locale="es-ES"
            value={draft.costesDirectos ? Number(draft.costesDirectos) : null}
            onChange={(v) =>
              setField(
                "costesDirectos",
                v === null || v === undefined ? "" : String(v)
              )
            }
          />
          <NumberInput
            label="Costes indirectos (€)"
            hint="Prorrateo de overhead asignado al grupo."
            locale="es-ES"
            value={draft.costesIndirectos ? Number(draft.costesIndirectos) : null}
            onChange={(v) =>
              setField(
                "costesIndirectos",
                v === null || v === undefined ? "" : String(v)
              )
            }
          />
          <NumberInput
            label="Costes salariales (€)"
            hint="Coste payroll de participantes durante horas de formación."
            locale="es-ES"
            value={draft.costesSalariales ? Number(draft.costesSalariales) : null}
            onChange={(v) =>
              setField(
                "costesSalariales",
                v === null || v === undefined ? "" : String(v)
              )
            }
          />
        </F0Box>
      </F0Box>
    </F0Dialog>
  )
}

// ─── Main FinSection ─────────────────────────────────────────────────────

export function FinSection({
  data,
  setData,
  validate,
  readOnly,
  fechaFinPrevista,
  numHorasTotales,
  numParticipantesPrevistos,
  trainingId,
  hideModuleCheck,
  hideIntro,
}: Props) {
  const [editing, setEditing] = useState(false)
  const navigate = useNavigate()

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      {!hideIntro && (
        <F0Alert
          variant="info"
          title="Comunicado de fin del grupo formativo"
          description="Tras la finalización, comunica fecha de fin real, costes y resultado de participantes. FUNDAE valida que los costes imputados no superan el módulo bonificable."
        />
      )}

      {/* ── Fecha fin real ───────────────────────────────────────────── */}
      {readOnly ? (
        <SummarySection
          title="Finalización"
          columns="2"
          items={[
            { label: "Fecha fin real", value: data.fechaFinReal || "—" },
            { label: "Fecha fin prevista", value: fechaFinPrevista || "—" },
          ]}
        />
      ) : (
        <F0Card title="Finalización">
          <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
            <F0Box display="grid" columns="2" gap="lg">
              <Input
                label="Fecha fin real"
                hint={`Fecha fin prevista: ${fechaFinPrevista || "—"}`}
                placeholder="DD/MM/AAAA"
                value={data.fechaFinReal}
                error={validate && !data.fechaFinReal ? "Obligatorio." : undefined}
                disabled={readOnly}
                onChange={(v) =>
                  setData((prev) => ({ ...prev, fechaFinReal: v ?? "" }))
                }
              />
            </F0Box>
          </F0Box>
        </F0Card>
      )}

      {/* ── Costes (read-only, synced with Costs tab) ───────────────── */}
      <F0Card title="Costes imputados a FUNDAE">
        <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
          <F0Box
            display="flex"
            alignItems="start"
            justifyContent="between"
            gap="lg"
          >
            <F0Box grow>
              <F0Text
                variant="small"
                content="Los costes se sincronizan con la tab Costs del training. Es la misma fuente de datos — edita desde aquí o desde Costs indistintamente."
              />
            </F0Box>
            {!readOnly && (
              <F0Box display="flex" shrink gap="sm">
                <F0Button
                  label="Ver en Costs"
                  variant="outline"
                  onClick={() =>
                    navigate(`/p/trainings?training=${trainingId}&dtab=costs`)
                  }
                />
                <F0Button
                  label="Editar costes"
                  icon={Pencil}
                  variant="outline"
                  onClick={() => setEditing(true)}
                />
              </F0Box>
            )}
          </F0Box>

          <CostesSummary
            data={data}
            numHoras={numHorasTotales}
            numParticipantes={numParticipantesPrevistos}
            hideModuleCheck={hideModuleCheck}
          />

          {validate &&
            (!data.costesDirectos ||
              !data.costesIndirectos ||
              !data.costesSalariales) && (
              <F0Alert
                variant="warning"
                title="Faltan costes obligatorios"
                description="Directos, indirectos y salariales son obligatorios para el comunicado de fin."
              />
            )}
        </F0Box>
      </F0Card>

      <EditCostesModal
        open={editing}
        onClose={() => setEditing(false)}
        data={data}
        onSave={setData}
      />
    </F0Box>
  )
}
