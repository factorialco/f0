# F0 migration guides

One guide per breaking change to something already in use — a stable component's API, a token, an icon, or a pattern consumers depend on.

- **Naming:** `f0-<old>-to-<new>.md` (e.g. `f0-oldinput-to-textinput.md`).
- **Template:** copy [`TEMPLATE.md`](./TEMPLATE.md) and fill every section. Model the mapping on the shipped example, `factorial-migrations/references/f0-forms-mapping.md`.
- **Link it** from the `@migration` JSDoc tag on the deprecated export, so the IDE warning points here.
- **Execution:** this guide is the *plan*; migrating usages across a product is done with the [`factorial-migrations`](https://github.com/factorialco/factorial-skills) skill (discovery → grouping → parallel subagents), which loads `factorial-f0` for conventions.

When a guide is required, who reviews it, and how consumers are notified: see **"Changing something already in use"** in the [Release & Versioning](../development/release-and-versioning.mdx) doc.

> **Not the same as promotion.** Moving a component from `experimental/` to its stable home (`components/`, `sds/`, `ui/`) is the [`f0-experimental-component-migration`](../../.skills/f0-experimental-component-migration/SKILL.md) skill — it keeps every export working via deprecated re-exports, so it breaks nobody and needs **no** guide here. This folder is only for changes that consumers must actively react to.
