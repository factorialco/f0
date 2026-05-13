/**
 * Per-expense receipt generator.
 *
 * Builds a thermal-printer-style SVG receipt that mirrors the row's
 * actual data (vendor, category, amount, date) and serializes it to a
 * `data:image/svg+xml` URL so the existing image-based ReceiptPanel
 * (zoom / rotate / print / download) keeps working unchanged.
 *
 * Deterministic by `row.id`: line items, ticket number, card last-4,
 * paper skew, all derived from the same hash so reviewers see the
 * same receipt on every reload.
 *
 * Language: Spanish for vendors that read as Spanish-y (heuristic on
 * vendor name or category=Meals/Taxis defaulting to ES); English
 * otherwise. Each receipt is wholly one language.
 */

import type { SpendingRow } from "../rows"

type Lang = "en" | "es"

type LineItem = {
  qty: number
  label: string
  amount: number
}

const ITEM_TEMPLATES: Record<
  string,
  Record<Lang, ReadonlyArray<readonly [string, number]>>
> = {
  Meals: {
    es: [
      ["MENU DEL DIA", 0.35],
      ["ENTRANTE", 0.12],
      ["SEGUNDO PLATO", 0.18],
      ["BEBIDA", 0.08],
      ["AGUA MINERAL", 0.05],
      ["VINO COPA", 0.1],
      ["CAFE SOLO", 0.05],
      ["POSTRE CASERO", 0.12],
      ["PAN", 0.04],
      ["ENSALADA MIXTA", 0.1],
      ["TAPA DE LA CASA", 0.09],
      ["RACION JAMON", 0.18],
    ],
    en: [
      ["LUNCH SPECIAL", 0.35],
      ["STARTER", 0.12],
      ["MAIN COURSE", 0.18],
      ["SOFT DRINK", 0.08],
      ["MINERAL WATER", 0.05],
      ["GLASS OF WINE", 0.1],
      ["ESPRESSO", 0.05],
      ["DESSERT", 0.12],
      ["BREAD BASKET", 0.04],
      ["SIDE SALAD", 0.1],
      ["APPETIZER", 0.09],
      ["CHEESE PLATE", 0.18],
    ],
  },
  Taxis: {
    es: [
      ["TRAYECTO BASE", 0.55],
      ["BAJADA DE BANDERA", 0.08],
      ["SUPLEMENTO AEROPUERTO", 0.12],
      ["RECARGO NOCTURNO", 0.08],
      ["EQUIPAJE", 0.05],
      ["ESPERA", 0.06],
      ["PEAJE", 0.06],
    ],
    en: [
      ["BASE FARE", 0.55],
      ["FLAG DROP", 0.08],
      ["AIRPORT SURCHARGE", 0.12],
      ["NIGHT SURCHARGE", 0.08],
      ["LUGGAGE FEE", 0.05],
      ["WAITING TIME", 0.06],
      ["TOLL CHARGE", 0.06],
    ],
  },
  Travel: {
    es: [
      ["BILLETE PRINCIPAL", 0.6],
      ["RESERVA ASIENTO", 0.08],
      ["EQUIPAJE FACTURADO", 0.1],
      ["TASAS AEROPORTUARIAS", 0.12],
      ["SEGURO DE VIAJE", 0.05],
      ["PRIORITY BOARDING", 0.05],
    ],
    en: [
      ["TICKET FARE", 0.6],
      ["SEAT RESERVATION", 0.08],
      ["CHECKED BAGGAGE", 0.1],
      ["AIRPORT TAXES", 0.12],
      ["TRAVEL INSURANCE", 0.05],
      ["PRIORITY BOARDING", 0.05],
    ],
  },
  Hotel: {
    es: [
      ["HABITACION DOBLE", 0.55],
      ["DESAYUNO BUFFET", 0.1],
      ["MINIBAR", 0.05],
      ["LAVANDERIA", 0.06],
      ["PARKING", 0.06],
      ["WIFI PREMIUM", 0.04],
      ["TASA TURISTICA", 0.06],
      ["LATE CHECK-OUT", 0.08],
    ],
    en: [
      ["DOUBLE ROOM", 0.55],
      ["BREAKFAST BUFFET", 0.1],
      ["MINIBAR", 0.05],
      ["LAUNDRY SERVICE", 0.06],
      ["PARKING", 0.06],
      ["PREMIUM WIFI", 0.04],
      ["CITY TAX", 0.06],
      ["LATE CHECK-OUT", 0.08],
    ],
  },
  Shopping: {
    es: [
      ["CAMISA OXFORD", 0.25],
      ["PANTALON CHINO", 0.22],
      ["JERSEY LANA", 0.18],
      ["CINTURON CUERO", 0.1],
      ["CALCETINES PACK 3", 0.08],
      ["CORBATA SEDA", 0.1],
      ["BOLSA ALGODON", 0.07],
    ],
    en: [
      ["OXFORD SHIRT", 0.25],
      ["CHINO TROUSERS", 0.22],
      ["WOOL SWEATER", 0.18],
      ["LEATHER BELT", 0.1],
      ["SOCKS PACK 3", 0.08],
      ["SILK TIE", 0.1],
      ["COTTON TOTE", 0.07],
    ],
  },
  Office: {
    es: [
      ["FOLIOS A4 500UD", 0.18],
      ["BOLIGRAFOS PACK 10", 0.12],
      ["CARPETAS ANILLAS", 0.15],
      ["TONER IMPRESORA", 0.25],
      ["POST-IT SURTIDO", 0.1],
      ["GRAPADORA", 0.08],
      ["CLIPS METALICOS", 0.05],
      ["IMPRESION COLOR", 0.07],
    ],
    en: [
      ["A4 PAPER 500CT", 0.18],
      ["PEN PACK OF 10", 0.12],
      ["RING BINDERS", 0.15],
      ["PRINTER TONER", 0.25],
      ["STICKY NOTES SET", 0.1],
      ["STAPLER", 0.08],
      ["PAPER CLIPS", 0.05],
      ["COLOR PRINTING", 0.07],
    ],
  },
  Software: {
    es: [
      ["LICENCIA ANUAL", 0.7],
      ["MODULO PREMIUM", 0.15],
      ["USUARIOS ADICIONALES", 0.08],
      ["SOPORTE 24/7", 0.07],
    ],
    en: [
      ["ANNUAL LICENSE", 0.7],
      ["PREMIUM ADD-ON", 0.15],
      ["EXTRA SEATS", 0.08],
      ["24/7 SUPPORT", 0.07],
    ],
  },
}

const VENDOR_LOCATIONS: Record<string, { line1: string; city: string }> = {
  // Spanish vendors get real-ish Spanish addresses (matches the
  // El Corte Inglés vibe). Anything not listed falls back below.
  "Birch & Beam Café": { line1: "CARRER DE BALMES, 142", city: "08008 BARCELONA" },
  "Lakeside Bistro": { line1: "PASEO DE LA CASTELLANA, 88", city: "28046 MADRID" },
  "Tide Lane Eatery": { line1: "GRAN VIA, 23", city: "28013 MADRID" },
  "Quickline Cabs Ltd.": { line1: "AV. AMERICA TERMINAL", city: "28027 MADRID" },
  "Northwind Taxi Co.": { line1: "PLAZA CATALUNYA", city: "08002 BARCELONA" },
  "The Brindle Hotel": { line1: "C/ DE FUENCARRAL, 110", city: "28004 MADRID" },
  "Cobblestone Inn": { line1: "RAMBLA CATALUNYA, 45", city: "08007 BARCELONA" },
}

const ENGLISH_FALLBACK_LOCATION = { line1: "221 BAKER STREET", city: "LONDON NW1" }

/**
 * Heuristic: a receipt is rendered in Spanish when the vendor sits in
 * the curated Spanish-vendor table OR when the category is one of the
 * meal/taxi categories (which feel local). Everything else stays in
 * English so the prototype skews ~70/30 EN as requested.
 */
function pickLanguage(row: SpendingRow): Lang {
  if (VENDOR_LOCATIONS[row.name]) return "es"
  // Software and Hotel chains read English-y; Meals/Taxis often local.
  // Use the row id as a tiebreaker so the same vendor across multiple
  // rows can vary (a generic "Lakeside Bistro" might be in either lang).
  const seed = hash(row.id)
  if (row.description === "Meals" || row.description === "Taxis") {
    return seed % 3 === 0 ? "en" : "es"
  }
  return seed % 4 === 0 ? "es" : "en"
}

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0
  }
  return h
}

function pickLocation(row: SpendingRow, lang: Lang) {
  if (VENDOR_LOCATIONS[row.name]) return VENDOR_LOCATIONS[row.name]!
  if (lang === "es") {
    // Generic Spanish fallback so non-curated vendors still feel local.
    return { line1: "C/ MAYOR, 12", city: "28013 MADRID" }
  }
  return ENGLISH_FALLBACK_LOCATION
}

/**
 * Synthesize a list of line items that sum to `total`.
 * Picks 1–3 items from the category template, distributes the total
 * across them by weight, and pushes the rounding remainder onto the
 * last item so the math reconciles exactly.
 */
function buildItems(
  category: string,
  total: number,
  seed: number,
  lang: Lang
): LineItem[] {
  // Defensive lookup — categories outside the curated list (or any
  // future fixture additions) gracefully fall back to the generic
  // Shopping template instead of crashing the receipt.
  const langTable = ITEM_TEMPLATES[category] ?? ITEM_TEMPLATES.Shopping!
  const tmpl = langTable[lang] ?? langTable.en ?? ITEM_TEMPLATES.Shopping!.en
  if (!tmpl || tmpl.length === 0) {
    // Final safety net: a single line item that absorbs the full total.
    return [{ qty: 1, label: lang === "es" ? "ARTICULO" : "ITEM", amount: total }]
  }
  // Choose between 5 and 8 items so receipts have enough vertical
  // weight to fill the preview frame. Software is the only category
  // that legitimately stays terse (typically 1–2 lines).
  const isTerseCategory = category === "Software"
  const minCount = isTerseCategory ? 1 : 5
  const maxCount = isTerseCategory
    ? Math.min(2, tmpl.length)
    : Math.min(8, tmpl.length)
  const range = Math.max(1, maxCount - minCount + 1)
  const count = minCount + (seed % range)
  // Pick `count` items starting from a seed-derived offset.
  const offset = (seed >> 3) % tmpl.length
  const picked: Array<readonly [string, number]> = []
  for (let i = 0; i < count; i++) {
    const entry = tmpl[(offset + i) % tmpl.length]
    if (entry) picked.push(entry)
  }
  if (picked.length === 0) {
    return [{ qty: 1, label: lang === "es" ? "ARTICULO" : "ITEM", amount: total }]
  }
  // Renormalize weights so they sum to 1 across the picked subset.
  const weightSum = picked.reduce((s, [, w]) => s + w, 0)
  const items: LineItem[] = picked.map(([label, w], i) => {
    const raw = (total * w) / weightSum
    const rounded = Math.round(raw * 100) / 100
    // Quantity is usually 1; ~20 % chance of 2 for non-Software, makes
    // the receipt feel less uniform.
    const qty = category !== "Software" && (seed >> (i + 4)) % 5 === 0 ? 2 : 1
    return { qty, label, amount: rounded }
  })
  // Reconcile rounding error onto the last item.
  const sum = items.reduce((s, it) => s + it.amount, 0)
  const drift = Math.round((total - sum) * 100) / 100
  if (drift !== 0 && items.length > 0) {
    items[items.length - 1]!.amount = Math.round(
      (items[items.length - 1]!.amount + drift) * 100
    ) / 100
  }
  return items
}

function syntheticPayment(
  _row: SpendingRow,
  seed: number,
  lang: Lang
): { method: string; lastFour?: string } {
  // 60% card, 25% cash, 15% transfer.
  const bucket = seed % 100
  if (bucket < 60) {
    const lastFour = String(1000 + ((seed * 7919) % 9000))
    return {
      method: lang === "es" ? `VISA ****${lastFour}` : `VISA ****${lastFour}`,
      lastFour,
    }
  }
  if (bucket < 85) {
    return { method: lang === "es" ? "EFECTIVO" : "CASH" }
  }
  return { method: lang === "es" ? "TRANSFERENCIA" : "BANK TRANSFER" }
}

function formatDate(iso: string, lang: Lang): string {
  // Input "YYYY-MM-DD" → "DD/MM/YYYY" for ES, "MM/DD/YYYY" for EN.
  const [y, m, d] = iso.split("-")
  if (!y || !m || !d) return iso
  return lang === "es" ? `${d}/${m}/${y}` : `${m}/${d}/${y}`
}

function formatTime(seed: number): string {
  const h = (seed % 14) + 8 // business hours 08–21
  const m = (seed >> 4) % 60
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
}

/**
 * Build the receipt SVG markup. Width is fixed at 360px (typical
 * thermal-receipt feel); height grows with the line-item count.
 *
 * Text is monospace so columns line up the same way a real
 * dot-matrix printer would. The whole receipt sits on a paper-colored
 * rect with a soft shadow + light skew applied to the outer group so
 * it reads as a photograph rather than a flat document.
 */
export function buildReceiptDataUrl(row: SpendingRow): string {
  const seed = hash(row.id)
  const lang = pickLanguage(row)
  const loc = pickLocation(row, lang)
  const items = buildItems(row.description, row.amount, seed, lang)
  const payment = syntheticPayment(row, seed, lang)
  const ticket = `T${String((seed % 900000) + 100000)}/${(seed >> 5) % 1000}`
  const dateStr = formatDate(row.date, lang)
  const timeStr = formatTime(seed)
  const baseRate = row.description === "Meals" ? 0.1 : 0.21
  const base = Math.round((row.amount / (1 + baseRate)) * 100) / 100
  const iva = Math.round((row.amount - base) * 100) / 100
  const ivaLabel = lang === "es" ? `IVA ${Math.round(baseRate * 100)}%` : `VAT ${Math.round(baseRate * 100)}%`

  // Localized strings.
  const STR =
    lang === "es"
      ? {
          uds: "UDS",
          desc: "DESCRIPCION",
          pvp: "PVP",
          imp: "IMPORTE",
          total: "TOTAL",
          base: "BASE IMP",
          cuota: "CUOTA",
          paid: "PAGADO CON",
          thanks: "*** GRACIAS POR SU VISITA ***",
          attended: "ATENDIDO POR",
          notValid: "NO VALIDO COMO FACTURA",
        }
      : {
          uds: "QTY",
          desc: "DESCRIPTION",
          pvp: "PRICE",
          imp: "AMOUNT",
          total: "TOTAL",
          base: "SUBTOTAL",
          cuota: "TAX",
          paid: "PAID WITH",
          thanks: "*** THANK YOU FOR YOUR VISIT ***",
          attended: "SERVED BY",
          notValid: "NOT A VALID INVOICE",
        }

  const cashier = lang === "es" ? "KEYTI OVIEDO" : "ALEX MORGAN"
  const tableNo = (seed >> 7) % 40 + 1

  // Layout — fixed column x positions in pixel units inside the SVG
  // viewBox. We use a 360-wide canvas with 24px outer padding.
  const W = 360
  const PAD = 24
  const LH = 16 // line height
  const fontMono = "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"

  // Build text rows top-down, accumulating y so we know the final
  // canvas height.
  type Row = { y: number; render: string }
  const rows: Row[] = []
  let y = PAD + 14

  const push = (text: string, opts: { bold?: boolean; size?: number; align?: "center" | "left"; spacing?: number } = {}) => {
    const size = opts.size ?? 12
    const weight = opts.bold ? 700 : 400
    const x = opts.align === "center" ? W / 2 : PAD
    const anchor = opts.align === "center" ? "middle" : "start"
    rows.push({
      y,
      render: `<text x="${x}" y="${y}" font-family="${fontMono}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" fill="#1a1a1a">${escapeXml(text)}</text>`,
    })
    y += opts.spacing ?? LH
  }

  // Header
  push(row.name.toUpperCase(), { bold: true, size: 14, align: "center" })
  push(loc.line1, { align: "center", size: 11 })
  push(loc.city, { align: "center", size: 11, spacing: LH + 4 })

  // Ticket meta — two columns.
  const metaLeft = `${ticket}`
  const metaRight = lang === "es" ? `${dateStr} ${timeStr}` : `${dateStr}  ${timeStr}`
  rows.push({
    y,
    render: `<text x="${PAD}" y="${y}" font-family="${fontMono}" font-size="11" fill="#1a1a1a">${escapeXml(metaLeft)}</text><text x="${W - PAD}" y="${y}" text-anchor="end" font-family="${fontMono}" font-size="11" fill="#1a1a1a">${escapeXml(metaRight)}</text>`,
  })
  y += LH
  rows.push({
    y,
    render: `<text x="${W - PAD}" y="${y}" text-anchor="end" font-family="${fontMono}" font-size="11" fill="#1a1a1a">${escapeXml((lang === "es" ? "MESA " : "TABLE ") + tableNo)}</text>`,
  })
  y += LH + 4

  // Column header.
  rows.push({
    y,
    render:
      `<text x="${PAD}" y="${y}" font-family="${fontMono}" font-size="11" font-weight="700" fill="#1a1a1a">${STR.uds} ${STR.desc}</text>` +
      `<text x="${W - PAD - 70}" y="${y}" font-family="${fontMono}" font-size="11" font-weight="700" fill="#1a1a1a" text-anchor="end">${STR.pvp}</text>` +
      `<text x="${W - PAD}" y="${y}" font-family="${fontMono}" font-size="11" font-weight="700" fill="#1a1a1a" text-anchor="end">${STR.imp}</text>`,
  })
  y += LH

  // Divider.
  rows.push({
    y,
    render: `<line x1="${PAD}" y1="${y - 6}" x2="${W - PAD}" y2="${y - 6}" stroke="#1a1a1a" stroke-width="0.5" stroke-dasharray="2 2" />`,
  })

  // Line items.
  for (const item of items) {
    const unit = Math.round((item.amount / item.qty) * 100) / 100
    rows.push({
      y,
      render:
        `<text x="${PAD}" y="${y}" font-family="${fontMono}" font-size="11" fill="#1a1a1a">${item.qty}  ${escapeXml(item.label)}</text>` +
        `<text x="${W - PAD - 70}" y="${y}" font-family="${fontMono}" font-size="11" fill="#1a1a1a" text-anchor="end">${unit.toFixed(2)}</text>` +
        `<text x="${W - PAD}" y="${y}" font-family="${fontMono}" font-size="11" fill="#1a1a1a" text-anchor="end">${item.amount.toFixed(2)} ${currencySymbol(lang)}</text>`,
    })
    y += LH
  }

  y += 6
  rows.push({
    y,
    render: `<line x1="${PAD}" y1="${y - 6}" x2="${W - PAD}" y2="${y - 6}" stroke="#1a1a1a" stroke-width="0.5" stroke-dasharray="2 2" />`,
  })

  // Totals block.
  rows.push({
    y,
    render:
      `<text x="${PAD}" y="${y}" font-family="${fontMono}" font-size="11" fill="#1a1a1a">${STR.base} ${ivaLabel} ${STR.cuota}</text>` +
      `<text x="${W - PAD}" y="${y}" font-family="${fontMono}" font-size="13" font-weight="700" fill="#1a1a1a" text-anchor="end">${STR.total} ${row.amount.toFixed(2)} ${currencySymbol(lang)}</text>`,
  })
  y += LH
  rows.push({
    y,
    render: `<text x="${PAD}" y="${y}" font-family="${fontMono}" font-size="11" fill="#1a1a1a">${base.toFixed(2)}  ${(baseRate * 100).toFixed(0)}%  ${iva.toFixed(2)}</text>`,
  })
  y += LH + 6

  // Payment.
  push(`${STR.paid}: ${payment.method}`, { size: 11 })
  y += 4

  // Footer.
  push(STR.notValid, { align: "center", size: 11 })
  push(STR.thanks, { align: "center", size: 11 })
  push(`${STR.attended}: ${cashier}`, { align: "center", size: 11 })

  const H = y + PAD

  // Slight skew + drop shadow on the outer group makes the SVG read
  // as a photographed receipt instead of a flat document. The skew is
  // seed-derived so different expenses tilt at different angles.
  const skew = ((seed % 5) - 2) * 0.6 // -1.2° .. +1.2°

  // Fixed canvas aspect (~3:4 portrait) so every receipt renders at
  // the same intrinsic size regardless of how many line items it has.
  // The white paper sheet fills the full canvas; the actual receipt
  // text is centered vertically inside it. This guarantees the
  // ReceiptPanel frame is always filled — short receipts no longer
  // float as a tiny block in a sea of dark chrome.
  const OUTER = 24
  const TARGET_H = Math.max(H + OUTER * 2, Math.round(W * 1.5))
  const VBW = W + OUTER * 2
  const VBH = TARGET_H

  // Center the receipt content vertically inside the paper sheet.
  const contentTop = Math.max(OUTER, (VBH - H) / 2)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VBW} ${VBH}" width="${VBW}" height="${VBH}" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="paperShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
      <feOffset dx="2" dy="4" result="offsetblur" />
      <feComponentTransfer><feFuncA type="linear" slope="0.35" /></feComponentTransfer>
      <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="paperGrain" patternUnits="userSpaceOnUse" width="4" height="4">
      <rect width="4" height="4" fill="#fafaf6" />
      <circle cx="1" cy="1" r="0.3" fill="#e9e6dc" opacity="0.6" />
      <circle cx="3" cy="3" r="0.2" fill="#efece2" opacity="0.5" />
    </pattern>
  </defs>
  <g transform="rotate(${skew} ${VBW / 2} ${VBH / 2})" filter="url(#paperShadow)">
    <rect x="${OUTER}" y="${OUTER}" width="${W}" height="${VBH - OUTER * 2}" fill="url(#paperGrain)" rx="2" />
    <g transform="translate(${OUTER} ${contentTop - OUTER})">
      ${rows.map((r) => r.render).join("\n      ")}
    </g>
  </g>
</svg>`

  // SVG -> data URL. We use UTF-8 percent-encoding so non-ASCII
  // characters (€, accented letters) survive without base64 bloat.
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

function currencySymbol(lang: Lang): string {
  return lang === "es" ? "€" : "EUR"
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
