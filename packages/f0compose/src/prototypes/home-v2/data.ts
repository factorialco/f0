export const priorities = [
  "Decisiones pendientes",
  "Mi equipo",
  "Gastos y presupuesto",
]
export const widgets = [
  "Disponibilidad del equipo",
  "Mis pendientes",
  "Presupuesto",
]
export const routines = [
  "Preparar aprobaciones de ausencias",
  "Resumen mensual del equipo",
]
export const reports = ["Cobertura del equipo", "Desviaciones de presupuesto"]
export const routineDetails: Record<string, string> = {
  "Preparar aprobaciones de ausencias":
    "Al llegar una solicitud · comprobar solapamientos y cobertura · preparar una propuesta para tu aprobación.",
  "Resumen mensual del equipo":
    "Primer día de cada mes · preparar un borrador con ausencias, hitos y pendientes · sin enviarlo a nadie.",
}
export const reportDetails: Record<string, string> = {
  "Cobertura del equipo":
    "Revisión continua · avisar cuando haya menos del 80 % del equipo disponible · proponer cómo organizar la cobertura.",
  "Desviaciones de presupuesto":
    "Revisión continua · avisar al superar el 90 % del presupuesto · señalar las partidas que explican el cambio.",
}
export const widgetContent: Record<string, string> = {
  "Disponibilidad del equipo":
    "12 de 14 disponibles · 2 personas ausentes. El viernes la cobertura baja al 79 %.",
  "Mis pendientes":
    "3 decisiones por revisar · 1 informe por terminar. Tu próxima reunión es a las 10:30.",
  Presupuesto:
    "84 % utilizado · 6.400 € disponibles. Servicios externos es la partida que más ha crecido.",
}
export const prompts = {
  priorities:
    "¿Qué es importante para ti? ¿Qué quieres que te traiga cuando pases por aquí? Elige varias cosas o cuéntamelo con tus palabras.",
  summary:
    "Este es un ejemplo de lo que te traería al volver. ¿Te sirve o quieres añadir algo? Puedes escribirme para ajustarlo.",
  widgets:
    "¿Qué quieres tener siempre a la vista? Lo iré colocando a la derecha. Puedes añadir varias cosas o pedirme otra.",
  routines:
    "Ahora, ¿qué trabajo quieres que prepare por ti? Estas son algunas ideas. Revisaremos cómo funcionaría cada rutina antes de dejarla configurada.",
  reports:
    "¿Qué datos quieres que vigile? Te enseñaré qué desviación buscaría y qué acción podría proponerte.",
  done: "Ya tenemos tu home. Cuando vuelvas, revisaré qué ha cambiado y te pondré al día aquí. Tus widgets estarán siempre a mano.",
}
export const steps = [
  "priorities",
  "summary",
  "widgets",
  "routines",
  "reports",
  "done",
] as const
export type Step = (typeof steps)[number]
export const nextLabel: Record<Step, string> = {
  priorities: "Enséñame un ejemplo",
  summary: "Me sirve, sigamos",
  widgets: "Así está bien, sigamos",
  routines: "Confirmar rutinas y seguir",
  reports: "Confirmar seguimiento y terminar",
  done: "Ver mi home",
}
export function summaryFor(items: string[]) {
  return items
    .map((item) =>
      item === "Decisiones pendientes"
        ? "Tienes 3 decisiones pendientes. Empezaría por las solicitudes que afectan a esta semana."
        : item === "Mi equipo"
          ? "El viernes habrá 3 personas ausentes. La cobertura baja al 79 %; conviene revisar cómo repartir el trabajo."
          : item === "Gastos y presupuesto"
            ? "Has utilizado el 84 % del presupuesto. Servicios externos explica la mayor parte del incremento."
            : `También tendría en cuenta «${item}». Para este tema, el ejemplo todavía no tiene datos; concretaríamos juntos qué fuente y señales usar.`
    )
    .join("\n\n")
}

export const starterTopics = [
  "Decisiones pendientes",
  "Mi equipo",
  "Communities",
]
export const starterQuestion = "¿Qué te falta aquí para empezar a trabajar?"
export const tasks = [
  {
    title: "Revisar 3 solicitudes de ausencia",
    detail: "Viernes · La cobertura quedaría en el 79 %",
    action: "Revisar ausencias",
  },
  {
    title: "Completar el informe del equipo",
    detail: "Borrador guardado · Retoma donde lo dejaste",
    action: "Retomar informe",
  },
]
export const community = {
  firstName: "Marta",
  lastName: "Ibáñez",
  title: "Tres nuevas incorporaciones a tu equipo",
  body: "El lunes se incorporan Ana, David y Sara. Ya puedes revisar sus planes de bienvenida y confirmar quién acompañará a cada persona.",
  channel: "People · Hace 35 min",
  reactions: "12 reacciones · 4 comentarios",
}
export const team = [
  { firstName: "Ana", lastName: "López" },
  { firstName: "David", lastName: "García" },
  { firstName: "Sara", lastName: "Martín" },
]
export function detectTopics(text: string): string[] {
  const value = text.toLowerCase()
  return [
    /pendiente|decisi|tarea|aprob|ausencia/.test(value)
      ? "Decisiones pendientes"
      : "",
    /equipo|cobertura|disponib|incorp/.test(value) ? "Mi equipo" : "",
    /communit|publicaci|novedad|post/.test(value) ? "Communities" : "",
    /gasto|presupuest|coste/.test(value) ? "Gastos y presupuesto" : "",
  ].filter(Boolean)
}
export function widgetFor(topic: string) {
  return topic === "Decisiones pendientes"
    ? "Mis pendientes"
    : topic === "Mi equipo"
      ? "Disponibilidad del equipo"
      : topic === "Gastos y presupuesto"
        ? "Presupuesto"
        : topic
}
export function topicFor(widget: string) {
  return widget === "Mis pendientes"
    ? "Decisiones pendientes"
    : widget === "Disponibilidad del equipo"
      ? "Mi equipo"
      : widget === "Presupuesto"
        ? "Gastos y presupuesto"
        : widget
}

export const defaultWidgets = [
  "Mis pendientes",
  "Disponibilidad del equipo",
  "Communities",
]
export const widgetCatalog = [...defaultWidgets, "Presupuesto"]
export function isRemoval(text: string) {
  return (
    /\b(quita|quitar|elimina|eliminar|oculta|ocultar|sin|retira|retirar)\b/i.test(
      text
    ) || /no (quiero|necesito|muestres|mostrar|me interesa)/i.test(text)
  )
}
