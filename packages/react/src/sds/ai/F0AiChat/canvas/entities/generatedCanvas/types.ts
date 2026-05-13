export const generatedCanvasEngines = ["canvas2d", "pixi", "svg"] as const

export type GeneratedCanvasEngine = (typeof generatedCanvasEngines)[number]

export type GeneratedCanvasValue = string | number | boolean | null | undefined

export type GeneratedCanvasJsonValue =
  | GeneratedCanvasValue
  | GeneratedCanvasJsonValue[]
  | readonly GeneratedCanvasJsonValue[]
  | { readonly [key: string]: GeneratedCanvasJsonValue }

export type GeneratedCanvasRow = Record<string, GeneratedCanvasJsonValue>

export interface GeneratedCanvasDataset {
  rows: GeneratedCanvasRow[]
}

export type GeneratedCanvasData = Record<
  string,
  GeneratedCanvasJsonValue | GeneratedCanvasDataset
>

export interface GeneratedCanvasRuntimeTheme {
  mode: "light" | "dark"
  colors: Record<string, string>
  reducedMotion: boolean
}

export interface GeneratedCanvasRuntimeInput {
  rendererSource: string
  data: GeneratedCanvasData
  theme: GeneratedCanvasRuntimeTheme
  engine: GeneratedCanvasEngine
}

export interface GeneratedCanvasSelectedNode {
  id: string
  label?: string
  kind?: string
  details?: Record<string, GeneratedCanvasValue>
}

export interface GeneratedCanvasAnchor {
  id: string
  x: number
  y: number
  kind?: string
  label?: string
  firstName?: string
  lastName?: string
  src?: string
  size?: number
  details?: Record<string, GeneratedCanvasValue>
}
