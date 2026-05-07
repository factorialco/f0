import {
  F0AvatarPerson,
  F0Box,
  F0Heading,
  F0Text,
  OneFilterPicker,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  type FiltersDefinition,
  type FiltersState,
  type PresetsDefinition,
} from "@factorialco/f0-react/dist/experimental"
import {
  Briefcase,
  Clock,
  Cross,
  Money,
  Pencil,
  Target,
  WhatsappChat,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { createPortal } from "react-dom"

import { employees, findEmployee } from "@/fixtures"

import {
  actionTypeEmoji,
  actionTypeLabel,
  activityForProject,
  captureProjects,
  captures,
  findCaptureEmployee,
  formatAmount,
  formatCaptureDate,
  statusLabel,
  type ActivityEvent,
  type ActivityEventStream,
} from "../../whatsapp-capture/shared/data"
import { allocations, projects } from "../shared/data"
import {
  categoryLabel,
  statusLabel as projectStatusLabel,
} from "../shared/helpers"
import { DetailKpi } from "./DetailKpi"

/**
 * Project detail sub-page (?view=project&id=...). Sticky header with
 * breadcrumb and ResourceHeader; body has KPIs, project meta, and the
 * list of people assigned (derived from allocations).
 */
type Props = {
  projectId: string
  onBack: () => void
}

export function ProjectDetail({ projectId, onBack }: Props) {
  const project = projects.find((p) => p.id === projectId) ?? projects[0]
  const lead = findEmployee(project.leadId)
  const [activityOpen, setActivityOpen] = useState(false)

  // Map this projects-planning project to a `whatsapp-capture` project
  // by name, so the activity log finds matching captures. Returns null
  // for projects that don't have a Spanish-construction analogue.
  const captureProjectId = useMemo(() => {
    const match = captureProjects.find(
      (cp) => cp.name.toLowerCase() === project.name.toLowerCase()
    )
    return match?.id ?? null
  }, [project.name])

  // People assigned to this project = unique employees referenced by an
  // allocation for this project. The fixture only ties allocations to a
  // project (not to a specific employee per cell), so we approximate by
  // showing the lead + a slice of employees that matches the count.
  const team = useMemo(() => {
    const projectAllocations = allocations.filter(
      (a) => a.projectId === projectId
    )
    const totalHours = projectAllocations.reduce(
      (sum, a) => sum + a.hours * (a.span ?? 1),
      0
    )
    const teamSize = Math.max(
      1,
      Math.min(employees.length, Math.ceil(totalHours / 32))
    )
    // Lead first, then pad with a few colleagues (skipping duplicates).
    const others = employees
      .filter((e) => e.id !== project.leadId)
      .slice(0, teamSize - (lead ? 1 : 0))
    const list = lead ? [lead, ...others] : others
    return { list, totalHours }
  }, [projectId, project.leadId, lead])

  const consumedPct = project.plannedHours
    ? Math.round((project.trackedHours / project.plannedHours) * 100)
    : 0
  const remainingHours = Math.max(
    0,
    project.plannedHours - project.trackedHours
  )

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "employees",
              name: "Proyectos",
              href: "/p/projects-planning",
            }}
            breadcrumbs={[{ id: project.id, label: project.name }]}
          />
          <ResourceHeader
            title={project.name}
            description={`${categoryLabel[project.category]} · Cliente: ${
              project.client ?? "—"
            } · ${projectStatusLabel[project.status]}`}
            primaryAction={{
              label: "Editar proyecto",
              icon: Pencil,
              onClick: () => {},
            }}
            secondaryActions={[
              {
                label: "Registro de actividad",
                icon: WhatsappChat,
                onClick: () => setActivityOpen(true),
              },
              { label: "Volver", icon: Cross, onClick: onBack },
            ]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="lg">
          {/* KPI row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DetailKpi
              icon={Clock}
              label="Horas registradas"
              value={`${project.trackedHours}h`}
              caption={`de ${project.plannedHours}h planificadas`}
            />
            <DetailKpi
              icon={Target}
              label="Consumido"
              value={`${consumedPct}%`}
              caption={`${remainingHours}h restantes`}
            />
            <DetailKpi
              icon={Money}
              label="Tarifa"
              value={`${project.rate} €/h`}
              caption={`Estimado: ${(
                project.plannedHours * project.rate
              ).toLocaleString("es-ES")} €`}
            />
            <DetailKpi
              icon={Briefcase}
              label="Equipo asignado"
              value={`${team.list.length}`}
              caption={`${team.totalHours}h totales asignadas`}
            />
          </div>

          {/* Meta + team */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <F0Box
              padding="md"
              border="default"
              borderRadius="md"
              background="primary"
              display="flex"
              flexDirection="column"
              gap="md"
            >
              <F0Heading content="Información" variant="heading" as="h3" />
              <F0Box display="flex" flexDirection="column" gap="sm">
                <MetaRow label="Cliente" value={project.client ?? "—"} />
                <MetaRow
                  label="Categoría"
                  value={categoryLabel[project.category]}
                />
                <MetaRow
                  label="Estado"
                  value={projectStatusLabel[project.status]}
                />
                <MetaRow
                  label="Manager"
                  value={lead?.fullName ?? "Sin asignar"}
                />
                <MetaRow label="Código" value={project.code} />
              </F0Box>
            </F0Box>

            <F0Box
              padding="md"
              border="default"
              borderRadius="md"
              background="primary"
              display="flex"
              flexDirection="column"
              gap="md"
            >
              <F0Heading content="Cronograma" variant="heading" as="h3" />
              <F0Box display="flex" flexDirection="column" gap="sm">
                <F0Box display="flex" alignItems="center" gap="sm">
                  <div className="w-24">
                    <F0Text content="Inicio" variant="description" />
                  </div>
                  <F0Text content="01 may 2026" variant="body" />
                </F0Box>
                <F0Box display="flex" alignItems="center" gap="sm">
                  <div className="w-24">
                    <F0Text content="Fin previsto" variant="description" />
                  </div>
                  <F0Text content="30 jun 2026" variant="body" />
                </F0Box>
                <F0Box display="flex" alignItems="center" gap="sm">
                  <div className="w-24">
                    <F0Text content="Próximo hito" variant="description" />
                  </div>
                  <F0Text content="Demo intermedia · 15 may" variant="body" />
                </F0Box>
              </F0Box>
              <F0Text
                content="Ver en planificación →"
                variant="description"
              />
            </F0Box>

            <F0Box
              padding="md"
              border="default"
              borderRadius="md"
              background="primary"
              display="flex"
              flexDirection="column"
              gap="md"
            >
              <F0Heading
                content="Presupuesto"
                variant="heading"
                as="h3"
              />
              <div className="flex flex-col gap-3">
                <ProgressRow
                  label="Consumido"
                  current={project.trackedHours}
                  total={project.plannedHours || 1}
                  color="bg-f1-background-info-bold"
                />
                <ProgressRow
                  label="Disponible"
                  current={remainingHours}
                  total={project.plannedHours || 1}
                  color="bg-f1-background-positive-bold"
                />
              </div>
            </F0Box>
          </div>

          {/* Team list */}
          <F0Box
            padding="md"
            border="default"
            borderRadius="md"
            background="primary"
            display="flex"
            flexDirection="column"
            gap="md"
          >
            <F0Box
              display="flex"
              alignItems="center"
              justifyContent="between"
            >
              <F0Heading
                content="Equipo asignado"
                variant="heading"
                as="h3"
              />
              <F0Text
                content={`${team.list.length} personas`}
                variant="description"
              />
            </F0Box>
            <div className="flex flex-col">
              {team.list.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center justify-between border-b border-f1-border last:border-b-0 py-3"
                >
                  <div className="flex items-center gap-3">
                    <F0AvatarPerson
                      size="md"
                      firstName={
                        person.preferredName ?? person.fullName.split(" ")[0]
                      }
                      lastName={person.fullName.split(" ").slice(-1).join(" ")}
                      src={person.avatarUrl}
                    />
                    <div className="flex flex-col">
                      <F0Text content={person.fullName} variant="body" />
                      <F0Text content={person.role} variant="description" />
                    </div>
                  </div>
                  <F0Text
                    content={`${20 + ((person.id.charCodeAt(4) ?? 0) % 20)}h / sem`}
                    variant="description"
                  />
                </div>
              ))}
            </div>
          </F0Box>
        </F0Box>
      </StandardLayout>
      {activityOpen && (
        <ActivityLogPanel
          projectName={project.name}
          captureProjectId={captureProjectId}
          onClose={() => setActivityOpen(false)}
        />
      )}
    </Page>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <F0Box display="flex" alignItems="center" gap="sm">
      <div className="w-24">
        <F0Text content={label} variant="description" />
      </div>
      <F0Text content={value} variant="body" />
    </F0Box>
  )
}

function ProgressRow({
  label,
  current,
  total,
  color,
}: {
  label: string
  current: number
  total: number
  color: string
}) {
  const pct = Math.max(0, Math.min(100, Math.round((current / total) * 100)))
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <F0Text content={label} variant="description" />
        <F0Text content={`${current}h (${pct}%)`} variant="body" />
      </div>
      <div className="h-2 w-full rounded-full bg-f1-background-secondary">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

/**
 * Right-edge sliding sidepanel showing every activity event for the
 * project, including system events, team activity, and WhatsApp
 * captures. Filter chips toggle each stream independently.
 *
 * Shipped here (rather than as a generic primitive) because F0 does
 * not yet expose a Drawer component; this is intentionally
 * prototype-grade markup.
 */
function ActivityLogPanel({
  projectName,
  captureProjectId,
  onClose,
}: {
  projectName: string
  captureProjectId: string | null
  onClose: () => void
}) {
  const [activeStreams, setActiveStreams] = useState<
    Record<ActivityEventStream, boolean>
  >({
    system: true,
    team: true,
    whatsapp: true,
  })

  // If this project doesn't have a WhatsApp-Capture analogue, fall
  // back to a small set of generic system / team events so the panel
  // never reads as totally empty (the demo is about the layout +
  // filter interaction, not about which projects happen to have
  // capture data).
  const events = useMemo(() => {
    if (captureProjectId) return activityForProject(captureProjectId)
    return [
      {
        stream: "whatsapp" as const,
        id: "fallback-wa-1",
        projectId: "fallback",
        at: "2026-05-07T08:42:00Z",
        title: "Coste registrado vía WhatsApp",
        description: "1.250 € — «Material eléctrico, factura adjunta»",
        actorName: "María García",
        actionType: "cost" as const,
      },
      {
        stream: "system" as const,
        id: "fallback-sys-1",
        projectId: "fallback",
        at: "2026-05-07T09:00:00Z",
        title: "Proyecto creado",
        description: `«${projectName}» dado de alta en Planificación`,
      },
      {
        stream: "whatsapp" as const,
        id: "fallback-wa-2",
        projectId: "fallback",
        at: "2026-05-06T17:15:00Z",
        title: "Horas registradas vía WhatsApp",
        description: "6 h — Carlos Ruiz cierra la jornada",
        actorName: "Carlos Ruiz",
        actionType: "hours" as const,
      },
      {
        stream: "team" as const,
        id: "fallback-team-1",
        projectId: "fallback",
        at: "2026-05-06T11:00:00Z",
        title: "Equipo asignado",
        description: "Se añadieron 2 personas al equipo",
        actorName: "Andrés Martínez",
      },
      {
        stream: "whatsapp" as const,
        id: "fallback-wa-3",
        projectId: "fallback",
        at: "2026-05-05T13:20:00Z",
        title: "Documento recibido vía WhatsApp",
        description: "albarán_proveedor.pdf — adjuntado al proyecto",
        actorName: "María García",
        actionType: "document" as const,
      },
      {
        stream: "whatsapp" as const,
        id: "fallback-wa-4",
        projectId: "fallback",
        at: "2026-05-05T10:05:00Z",
        title: "Gasto registrado vía WhatsApp",
        description: "78,40 € — «Comida del equipo, ticket adjunto»",
        actorName: "Carlos Ruiz",
        actionType: "expense" as const,
      },
      {
        stream: "system" as const,
        id: "fallback-sys-2",
        projectId: "fallback",
        at: "2026-05-05T08:00:00Z",
        title: "Hito creado",
        description: "Próximo hito programado para el 15 may",
      },
      {
        stream: "whatsapp" as const,
        id: "fallback-wa-5",
        projectId: "fallback",
        at: "2026-05-04T16:30:00Z",
        title: "Nota registrada vía WhatsApp",
        description: "«Cliente pide adelantar entrega una semana»",
        actorName: "María García",
        actionType: "note" as const,
      },
    ]
  }, [captureProjectId, projectName])

  const visible = events.filter((e) => activeStreams[e.stream])

  const counts = {
    system: events.filter((e) => e.stream === "system").length,
    team: events.filter((e) => e.stream === "team").length,
    whatsapp: events.filter((e) => e.stream === "whatsapp").length,
  }

  // OneFilterPicker preset bar: a single `streams` filter whose value is
  // the list of currently-visible streams. Three additive presets toggle
  // each stream on/off while preserving the others (matches the
  // canonical Factorial filter-preset interaction).
  const filtersDef = useMemo(
    () =>
      ({
        streams: {
          type: "in",
          label: "Streams",
          options: {
            options: [
              { value: "system", label: "Sistema" },
              { value: "team", label: "Equipo" },
              { value: "whatsapp", label: "WhatsApp" },
            ],
          },
        },
      }) satisfies FiltersDefinition,
    []
  )

  const filtersValue: FiltersState<typeof filtersDef> = {
    streams: (Object.keys(activeStreams) as ActivityEventStream[]).filter(
      (k) => activeStreams[k]
    ),
  }

  const presets: PresetsDefinition<typeof filtersDef> = [
    {
      label: "Sistema",
      filter: { streams: ["system"] },
      itemsCount: () => counts.system,
      mode: "additive",
    },
    {
      label: "Equipo",
      filter: { streams: ["team"] },
      itemsCount: () => counts.team,
      mode: "additive",
    },
    {
      label: "WhatsApp",
      filter: { streams: ["whatsapp"] },
      itemsCount: () => counts.whatsapp,
      mode: "additive",
    },
  ]

  const handleFiltersChange = (next: FiltersState<typeof filtersDef>) => {
    const nextStreams = (next.streams ?? []) as ActivityEventStream[]
    setActiveStreams({
      system: nextStreams.includes("system"),
      team: nextStreams.includes("team"),
      whatsapp: nextStreams.includes("whatsapp"),
    })
  }

  // Render via portal to document.body so the fixed positioning
  // escapes any ancestor with `transform`, `filter`, or `contain`
  // that would otherwise turn `position: fixed` into a containing-
  // block-relative position (which is what was making the panel
  // render inline below the page header).
  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Cerrar registro de actividad"
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`Registro de actividad de ${projectName}`}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-hidden bg-f1-background shadow-xl"
      >
        <header className="flex items-center justify-between border-b border-f1-border px-5 py-4">
          <div className="flex flex-col">
            <F0Heading
              content="Registro de actividad"
              variant="heading"
              as="h2"
            />
            <F0Text content={projectName} variant="description" />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded p-1 hover:bg-f1-background-secondary"
          >
            <Cross className="h-4 w-4" />
          </button>
        </header>

        {/* Filter presets — canonical OneFilterPicker preset bar */}
        <div className="border-b border-f1-border px-5 py-3">
          <OneFilterPicker
            filters={filtersDef}
            value={filtersValue}
            presets={presets}
            onChange={handleFiltersChange}
          />
        </div>

        <div className="flex flex-1 flex-col gap-0 overflow-y-auto px-5 py-4">
          {visible.length === 0 && (
            <F0Text
              content="No hay eventos visibles con los filtros activos."
              variant="description"
            />
          )}
          {visible.map((e) => (
            <ActivityRow key={e.id} event={e} />
          ))}
        </div>
      </aside>
    </div>,
    document.body
  )
}





function ActivityRow({ event }: { event: ActivityEvent }) {
  if (event.stream === "whatsapp" && "captureId" in event) {
    const cap = captures.find((c) => c.id === event.captureId)
    if (!cap) return null
    const employee = findCaptureEmployee(cap.employeeId)
    return (
      <div className="flex items-start gap-3 border-b border-f1-border py-3 last:border-b-0">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-f1-background-positive text-f1-foreground-positive">
          <WhatsappChat className="h-4 w-4" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <F0Text
              content={`${actionTypeEmoji[cap.type]} ${actionTypeLabel[cap.type]} · ${cap.summary}`}
              variant="body"
            />
            <span className="shrink-0 text-xs text-f1-foreground-secondary">
              {formatCaptureDate(cap.sentAt)}
            </span>
          </div>
          <F0Text
            content={`${employee?.fullName ?? "—"} · ${formatAmount(cap.amount, cap.type)} · ${statusLabel[cap.status]}`}
            variant="description"
          />
          <div className="rounded-md bg-f1-background-positive px-3 py-1.5 text-sm text-f1-foreground">
            {cap.rawMessage}
          </div>
        </div>
      </div>
    )
  }

  if (event.stream === "whatsapp") {
    // Inline WhatsApp event (no linked capture record)
    const emoji = event.actionType ? actionTypeEmoji[event.actionType] : "💬"
    return (
      <div className="flex items-start gap-3 border-b border-f1-border py-3 last:border-b-0">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-f1-background-positive text-f1-foreground-positive">
          <WhatsappChat className="h-4 w-4" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <F0Text content={`${emoji} ${event.title}`} variant="body" />
            <span className="shrink-0 text-xs text-f1-foreground-secondary">
              {formatCaptureDate(event.at)}
            </span>
          </div>
          <F0Text content={event.description} variant="description" />
          {event.actorName && (
            <F0Text
              content={`Por ${event.actorName}`}
              variant="description"
            />
          )}
        </div>
      </div>
    )
  }

  // system / team
  const dotColor =
    event.stream === "system"
      ? "bg-f1-background-info-bold"
      : "bg-f1-background-positive-bold"
  return (
    <div className="flex items-start gap-3 border-b border-f1-border py-3 last:border-b-0">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-f1-background-secondary">
        <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <div className="flex items-center justify-between gap-2">
          <F0Text content={event.title} variant="body" />
          <span className="shrink-0 text-xs text-f1-foreground-secondary">
            {formatCaptureDate(event.at)}
          </span>
        </div>
        <F0Text content={event.description} variant="description" />
        {event.actorName && (
          <F0Text
            content={`Por ${event.actorName}`}
            variant="description"
          />
        )}
      </div>
    </div>
  )
}
