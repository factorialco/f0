import {
  F0Alert,
  F0AvatarPerson,
  F0Box,
  F0Button,
  F0Heading,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"
import {
  Check,
  CheckCircle,
  ExternalLink,
  Link as LinkIcon,
  Phone,
  Sparkles,
  Warning,
  WhatsappChat,
} from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import {
  captureEmployees,
  DISCLOSURE,
} from "../whatsapp-capture/shared/data"
import type { PrototypeMeta } from "../types"

/**
 * Surface 1 — WhatsApp Capture · Settings
 *
 * Admin-facing settings page that activates and operates the
 * WhatsApp-to-Project capture feature. Four states reachable via
 * `?state=empty|pending|active|suspended`:
 *
 * - empty:       feature off, marketing-style activation card
 * - pending:     QR code displayed, awaiting WhatsApp Business API link
 * - active:      connected number, usage card, member link table
 * - suspended:   alert banner explaining suspension + reactivate CTA
 *
 * The state lives in the URL so designers can copy a link to a
 * specific state during a review without resetting other state.
 */

type SettingsState = "empty" | "pending" | "active" | "suspended"

const STATE_LABEL: Record<SettingsState, string> = {
  empty: "No activado",
  pending: "Esperando vinculación",
  active: "Activo",
  suspended: "Suspendido",
}

export const meta: PrototypeMeta = {
  slug: "whatsapp-capture-settings",
  title: "WhatsApp Capture · Ajustes",
  description:
    "Pantalla de administración para activar la captura de mensajes de WhatsApp y convertirlos en costes, horas, gastos, documentos o notas en proyectos. Cuatro estados conmutables: vacío, pendiente, activo y suspendido.",
  category: "Settings",
  module: "documents",
  audience: ["admin"],
  tags: ["whatsapp", "ai", "automation", "ops"],
  createdAt: "2026-05-07",
}

export default function WhatsappCaptureSettings() {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get("state")
  const state: SettingsState =
    raw === "pending" || raw === "active" || raw === "suspended"
      ? raw
      : "empty"

  const setState = (next: SettingsState) => {
    const params = new URLSearchParams(searchParams)
    if (next === "empty") params.delete("state")
    else params.set("state", next)
    setSearchParams(params)
  }

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "documents",
              name: "Ajustes",
              href: "/p/whatsapp-capture-settings",
            }}
            breadcrumbs={[
              { id: "wa", label: "WhatsApp Capture" },
            ]}
          />
          <ResourceHeader
            title="WhatsApp Capture"
            description={`Convierte mensajes de WhatsApp en acciones de proyecto. Estado actual: ${STATE_LABEL[state]}.`}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="lg">
          <StateSwitcher current={state} onChange={setState} />
          {state === "empty" && <EmptyState onActivate={() => setState("pending")} />}
          {state === "pending" && (
            <PendingState onLinked={() => setState("active")} />
          )}
          {state === "active" && (
            <ActiveState onSuspend={() => setState("suspended")} />
          )}
          {state === "suspended" && (
            <SuspendedState onReactivate={() => setState("active")} />
          )}
          <DisclosureBlock />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

/**
 * Compact state switcher — purely a prototype affordance, not a real
 * piece of UI. Designers use it to flip between states during a review.
 */
function StateSwitcher({
  current,
  onChange,
}: {
  current: SettingsState
  onChange: (s: SettingsState) => void
}) {
  const states: SettingsState[] = ["empty", "pending", "active", "suspended"]
  return (
    <F0Box
      padding="sm"
      border="default"
      borderRadius="md"
      background="secondary"
      display="flex"
      alignItems="center"
      gap="sm"
    >
      <div className="flex items-center gap-2 pr-2">
        <Sparkles className="h-4 w-4 text-f1-foreground-info" />
        <F0Text content="Prototype state" variant="description" />
      </div>
      <div className="flex flex-wrap gap-1">
        {states.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className={
              "rounded-full border px-3 py-1 text-sm transition-colors " +
              (current === s
                ? "border-f1-border-bold bg-f1-background-bold text-f1-foreground-inverse"
                : "border-f1-border bg-f1-background text-f1-foreground hover:bg-f1-background-secondary")
            }
          >
            {STATE_LABEL[s]}
          </button>
        ))}
      </div>
    </F0Box>
  )
}

/**
 * Empty state: feature off, marketing-style card with the value prop
 * and a single primary action that flips to "pending" (QR step).
 */
function EmptyState({ onActivate }: { onActivate: () => void }) {
  return (
    <F0Box
      padding="lg"
      border="default"
      borderRadius="md"
      background="primary"
      display="flex"
      flexDirection="column"
      gap="lg"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-f1-background-positive text-f1-foreground-positive">
          <WhatsappChat className="h-6 w-6" />
        </div>
        <div className="flex flex-col gap-1">
          <F0Heading
            content="Activar captura por WhatsApp"
            variant="heading-large"
            as="h2"
          />
          <F0Text
            content="Conecta un número de WhatsApp Business y deja que tu equipo registre costes, horas, gastos, documentos y notas con un solo mensaje."
            variant="body"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <Benefit
          title="Sin app que aprender"
          description="Tu equipo escribe como siempre. La IA clasifica el mensaje y lo aplica al proyecto correcto."
        />
        <Benefit
          title="Revisión humana opcional"
          description="Aplicar todo automáticamente, o exigir revisión manual para acciones por encima de un importe."
        />
        <Benefit
          title="Privacidad por diseño"
          description="Solo se guardan los campos necesarios. Cada persona vincula su número con un enlace de un solo uso."
        />
      </div>

      <div className="flex items-center gap-3">
        <F0Button
          label="Activar WhatsApp Capture"
          icon={WhatsappChat}
          onClick={onActivate}
        />
        <F0Button
          label="Ver demo (1 min)"
          variant="outline"
          onClick={() => {}}
        />
      </div>
    </F0Box>
  )
}

function Benefit({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <F0Box
      padding="md"
      border="default"
      borderRadius="md"
      background="secondary"
      display="flex"
      flexDirection="column"
      gap="xs"
    >
      <F0Heading content={title} variant="heading" as="h3" />
      <F0Text content={description} variant="description" />
    </F0Box>
  )
}

/**
 * Pending: WhatsApp Business API connection requires admin to scan a
 * QR code from their phone. The QR is illustrative only.
 */
function PendingState({ onLinked }: { onLinked: () => void }) {
  return (
    <F0Box
      padding="lg"
      border="default"
      borderRadius="md"
      background="primary"
      display="flex"
      flexDirection="column"
      gap="lg"
    >
      <F0Heading
        content="Vincula tu número de WhatsApp Business"
        variant="heading-large"
        as="h2"
      />
      <F0Text
        content="Abre WhatsApp Business en tu móvil → Ajustes → Dispositivos vinculados → Vincular un dispositivo, y escanea el código de abajo. La conexión se completa en menos de 1 minuto."
        variant="body"
      />
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
        <div className="flex h-64 w-64 items-center justify-center rounded-md border border-f1-border bg-f1-background">
          <FakeQrCode />
        </div>
        <div className="flex flex-col gap-3">
          <Step
            n={1}
            title="Abre WhatsApp Business en tu móvil"
            description="Asegúrate de tener la última versión instalada."
          />
          <Step
            n={2}
            title="Toca «Vincular dispositivo»"
            description="Está en Ajustes → Dispositivos vinculados."
          />
          <Step
            n={3}
            title="Escanea el código QR"
            description="Cuando se complete, esta página se actualizará automáticamente."
          />
        </div>
      </div>
      <div className="flex items-center gap-3 pt-2">
        <F0Button
          label="Marcar como vinculado (demo)"
          icon={Check}
          onClick={onLinked}
        />
        <F0Button label="Cancelar" variant="outline" onClick={() => {}} />
      </div>
    </F0Box>
  )
}

function Step({
  n,
  title,
  description,
}: {
  n: number
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-f1-background-info-bold text-sm font-semibold text-f1-foreground-inverse">
        {n}
      </div>
      <div className="flex flex-col">
        <F0Text content={title} variant="body" />
        <F0Text content={description} variant="description" />
      </div>
    </div>
  )
}

function FakeQrCode() {
  // 17×17 deterministic pixel grid that visually evokes a QR code without
  // pretending to be a working one. Same seed every render.
  const cells = Array.from({ length: 17 * 17 }).map((_, i) => {
    const row = Math.floor(i / 17)
    const col = i % 17
    // Three corner finder squares
    const inFinder =
      (row < 7 && col < 7) ||
      (row < 7 && col > 9) ||
      (row > 9 && col < 7)
    if (inFinder) {
      const r = row < 7 ? row : row - 10
      const c = col < 7 ? col : col - 10
      const onEdge = r === 0 || r === 6 || c === 0 || c === 6
      const inner = r >= 2 && r <= 4 && c >= 2 && c <= 4
      return onEdge || inner
    }
    // Pseudo-random fill
    return ((row * 31 + col * 17 + 13) % 7) % 2 === 0
  })
  return (
    <div
      className="grid p-2"
      style={{
        gridTemplateColumns: "repeat(17, 12px)",
        gridTemplateRows: "repeat(17, 12px)",
        gap: "1px",
      }}
    >
      {cells.map((on, i) => (
        <div
          key={i}
          className={on ? "bg-f1-foreground" : "bg-f1-background"}
        />
      ))}
    </div>
  )
}

/**
 * Active: connection card + usage card + member link table.
 */
function ActiveState({ onSuspend }: { onSuspend: () => void }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {/* Connection summary */}
      <F0Box
        padding="lg"
        border="default"
        borderRadius="md"
        background="primary"
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="md"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-f1-background-positive text-f1-foreground-positive">
            <WhatsappChat className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <F0Heading
                content="Conectado a +34 900 123 456"
                variant="heading"
                as="h3"
              />
              <span className="inline-flex items-center gap-1 rounded-full bg-f1-background-positive px-2 py-0.5 text-xs font-medium text-f1-foreground-positive">
                <CheckCircle className="h-3 w-3" />
                Activo
              </span>
            </div>
            <F0Text
              content="Conexión establecida hace 14 días. Última actividad: hace 12 minutos."
              variant="description"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <F0Button label="Probar conexión" variant="outline" onClick={() => {}} />
          <F0Button label="Suspender" variant="outline" onClick={onSuspend} />
        </div>
      </F0Box>

      {/* Configuration */}
      <F0Box
        padding="lg"
        border="default"
        borderRadius="md"
        background="primary"
        display="flex"
        flexDirection="column"
        gap="md"
      >
        <F0Heading content="Configuración" variant="heading" as="h3" />
        <ConfigRow
          label="Idiomas detectados"
          value="Español, Inglés"
          hint="La IA detecta el idioma por mensaje. Otros idiomas próximamente."
        />
        <ConfigRow
          label="Modo proactivo (V3)"
          value="Desactivado · Próximamente"
          hint="La IA podrá pedir aclaraciones cuando un mensaje sea ambiguo."
        />
        <ConfigRow
          label="Revisión humana"
          value="Requerida para gastos > 100 €"
          hint="Cualquier acción por encima del umbral se marca como «Pendiente de revisión» en lugar de aplicarse directamente."
        />
        <ConfigRow
          label="Proyectos elegibles"
          value="Todos los proyectos activos"
          hint="Limita la captura a proyectos concretos si lo necesitas."
        />
      </F0Box>

      {/* Usage */}
      <F0Box
        padding="lg"
        border="default"
        borderRadius="md"
        background="primary"
        display="flex"
        flexDirection="column"
        gap="md"
      >
        <F0Heading content="Uso este periodo" variant="heading" as="h3" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <UsageStat label="Mensajes recibidos" value="1.847" caption="Últimos 30 días" />
          <UsageStat label="Acciones aplicadas" value="1.612" caption="87% de los mensajes" />
          <UsageStat
            label="Tokens IA"
            value="124.300 / 200.000"
            caption="62% de la cuota mensual"
            progress={0.62}
          />
        </div>
      </F0Box>

      {/* Members table */}
      <F0Box
        padding="lg"
        border="default"
        borderRadius="md"
        background="primary"
        display="flex"
        flexDirection="column"
        gap="md"
      >
        <div className="flex items-center justify-between">
          <F0Heading content="Personas vinculadas" variant="heading" as="h3" />
          <F0Button
            label="Invitar nuevos"
            icon={LinkIcon}
            variant="outline"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-col">
          {captureEmployees.map((emp) => (
            <div
              key={emp.id}
              className="flex items-center justify-between border-b border-f1-border py-3 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <F0AvatarPerson
                  size="md"
                  firstName={emp.preferredName}
                  lastName={emp.fullName.split(" ").slice(-1).join(" ")}
                />
                <div className="flex flex-col">
                  <F0Text content={emp.fullName} variant="body" />
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-f1-foreground-secondary" />
                    <F0Text content={emp.phone} variant="description" />
                  </div>
                </div>
              </div>
              <LinkStatusPill status={emp.linkStatus} />
            </div>
          ))}
        </div>
      </F0Box>
    </F0Box>
  )
}

function ConfigRow({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint: string
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-f1-border pb-3 last:border-b-0 md:grid-cols-3">
      <F0Text content={label} variant="body" />
      <F0Text content={value} variant="body" />
      <F0Text content={hint} variant="description" />
    </div>
  )
}

function UsageStat({
  label,
  value,
  caption,
  progress,
}: {
  label: string
  value: string
  caption: string
  progress?: number
}) {
  return (
    <div className="flex flex-col gap-1">
      <F0Text content={label} variant="description" />
      <F0Heading content={value} variant="heading" as="h4" />
      <F0Text content={caption} variant="description" />
      {progress !== undefined && (
        <div className="mt-1 h-2 w-full rounded-full bg-f1-background-secondary">
          <div
            className="h-full rounded-full bg-f1-background-info-bold"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      )}
    </div>
  )
}

function LinkStatusPill({
  status,
}: {
  status: "not-invited" | "invited" | "linked" | "blocked"
}) {
  const map: Record<typeof status, { label: string; classes: string }> = {
    "not-invited": {
      label: "No invitado",
      classes: "bg-f1-background-secondary text-f1-foreground-secondary",
    },
    invited: {
      label: "Invitado",
      classes: "bg-f1-background-warning text-f1-foreground-warning",
    },
    linked: {
      label: "Vinculado",
      classes: "bg-f1-background-positive text-f1-foreground-positive",
    },
    blocked: {
      label: "Bloqueado",
      classes: "bg-f1-background-critical text-f1-foreground-critical",
    },
  }
  const { label, classes } = map[status]
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${classes}`}
    >
      {label}
    </span>
  )
}

/**
 * Suspended: shown after admin disables capture (or after a
 * billing/quota issue) — banner + reactivate CTA.
 */
function SuspendedState({ onReactivate }: { onReactivate: () => void }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Alert
        variant="warning"
        title="WhatsApp Capture está suspendido"
        description="Has alcanzado el 100% de la cuota de tokens IA de este mes. Los mensajes nuevos no se procesan hasta que reactives o amplíes la cuota. Las acciones ya aplicadas no se ven afectadas."
      />
      <F0Box
        padding="lg"
        border="default"
        borderRadius="md"
        background="primary"
        display="flex"
        flexDirection="column"
        gap="md"
      >
        <F0Heading content="Reanudar el servicio" variant="heading" as="h3" />
        <F0Text
          content="Puedes reanudar el servicio inmediatamente. La conexión con WhatsApp se mantiene, así que tu equipo no necesita volver a vincular su número."
          variant="body"
        />
        <div className="flex items-center gap-3">
          <F0Button
            label="Reactivar captura"
            icon={WhatsappChat}
            onClick={onReactivate}
          />
          <F0Button
            label="Ampliar cuota"
            variant="outline"
            onClick={() => {}}
          />
        </div>
      </F0Box>
    </F0Box>
  )
}

/**
 * Disclosure block + privacy link, verbatim. Always visible regardless
 * of state so the privacy posture never depends on activation.
 */
function DisclosureBlock() {
  return (
    <F0Box
      padding="md"
      border="default"
      borderRadius="md"
      background="secondary"
      display="flex"
      flexDirection="column"
      gap="sm"
    >
      <div className="flex items-center gap-2">
        <Warning className="h-4 w-4 text-f1-foreground-secondary" />
        <F0Heading
          content="Privacidad y tratamiento de datos"
          variant="heading"
          as="h3"
        />
      </div>
      <F0Text content={DISCLOSURE.body} variant="description" />
      <a
        href={DISCLOSURE.privacyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium text-f1-foreground-info hover:underline"
      >
        {DISCLOSURE.privacyLabel}
        <ExternalLink className="h-3 w-3" />
      </a>
    </F0Box>
  )
}
