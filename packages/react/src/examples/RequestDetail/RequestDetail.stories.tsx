import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Alert } from "@/components/F0Alert"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0Text } from "@/components/F0Text"
import { F0TextAreaInput } from "@/components/F0TextAreaInput"
import { F0TagStatus, type StatusVariant } from "@/components/tags/F0TagStatus"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import {
  Building,
  Check,
  CheckCircle,
  Clock,
  Comment,
  Cross,
  FileSigned,
  Home,
  Inbox,
  Marker,
  Pencil,
  Receipt,
  ShoppingCart,
} from "@/icons/app"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Menu } from "@/patterns/Navigation/Sidebar/Menu"
import { SidebarHeader } from "@/patterns/Navigation/Sidebar/Header"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { F0TimelineRow } from "@/sds/TimeLine"
import type { TimelineRowStatus } from "@/sds/TimeLine"

/* ========================================================================== */
/*  Domain model                                                              */
/* ========================================================================== */

type Role = "admin" | "employee"

type ReqState =
  | "pending"
  | "in-purchase"
  | "delivered"
  | "rejected"
  | "in-dispute"

type StepKey = "created" | "budget" | "approval" | "purchase" | "delivery"

interface StateMeta {
  status: { text: string; variant: StatusVariant }
  steps: Record<StepKey, TimelineRowStatus>
  /** Completed subtasks inside the purchase multitask group (0–3). */
  purchaseDone: number
  /** Optional banner shown at the top of the page. */
  alert?: {
    variant: "critical" | "warning" | "positive" | "info"
    title: string
    description: string
  }
}

const STATE_META: Record<ReqState, StateMeta> = {
  pending: {
    status: { text: "Pendiente de aprobación", variant: "warning" },
    steps: {
      created: "completed",
      budget: "completed",
      approval: "in-progress",
      purchase: "not-started",
      delivery: "not-started",
    },
    purchaseDone: 0,
  },
  "in-purchase": {
    status: { text: "En compra", variant: "info" },
    steps: {
      created: "completed",
      budget: "completed",
      approval: "completed",
      purchase: "in-progress",
      delivery: "not-started",
    },
    purchaseDone: 1,
  },
  delivered: {
    status: { text: "Entregada", variant: "positive" },
    steps: {
      created: "completed",
      budget: "completed",
      approval: "completed",
      purchase: "completed",
      delivery: "completed",
    },
    purchaseDone: 3,
    alert: {
      variant: "positive",
      title: "Solicitud completada",
      description:
        "Los 3 equipos se entregaron el 27 jun 2026. Factura F-2026-0481 conciliada.",
    },
  },
  rejected: {
    status: { text: "Rechazada", variant: "critical" },
    steps: {
      created: "completed",
      budget: "completed",
      approval: "in-progress",
      purchase: "not-started",
      delivery: "not-started",
    },
    purchaseDone: 0,
    alert: {
      variant: "critical",
      title: "Solicitud rechazada por Daniel Ortega",
      description:
        "Motivo: presupuesto Q3 ya comprometido. Sugiere reenviar en Q4 o reducir a 2 unidades.",
    },
  },
  "in-dispute": {
    status: { text: "En disputa", variant: "critical" },
    steps: {
      created: "completed",
      budget: "completed",
      approval: "completed",
      purchase: "completed",
      delivery: "in-progress",
    },
    purchaseDone: 3,
    alert: {
      variant: "warning",
      title: "Incidencia abierta con el proveedor",
      description:
        "1 de 3 equipos llegó con la pantalla dañada. Reclamación #INC-204 en curso con K-tuin.",
    },
  },
}

/** Header actions per state (admin only). */
const headerActions = (
  state: ReqState,
  noop: () => void
): {
  primary?: { label: string; icon?: typeof Check; onClick: () => void }
  secondary: { label: string; icon?: typeof Check; onClick: () => void }[]
} => {
  switch (state) {
    case "pending":
      return {
        primary: { label: "Aprobar solicitud", icon: Check, onClick: noop },
        secondary: [
          { label: "Rechazar", icon: Cross, onClick: noop },
          { label: "Reasignar", onClick: noop },
        ],
      }
    case "in-purchase":
      return {
        primary: { label: "Marcar como entregada", icon: Inbox, onClick: noop },
        secondary: [{ label: "Editar PO", icon: Pencil, onClick: noop }],
      }
    case "delivered":
      return {
        secondary: [{ label: "Ver factura", icon: Receipt, onClick: noop }],
      }
    case "rejected":
      return {
        primary: {
          label: "Reabrir solicitud",
          icon: CheckCircle,
          onClick: noop,
        },
        secondary: [{ label: "Duplicar", onClick: noop }],
      }
    case "in-dispute":
      return {
        primary: { label: "Resolver disputa", icon: Check, onClick: noop },
        secondary: [
          { label: "Contactar proveedor", icon: Comment, onClick: noop },
        ],
      }
  }
}

/* ========================================================================== */
/*  Small building blocks                                                     */
/* ========================================================================== */

const RoleToggle = ({
  role,
  onChange,
}: {
  role: Role
  onChange: (r: Role) => void
}) => (
  <div className="flex items-center gap-1 rounded-lg bg-f1-background-secondary p-1">
    <F0Button
      label="Vista Admin"
      size="sm"
      variant={role === "admin" ? "default" : "ghost"}
      onClick={() => onChange("admin")}
    />
    <F0Button
      label="Vista Empleado"
      size="sm"
      variant={role === "employee" ? "default" : "ghost"}
      onClick={() => onChange("employee")}
    />
  </div>
)

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-5">
    {children}
  </div>
)

const SideBox = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div className="overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
    <div className="border-b border-solid border-f1-border-secondary px-4 py-3">
      <F0Text variant="label" content={title} />
    </div>
    <div className="p-4">{children}</div>
  </div>
)

const SectionLabel = ({ children }: { children: string }) => (
  <p className="mb-3 pl-1.5 text-sm font-semibold text-f1-foreground-secondary">
    {children.toLocaleUpperCase()}
  </p>
)

const Approver = ({
  firstName,
  lastName,
  role,
  status,
}: {
  firstName: string
  lastName: string
  role: string
  status: { text: string; variant: StatusVariant }
}) => (
  <div className="flex items-center gap-3 py-2">
    <F0AvatarPerson firstName={firstName} lastName={lastName} size="sm" />
    <div className="flex min-w-0 flex-1 flex-col">
      <F0Text variant="body" content={`${firstName} ${lastName}`} />
      <F0Text variant="small" content={role} />
    </div>
    <F0TagStatus text={status.text} variant={status.variant} />
  </div>
)

const CommentItem = ({
  firstName,
  lastName,
  time,
  body,
}: {
  firstName: string
  lastName: string
  time: string
  body: string
}) => (
  <div className="flex gap-3 py-3">
    <F0AvatarPerson firstName={firstName} lastName={lastName} size="sm" />
    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
      <div className="flex items-baseline gap-2">
        <F0Text variant="body" content={`**${firstName} ${lastName}**`} />
        <F0Text variant="small" content={time} />
      </div>
      <F0Text variant="body" content={body} />
    </div>
  </div>
)

/* ========================================================================== */
/*  Phase 1 — the form, grouped into sections                                 */
/* ========================================================================== */

const FORM_SECTIONS: {
  title: string
  showSeeMore?: boolean
  details: React.ComponentProps<typeof DetailsItemsList>["details"]
}[] = [
  {
    title: "Producto",
    details: [
      {
        title: "Producto",
        content: { type: "item", text: 'MacBook Pro 16" M4 Max' },
      },
      {
        title: "Categoría",
        content: {
          type: "dot-tag",
          text: "Hardware · Portátiles",
          color: "viridian",
        },
      },
      { title: "Cantidad", content: { type: "item", text: "3 uds" } },
      {
        title: "SKU",
        content: { type: "item", text: "MRW43Y/A", action: { type: "copy" } },
      },
    ],
  },
  {
    title: "Proveedor y precio",
    details: [
      {
        title: "Proveedor",
        content: {
          type: "item",
          text: "Apple Business · K-tuin",
          action: { type: "copy" },
        },
      },
      {
        title: "Precio unitario",
        content: { type: "item", text: "3.499,00 €" },
      },
      {
        title: "Descuento",
        content: { type: "item", text: "−4% (acuerdo marco)" },
      },
      { title: "Coste total", content: { type: "item", text: "10.497,00 €" } },
      { title: "Moneda", content: { type: "item", text: "EUR" } },
      {
        title: "Condiciones de pago",
        content: { type: "item", text: "30 días fecha factura" },
      },
    ],
  },
  {
    title: "Presupuesto y entrega",
    details: [
      {
        title: "Centro de coste",
        content: { type: "item", text: "Marketing · Brand" },
      },
      {
        title: "Presupuesto",
        content: { type: "item", text: "Q3 2026 · OPEX" },
      },
      {
        title: "Estado presupuesto",
        content: { type: "status-tag", text: "Validado", variant: "positive" },
      },
      {
        title: "Fecha necesaria",
        content: { type: "item", text: "28 jun 2026" },
      },
      {
        title: "Dirección de entrega",
        content: { type: "item", text: "Oficina BCN · Llacuna 11" },
      },
      {
        title: "Prioridad",
        content: { type: "status-tag", text: "Alta", variant: "critical" },
      },
    ],
  },
  {
    title: "Información adicional",
    showSeeMore: true,
    details: [
      {
        title: "Justificación",
        verticalLayout: true,
        content: {
          type: "item",
          text: "Sustitución de equipos 2021 que no soportan Figma + edición 4K.",
        },
      },
      { title: "¿Recurrente?", content: { type: "item", text: "No" } },
      {
        title: "Aprobación legal",
        content: { type: "item", text: "No requerida" },
      },
      {
        title: "Cuenta contable",
        content: { type: "item", text: "6260000 · Equipos" },
      },
    ],
  },
]

/* ========================================================================== */
/*  Phase 2 — timeline (with a collapsible multitask purchase group)          */
/* ========================================================================== */

const PurchaseMultitask = ({
  status,
  done,
  isLast,
}: {
  status: TimelineRowStatus
  done: number
  isLast?: boolean
}) => {
  const [expanded, setExpanded] = useState(status === "in-progress")
  const subStatus = (idx: number): TimelineRowStatus =>
    idx < done
      ? "completed"
      : idx === done && status !== "not-started"
        ? "in-progress"
        : "not-started"

  return (
    <F0TimelineRow
      status={status}
      title="Tareas de compra"
      taskCount={3}
      completedCount={done}
      expanded={expanded}
      onExpandToggle={() => setExpanded((e) => !e)}
      isLast={isLast}
      items={[
        {
          status: subStatus(0),
          icon: Comment,
          title: "Negociar con el proveedor",
          description: "Confirmar precio y plazo con K-tuin",
        },
        {
          status: subStatus(1),
          icon: FileSigned,
          title: "Emitir orden de compra (PO)",
          description: "PO-2026-0481 · 10.497,00 €",
        },
        {
          status: subStatus(2),
          icon: Inbox,
          title: "Confirmar recepción del material",
          description: "Albarán y verificación de serie",
        },
      ]}
    />
  )
}

const Timeline = ({
  state,
  isAdmin,
  noop,
}: {
  state: ReqState
  isAdmin: boolean
  noop: () => void
}) => {
  const s = STATE_META[state].steps
  const approvalDescription =
    state === "rejected"
      ? "Rechazada por Daniel Ortega · 4 jun"
      : s.approval === "completed"
        ? "Aprobada por Daniel Ortega · 4 jun"
        : "Asignado a Daniel Ortega (Head of Marketing) · esperando desde hace 1 día"

  return (
    <Card>
      <F0TimelineRow
        status={s.created}
        icon={Marker}
        title="Solicitud creada"
        description="Lucía Márquez envió el formulario · 3 jun, 09:14"
      />
      <F0TimelineRow
        status={s.budget}
        icon={Receipt}
        title="Validación de presupuesto"
        description="Aprobado por Finanzas · queda 38% del presupuesto Q3"
      />
      <F0TimelineRow
        status={s.approval}
        icon={CheckCircle}
        title="Aprobación del manager"
        description={approvalDescription}
        metadata={[
          {
            label: "",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                { type: "person", firstName: "Daniel", lastName: "Ortega" },
              ],
            },
          },
        ]}
        primaryAction={
          isAdmin && s.approval === "in-progress" && state !== "rejected"
            ? { label: "Aprobar", icon: Check, onClick: noop }
            : undefined
        }
        secondaryActions={
          isAdmin && s.approval === "in-progress" && state !== "rejected"
            ? [
                { label: "Pedir info", icon: Comment, onClick: noop },
                { label: "Rechazar", icon: Cross, onClick: noop },
              ]
            : undefined
        }
      />
      <PurchaseMultitask
        status={s.purchase}
        done={STATE_META[state].purchaseDone}
      />
      <F0TimelineRow
        status={s.delivery}
        icon={Inbox}
        title="Entrega"
        description={
          state === "delivered"
            ? "Entregado el 27 jun 2026"
            : state === "in-dispute"
              ? "Entrega parcial · incidencia abierta"
              : "Previsión: 26 – 28 jun 2026"
        }
        isLast
      />
    </Card>
  )
}

/* ========================================================================== */
/*  The page                                                                  */
/* ========================================================================== */

const RequestDetailPage = ({
  role,
  onRoleChange,
  state,
}: {
  role: Role
  onRoleChange: (r: Role) => void
  state: ReqState
}) => {
  const isAdmin = role === "admin"
  const noop = () => {}
  const meta = STATE_META[state]
  const actions = headerActions(state, noop)

  const approverStatus = (): { text: string; variant: StatusVariant } => {
    if (state === "rejected") return { text: "Rechazado", variant: "critical" }
    if (meta.steps.approval === "completed")
      return { text: "Aprobado", variant: "positive" }
    return { text: "Pendiente", variant: "warning" }
  }

  const progressPct =
    state === "delivered"
      ? 100
      : state === "in-dispute"
        ? 90
        : state === "in-purchase"
          ? 65
          : state === "rejected"
            ? 40
            : 42
  const stepLabel =
    state === "delivered"
      ? "Completada"
      : state === "rejected"
        ? "Detenida"
        : `Paso ${meta.steps.delivery === "completed" ? 5 : meta.steps.purchase !== "not-started" ? 4 : 3} de 5`

  return (
    <div className="min-h-screen bg-f1-background">
      <div className="flex items-center justify-between border-b border-solid border-f1-border-secondary bg-f1-background px-6 py-3">
        <div className="flex items-center gap-2">
          <F0Text variant="small" content="Solicitudes" />
          <F0Text variant="small" content="/" />
          <F0Text variant="body" content="**REQ-1042**" />
        </div>
        <RoleToggle role={role} onChange={onRoleChange} />
      </div>

      <div className="mx-auto w-full max-w-[1080px] px-6 py-7">
        {meta.alert && (
          <div className="mb-6">
            <F0Alert
              variant={meta.alert.variant}
              title={meta.alert.title}
              description={meta.alert.description}
            />
          </div>
        )}

        <ResourceHeader
          title='16" MacBook Pro M4 Max — Equipo de Diseño'
          description="Sustitución de equipo para 3 diseñadores del nuevo squad de Brand. Los equipos actuales (2021) no soportan Figma + edición 4K simultánea."
          status={{
            label: "Estado",
            text: meta.status.text,
            variant: meta.status.variant,
          }}
          metadata={[
            {
              label: "Solicitante",
              value: {
                type: "avatar",
                variant: {
                  type: "person",
                  firstName: "Lucía",
                  lastName: "Márquez",
                },
                text: "Lucía Márquez",
              },
            },
            {
              label: "Categoría",
              value: { type: "dot-tag", label: "Hardware", color: "viridian" },
            },
            {
              label: "Creada",
              value: { type: "date", formattedDate: "3 jun 2026" },
            },
            {
              label: "Importe",
              value: { type: "text", content: "10.497,00 €" },
            },
          ]}
          primaryAction={isAdmin ? actions.primary : undefined}
          secondaryActions={
            isAdmin
              ? actions.secondary
              : state === "pending"
                ? [{ label: "Editar", icon: Pencil, onClick: noop }]
                : []
          }
        />

        <div className="mt-8 grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_320px]">
          {/* MAIN */}
          <div className="flex flex-col gap-7">
            {/* Phase 1: sectioned form */}
            <div>
              <SectionLabel>Detalle de la solicitud</SectionLabel>
              <div className="flex flex-col gap-6">
                {FORM_SECTIONS.map((section) => (
                  <DetailsItemsList
                    key={section.title}
                    title={section.title}
                    tableView
                    details={section.details}
                    showSeeMore={section.showSeeMore}
                    onClickSeeMore={noop}
                  />
                ))}
              </div>
            </div>

            {/* Phase 2: timeline with multitask */}
            <div>
              <SectionLabel>Actividad</SectionLabel>
              <Timeline state={state} isAdmin={isAdmin} noop={noop} />
            </div>

            {/* Comments */}
            <div>
              <SectionLabel>Comentarios</SectionLabel>
              <Card>
                <CommentItem
                  firstName="Daniel"
                  lastName="Ortega"
                  time="ayer · 18:02"
                  body={
                    "¿Necesitáis los 16″ o con los 14″ M4 Pro vais servidos? La diferencia son ~1.500 € en total. @Lucía"
                  }
                />
                <CommentItem
                  firstName="Lucía"
                  lastName="Márquez"
                  time="hoy · 09:30"
                  body={
                    "Necesitamos los 16″ sí o sí por la pantalla para retoque. El M4 Max además nos da margen para vídeo 🙏"
                  }
                />
                <div className="mt-2 flex items-start gap-3 border-t border-solid border-f1-border-secondary pt-4">
                  <F0AvatarPerson
                    firstName="Jordi"
                    lastName="Espinosa"
                    size="sm"
                  />
                  <div className="flex flex-1 flex-col gap-2">
                    <F0TextAreaInput
                      placeholder="Escribe un comentario… usa @ para mencionar"
                      value=""
                      onChange={noop}
                    />
                    <div className="flex justify-end">
                      <F0Button label="Comentar" size="sm" onClick={noop} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-5 self-start lg:sticky lg:top-4">
            <SideBox title="Progreso">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <F0Text variant="small" content={stepLabel} />
                  <F0Text variant="small" content={`**${progressPct}%**`} />
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-f1-background-secondary">
                  <div
                    className="h-full rounded-full bg-f1-background-bold"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            </SideBox>

            <SideBox title="Aprobadores">
              <div className="-my-1 flex flex-col">
                <Approver
                  firstName="Carlos"
                  lastName="Fernández"
                  role="Finanzas · Presupuesto"
                  status={{ text: "Aprobado", variant: "positive" }}
                />
                <Approver
                  firstName="Daniel"
                  lastName="Ortega"
                  role="Head of Marketing"
                  status={approverStatus()}
                />
                <Approver
                  firstName="Procurement"
                  lastName="Team"
                  role="Emisión de PO"
                  status={
                    meta.steps.purchase === "not-started"
                      ? { text: "En espera", variant: "neutral" }
                      : { text: "Activo", variant: "info" }
                  }
                />
              </div>
            </SideBox>

            <SideBox title="Resumen">
              <DetailsItemsList
                details={[
                  {
                    title: "Proveedor",
                    content: { type: "item", text: "K-tuin" },
                    isHorizontal: true,
                  },
                  {
                    title: "Importe",
                    content: { type: "item", text: "10.497,00 €" },
                    isHorizontal: true,
                  },
                  {
                    title: "Entrega",
                    content: { type: "item", text: "28 jun 2026" },
                    isHorizontal: true,
                  },
                ]}
              />
            </SideBox>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========================================================================== */
/*  Stateful wrapper + stories                                                */
/* ========================================================================== */

const RequestDetailDemo = ({
  initialRole = "admin",
  state = "pending",
}: {
  initialRole?: Role
  state?: ReqState
}) => {
  const [role, setRole] = useState<Role>(initialRole)
  return <RequestDetailPage role={role} onRoleChange={setRole} state={state} />
}

/* ========================================================================== */
/*  Phase 4 — real F0 navigation shell (ApplicationFrame + Sidebar)           */
/* ========================================================================== */

const ProcurementSidebar = () => {
  const [company, setCompany] = useState("1")
  return (
    <Sidebar
      header={
        <SidebarHeader
          companies={[
            { id: "1", name: "Factorial", logo: "/avatars/factorial.png" },
            { id: "2", name: "Acme Corp" },
          ]}
          selected={company}
          onChange={setCompany}
          isExpanded
        />
      }
      body={
        <Menu
          tree={[
            {
              id: "root",
              title: "",
              isRoot: true,
              isSortable: false,
              items: [
                { label: "Inicio", icon: Home, href: "/", exactMatch: true },
                {
                  label: "Mis solicitudes",
                  icon: ShoppingCart,
                  href: "/requests",
                },
                {
                  label: "Por aprobar",
                  icon: Inbox,
                  href: "/approvals",
                  badge: 3,
                },
                { label: "Pendientes", icon: Clock, href: "/pending" },
              ],
            },
            {
              id: "catalog",
              title: "Catálogo",
              isOpen: true,
              isSortable: false,
              items: [
                { label: "Proveedores", icon: Building, href: "/suppliers" },
                { label: "Productos", icon: Receipt, href: "/products" },
              ],
            },
          ]}
        />
      }
    />
  )
}

const FramedDemo = ({ state = "pending" }: { state?: ReqState }) => {
  const [role, setRole] = useState<Role>("admin")
  return (
    <ApplicationFrame sidebar={<ProcurementSidebar />}>
      <RequestDetailPage role={role} onRoleChange={setRole} state={state} />
    </ApplicationFrame>
  )
}

const meta = {
  title: "Procurement Request Detail",
  component: RequestDetailDemo,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof RequestDetailDemo>

export default meta
type Story = StoryObj<typeof meta>

/* Role views (pending state) */
export const AdminView: Story = {
  args: { initialRole: "admin", state: "pending" },
}
export const EmployeeView: Story = {
  args: { initialRole: "employee", state: "pending" },
}

/* Phase 3 — request states (admin view) */
export const StateInPurchase: Story = {
  args: { initialRole: "admin", state: "in-purchase" },
}
export const StateDelivered: Story = {
  args: { initialRole: "admin", state: "delivered" },
}
export const StateRejected: Story = {
  args: { initialRole: "admin", state: "rejected" },
}
export const StateInDispute: Story = {
  args: { initialRole: "admin", state: "in-dispute" },
}

/* Phase 4 — full app shell with the real F0 navigation sidebar */
export const WithNavigationFrame: StoryObj = {
  parameters: { layout: "fullscreen", currentPath: "/requests" },
  render: () => <FramedDemo state="pending" />,
}
