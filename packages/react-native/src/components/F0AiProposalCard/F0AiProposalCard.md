# F0AiProposalCard

Inline card proposing an entity for the user to confirm, for React Native in F0.

## Overview

Native counterpart of the web `F0AiProposalCard`. Renders a module avatar with a heading and optional subtitle, the proposed title and a truncatable description (with an inline "see more" control), and an optional primary-action footer. The card only proposes; confirmation is wired by the consumer via `onPrimaryAction`.

## Usage

<!-- prettier-ignore -->
```tsx
import { F0AiProposalCard } from "@factorialco/f0-react-native"

<F0AiProposalCard
  module="ai_ticketing"
  heading="Review before creating"
  subtitle="Customer Support · IT Support"
  title="Laptop screen flickering on battery"
  description="Issue: the screen flickers on battery..."
  seeMoreLabel="See more"
  primaryActionLabel="Confirm"
  onPrimaryAction={() => {}}
/>

// Hide the action footer (e.g. once confirmed)
<F0AiProposalCard {...proposal} showActions={false} />
```

## Props

| Prop                            | Type         | Default   | Description                                                   |
| ------------------------------- | ------------ | --------- | ------------------------------------------------------------- |
| `module`                        | `ModuleId`   | optional  | Module avatar shown in the header                             |
| `heading`                       | `string`     | required  | Header label describing the proposal type                    |
| `title`                         | `string`     | required  | Main proposal title                                           |
| `subtitle`                      | `string`     | optional  | Secondary metadata line                                       |
| `description`                   | `string`     | required  | Proposal details (truncated until expanded)                   |
| `seeMoreLabel`                  | `string`     | required  | Label for the inline expansion control                        |
| `maxCollapsedDescriptionLength` | `number`     | `180`     | Characters shown before expansion                             |
| `primaryActionLabel`            | `string`     | required* | Primary action button label                                   |
| `primaryActionIcon`             | `IconType`   | optional  | Icon shown before the action label                            |
| `onPrimaryAction`               | `() => void` | required* | Called when the action is pressed                             |
| `showActions`                   | `boolean`    | `true`    | Set `false` to hide the action footer and omit the action props |

\*Required unless `showActions` is `false`.

## Accessibility

The action is a standard `F0Button`. The "see more" control expands the description in place. Heading and title use `F0Text` heading variants.

## Testing

Pending (draft). Add `src/components/F0AiProposalCard/__tests__/F0AiProposalCard.spec.tsx` with snapshots for the with-actions, hidden-actions, and truncated/expanded description states.

## File Structure

```
src/components/F0AiProposalCard/
├── F0AiProposalCard.tsx
├── F0AiProposalCard.types.ts
├── F0AiProposalCard.styles.ts
├── F0AiProposalCard.md
└── index.ts
```
