export type WidgetRecord = {
  title: string
  value: string
  caption: string
  status: string
  managerOnly?: boolean
  rows: { title: string; detail: string }[]
  explanation: string[]
}
export const payslip = {
  period: "August 2026",
  salary: 3200,
  complement: 200,
  withholding: 680,
  contributions: 220,
}
export const gross = payslip.salary + payslip.complement
export const deductions = payslip.withholding + payslip.contributions
export const net = gross - deductions
export function euros(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value)
}
export const catalog: WidgetRecord[] = [
  {
    title: "My payslip",
    value: euros(net),
    caption: `Net · ${payslip.period}`,
    status: "Available",
    rows: [
      {
        title: "Gross pay",
        detail: `${euros(gross)} · Salary ${euros(payslip.salary)} + allowance ${euros(payslip.complement)}`,
      },
      {
        title: "Deductions",
        detail: `${euros(deductions)} · Withholding ${euros(payslip.withholding)} + contributions ${euros(payslip.contributions)}`,
      },
    ],
    explanation: [
      `This is your sample payslip for ${payslip.period}. Gross pay is ${euros(gross)}: ${euros(payslip.salary)} salary plus ${euros(payslip.complement)} allowance.`,
      `Deductions are ${euros(payslip.withholding)} withholding plus ${euros(payslip.contributions)} contributions: ${euros(deductions)} in total. Your net pay is ${euros(gross)} − ${euros(deductions)} = ${euros(net)}. These are simulated amounts, not a calculation of your real pay.`,
    ],
  },
  {
    title: "My time off",
    value: "10 days",
    caption: "Available this year",
    status: "Balance up to date",
    rows: [
      { title: "Annual allowance", detail: "22 days allocated · 8 taken" },
      {
        title: "Upcoming time off",
        detail: "4 days approved · 21–24 September",
      },
    ],
    explanation: [
      "Your sample allowance is 22 days. After 8 days taken and 4 already approved, 10 days remain. Your next time off is 21–24 September.",
    ],
  },
  {
    title: "Últimos candidatos",
    value: "3 candidaturas",
    caption: "Product Designer · Incorporadas esta semana",
    status: "En proceso",
    managerOnly: true,
    rows: [
      {
        title: "Lucía Fernández",
        detail: "Entrevista · Jueves a las 11:00",
      },
      {
        title: "Daniel Ruiz",
        detail: "Revisión inicial · Portfolio por revisar",
      },
      { title: "Sofía Martín", detail: "Evaluación · Feedback pendiente" },
    ],
    explanation: [
      "Hay tres candidaturas de ejemplo en fases distintas. Puedes preparar la entrevista de Lucía, revisar el portfolio de Daniel o completar el feedback de Sofía. No he evaluado ni seleccionado a ninguna persona.",
    ],
  },
  {
    title: "Mi jornada",
    value: "Sin iniciar",
    caption: "Barcelona · Jornada prevista de 8 h",
    status: "Hoy",
    rows: [
      {
        title: "Horario previsto",
        detail: "09:00–18:00 · Una hora de pausa",
      },
      {
        title: "Esta demo",
        detail:
          "El fichaje comparte el estado del prototipo y se reinicia al recargar.",
      },
    ],
    explanation: [
      "El widget utiliza el mismo fichaje de ejemplo que el resto de la home. Puedes iniciar y cerrar una sesión; no se registra ninguna jornada real.",
    ],
  },
  {
    title: "Mi agenda",
    value: "2 eventos",
    caption: "Tu próxima reunión, a las 10:30",
    status: "Hoy",
    rows: [
      {
        title: "10:30 · Revisión de diseño",
        detail: "45 min · Sala Barcelona",
      },
      {
        title: "15:00 · Seguimiento del proyecto",
        detail: "30 min · Videollamada",
      },
    ],
    explanation: [
      "Tienes dos eventos de ejemplo: revisión de diseño a las 10:30 y seguimiento a las 15:00. Entre ambos puedes reservar un bloque de trabajo. No he modificado tu calendario.",
    ],
  },
  {
    title: "Mis gastos",
    value: "148 €",
    caption: "Pendientes de reembolso",
    status: "En revisión",
    rows: [
      { title: "Hotel · 120 €", detail: "En revisión · Enviado ayer" },
      { title: "Taxi · 28 €", detail: "Aprobado · Pendiente de pago" },
      {
        title: "Comida · 18 €",
        detail: "Borrador · Falta el justificante",
      },
    ],
    explanation: [
      "Los 148 € pendientes de reembolso corresponden al hotel (120 €) y al taxi (28 €). La comida de 18 € aún es un borrador y no está incluida en ese total.",
    ],
  },
  {
    title: "Mis documentos",
    value: "1 pendiente",
    caption: "Documentos que necesitan tu revisión",
    status: "Requiere revisión",
    rows: [
      {
        title: "Anexo de trabajo a distancia",
        detail: "Pendiente de firma · Antes del viernes",
      },
      {
        title: "Certificado de empresa",
        detail: "Disponible · Actualizado ayer",
      },
    ],
    explanation: [
      "El anexo de trabajo a distancia está pendiente de firma. El certificado de empresa ya está disponible. Esta demo solo muestra sus estados; no firma documentos.",
    ],
  },
  {
    title: "Incorporaciones",
    value: "3 personas",
    caption: "Empiezan el próximo lunes",
    status: "Preparación",
    managerOnly: true,
    rows: [
      { title: "Ana López", detail: "Equipo de diseño · Buddy confirmado" },
      {
        title: "David García",
        detail: "Producto · Falta preparar el equipo",
      },
      {
        title: "Sara Martín",
        detail: "People · Plan de bienvenida pendiente",
      },
    ],
    explanation: [
      "Antes del lunes faltaría preparar el equipo de David y completar el plan de bienvenida de Sara. Ana ya tiene una persona de acompañamiento asignada. Son tareas de ejemplo.",
    ],
  },
  {
    title: "Evaluaciones pendientes",
    value: "2 evaluaciones",
    caption: "Ciclo de septiembre",
    status: "Hasta el 30 de septiembre",
    rows: [
      {
        title: "Tu autoevaluación",
        detail: "Borrador · 2 de 5 preguntas completadas",
      },
      {
        title: "Feedback entre compañeros",
        detail: "Pendiente · Una solicitud recibida",
      },
    ],
    explanation: [
      "Tienes una autoevaluación empezada y una solicitud de feedback pendiente. Puedes empezar por recuperar tu borrador. El agente no ha completado ni enviado ninguna evaluación.",
    ],
  },
]
export const recordFor = (title: string) =>
  catalog.find((record) => record.title === title)
export const allowedCatalog = (profile: "admin" | "employee") =>
  catalog.filter((record) => profile === "admin" || !record.managerOnly)
