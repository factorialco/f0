# AI Configuration Migration: Cursor Rules to AGENTS.md + Skills

**Date:** 2026-02-23
**Status:** Approved

## Goal

Migrate from Cursor-specific `.mdc` rules and `BUGBOT.md` to tool-agnostic AI configuration using `AGENTS.md` (hierarchical) + in-repo skills + `.github/copilot-instructions.md`. Delete `.cursor/` directory after migration.

## Target Tools

- OpenCode (primary)
- GitHub Copilot (via copilot-instructions.md)
- Any AGENTS.md-aware tool

## Architecture

```
f0/
  AGENTS.md                              # Root: monorepo overview, shared conventions
  .github/copilot-instructions.md        # Copilot compatibility
  packages/react/
    AGENTS.md                            # Package-specific rules
    .skills/
      f0-code-review/SKILL.md           # BugBot rules (on-demand)
      f0-component-docs/SKILL.md        # Storybook/MDX docs (on-demand)
```

## Content Mapping

| Source                        | Destination                | Rationale                  |
| ----------------------------- | -------------------------- | -------------------------- |
| `00-project-overview.mdc`     | Root `AGENTS.md`           | Always needed context      |
| `01-component-guidelines.mdc` | `packages/react/AGENTS.md` | Package-specific           |
| `02-typescript-testing.mdc`   | `packages/react/AGENTS.md` | Package-specific           |
| `03-styling.mdc`              | `packages/react/AGENTS.md` | Package-specific           |
| `04-dependencies-tools.mdc`   | `packages/react/AGENTS.md` | Package-specific           |
| `05-performance-docs.mdc`     | `packages/react/AGENTS.md` | Package-specific           |
| `06-build-release.mdc`        | Root `AGENTS.md`           | Applies to all packages    |
| `07-available-commands.mdc`   | `packages/react/AGENTS.md` | Package-specific           |
| `08-testing-on-storybook.mdc` | Skill: `f0-component-docs` | Large template, on-demand  |
| `09-document-a-component.mdc` | Skill: `f0-component-docs` | Large template, on-demand  |
| `00-rule-generator.mdc`       | Drop                       | Cursor-specific meta-rule  |
| `BUGBOT.md`                   | Skill: `f0-code-review`    | On-demand review checklist |

## Design Decisions

1. **Hierarchical AGENTS.md** — Root covers monorepo, per-package covers specifics
2. **Skills for large templates** — Storybook docs and code review checklists are 200+ lines each; loading always wastes tokens
3. **In-repo skills** — `.skills/` directory in packages/react, extract to separate repo later if useful
4. **copilot-instructions.md** — Condensed version for GitHub Copilot compatibility
5. **Delete .cursor/** — Clean break, no dual maintenance
6. **Delete BUGBOT.md** — Content fully migrated to f0-code-review skill
