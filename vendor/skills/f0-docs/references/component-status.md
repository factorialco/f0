# Component Documentation Status

This file tracks which components in `packages/react/src/components/` have MDX documentation and their quality level.

Use this as a prioritization guide when deciding what to document next.

**Last reviewed: 2026-04-08** — Update this date whenever you add or improve an MDX file.

---

## Quality Levels

This file uses the shared documentation quality scale from `documentation-quality.md`: **Stub**, **Acceptable**, **Good**, and **Gold**.
`None` appears in the table below as a documentation **status** meaning no MDX file exists yet.

| Level          | Description                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Gold**       | Full docs: anatomy table (5 cols), variants, when-to-use decision table, DoDonts, a11y keyboard table, 3+ code examples         |
| **Good**       | Covers most canonical sections (Anatomy/Guidelines/Accessibility) with most required tables                                     |
| **Acceptable** | Required top-level sections present but missing some recommended tables or sections (e.g., no a11y table, no formal prop table) |
| **Stub**       | Only a 7-line `controls.mdx` — not real documentation                                                                           |

---

## Individual Components

| Component                 | MDX File                                                                                             | Quality      | Notes                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------- |
| `F0Alert`                 | `F0Alert/__stories__/F0Alert.mdx`                                                                    | **Gold**     | Best-in-class reference (added in companion PR #3894) |
| `F0AnalyticsDashboard`    | None                                                                                                 | **None**     |                                                       |
| `F0BigNumber`             | `F0BigNumber/__stories__/controls.mdx`                                                               | **Stub**     | Needs full MDX                                        |
| `F0Box`                   | None                                                                                                 | **None**     |                                                       |
| `F0Button`                | `F0Button/__stories__/controls.mdx`                                                                  | **Stub**     | Has controls-only MDX; full docs pending              |
| `F0ButtonDropdown`        | `F0ButtonDropdown/__stories__/controls.mdx`                                                          | **Stub**     | Needs full MDX                                        |
| `F0ButtonToggle`          | `F0ButtonToggle/__stories__/F0ButtonToggle.mdx`                                                      | **Acceptable** | Solid, missing formal prop table                      |
| `F0ButtonToggleGroup`     | `F0ButtonToggleGroup/__stories__/controls.mdx`                                                       | **Stub**     | Needs full MDX                                        |
| `F0Card`                  | None                                                                                                 | **None**     | High priority — heavily used                          |
| `F0Checkbox`              | `F0Checkbox/__stories__/F0Checkbox.mdx`                                                              | **Stub**  | 32 lines, no guidelines or a11y                       |
| `F0ChipList`              | None                                                                                                 | **None**     | Flat stories (no `__stories__/` subfolder)            |
| `F0DataChart`             | `F0DataChart/__stories__/F0DataChart.mdx`                                                            | **Good**     | Excellent multi-variant coverage                      |
| `F0DatePicker`            | None                                                                                                 | **None**     |                                                       |
| `F0Dialog`                | None                                                                                                 | **None**     | High priority — heavily used                          |
| `F0DurationInput`         | None                                                                                                 | **None**     |                                                       |
| `F0FilterPickerContent`   | None                                                                                                 | **None**     |                                                       |
| `F0Form`                  | None                                                                                                 | **None**     | See `factorial-f0` skill for F0 Forms docs            |
| `F0FormField`             | None                                                                                                 | **None**     | See `factorial-f0` skill for F0 Forms docs            |
| `F0Heading`               | None                                                                                                 | **None**     |                                                       |
| `F0Icon`                  | `F0Icon/__stories__/F0Icon.mdx`                                                                      | **Acceptable** | Import pattern, color modes                           |
| `F0Link`                  | `F0Link/__stories__/F0Link.mdx`                                                                      | **Acceptable** | When-to-use guidance                                  |
| `F0Select`                | None                                                                                                 | **None**     | High priority — heavily used                          |
| `F0TableOfContentPopover` | None                                                                                                 | **None**     |                                                       |
| `F0Text`                  | None                                                                                                 | **None**     | High priority — core typography                       |
| `F0Widget`                | None                                                                                                 | **None**     |                                                       |
| `F0WizardForm`            | None                                                                                                 | **None**     | See `factorial-f0` skill for F0 Forms docs            |
| `OneEllipsis`             | None                                                                                                 | **None**     | Old naming (`One` prefix, rename on touch)            |
| `OneFilterPicker`         | `OneFilterPicker/__stories__/OneFiltersPicker.mdx` + `presets.mdx` + `OneFiltersPicker.internal.mdx` | **Good**     | Most MDX files per component                          |

---

## Utilities Group (`Utilities/`)

| Component               | MDX File                                            | Quality  | Notes                                                                     |
| ----------------------- | --------------------------------------------------- | -------- | ------------------------------------------------------------------------- |
| `Utilities/Await`       | None                                                | **None** |                                                                           |
| `Utilities/F0GridStack` | `Utilities/F0GridStack/__stories__/F0GridStack.mdx` | **Good** | Also has a `controls.mdx` stub — stub should be deleted when next touched |
| `Utilities/Image`       | None                                                | **None** | Flat stories                                                              |

---

## Tags Group (`tags/`)

| Component           | MDX File                           | Quality      | Notes                                                           |
| ------------------- | ---------------------------------- | ------------ | --------------------------------------------------------------- |
| `tags/F0Tag`        | `tags/F0Tag/__stories__/F0Tag.mdx` | **Acceptable** | Router/index page only — links to sub-tags; uses `__stories__/` |
| `tags/F0TagAlert`   | None                               | **None**     | Uses `__storybook__/` (old naming)                              |
| `tags/F0TagBalance` | None                               | **None**     | Uses `__storybook__/`                                           |
| `tags/F0TagCompany` | None                               | **None**     | Uses `__storybook__/`                                           |
| `tags/F0TagDot`     | None                               | **None**     | Uses `__storybook__/`                                           |
| `tags/F0TagList`    | None                               | **None**     | Uses `__storybook__/`                                           |
| `tags/F0TagPerson`  | None                               | **None**     | Uses `__storybook__/`                                           |
| `tags/F0TagRaw`     | None                               | **None**     | Uses `__storybook__/`                                           |
| `tags/F0TagStatus`  | None                               | **None**     | Uses `__storybook__/`                                           |
| `tags/F0TagTeam`    | None                               | **None**     | Uses `__storybook__/`                                           |

---

## Avatars Group (`avatars/`)

| Component                 | MDX File | Quality  | Notes                 |
| ------------------------- | -------- | -------- | --------------------- |
| `avatars/F0Avatar`        | None     | **None** | Uses `__stories__/`   |
| `avatars/F0AvatarAlert`   | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarCompany` | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarDate`    | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarEmoji`   | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarFile`    | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarFlag`    | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarIcon`    | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarList`    | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarModule`  | None     | **None** | Uses `__stories__/`   |
| `avatars/F0AvatarPerson`  | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarPulse`   | None     | **None** | Uses `__storybook__/` |
| `avatars/F0AvatarTeam`    | None     | **None** | Uses `__storybook__/` |

---

## Charts Group (`Charts/`)

> **Note**: `Charts/` contains legacy chart components. The preferred modern chart component is `F0DataChart` (listed under Individual Components), which already has Good-quality docs. When in doubt, document or redirect to `F0DataChart` rather than the legacy `Charts/` sub-components.

| Component                    | MDX File | Quality  | Notes                                 |
| ---------------------------- | -------- | -------- | ------------------------------------- |
| `Charts/AreaChart`           | None     | **None** | Flat stories — consider legacy status |
| `Charts/BarChart`            | None     | **None** | Flat stories — consider legacy status |
| `Charts/CategoryBarChart`    | None     | **None** | Flat stories — consider legacy status |
| `Charts/ComboChart`          | None     | **None** | Flat stories — consider legacy status |
| `Charts/F0Chart`             | None     | **None** | Has `__stories__/` with 9 story files |
| `Charts/LineChart`           | None     | **None** | Flat stories — consider legacy status |
| `Charts/PieChart`            | None     | **None** | Flat stories — consider legacy status |
| `Charts/ProgressChart`       | None     | **None** | Flat stories — consider legacy status |
| `Charts/RadarChart`          | None     | **None** | No stories file at all                |
| `Charts/RadialProgressChart` | None     | **None** | Flat stories — consider legacy status |
| `Charts/VerticalBarChart`    | None     | **None** | Flat stories — consider legacy status |

---

## Navigation Group (`Navigation/`)

| Component            | MDX File | Quality  | Notes        |
| -------------------- | -------- | -------- | ------------ |
| `Navigation/Sidebar` | None     | **None** | Flat stories |

---

## Priority Order for New Documentation

1. **`F0Card`** — heavily used, no docs
2. **`F0Dialog`** — heavily used, no docs
3. **`F0Select`** — heavily used, no docs
4. **`F0Text`** — core typography primitive, no docs
5. **`F0Heading`** — core typography, no docs
6. **`F0Checkbox`** — exists but minimal, needs expansion
7. **`avatars/F0Avatar`** — entire family undocumented (document root first, then sub-types)
8. **`tags/F0TagStatus`, `tags/F0TagAlert`** — most commonly used tag sub-types
9. **`Charts/F0Chart`** — has stories but no MDX (check if it replaces legacy Charts/ components)
