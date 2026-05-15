# F0WizardSteps

Multi-step flow container for React Native. Wraps `F0Step` (progress bar) and `F0Button` (navigation) into a self-contained wizard shell. Step content is fully consumer-owned — no form primitives required.

## Overview

`F0WizardSteps` manages:

- Progress display via `F0Step`
- Step title rendering
- Scrollable content area per step
- Next / Back / Submit navigation buttons
- Per-step validation via `canAdvance` and `onNext`

It does **not** own form state or field rendering. The consumer passes any React Native components as step content through `renderContent`.

## Architecture

- `F0WizardSteps` holds internal `currentStep` state (uncontrolled).
- On Next press: calls the step's `onNext` callback (if provided). If it returns `{ canAdvance: false }`, navigation is blocked. Otherwise, the wizard advances or calls `onSubmit` on the last step.
- `canAdvance` (boolean) disables the Next button reactively without async overhead.
- Both `canAdvance` and `onNext` can be used together: `canAdvance` gates the button, `onNext` handles async validation before final advance.

## Usage examples

### Basic

<!-- prettier-ignore -->
```tsx
<F0WizardSteps
  steps={[
    {
      title: "Personal info",
      renderContent: () => (
        <TextInput placeholder="Name" value={name} onChangeText={setName} />
      ),
    },
    {
      title: "Confirm",
      renderContent: () => <ConfirmationView name={name} />,
    },
  ]}
  onSubmit={handleSubmit}
/>
```

### With reactive validation

<!-- prettier-ignore -->
```tsx
<F0WizardSteps
  steps={[
    {
      title: "Email",
      renderContent: () => (
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      ),
      canAdvance: email.includes("@"),
    },
  ]}
  onSubmit={handleSubmit}
/>
```

### With async validation

<!-- prettier-ignore -->
```tsx
<F0WizardSteps
  steps={[
    {
      title: "Username",
      renderContent: () => <UsernameInput />,
      onNext: async () => {
        const available = await checkUsernameAvailability(username)
        if (!available) setError("Username taken")
        return { canAdvance: available }
      },
    },
  ]}
  onSubmit={handleSubmit}
/>
```

### Custom labels

<!-- prettier-ignore -->
```tsx
<F0WizardSteps
  steps={steps}
  nextLabel="Continue"
  previousLabel="Go back"
  submitLabel="Finish"
  stepLabel="Step"
  onSubmit={handleSubmit}
/>
```

### Translated step counter

<!-- prettier-ignore -->
```tsx
<F0WizardSteps
  steps={steps}
  nextLabel={t("wizard.next")}
  previousLabel={t("wizard.back")}
  submitLabel={t("wizard.submit")}
  stepLabel={t("wizard.step")}
  onSubmit={handleSubmit}
/>
```

## Props

### `F0WizardStepsProps`

| Prop                 | Type                          | Required | Description                                                                                |
| -------------------- | ----------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| `steps`              | `F0WizardStepsStep[]`         | ✓        | Ordered list of steps                                                                      |
| `nextLabel`          | `string`                      | ✓        | Label for the Next button                                                                  |
| `previousLabel`      | `string`                      | ✓        | Label for the Back button                                                                  |
| `submitLabel`        | `string`                      | ✓        | Label for the button on the last step                                                      |
| `defaultStepIndex`   | `number`                      | —        | Initial step (zero-based, clamped). Default `0`                                            |
| `stepLabel`          | `string`                      | —        | Prefix for the step counter (e.g. `"Step"` → "Step 1"). If omitted, no counter is rendered |
| `onStepChanged`      | `(stepIndex: number) => void` | —        | Called on every step change                                                                |
| `onSubmit`           | `() => void \| Promise<void>` | —        | Called when the last step is confirmed                                                     |
| `accessibilityLabel` | `string`                      | —        | Label for the root container                                                               |
| `testID`             | `string`                      | —        | Test identifier for the root container                                                     |

### `F0WizardStepsStep`

| Prop            | Type                                                                | Required | Description                                                                 |
| --------------- | ------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------- |
| `title`         | `string`                                                            | ✓        | Title displayed in the header                                               |
| `renderContent` | `(args: { stepIndex: number }) => ReactNode`                        | ✓        | Step content render function. Stabilize with `React.memo` to avoid remounts |
| `subtitle`      | `string`                                                            | —        | Optional subtitle shown below the title                                     |
| `nextLabel`     | `string`                                                            | —        | Per-step Next button label. Overrides global `nextLabel`                    |
| `previousLabel` | `string`                                                            | —        | Per-step Back button label. Overrides global `previousLabel`                |
| `canAdvance`    | `boolean`                                                           | —        | When `false`, disables the Next button. Default `true`                      |
| `onNext`        | `() => Promise<{ canAdvance: boolean }> \| { canAdvance: boolean }` | —        | Called before advancing; return `{ canAdvance: false }` to block            |

## Runtime behavior

- `defaultStepIndex` is clamped to `[0, steps.length - 1]`.
- An empty `steps` array renders nothing.
- The Back button remains visible on the first step, but is disabled.
- The Next button label changes to `submitLabel` on the last step.
- During an async `onNext` call, the Next button shows a loading indicator and is non-interactive to prevent double-taps.
- `canAdvance` is evaluated synchronously on every render; `onNext` is only called on press.

## Accessibility

- The root `View` accepts `accessibilityLabel`.
- `F0Step` inside carries `accessibilityRole="progressbar"` and `accessibilityValue`.
- Navigation buttons inherit `F0Button` accessibility behavior (role, state, label).

## Testing

- Snapshot: single step, multiple steps at first step.
- Navigation: Next advances step, Back goes to previous step.
- `onStepChanged` is called with the new index on both directions.
- Submit: `onSubmit` is called when confirming the last step.
- `canAdvance: false` disables the Next button.
- `onNext` returning `{ canAdvance: false }` blocks navigation.
- `onNext` returning `{ canAdvance: true }` allows navigation.
- Step-level `nextLabel` overrides global `nextLabel`.
- `defaultStepIndex` clamping (below 0, above last step).
- Empty steps renders null.
- `accessibilityLabel` is forwarded to root.
- `F0Step` `accessibilityValue.now` updates on navigation.

## File structure

```
F0WizardSteps/
  F0WizardSteps.tsx          — implementation
  F0WizardSteps.types.ts     — public types
  F0WizardSteps.md           — this file
  index.ts                   — public exports
  __tests__/
    F0WizardSteps.spec.tsx   — unit tests
```
