/**
 * Shared fixtures for the "WhatsApp-to-Project" surfaces (S1..S5).
 *
 * Mock company "Mendoza Instalaciones": admin Andrés Martínez plus
 * field employees who message the bot from a job site. These fixtures
 * are consumed by:
 *   - whatsapp-capture-settings (S1)
 *   - whatsapp-capture-activity (S2)
 *   - projects-planning Activity log sidepanel (S3 integration)
 *   - employee-profile-communication (S4)
 *   - whatsapp-capture-magic-link (S5)
 *
 * Kept inside `whatsapp-capture/shared/` (not `@/fixtures`) because
 * the domain is specific to this prototype family and reusing the
 * generic Mendoza employees from `@/fixtures` would require extra
 * fields (phone, link status) that don't belong in the generic set.
 */

export type CaptureEmployee = {
  id: string
  fullName: string
  preferredName: string
  role: string
  phone: string
  /** Status of the WhatsApp link for this employee. */
  linkStatus: "not-invited" | "invited" | "linked" | "blocked"
  /** ISO timestamp of last WhatsApp activity (only when linked). */
  lastActivityAt?: string
}

export const captureEmployees: CaptureEmployee[] = [
  {
    id: "ce-1",
    fullName: "María García",
    preferredName: "María",
    role: "Jefa de obra",
    phone: "+34 612 345 678",
    linkStatus: "linked",
    lastActivityAt: "2026-05-07T08:42:00Z",
  },
  {
    id: "ce-2",
    fullName: "Carlos Ruiz",
    preferredName: "Carlos",
    role: "Electricista oficial",
    phone: "+34 622 456 789",
    linkStatus: "linked",
    lastActivityAt: "2026-05-07T07:15:00Z",
  },
  {
    id: "ce-3",
    fullName: "Lucía Fernández",
    preferredName: "Lucía",
    role: "Fontanera",
    phone: "+34 633 567 890",
    linkStatus: "invited",
  },
  {
    id: "ce-4",
    fullName: "Javier Soto",
    preferredName: "Javier",
    role: "Albañil",
    phone: "+34 644 678 901",
    linkStatus: "not-invited",
  },
  {
    id: "ce-5",
    fullName: "Andrés Martínez",
    preferredName: "Andrés",
    role: "Director de operaciones",
    phone: "+34 655 789 012",
    linkStatus: "linked",
    lastActivityAt: "2026-05-06T18:02:00Z",
  },
]

export function findCaptureEmployee(id: string): CaptureEmployee | undefined {
  return captureEmployees.find((e) => e.id === id)
}

export type CaptureProject = {
  id: string
  code: string
  name: string
  client: string
}

export const captureProjects: CaptureProject[] = [
  {
    id: "cp-1",
    code: "AA12",
    name: "Avenida Aragón 12",
    client: "Comunidad de propietarios",
  },
  {
    id: "cp-2",
    code: "CC45",
    name: "Calle Colón 45",
    client: "Promociones Levante S.L.",
  },
  {
    id: "cp-3",
    code: "HV",
    name: "Hospital Vega",
    client: "Servicio Público de Salud",
  },
  {
    id: "cp-4",
    code: "AISL",
    name: "Aragón Industrial S.L.",
    client: "Aragón Industrial S.L.",
  },
  {
    id: "cp-5",
    code: "ET",
    name: "Edificio Torres",
    client: "Torres Inmobiliaria",
  },
  {
    id: "cp-6",
    code: "CCV",
    name: "Centro Comercial La Vaguada",
    client: "Vaguada Retail Group",
  },
]

export function findCaptureProject(id: string): CaptureProject | undefined {
  return captureProjects.find((p) => p.id === id)
}

export type CaptureActionType = "cost" | "hours" | "document" | "expense" | "note"

export const actionTypeLabel: Record<CaptureActionType, string> = {
  cost: "Coste",
  hours: "Horas",
  document: "Documento",
  expense: "Gasto",
  note: "Nota",
}

export const actionTypeEmoji: Record<CaptureActionType, string> = {
  cost: "💶",
  hours: "⏱",
  document: "📄",
  expense: "🧾",
  note: "📝",
}

export type CaptureStatus =
  | "committed"
  | "pending-hitl"
  | "reverted"
  | "failed"

export const statusLabel: Record<CaptureStatus, string> = {
  committed: "Aplicado",
  "pending-hitl": "Pendiente de revisión",
  reverted: "Revertido",
  failed: "Fallido",
}

export const statusColor: Record<
  CaptureStatus,
  "viridian" | "yellow" | "smoke" | "camel"
> = {
  committed: "viridian",
  "pending-hitl": "yellow",
  reverted: "smoke",
  failed: "camel",
}

export type Capture = {
  id: string
  /** ISO timestamp the user sent the WhatsApp message. */
  sentAt: string
  employeeId: string
  projectId: string
  type: CaptureActionType
  /** Short summary shown in the row, in Spanish. */
  summary: string
  /** Numeric value when applicable (€ for cost/expense, hours, etc.). */
  amount?: number
  /** Original verbatim message the employee sent over WhatsApp. */
  rawMessage: string
  status: CaptureStatus
}

/**
 * 40 captures spanning the last ~5 days, mixing all action types and
 * statuses across the 6 projects and the 3 linked employees. Sorted
 * roughly newest-first; tables sort again on top of this.
 */
export const captures: Capture[] = [
  {
    id: "cap-001",
    sentAt: "2026-05-07T08:42:00Z",
    employeeId: "ce-1",
    projectId: "cp-1",
    type: "hours",
    summary: "4h en Avenida Aragón 12",
    amount: 4,
    rawMessage: "He echado 4 horas hoy en Aragón 12, montando los marcos.",
    status: "committed",
  },
  {
    id: "cap-002",
    sentAt: "2026-05-07T08:30:00Z",
    employeeId: "ce-2",
    projectId: "cp-1",
    type: "expense",
    summary: "Ferretería Pérez · 87,40 €",
    amount: 87.4,
    rawMessage: "Compré bridas y tornillos en Ferretería Pérez, 87,40€.",
    status: "pending-hitl",
  },
  {
    id: "cap-003",
    sentAt: "2026-05-07T08:15:00Z",
    employeeId: "ce-1",
    projectId: "cp-2",
    type: "document",
    summary: "Albarán suministros · Calle Colón 45",
    rawMessage: "Os mando el albarán que me dejó el camionero esta mañana.",
    status: "committed",
  },
  {
    id: "cap-004",
    sentAt: "2026-05-07T07:55:00Z",
    employeeId: "ce-2",
    projectId: "cp-3",
    type: "cost",
    summary: "Material eléctrico · 312,00 €",
    amount: 312.0,
    rawMessage: "Pedido cable y cuadros para Hospital Vega, 312€.",
    status: "committed",
  },
  {
    id: "cap-005",
    sentAt: "2026-05-07T07:42:00Z",
    employeeId: "ce-1",
    projectId: "cp-1",
    type: "note",
    summary: "Retraso entrega ventanas",
    rawMessage:
      "El proveedor de ventanas avisa que llegan el lunes, no el viernes.",
    status: "committed",
  },
  {
    id: "cap-006",
    sentAt: "2026-05-07T07:15:00Z",
    employeeId: "ce-2",
    projectId: "cp-5",
    type: "hours",
    summary: "6h en Edificio Torres",
    amount: 6,
    rawMessage: "Hoy 6 horas en Torres, terminando la planta 3.",
    status: "committed",
  },
  {
    id: "cap-007",
    sentAt: "2026-05-06T18:02:00Z",
    employeeId: "ce-5",
    projectId: "cp-1",
    type: "cost",
    summary: "Alquiler andamio · 540,00 €",
    amount: 540.0,
    rawMessage: "Renové el alquiler del andamio una semana más, 540€.",
    status: "committed",
  },
  {
    id: "cap-008",
    sentAt: "2026-05-06T17:48:00Z",
    employeeId: "ce-1",
    projectId: "cp-1",
    type: "expense",
    summary: "Comida obra · 42,30 €",
    amount: 42.3,
    rawMessage: "Comimos en el bar de la esquina, 42,30€ los tres.",
    status: "pending-hitl",
  },
  {
    id: "cap-009",
    sentAt: "2026-05-06T17:30:00Z",
    employeeId: "ce-2",
    projectId: "cp-4",
    type: "hours",
    summary: "8h en Aragón Industrial",
    amount: 8,
    rawMessage: "Jornada completa en Aragón Industrial, 8h.",
    status: "committed",
  },
  {
    id: "cap-010",
    sentAt: "2026-05-06T16:05:00Z",
    employeeId: "ce-1",
    projectId: "cp-2",
    type: "document",
    summary: "Foto avance forjado",
    rawMessage: "Foto del forjado de la planta 2 ya completado.",
    status: "committed",
  },
  {
    id: "cap-011",
    sentAt: "2026-05-06T15:22:00Z",
    employeeId: "ce-5",
    projectId: "cp-6",
    type: "note",
    summary: "Reunión con cliente Vaguada",
    rawMessage:
      "Vengo de reunión con La Vaguada, quieren cambiar el suelo del pasillo principal.",
    status: "committed",
  },
  {
    id: "cap-012",
    sentAt: "2026-05-06T14:10:00Z",
    employeeId: "ce-2",
    projectId: "cp-1",
    type: "expense",
    summary: "Gasolina furgo · 64,80 €",
    amount: 64.8,
    rawMessage: "Lleno de la furgo, 64,80€, ticket adjunto.",
    status: "committed",
  },
  {
    id: "cap-013",
    sentAt: "2026-05-06T12:45:00Z",
    employeeId: "ce-1",
    projectId: "cp-3",
    type: "hours",
    summary: "5h en Hospital Vega",
    amount: 5,
    rawMessage: "5h en Hospital Vega esta mañana.",
    status: "reverted",
  },
  {
    id: "cap-014",
    sentAt: "2026-05-06T11:30:00Z",
    employeeId: "ce-2",
    projectId: "cp-5",
    type: "cost",
    summary: "Pintura interior · 198,00 €",
    amount: 198.0,
    rawMessage: "Compré la pintura para Edificio Torres, 198€.",
    status: "committed",
  },
  {
    id: "cap-015",
    sentAt: "2026-05-06T10:50:00Z",
    employeeId: "ce-1",
    projectId: "cp-1",
    type: "note",
    summary: "Cliente pide cambio cerradura",
    rawMessage:
      "El cliente de Aragón 12 quiere cambiar el modelo de cerradura del portal.",
    status: "committed",
  },
  {
    id: "cap-016",
    sentAt: "2026-05-06T10:12:00Z",
    employeeId: "ce-5",
    projectId: "cp-2",
    type: "document",
    summary: "Plano revisión MEP",
    rawMessage: "Recibido el plano MEP revisado para Calle Colón.",
    status: "committed",
  },
  {
    id: "cap-017",
    sentAt: "2026-05-06T09:35:00Z",
    employeeId: "ce-2",
    projectId: "cp-3",
    type: "expense",
    summary: "Parking hospital · 12,00 €",
    amount: 12.0,
    rawMessage: "Parking del hospital, 12€.",
    status: "committed",
  },
  {
    id: "cap-018",
    sentAt: "2026-05-06T09:00:00Z",
    employeeId: "ce-1",
    projectId: "cp-4",
    type: "hours",
    summary: "3h en Aragón Industrial",
    amount: 3,
    rawMessage: "3h en Aragón Industrial, instalando bandejas.",
    status: "committed",
  },
  {
    id: "cap-019",
    sentAt: "2026-05-05T19:20:00Z",
    employeeId: "ce-2",
    projectId: "cp-1",
    type: "cost",
    summary: "Hormigón · 880,00 €",
    amount: 880.0,
    rawMessage: "Pedido hormigón para mañana en Aragón 12, 880€.",
    status: "committed",
  },
  {
    id: "cap-020",
    sentAt: "2026-05-05T18:45:00Z",
    employeeId: "ce-1",
    projectId: "cp-6",
    type: "note",
    summary: "Visita técnica miércoles",
    rawMessage: "Confirmada la visita técnica el miércoles 10:00 en La Vaguada.",
    status: "committed",
  },
  {
    id: "cap-021",
    sentAt: "2026-05-05T18:00:00Z",
    employeeId: "ce-5",
    projectId: "cp-5",
    type: "document",
    summary: "Certificado fin de obra parcial",
    rawMessage: "Os subo el certificado parcial firmado por el arquitecto.",
    status: "committed",
  },
  {
    id: "cap-022",
    sentAt: "2026-05-05T17:30:00Z",
    employeeId: "ce-2",
    projectId: "cp-2",
    type: "hours",
    summary: "7h en Calle Colón 45",
    amount: 7,
    rawMessage: "7h hoy en Colón 45, falta poco para terminar la fachada.",
    status: "committed",
  },
  {
    id: "cap-023",
    sentAt: "2026-05-05T16:12:00Z",
    employeeId: "ce-1",
    projectId: "cp-1",
    type: "expense",
    summary: "Suministro EPI · 73,50 €",
    amount: 73.5,
    rawMessage: "Compré guantes y gafas de protección, 73,50€.",
    status: "committed",
  },
  {
    id: "cap-024",
    sentAt: "2026-05-05T15:00:00Z",
    employeeId: "ce-2",
    projectId: "cp-4",
    type: "cost",
    summary: "Cuadro eléctrico · 1.250,00 €",
    amount: 1250.0,
    rawMessage: "Pedido cuadro eléctrico Schneider, 1250€.",
    status: "pending-hitl",
  },
  {
    id: "cap-025",
    sentAt: "2026-05-05T14:25:00Z",
    employeeId: "ce-1",
    projectId: "cp-3",
    type: "note",
    summary: "Coordinación con sanidad",
    rawMessage: "Sanidad pide reducir el ruido entre 14:00 y 16:00.",
    status: "committed",
  },
  {
    id: "cap-026",
    sentAt: "2026-05-05T13:10:00Z",
    employeeId: "ce-5",
    projectId: "cp-1",
    type: "hours",
    summary: "2h en Avenida Aragón 12",
    amount: 2,
    rawMessage: "Pasé 2h en Aragón 12 supervisando.",
    status: "committed",
  },
  {
    id: "cap-027",
    sentAt: "2026-05-05T12:40:00Z",
    employeeId: "ce-2",
    projectId: "cp-6",
    type: "document",
    summary: "Foto desperfecto suelo",
    rawMessage: "Foto del desperfecto del suelo en La Vaguada.",
    status: "committed",
  },
  {
    id: "cap-028",
    sentAt: "2026-05-05T11:55:00Z",
    employeeId: "ce-1",
    projectId: "cp-2",
    type: "expense",
    summary: "Taxi al cliente · 18,40 €",
    amount: 18.4,
    rawMessage: "Taxi a la oficina del cliente, 18,40€.",
    status: "failed",
  },
  {
    id: "cap-029",
    sentAt: "2026-05-05T11:00:00Z",
    employeeId: "ce-2",
    projectId: "cp-5",
    type: "cost",
    summary: "Mortero · 240,00 €",
    amount: 240.0,
    rawMessage: "Mortero para Edificio Torres, 240€.",
    status: "committed",
  },
  {
    id: "cap-030",
    sentAt: "2026-05-05T10:20:00Z",
    employeeId: "ce-1",
    projectId: "cp-1",
    type: "hours",
    summary: "8h en Avenida Aragón 12",
    amount: 8,
    rawMessage: "Jornada completa en Aragón 12.",
    status: "committed",
  },
  {
    id: "cap-031",
    sentAt: "2026-05-05T09:45:00Z",
    employeeId: "ce-5",
    projectId: "cp-3",
    type: "note",
    summary: "Reunión jefe de obra hospital",
    rawMessage: "Reunión con el jefe de obra del hospital, todo en plazo.",
    status: "committed",
  },
  {
    id: "cap-032",
    sentAt: "2026-05-04T18:30:00Z",
    employeeId: "ce-2",
    projectId: "cp-4",
    type: "expense",
    summary: "Comida equipo · 56,20 €",
    amount: 56.2,
    rawMessage: "Comida con el equipo en Aragón Industrial, 56,20€.",
    status: "committed",
  },
  {
    id: "cap-033",
    sentAt: "2026-05-04T17:50:00Z",
    employeeId: "ce-1",
    projectId: "cp-6",
    type: "hours",
    summary: "6h en La Vaguada",
    amount: 6,
    rawMessage: "6h en La Vaguada, montando las luminarias.",
    status: "committed",
  },
  {
    id: "cap-034",
    sentAt: "2026-05-04T17:05:00Z",
    employeeId: "ce-2",
    projectId: "cp-1",
    type: "document",
    summary: "Foto fisura forjado",
    rawMessage: "Foto de la fisura que hemos detectado en el forjado.",
    status: "pending-hitl",
  },
  {
    id: "cap-035",
    sentAt: "2026-05-04T16:20:00Z",
    employeeId: "ce-5",
    projectId: "cp-2",
    type: "cost",
    summary: "Aislante térmico · 410,00 €",
    amount: 410.0,
    rawMessage: "Pedido aislante para Calle Colón, 410€.",
    status: "committed",
  },
  {
    id: "cap-036",
    sentAt: "2026-05-04T15:35:00Z",
    employeeId: "ce-1",
    projectId: "cp-3",
    type: "expense",
    summary: "Café equipo · 9,80 €",
    amount: 9.8,
    rawMessage: "Café para el equipo, 9,80€.",
    status: "reverted",
  },
  {
    id: "cap-037",
    sentAt: "2026-05-04T14:50:00Z",
    employeeId: "ce-2",
    projectId: "cp-5",
    type: "hours",
    summary: "4h en Edificio Torres",
    amount: 4,
    rawMessage: "4h en Torres por la tarde.",
    status: "committed",
  },
  {
    id: "cap-038",
    sentAt: "2026-05-04T14:00:00Z",
    employeeId: "ce-1",
    projectId: "cp-4",
    type: "note",
    summary: "Coordinación grúa",
    rawMessage: "La grúa llega mañana a las 8:00, hay que dejar el patio libre.",
    status: "committed",
  },
  {
    id: "cap-039",
    sentAt: "2026-05-04T13:15:00Z",
    employeeId: "ce-5",
    projectId: "cp-1",
    type: "document",
    summary: "Acta de reunión semanal",
    rawMessage: "Subo el acta de la reunión semanal de Aragón 12.",
    status: "committed",
  },
  {
    id: "cap-040",
    sentAt: "2026-05-04T12:30:00Z",
    employeeId: "ce-2",
    projectId: "cp-1",
    type: "cost",
    summary: "Hierro corrugado · 1.890,00 €",
    amount: 1890.0,
    rawMessage: "Pedido de hierro corrugado para Aragón 12, 1.890€.",
    status: "committed",
  },
]

/**
 * Locale-aware formatter for Spanish dates ("7 may 16:42").
 * Falls back to ISO if Intl is unavailable (server side render of tests).
 */
export function formatCaptureDate(iso: string): string {
  try {
    const d = new Date(iso)
    return d.toLocaleString("es-ES", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch {
    return iso
  }
}

/** Format an amount in euros, Spanish locale, no currency symbol when null. */
export function formatAmount(
  amount: number | undefined,
  type: CaptureActionType
): string {
  if (amount === undefined) return "—"
  if (type === "hours") return `${amount}h`
  return `${amount.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} €`
}

/**
 * Per-project timeline events used by the projects-planning Activity log
 * sidepanel (S3 integration). Each event belongs to one of three streams
 * which become filter chips: System / Team / WhatsApp.
 *
 * For "WhatsApp" we reuse the captures already defined above (filtered by
 * project). For "system" and "team" we hand-author small entries that read
 * naturally next to the captures.
 */
export type ActivityEventStream = "system" | "team" | "whatsapp"

export type ActivityEvent =
  | {
      stream: "system" | "team"
      id: string
      projectId: string
      at: string
      title: string
      description: string
      actorName?: string
    }
  | {
      stream: "whatsapp"
      id: string
      projectId: string
      at: string
      captureId: string
    }
  | {
      stream: "whatsapp"
      id: string
      projectId: string
      at: string
      title: string
      description: string
      actorName?: string
      actionType?: CaptureActionType
    }

export const projectActivityEvents: ActivityEvent[] = [
  // System events for Avenida Aragón 12
  {
    stream: "system",
    id: "se-1",
    projectId: "cp-1",
    at: "2026-05-07T09:00:00Z",
    title: "Hito creado: «Cierre forjado planta 3»",
    description: "Fecha objetivo: 14 may 2026",
  },
  {
    stream: "system",
    id: "se-2",
    projectId: "cp-1",
    at: "2026-05-05T08:30:00Z",
    title: "Presupuesto actualizado",
    description: "+12.000 € por desvío de hormigón",
  },
  {
    stream: "system",
    id: "se-3",
    projectId: "cp-1",
    at: "2026-05-04T08:00:00Z",
    title: "Proyecto pasado a estado «En obra»",
    description: "Cambio realizado automáticamente al iniciar la primera tarea",
  },
  // Team events for Avenida Aragón 12
  {
    stream: "team",
    id: "te-1",
    projectId: "cp-1",
    at: "2026-05-07T09:30:00Z",
    title: "Andrés añadió un comentario",
    description:
      "«Hablado con el cliente, aceptan el retraso de las ventanas hasta el lunes.»",
    actorName: "Andrés Martínez",
  },
  {
    stream: "team",
    id: "te-2",
    projectId: "cp-1",
    at: "2026-05-06T11:15:00Z",
    title: "María asignada como jefa de obra",
    description: "Asignación realizada desde Planificación",
    actorName: "Andrés Martínez",
  },
  {
    stream: "team",
    id: "te-3",
    projectId: "cp-1",
    at: "2026-05-05T10:00:00Z",
    title: "Reunión de obra programada",
    description: "Próxima reunión: viernes 9 may, 09:00",
    actorName: "María García",
  },
  // System / team events for the other projects (lighter)
  {
    stream: "system",
    id: "se-4",
    projectId: "cp-2",
    at: "2026-05-06T10:00:00Z",
    title: "Presupuesto actualizado",
    description: "Calle Colón 45 · +4.200 €",
  },
  {
    stream: "team",
    id: "te-4",
    projectId: "cp-2",
    at: "2026-05-05T16:00:00Z",
    title: "Carlos añadido al equipo",
    description: "Calle Colón 45",
    actorName: "Andrés Martínez",
  },
  {
    stream: "system",
    id: "se-5",
    projectId: "cp-3",
    at: "2026-05-06T09:00:00Z",
    title: "Hito completado: «Replanteo»",
    description: "Hospital Vega",
  },
]

/** Resolve all activity events for a given project, newest first. */
export function activityForProject(projectId: string): ActivityEvent[] {
  const direct = projectActivityEvents.filter((e) => e.projectId === projectId)
  const whatsappEvents: ActivityEvent[] = captures
    .filter((c) => c.projectId === projectId)
    .map((c) => ({
      stream: "whatsapp" as const,
      id: `wa-${c.id}`,
      projectId: c.projectId,
      at: c.sentAt,
      captureId: c.id,
    }))
  return [...direct, ...whatsappEvents].sort((a, b) =>
    a.at < b.at ? 1 : a.at > b.at ? -1 : 0
  )
}

/**
 * Disclosure copy and privacy URL — must be reproduced verbatim wherever
 * we surface the feature description (S1 settings, S5 magic link).
 */
export const DISCLOSURE = {
  body:
    "Al activar la captura por WhatsApp, los mensajes que envíen los miembros del equipo al número conectado se procesarán automáticamente para crear costes, horas, gastos, documentos y notas en sus proyectos. Solo el contenido necesario para clasificar y aplicar la acción se almacena. Cada miembro debe vincular su número personal mediante un enlace seguro de un solo uso.",
  privacyUrl: "https://factorial.co/whatsapp-capture-privacy",
  privacyLabel: "Más información sobre privacidad",
}
