# Token Naming Inconsistencies — Figma vs Code

| Figma Token Name | Figma Alias | Figma Value | Code Variable | Code Value | Issue |
|---|---|---|---|---|---|
| `Border/Default/default` | `Neutral/Solid/30` | `#052348` alpha 0.20 | `--neutral-30` → `grey.30` | `213 87% 15% / 0.20` | Figma calls it "Solid/30" but it has alpha — naming is misleading |
| `Border/Default/secondary` | `Neutral/Solid/10` | `#052657` alpha 0.06 | `--neutral-10` → `grey.10` | `216 89% 18% / 0.06` | Same issue — "Solid" implies no alpha |
| `Border/Default/hover` | `Neutral/Solid/40` | `#011B4B` alpha 0.45 | `--neutral-40` → `grey.40` | `219 97% 15% / 0.45` | Same issue |
| `Foreground/Default/disabled` | `Neutral/Solid/30` | `#052348` alpha 0.20 | `--neutral-30` → `grey.30` | `213 87% 15% / 0.20` | Same issue |
| *(old dist)* | — | — | `--neutral-solid-30` | undefined | CSS variable was referenced in compiled dist but never defined in base.css — caused black borders |

## Summary

Figma uses the name `Neutral/Solid/*` for colors that have **alpha transparency**, which contradicts the "Solid" naming convention (solid = fully opaque). The actual primitive in Figma is `Grey/Transparent/*`.

The code correctly maps these as `grey.N` (with alpha) in `colors.ts`, but a previous compiled `dist` had introduced `--neutral-solid-30` which was undefined, causing border-color to fall back to `currentColor` (black).

## Recommendation

- Ask the design team to rename `Neutral/Solid/30` → `Neutral/Alpha/30` (or `Neutral/Transparent/30`) in Figma to match the actual `Grey/Transparent` primitive.
- Or, if "Solid" is intentional, make the colors fully opaque in Figma.
