import {
  F0AvatarPerson,
  F0Box,
  F0Button,
  F0Heading,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Cross,
  Download,
  WhatsappChat,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "react-router-dom"

import { applySort } from "@/lib/applySort"

import {
  actionTypeEmoji,
  actionTypeLabel,
  captureEmployees,
  captureProjects,
  captures,
  type Capture,
  type CaptureActionType,
  type CaptureStatus,
  findCaptureEmployee,
  findCaptureProject,
  formatAmount,
  formatCaptureDate,
  statusColor,
  statusLabel,
} from "../whatsapp-capture/shared/data"
import type { PrototypeMeta } from "../types"

/**
 * Surface 2 — WhatsApp Capture · Activity log
 *
 * Admin-facing activity feed of every WhatsApp message ingested by the
 * AI capture pipeline, with project / employee / type / status filters,
 * keyword search, and a right-side detail drawer that exposes the raw
 * message + interpreted action + audit trail.
 *
 * State switcher (`?state=loaded|empty`):
 *   - loaded:  full ~40-row data set (default)
 *   - empty:   no captures yet (e.g., feature just activated)
 *
 * Selected capture lives in URL too (`?cap=cap-001`) so the detail panel
 * stays open through reloads, which makes prototype reviews easier.
 */

type ActivityState = "loaded" | "empty"

export const meta: PrototypeMeta = {
  slug: "whatsapp-capture-activity",
  title: "WhatsApp Capture · Actividad",
  description:
    "Registro de cada mensaje de WhatsApp ingerido por la IA, con filtros por proyecto, tipo, estado y persona, búsqueda por palabra clave, y panel lateral con el mensaje original y la acción aplicada.",
  category: "Settings",
  module: "documents",
  audience: ["admin"],
  tags: ["whatsapp", "ai", "audit", "ops"],
  createdAt: "2026-05-07",
}

export default function WhatsappCaptureActivity() {
  const [searchParams, setSearchParams] = useSearchParams()
  const stateParam = searchParams.get("state")
  const state: ActivityState = stateParam === "empty" ? "empty" : "loaded"
  const selectedId = searchParams.get("cap")

  const setState = (next: ActivityState) => {
    const params = new URLSearchParams(searchParams)
    if (next === "loaded") params.delete("state")
    else params.set("state", next)
    params.delete("cap")
    setSearchParams(params)
  }

  const openCapture = (id: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("cap", id)
    setSearchParams(params)
  }

  const closeCapture = () => {
    const params = new URLSearchParams(searchParams)
    params.delete("cap")
    setSearchParams(params)
  }

  const rows = state === "empty" ? [] : captures
  const selected = selectedId
    ? rows.find((r) => r.id === selectedId) ?? null
    : null

  const source = useDataCollectionSource<Capture>(
    {
      search: { enabled: true, sync: true },
      filters: {
        type: {
          type: "in",
          label: "Tipo",
          options: {
            options: (Object.keys(actionTypeLabel) as CaptureActionType[]).map(
              (t) => ({ value: t, label: actionTypeLabel[t] })
            ),
          },
        },
        status: {
          type: "in",
          label: "Estado",
          options: {
            options: (Object.keys(statusLabel) as CaptureStatus[]).map((s) => ({
              value: s,
              label: statusLabel[s],
            })),
          },
        },
        projectId: {
          type: "in",
          label: "Proyecto",
          options: {
            options: captureProjects.map((p) => ({
              value: p.id,
              label: p.name,
            })),
          },
        },
        employeeId: {
          type: "in",
          label: "Persona",
          options: {
            options: captureEmployees
              .filter((e) => e.linkStatus === "linked")
              .map((e) => ({ value: e.id, label: e.fullName })),
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Pendientes de revisión", filter: { status: ["pending-hitl"] } },
        { label: "Solo costes y gastos", filter: { type: ["cost", "expense"] } },
        { label: "Solo horas", filter: { type: ["hours"] } },
      ],
      sortings: {
        sentAt: { label: "Fecha" },
        amount: { label: "Importe" },
      },
      itemOnClick: (item) => () => openCapture(item.id),
      dataAdapter: {
        paginationType: "pages",
        perPage: 12,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const wantedTypes = Array.isArray(filters?.type)
            ? (filters.type as CaptureActionType[])
            : []
          const wantedStatuses = Array.isArray(filters?.status)
            ? (filters.status as CaptureStatus[])
            : []
          const wantedProjects = Array.isArray(filters?.projectId)
            ? (filters.projectId as string[])
            : []
          const wantedEmployees = Array.isArray(filters?.employeeId)
            ? (filters.employeeId as string[])
            : []

          const filtered = rows
            .filter((c) =>
              wantedTypes.length === 0 ? true : wantedTypes.includes(c.type)
            )
            .filter((c) =>
              wantedStatuses.length === 0
                ? true
                : wantedStatuses.includes(c.status)
            )
            .filter((c) =>
              wantedProjects.length === 0
                ? true
                : wantedProjects.includes(c.projectId)
            )
            .filter((c) =>
              wantedEmployees.length === 0
                ? true
                : wantedEmployees.includes(c.employeeId)
            )
            .filter((c) => {
              if (term === "") return true
              return (
                c.summary.toLowerCase().includes(term) ||
                c.rawMessage.toLowerCase().includes(term)
              )
            })

          const sorted = applySort(filtered, sortings, (c, field) => {
            switch (field) {
              case "sentAt":
                return c.sentAt
              case "amount":
                return c.amount ?? 0
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 12
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)
          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      itemActions: () => [
        { label: "Ver detalles", onClick: () => {} },
        { label: "Marcar como revisado", onClick: () => {} },
        { type: "separator" },
        { label: "Revertir", onClick: () => {}, critical: true },
      ],
    },
    [rows]
  )

  const kpis = useMemo(() => {
    const total = rows.length
    const committed = rows.filter((r) => r.status === "committed").length
    const pending = rows.filter((r) => r.status === "pending-hitl").length
    const failedOrReverted = rows.filter(
      (r) => r.status === "failed" || r.status === "reverted"
    ).length
    return { total, committed, pending, failedOrReverted }
  }, [rows])

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
              { id: "wa", label: "WhatsApp Capture", href: "/p/whatsapp-capture-settings" },
              { id: "act", label: "Actividad" },
            ]}
          />
          <ResourceHeader
            title="Actividad"
            description="Cada mensaje de WhatsApp procesado por la IA en los últimos 30 días."
            primaryAction={{
              label: "Exportar CSV",
              icon: Download,
              onClick: () => {},
            }}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="lg">
          {/* State switcher (prototype affordance) */}
          <F0Box
            padding="sm"
            border="default"
            borderRadius="md"
            background="secondary"
            display="flex"
            alignItems="center"
            gap="sm"
          >
            <F0Text content="Prototype state" variant="description" />
            <button
              type="button"
              onClick={() => setState("loaded")}
              className={
                "rounded-full border px-3 py-1 text-sm " +
                (state === "loaded"
                  ? "border-f1-border-bold bg-f1-background-bold text-f1-foreground-inverse"
                  : "border-f1-border bg-f1-background")
              }
            >
              Con datos
            </button>
            <button
              type="button"
              onClick={() => setState("empty")}
              className={
                "rounded-full border px-3 py-1 text-sm " +
                (state === "empty"
                  ? "border-f1-border-bold bg-f1-background-bold text-f1-foreground-inverse"
                  : "border-f1-border bg-f1-background")
              }
            >
              Vacío
            </button>
          </F0Box>

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <KpiTile label="Mensajes" value={kpis.total.toString()} />
            <KpiTile
              label="Aplicados"
              value={kpis.committed.toString()}
              tone="positive"
            />
            <KpiTile
              label="Pendientes"
              value={kpis.pending.toString()}
              tone="warning"
            />
            <KpiTile
              label="Fallidos / revertidos"
              value={kpis.failedOrReverted.toString()}
              tone="critical"
            />
          </div>

          {state === "empty" ? (
            <EmptyActivity />
          ) : (
            <OneDataCollection
              source={source}
              visualizations={[
                {
                  type: "table",
                  options: {
                    columns: [
                      {
                        id: "sentAt",
                        label: "Fecha",
                        sorting: "sentAt",
                        render: (item: Capture) => formatCaptureDate(item.sentAt),
                      },
                      {
                        id: "employee",
                        label: "Persona",
                        render: (item: Capture) => {
                          const e = findCaptureEmployee(item.employeeId)
                          return e ? e.fullName : "—"
                        },
                      },
                      {
                        id: "channel",
                        label: "Canal",
                        render: () => ({
                          type: "tagList" as const,
                          value: {
                            type: "dot" as const,
                            tags: [{ text: "WhatsApp", color: "viridian" as const }],
                          },
                        }),
                      },
                      {
                        id: "project",
                        label: "Proyecto",
                        render: (item: Capture) => {
                          const p = findCaptureProject(item.projectId)
                          return p ? p.name : "—"
                        },
                      },
                      {
                        id: "type",
                        label: "Tipo",
                        render: (item: Capture) =>
                          `${actionTypeEmoji[item.type]} ${actionTypeLabel[item.type]}`,
                      },
                      {
                        id: "summary",
                        label: "Resumen",
                        render: (item: Capture) => item.summary,
                      },
                      {
                        id: "amount",
                        label: "Importe",
                        sorting: "amount",
                        render: (item: Capture) =>
                          formatAmount(item.amount, item.type),
                      },
                      {
                        id: "status",
                        label: "Estado",
                        render: (item: Capture) => ({
                          type: "dotTag" as const,
                          value: {
                            label: statusLabel[item.status],
                            color: statusColor[item.status],
                          },
                        }),
                      },
                    ],
                  },
                },
              ]}
            />
          )}
        </F0Box>
      </StandardLayout>

      {selected && (
        <CaptureDetailDrawer capture={selected} onClose={closeCapture} />
      )}
    </Page>
  )
}

function KpiTile({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone?: "positive" | "warning" | "critical"
}) {
  const toneClass =
    tone === "positive"
      ? "text-f1-foreground-positive"
      : tone === "warning"
        ? "text-f1-foreground-warning"
        : tone === "critical"
          ? "text-f1-foreground-critical"
          : "text-f1-foreground"
  return (
    <F0Box
      padding="md"
      border="default"
      borderRadius="md"
      background="primary"
      display="flex"
      flexDirection="column"
      gap="xs"
    >
      <F0Text content={label} variant="description" />
      <div className={`text-2xl font-semibold ${toneClass}`}>{value}</div>
    </F0Box>
  )
}

function EmptyActivity() {
  return (
    <F0Box
      padding="lg"
      border="default"
      borderRadius="md"
      background="primary"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="md"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-f1-background-positive text-f1-foreground-positive">
        <WhatsappChat className="h-8 w-8" />
      </div>
      <F0Heading
        content="Aún no hay mensajes capturados"
        variant="heading"
        as="h2"
      />
      <F0Text
        content="Cuando alguien del equipo escriba al número conectado, los mensajes aparecerán aquí en tiempo real."
        variant="body"
      />
    </F0Box>
  )
}

/**
 * Right-edge detail drawer. We don't have an F0 Drawer primitive, so
 * this is a fixed-position panel layered above the page using
 * Tailwind. Uses an `aria-modal` dialog with an overlay click target.
 */
function CaptureDetailDrawer({
  capture,
  onClose,
}: {
  capture: Capture
  onClose: () => void
}) {
  const employee = findCaptureEmployee(capture.employeeId)
  const project = findCaptureProject(capture.projectId)
  const [reverted, setReverted] = useState(capture.status === "reverted")

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Cerrar panel"
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Detalle de captura"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-hidden bg-f1-background shadow-xl"
      >
        <header className="flex items-center justify-between border-b border-f1-border px-5 py-4">
          <F0Heading content="Detalle de captura" variant="heading" as="h2" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded p-1 hover:bg-f1-background-secondary"
          >
            <Cross className="h-4 w-4" />
          </button>
        </header>

        <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5">
          {/* Status + meta */}
          <div className="flex items-center justify-between">
            <span
              className={
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium " +
                statusPillClass(capture.status)
              }
            >
              {statusLabel[capture.status]}
            </span>
            <F0Text
              content={formatCaptureDate(capture.sentAt)}
              variant="description"
            />
          </div>

          {/* Original WhatsApp message bubble */}
          <div className="flex flex-col gap-2">
            <F0Text content="Mensaje original" variant="description" />
            <div className="flex items-start gap-3">
              {employee && (
                <F0AvatarPerson
                  size="md"
                  firstName={employee.preferredName}
                  lastName={employee.fullName.split(" ").slice(-1).join(" ")}
                />
              )}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <F0Text
                    content={employee?.fullName ?? "—"}
                    variant="body"
                  />
                  <span className="inline-flex items-center gap-1 rounded-full bg-f1-background-positive px-2 py-0.5 text-xs font-medium text-f1-foreground-positive">
                    <WhatsappChat className="h-3 w-3" />
                    WhatsApp
                  </span>
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-f1-background-positive px-3 py-2 text-sm text-f1-foreground">
                  {capture.rawMessage}
                </div>
                <F0Text content={employee?.phone ?? ""} variant="description" />
              </div>
            </div>
          </div>

          {/* Interpreted action */}
          <div className="flex flex-col gap-2">
            <F0Text content="Acción aplicada por la IA" variant="description" />
            <F0Box
              padding="md"
              border="default"
              borderRadius="md"
              background="secondary"
              display="flex"
              flexDirection="column"
              gap="sm"
            >
              <DetailRow
                label="Tipo"
                value={`${actionTypeEmoji[capture.type]} ${actionTypeLabel[capture.type]}`}
              />
              <DetailRow label="Resumen" value={capture.summary} />
              <DetailRow
                label="Importe"
                value={formatAmount(capture.amount, capture.type)}
              />
              <DetailRow
                label="Proyecto"
                value={project?.name ?? "—"}
              />
              <DetailRow
                label="Confianza IA"
                value={confidenceFor(capture)}
              />
            </F0Box>
          </div>

          {/* Audit trail */}
          <div className="flex flex-col gap-2">
            <F0Text content="Trazabilidad" variant="description" />
            <ul className="flex flex-col gap-2">
              <AuditItem
                at={formatCaptureDate(capture.sentAt)}
                text="Mensaje recibido por el bot de WhatsApp"
              />
              <AuditItem
                at={formatCaptureDate(capture.sentAt)}
                text="Clasificado por la IA y vinculado al proyecto"
              />
              {capture.status === "committed" && (
                <AuditItem
                  at={formatCaptureDate(capture.sentAt)}
                  text="Acción aplicada al proyecto"
                />
              )}
              {capture.status === "pending-hitl" && (
                <AuditItem
                  at={formatCaptureDate(capture.sentAt)}
                  text="Marcado para revisión manual (supera umbral)"
                />
              )}
              {capture.status === "failed" && (
                <AuditItem
                  at={formatCaptureDate(capture.sentAt)}
                  text="Fallo al aplicar: proyecto archivado"
                />
              )}
              {(capture.status === "reverted" || reverted) && (
                <AuditItem
                  at={formatCaptureDate(capture.sentAt)}
                  text="Revertido por un administrador"
                />
              )}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <footer className="flex items-center justify-between gap-2 border-t border-f1-border px-5 py-3">
          <F0Button label="Cerrar" variant="outline" onClick={onClose} />
          <div className="flex items-center gap-2">
            {capture.status === "pending-hitl" && (
              <F0Button label="Aprobar" onClick={() => {}} />
            )}
            {capture.status === "committed" && !reverted && (
              <F0Button
                label="Revertir"
                variant="outline"
                onClick={() => setReverted(true)}
              />
            )}
          </div>
        </footer>
      </aside>
    </div>,
    document.body
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-3 items-baseline gap-2">
      <F0Text content={label} variant="description" />
      <div className="col-span-2">
        <F0Text content={value} variant="body" />
      </div>
    </div>
  )
}

function AuditItem({ at, text }: { at: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-f1-background-info-bold" />
      <div className="flex flex-col">
        <F0Text content={text} variant="body" />
        <F0Text content={at} variant="description" />
      </div>
    </li>
  )
}

function statusPillClass(s: CaptureStatus): string {
  switch (s) {
    case "committed":
      return "bg-f1-background-positive text-f1-foreground-positive"
    case "pending-hitl":
      return "bg-f1-background-warning text-f1-foreground-warning"
    case "reverted":
      return "bg-f1-background-secondary text-f1-foreground-secondary"
    case "failed":
      return "bg-f1-background-critical text-f1-foreground-critical"
  }
}

/** Deterministic mock confidence so the same capture always shows the same %. */
function confidenceFor(c: Capture): string {
  const seed =
    (c.id.charCodeAt(c.id.length - 1) ?? 0) +
    (c.id.charCodeAt(c.id.length - 2) ?? 0)
  const pct = 80 + (seed % 20)
  return `${pct}%`
}
