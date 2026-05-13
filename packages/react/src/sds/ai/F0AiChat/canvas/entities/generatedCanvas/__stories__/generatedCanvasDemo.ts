import type { GeneratedCanvasContent } from "../../../../types"
import type { GeneratedCanvasData, GeneratedCanvasRow } from "../types"

const teams = [
  "Product",
  "Engineering",
  "People",
  "Sales",
  "Finance",
  "Design",
] as const

const legalEntities = ["Spain", "France", "Brazil", "United States"] as const

const locations = [
  "Barcelona",
  "Madrid",
  "Paris",
  "São Paulo",
  "New York",
] as const

function createEmployee(
  id: number,
  name: string,
  managerId: string | null,
  team: (typeof teams)[number],
  jobTitle: string
): GeneratedCanvasRow {
  const legalEntity = legalEntities[id % legalEntities.length]
  const location = locations[id % locations.length]

  return {
    id: String(id),
    name,
    managerId,
    team,
    legalEntity,
    location,
    jobTitle,
    salaryBand: ["40-60k", "60-80k", "80-100k", "100k+"][id % 4],
  }
}

const baseEmployees = [
  createEmployee(1, "Ana Martínez", null, "Product", "CEO"),
  createEmployee(2, "Maya Okafor", "1", "Engineering", "CTO"),
  createEmployee(3, "Lucía Ramos", "1", "People", "Chief People Officer"),
  createEmployee(4, "Noah Schneider", "1", "Sales", "Chief Revenue Officer"),
  createEmployee(5, "Iris Dubois", "1", "Finance", "CFO"),
  createEmployee(6, "Otto Silva", "2", "Engineering", "Engineering Manager"),
  createEmployee(7, "Nina Costa", "2", "Engineering", "Platform Manager"),
  createEmployee(8, "Clara Rossi", "2", "Design", "Design Director"),
  createEmployee(9, "Sam Taylor", "4", "Sales", "Sales Manager"),
  createEmployee(10, "Mateo Ferreira", "4", "Sales", "Account Executive"),
  createEmployee(11, "Eva Novak", "3", "People", "People Partner"),
  createEmployee(12, "Leo Martín", "5", "Finance", "Finance Manager"),
]

const generatedEmployees = Array.from({ length: 138 }, (_, index) => {
  const id = index + baseEmployees.length + 1
  const team = teams[id % teams.length]
  const managersByTeam: Record<(typeof teams)[number], string> = {
    Product: "1",
    Engineering: id % 2 === 0 ? "6" : "7",
    People: "3",
    Sales: "9",
    Finance: "12",
    Design: "8",
  }

  return createEmployee(
    id,
    ["Alex", "Jamie", "Robin", "Kai", "Ari", "Morgan", "Riley", "Sasha"][
      id % 8
    ] +
      " " +
      [
        "Stone",
        "Rivera",
        "Khan",
        "Chen",
        "Nielsen",
        "Moreau",
        "Pereira",
        "Ito",
      ][id % 8] +
      " " +
      id,
    managersByTeam[team],
    team,
    id % 5 === 0 ? "Manager" : "Specialist"
  )
})

export const generatedCanvasDemoData: GeneratedCanvasData = {
  employees: {
    rows: [...baseEmployees, ...generatedEmployees].map((employee) => {
      const directReportsCount = [
        ...baseEmployees,
        ...generatedEmployees,
      ].filter((candidate) => candidate.managerId === employee.id).length

      return {
        ...employee,
        directReportsCount,
        isManager: directReportsCount > 0,
      }
    }),
  },
}

export const orgGalaxyRendererSource = `
async function render({ root, data, theme, api }) {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas2D is not available")

  const tooltip = document.createElement("div")
  tooltip.style.position = "absolute"
  tooltip.style.pointerEvents = "none"
  tooltip.style.padding = "10px 12px"
  tooltip.style.border = "1px solid rgba(255,255,255,0.14)"
  tooltip.style.borderRadius = "14px"
  tooltip.style.background = "rgba(2, 6, 23, 0.82)"
  tooltip.style.color = "white"
  tooltip.style.font = "12px ui-sans-serif, system-ui"
  tooltip.style.boxShadow = "0 24px 80px rgba(15, 23, 42, 0.55)"
  tooltip.style.backdropFilter = "blur(12px)"
  tooltip.style.display = "none"
  tooltip.style.zIndex = "4"

  root.style.position = "relative"
  root.appendChild(canvas)
  root.appendChild(tooltip)

  const rows = data.employees.rows
  const teams = Array.from(new Set(rows.map((row) => row.team || "Unassigned")))
  const legalEntityColors = {
    Spain: "#38bdf8",
    France: "#a78bfa",
    Brazil: "#34d399",
    "United States": "#f59e0b",
  }
  const fallbackColors = ["#fb7185", "#22d3ee", "#c084fc", "#facc15"]

  let width = 0
  let height = 0
  let pointer = { x: -1000, y: -1000 }
  let hovered = null
  let frameId = 0
  let time = 0

  function hash(text) {
    let value = 0
    const input = String(text)
    for (let index = 0; index < input.length; index += 1) {
      value = (value * 31 + input.charCodeAt(index)) % 9973
    }
    return value / 9973
  }

  function resize() {
    const rect = root.getBoundingClientRect()
    width = Math.max(640, rect.width)
    height = Math.max(420, rect.height)
    canvas.width = Math.floor(width * window.devicePixelRatio)
    canvas.height = Math.floor(height * window.devicePixelRatio)
    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    layoutNodes()
  }

  const nodes = rows.map((row) => ({
    row,
    id: String(row.id),
    managerId: row.managerId == null ? null : String(row.managerId),
    team: row.team || "Unassigned",
    directReportsCount: Number(row.directReportsCount || 0),
    x: 0,
    y: 0,
    baseX: 0,
    baseY: 0,
    radius: 3,
  }))

  const nodesById = new Map(nodes.map((node) => [node.id, node]))

  function layoutNodes() {
    const centerX = width / 2
    const centerY = height / 2
    const orbit = Math.min(width, height) * 0.32

    const teamCenters = new Map()
    teams.forEach((team, index) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / teams.length
      teamCenters.set(team, {
        x: centerX + Math.cos(angle) * orbit,
        y: centerY + Math.sin(angle) * orbit * 0.72,
      })
    })

    for (const node of nodes) {
      const center = teamCenters.get(node.team) || { x: centerX, y: centerY }
      const jitterAngle = hash(node.id + "angle") * Math.PI * 2
      const jitterRadius = 24 + hash(node.id + "radius") * 96
      node.baseX = center.x + Math.cos(jitterAngle) * jitterRadius
      node.baseY = center.y + Math.sin(jitterAngle) * jitterRadius * 0.72
      node.x = node.baseX
      node.y = node.baseY
      node.radius = 3.2 + Math.min(10, node.directReportsCount * 1.8)
    }
  }

  function drawBackground() {
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.45, 0, width * 0.5, height * 0.45, Math.max(width, height))
    gradient.addColorStop(0, "#172554")
    gradient.addColorStop(0.46, "#07111f")
    gradient.addColorStop(1, "#020617")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    for (let index = 0; index < 160; index += 1) {
      const x = hash("star-x" + index) * width
      const y = hash("star-y" + index) * height
      const pulse = 0.45 + Math.sin(time * 0.02 + index) * 0.35
      ctx.fillStyle = "rgba(226, 232, 240, " + (0.12 + pulse * 0.22) + ")"
      ctx.fillRect(x, y, 1.2, 1.2)
    }
  }

  function drawConstellations() {
    teams.forEach((team) => {
      const teamNodes = nodes.filter((node) => node.team === team)
      if (teamNodes.length === 0) return
      const x = teamNodes.reduce((sum, node) => sum + node.baseX, 0) / teamNodes.length
      const y = teamNodes.reduce((sum, node) => sum + node.baseY, 0) / teamNodes.length
      const radius = 90 + Math.min(120, teamNodes.length * 1.6)

      ctx.beginPath()
      ctx.strokeStyle = "rgba(125, 211, 252, 0.12)"
      ctx.lineWidth = 1
      ctx.ellipse(x, y, radius, radius * 0.55, Math.sin(time * 0.004) * 0.2, 0, Math.PI * 2)
      ctx.stroke()

      ctx.fillStyle = "rgba(255, 255, 255, 0.48)"
      ctx.font = "600 11px ui-sans-serif, system-ui"
      ctx.letterSpacing = "2px"
      ctx.fillText(String(team).toUpperCase(), x - radius * 0.48, y - radius * 0.48)
    })
  }

  function drawLinks() {
    ctx.lineWidth = 1
    for (const node of nodes) {
      if (!node.managerId) continue
      const manager = nodesById.get(node.managerId)
      if (!manager) continue
      const color = legalEntityColors[node.row.legalEntity] || fallbackColors[hash(node.row.legalEntity) * fallbackColors.length | 0]
      ctx.beginPath()
      ctx.strokeStyle = color.replace("#", "rgba(")
      const hex = color.slice(1)
      const red = parseInt(hex.slice(0, 2), 16)
      const green = parseInt(hex.slice(2, 4), 16)
      const blue = parseInt(hex.slice(4, 6), 16)
      ctx.strokeStyle = "rgba(" + red + "," + green + "," + blue + ",0.18)"
      ctx.moveTo(manager.x, manager.y)
      const midX = (manager.x + node.x) / 2 + Math.sin(time * 0.01 + hash(node.id) * 8) * 18
      const midY = (manager.y + node.y) / 2 - 20
      ctx.quadraticCurveTo(midX, midY, node.x, node.y)
      ctx.stroke()
    }
  }

  function drawNodes() {
    hovered = null
    let hoveredDistance = 9999

    for (const node of nodes) {
      const wave = Math.sin(time * 0.025 + hash(node.id) * 20) * 2
      node.x = node.baseX + Math.cos(time * 0.006 + hash(node.id) * 12) * 6
      node.y = node.baseY + Math.sin(time * 0.007 + hash(node.id) * 9) * 6
      const distance = Math.hypot(pointer.x - node.x, pointer.y - node.y)
      if (distance < Math.max(16, node.radius + 6) && distance < hoveredDistance) {
        hovered = node
        hoveredDistance = distance
      }

      const color = legalEntityColors[node.row.legalEntity] || fallbackColors[hash(node.row.legalEntity) * fallbackColors.length | 0]
      ctx.save()
      ctx.shadowColor = color
      ctx.shadowBlur = node.directReportsCount > 0 ? 22 : 10
      ctx.beginPath()
      ctx.fillStyle = color
      ctx.arc(node.x, node.y, node.radius + wave * 0.2, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      if (node.directReportsCount > 0) {
        ctx.beginPath()
        ctx.strokeStyle = color + "66"
        ctx.lineWidth = 1.5
        ctx.arc(node.x, node.y, node.radius + 6 + Math.sin(time * 0.04) * 2, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    if (hovered) {
      ctx.save()
      ctx.shadowColor = "#ffffff"
      ctx.shadowBlur = 24
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255,255,255,0.9)"
      ctx.lineWidth = 2
      ctx.arc(hovered.x, hovered.y, hovered.radius + 10, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }
  }

  function drawLegend() {
    const entries = Object.entries(legalEntityColors)
    const left = 24
    const top = height - entries.length * 22 - 28
    ctx.fillStyle = "rgba(2, 6, 23, 0.56)"
    ctx.strokeStyle = "rgba(255,255,255,0.12)"
    ctx.beginPath()
    ctx.roundRect(left - 12, top - 14, 190, entries.length * 22 + 26, 16)
    ctx.fill()
    ctx.stroke()

    ctx.font = "11px ui-sans-serif, system-ui"
    entries.forEach(([label, color], index) => {
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(left, top + index * 22, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = "rgba(255,255,255,0.72)"
      ctx.fillText(label, left + 12, top + index * 22 + 4)
    })
  }

  function draw() {
    time += theme && theme.reducedMotion ? 0 : 1
    drawBackground()
    drawConstellations()
    drawLinks()
    drawNodes()
    drawLegend()
    if (!theme || !theme.reducedMotion) {
      frameId = requestAnimationFrame(draw)
    }
  }

  function handlePointerMove(event) {
    const rect = canvas.getBoundingClientRect()
    pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    if (!hovered) {
      tooltip.style.display = "none"
      return
    }

    tooltip.style.display = "block"
    tooltip.style.left = Math.min(pointer.x + 18, width - 230) + "px"
    tooltip.style.top = Math.max(16, pointer.y - 10) + "px"
    tooltip.innerHTML = "<strong>" + hovered.row.name + "</strong><br/>" + hovered.row.jobTitle + "<br/><span style='color:#94a3b8'>" + hovered.team + " · " + hovered.row.legalEntity + "</span>"
  }

  function handlePointerLeave() {
    pointer = { x: -1000, y: -1000 }
    tooltip.style.display = "none"
  }

  function handleClick() {
    if (!hovered) return
    api.selectNode(hovered.id, {
      label: hovered.row.name,
      details: {
        team: hovered.team,
        role: hovered.row.jobTitle,
        location: hovered.row.location,
        legalEntity: hovered.row.legalEntity,
        directReports: hovered.directReportsCount,
      },
    })
  }

  window.addEventListener("resize", resize)
  canvas.addEventListener("pointermove", handlePointerMove)
  canvas.addEventListener("pointerleave", handlePointerLeave)
  canvas.addEventListener("click", handleClick)

  resize()
  api.log("Loaded " + rows.length + " employees into the org galaxy")
  draw()

  return {
    destroy() {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerleave", handlePointerLeave)
      canvas.removeEventListener("click", handleClick)
      canvas.remove()
      tooltip.remove()
    },
  }
}
`

const productOrgSummaries = [
  {
    domain: "Talent",
    assigned: 48,
    openings: 13,
    tbd: 2,
    leave: 5,
    locations: { BCN: 15, MAD: 3, WFH: 25 },
  },
  {
    domain: "Finance",
    assigned: 38,
    openings: 11,
    tbd: 0,
    leave: 2,
    locations: { BCN: 12, MAD: 2, WFH: 22 },
  },
  {
    domain: "Time",
    assigned: 34,
    openings: 12,
    tbd: 0,
    leave: 2,
    locations: { BCN: 17, MAD: 2, WFH: 13 },
  },
  {
    domain: "Employee LifeCycle",
    assigned: 26,
    openings: 4,
    tbd: 0,
    leave: 0,
    locations: { BCN: 15, MAD: 0, WFH: 11 },
  },
  {
    domain: "Compensation",
    assigned: 24,
    openings: 10,
    tbd: 0,
    leave: 0,
    locations: { BCN: 9, MAD: 0, WFH: 15 },
  },
  {
    domain: "IT",
    assigned: 14,
    openings: 10,
    tbd: 0,
    leave: 0,
    locations: { BCN: 10, MAD: 2, WFH: 2 },
  },
  {
    domain: "Platform",
    assigned: 66,
    openings: 13,
    tbd: 0,
    leave: 1,
    locations: { BCN: 27, MAD: 10, WFH: 23 },
  },
  {
    domain: "P. Growth",
    assigned: 7,
    openings: 3,
    tbd: 0,
    leave: 0,
    locations: { BCN: 5, MAD: 0, WFH: 0 },
  },
] as const

const productOrgPeople = [
  {
    id: "owner-talent",
    firstName: "Ari",
    lastName: "Talent",
    domain: "Talent",
  },
  {
    id: "owner-finance",
    firstName: "Mika",
    lastName: "Finance",
    domain: "Finance",
  },
  { id: "owner-time", firstName: "Noa", lastName: "Time", domain: "Time" },
  {
    id: "owner-lifecycle",
    firstName: "Leo",
    lastName: "Lifecycle",
    domain: "Employee LifeCycle",
  },
  {
    id: "owner-compensation",
    firstName: "Uma",
    lastName: "Comp",
    domain: "Compensation",
  },
  { id: "owner-it", firstName: "Ira", lastName: "IT", domain: "IT" },
  {
    id: "owner-platform",
    firstName: "Paz",
    lastName: "Platform",
    domain: "Platform",
  },
  {
    id: "owner-growth",
    firstName: "Gia",
    lastName: "Growth",
    domain: "P. Growth",
  },
] as const

const productOrgStaffingRows = [
  { row: 9, discipline: "Product Management" },
  { row: 11, discipline: "Product Design" },
  { row: 13, discipline: "Product Engineering" },
] as const

const productOrgStaffingCells = productOrgSummaries.flatMap((summary) =>
  productOrgStaffingRows.map((row, index) => ({
    id: summary.domain + ":" + row.discipline,
    domain: summary.domain,
    discipline: row.discipline,
    assigned: Math.max(
      1,
      Math.round(summary.assigned * [0.16, 0.14, 0.7][index])
    ),
    openings: Math.round(summary.openings * [0.22, 0.18, 0.6][index]),
    leave: Math.round(summary.leave * [0.34, 0.33, 0.33][index]),
  }))
)

export const productOrgCanvasData: GeneratedCanvasData = {
  summaries: productOrgSummaries,
  staffingRows: productOrgStaffingRows,
  staffingCells: productOrgStaffingCells,
  people: productOrgPeople,
}

export const productOrgRendererSource = `
async function render({ root, data, api }) {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas2D is not available")

  root.style.position = "relative"
  root.appendChild(canvas)

  const summaries = data.summaries || []
  const rows = data.staffingRows || []
  const cells = data.staffingCells || []
  const people = data.people || []
  const hits = []
  let width = 0
  let height = 0

  function resize() {
    const rect = root.getBoundingClientRect()
    width = Math.max(960, rect.width)
    height = Math.max(560, rect.height)
    canvas.width = Math.floor(width * window.devicePixelRatio)
    canvas.height = Math.floor(height * window.devicePixelRatio)
    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    draw()
  }

  function roundedRect(x, y, w, h, r) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
  }

  function text(label, x, y, size, color, align) {
    ctx.fillStyle = color
    ctx.font = "600 " + size + "px ui-sans-serif, system-ui"
    ctx.textAlign = align || "left"
    ctx.fillText(String(label), x, y)
  }

  function draw() {
    hits.length = 0
    ctx.fillStyle = "#070a12"
    ctx.fillRect(0, 0, width, height)
    const left = 160
    const top = 92
    const laneHeight = Math.min(118, (height - top - 56) / rows.length)
    const towerWidth = (width - left - 28) / summaries.length
    const maxAssigned = Math.max(...summaries.map((item) => Number(item.assigned || 0)), 1)

    text("PRODUCT ORG / 2026 Q2", 18, 32, 15, "#dbeafe")
    text("native board from spreadsheet structure · avatars rendered by host", 18, 54, 11, "#93a4c7")

    rows.forEach((row, index) => {
      const y = top + index * laneHeight
      ctx.fillStyle = index % 2 ? "rgba(15,23,42,0.66)" : "rgba(15,23,42,0.38)"
      ctx.fillRect(0, y, width, laneHeight - 1)
      text(row.discipline, 18, y + laneHeight * 0.55, 12, "#b7c6f2")
    })

    summaries.forEach((summary, domainIndex) => {
      const x = left + domainIndex * towerWidth
      const color = ["#38bdf8", "#34d399", "#a78bfa", "#f59e0b"][domainIndex % 4]
      const towerHeight = 22 + (Number(summary.assigned || 0) / maxAssigned) * 46

      roundedRect(x + 8, 20, towerWidth - 16, 44 + towerHeight, 16)
      ctx.fillStyle = "rgba(15,23,42,0.94)"
      ctx.fill()
      ctx.strokeStyle = color + "88"
      ctx.stroke()
      text(summary.domain, x + 18, 44, 12, "#e2e8f0")
      text(summary.assigned + " assigned · " + summary.openings + " open", x + 18, 64, 10, "#93a4c7")
      hits.push({
        x: x + 8,
        y: 20,
        w: towerWidth - 16,
        h: 44 + towerHeight,
        node: {
          id: "domain:" + summary.domain,
          label: summary.domain,
          kind: "domain",
          details: {
            assigned: summary.assigned,
            openings: summary.openings,
            leave: summary.leave,
          },
        },
      })

      rows.forEach((row, rowIndex) => {
        const cell = cells.find((candidate) => candidate.domain === summary.domain && candidate.discipline === row.discipline)
        if (!cell) return
        const laneY = top + rowIndex * laneHeight
        const chipWidth = Math.max(36, Math.min(towerWidth - 24, Number(cell.assigned || 0) * 4.2))
        const chipX = x + (towerWidth - chipWidth) / 2
        const chipY = laneY + laneHeight / 2 - 12
        const warning = Number(cell.openings || 0) + Number(cell.leave || 0)

        ctx.shadowColor = warning > 0 ? "#fb923c" : color
        ctx.shadowBlur = warning > 0 ? 24 : 14
        roundedRect(chipX, chipY, chipWidth, 24, 12)
        ctx.fillStyle = warning > 0 ? "rgba(251,146,60,0.86)" : "rgba(14,165,233,0.72)"
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.strokeStyle = "rgba(255,255,255,0.22)"
        ctx.stroke()
        text(cell.assigned + (warning > 0 ? " +" + warning : ""), chipX + chipWidth / 2, chipY + 16, 10, "#ffffff", "center")
        hits.push({
          x: chipX,
          y: chipY,
          w: chipWidth,
          h: 24,
          node: {
            id: cell.id,
            label: summary.domain + " · " + row.discipline,
            kind: "staffingCell",
            details: {
              assigned: cell.assigned,
              openings: cell.openings,
              leave: cell.leave,
            },
          },
        })
      })
    })

    const anchors = people.map((person) => {
      const domainIndex = summaries.findIndex((summary) => summary.domain === person.domain)
      const safeIndex = Math.max(0, domainIndex)
      const x = left + safeIndex * towerWidth + towerWidth / 2
      return {
        id: person.id,
        kind: "person",
        label: person.firstName + " " + person.lastName,
        firstName: person.firstName,
        lastName: person.lastName,
        x,
        y: 84,
        size: 32,
        details: { domain: person.domain },
      }
    })
    api.setAnchors(anchors)
  }

  function handleClick(event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const hit = hits.find((item) => x >= item.x && x <= item.x + item.w && y >= item.y && y <= item.y + item.h)
    if (hit) api.selectNode(hit.node)
  }

  canvas.addEventListener("click", handleClick)
  window.addEventListener("resize", resize)
  resize()
  api.log("Rendered product-org native board with " + summaries.length + " domains and host avatar anchors")

  return {
    destroy() {
      canvas.removeEventListener("click", handleClick)
      window.removeEventListener("resize", resize)
      canvas.remove()
    },
  }
}
`

export const runtimeErrorRendererSource = `
async function render() {
  throw new Error("Intentional generated renderer failure for spike feedback")
}
`

export const orgGalaxyContent: GeneratedCanvasContent = {
  type: "generatedCanvas",
  title: "Org Galaxy",
  description:
    "A mocked generated visual artifact: employees become stars, teams become constellations, and manager links become glowing gravity lines.",
  engine: "canvas2d",
  rendererSource: orgGalaxyRendererSource,
  data: generatedCanvasDemoData,
  stylePrompt:
    "Dark cinematic galaxy with animated stars, glowing manager links, team constellations, legal-entity colors, and clickable employee nodes.",
}

export const productOrgContent: GeneratedCanvasContent = {
  type: "generatedCanvas",
  title: "Product Org Mission Control",
  description:
    "A native generated-canvas representation of the product-org planning spreadsheet with host-rendered avatar anchors.",
  engine: "canvas2d",
  rendererSource: productOrgRendererSource,
  data: productOrgCanvasData,
  stylePrompt:
    "Mission-control staffing board generated from the 2026 Q2 product-org spreadsheet shape; domain towers, discipline lanes, opening warnings, and F0 avatar anchors for domain owners.",
}

export const brokenRendererContent: GeneratedCanvasContent = {
  ...orgGalaxyContent,
  title: "Broken Generated Canvas",
  description: "Shows the runtime error overlay when generated source fails.",
  rendererSource: runtimeErrorRendererSource,
}
