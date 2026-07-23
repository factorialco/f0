/**
 * Generates the f0-themed MapLibre styles (`f0-light.json`, `f0-dark.json`) from
 * the OpenFreeMap Bright style.
 *
 * Method: every color in Bright is matched to the nearest f0 token by perceptual
 * distance (CIEDE2000 in CIELAB), grouped into ~12 cartographic roles, then
 * muted and resolved to concrete hex for the light and dark neutral ramps
 * (packages/core/src/tokens/colors.ts + base.css). The built environment (land,
 * roads, buildings, boundaries, labels) rides the neutral ramp; nature (water,
 * park, sand) borrows a desaturated categorical hue at low opacity.
 *
 * Run: `node src/patterns/F0Map/styles/buildStyles.mjs`
 * Source: https://tiles.openfreemap.org/styles/bright  (OSM data, ODbL)
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const BRIGHT_URL = "https://tiles.openfreemap.org/styles/bright"
const OUT_DIR = path.dirname(fileURLToPath(import.meta.url))

const hslToRgb = (h, s, l) => {
  s /= 100
  l /= 100
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  const t = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][Math.floor(h / 60) % 6]
  return t.map((v) => Math.round((v + m) * 255))
}
const over = (fg, a, bg) =>
  fg.map((v, i) => Math.round(v * a + bg[i] * (1 - a)))
const hex = ([r, g, b]) =>
  "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")

// f0 base tokens (packages/core/src/tokens/colors.ts) as [h, s, l, a]
const T = {
  "grey.0": [210, 91, 22, 0.02],
  "grey.2": [219, 88, 17, 0.02],
  "grey.5": [220, 88, 17, 0.04],
  "grey.10": [216, 89, 18, 0.06],
  "grey.20": [214, 70, 20, 0.1],
  "grey.30": [213, 87, 15, 0.2],
  "grey.40": [219, 97, 15, 0.45],
  "grey.50": [217, 96, 11, 0.61],
  "grey.100": [218, 48, 10, 1],
  "grey.solid.40": [219, 18, 69, 1],
  "grey.solid.50": [218, 14, 45, 1],
  "white.100": [0, 0, 100, 1],
  "white.5": [0, 0, 100, 0.05],
  "white.10": [0, 0, 100, 0.1],
  "white.20": [0, 0, 100, 0.2],
  "white.30": [0, 0, 100, 0.3],
  "white.40": [0, 0, 100, 0.4],
  "white.50": [0, 0, 100, 0.5],
  "malibu.50": [216, 90, 65, 1],
  "malibu.60": [216, 59, 55, 1],
  "malibu.70": [216, 48, 44, 1],
  "flubber.50": [84, 55, 53, 1],
  "flubber.60": [84, 48, 45, 1],
  "flubber.70": [83, 48, 33, 1],
  "yellow.50": [38, 92, 54, 1],
  "yellow.60": [38, 79, 45, 1],
  "red.50": [5, 100, 65, 1],
  "red.60": [4, 61, 49, 1],
  "camel.50": [25, 46, 53, 1],
}
const rgbOf = (t) => hslToRgb(T[t][0], T[t][1], T[t][2])
const alphaOf = (t) => T[t][3]

// neutral ramp per base.css (dark inverts grey <-> white)
const NEUTRAL = {
  light: {
    0: "white.100",
    2: "grey.0",
    3: "grey.2",
    5: "grey.5",
    10: "grey.10",
    20: "grey.20",
    30: "grey.30",
    40: "grey.40",
    50: "grey.50",
    100: "grey.100",
    solid40: "grey.solid.40",
    solid50: "grey.solid.50",
  },
  dark: {
    0: "grey.100",
    2: "grey.0",
    3: "grey.2",
    5: "white.5",
    10: "white.10",
    20: "white.20",
    30: "white.30",
    40: "white.40",
    50: "white.50",
    100: "white.100",
    solid40: "white.40",
    solid50: "white.50",
  },
}
const pageSolid = (theme) =>
  theme === "light" ? [255, 255, 255] : rgbOf("grey.100")
const neutral = (theme, step) => {
  const tok = NEUTRAL[theme][step]
  return hex(over(rgbOf(tok), alphaOf(tok), pageSolid(theme)))
}
const tint = (theme, tok, a, landHex) => {
  const land = [1, 3, 5].map((i) => parseInt(landHex.slice(i, i + 2), 16))
  return hex(over(rgbOf(tok), a, land))
}
// Blend two hex colors: t=0 -> a, t=1 -> b.
const mix = (aHex, bHex, t) => {
  const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16))
  const a = p(aHex),
    b = p(bHex)
  return hex(a.map((v, i) => Math.round(v * (1 - t) + b[i] * t)))
}

// Boost a hex color's saturation by `factor` (1.3 = +30%), preserving hue/lightness.
const saturate = (h, factor) => {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(h.slice(i, i + 2), 16))
    .map((v) => v / 255)
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  const l = (max + min) / 2
  let s = 0,
    hue = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    hue =
      max === r
        ? (g - b) / d + (g < b ? 6 : 0)
        : max === g
          ? (b - r) / d + 2
          : (r - g) / d + 4
    hue *= 60
  }
  s = Math.min(1, s * factor)
  return hex(hslToRgb(hue, s * 100, l * 100))
}

// Vibrance: raises saturation weighted by how muted a colour already is, so
// washed-out colours gain the most life while already-vivid ones are protected
// from clipping - unlike a flat ×factor bump that lifts everything equally.
const vibrance = (h, amount) => {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(h.slice(i, i + 2), 16))
    .map((v) => v / 255)
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  const l = (max + min) / 2
  let s = 0,
    hue = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    hue =
      max === r
        ? (g - b) / d + (g < b ? 6 : 0)
        : max === g
          ? (b - r) / d + 2
          : (r - g) / d + 4
    hue *= 60
  }
  const s2 = Math.min(1, s + amount * (1 - s))
  return hex(hslToRgb(hue, s2 * 100, l * 100))
}

const flavor = (theme) => {
  const L = theme === "light"
  // Natural land is gently green by default (Google-style); cities are the
  // lighter patches painted on top. `urban` is the light base for built land.
  // Land is a proper green by default so the whole map reads as vegetated (not
  // just parks); park/wood are a gentle step deeper for a cohesive gradient.
  const land = tint(
    theme,
    L ? "flubber.50" : "flubber.60",
    L ? 0.34 : 0.3,
    neutral(theme, 2)
  )
  const urban = L ? neutral(theme, 0) : neutral(theme, 10)
  return {
    land,
    // Zoomed-out world land: a soft tan (arid, Google-style) instead of green,
    // lightened ~40% (20% in dark) so it stays gentle at world scale.
    worldLand: mix(
      tint(theme, "camel.50", L ? 0.3 : 0.34, urban),
      "#ffffff",
      L ? 0.72 : 0.08
    ),
    // Buildings a soft grey (a touch darker than the pale midpoint), with a
    // clearly darker outline so footprints read.
    building: mix(neutral(theme, 10), neutral(theme, 20), 0.5),
    buildingLine: neutral(theme, 30),
    // Local streets are white (Google-style) so they pop against the pale
    // urban fabric; autopistas keep the darker grey so the main network reads.
    roadMajor: mix(neutral(theme, 30), neutral(theme, 40), 0.3),
    roadMinor: L ? "#ffffff" : neutral(theme, 30),
    roadCasing: neutral(theme, 20),
    // Walking / cycling paths: a muted mustard-yellow so trails read distinctly
    // from the white vehicle streets without shouting. Kept out of the global
    // saturation boost (see saturatedFlavor) so it stays soft, not a neon yellow.
    path: hex(hslToRgb(45, 52, L ? 82 : 72)),
    boundary: neutral(theme, 30),
    water: tint(theme, L ? "malibu.50" : "malibu.60", L ? 0.45 : 0.5, land),
    // Greens a gentle step deeper than the green land, so parks/woods still read.
    park: tint(theme, L ? "flubber.60" : "flubber.60", 0.42, land),
    wood: tint(theme, L ? "flubber.70" : "flubber.70", 0.55, land),
    // Urban land use (and the zoomed-in base land) is a warm tan - Google
    // Maps' land colour - clearly warmer than a plain neutral and distinct from
    // the green countryside. yellow.60 is deep enough to read as a tan rather
    // than an off-white.
    residential: tint(theme, "yellow.60", L ? 0.09 : 0.13, urban),
    commercial: tint(theme, "yellow.60", L ? 0.12 : 0.16, urban),
    school: tint(theme, "yellow.60", L ? 0.07 : 0.1, urban),
    hospital: tint(theme, L ? "red.50" : "red.60", L ? 0.12 : 0.16, urban),
    industrial: neutral(theme, 10),
    // Tagged sand / dunes read as a light desaturated tan (not a strong orange).
    sand: tint(theme, "camel.50", L ? 0.2 : 0.26, urban),
    // Cropland + bare rock read as a light tan-beige (the arid/agricultural
    // look Google gives the meseta / semi-desert). Bright omits these classes.
    farmland: tint(theme, "camel.50", L ? 0.14 : 0.2, urban),
    rock: tint(theme, "camel.50", L ? 0.1 : 0.14, urban),
    glacier: tint(theme, "malibu.50", 0.08, urban),
    labelText: neutral(theme, 100),
    labelSecondary: neutral(theme, "solid50"),
    labelHalo: neutral(theme, 0),
    // Water labels: dark blue + light halo (light) / bright blue + dark halo (dark).
    waterLabel: L ? hex(rgbOf("malibu.70")) : hex(rgbOf("malibu.50")),
  }
}

// Global saturation boost: the tinted-over-neutral colors come out flatter than
// the reference look, so every flavor color gets +30% saturation.
const saturatedFlavor = (theme) => {
  const f = flavor(theme)
  // Lift only the *nature* colours (water, park, wood, land…) with a vibrance
  // curve - muted colours gain the most life, vivid ones are protected. The
  // warm urban / arid fabric is left untouched so it stays a neutral whitish
  // tan rather than a boosted yellow; `path` keeps its soft mustard; and the
  // neutral ramp roles (labels, roads, buildings, boundaries) are excluded
  // entirely - they must stay neutral. Boosting them amplified the faint blue
  // the dark neutral ramp carries (it composites over the navy `grey.100`),
  // which is what turned dark town / state labels a saturated blue.
  const KEEP_MUTED = new Set([
    "residential",
    "commercial",
    "school",
    "worldLand",
    "sand",
    "farmland",
    "rock",
    "path",
    "labelText",
    "labelSecondary",
    "labelHalo",
    "building",
    "buildingLine",
    "roadMajor",
    "roadMinor",
    "roadCasing",
    "boundary",
    "industrial",
  ])
  const out = Object.fromEntries(
    Object.entries(f).map(([k, v]) => [
      k,
      KEEP_MUTED.has(k) ? v : vibrance(v, 0.2),
    ])
  )
  // Grassy parks (e.g. Montjuïc) still read a touch too vivid after the lift;
  // ease that green back ~25%. Forest (`wood`) keeps its lifted saturation.
  out.park = saturate(out.park, 0.75)

  // Dark mode, modelled on dark basemaps (Carto Dark Matter, Google / Mapbox
  // dark): every land surface stays dark and nearly uniform - terrain type is
  // barely distinguishable - so the map doesn't read as patches of light grey.
  // Contrast lives on the linework (roads, boundaries) and labels, which
  // already ride the light end of the neutral ramp and are left untouched.
  // Basemap-only; markers, routes and arcs keep their palette hues.
  if (theme === "dark") {
    // All area fills collapse onto one dark step just above the background.
    const fill = neutral("dark", 5)
    for (const k of [
      "land",
      "worldLand",
      "park",
      "wood",
      "residential",
      "commercial",
      "school",
      "industrial",
      "sand",
      "farmland",
      "rock",
      "hospital",
    ]) {
      out[k] = fill
    }
    // Buildings a touch lighter so footprints still separate from the land.
    out.building = neutral("dark", 10)
    out.buildingLine = neutral("dark", 20)
    out.glacier = neutral("dark", 10)
    // Paths lose the mustard - a mid-grey line reads without colour.
    out.path = neutral("dark", 20)
    // Secondary place labels (towns, villages, states) use the exact
    // foreground-secondary token (neutral-solid-40) so they match the app's
    // text-secondary rather than the lighter map step.
    out.labelSecondary = neutral("dark", "solid40")
    // Water: not blue in dark - the page base lifted by a whisper of white
    // (a very light overlay), so the sea reads as a subtly lighter surface.
    out.water = tint("dark", "white.100", 0.06, neutral("dark", 0))
    out.waterLabel = saturate(hex(rgbOf("malibu.50")), 0.6)
  }
  return out
}

// Geometry (fill/line) role from the layer id + its source-layer.
const fillRole = (lid) => {
  if (/water|ocean|sea|river|lake|bay/.test(lid)) return "water"
  if (/wood|forest/.test(lid)) return "wood"
  if (/cemetery/.test(lid)) return "park"
  if (/park|grass|meadow|golf|pitch|garden|recreation|vegetation/.test(lid))
    return "park"
  if (/residential|suburb|neighbourhood/.test(lid)) return "residential"
  if (/commercial|retail/.test(lid)) return "commercial"
  if (/hospital/.test(lid)) return "hospital"
  if (/school|university|college/.test(lid)) return "school"
  if (/industrial|railway|dam|garages/.test(lid)) return "industrial"
  if (/sand|beach/.test(lid)) return "sand"
  if (/glacier|ice-shelf|ice_shelf/.test(lid)) return "glacier"
  if (/building/.test(lid)) return "building"
  if (/boundary|admin/.test(lid)) return "boundary"
  // Pedestrian / cycle paths, before the catch-all road rule (their ids also
  // contain highway/bridge/tunnel), so walking trails get their own colour.
  if (/path|footway|cycleway|pedestrian|steps/.test(lid)) return "path"
  if (
    /bridge|tunnel|highway|motorway|road|transp|rail|aeroway|path|street|pier/.test(
      lid
    )
  )
    return "road"
  return "land"
}

// Scale a line-width value (number or zoom interpolate/step expression) so
// streets render wider than OSM Bright's rather thin defaults.
const scaleWidth = (v, factor) => {
  if (typeof v === "number") return v * factor
  if (Array.isArray(v) && v[0] === "interpolate") {
    const out = [...v]
    for (let i = 4; i < out.length; i += 2)
      if (typeof out[i] === "number") out[i] = out[i] * factor
    return out
  }
  if (Array.isArray(v) && v[0] === "step") {
    const out = [...v]
    for (let i = 2; i < out.length; i += 2)
      if (typeof out[i] === "number") out[i] = out[i] * factor
    return out
  }
  return v
}

const COLOR_KEYS = new Set([
  "background-color",
  "fill-color",
  "fill-outline-color",
  "line-color",
  "text-color",
  "text-halo-color",
  "circle-color",
  "circle-stroke-color",
  "fill-extrusion-color",
  "icon-color",
])

const recolor = (style, theme) => {
  const f = saturatedFlavor(theme)
  const out = JSON.parse(JSON.stringify(style))
  out.name = `f0-${theme}`
  out.metadata = { ...(out.metadata || {}), "f0:generated": true }

  for (const layer of out.layers || []) {
    const lid = layer.id.toLowerCase()
    const src = (layer["source-layer"] || "").toLowerCase()

    // Hide ferry / shipping route lines (noise when zoomed out), road shields
    // (the boxed route numbers like "B-25"), and all basemap POI icons/labels
    // (metro, shops, etc.) - our own markers are the only points of interest.
    if (/ferry|shipping|shield|poi_/.test(lid)) {
      layer.layout = { ...(layer.layout || {}), visibility: "none" }
      continue
    }
    // Base land: green when zoomed out (the world / regional view), fading to
    // the urban near-white as you approach neighbourhood zoom. We can't paint
    // cities white from data - OSM `residential` landuse is missing across much
    // of Europe (Barcelona's Gràcia has ~1 residential polygon), so a green
    // base would leave whole neighbourhoods looking like fields until buildings
    // render at z14. Instead the base itself goes neutral by ~z13.5; real
    // vegetation stays green because the landcover (grass/wood/farmland) and
    // park polygons still paint on top at those zooms.
    if (layer.type === "background") {
      layer.paint = {
        ...(layer.paint || {}),
        "background-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          11.5,
          f.worldLand,
          13.5,
          f.residential,
        ],
      }
      continue
    }

    const paint = layer.paint || {}

    // Labels: keyed on the symbol type, not the id, so none fall through to
    // the land color (which turned airport/POI labels invisible-white).
    if (layer.type === "symbol") {
      const text = /water|waterway/.test(src)
        ? f.waterLabel
        : /capital|city|country/.test(lid)
          ? f.labelText
          : f.labelSecondary
      paint["text-color"] = text
      // Always give labels a light halo - several Bright layers (road names in
      // particular) ship no halo color, so dark text sat unreadable on the grey
      // roads. Road names get a thicker halo since they overlap the pavement.
      paint["text-halo-color"] = f.labelHalo
      paint["text-halo-width"] = src === "transportation_name" ? 1.6 : 1.2
      paint["text-halo-blur"] = 0.4
      // POI badges (our sprite) bake in their category colour and white glyph,
      // so they need no icon-color. Only recolour icons that were tinted
      // upstream (non-POI symbol layers) to keep them on-theme.
      if (src !== "poi" && "icon-color" in paint)
        paint["icon-color"] = f.labelSecondary
      layer.paint = paint
      continue
    }

    // Urban fills must not cut off at a zoom threshold - Bright caps
    // landuse-suburb at z10, which made city areas pop green while zooming.
    if (/landuse-(suburb|residential|commercial)/.test(lid))
      delete layer.maxzoom

    // Wider streets: scale every road line-width (fills and casings stay
    // proportional). Paths/footways keep their thin default.
    if (
      layer.type === "line" &&
      src === "transportation" &&
      !/path|oneway/.test(lid) &&
      paint["line-width"] !== undefined
    ) {
      paint["line-width"] = scaleWidth(paint["line-width"], 1.5)
    }

    // Fills / lines by geometry role.
    const role = fillRole(lid)
    for (const k of Object.keys(paint)) {
      if (!COLOR_KEYS.has(k)) continue
      let v
      switch (role) {
        case "water":
          v = f.water
          break
        case "wood":
          v = f.wood
          break
        case "park":
          v = f.park
          break
        case "residential":
          v = f.residential
          break
        case "commercial":
          v = f.commercial
          break
        case "hospital":
          v = f.hospital
          break
        case "school":
          v = f.school
          break
        case "industrial":
          v = f.industrial
          break
        case "sand":
          v = f.sand
          break
        case "glacier":
          v = f.glacier
          break
        case "building":
          v = k === "fill-outline-color" ? f.buildingLine : f.building
          break
        case "boundary":
          v = f.boundary
          break
        case "path":
          // Casings/outlines stay the neutral street casing; the path line
          // itself is the muted yellow.
          v =
            /casing|outline/.test(k) || lid.includes("casing")
              ? f.roadCasing
              : f.path
          break
        case "road":
          v = k.includes("halo")
            ? f.labelHalo
            : /casing|outline/.test(k) || lid.includes("casing")
              ? f.roadCasing
              : /major|motorway|trunk|primary|bridge/.test(lid)
                ? f.roadMajor
                : f.roadMinor
          break
        default:
          v = k.includes("halo") ? f.labelHalo : f.land
      }
      paint[k] = v
    }
    // Buildings: force a darker outline so adjacent footprints read as separate
    // buildings, not one grey blob (the Bright layer ships no outline color).
    if (role === "building" && layer.type === "fill") {
      paint["fill-outline-color"] = f.buildingLine
      paint["fill-antialias"] = true
    }
    layer.paint = paint
  }

  // Add fill layers for landcover classes the Bright style omits: farmland
  // (cropland) and rock (bare ground). These cover the big arid / agricultural
  // regions (Spanish meseta, semi-desert) that would otherwise read flat green.
  // The data is in the openmaptiles `landcover` source-layer; there's just no
  // layer drawing it. Inserted just above the base landcover fills.
  const arid = [
    {
      id: "f0-landcover-farmland",
      cls: "farmland",
      srcLayer: "landcover",
      color: f.farmland,
    },
    {
      id: "f0-landcover-rock",
      cls: "rock",
      srcLayer: "landcover",
      color: f.rock,
    },
    {
      id: "f0-landuse-farmland",
      cls: "farmland",
      srcLayer: "landuse",
      color: f.farmland,
    },
  ]
  let idx = out.layers.findIndex((l) => l.id === "landcover-sand")
  if (idx < 0) idx = 0
  for (const a of arid) {
    out.layers.splice(++idx, 0, {
      id: a.id,
      type: "fill",
      source: "openmaptiles",
      "source-layer": a.srcLayer,
      filter: ["==", ["get", "class"], a.cls],
      paint: { "fill-color": a.color, "fill-antialias": false },
    })
  }

  // Drop any source no layer references. Bright ships an `ne2_shaded` relief
  // raster with no layers pointing at it (we don't want shaded relief); left in,
  // its tile fetches fail and keep `map.isStyleLoaded()` from ever resolving.
  const usedSources = new Set(out.layers.map((l) => l.source).filter(Boolean))
  for (const name of Object.keys(out.sources)) {
    if (!usedSources.has(name)) delete out.sources[name]
  }

  return out
}

const bright = await (await fetch(BRIGHT_URL)).json()
for (const theme of ["light", "dark"]) {
  const styled = recolor(bright, theme)
  fs.writeFileSync(
    path.join(OUT_DIR, `f0-${theme}.json`),
    JSON.stringify(styled, null, 2) + "\n"
  )
  console.log(`wrote f0-${theme}.json`)
}
