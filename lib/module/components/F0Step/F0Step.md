# F0Step

Segmented top progress indicator for the F0 React Native design system.

## Overview

`F0Step` renders a horizontal sequence of equal-width segments that communicate progress through a multi-step flow.

The segmented bar supports three distinct semantic states:

- `active`
- `completed`
- `pending`

`F0StepSegment` is an internal presentational primitive used by `F0Step`. The public API is `F0Step`.

## Architecture

- `F0Step` supports two input modes: derived mode (`steps` + `currentStep`, optionally `furthestReachedStep`) and explicit mode (`stepStates`).
- Derived mode converts a zero-based active index into `completed`, `active`, and `pending` segment states, and `furthestReachedStep` lets you preserve completed segments while navigating backwards.
- Explicit mode allows advanced flows such as a fully completed quiz with no active segment or backwards navigation that preserves already completed steps.
- The component is separate from `F0Progress` because it models sequential step state rather than determinate numeric progress.
- Semantic classes use semantic background tokens: `active` uses the bold inverse surface treatment, `completed` uses `Background/Selected/Bold`, and `pending` uses `Background/Tertiary`.

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Step } from "@factorialco/f0-react-native"

<F0Step
  steps={4}
  currentStep={0}
  furthestReachedStep={2}
  accessibilityLabel="Onboarding progress"
/>

<F0Step
  stepStates={["active", "completed", "completed", "pending"]}
  accessibilityLabel="Story progress"
/>
```

## Props

### `F0Step`

| Prop                  | Type            | Default                   | Description                                      |
| --------------------- | --------------- | ------------------------- | ------------------------------------------------ |
| `steps`               | `number`        | required in derived mode  | Total number of segments to render               |
| `currentStep`         | `number`        | required in derived mode  | Zero-based active segment index                  |
| `stepStates`          | `F0StepState[]` | required in explicit mode | Explicit visual state for each segment           |
| `furthestReachedStep` | `number`        | `currentStep`             | Optional highest reached segment in derived mode |
| `accessibilityLabel`  | `string`        | `undefined`               | Optional spoken label for assistive technologies |
| `testID`              | `string`        | `undefined`               | Testing hook for the container root              |

## Runtime Behavior

- Invalid or non-finite `steps` values normalize to `1`.
- Invalid or non-finite `currentStep` values normalize to `0`.
- `currentStep` clamps into the valid `0..steps - 1` range.
- Invalid or non-finite `furthestReachedStep` values fall back to `currentStep`.
- `furthestReachedStep` is normalized so it never ends up behind the current step.
- When `stepStates` is empty, the component falls back to a single `pending` segment.

## Accessibility

- `F0Step` uses `accessibilityRole="progressbar"`.
- `F0Step` exposes `accessibilityValue={{ min: 0, max: totalSteps, now: progressValue }}`.
- Internal segments remain decorative.

## Testing

- Snapshot coverage for the standalone segment and the container.
- Contract tests for normalization and accessibility.
- Semantic class assertions for the three segment states.
- Regression coverage for backwards navigation with preserved completed history in derived mode.

## File Structure

```text
src/components/F0Step/
  F0Step.tsx
  F0StepSegment.tsx
  F0Step.types.ts
  F0Step.styles.ts
  F0Step.md
  index.ts
  __tests__/F0Step.spec.tsx
```
