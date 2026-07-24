export type Maturity =
  | "stable"
  | "experimental"
  | "deprecated"
  | "internal"
  | "sds"
  | "unknown"

export interface JsDoc {
  deprecated: string | null
  removeIn: string | null
  migration: string | null
}

export interface StorySignals {
  usesSatisfiesMeta: boolean
  usesAsMeta: boolean
  hasSnapshotStory: boolean
  usesWithSnapshot: boolean
  optedOutOfAutodocs: boolean
  hasPlayFn: boolean
}

export interface ImplSignals {
  present: boolean
  usesAny: boolean
  usesStarReact: boolean
  hasDefaultExport: boolean
  usesForwardRef: boolean
  setsDisplayName: boolean
  importsRadixDirectly: boolean
  usesDangerouslySetInnerHTML: boolean
  importsFromUi: boolean
}

/**
 * MDX content quality signals.
 * `meetsContentBar` is the bar required for Phase-5 DoD: file must explain
 * usage, not just exist. See `parseMdx` in scripts/scan.mjs for the rule.
 */
export interface MdxSignals {
  present: boolean
  lines: number
  bytes: number
  hasCanvas: boolean
  hasStory: boolean
  headingCount: number
  proseParagraphCount: number
  meetsContentBar: boolean
}

/**
 * Functional input role detected from the component's own implementation
 * files. `null` means the component is not classified as an input.
 *
 *   - "text-field": writable text/number/duration box (F0Input, NumberInput,
 *     TextArea, F0DurationInput, F1SearchBox, …).
 *   - "toggle": boolean on/off control (F0Checkbox, Switch, …).
 *   - "choice": selection from a fixed set without writing (RadioGroup,
 *     ToggleGroup, …).
 */
export type InputKind = "text-field" | "toggle" | "choice" | null

export interface ComponentRecord {
  id: string
  name: string
  folder: string
  storyTitle: string | null
  storyTags: string[]
  storyPath: string
  indexPath: string | null
  implPath: string | null
  mdxPath: string | null
  mdx: MdxSignals
  testPaths: string[]
  story: StorySignals
  hasExperimentalWrapper: boolean
  hasComponentMeta: boolean
  indexHasDefaultExport: boolean
  jsdoc: JsDoc
  impl: ImplSignals
  declaredMaturity: Maturity
  inferredMaturity: Maturity
  inputKind: InputKind
  stories?: string[]
}

export interface Dataset {
  generatedAt: string
  rootRel: string
  total: number
  countsByFolder: Record<string, number>
  components: ComponentRecord[]
}
