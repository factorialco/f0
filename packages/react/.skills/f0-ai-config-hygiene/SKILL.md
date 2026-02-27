---
name: f0-ai-config-hygiene
description: Audits AI configuration files (AGENTS.md, copilot-instructions.md, SKILL.md files) for instruction duplication. Load when modifying any AI config file, adding a new skill, or reviewing whether instructions have drifted out of sync.
---

# F0 AI Config Hygiene

Audit skill that detects instruction duplication across AI configuration files in the F0 monorepo.
This skill is **audit-only** — it reports findings and recommends fixes, but does not auto-modify files.
All changes require human judgment.

## When to Use

Load this skill when:

- Adding a new rule to any `AGENTS.md`
- Creating or modifying a `.skills/*/SKILL.md`
- Modifying `.github/copilot-instructions.md`
- Reviewing a PR that touches AI config files
- Suspecting that two files have drifted out of sync

## When NOT to Use

- When making changes to component code, tests, or stories — load a component skill instead
- When writing a brand-new skill from scratch where no duplication is possible yet

## Ownership Model

This is the authoritative table of what each file owns. A rule belongs in exactly one file.
Other files that reference the same topic must **link** to the owner, not restate the content.

| Layer | File                              | Owns                                                                                                                                 |
| ----- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | `AGENTS.md` (root)                | Monorepo structure, key principles (TypeScript strict, pnpm, English), factorial-skills bootstrap                                    |
| 1     | `.github/copilot-instructions.md` | Thin Copilot Chat / completion entry point only. Everything else defers to root AGENTS.md.                                           |
| 2     | `packages/react/AGENTS.md`        | **All** F0 React component conventions: naming, folder structure, props, context, TypeScript, testing, styling, i18n, a11y, commands |
| 3     | `.skills/*/SKILL.md`              | On-demand workflow orchestration and key-rules summary for a specific task. References AGENTS.md, never restates its rules.          |
| 3     | `.skills/*/references/*.md`       | Detailed code examples, patterns, and templates that expand on AGENTS.md rules with implementation detail                            |
| 3     | `.agents/skills/*/SKILL.md`       | External community skills. Treat as read-only; don't add F0-specific rules to them.                                                  |

## Audit Workflow

### Step 1 — Inventory all AI config files

Collect the full list of files to audit:

```
/AGENTS.md
/.github/copilot-instructions.md
/packages/react/AGENTS.md
/packages/react/.skills/*/SKILL.md
/packages/react/.skills/*/references/*.md
/packages/react/.agents/skills/*/SKILL.md
```

Read each file in full. Build a mental map of what topics each file covers.

### Step 2 — Extract rules from AGENTS.md files

From `packages/react/AGENTS.md`, list every distinct rule (one rule per line). Group by section:

- Component Architecture
- Props
- Context and State
- TypeScript
- Testing
- Styling
- i18n
- Accessibility
- Code Quality

### Step 3 — Check each skill for rule restatements

For each `SKILL.md` and `references/*.md`, check whether it:

1. **Restates** a rule from AGENTS.md verbatim or near-verbatim → **Flag as duplication**
2. **Expands** a rule with a code example or implementation detail → **Acceptable** (this is the skill's job)
3. **Cross-references** AGENTS.md with language like "see `packages/react/AGENTS.md`" → **Correct pattern**

### Step 4 — Check copilot-instructions.md vs. root AGENTS.md

`copilot-instructions.md` should contain **only**:

- A one-line project description
- A pointer to `packages/react/AGENTS.md`
- Any context unique to Copilot Chat (e.g. workspace-specific behavior)

Flag any content in `copilot-instructions.md` that is also present in `AGENTS.md` (root).

### Step 5 — Check root AGENTS.md vs. packages/react/AGENTS.md

Root `AGENTS.md` should contain **only** monorepo-wide concerns. Flag any React-specific rules
(naming, props, styling, testing, i18n, a11y) that have leaked into the root file.

### Step 6 — Report findings

Report using this format:

```
## AI Config Hygiene Report

### BLOCKING — Duplication (must fix before merging)

- [FILE A, line N] Rule: "<exact rule text>"
  Duplicates: [FILE B, line N] — owner is FILE B
  Fix: Replace in FILE A with: "See `packages/react/AGENTS.md` — <section name>"

### SUGGESTION — Potential drift risk

- [FILE A, line N] "<text>" partially overlaps with [FILE B, line N]
  Recommendation: Clarify whether FILE A is expanding (acceptable) or restating (remove)

### PASS — No duplication found

- [list of files checked that are clean]
```

## Severity Classification

| Severity       | Condition                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------- |
| **BLOCKING**   | A rule is stated verbatim or near-verbatim in two or more files with no cross-reference      |
| **BLOCKING**   | A skill's SKILL.md contains AGENTS.md rules without attributing them to AGENTS.md            |
| **BLOCKING**   | `copilot-instructions.md` contains content that is not unique to Copilot Chat/completions    |
| **SUGGESTION** | A skill restates a rule but does cross-reference AGENTS.md (low drift risk, but still noisy) |
| **SUGGESTION** | A reference file repeats a rule summary already in the parent SKILL.md                       |
| **PASS**       | A skill **expands** an AGENTS.md rule with code examples without restating the rule itself   |

## Common Duplication Patterns to Watch

These are the specific patterns found historically in this codebase:

### Pattern A — Skill "Key Rules" that mirror AGENTS.md

Skills sometimes have a "Key Rules" section that lists AGENTS.md rules for quick reference. This
creates a maintenance liability. The fix is either:

- Remove the rules and replace with: `"Always check \`packages/react/AGENTS.md\` — it has the concise rules."`
- Or keep only rules that are **not already in AGENTS.md** (rules specific to the skill's workflow)

### Pattern B — Test file naming stated in multiple places

`"Test files: .test.tsx / .test.ts — never .spec.ts"` and `"No snapshot tests"` appear in both
`packages/react/AGENTS.md` and `f0-unit-testing/SKILL.md`. The skill should reference AGENTS.md
instead of restating these.

### Pattern C — copilot-instructions.md cloning AGENTS.md

`copilot-instructions.md` has historically contained the full monorepo structure and key principles
from root `AGENTS.md`. Since GitHub Copilot coding agent reads `AGENTS.md` natively, and
`copilot-instructions.md` serves a **different** Copilot feature (Chat/completions), keep
`copilot-instructions.md` minimal — just enough for inline completions to be useful.

### Pattern D — Quality gate skip conditions stated twice

The three skip conditions (`user asks to skip`, `docs-only change`, `auto-generated files`) appear
in both `packages/react/AGENTS.md` and `f0-quality-gate/SKILL.md`. The canonical list lives in
AGENTS.md; the skill should reference it rather than duplicate it.

## Fix Guidance

When a duplication is found, the preferred fix depends on context:

| Situation                                                             | Preferred fix                                                                                      |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Skill restates an AGENTS.md rule with no additions                    | Delete from skill; add `"See \`packages/react/AGENTS.md\`"` reference                              |
| Skill restates a rule AND adds a code example                         | Keep the example; replace the rule restatement with a cross-reference sentence                     |
| `copilot-instructions.md` has content that's also in root `AGENTS.md` | Remove from `copilot-instructions.md`; it will be read from `AGENTS.md` by the coding agent anyway |
| Two skills both state the same rule                                   | Identify the canonical skill; have the other reference it                                          |
| Root `AGENTS.md` has React-specific rules                             | Move to `packages/react/AGENTS.md`; root AGENTS.md links down                                      |

## PR Checklist for AI Config Changes

Before merging any PR that touches AI config files, verify:

- [ ] No rule appears in more than one file without a cross-reference
- [ ] Any new rule is placed in the file that owns that rule's scope (see Ownership Model above)
- [ ] SKILL.md files start with `## When to Use` and `## When NOT to Use`
- [ ] New skills are added to the `## Skills` section of `packages/react/AGENTS.md`
- [ ] `copilot-instructions.md` remains under ~25 lines
- [ ] Reference files contain code examples, not rule restatements
