# Inline row spacing

Inline controls use the shared spacing scale from `packages/core/src/tokens/spacing.ts`. Heights and widths use rem units; padding and offsets use pixels. Row columns combine `grow shrink` with `basis-35` and `basis-40`.

Use spacing utilities for fixed dimensions, including Storybook fixtures. Keep inline styles only for runtime measurements and caller-provided sizes.

Validate generated utilities with `pnpm vitest run src/lib/__tests__/inlineSpacing.test.ts`. Inline stories measure control dimensions and text alignment across reading and editing modes.
