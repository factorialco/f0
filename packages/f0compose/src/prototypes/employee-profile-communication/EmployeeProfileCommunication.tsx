import {
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
  Cross,
  Envelope,
  Link as LinkIcon,
  LinkRemove,
  Phone,
  WhatsappChat,
} from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import {
  captureEmployees,
  captures,
  findCaptureProject,
  formatCaptureDate,
} from "../whatsapp-capture/shared/data"
import type { PrototypeMeta } from "../types"

/**
 * Surface 4 — Employee profile · Communication card
 *
 * Slim employee profile screen with a right-rail "Comunicación" card
 * that exposes the WhatsApp link state for that person. Four states
 * via `?state=not-invited|invited|linked|blocked`. The selected
 * employee is fixed (María García, ce-1) since this prototype focuses
 * on the communication card itself, not the rest of the profile.
 *
 * The card shows:
 *   - phone
 *   - link status pill
 *   - primary action (invite / resend / unlink / unblock)
 *   - secondary metadata (last activity, captures this month)
 */

type CommState = "not-invited" | "invited" | "linked" | "blocked"

const STATE_LABEL: Record<CommState, string> = {
  "not-invited": "No invitado",
  invited: "Invitado",
  linked: "Vinculado",
  blocked: "Bloqueado",
}

export const meta: PrototypeMeta = {
  slug: "employee-profile-communication",
  title: "Perfil · Comunicación",
  description:
    "Perfil de empleado con tarjeta lateral «Comunicación» que muestra el estado de vinculación con WhatsApp Capture y permite invitar, reenviar el enlace, desvincular o desbloquear según el estado.",
  category: "People",
  module: "profile",
  audience: ["admin", "manager"],
  tags: ["whatsapp", "people", "profile"],
  createdAt: "2026-05-07",
}

export default function EmployeeProfileCommunication() {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get("state")
  const state: CommState =
    raw === "invited" || raw === "linked" || raw === "blocked"
      ? raw
      : "not-invited"

  const setState = (next: CommState) => {
    const params = new URLSearchParams(searchParams)
    if (next === "not-invited") params.delete("state")
    else params.set("state", next)
    setSearchParams(params)
  }

  // Fixed employee for this prototype: María García
  const employee = captureEmployees.find((e) => e.id === "ce-1")!
  const lastName = employee.fullName.split(" ").slice(-1).join(" ")

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "profile",
              name: "Personas",
              href: "/p/employee-profile-communication",
            }}
            breadcrumbs={[
              { id: employee.id, label: employee.fullName },
            ]}
          />
          <ResourceHeader
            title={employee.fullName}
            description={`${employee.role} · Mendoza Instalaciones`}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="lg">
          {/* State switcher */}
          <F0Box
            padding="sm"
            border="default"
            borderRadius="md"
            background="secondary"
            display="flex"
            alignItems="center"
            gap="sm"
          >
            <F0Text content="Estado de vinculación" variant="description" />
            {(Object.keys(STATE_LABEL) as CommState[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setState(s)}
                className={
                  "rounded-full border px-3 py-1 text-sm " +
                  (state === s
                    ? "border-f1-border-bold bg-f1-background-bold text-f1-foreground-inverse"
                    : "border-f1-border bg-f1-background")
                }
              >
                {STATE_LABEL[s]}
              </button>
            ))}
          </F0Box>

          {/* Two-column layout: profile main + communication rail */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <F0Box
                padding="lg"
                border="default"
                borderRadius="md"
                background="primary"
                display="flex"
                flexDirection="column"
                gap="md"
              >
                <div className="flex items-center gap-4">
                  <F0AvatarPerson
                    size="lg"
                    firstName={employee.preferredName}
                    lastName={lastName}
                  />
                  <div className="flex flex-col">
                    <F0Heading
                      content={employee.fullName}
                      variant="heading-large"
                      as="h2"
                    />
                    <F0Text content={employee.role} variant="body" />
                  </div>
                </div>
                <ProfileRow label="Equipo" value="Operaciones de obra" />
                <ProfileRow label="Manager" value="Andrés Martínez" />
                <ProfileRow label="Email" value="maria.garcia@mendoza.es" />
                <ProfileRow label="Teléfono" value={employee.phone} />
                <ProfileRow label="Centro" value="Madrid · Oficina central" />
                <ProfileRow label="Antigüedad" value="2 años, 4 meses" />
              </F0Box>
            </div>

            <div className="lg:col-span-1">
              <CommunicationCard
                phone={employee.phone}
                state={state}
                onInvite={() => setState("invited")}
                onResend={() => {}}
                onUnlink={() => setState("not-invited")}
                onUnblock={() => setState("not-invited")}
                onMarkLinked={() => setState("linked")}
              />
            </div>
          </div>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-3 items-baseline gap-2 border-b border-f1-border pb-2 last:border-b-0">
      <F0Text content={label} variant="description" />
      <div className="col-span-2">
        <F0Text content={value} variant="body" />
      </div>
    </div>
  )
}

function CommunicationCard({
  phone,
  state,
  onInvite,
  onResend,
  onUnlink,
  onUnblock,
  onMarkLinked,
}: {
  phone: string
  state: CommState
  onInvite: () => void
  onResend: () => void
  onUnlink: () => void
  onUnblock: () => void
  onMarkLinked: () => void
}) {
  // Per-state metadata so the card always shows two stat rows even
  // when the values are absent (kept blank with em-dash for layout
  // stability).
  const lastActivity =
    state === "linked" ? formatCaptureDate("2026-05-07T08:42:00Z") : "—"
  const monthlyCaptures =
    state === "linked"
      ? captures.filter((c) => c.employeeId === "ce-1").length.toString()
      : "—"
  const topProject =
    state === "linked"
      ? findCaptureProject("cp-1")?.name ?? "—"
      : "—"

  return (
    <F0Box
      padding="lg"
      border="default"
      borderRadius="md"
      background="primary"
      display="flex"
      flexDirection="column"
      gap="md"
    >
      <div className="flex items-center gap-2">
        <WhatsappChat className="h-5 w-5 text-f1-foreground-positive" />
        <F0Heading content="Comunicación" variant="heading" as="h3" />
      </div>

      <F0Text
        content="Estado del enlace con WhatsApp Capture para esta persona."
        variant="description"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-f1-foreground-secondary" />
          <F0Text content={phone} variant="body" />
        </div>
        <StatusPill state={state} />
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-f1-border pt-3">
        <Stat label="Última actividad" value={lastActivity} />
        <Stat label="Capturas este mes" value={monthlyCaptures} />
        <Stat label="Proyecto más activo" value={topProject} />
        <Stat
          label="Idioma"
          value={state === "linked" ? "Español" : "—"}
        />
      </div>

      <div className="flex flex-col gap-2 border-t border-f1-border pt-3">
        {state === "not-invited" && (
          <>
            <F0Button
              label="Invitar a vincular WhatsApp"
              icon={Envelope}
              onClick={onInvite}
            />
            <F0Text
              content="Se enviará un enlace seguro de un solo uso al móvil de la persona."
              variant="description"
            />
          </>
        )}
        {state === "invited" && (
          <>
            <span className="inline-flex items-center gap-2 rounded-md bg-f1-background-warning px-3 py-2 text-sm text-f1-foreground-warning">
              <Envelope className="h-4 w-4" />
              Enlace enviado hace 2 horas
            </span>
            <F0Button
              label="Reenviar enlace"
              variant="outline"
              icon={Envelope}
              onClick={onResend}
            />
            <F0Button
              label="Marcar como vinculado (demo)"
              variant="outline"
              icon={Check}
              onClick={onMarkLinked}
            />
            <F0Button
              label="Cancelar invitación"
              variant="outline"
              icon={Cross}
              onClick={onUnlink}
            />
          </>
        )}
        {state === "linked" && (
          <>
            <span className="inline-flex items-center gap-2 rounded-md bg-f1-background-positive px-3 py-2 text-sm text-f1-foreground-positive">
              <LinkIcon className="h-4 w-4" />
              Vinculado · activo
            </span>
            <F0Button
              label="Desvincular"
              variant="outline"
              icon={LinkRemove}
              onClick={onUnlink}
            />
            <F0Text
              content="Al desvincular, los mensajes futuros se ignoran. Las capturas previas no se borran."
              variant="description"
            />
          </>
        )}
        {state === "blocked" && (
          <>
            <span className="inline-flex items-center gap-2 rounded-md bg-f1-background-critical px-3 py-2 text-sm text-f1-foreground-critical">
              <LinkRemove className="h-4 w-4" />
              Bloqueado por la persona
            </span>
            <F0Text
              content="Esta persona ha pedido detener la captura escribiendo «STOP» al bot. No se procesarán mensajes hasta que confirme la reactivación."
              variant="description"
            />
            <F0Button
              label="Solicitar reactivación"
              variant="outline"
              icon={Envelope}
              onClick={onUnblock}
            />
          </>
        )}
      </div>
    </F0Box>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <F0Text content={label} variant="description" />
      <F0Text content={value} variant="body" />
    </div>
  )
}

function StatusPill({ state }: { state: CommState }) {
  const map: Record<CommState, string> = {
    "not-invited": "bg-f1-background-secondary text-f1-foreground-secondary",
    invited: "bg-f1-background-warning text-f1-foreground-warning",
    linked: "bg-f1-background-positive text-f1-foreground-positive",
    blocked: "bg-f1-background-critical text-f1-foreground-critical",
  }
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${map[state]}`}
    >
      {STATE_LABEL[state]}
    </span>
  )
}
