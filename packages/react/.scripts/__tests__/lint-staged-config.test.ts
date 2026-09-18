import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"

/**
 * Static checks on the lint-staged wiring. The end-to-end check
 * (`pnpm hooks:e2e`, scripts/check-git-hooks.ts) clones the repo and really
 * commits; this one is cheap enough for the unit suite and catches the
 * mistakes that would make the hook silently do nothing:
 *
 * - a config that no longer exports functions (oxfmt exits 2 on an
 *   all-ignored path list, so the filter has to stay);
 * - lint and format split across two globs (they would race on the same
 *   file — lint-staged runs globs concurrently, array entries sequentially);
 * - a `pnpm run <script>` that no longer exists in that package;
 * - `git add` creeping back in (lint-staged re-stages on its own);
 * - lefthook.yml drifting back to the hand-rolled per-file commands.
 */
const REPO_ROOT = path.resolve(__dirname, "..", "..", "..", "..")

type Task = string | string[]
type TaskFn = (files: string[]) => Task | Promise<Task>
type Config = Record<string, TaskFn>

const CONFIGS = [
  { dir: "", label: "root" },
  { dir: "packages/react", label: "packages/react" },
  { dir: "packages/react-native", label: "packages/react-native" },
] as const

const JS_GLOB = "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"
const DATA_GLOB = "*.{json,jsonc,css,md,yml,yaml}"

const loadConfig = async (dir: string): Promise<Config> => {
  const file = path.join(REPO_ROOT, dir, ".lintstagedrc.mjs")
  const mod = await import(/* @vite-ignore */ file)
  return mod.default
}

const abs = (dir: string, rel: string) => path.join(REPO_ROOT, dir, rel)

const toArray = (task: Task): string[] => (Array.isArray(task) ? task : [task])

/** The command's first words, up to the first quoted file path. */
const commandHead = (command: string) => command.split(' "')[0]

const scriptsOf = (dir: string): Record<string, string> =>
  JSON.parse(readFileSync(path.join(REPO_ROOT, dir, "package.json"), "utf8"))
    .scripts ?? {}

const commandIsRunnable = (dir: string, command: string): boolean => {
  const head = commandHead(command)
  const runMatch = head.match(/^pnpm run (\S+)$/)
  if (runMatch) return runMatch[1] in scriptsOf(dir)
  const bin = head.split(" ")[0]
  return existsSync(path.join(REPO_ROOT, "node_modules", ".bin", bin))
}

describe.each(CONFIGS)("$label .lintstagedrc.mjs", ({ dir }) => {
  it("exports a function for the code glob and the data glob", async () => {
    const config = await loadConfig(dir)
    expect(Object.keys(config).sort()).toEqual([JS_GLOB, DATA_GLOB].sort())
    for (const task of Object.values(config)) {
      expect(typeof task).toBe("function")
    }
  })

  it("runs lint then format on code files, in one sequential array", async () => {
    const config = await loadConfig(dir)
    const files = [abs(dir, "src/a.ts"), abs(dir, "src/b.tsx")]
    const commands = toArray(await config[JS_GLOB](files))
    expect(commands).toHaveLength(2)
    expect(commandHead(commands[0])).toMatch(/lint/)
    expect(commandHead(commands[1])).toMatch(/format|oxfmt/)
    for (const command of commands) {
      expect(commandIsRunnable(dir, command), command).toBe(true)
      for (const file of files) expect(command).toContain(JSON.stringify(file))
    }
  })

  it("only formats code files outside src/ in a package (lint scope = CI's)", async () => {
    if (dir === "") return // the root config lints everything it covers
    const config = await loadConfig(dir)
    const files = [abs(dir, ".storybook/main.ts"), abs(dir, "src/a.ts")]
    const commands = toArray(await config[JS_GLOB](files))
    expect(commands).toHaveLength(2)
    expect(commands[0]).not.toContain(JSON.stringify(files[0]))
    expect(commands[0]).toContain(JSON.stringify(files[1]))
    expect(commands[1]).toContain(JSON.stringify(files[0]))
    const outside = toArray(await config[JS_GLOB]([files[0]]))
    expect(outside).toHaveLength(1)
    expect(commandHead(outside[0])).toMatch(/format/)
  })

  it("formats data files with one runnable command", async () => {
    const config = await loadConfig(dir)
    const files = [abs(dir, "docs/a.mdx"), abs(dir, "x.json")]
    const commands = toArray(await config[DATA_GLOB](files))
    expect(commands).toHaveLength(1)
    expect(commandIsRunnable(dir, commands[0]), commands[0]).toBe(true)
  })

  // oxfmt exits non-zero when every path it is handed is ignored, so a commit
  // touching only an ignored file would be blocked. The filters in each config
  // must therefore mirror that config's oxfmt ignorePatterns.
  it.each(["CHANGELOG.md", "package.json"])(
    "returns no command when %s is the only staged file",
    async (name) => {
      const config = await loadConfig(dir)
      const files = [abs(dir === "" ? "packages/react" : dir, name)]
      expect(toArray(await config[DATA_GLOB](files))).toEqual([])
    }
  )

  it("never formats .mdx (oxfmt corrupts JSX comments in it)", async () => {
    // oxfmt has no MDX parser and formats .mdx as Markdown, turning a
    // multi-line `{/* … */}` comment into `{/_ … _/}`. That fails the
    // Storybook build with "Could not parse expression with acorn".
    const config = await loadConfig(dir)
    for (const glob of Object.keys(config)) {
      expect(glob, `${glob} must not match .mdx`).not.toMatch(/\bmdx\b/)
    }
  })

  it("never calls git add (lint-staged re-stages on its own)", async () => {
    const source = readFileSync(
      path.join(REPO_ROOT, dir, ".lintstagedrc.mjs"),
      "utf8"
    )
    expect(source).not.toMatch(/git add/)
  })
})

describe("oxfmt configs", () => {
  it.each([
    ".oxfmtrc.json",
    "packages/react/.oxfmtrc.jsonc",
    "packages/react-native/.oxfmtrc.jsonc",
  ])("%s excludes .mdx", (file) => {
    const source = readFileSync(path.join(REPO_ROOT, file), "utf8")
    expect(source).toMatch(/"ignorePatterns"/)
    expect(source).toMatch(/\*\*\/\*\.mdx/)
  })
})

describe("lefthook.yml", () => {
  const yml = readFileSync(path.join(REPO_ROOT, "lefthook.yml"), "utf8")

  it("delegates per-file work to lint-staged", () => {
    expect(yml).toMatch(/run: pnpm exec lint-staged/)
  })

  it("no longer carries the hand-rolled per-file commands", () => {
    expect(yml).not.toMatch(/stage_fixed/)
    expect(yml).not.toMatch(/^\s+(format|lint)-react(-native)?:/m)
  })

  it("type-checks on pre-push, not pre-commit", () => {
    // Sections start at column 0; the header comment also says "pre-commit:".
    const section = (name: string) => {
      const start = yml.search(new RegExp(`^${name}:`, "m"))
      const rest = yml.slice(start + name.length + 1)
      const next = rest.search(/^[a-z-]+:/m)
      return next === -1 ? rest : rest.slice(0, next)
    }
    const prePush = section("pre-push")
    const preCommit = section("pre-commit")
    expect(prePush).toMatch(/run tsc/)
    expect(preCommit).not.toMatch(/run tsc/)
  })
})
