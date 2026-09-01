import { resolve } from "node:path"

type EntryTuple = readonly [
  name: string,
  source: string,
  exportSubpath?: string,
  types?: string,
]

const declarationRoots = [
  ["f0", "src/f0.ts", ".", "./dist/f0.d.ts"],
  [
    "experimental",
    "src/experimental.ts",
    "./experimental",
    "./dist/experimental.d.ts",
  ],
  ["ai", "src/ai.ts", "./ai", "./dist/ai.d.ts"],
  [
    "component-status",
    "src/component-status.ts",
    "./component-status",
    "./dist/component-status.d.ts",
  ],
  [
    "i18n-provider-defaults",
    "src/lib/providers/i18n/i18n-provider-defaults.ts",
    "./i18n-provider-defaults",
    "./dist/lib/providers/i18n/i18n-provider-defaults.d.ts",
  ],
] as const satisfies readonly EntryTuple[]

function componentEntry(name: string, extension: "ts" | "tsx"): EntryTuple {
  return [
    name,
    `src/components/${name}/index.${extension}`,
    `./${name}`,
    `./dist/components/${name}/index.d.ts`,
  ]
}

const exportedRuntimeEntries = [
  componentEntry("F0Alert", "ts"),
  [
    "F0Box",
    "src/lib/F0Box/index.tsx",
    "./F0Box",
    "./dist/lib/F0Box/index.d.ts",
  ],
  componentEntry("F0Button", "ts"),
  componentEntry("F0Card", "tsx"),
  componentEntry("F0DatePicker", "ts"),
  [
    "F0Dialog",
    "src/patterns/F0Dialog/index.tsx",
    "./F0Dialog",
    "./dist/patterns/F0Dialog/index.d.ts",
  ],
  componentEntry("F0Heading", "tsx"),
  componentEntry("F0NumberInput", "tsx"),
  componentEntry("F0Select", "tsx"),
  componentEntry("F0Text", "tsx"),
  componentEntry("F0TextInput", "tsx"),
] as const satisfies readonly EntryTuple[]

const legacyRuntimeEntries = [
  ["F0Form", "src/patterns/F0Form/index.tsx"],
  ["OneDataCollection", "src/patterns/OneDataCollection/exports.ts"],
  ["F0AiChat", "src/kits/ai/F0AiChat/index.ts"],
] as const satisfies readonly EntryTuple[]

function publicationEntry(
  [name, source, exportSubpath, types]: EntryTuple,
  declarationRoot = false
) {
  return {
    name,
    source,
    declarationRoot,
    export:
      exportSubpath && types ? { subpath: exportSubpath, types } : undefined,
  }
}

export const publicationEntries = [
  ...declarationRoots.map((entry) => publicationEntry(entry, true)),
  ...exportedRuntimeEntries.map((entry) => publicationEntry(entry)),
  ...legacyRuntimeEntries.map((entry) => publicationEntry(entry)),
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
  ["./dist/*", "./dist/*"],
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
