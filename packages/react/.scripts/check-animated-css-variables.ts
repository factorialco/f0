/**
 * Bans animating a CSS custom property through motion's `animate` prop.
 *
 * Motion animates by writing an inline style to a real DOM node on every frame.
 * That is expensive — 120 writes/second per element on a 120Hz display, for as
 * long as the component is mounted — and for custom properties it is usually
 * broken as well:
 *
 *   - `@property` registrations in this repo declare `inherits: false`, so a
 *     value written to a parent never reaches a descendant, and
 *   - a pseudo-element has no inline style at all, so motion can never reach an
 *     `::after`/`::before` that paints with `var(--…)`.
 *
 * Every occurrence found so far animated a property that nothing could read, so
 * the animation cost a style write per frame and rendered nothing. See
 * `F0AiChatTextArea`, `F0OneIcon` and `F0OneSwitch` for the fix: declare the
 * animation as a CSS keyframe and apply it, in CSS, to the element that
 * actually paints — `after:[animation:rotate-gradient_6s_linear_infinite]`.
 *
 * Run over the whole tree, or with `--staged` for staged files only.
 */
import { consola } from "consola"
import { execSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { globSync } from "node:fs"
import { relative, resolve } from "node:path"

const ROOT = resolve(import.meta.dirname, "..")

/** Extracts the balanced `{{ … }}` body of a prop starting at `open`. */
const balancedBlock = (source: string, open: number): string => {
  let depth = 0
  for (let i = open; i < source.length; i++) {
    if (source[i] === "{") depth++
    else if (source[i] === "}") {
      depth--
      if (depth === 0) return source.slice(open, i + 1)
    }
  }
  return source.slice(open)
}

const CUSTOM_PROPERTY_KEY = /["'](--[\w-]+)["']\s*:/

/**
 * Opt-out for the cases where motion is genuinely the right tool: the property
 * is written to, and read by, the SAME element, and its value is dynamic enough
 * that a static keyframe cannot express it. Requires a reason, so the next
 * reader knows it was considered rather than silenced.
 */
const ALLOW = /\/\/\s*f0-allow-animated-css-var:\s*\S/

type Finding = { file: string; line: number; property: string; prop: string }

const inspect = (file: string): Finding[] => {
  const source = readFileSync(file, "utf8")
  const lines = source.split("\n")
  const findings: Finding[] = []

  for (const prop of ["animate", "transition"]) {
    const opener = new RegExp(`\\b${prop}=\\{\\{`, "g")
    let match: RegExpExecArray | null
    while ((match = opener.exec(source)) !== null) {
      // Step back to the `{{` so the brace matcher starts balanced.
      const open = source.indexOf("{", match.index + prop.length)
      const block = balancedBlock(source, open)
      const hit = block.match(CUSTOM_PROPERTY_KEY)
      if (!hit) continue

      const line = source.slice(0, match.index).split("\n").length
      // Walk up through the comment block immediately above the prop, however
      // many lines it runs to, plus the prop's own line.
      let cursor = line - 2
      let preceding = lines[line - 1] ?? ""
      while (cursor >= 0 && lines[cursor].trim().startsWith("//")) {
        preceding += "\n" + lines[cursor]
        cursor--
      }
      if (ALLOW.test(preceding)) continue

      findings.push({ file, line, property: hit[1], prop })
    }
  }
  return findings
}

const stagedFiles = (): string[] =>
  execSync("git diff --cached --name-only --diff-filter=ACMR", {
    encoding: "utf8",
  })
    .split("\n")
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => resolve(ROOT, "../..", f))

const files = process.argv.includes("--staged")
  ? stagedFiles()
  : globSync(`${ROOT}/src/**/*.tsx`)

const findings = files
  .filter(
    (f) => f.includes(`${ROOT}/src/`) || process.argv.includes("--staged")
  )
  .flatMap((f) => {
    try {
      return inspect(f)
    } catch {
      return []
    }
  })

if (findings.length > 0) {
  consola.error(
    `\n✗ Animating a CSS custom property through motion writes an inline style every frame,\n` +
      `  and cannot reach a pseudo-element or (with \`inherits: false\`) a descendant.\n` +
      `  Use a CSS keyframe on the element that paints instead — see the theme's\n` +
      `  \`rotate-gradient\` and its use in F0AiChatTextArea / F0OneIcon.\n`
  )
  for (const f of findings) {
    consola.error(
      `  ${relative(resolve(ROOT, "../.."), f.file)}:${f.line}  ${f.prop}={{ "${f.property}": … }}`
    )
  }
  process.exit(1)
}

consola.success(
  `No CSS custom properties animated through motion (${files.length} files checked).`
)
