import { resolve } from "node:path"

type EntryTuple = readonly [
  name: string,
  source: string,
  exportSubpath?: string,
]

const declarationRoots = [
  ["f0", "src/f0.ts", "."],
  ["experimental", "src/experimental.ts", "./experimental"],
  ["ai", "src/ai.ts", "./ai"],
  ["component-status", "src/component-status.ts", "./component-status"],
  [
    "i18n-provider-defaults",
    "src/lib/providers/i18n/i18n-provider-defaults.ts",
    "./i18n-provider-defaults",
  ],
] as const satisfies readonly EntryTuple[]

function componentEntry(name: string, extension: "ts" | "tsx"): EntryTuple {
  return [name, `src/components/${name}/index.${extension}`, `./${name}`]
}

const exportedRuntimeEntries = [
  componentEntry("F0Alert", "ts"),
  ["F0Box", "src/lib/F0Box/index.tsx", "./F0Box"],
  componentEntry("F0Button", "ts"),
  componentEntry("F0Card", "tsx"),
  componentEntry("F0DatePicker", "ts"),
  ["F0Dialog", "src/patterns/F0Dialog/index.tsx", "./F0Dialog"],
  componentEntry("F0Heading", "tsx"),
  componentEntry("F0NumberInput", "tsx"),
  componentEntry("F0Select", "tsx"),
  componentEntry("F0Text", "tsx"),
  componentEntry("F0TextInput", "tsx"),
] as const satisfies readonly EntryTuple[]

function declarationPath(source: string): string {
  return `./dist/${source
    .replace(/^src\//, "")
    .replace(/\.(?:ts|tsx|mts|cts)$/, ".d.ts")}`
}

function publicationEntry(
  [name, source, exportSubpath]: EntryTuple,
  declarationRoot = false
) {
  return {
    name,
    source,
    declarationRoot,
    export:
      exportSubpath === undefined
        ? undefined
        : { subpath: exportSubpath, types: declarationPath(source) },
  }
}

export const publicationEntries = [
  ...declarationRoots.map((entry) => publicationEntry(entry, true)),
  ...exportedRuntimeEntries.map((entry) => publicationEntry(entry)),
]

const iconFamilies = ["ai", "animated", "app", "modules", "special"]

export const compatibilityExports = Object.fromEntries([
  ...iconFamilies.flatMap((family) => [
    [
      `./icons/${family}`,
      {
        types: `./icons/${family}/index.d.ts`,
        import: `./icons/${family}/index.js`,
      },
    ],
    [
      `./icons/${family}/*`,
      {
        types: `./icons/${family}/*.d.ts`,
        import: `./icons/${family}/*.js`,
      },
    ],
  ]),
  ["./styles.css", "./dist/styles.css"],
  ["./package.json", "./package.json"],
])

export const expectedPackageExports = Object.fromEntries([
  ...publicationEntries.flatMap((entry) =>
    entry.export
      ? [
          [
            entry.export.subpath,
            {
              types: entry.export.types,
              import: `./dist/esm/${entry.name}.js`,
            },
          ],
        ]
      : []
  ),
  ...Object.entries(compatibilityExports),
])

function viteEntries(entries: typeof publicationEntries) {
  return Object.fromEntries(
    entries.map((entry) => [
      entry.name,
      resolve(import.meta.dirname, "..", entry.source),
    ])
  )
}

export const declarationEntries = viteEntries(
  publicationEntries.filter((entry) => entry.declarationRoot)
)
export const runtimeEntries = viteEntries(publicationEntries)
