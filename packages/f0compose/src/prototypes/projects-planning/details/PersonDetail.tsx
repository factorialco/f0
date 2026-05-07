import { F0AvatarPerson, F0Box, F0Heading, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"
import {
  Briefcase,
  Clock,
  Cross,
  Envelope,
  Pencil,
  Target,
} from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"

import { findDepartment, findEmployee, findTeam } from "@/fixtures"

import { allocations, projects } from "../shared/data"
import { categoryLabel } from "../shared/helpers"
import { DetailKpi } from "./DetailKpi"

/**
 * Person detail sub-page (?view=person&id=...). Mirrors ProjectDetail
 * shape: sticky breadcrumb header, KPIs, info / capacity panels, and the
 * list of projects this person is currently assigned to.
 *
 * Project assignments are derived from the same `allocations` fixture as
 * the planning grid — for the demo, every employee is conceptually part
 * of every active project that has allocations, capped to the first 3
 * projects so the list stays believable.
 */
type Props = {
  employeeId: string
  onBack: () => void
  onOpenProject: (id: string) => void
}

export function PersonDetail({ employeeId, onBack, onOpenProject }: Props) {
  const person = findEmployee(employeeId)
  const department = person ? findDepartment(person.departmentId) : null
  const team = person ? findTeam(person.teamId) : null
  const manager = person?.managerId ? findEmployee(person.managerId) : null

  // Derive a believable workload from the allocations fixture.
  const workload = useMemo(() => {
    const activeProjectIds = new Set(allocations.map((a) => a.projectId))
    const assigned = projects
      .filter(
        (p) => p.status === "active" && activeProjectIds.has(p.id)
      )
      .slice(0, 3)
    // Hours/week per project — deterministic per (employee, project).
    const seed = (employeeId.charCodeAt(4) ?? 0) % 7
    const rows = assigned.map((p, idx) => ({
      project: p,
      hoursPerWeek: 8 + ((seed + idx * 3) % 16),
    }))
    const totalAssigned = rows.reduce((sum, r) => sum + r.hoursPerWeek, 0)
    return { rows, totalAssigned }
  }, [employeeId])

  if (!person) {
    return (
      <Page
        header={
          <PageHeader
            module={{
              id: "employees",
              name: "Proyectos",
              href: "/p/projects-planning",
            }}
            breadcrumbs={[{ id: "missing", label: "Persona no encontrada" }]}
          />
        }
      >
        <StandardLayout>
          <F0Text
            content="No encontramos esta persona."
            variant="description"
          />
        </StandardLayout>
      </Page>
    )
  }

  const capacity = 40
  const utilizationPct = Math.min(
    100,
    Math.round((workload.totalAssigned / capacity) * 100)
  )
  const available = Math.max(0, capacity - workload.totalAssigned)

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "employees",
              name: "Proyectos",
              href: "/p/projects-planning?tab=people",
            }}
            breadcrumbs={[{ id: person.id, label: person.fullName }]}
          />
          <ResourceHeader
            title={person.fullName}
            description={`${person.role}${
              department ? ` · ${department.name}` : ""
            }${team ? ` · ${team.name}` : ""}`}
            primaryAction={{
              label: "Editar perfil",
              icon: Pencil,
              onClick: () => {},
            }}
            secondaryActions={[
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
              label="Capacidad"
              value={`${capacity}h / sem`}
              caption="Horario contratado"
            />
            <DetailKpi
              icon={Target}
              label="Asignado"
              value={`${workload.totalAssigned}h`}
              caption={`${utilizationPct}% de utilización`}
            />
            <DetailKpi
              icon={Briefcase}
              label="Disponible"
              value={`${available}h`}
              caption={
                available > 0 ? "Horas libres esta semana" : "Sin holgura"
              }
            />
            <DetailKpi
              icon={Briefcase}
              label="Proyectos"
              value={`${workload.rows.length}`}
              caption="Asignaciones activas"
            />
          </div>

          {/* Profile + capacity panels */}
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
              <F0Heading content="Perfil" variant="heading" as="h3" />
              <F0Box display="flex" alignItems="center" gap="md">
                <F0AvatarPerson
                  size="lg"
                  firstName={
                    person.preferredName ?? person.fullName.split(" ")[0]
                  }
                  lastName={person.fullName.split(" ").slice(-1).join(" ")}
                  src={person.avatarUrl}
                />
                <F0Box display="flex" flexDirection="column" gap="xs">
                  <F0Text content={person.fullName} variant="body" />
                  <F0Text content={person.role} variant="description" />
                </F0Box>
              </F0Box>
              <F0Box display="flex" flexDirection="column" gap="sm">
                <MetaRow
                  label="Departamento"
                  value={department?.name ?? "—"}
                />
                <MetaRow label="Equipo" value={team?.name ?? "—"} />
                <MetaRow
                  label="Manager"
                  value={manager?.fullName ?? "Sin manager"}
                />
                <MetaRow label="Ubicación" value={person.location} />
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
              <F0Heading content="Contacto" variant="heading" as="h3" />
              <div className="flex items-center gap-2">
                <Envelope className="h-4 w-4 text-f1-icon" />
                <F0Text content={person.email} variant="body" />
              </div>
              <MetaRow
                label="Fecha alta"
                value={new Date(person.hireDate).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              />
              <MetaRow
                label="Estado"
                value={
                  person.status === "active"
                    ? "Activo"
                    : person.status === "on-leave"
                      ? "De baja"
                      : "Saliendo"
                }
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
              <F0Heading content="Carga semanal" variant="heading" as="h3" />
              <ProgressRow
                label="Asignado"
                current={workload.totalAssigned}
                total={capacity}
                color="bg-f1-background-info-bold"
              />
              <ProgressRow
                label="Disponible"
                current={available}
                total={capacity}
                color="bg-f1-background-positive-bold"
              />
              <F0Text
                content={
                  utilizationPct > 90
                    ? "Cerca de overbooking — revisa antes de añadir más horas."
                    : "Carga saludable."
                }
                variant="description"
              />
            </F0Box>
          </div>

          {/* Project assignments */}
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
                content="Proyectos asignados"
                variant="heading"
                as="h3"
              />
              <F0Text
                content={`${workload.rows.length} activos`}
                variant="description"
              />
            </F0Box>
            <div className="flex flex-col">
              {workload.rows.map(({ project, hoursPerWeek }) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => onOpenProject(project.id)}
                  className="flex items-center justify-between border-b border-f1-border last:border-b-0 py-3 text-left hover:bg-f1-background-hover"
                >
                  <div className="flex flex-col">
                    <F0Text content={project.name} variant="body" />
                    <F0Text
                      content={`${categoryLabel[project.category]} · ${
                        project.client ?? "—"
                      }`}
                      variant="description"
                    />
                  </div>
                  <F0Text
                    content={`${hoursPerWeek}h / sem`}
                    variant="description"
                  />
                </button>
              ))}
              {workload.rows.length === 0 ? (
                <F0Text
                  content="Sin proyectos asignados."
                  variant="description"
                />
              ) : null}
            </div>
          </F0Box>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <F0Box display="flex" alignItems="center" gap="sm">
      <div className="w-28">
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
