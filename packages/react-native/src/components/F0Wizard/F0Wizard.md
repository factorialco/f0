# F0Wizard

Multi-step flow container for React Native. Wraps `F0Step` (progress bar) and `F0Button` (navigation) into a self-contained wizard shell. Step content is fully consumer-owned — no form primitives required.

## Overview

`F0Wizard` manages:

- Progress display via `F0Step`
- Step title rendering
- Scrollable content area per step
- Next / Back / Submit navigation buttons
- Per-step validation via `canAdvance` and `onNext`

It does **not** own form state or field rendering. The consumer passes any React Native components as step content through `renderContent`.

## Architecture

- `F0Wizard` holds internal `currentStep` state (uncontrolled).
- On Next press: calls the step's `onNext` callback (if provided). If it returns `{ canAdvance: false }`, navigation is blocked. Otherwise, the wizard advances or calls `onSubmit` on the last step.
- `canAdvance` (boolean) disables the Next button reactively without async overhead.
- Both `canAdvance` and `onNext` can be used together: `canAdvance` gates the button, `onNext` handles async validation before final advance.

## Platform differences

The **web** `F0Wizard` (`packages/react`) wraps `F0DialogInternal` and renders inside a dialog — it manages its own overlay/modal lifecycle.

The **React Native** `F0Wizard` is a standalone `View`-based container with no built-in modal or sheet behavior. It renders inline wherever it is placed. The consumer is responsible for wrapping it in the appropriate container for their use case:

- Full-screen step flow: embed directly in a screen component
- Bottom sheet wizard: place inside a sheet library (e.g. `@gorhom/bottom-sheet`)
- Modal wizard: wrap in a React Native `Modal`

This design keeps `F0Wizard` composable and avoids coupling it to any specific navigation or overlay library.

## Usage examples

### Basic

<!-- prettier-ignore -->
```tsx
<F0Wizard
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
  nextLabel="Next"
  previousLabel="Back"
  submitLabel="Submit"
  onSubmit={handleSubmit}
/>
```

### With reactive validation

<!-- prettier-ignore -->
```tsx
<F0Wizard
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
  nextLabel="Next"
  previousLabel="Back"
  submitLabel="Submit"
  onSubmit={handleSubmit}
/>
```

### With async validation

<!-- prettier-ignore -->
```tsx
<F0Wizard
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
  nextLabel="Next"
  previousLabel="Back"
  submitLabel="Submit"
  onSubmit={handleSubmit}
/>
```

### Custom labels

<!-- prettier-ignore -->
```tsx
<F0Wizard
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
<F0Wizard
  steps={steps}
  nextLabel={t("wizard.next")}
  previousLabel={t("wizard.back")}
  submitLabel={t("wizard.submit")}
  stepLabel={t("wizard.step")}
  onSubmit={handleSubmit}
/>
```

## Props

### `F0WizardProps`

| Prop                 | Type                          | Required | Description                                                                                |
| -------------------- | ----------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| `steps`              | `F0WizardStep[]`              | ✓        | Ordered list of steps                                                                      |
| `nextLabel`          | `string`                      | ✓        | Label for the Next button                                                                  |
| `previousLabel`      | `string`                      | ✓        | Label for the Back button                                                                  |
| `submitLabel`        | `string`                      | ✓        | Label for the button on the last step                                                      |
| `defaultStepIndex`   | `number`                      | —        | Initial step (zero-based, clamped). Default `0`                                            |
| `stepLabel`          | `string`                      | —        | Prefix for the step counter (e.g. `"Step"` → "Step 1"). If omitted, no counter is rendered |
| `onStepChanged`      | `(stepIndex: number) => void` | —        | Called on every step change                                                                |
| `onSubmit`           | `() => void \| Promise<void>` | —        | Called when the last step is confirmed                                                     |
| `accessibilityLabel` | `string`                      | —        | Label for the root container                                                               |
| `testID`             | `string`                      | —        | Test identifier for the root container                                                     |

### `F0WizardStep`

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
- The Back button is always visible, disabled on the first step.
- The Next button label changes to `submitLabel` on the last step.
- During an async `onNext` call or `onSubmit`, the Next button shows a loading indicator and is non-interactive to prevent double-taps.
- `canAdvance` is evaluated synchronously on every render; `onNext` is only called on press.
- There is no `onCancel` / `onDismiss` prop. Cancellation is intentionally left to the consumer: close the surrounding `Modal`, pop the screen, or dismiss the sheet. This avoids coupling `F0Wizard` to any specific navigation or overlay library.

## Accessibility

- The root `View` accepts `accessibilityLabel`.
- `F0Step` inside carries `accessibilityRole="progressbar"` and `accessibilityValue`.
- Navigation buttons inherit `F0Button` accessibility behavior (role, state, label).

## Testing

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
F0Wizard/
  F0Wizard.tsx          — implementation
  F0Wizard.types.ts     — public types
  F0Wizard.styles.ts    — tailwind-variants styles
  F0Wizard.md           — this file
  index.ts              — public exports
  __tests__/
    F0Wizard.spec.tsx   — unit tests
```
