## Description

Action button. Variants for hierarchy (default, outline, neutral, critical), optional icon/emoji, async onClick with built-in loading state.

## Example

```tsx
<F0Button label="Save changes" variant="default" onClick={() => save()} />
```

## Notes

Required: `label` (always — used as accessible name even when `hideLabel`). For icon-only buttons set `hideLabel`.
